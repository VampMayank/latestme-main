"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiGithub } from "react-icons/si";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const EMAIL = "mayank.1196mverma@gmail.com";

const socials = [
  { label: "GitHub",   href: "https://github.com/VampMayank",                 Icon: SiGithub   },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mayank-verma-556291266", Icon: FaLinkedin },
  { label: "Email",    href: null,                                               Icon: FaEnvelope },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const wrapRef    = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const items = wrapRef.current ? Array.from(wrapRef.current.querySelectorAll(".reveal")) : [];
      gsap.fromTo(items,
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.09, ease: "power2.out", delay: 0.1 }
      );
      gsap.to(sectionRef.current, {
        opacity: 0.2, yPercent: -4, ease: "none",
        scrollTrigger: { trigger: sectionRef.current, start: "70% top", end: "bottom top", scrub: true },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 60, zIndex: 10 }}>
      {/* Background Glow */}
      <div style={{ position: "absolute", top: "20%", left: "10%", width: "min(600px, 90vw)", height: "min(600px, 90vw)", borderRadius: "50%", background: "radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 70%)", pointerEvents: "none", filter: "blur(60px)" }} />

      <div ref={wrapRef} className="hero-wrap" style={{ maxWidth: 860, margin: "0 auto", padding: "0 48px", width: "100%", position: "relative" }}>

        {/* Name */}
        <h1 className="reveal" style={{ fontSize: "clamp(48px, 9vw, 104px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.95, color: "var(--text)", marginBottom: 20, opacity: 0 }}>
          Mayank Verma
        </h1>

        {/* Role */}
        <div className="reveal" style={{ marginBottom: 28, opacity: 0 }}>
          <span style={{
            fontSize: "clamp(20px, 3vw, 32px)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            background: "linear-gradient(90deg, #22D3EE 0%, #06B6D4 50%, #22D3EE 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Full-Stack Web Developer
          </span>
        </div>

        {/* Summary */}
        <p className="reveal" style={{ fontSize: 18, lineHeight: 1.8, color: "var(--text2)", maxWidth: 660, marginBottom: 44, fontWeight: 500, opacity: 0 }}>
          Final-year Computer Science student specializing in Full-Stack Web Development. I build real-time enterprise dashboards, music-based social platforms, and manage robust e-commerce infrastructure with a focus on scalability and user experience.
        </p>

        {/* CTA buttons */}
        <div className="reveal" style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20, opacity: 0 }}>
          <a
            href="#projects"
            onClick={e => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
            style={{ height: 42, display: "inline-flex", alignItems: "center", gap: 8, padding: "0 24px", fontSize: 14, fontWeight: 700, color: "#000", textDecoration: "none", borderRadius: 10, background: "var(--accent)", transition: "transform 0.15s, filter 0.15s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.filter = "brightness(1.1)"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.filter = "brightness(1)"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; }}
          >
            See my work
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
          </a>
        </div>

        {/* Available line */}
        <div className="reveal" style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 40, marginBottom: 56, opacity: 0 }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ADE80", boxShadow: "0 0 12px rgba(74,222,128,0.8)", flexShrink: 0 }} className="pulse-dot" />
          <a href="mailto:mayank.1196mverma@gmail.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: "#4ADE80", fontWeight: 700, textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.05em" }}>Available for new opportunities</a>
        </div>

        {/* Socials */}
        <div className="reveal" style={{ display: "flex", alignItems: "center", gap: 16, marginTop: -32, opacity: 0, position: "relative" }}>
          {socials.map(({ label, href, Icon }) =>
            href === null ? (
              <button
                key={label}
                onClick={copyEmail}
                title="Copy email"
                style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 44, height: 44, borderRadius: 12, border: "2px solid var(--border)", color: "var(--text)", background: "transparent", cursor: "pointer", opacity: 0.8, transition: "all 0.2s" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLButtonElement; el.style.opacity = "1"; el.style.borderColor = "var(--accent)"; el.style.background = "var(--card)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLButtonElement; el.style.opacity = "0.8"; el.style.borderColor = "var(--border)"; el.style.background = "transparent"; }}
              >
                <Icon size={18} />
              </button>
            ) : (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 44, height: 44, borderRadius: 12, border: "2px solid var(--border)", color: "var(--text)", textDecoration: "none", opacity: 0.8, transition: "all 0.2s" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.opacity = "1"; el.style.borderColor = "var(--accent)"; el.style.background = "var(--card)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.opacity = "0.8"; el.style.borderColor = "var(--border)"; el.style.background = "transparent"; }}
              >
                <Icon size={18} />
              </a>
            )
          )}
          {copied && (
            <span style={{ position: "absolute", left: 140, top: -36, fontSize: 13, fontWeight: 700, color: "#4ADE80", background: "rgba(0,0,0,0.85)", padding: "6px 12px", borderRadius: 8, whiteSpace: "nowrap", border: "1px solid rgba(74,222,128,0.3)" }}>
              Email copied!
            </span>
          )}
        </div>

      </div>

    </section>
  );
}
