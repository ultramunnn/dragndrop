// lib/embeddings/embed.js
import { GoogleGenAI } from "@google/genai";

export async function embedText(text) {
  try {
    if (!process.env.API_KEY) {
      throw new Error("API_KEY tidak ditemukan");
    }

    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const result = await ai.models.embedContent({
      model: "text-embedding-004",
      contents: [
        {
          role: "user",
          parts: [{ text: text }]
        }
      ],
    });

    // --- BAGIAN DEBUG ---
    // Jika gagal, kita bisa lihat struktur aslinya di terminal
    if (!result.embedding && !result.embeddings) {
        console.log("🔍 DEBUG RESPONSE:", JSON.stringify(result, null, 2));
    }

    // --- PERBAIKAN PENGAMBILAN DATA ---
    // Coba ambil dari berbagai kemungkinan properti SDK
    const values = result.embedding?.values || result.embeddings?.[0]?.values;

    return values || [];
    
  } catch (error) {
    console.error("❌ Error API:", error.message);
    return [];
  }
}