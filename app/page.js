"use client";
import React, { useEffect } from "react";

import About from "../components/About";
import ChatWidget from "../components/ChatWidget";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import LayananKami from "../components/LayananKami";
import { Contact } from "lucide-react";


const Home = () => {
  useEffect(() => {
    // Scroll to top on page load/reload
    window.scrollTo(0, 0);

    // Reset scroll position in history
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <About />
      <LayananKami />
      <Contact />
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Home;
