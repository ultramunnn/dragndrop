"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  // once:false => bisa animasi lagi saat muncul
  // amount:0.3 => minimal 30% masuk viewport baru trigger

  return (
    <div
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      id="home"
      ref={ref}
    >
      {/* Background Image */}
      <Image
        src="/hero.png"
        alt="Hero Background"
        fill
        className="object-cover -z-10"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 from-70% via-transparent via-80% to-warna3 to-100% -z-10" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute top-[30%] left-5 right-5 md:left-20 md:right-auto max-w-2xl px-4 py-6 text-left"
      >
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold font-['Maven_Pro'] text-warna2 leading-snug drop-shadow-lg">
          Drag n’ Drop – Jasa Desain & Pembuatan Website Profesional
        </h1>
        <p className="mt-4 mb-9 text-sm sm:text-base md:text-lg font-poppins text-white leading-relaxed drop-shadow">
          Kami menangani <span className="font-bold">desain</span> dan{" "}
          <span className="font-bold">pengembangan website</span> dengan cepat,
          kreatif, dan hasil siap pakai.
        </p>
        <motion.a
          className="mt-6 sm:mt-8 bg-blue-950 hover:bg-blue-900 text-white px-5 py-2 sm:px-6 sm:py-3 rounded-lg font-poppins font-medium transition inline-block text-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          href="https://wa.me/6283171772363?text=Halo%20saya%20ingin%20memesan%20jasa%20desain%20dan%20website."
          target="_blank"
          rel="noopener noreferrer"
        >
          Pesan Sekarang
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Hero;
