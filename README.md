# SwarVidya — Voice-first learning companion

A mobile-first learning experience for Andhra Pradesh school students in Classes 6–10. Students can explore an official textbook catalogue, ask questions by voice or text, listen to explanations, and practise short questions.

## Current release scope

- Classes 6–10.
- Telugu, English and Urdu voice-language preferences.
- Official AP government textbook catalogue metadata and government-hosted source links.
- Student learning settings: class, medium, preferred voice language, district, school name (optional), academic year.
- Student learning views, subject discovery, textbook library, practice and progress.
- Browser speech recognition and speech synthesis where supported, with text fallback.
- Optional server-side AI tutor endpoint. It is explicitly labelled as an AI study aid and is **not yet grounded to extracted AP textbook chapters**.
- Supabase schema with row-level security, school/classroom/teacher/student foundations, lesson review workflow and practice-attempt storage.
- Local-first mode works without API keys; profile and practice remain on the current device.

## Run locally

Requirements: Node.js 20+.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open the local Vite URL.

Production build and source checks:

```bash
npm run verify
npm run build
npm run preview
```

The GitHub Actions workflow runs the verification checks before the Vite production build on pushes to `main` and pull requests.

## Environment variables

Set these in Vercel Project Settings → Environment Variables:

- `VITE_SUPABASE_URL` — Supabase project URL.
- `VITE_SUPABASE_ANON_KEY` — Supabase anon/publishable key. Row-level security must be enabled.
- `OPENAI_API_KEY` — server-only OpenAI key for `/api/tutor`.
- `OPENAI_MODEL` — optional model name (defaults to `gpt-4o-mini`).

For one-time curriculum seeding only, set `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` in a secure local shell. Never use the service-role key in browser variables or commit it.

## Supabase setup

1. Create a Supabase project.
2. Open SQL Editor and run [database/schema.sql](database/schema.sql).
3. Add the public project URL and anon key to Vercel environment variables.
4. Run the curriculum seed script from a secure local environment:

```bash
SUPABASE_URL="..." SUPABASE_SERVICE_ROLE_KEY="..." npm run seed:curriculum
```

5. Provision teacher/admin roles through a trusted administrator. The browser cannot promote a profile to teacher/admin.
6. Set up school/classroom membership through a protected staff workflow before enabling shared analytics.

Teacher email magic-link sign-in is available after Supabase is configured; a trusted administrator must provision teacher/admin roles. The application does not currently create student accounts or join classrooms. This is intentional until school onboarding, guardian/school consent and child-data handling have been agreed.

## Curriculum source, copyright and content status

See [CURRICULUM_DATA.md](CURRICULUM_DATA.md). The current official source catalogue indexes 87 government-listed books. The AP Department copyright policy restricts copying, adaptation and redistribution without written permission, so SwarVidya links to the official portal and does not host textbook PDFs. Chapter titles and lesson text have **not** been claimed as official. Obtain written permission before importing or adapting textbook content, then have each language version teacher-reviewed.

## Security and child privacy

- No Aadhaar, date of birth, home address or student phone number is requested.
- Voice is processed by the browser speech service when supported; the prototype does not record audio files.
- The AI endpoint sends only the learner's question and class/medium context to the configured provider; it does not store prompts.
- Rate limiting, school consent, data retention, deletion workflow and security review are required before a public school rollout.
- Supabase service-role and OpenAI keys must remain server-side.
- Supabase RLS is included in the SQL foundation; test policies with student, teacher, admin and anonymous roles before enabling production data.

## Release readiness checklist

- [ ] Create Supabase project and run schema.
- [ ] Add Vercel environment variables.
- [ ] Seed the textbook catalogue.
- [ ] Obtain/inspect current academic-year AP textbook PDFs and verify edition changes.
- [ ] Extract official chapter index, page references and learning outcomes.
- [ ] Teacher-review Telugu, English and Urdu lesson explanations and quizzes.
- [ ] Implement protected school onboarding and teacher invitations.
- [ ] Test RLS, access control, deletion and data retention.
- [ ] Add API rate limiting and abuse monitoring.
- [ ] Test speech support on representative low-cost Android devices and browsers.
- [ ] Complete school/guardian consent and child-safety review.
- [ ] Run end-to-end tests and a school pilot before general availability.

This repository is a production-oriented release candidate foundation, not a claim that all chapter content or school integrations are already live.
