// lib/embeddings/search.js

// --- PERBAIKAN PENTING: Load file yang sudah berisi embedding ---
// Asumsikan kamu mengimpor data yang sudah diproses di generateEmbeddings.js
import process from "../knowledge/processedKnowledge.json";
import { embedText } from "./embed.js";

// Fungsi cosineSimilarity kamu sudah benar
function cosineSimilarity(a, b) {
  if (
    !Array.isArray(a) ||
    !Array.isArray(b) ||
    a.length === 0 ||
    b.length === 0
  ) {
    return 0;
  }
  const length = Math.min(a.length, b.length);
  const dot = a.reduce((sum, x, i) => sum + (i < length ? x * b[i] : 0), 0);
  const magA = Math.sqrt(a.reduce((sum, x) => sum + x * x, 0));
  const magB = Math.sqrt(b.reduce((sum, x) => sum + x * x, 0));

  return magA === 0 || magB === 0 ? 0 : dot / (magA * magB);
}

export async function searchKnowledge(query) {
  // Pastikan properti queryEmbedding berisi array of numbers
  const queryEmbedding = await embedText(query);

  if (!Array.isArray(queryEmbedding) || queryEmbedding.length === 0) {
    // Jika gagal embed, kembalikan skor 0
    return { score: 0, q: "Error", a: "Could not process query" };
  }

  let best = { score: 0, q: "", a: "" };

  for (const item of process) {
    // Iterasi data yang sudah ber-embedding

    // Validasi: pastikan item memiliki embedding yang valid
    if (!item || !Array.isArray(item.embedding) || item.embedding.length === 0)
      continue;

    const score = cosineSimilarity(queryEmbedding, item.embedding);
    if (score > best.score) best = { ...item, score };
  }

  return best;
}
