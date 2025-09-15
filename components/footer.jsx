"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-warna3 text-white py-6 px-6 md:px-20">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm font-poppins">
        {/* Logo / Brand */}
        <div className="flex items-center space-x-1 mb-3 md:mb-0">
          <span className="font-bold text-warna2">Drag</span>
          <span className="text-stone-300">n’</span>
          <span className="text-white">Drop</span>
        </div>

        {/* Copyright */}
        <p className="text-gray-300 text-xs md:text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="font-bold text-warna2">Drag</span> n’ Drop. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
