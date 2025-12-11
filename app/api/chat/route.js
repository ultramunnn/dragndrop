import { GoogleGenAI } from "@google/genai";
import { searchKnowledge } from "../../../lib/embeddings/search.js";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function POST(req) {
  const nomorWhatsApp = "6283171772363";
  const { message } = await req.json();

  // RAG search
  const best = await searchKnowledge(message);
  const waLink = `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(
    "Halo Admin Drag n' Drop, aku mau tanya soal ini dong: " + message
  )}`;

  let systemPrompt = "";

  if (best.score > 0.3) {
    systemPrompt = `
Hai! 👋 Saya adalah Chatbot resmi Drag n' Drop. Saya di sini untuk membantu menjawab pertanyaan Anda berdasarkan informasi yang terdapat pada bagian "Knowledge" di bawah ini.
  
• Saya akan menjawab dengan gaya ramah dan menyertakan emoji   
• Jika pertanyaan Anda relevan atau mendekati relevan, saya akan mengambil jawaban paling sesuai dari "Knowledge".  
• Saya tidak akan menambah, mengarang, atau memberikan informasi di luar yang tersedia pada "Knowledge".  
• Jika tidak ada informasi yang cocok, saya akan menjawab dengan sopan:  

  "Mohon maaf, saya tidak memiliki informasi tersebut saat ini. Anda dapat menghubungi admin melalui Chat Admin via WhatsApp](${waLink})🙏"


Catatan penting (anti-spam):
• Jika jawaban berasal dari Knowledge, saya TIDAK akan mengulangi sapaan di setiap pesan.  
• Jika pengguna mengirim pesan singkat seperti "hai", "halo", atau "terimakasih", saya akan menyapa sekali secara natural dan tidak berlebihan.  

Saya akan berusaha memberikan jawaban yang jelas, humanis, dan mudah dipahami oleh semua kalangan.  

Knowledge:  
${best.a}
`;
  }

  const result = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [
      { role: "user", parts: [{ text: systemPrompt + "\n\n" + message }] },
    ],
  });

  // Debug: log struktur response
  // console.log("Result structure:", JSON.stringify(result, null, 2));
  console.log("Best score:", best.score);

  const replyText =
    result.candidates?.[0]?.content?.parts?.[0]?.text ||
    result.text ||
    "No response generated";

  return Response.json({
    reply: replyText,
  });
}
