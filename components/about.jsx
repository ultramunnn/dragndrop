"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex flex-col items-center bg-warna3 py-32 px-4 sm:px-6 scroll-pt-32"
    >
      {/* Judul */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }} // animasi jalan lagi kalau masuk viewport
        className="text-center max-w-xl mb-12 sm:mb-16 px-4"
      >
        <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold font-poppins mb-3 text-white">
          Tentang Kami
        </h2>
        <p className="text-base sm:text-sm font-medium text-stone-200">
          Siap Membawa Ide Anda ke Dunia Digital
        </p>
      </motion.div>

      {/* Grid konten */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-2 items-center px-4">
        {/* Gambar */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex justify-center relative w-full max-w-[280px] sm:max-w-xs aspect-[4/3] mx-auto scale-95 sm:scale-100"
        >
          <div className="absolute inset-0 translate-x-2 translate-y-2 z-10 rounded-lg overflow-hidden">
            <Image
              src="/tentang.png"
              alt="Rectangle Background"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="w-full h-full rounded-lg overflow-hidden shadow-lg relative">
            <Image
              src="/rectangle.png"
              alt="About Drag n' Drop"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Teks */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-white text-center md:text-left px-4 sm:px-6 md:px-20 mt-6 md:mt-0"
        >
          <p className="text-sm sm:text-base md:text-sm leading-relaxed text-stone-300 text-justify">
            <span className="block mb-4">
              <strong>Drag n’ Drop</strong> adalah jasa profesional di bidang
              desain dan pembuatan website yang fokus membantu individu, UMKM,
              dan startup mewujudkan kehadiran digital mereka dengan mudah dan
              cepat. Kami percaya bahwa setiap ide dapat dan berhak diwujudkan
              menjadi website yang menarik, fungsional, dan siap pakai.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
