"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const skillGroups = [
  { label: "Programming", color: "#06B6D4", skills: ["JavaScript (ES6+)", "TypeScript", "Python", "Java", "C++", "SQL", "HTML5", "CSS3"] },
  { label: "Frontend", color: "#059669", skills: ["React.js", "Next.js (App Router)", "Tailwind CSS", "Bootstrap", "React Native", "Framer Motion", "GSAP"] },
  { label: "Backend", color: "#DB2777", skills: ["Node.js", "Express.js", "NestJS", "Supabase Auth", "RESTful APIs", "WebSockets", "Firebase"] },
  { label: "Databases & Tools", color: "#0891B2", skills: ["PostgreSQL", "MongoDB", "Supabase", "Neon DB", "Vercel", "Git", "Docker", "GSC API", "Technical SEO"] },
];

export default function Skills() {
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

      const groups = sectionRef.current?.querySelectorAll(".skill-group");
      groups?.forEach((group, gi) => {
        const pills = group.querySelectorAll(".skill-pill");
        gsap.fromTo(
          pills,
          { opacity: 0, y: -20, scale: 0.85 },
          {
            opacity: 1, y: 0, scale: 1,
            duration: 0.5,
            stagger: 0.06,
            ease: "elastic.out(1, 0.7)",
            scrollTrigger: { trigger: group, start: "top 85%", once: true },
            delay: gi * 0.08,
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} style={{ maxWidth: 860, margin: "0 auto", padding: "0 40px 100px" }}>
      <div className="section-header" style={{ marginBottom: 56, opacity: 0 }}>
        <p style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.18em", color: "rgba(6, 182, 212, 0.5)", marginBottom: 10 }}>04 — Capabilities</p>
        <h2 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 900, letterSpacing: "-0.03em", color: "var(--text)" }}>Skills</h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "40px 32px" }}>
        {skillGroups.map((group) => (
          <div key={group.label} className="skill-group">
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em", color: group.color, marginBottom: 16 }}>
              {group.label}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="skill-pill"
                  style={{
                    padding: "6px 14px",
                    fontSize: 13,
                    borderRadius: 999,
                    color: "var(--text2)",
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    opacity: 0,
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLSpanElement;
                    el.style.color = "var(--text)";
                    el.style.borderColor = `${group.color}40`;
                    el.style.background = `${group.color}0A`;
                    el.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLSpanElement;
                    el.style.color = "var(--text2)";
                    el.style.borderColor = "var(--border)";
                    el.style.background = "var(--card)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
