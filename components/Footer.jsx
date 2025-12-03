"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-warna3 text-white py-6 sm:py-7 md:py-8 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center font-poppins gap-3 md:gap-0">
        {/* Logo / Brand */}
        <div className="flex items-center space-x-1 text-base sm:text-lg md:text-xl">
          <span className="font-bold text-warna2">Drag</span>
          <span className="text-stone-300">n'</span>
          <span className="text-white">Drop</span>
        </div>

        {/* Copyright */}
        <p className="text-gray-300 text-sm sm:text-base md:text-lg text-center">
          © {new Date().getFullYear()}{" "}
          <span className="font-bold text-warna2">Drag</span> n' Drop. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
