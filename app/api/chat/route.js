import { GoogleGenAI } from "@google/genai";
import { searchKnowledge } from "../../../lib/embeddings/search.js";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function POST(req) {
  const { message } = await req.json();

  // RAG search
  const best = await searchKnowledge(message);

  let systemPrompt = "";

  if (best.score > 0.8) {
    systemPrompt = `Gunakan knowledge berikut untuk menjawab secara akurat:\n\n${best.a}`;
  } else {
    systemPrompt = `Jawablah dengan sopan tentang layanan Drag n' Drop.`;
  }

  const result = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: [
      { role: "user", parts: [{ text: systemPrompt + "\n\n" + message }] },
    ],
  });

  // Debug: log struktur response
  console.log("Result structure:", JSON.stringify(result, null, 2));

  const replyText =
    result.candidates?.[0]?.content?.parts?.[0]?.text ||
    result.text ||
    "No response generated";

  return Response.json({
    reply: replyText,
  });
}
