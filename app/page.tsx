"use client";

import { useState, useEffect } from "react";
import ParticleCanvas from "@/components/ParticleCanvas";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import IntroAnimation from "@/components/IntroAnimation";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [revealing, setRevealing] = useState(false);
  const [scrolledDown, setScrolledDown] = useState(false);

  const handleIntroComplete = () => {
    setRevealing(true);
    setTimeout(() => {
      setShowIntro(false);
    }, 4000);
  };

  useEffect(() => {
    const onScroll = () => {
      const threshold = 120;
      const isScrolled = window.scrollY > threshold;
      if (isScrolled !== scrolledDown) {
        setScrolledDown(isScrolled);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrolledDown]);

  return (
    <main style={{ background: "transparent" }}>
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      
      {(!showIntro || revealing) && <Nav />}

      {/* Layer 0 (zIndex 5 in component): Particle Animation */}
      <ParticleCanvas />

      {/* Layer 1 (zIndex 7): Dynamic Overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: scrolledDown ? "rgba(8, 8, 10, 0.75)" : "transparent",
          transition: "background 0.5s ease",
          zIndex: 7,
          pointerEvents: "none",
        }}
      />

      {/* Layer 2 (zIndex 10): Main Content */}
      <div
        style={{
          filter: showIntro && !revealing ? "blur(30px)" : "none",
          opacity: showIntro && !revealing ? 0 : 1,
          transition: "filter 4s cubic-bezier(0.4, 0, 0.2, 1), opacity 4s cubic-bezier(0.4, 0, 0.2, 1)",
          pointerEvents: showIntro && !revealing ? "none" : "auto",
          willChange: "filter, opacity",
          position: "relative",
          zIndex: 10,
        }}
      >
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Footer />
      </div>
    </main>
  );
}
