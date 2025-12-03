// lib/embeddings/generateEmbeddings.js

import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import * as fs from 'fs';

// Setup Path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env dari Root Project (Mundur 2 langkah: embeddings -> lib -> root)
const envPath = path.resolve(__dirname, '../../.env');
dotenv.config({ path: envPath });

import { knowledgeBase } from '../knowledge/index.js'; // Mundur ke lib -> knowledge
import { embedText } from './embed.js'; 

async function processKnowledgeBase() {
  if (!process.env.API_KEY) {
    console.error("❌ API_KEY kosong. Cek file .env di root project.");
    process.exit(1);
  }

  const processedKnowledge = [];
  console.log("🚀 Memulai proses embedding...");
  
  for (const item of knowledgeBase) {
    // Kita coba embed teksnya
    const embedding = await embedText(item.q);
    
    if (Array.isArray(embedding) && embedding.length > 0) {
        processedKnowledge.push({
            ...item,
            embedding: embedding 
        });
        console.log(`✅ OK: ${item.q.substring(0, 25)}...`);
    } else {
        console.error(`⚠️ GAGAL: ${item.q} (Cek log DEBUG di atas)`);
    }
  }

  // --- PERBAIKAN UTAMA DI SINI ---
  // Target: folder 'knowledge' yang ada di sebelah folder 'embeddings' (di dalam lib)
  // Jadi mundur 1 langkah (../)
  const outputDir = path.resolve(__dirname, '../knowledge');
  const outputPath = path.join(outputDir, 'processedKnowledge.json');

  // Pastikan folder tujuan ada. Jika tidak, buat dulu.
  if (!fs.existsSync(outputDir)){
      console.log(`📂 Membuat folder: ${outputDir}`);
      fs.mkdirSync(outputDir, { recursive: true });
  }
  
  fs.writeFileSync(
    outputPath,
    JSON.stringify(processedKnowledge, null, 2)
  );

  console.log(`\n🎉 Selesai! File disimpan di:\n${outputPath}`);
}

processKnowledgeBase().catch(console.error);