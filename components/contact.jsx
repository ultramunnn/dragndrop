"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

const Contact = () => {
  // Variants untuk animasi stagger
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Alamat",
      content: "Jl. Veteran, Universitas Brawijaya, Malang, Jawa Timur 65145",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "support@dragnDrop.com",
      link: "sblhh.m@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telepon",
      content: "+62 812-3456-7890",
      link: "https://wa.me/6283171772363?text=Halo%20saya%20ingin%20memesan%20jasa%20desain%20dan%20website.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Jam Operasional",
      content: "Senin - Jumat: 09:00 - 17:00 WIB",
    },
  ];

  return (
    <section
      id="contact"
      className="relative w-full bg-gradient-to-b from-warna1 to-warna1/90 py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-warna2/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-warna3/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Judul */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-12 sm:mb-14 md:mb-16 lg:mb-20 px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-warna3 mb-4 sm:mb-5 md:mb-6">
            Mari Mulai Proyek Anda
          </h2>
          <div className="w-20 sm:w-24 md:w-28 h-1 bg-warna2 mx-auto mb-4 sm:mb-5 md:mb-6"></div>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            Kami siap membantu mewujudkan ide Anda menjadi kenyataan. Hubungi
            kami sekarang!
          </p>
        </motion.div>

        {/* Grid Layout - 2 Kolom */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 items-stretch">
          {/* Kolom Kiri - Info Kontak */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex"
          >
            <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 w-full flex flex-col">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-warna3 mb-4 sm:mb-5 md:mb-6 font-poppins">
                Hubungi Kami
              </h3>
              <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-6 sm:mb-7 md:mb-8 leading-relaxed">
                Kami siap membantu Anda dalam mewujudkan desain dan website
                profesional. Jangan ragu untuk menghubungi kami!
              </p>

              {/* Contact Info Cards */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="space-y-4"
              >
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group"
                  >
                    {item.link ? (
                      <a
                        href={item.link}
                        className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-warna3/5 to-transparent hover:from-warna2/10 hover:to-warna2/5 transition-all duration-300 border border-transparent hover:border-warna2/20"
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-warna2 to-warna3 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                          {item.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-warna3 mb-1 text-lg">
                            {item.title}
                          </h4>
                          <p className="text-gray-600 text-base break-words leading-relaxed">
                            {item.content}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-warna3/5 to-transparent">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-warna3 to-warna2 rounded-lg flex items-center justify-center text-white">
                          {item.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-warna3 mb-1 text-lg">
                            {item.title}
                          </h4>
                          <p className="text-gray-600 text-base break-words leading-relaxed">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Kolom Kanan - Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="h-full"
          >
            <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-3 sm:p-4 md:p-6 lg:p-8 h-full min-h-[350px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.4234234!2d112.6123!3d-7.9518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd629d0b47082a7%3A0x48e22d6b2b875f24!2sUniversitas%20Brawijaya!5e0!3m2!1sid!2sid!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "320px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                ></iframe>

                {/* Overlay untuk styling tambahan */}
                <div className="absolute inset-0 pointer-events-none border-4 border-white/20 rounded-2xl"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mt-10 sm:mt-12 md:mt-14 lg:mt-16"
        >
          <a
            href="https://wa.me/6283171772363?text=Halo%20saya%20ingin%20memesan%20jasa%20desain%20dan%20website."
            className="inline-block bg-warna3 hover:bg-blue-900 text-white font-semibold px-8 sm:px-10 md:px-12 lg:px-14 py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Kirim Pesan Sekarang
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
