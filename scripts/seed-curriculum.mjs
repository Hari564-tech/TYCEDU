import { createClient } from "@supabase/supabase-js";
import { BOOKS } from "../src/curriculum.js";

const url = process.env.SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !serviceKey) {
  console.error("Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in your local environment.");
  process.exit(1);
}
const supabase = createClient(url, serviceKey, { auth: { persistSession: false } });
const rows = BOOKS.map(book => ({
  id: book.id,
  grade: book.grade,
  subject: book.subject,
  title: book.title,
  medium: book.medium,
  note: book.note || null,
  source: book.source,
  source_url: book.sourceUrl,
  download_url: book.downloadUrl,
  chapter_status: book.chapterStatus
}));
const { error } = await supabase.from("curriculum_books").upsert(rows, { onConflict: "id" });
if (error) {
  console.error("Curriculum seed failed:", error.message);
  process.exit(1);
}
console.log(`Seeded ${rows.length} official AP textbook catalogue entries.`);
