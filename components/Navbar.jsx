"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Glassmorphism + Gradient supaya nyatu dengan Hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-warna3/90 via-warna3/70 to-transparent backdrop-blur-sm"></div>

      {/* Isi Navbar */}
      <div className="relative max-w-screen-2xl mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 py-5 sm:py-6 md:py-7 lg:py-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-1 text-lg sm:text-xl md:text-2xl font-poppins">
          <span className="font-bold text-warna2">Drag</span>
          <span className="text-stone-300">n'</span>
          <span className="text-white">Drop</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-10 xl:space-x-12 font-poppins text-white text-base lg:text-lg">
          <a href="#home" className="relative group">
            Home
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-warna2 scale-x-0 group-hover:scale-x-100 transition-transform"></span>
          </a>
          <a href="#about" className="relative group">
            About
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-warna2 scale-x-0 group-hover:scale-x-100 transition-transform"></span>
          </a>
          <a href="#service" className="relative group">
            Service
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-warna2 scale-x-0 group-hover:scale-x-100 transition-transform"></span>
          </a>
          <a href="#contact" className="relative group">
            Contact
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-warna2 scale-x-0 group-hover:scale-x-100 transition-transform"></span>
          </a>
        </div>

        {/* Mobile Button */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-5 font-poppins bg-warna3/90 backdrop-blur-lg text-base sm:text-lg">
          <a href="#home" className="text-white hover:text-warna2 transition-colors" onClick={() => setOpen(false)}>Home</a>
          <a href="#about" className="text-white hover:text-warna2 transition-colors" onClick={() => setOpen(false)}>About</a>
          <a href="#service" className="text-white hover:text-warna2 transition-colors" onClick={() => setOpen(false)}>Service</a>
          <a href="#contact" className="text-white hover:text-warna2 transition-colors" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
