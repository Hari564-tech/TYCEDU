-- SwarVidya production foundation
-- Run this file in Supabase SQL Editor after creating a new project.
-- No student PII is required for the learning experience.

create extension if not exists pgcrypto;

do $$ begin
  create type public.app_role as enum ('student','teacher','admin');
exception when duplicate_object then null; end $$;

create table if not exists public.schools (
  id uuid primary key default gen_random_uuid(),
  school_name text not null,
  udise_code text unique,
  district text not null,
  mandal text,
  management text,
  source_name text default 'School supplied / verified by administrator',
  source_year text,
  created_at timestamptz not null default now()
);

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  role public.app_role not null default 'student',
  grade smallint check (grade between 6 and 10),
  preferred_medium text not null default 'en' check (preferred_medium in ('te','en','ur')),
  district text,
  school_id uuid references public.schools(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.classrooms (
  id uuid primary key default gen_random_uuid(),
  school_id uuid references public.schools(id) on delete set null,
  teacher_id uuid not null references public.profiles(id) on delete cascade,
  grade smallint not null check (grade between 6 and 10),
  section text,
  academic_year text not null,
  join_code text not null unique,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.classroom_members (
  classroom_id uuid not null references public.classrooms(id) on delete cascade,
  student_id uuid not null references public.profiles(id) on delete cascade,
  joined_at timestamptz not null default now(),
  primary key (classroom_id, student_id)
);

create table if not exists public.curriculum_books (
  id text primary key,
  grade smallint not null check (grade between 6 and 10),
  subject text not null,
  title text not null,
  medium text not null check (medium in ('te','en','ur','te-en')),
  note text,
  source text not null,
  source_url text not null,
  download_url text not null,
  chapter_status text not null default 'not-yet-extracted',
  verified_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.lessons (
  id uuid primary key default gen_random_uuid(),
  book_id text references public.curriculum_books(id) on delete set null,
  grade smallint not null check (grade between 6 and 10),
  subject text not null,
  chapter_number text,
  chapter_title text not null,
  language text not null check (language in ('te','en','ur')),
  explanation text not null,
  learning_objectives jsonb not null default '[]'::jsonb,
  source_page_start integer,
  source_page_end integer,
  review_status text not null default 'draft' check (review_status in ('draft','teacher-reviewed','published','archived')),
  author_id uuid references public.profiles(id) on delete set null,
  reviewer_id uuid references public.profiles(id) on delete set null,
  reviewed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.lesson_questions (
  id uuid primary key default gen_random_uuid(),
  lesson_id uuid not null references public.lessons(id) on delete cascade,
  language text not null check (language in ('te','en','ur')),
  question text not null,
  options jsonb not null,
  correct_option smallint not null,
  explanation text not null,
  difficulty text not null default 'practice' check (difficulty in ('practice','standard','challenge')),
  created_at timestamptz not null default now(),
  check (jsonb_typeof(options) = 'array' and jsonb_array_length(options) >= 2),
  check (correct_option >= 0 and correct_option < jsonb_array_length(options))
);

create table if not exists public.practice_attempts (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.profiles(id) on delete cascade,
  classroom_id uuid references public.classrooms(id) on delete set null,
  lesson_id uuid references public.lessons(id) on delete set null,
  question_id uuid references public.lesson_questions(id) on delete set null,
  is_correct boolean not null,
  response_index smallint,
  duration_ms integer check (duration_ms is null or duration_ms between 0 and 3600000),
  created_at timestamptz not null default now()
);

create index if not exists idx_books_grade_subject on public.curriculum_books(grade, subject);
create index if not exists idx_lessons_grade_subject_status on public.lessons(grade, subject, review_status);
create index if not exists idx_attempts_student_created on public.practice_attempts(student_id, created_at desc);
create index if not exists idx_members_student on public.classroom_members(student_id);

create or replace function public.current_app_role()
returns text language sql stable security definer set search_path = public
as $$ select role::text from public.profiles where id = auth.uid() $$;

create or replace function public.is_class_teacher(target_classroom uuid)
returns boolean language sql stable security definer set search_path = public
as $$ select exists(select 1 from public.classrooms c where c.id = target_classroom and c.teacher_id = auth.uid()) $$;

create or replace function public.is_student_in_class(target_classroom uuid)
returns boolean language sql stable security definer set search_path = public
as $$ select exists(select 1 from public.classroom_members m where m.classroom_id = target_classroom and m.student_id = auth.uid()) $$;

create or replace function public.is_teacher_of_student(target_student uuid)
returns boolean language sql stable security definer set search_path = public
as $$ select exists(select 1 from public.classrooms c join public.classroom_members m on m.classroom_id=c.id where c.teacher_id=auth.uid() and m.student_id=target_student) $$;

create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public
as $$
begin
  insert into public.profiles(id, display_name, role)
  values (new.id, nullif(new.raw_user_meta_data->>'display_name',''), 'student')
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users
for each row execute procedure public.handle_new_user();

alter table public.schools enable row level security;
alter table public.profiles enable row level security;
alter table public.classrooms enable row level security;
alter table public.classroom_members enable row level security;
alter table public.curriculum_books enable row level security;
alter table public.lessons enable row level security;
alter table public.lesson_questions enable row level security;
alter table public.practice_attempts enable row level security;

create policy "schools readable to signed in users" on public.schools for select to authenticated using (true);
create policy "profile owner reads own profile" on public.profiles for select to authenticated using (id=auth.uid() or public.is_teacher_of_student(id) or public.current_app_role()='admin');
create policy "profile owner updates safe fields" on public.profiles for update to authenticated using (id=auth.uid()) with check (id=auth.uid() and role=public.current_app_role());
create policy "teachers read their classrooms" on public.classrooms for select to authenticated using (teacher_id=auth.uid() or public.is_student_in_class(id) or public.current_app_role()='admin');
create policy "teachers create classrooms" on public.classrooms for insert to authenticated with check (teacher_id=auth.uid() and public.current_app_role() in ('teacher','admin'));
create policy "teachers update their classrooms" on public.classrooms for update to authenticated using (teacher_id=auth.uid() or public.current_app_role()='admin') with check (teacher_id=auth.uid() or public.current_app_role()='admin');
create policy "members see their membership" on public.classroom_members for select to authenticated using (student_id=auth.uid() or public.is_class_teacher(classroom_id) or public.current_app_role()='admin');
create policy "teachers manage classroom membership" on public.classroom_members for all to authenticated using (public.is_class_teacher(classroom_id) or public.current_app_role()='admin') with check (public.is_class_teacher(classroom_id) or public.current_app_role()='admin');
create policy "official catalogue is readable" on public.curriculum_books for select to anon, authenticated using (true);
create policy "admin manages catalogue" on public.curriculum_books for all to authenticated using (public.current_app_role()='admin') with check (public.current_app_role()='admin');
create policy "published lessons are readable" on public.lessons for select to anon, authenticated using (review_status='published' or author_id=auth.uid() or public.current_app_role() in ('teacher','admin'));
create policy "teachers author lessons" on public.lessons for insert to authenticated with check (author_id=auth.uid() and public.current_app_role() in ('teacher','admin'));
create policy "authors and admins update lessons" on public.lessons for update to authenticated using (author_id=auth.uid() or public.current_app_role()='admin') with check (author_id=auth.uid() or public.current_app_role()='admin');
create policy "questions follow lesson visibility" on public.lesson_questions for select to anon, authenticated using (exists(select 1 from public.lessons l where l.id=lesson_id and (l.review_status='published' or l.author_id=auth.uid() or public.current_app_role() in ('teacher','admin'))));
create policy "teachers manage lesson questions" on public.lesson_questions for all to authenticated using (exists(select 1 from public.lessons l where l.id=lesson_id and (l.author_id=auth.uid() or public.current_app_role()='admin'))) with check (exists(select 1 from public.lessons l where l.id=lesson_id and (l.author_id=auth.uid() or public.current_app_role()='admin')));
create policy "students read own attempts" on public.practice_attempts for select to authenticated using (student_id=auth.uid() or public.is_teacher_of_student(student_id) or public.current_app_role()='admin');
create policy "students insert own attempts" on public.practice_attempts for insert to authenticated with check (student_id=auth.uid() and (classroom_id is null or public.is_student_in_class(classroom_id)));

-- Provision teacher/admin roles only through a trusted administrator or SQL editor.
-- Never let a browser client promote itself by updating profiles.role.
