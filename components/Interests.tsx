"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const books = [
  { title: "Zero to One", author: "Peter Thiel", note: "Rethinks competition entirely — secrets, monopolies, the future" },
  { title: "The Lean Startup", author: "Eric Ries", note: "How I approach building MVPs without wasting months" },
  { title: "Atomic Habits", author: "James Clear", note: "Systems over goals. This one stuck." },
  { title: "The Almanack of Naval Ravikant", author: "Eric Jorgenson", note: "Wealth & happiness frameworks I reread quarterly" },
  { title: "The Hard Thing About Hard Things", author: "Ben Horowitz", note: "No sugarcoating. What running a company actually feels like." },
  { title: "Deep Work", author: "Cal Newport", note: "Changed how I structure my 4-hour coding blocks" },
];

const openings = [
  { name: "Sicilian Defense", side: "Black", note: "Sharp, aggressive, asymmetric — matches how I like to compete" },
  { name: "King's Indian Defense", side: "Black", note: "Dynamic counterplay from cramped positions" },
  { name: "London System", side: "White", note: "Solid structure, slow grind — useful when opponent is stronger" },
];

const following = [
  { name: "Y Combinator", type: "Accelerator", note: "Startup School content is better than any MBA" },
  { name: "Paul Graham", type: "Essays", note: "Rethinks everything from first principles — required reading" },
  { name: "Lenny Rachitsky", type: "Newsletter", note: "Product strategy that actually ships" },
  { name: "Ben Thompson", type: "Stratechery", note: "Best business model deep dives on the internet" },
  { name: "Pieter Levels", type: "Indie Hacker", note: "Proof that one person can build, ship, and profit" },
];


export default function Interests() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current?.querySelector(".section-header") ?? null,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true } }
      );
      sectionRef.current?.querySelectorAll(".interest-block").forEach((el, i) => {
        gsap.fromTo(el, { opacity: 0, y: 28 }, {
          opacity: 1, y: 0, duration: 0.65, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 87%", once: true },
          delay: i * 0.08,
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const card = {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.09)",
    borderRadius: 16,
    padding: "24px 26px",
  };

  const pill = (color = "#06B6D4") => ({
    fontSize: 10, fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.12em",
    color: `${color}99`, padding: "2px 8px", borderRadius: 6,
    background: `${color}12`, border: `1px solid ${color}25`,
  });

  return (
    <section
      ref={sectionRef}
      id="interests"
      style={{ position: "relative", maxWidth: 860, margin: "0 auto", padding: "120px 40px", zIndex: 1 }}
    >
      <div style={{ height: 1, background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 50%, transparent 100%)", marginBottom: 80 }} />

      <div className="section-header" style={{ marginBottom: 56, opacity: 0 }}>
        <p style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.18em", color: "rgba(6, 182, 212, 0.5)", marginBottom: 10 }}>
          06 — Outside Code
        </p>
        <h2 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 900, letterSpacing: "-0.03em", color: "#E8E6F0" }}>
          What I Think About
        </h2>
        <p style={{ fontSize: 14, color: "#9B95B0", marginTop: 10, maxWidth: 480, lineHeight: 1.65 }}>
          The things that shape how I build, think, and operate — outside of a code editor.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

        {/* ── Chess + Startups row ── */}
        <div className="interest-block" style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 14, opacity: 0 }}>

          {/* Chess */}
          <div style={card}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
              <span style={{ fontSize: 22 }}>♟</span>
              <span style={pill()}>Chess</span>
            </div>
            <h3 style={{ fontSize: 15, fontWeight: 800, color: "#E8E6F0", marginBottom: 8 }}>Chess</h3>
            <p style={{ fontSize: 13, color: "#B0ABCA", lineHeight: 1.7, marginBottom: 16 }}>
              Rated on Chess.com and Lichess. Chess forces single-tasking — pattern recognition, multi-step thinking, knowing a position is lost before it looks obvious.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {openings.map(o => (
                <div key={o.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8, paddingBottom: 8, borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <div>
                    <p style={{ fontSize: 12, fontWeight: 600, color: "#E8E6F0" }}>{o.name}</p>
                    <p style={{ fontSize: 11, color: "#9B95B0", marginTop: 2 }}>{o.note}</p>
                  </div>
                  <span style={{ fontSize: 10, color: "#9B95B0", flexShrink: 0, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", padding: "2px 7px", borderRadius: 5 }}>{o.side}</span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 11, color: "#9B95B0", marginTop: 14, fontStyle: "italic", paddingLeft: 10, borderLeft: "2px solid rgba(6, 182, 212, 0.35)" }}>
              "Chess taught me that there are no equal positions — someone always has an edge. Same with products."
            </p>
          </div>

          {/* Startups + Business */}
          <div style={card}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
              <span style={{ fontSize: 22 }}>🚀</span>
              <span style={pill("#059669")}>Startups & Business</span>
            </div>
            <h3 style={{ fontSize: 15, fontWeight: 800, color: "#E8E6F0", marginBottom: 8 }}>Startups & Business</h3>
            <p style={{ fontSize: 13, color: "#B0ABCA", lineHeight: 1.7, marginBottom: 16 }}>
              Architecting enterprise dashboards at <span style={{ color: "#E8E6F0", fontWeight: 500 }}>Argmac</span> and building <span style={{ color: "#E8E6F0", fontWeight: 500 }}>Savora</span> solo taught me to think constantly about distribution, retention, and pricing.
            </p>
            <p style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(5,150,105,0.6)", marginBottom: 10 }}>Who I Follow</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {following.map((f, i) => (
                <div key={f.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8, paddingBottom: 8, borderBottom: i < following.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                  <div>
                    <p style={{ fontSize: 12, fontWeight: 600, color: "#E8E6F0" }}>{f.name}</p>
                    <p style={{ fontSize: 11, color: "#9B95B0", marginTop: 2 }}>{f.note}</p>
                  </div>
                  <span style={{ fontSize: 10, color: "#7C7490", flexShrink: 0 }}>{f.type}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Books ── */}
        <div className="interest-block" style={{ ...card, opacity: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
            <span style={{ fontSize: 22 }}>📚</span>
            <span style={pill("#D97706")}>Book Reading</span>
          </div>
          <h3 style={{ fontSize: 15, fontWeight: 800, color: "#E8E6F0", marginBottom: 6 }}>Books</h3>
          <p style={{ fontSize: 13, color: "#B0ABCA", lineHeight: 1.7, marginBottom: 18 }}>
            Reading gives me mental models that directly shape how I design systems and think about users. I read slowly and take notes — it&apos;s not about volume.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 8 }}>
            {books.map(b => (
              <div key={b.title} style={{
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 10, padding: "12px 14px",
                transition: "border-color 0.18s",
              }}
                onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(217,119,6,0.35)"}
                onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.06)"}
              >
                <p style={{ fontSize: 12, fontWeight: 700, color: "#E8E6F0", lineHeight: 1.35 }}>{b.title}</p>
                <p style={{ fontSize: 10, color: "#9B95B0", marginTop: 2 }}>{b.author}</p>
                <p style={{ fontSize: 10, color: "rgba(217,119,6,0.85)", marginTop: 5, fontStyle: "italic", lineHeight: 1.4 }}>{b.note}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
