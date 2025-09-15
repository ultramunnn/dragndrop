import About from "@/components/about";
import Hero from "@/components/hero";
import LayananKami from "@/components/LayananKami";

import Contact from "@/components/contact";
import React from "react";
import Footer from "@/components/footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <LayananKami />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
