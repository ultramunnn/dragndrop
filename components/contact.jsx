"use client";

import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  // Variants untuk animasi stagger
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-warna1 py-32 px-10 md:px-20 flex flex-col items-center"
    >
      {/* Judul */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-2xl sm:text-2xl md:text-3xl font-bold font-poppins text-center text-black leading-snug"
      >
        Mari Mulai Proyek Anda Bersama Kami
      </motion.h2>

      {/* Info Kontak */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: false, amount: 0.3 }}
        className="mt-12 w-full max-w-xl bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-6 md:p-10"
      >
        <motion.h3
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-xl font-semibold text-gray-900 mb-4 text-center md:text-left"
        >
          Hubungi Kami
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-gray-700 leading-relaxed mb-6 text-center md:text-left"
        >
          Kami siap membantu Anda dalam mewujudkan desain dan website
          profesional. Jangan ragu untuk menghubungi kami melalui kontak di
          bawah ini.
        </motion.p>

        {/* List kontak dengan animasi stagger */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="space-y-3 text-gray-800"
        >
          <motion.p variants={itemVariants}>
            📍 Alamat: Jl. Veteran, Universitas Brawijaya, Malang
          </motion.p>
          <motion.p variants={itemVariants}>
            📧 Email: support@dragnDrop.com
          </motion.p>
          <motion.p variants={itemVariants}>
            📞 Telepon: +62 812-3456-7890
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
