const express = require("express");
const path = require("path");
const fetch = require("node-fetch");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  if (!userMessage || !userMessage.trim()) {
    return res.json({ reply: "Please type something." });
  }

  // ✅ Premium simple prompt
  const prompt = `
You are ORBIT, a helpful AI assistant.
Answer questions clearly and naturally.
Solve math and numerical problems correctly.
Keep responses concise and professional.

User message:
${userMessage}

Answer:
`;

  try {
    const ollamaRes = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "gemma:2b",
        prompt,
        stream: false
      })
    });

    const data = await ollamaRes.json();
    const reply = (data.response || "").trim();

    return res.json({ reply });
  } catch (err) {
    console.error(err);
    return res.json({ reply: "Sorry, I couldn’t respond right now." });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Orbit running at http://localhost:${PORT}`);
});
