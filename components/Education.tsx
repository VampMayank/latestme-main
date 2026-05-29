"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const education = {
  school: "Dronacharya College of Engineering",
  degree: "B.Tech in Computer Science (IoT)",
  period: "Graduating 2026",
  gpa: "8.2 / 10",
  coursework: ["Full Stack Development", "IoT", "Generative AI", "Frontend Dev", "SW Dev"],
};

const certificates = [
  { name: "Full Stack Web Development", issuer: "IIT Roorkee (iHUB Divyasampark)", year: "2025" },
  { name: "Generative AI Certification", issuer: "IBM", year: "2025" },
  { name: "Frontend Development", issuer: "IBM", year: "2025" },
  { name: "SW Development", issuer: "IBM", year: "2024" },
];

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current?.querySelector(".section-header") ?? null,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.7,
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
        }
      );

      sectionRef.current?.querySelectorAll(".fade-up").forEach((el) => {
        gsap.fromTo(el, { opacity: 0, y: 28 }, {
          opacity: 1, y: 0, duration: 0.65, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="education" ref={sectionRef} style={{ maxWidth: 860, margin: "0 auto", padding: "0 40px 100px" }}>
      <div className="section-header" style={{ marginBottom: 56, opacity: 0, paddingTop: "40px" }}>
        <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em", color: "var(--accent)", marginBottom: 10 }}>05 — Background</p>
        <h2 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 900, letterSpacing: "-0.03em", color: "var(--text)" }}>Education</h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
        <div
          className="fade-up"
          style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: 16,
            padding: 28,
            opacity: 0,
          }}
        >
          <p style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--accent)", marginBottom: 20 }}>University</p>
          <p style={{ fontSize: 16, fontWeight: 700, color: "var(--text)" }}>{education.school}</p>
          <p style={{ fontSize: 14, color: "var(--text2)", marginTop: 6, fontWeight: 500 }}>{education.degree}</p>
          <div style={{ display: "flex", alignItems: "center", gap: 20, marginTop: 14 }}>
            <span style={{ fontSize: 12, color: "var(--text3)", fontWeight: 600 }}>{education.period}</span>
            <span style={{ fontSize: 12, fontWeight: 800, color: "var(--accent)", background: "rgba(34, 211, 238, 0.1)", padding: "2px 8px", borderRadius: 4 }}>GPA {education.gpa}</span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 24 }}>
            {education.coursework.map((c) => (
              <span
                key={c}
                style={{ padding: "4px 12px", fontSize: 12, fontWeight: 600, borderRadius: 999, color: "var(--text2)", background: "rgba(255,255,255,0.06)", border: "1px solid var(--border)" }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--accent)", marginBottom: 20 }}>Certificates</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {certificates.map((cert, i) => (
              <div
                key={i}
                className="fade-up"
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: 14,
                  padding: "16px 20px",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: 16,
                  opacity: 0,
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "var(--accent)"; (e.currentTarget as HTMLDivElement).style.transform = "translateX(4px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLDivElement).style.transform = "translateX(0)"; }}
              >
                <div>
                  <p style={{ fontSize: 14, fontWeight: 700, color: "var(--text)", lineHeight: 1.4 }}>{cert.name}</p>
                  <p style={{ fontSize: 12, color: "var(--text3)", marginTop: 4, fontWeight: 600 }}>{cert.issuer}</p>
                </div>
                <span style={{ fontSize: 11, fontWeight: 800, color: "var(--text3)", background: "rgba(255,255,255,0.05)", padding: "2px 6px", borderRadius: 4, flexShrink: 0 }}>{cert.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
