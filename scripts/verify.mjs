import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { BOOKS, PRACTICE } from "../src/curriculum.js";

const [html, main, css, sql, api] = await Promise.all([
  readFile(new URL("../index.html", import.meta.url), "utf8"),
  readFile(new URL("../src/main.js", import.meta.url), "utf8"),
  readFile(new URL("../src/style.css", import.meta.url), "utf8"),
  readFile(new URL("../database/schema.sql", import.meta.url), "utf8"),
  readFile(new URL("../api/tutor.js", import.meta.url), "utf8")
]);

assert.equal(BOOKS.length, 87, "Expected 87 AP textbook catalogue records");
assert.deepEqual([...new Set(BOOKS.map(book => book.grade))].sort(), [6, 7, 8, 9, 10], "All requested classes must be present");
assert.equal(new Set(BOOKS.map(book => book.id)).size, BOOKS.length, "Book IDs must be unique");
assert.ok(BOOKS.every(book => /^https:\/\//.test(book.downloadUrl)), "Every catalogue link must use HTTPS");

for (const [index, question] of PRACTICE.entries()) {
  for (const language of ["te", "en", "ur"]) {
    assert.ok(question.q?.[language], `Question ${index + 1} is missing ${language} text`);
    assert.ok(Array.isArray(question.opts?.[language]) && question.opts[language].length >= 2, `Question ${index + 1} is missing ${language} options`);
    assert.ok(question.why?.[language], `Question ${index + 1} is missing ${language} feedback`);
  }
  assert.ok(question.a >= 0 && question.a < question.opts.en.length, `Question ${index + 1} answer index is invalid`);
}

const ids = new Set([...html.matchAll(/\\bid="([^"]+)"/g)].map(match => match[1]));
const missing = [...new Set([...main.matchAll(/\\$\\("([^"]+)"\\)/g)].map(match => match[1]).filter(id => !ids.has(id)))];
assert.deepEqual(missing, [], `Missing HTML elements referenced by main.js: ${missing.join(", ")}`);
assert.ok(!html.includes("\\\\n  <link"), "HTML contains a literal escaped newline");
assert.ok(!css.includes("\\\\n.data-footnote"), "CSS contains a literal escaped newline");
assert.ok(!sql.includes("\\\\nreturns trigger"), "SQL contains a literal escaped newline");
assert.ok((sql.match(/\\$\\$/g) || []).length % 2 === 0, "SQL dollar-quoted function blocks must be paired");
assert.ok(sql.includes("prevent_client_role_change()"), "Profile role protection trigger is missing");
assert.ok(api.includes("AbortSignal.timeout(20000)"), "Tutor API timeout guard is missing");
assert.ok(api.includes("content-length"), "Tutor API request-size guard is missing");

console.log("SwarVidya verification passed:", {
  catalogueRecords: BOOKS.length,
  classes: 5,
  practiceQuestions: PRACTICE.length,
  learningLanguages: ["Telugu", "English", "Urdu"],
  domReferences: "valid",
  sqlRoleGuard: "present"
});
