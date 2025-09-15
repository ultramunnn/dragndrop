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
      <div className="relative max-w-screen-2xl mx-auto w-full px-6 py-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-1 text-xl font-poppins">
          <span className="font-bold text-warna2">Drag</span>
          <span className="text-stone-300">n’</span>
          <span className="text-white">Drop</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12 font-poppins text-white">
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
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col items-center space-y-4 pb-4 font-poppins bg-warna3/80 backdrop-blur-lg">
          <a href="#home" className="text-white">Home</a>
          <a href="#about" className="text-white">About</a>
          <a href="#service" className="text-white">Service</a>
          <a href="#contact" className="text-white">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
