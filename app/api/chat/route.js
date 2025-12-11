import { GoogleGenAI } from "@google/genai";
import { searchKnowledge } from "../../../lib/embeddings/search.js";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function POST(req) {
  let message = ""; // Deklarasi variabel di luar try agar bisa diakses di catch
  const nomorWhatsApp = "6283171772363"; // Nomor Admin

  const body = await req.json();
  message = body.message || "";

  // 1. Cari data di Knowledge Base
  const best = await searchKnowledge(message);

  // Buat Link WA (Link ini dipakai kalau AI tidak tahu jawaban)
  const waLink = `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(
    "Halo Admin Drag n' Drop, aku mau tanya soal ini dong: " + message
  )}`;

  let systemPrompt = "";

  // LOGIKA UTAMA (AI Normal)
  if (best.score > 0.3) {
    systemPrompt = `
      Kamu adalah Virtual Assistant "Drag n' Drop" yang asik, humble, dan natural.
      Tugas: Jawab pertanyaan user berdasarkan data "Knowledge" di bawah.
      
      GAYA BAHASA:
      • Gunakan bahasa Indonesia sehari-hari, santai, akrab (panggil "Kak").
      • Hindari kata kaku/baku. Gunakan emoji ✨.
      • Jika bicara harga, sampaikan dengan jelas.

      JIKA TIDAK KETEMU DI DATABASE
      Kamu asisten Drag n' Drop yang ramah.
      User bertanya: "${message}".
      Info ini TIDAK ada di data kamu.
      
      Tugas:
      1. Minta maaf dengan humble.
      2. Arahkan user chat ke Admin via WhatsApp.
      3. Kasih link ini: ${waLink}
      
      Contoh:
      "Waduh, sori banget Kak 🙏. Info itu belum ada di catatanku. Langsung tanya Admin aja ya biar jelas:
      [Chat Admin via WhatsApp](${waLink})"
      
      Knowledge Base:
      ${best.a}
      `;
  }
  console.log("Best score:", best.score);

  // Panggil Gemini AI (Gunakan model 1.5-flash agar lebih stabil)
  const result = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [
      { role: "user", parts: [{ text: systemPrompt + "\n\n Pertanyaan User: " + message }] },
    ],
  });

  try {
    const replyText =
      result.candidates?.[0]?.content?.parts?.[0]?.text ||
      result.text ||
      "Waduh, ada gangguan dikit nih Kak. Coba tanya lagi ya!";

    return Response.json({
      reply: replyText,
    });

  } catch (error) {
    console.error("Error System/Gemini:", error);

    // ——————————————————————————————————————————————————————————————
    // FALLBACK JIKA SERVER ERROR / OVERLOADED
    // Langsung kasih Link WA Admin
    // ——————————————————————————————————————————————————————————————

    // Kita buat link wa emergency (berjaga-jaga jika message kosong)
    const emergencyLink = `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(
      "Halo Admin, saya mau tanya: " + (message || "Layanan Drag n Drop")
    )}`;

    return Response.json({
      reply: `Waduh, sori banget Kak 🙏. Servernya lagi overload daripada nunggu lama, mending Kakak langsung chat Admin aja ya di sini 👇:
👉 [Hubungi Admin via WhatsApp](${emergencyLink})
Adminnya fast response kok! ✨`,
    });
  }
}