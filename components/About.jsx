"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-warna3 py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 scroll-pt-20 overflow-hidden"
    >
      {/* Judul */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-center max-w-2xl mb-12 sm:mb-14 md:mb-16 lg:mb-20 px-4"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-4 sm:mb-5 text-white">
          Tentang Kami
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-stone-200">
          Siap Membawa Ide Anda ke Dunia Digital
        </p>
      </motion.div>

      {/* Grid konten */}
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center px-4 sm:px-6">
        {/* Gambar */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex justify-center relative w-full max-w-md lg:max-w-lg aspect-[4/3] mx-auto"
        >
          <div className="absolute inset-0 translate-x-3 translate-y-3 z-10 rounded-xl overflow-hidden">
            <Image
              src="/tentang.png"
              alt="Rectangle Background"
              fill
              className="object-cover rounded-xl"
            />
          </div>
          <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl relative">
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
          className="text-white text-center lg:text-left px-2 sm:px-4 md:px-6 lg:px-8"
        >
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-stone-300 text-justify">
            <span className="block mb-4">
              <strong>Drag n' Drop</strong> adalah jasa profesional di bidang
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
