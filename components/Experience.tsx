"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const experiences = [
  {
    company: "Argmac",
    role: "Developer Intern",
    period: "May 2026 – Present",
    stack: "Enterprise Dashboard · Shopify · Technical SEO · Next.js · Supabase",
    bullets: [
      "Architected and deployed a centralized enterprise dashboard using Next.js and Supabase to unify disparate datasets, employee task management, and order inventory into a single frame.",
      "Integrated Google Search Console API to automate technical SEO analysis, providing real-time store performance insights and improving search visibility.",
      "Maintaining and resolving complex issues on the company’s infrastructure and Shopify store to ensure 99.9% optimal functionality.",
    ],
  },
  {
    company: "Indian Oil Corporation Limited",
    role: "Summer Intern",
    period: "June 2025 – July 2025",
    stack: "React.js · TypeScript · MySQL · Bootstrap",
    bullets: [
      "Contributed to a centralized graphical user interface (GUI) that enabled enterprise network administrators to manage distributed devices.",
      "Built functional, highly responsive interfaces using React.js and TypeScript to automate and improve daily monitoring workflows.",
      "Managed structured relational data using MySQL, ensuring efficient performance querying of complex network elements.",
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      sectionRef.current?.querySelectorAll(".fade-up").forEach(el => {
        gsap.fromTo(el, { opacity: 0, y: 28 }, {
          opacity: 1, y: 0, duration: 0.65, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} style={{ maxWidth: 860, margin: "0 auto", padding: "0 40px 100px" }}>
      <div className="fade-up" style={{ marginBottom: 56, opacity: 0, paddingTop: "40px" }}>
        <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em", color: "var(--accent)", marginBottom: 10 }}>03 — Career</p>
        <h2 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 900, letterSpacing: "-0.03em", color: "var(--text)" }}>Work Experience</h2>
      </div>

      <div style={{ position: "relative", paddingLeft: 24 }}>
        <div style={{ position: "absolute", left: 0, top: 8, bottom: 8, width: 1, background: "rgba(34, 211, 238, 0.2)" }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 52 }}>
          {experiences.map((exp) => (
            <div key={exp.company} className="fade-up" style={{ position: "relative", opacity: 0 }}>
              <div style={{ position: "absolute", left: -28, top: 6, width: 9, height: 9, borderRadius: "50%", background: "var(--accent)", border: "2px solid var(--bg)", boxShadow: "0 0 0 3px rgba(34, 211, 238, 0.15)" }} />
              <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: 24 }}>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 700, color: "var(--text)" }}>{exp.company}</p>
                  <p style={{ fontSize: 12, color: "var(--text3)", marginTop: 4, fontWeight: 500 }}>{exp.period}</p>
                </div>
                <div>
                  <p style={{ fontSize: 16, fontWeight: 700, color: "var(--text)", marginBottom: 6 }}>{exp.role}</p>
                  <p style={{ fontSize: 12, color: "var(--accent)", opacity: 0.9, fontWeight: 600, fontFamily: "monospace", marginBottom: 16 }}>{exp.stack}</p>
                  <ul style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {exp.bullets.map((b, j) => (
                      <li key={j} style={{ fontSize: 15, color: "var(--text2)", lineHeight: 1.65, display: "flex", gap: 10 }}>
                        <span style={{ marginTop: 9, flexShrink: 0, width: 4, height: 4, borderRadius: "50%", background: "var(--accent)", opacity: 0.6 }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
