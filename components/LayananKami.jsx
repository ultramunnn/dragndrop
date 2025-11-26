"use client";

import React from "react";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

const LayananKami = () => {
  const servicesData = [
    {
      title: "UI/UX Design",
      description:
        "Kami merancang pengalaman pengguna (UX) dan antarmuka (UI) yang modern, intuitif, dan mudah digunakan.",
      imageUrl: "/uix.png",
    },
    {
      title: "Desain Grafis",
      description:
        "Mulai dari identitas visual, poster, banner, hingga kebutuhan digital branding lainnya.",
      imageUrl: "/desain.png",
    },
    {
      title: "Website",
      description:
        "Kami membangun website yang responsif, cepat, dan siap digunakan untuk mendukung bisnis Anda.",
      imageUrl: "/web.png",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="service" className="w-full py-16 sm:py-20 md:py-24 lg:py-32 bg-warna3 scroll-pt-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl">
        {/* Judul Utama Section */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full text-center text-warna1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-['Poppins'] mb-12 sm:mb-14 md:mb-16 lg:mb-20"
        >
          Layanan Kami
        </motion.h2>

        {/* Kontainer dengan animasi stagger */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-wrap justify-center items-stretch gap-6 sm:gap-8 md:gap-10 lg:gap-12"
        >
          {servicesData.map((service, index) => (
            <motion.div key={index} variants={cardVariants}>
              <ServiceCard
                title={service.title}
                description={service.description}
                imageUrl={service.imageUrl}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LayananKami;
