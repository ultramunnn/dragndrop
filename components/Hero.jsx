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
        className="absolute top-[25%] sm:top-[30%] left-4 right-4 sm:left-6 sm:right-6 md:left-12 lg:left-20 md:right-auto max-w-xl lg:max-w-3xl px-4 sm:px-6 py-6 text-left"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-['Maven_Pro'] text-warna2 leading-tight sm:leading-snug drop-shadow-lg mb-4 sm:mb-6">
          Drag n' Drop Jasa Desain & Pembuatan Website Profesional
        </h1>
        <p className="mt-3 sm:mt-4 mb-6 sm:mb-8 text-base sm:text-lg md:text-xl lg:text-2xl font-Poppins text-white leading-relaxed">
          Kami menangani <span className="font-bold">desain</span> dan{" "}
          <span className="font-bold">pengembangan website</span> dengan cepat,
          kreatif, dan hasil siap pakai.
        </p>
        <motion.a
          className="mt-4 sm:mt-6 bg-blue-950 hover:bg-blue-900 text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg rounded-lg font-poppins font-medium transition inline-block text-center shadow-lg"
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
