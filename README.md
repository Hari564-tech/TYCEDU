# SwarVidya — Voice-First Learning Companion

A mobile-first learning prototype for Indian school students (Classes 6–10). Students can ask doubts, hear simple explanations, practise with quick quizzes, and view a lightweight teacher dashboard.

## Run locally

Requirements: Node.js 18+.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

Create a production build with `npm run build`.

## Features

- Class, subject, and language selectors (Telugu, Hindi, English)
- Browser speech recognition where supported, with typed-question fallback
- Text-to-speech playback using the browser SpeechSynthesis API
- Sample explanations for fractions, photosynthesis, the water cycle, nouns and verbs, and India's freedom movement
- Five quick practice questions with instant feedback
- Local progress and recent question history stored in `localStorage`
- Topic-wise teacher insights derived from practice attempts
- Responsive mobile layout

## Notes

This is a frontend-only demo. Speech support and available voices depend on the browser and device. Lesson answers are rule-based sample content, not a connected general-purpose AI tutor. Progress remains in the current browser profile; no student information is uploaded.

See [PITCH_DECK.md](./PITCH_DECK.md) and [DEMO_SCRIPT.md](./DEMO_SCRIPT.md) for the pitch outline and demo narration.
