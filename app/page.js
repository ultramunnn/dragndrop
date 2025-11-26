"use client";

import About from "@/components/about";
import Hero from "@/components/hero";
import LayananKami from "@/components/LayananKami";
import Contact from "@/components/contact";
import React, { useEffect } from "react";
import Footer from "@/components/footer";

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
    </div>
  );
};

export default Home;
