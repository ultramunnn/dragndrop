import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function embedText(text) {
  const result = await ai.models.embedContent({
    model: "text-embedding-004",
    contents: text,
  });

  return result.embeddings;
}
