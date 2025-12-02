import { embedText } from "./embed.js";
import { knowledgeBase } from "../knowledge/index.js";
// format: [{ q: "...", a: "...", embedding: [..] }]

function cosineSimilarity(a, b) {
  // Validate inputs
  if (
    !Array.isArray(a) ||
    !Array.isArray(b) ||
    a.length === 0 ||
    b.length === 0
  ) {
    return 0;
  }

  // Handle mismatched lengths
  const length = Math.min(a.length, b.length);

  const dot = a.reduce((sum, x, i) => sum + (i < length ? x * b[i] : 0), 0);
  const magA = Math.sqrt(a.reduce((sum, x) => sum + x * x, 0));
  const magB = Math.sqrt(b.reduce((sum, x) => sum + x * x, 0));

  return magA === 0 || magB === 0 ? 0 : dot / (magA * magB);
}

export async function searchKnowledge(query) {
  const queryEmbedding = await embedText(query);

  // Validate query embedding
  if (!Array.isArray(queryEmbedding) || queryEmbedding.length === 0) {
    return { score: 0, q: "Error", a: "Could not process query" };
  }

  let best = { score: 0, q: "", a: "" };

  for (const item of knowledgeBase) {
    
    // Validate item embedding
    if (!item || !Array.isArray(item.embedding)) continue;

    const score = cosineSimilarity(queryEmbedding, item.embedding);
    if (score > best.score) best = { ...item, score };
  }

  return best;
}
