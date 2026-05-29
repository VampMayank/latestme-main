"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-reveal",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} style={{ maxWidth: 860, margin: "0 auto", padding: "80px 40px 100px" }}>
      <div className="about-reveal" style={{ marginBottom: 56 }}>
        <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--accent)", marginBottom: 12 }}>01 — Profile</p>
        <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 900, letterSpacing: "-0.03em", color: "var(--text)", lineHeight: 1.1 }}>
          Building at the intersection of <br />
          <span style={{ color: "var(--accent)" }}>engineering</span> and <span style={{ color: "var(--text2)" }}>product.</span>
        </h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "clamp(40px, 6vw, 80px)", alignItems: "start" }}>
        <div className="about-reveal" style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <p style={{ fontSize: 18, color: "var(--text)", lineHeight: 1.8, fontWeight: 500 }}>
            I am a final-year Computer Science student specializing in Full-Stack Web Development. My approach combines technical rigor with a deep focus on the user experience.
          </p>
          <p style={{ fontSize: 16, color: "var(--text2)", lineHeight: 1.8, fontWeight: 400 }}>
            Whether it's building a unified enterprise dashboard for <span style={{ color: "var(--text)", fontWeight: 700 }}>Argmac</span> or scaling real-time matchmaking engines for social apps like <span style={{ color: "var(--text)", fontWeight: 700 }}>Zenra</span>, I thrive on solving complex architectural challenges that have a direct business impact.
          </p>
          <div style={{ display: "flex", gap: 40, marginTop: 12 }}>
            <div>
              <p style={{ fontSize: 28, fontWeight: 900, color: "var(--text)", marginBottom: 4 }}>3+</p>
              <p style={{ fontSize: 12, fontWeight: 700, color: "var(--text3)", textTransform: "uppercase", letterSpacing: "0.15em" }}>Years of Coding</p>
            </div>
            <div>
              <p style={{ fontSize: 28, fontWeight: 900, color: "var(--text)", marginBottom: 4 }}>10+</p>
              <p style={{ fontSize: 12, fontWeight: 700, color: "var(--text3)", textTransform: "uppercase", letterSpacing: "0.15em" }}>Major Projects</p>
            </div>
          </div>
        </div>

        <div className="about-reveal" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ padding: "28px 32px", borderRadius: 16, background: "var(--card)", border: "1px solid var(--border)" }}>
            <h4 style={{ fontSize: 15, fontWeight: 800, color: "var(--text)", marginBottom: 12, display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 20 }}>🎯</span> Philosophy
            </h4>
            <p style={{ fontSize: 14.5, color: "var(--text2)", lineHeight: 1.7, fontWeight: 400 }}>
              I believe great software isn't just about code — it's about solving real-world problems efficiently. I build for scalability, performance, and impact.
            </p>
          </div>
          <div style={{ padding: "28px 32px", borderRadius: 16, background: "var(--card)", border: "1px solid var(--border)" }}>
            <h4 style={{ fontSize: 15, fontWeight: 800, color: "var(--text)", marginBottom: 12, display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 20 }}>♟️</span> Strategy
            </h4>
            <p style={{ fontSize: 14.5, color: "var(--text2)", lineHeight: 1.7, fontWeight: 400 }}>
              As a chess player, I bring a strategic mindset to development — thinking several steps ahead in system design and anticipating user needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
