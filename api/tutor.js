export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return res.status(503).json({ error: "Tutor service is not configured" });
  const body = req.body || {};
  const question = typeof body.question === "string" ? body.question.trim() : "";
  if (!question || question.length > 1200) return res.status(400).json({ error: "Enter a question under 1,200 characters." });
  const grade = Math.min(10, Math.max(6, Number(body.grade) || 8));
  const medium = ["te", "en", "ur"].includes(body.medium) ? body.medium : "en";
  const languageNames = { te: "Telugu", en: "English", ur: "Urdu" };
  const model = process.env.OPENAI_MODEL || "gpt-4o-mini";
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: { "Authorization": `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model,
        temperature: 0.25,
        max_tokens: 450,
        messages: [
          { role: "system", content: `You are SwarVidya, a patient learning companion for Andhra Pradesh school students in Class ${grade}. Explain in ${languageNames[medium]}. Use age-appropriate simple language, short paragraphs, one relatable example, and one short check-for-understanding question. Never shame a learner. Do not claim an answer comes from an official Andhra Pradesh textbook unless its actual approved chapter text is supplied in the prompt. If uncertain, say so and suggest asking the teacher. Do not ask for or repeat personal information. Do not provide dangerous instructions. Return only the explanation, no markdown heading.` },
          { role: "user", content: question }
        ]
      })
    });
    const data = await response.json();
    if (!response.ok) {
      console.error("Tutor provider error", response.status);
      return res.status(502).json({ error: "The tutor service could not answer right now." });
    }
    const answer = data.choices?.[0]?.message?.content?.trim();
    if (!answer) return res.status(502).json({ error: "No explanation was returned." });
    res.setHeader("Cache-Control", "no-store");
    return res.status(200).json({ answer, model, groundedToOfficialChapter: false });
  } catch (error) {
    console.error("Tutor request failed", error?.message || "unknown");
    return res.status(502).json({ error: "The tutor service is temporarily unavailable." });
  }
}
