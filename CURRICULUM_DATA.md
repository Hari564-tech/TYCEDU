# Andhra Pradesh curriculum catalogue — Classes 6–10

## Official sources indexed

1. [Samagra Shiksha AP — Telugu/English bilingual textbooks and workbooks](https://samagrashiksha.ap.gov.in/textBooksDownloadingPageTEBilingual)
2. [Samagra Shiksha AP — title-wise textbook catalogue](https://samagrashiksha.ap.gov.in/textBooksDownloadingPagetitleWise)
3. [Commissioner of School Education AP — title-wise textbook catalogue](https://cse.ap.gov.in/textBooksDownloadingPagetitleWise)
4. [UDISE+](https://www.udiseplus.gov.in/) is used for public school-system statistics only, not student-level records.

The portal currently exposes a 2024–25 bilingual textbook listing and title-wise books. The repository catalogue preserves the official book titles/file names and links back to the government portal. Urdu-labelled book entries are included where the government portal lists them for the grade and subject. The availability of a particular medium varies by book; the app must not imply every title exists in every medium.

## What is in the application\n\nThe catalogue seed contains **87 book-listing records** across Classes 6–10. These are metadata records, not 87 extracted chapters.

- Classes 6, 7, 8, 9 and 10.
- Official book listing metadata for the subjects and media visible in the government catalogue.
- Direct government-hosted download URLs generated from the official portal's linked book paths.
- Telugu, English and Urdu voice-language settings.
- A small set of clearly labelled supplementary practice explanations/questions to exercise the prototype learning loop.

## Important content boundary

This is a **textbook catalogue**, not yet a complete official chapter/lesson database. The government portal's PDF endpoints were not consistently retrievable during this integration, so chapter names, page ranges, official learning outcomes and question banks have deliberately not been invented. Every catalogue entry remains marked `not-yet-extracted`.

Before calling a lesson "AP SCERT official" or publishing it to students, the source PDF must be obtained, its chapter index extracted, its edition/year checked, and the student-friendly explanation and translation reviewed by a qualified teacher. Keep source page references and reviewer details in the `lessons` table.

## Language policy

- `te`: Telugu
- `en`: English
- `ur`: Urdu

Voice language is a learner preference and may differ from the textbook medium. A spoken translation is not itself an official textbook edition.

## Refresh process

1. Check the official catalogue pages for a new academic-year edition.
2. Review each book's title, medium, file link and publication year.
3. Download/inspect the official PDF and extract only the metadata and chapter references needed for the lesson index.
4. Check reuse permissions and attribution requirements before storing or redistributing PDF content.
5. Create draft lessons with page references.
6. Have an AP school teacher review each language version before publishing.
7. Run `npm run seed:curriculum` with server-side service-role credentials to upsert the book catalogue.

Do not commit a Supabase service-role key or OpenAI API key.
