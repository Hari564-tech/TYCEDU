# Andhra Pradesh curriculum catalogue — Classes 6–10

## Official sources

1. [Samagra Shiksha AP — Telugu/English bilingual textbooks and workbooks](https://samagrashiksha.ap.gov.in/textBooksDownloadingPageTEBilingual)
2. [Samagra Shiksha AP — title-wise textbook catalogue](https://samagrashiksha.ap.gov.in/textBooksDownloadingPagetitleWise)
3. [Commissioner of School Education AP — title-wise textbook catalogue](https://cse.ap.gov.in/textBooksDownloadingPagetitleWise)
4. [UDISE+](https://www.udiseplus.gov.in/) — national school education statistics.
5. [Government of India NIC — Andhra Pradesh district directory](https://igod.gov.in/sg/AP/E042/organizations)

The settings form includes the 28 current districts listed by the Government of India NIC directory, including Markapuram and Polavaram.

## Catalogue coverage in SwarVidya

The repository contains **87 textbook-listing metadata records** across Classes 6–10. They are grouped by class, subject and the medium labels visible on the official catalogue. Telugu, English and Urdu filters are available, but not every book is published in every medium.

The official portal's bilingual textbook page is labelled 2024–25. The title-wise catalogue may contain entries with differing publication years; the app does not claim that every listed book is the latest 2026–27 edition. Verify the edition with the department before using it as the current school textbook.

The app links learners to the official catalogue page. It does not host or redistribute the textbook PDFs.

## Andhra Pradesh education snapshot

The teacher view displays the following statewide UDISE+ 2025–26 aggregates:

- Total schools across all managements: **60,843**
- Total student enrolment across all managements: **8,437,049**
- Government-school student enrolment: **3,493,450**

These are state-level statistics, not a live feed and not an individual school directory. SwarVidya has not imported individual school records or student-level UDISE data. The district and school-name settings are currently user-entered profile preferences.

Sources: [PIB — total schools, UDISE+ 2025–26](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2291272&lang=1&reg=1); [UDISE+ 2025–26 reports](https://www.udiseplus.gov.in/).

## Copyright and reuse boundary

The AP Department of School Education copyright policy states that site content must not be duplicated, copied, modified, adapted, redistributed or published without written permission. Individual textbook front matter also reserves reproduction rights to the Commissioner of School Education. SwarVidya therefore links to the official portal and does not host or reproduce the textbook PDFs.

Obtain written permission before embedding government catalogue content in a commercial product, importing chapter text, translating or adapting textbook content, or publishing derived lesson packs. See the [AP Department copyright policy](https://cse.ap.gov.in/copyrightPolicy).

## Lesson and chapter status

This is a **textbook catalogue**, not yet a complete official chapter/lesson database. The government PDF endpoints could not be consistently retrieved during this integration, and the department's reuse restrictions must be respected. Therefore chapter titles, page ranges, official learning outcomes and question banks have deliberately not been invented. Every catalogue entry remains marked `not-yet-extracted`.

The app includes ten short practice questions and three sample explanations in Telugu, English and Urdu. These are clearly labelled supplementary learning aids, not official textbook extracts or teacher-approved AP SCERT lessons.

Before publishing an AP curriculum-aligned lesson:
1. Confirm the exact academic-year edition and textbook medium.
2. Secure written permission for the intended use of textbook material.
3. Create original, age-appropriate explanations and questions with clear source references.
4. Have qualified AP teachers review each Telugu, English and Urdu version.
5. Record source page references, reviewer and approval status in the lessons database.

## Language policy

- `te`: Telugu
- `en`: English
- `ur`: Urdu

Voice language is a learner preference and may differ from the textbook medium. A spoken translation is not itself an official textbook edition.

## Refresh process

1. Check the official catalogue pages for new academic-year editions.
2. Verify title, subject, medium, publication year and source link.
3. Obtain written permission before importing or adapting textbook content.
4. Create draft lessons with source references and teacher review.
5. Run `npm run seed:curriculum` with server-side service-role credentials to upsert the textbook catalogue.

Never commit a Supabase service-role key or OpenAI API key.
