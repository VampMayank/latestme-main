"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CASE_STUDIES = [
  {
    id: "blockchain",
    tag: "Distributed Systems",
    emoji: "⛓",
    title: "Blockchain: Trust Without a Middleman",
    subtitle: "Why this technology matters more than the hype",
    accent: "#7C6FEA",
    tldr: "Blockchain is not about crypto — it's about removing the need for a trusted third party in any transaction or agreement.",
    sections: [
      {
        heading: "The Core Problem",
        body: "Every digital system today relies on a central authority — a bank, a government, a platform — to verify that a transaction happened and wasn't tampered with. This creates single points of failure, censorship risk, and rent-seeking middlemen who charge for being the source of truth. Byzantine Generals' Problem: how do you reach consensus among participants who don't trust each other, with no central coordinator?",
      },
      {
        heading: "How Blockchain Solves It",
        body: "A blockchain is an append-only, cryptographically linked ledger replicated across thousands of nodes. Each block contains a hash of the previous block — mutating any historical record would require recomputing all subsequent blocks and outpacing 51% of the network's compute. Proof-of-Work (Bitcoin) trades energy for security. Proof-of-Stake (Ethereum post-merge) trades staked capital — cutting energy use by ~99.95% while maintaining Byzantine fault tolerance.",
      },
      {
        heading: "Smart Contracts",
        body: "Ethereum introduced programmable agreements: code that self-executes when conditions are met, with no counterparty risk. A DAO can govern a $1B treasury with no CEO. A DeFi protocol can process $100M in loans with no bank. The attack surface shifts from institutional fraud to code bugs — the 2016 DAO hack exploited a reentrancy vulnerability and drained $60M, prompting the Ethereum hard fork. Formal verification of smart contracts is now a research frontier.",
      },
      {
        heading: "Real-World Signal vs. Noise",
        body: "Strip away speculation: supply chain provenance (Walmart uses Hyperledger to trace food contamination in seconds vs. days), land registries in Georgia and Sweden, cross-border settlement (Ripple cuts SWIFT's 3-5 day window to seconds). The signal is clear — blockchain is a coordination layer for high-stakes systems where trust is expensive. The noise is most of crypto Twitter.",
      },
      {
        heading: "My Take",
        body: "The developer in me finds the cryptographic primitives genuinely elegant — Merkle trees, elliptic curve signatures, zero-knowledge proofs. The product thinker in me is skeptical of most blockchain 'solutions' that just add complexity where a Postgres database with good access controls would do. The right question isn't 'can we blockchain this?' — it's 'is decentralization actually worth the tradeoff here?'",
      },
    ],
  },
  {
    id: "nuclear",
    tag: "Energy Systems",
    emoji: "⚛",
    title: "Nuclear Power: The Math We're Ignoring",
    subtitle: "Why the most energy-dense fuel source on Earth is also the most misunderstood",
    accent: "#059669",
    tldr: "Nuclear energy produces more electricity per unit of land, materials, and deaths per TWh than almost any other source — including solar and wind. The debate is not scientific, it's political.",
    sections: [
      {
        heading: "Energy Density Is Everything",
        body: "One uranium fuel pellet the size of a fingertip contains as much energy as 17,000 cubic feet of natural gas, 1,780 pounds of coal, or 149 gallons of oil. A 1 GW nuclear plant occupies ~1 sq km. To match it with solar, you'd need ~75 sq km of panels plus grid-scale storage. Energy density determines land use, supply chain complexity, and ultimately cost per MWh.",
      },
      {
        heading: "The Safety Paradox",
        body: "Deaths per TWh — the only honest metric: Coal: 24.6. Oil: 18.4. Natural Gas: 2.8. Solar: 0.02. Wind: 0.04. Nuclear: 0.03. Nuclear has caused fewer deaths per unit of energy produced than almost any other source in history, including renewables. The perception gap exists because nuclear accidents are spectacular and concentrated; coal deaths are invisible and distributed (air pollution kills 7M+ annually).",
      },
      {
        heading: "The Waste Problem — and Its Scale",
        body: "All the high-level nuclear waste ever produced by the US civilian power program would fit inside a Walmart. Deep geological repositories (Finland's Onkalo is the world's first permanent facility, now operational) isolate it for 100,000 years. Meanwhile, coal plants emit hundreds of millions of tons of CO₂ yearly plus fly ash containing uranium and thorium — released directly into the atmosphere with zero containment.",
      },
      {
        heading: "Gen IV and SMRs",
        body: "Small Modular Reactors (SMRs) like NuScale's VOYGR and Rolls-Royce's SMR are factory-built, standardized modules — solving the cost overrun problem of bespoke mega-projects like Hinkley Point C. Molten salt reactors can consume existing nuclear waste as fuel. Thorium reactors offer 3x the energy density of uranium with no weapons-grade byproduct. The 2030s will look very different from the 1970s-era reactors that shaped public opinion.",
      },
      {
        heading: "My Take",
        body: "I studied this because I was building a side project requiring always-on compute and started thinking about grid reliability. I went in skeptical and came out convinced that Germany's Energiewende — shutting down nuclear and ramping coal — was one of the worst energy policy decisions of the 21st century. If you care about climate, you have to care about baseload. Wind and solar can't do it alone.",
      },
    ],
  },
  {
    id: "drones",
    tag: "Autonomous Systems",
    emoji: "🚁",
    title: "Drones: The Last-Mile Revolution",
    subtitle: "How autonomous aerial systems are reshaping logistics, defense, and agriculture",
    accent: "#D97706",
    tldr: "Drones are not a gadget category — they are a new logistics primitive that collapses geography. Every industry that depends on physical access to a location will be disrupted.",
    sections: [
      {
        heading: "The Stack",
        body: "A modern autonomous drone is a systems engineering problem: flight controller (PX4/ArduPilot running on STM32), sensor fusion (IMU + GPS + barometer + optical flow), computer vision (YOLO running on Jetson Nano for object avoidance), communication stack (MAVLink protocol, 5G C2 links for BVLOS), and mission planning (path optimization solving TSP variants). The software is almost more interesting than the hardware.",
      },
      {
        heading: "Last-Mile Logistics",
        body: "Zipline delivers blood products to 2,500+ health facilities across Rwanda and Ghana — a fixed-wing drone dropping a cardboard box on a parachute. Wingman (Google/Alphabet) completes deliveries in under 10 minutes in parts of Australia and Texas. The unit economics only work at scale and in low-density areas — drone delivery in Mumbai is a different problem than rural Karnataka. FAA BVLOS (Beyond Visual Line of Sight) approval is the regulatory unlock.",
      },
      {
        heading: "Defense Applications",
        body: "Ukraine changed drone warfare permanently. Cheap FPV drones ($400 off Alibaba + a 3D-printed nose cone + a grenade) achieved kill ratios that made $2M tank systems economically indefensible. Loitering munitions like the Switchblade 600 operate for 40+ minutes, tracking targets with computer vision. The strategic implication: asymmetric cost curves favor the attacker. Drone swarms with distributed AI are the next frontier — no GPS needed, mesh-networked, too numerous to intercept.",
      },
      {
        heading: "Agriculture",
        body: "DJI Agras T40 carries 40kg of payload, sprays at 16 L/min, and maps field health via multispectral sensors. Precision spraying reduces pesticide use by 30-50% while improving yield. In India, the PM Drone Didi scheme is training women in rural areas to operate agricultural drones — a technology access story that rarely gets told. The satellite imagery + drone ground-truth combination is becoming the standard for precision agriculture at scale.",
      },
      {
        heading: "My Take",
        body: "The software engineer perspective: autonomous flight is a solved problem in favorable conditions — it's the edge cases (wind gusts, sensor failure, urban RF interference) where the interesting engineering happens. The product perspective: the winning drone companies will be the ones that solve regulatory clearance and reliability, not the ones with the best aerodynamics. DJI's moat isn't hardware — it's the ecosystem and the supply chain.",
      },
    ],
  },
  {
    id: "ai",
    tag: "Machine Intelligence",
    emoji: "🧠",
    title: "AI: What's Actually Happening Under the Hood",
    subtitle: "A developer's honest take on transformers, LLMs, and what comes next",
    accent: "#DB2777",
    tldr: "Large Language Models are not reasoning — they are extremely sophisticated pattern completion engines trained on human thought. That's both more impressive and more limited than most people realize.",
    sections: [
      {
        heading: "The Transformer Architecture",
        body: "Attention Is All You Need (Vaswani et al., 2017) replaced recurrent networks with self-attention: every token attends to every other token in the sequence simultaneously. This parallelizes training across GPUs trivially. The 'attention head' computes Q·Kᵀ/√dₖ scores — how much each token should attend to each other — then softmax-weights the value vectors. Stack 96 layers of this with 96 attention heads (GPT-4 scale), train on 13 trillion tokens, and emergence happens.",
      },
      {
        heading: "Why Scale Works (and Why It's Surprising)",
        body: "No one predicted that scaling compute + data would produce qualitatively new capabilities. Chain-of-thought reasoning, few-shot learning, coding ability — these emerged without being explicitly trained for. The scaling laws (Kaplan et al., Chinchilla) describe power-law relationships between parameters, data, compute, and loss. We are likely not at the end of this curve. GPT-4 scale models trained on GPT-4 quality data (synthetic) is the next frontier.",
      },
      {
        heading: "What LLMs Can't Do",
        body: "Reliable arithmetic (they hallucinate because math is not pattern completion). True reasoning chains (they mimic the structure of correct reasoning). Consistent world models (no persistent memory, no embodied grounding). Novel scientific discovery without human direction. The 'stochastic parrot' critique has merit but undersells emergence. The right mental model: LLMs are the best text compression and interpolation system ever built — which turns out to be extraordinarily useful.",
      },
      {
        heading: "How I Use It as a Developer",
        body: "GPT-4 writes 60-70% of my boilerplate, explains unfamiliar codebases, generates test cases I'd skip, and rubber-ducks architecture decisions at 2 AM. The productivity gain is real — but it's a force multiplier for a developer who knows what they're doing, not a replacement. The signal: senior engineers benefit more from LLMs than juniors, because they can evaluate outputs. Copilot without taste is just confident hallucination.",
      },
      {
        heading: "What I'm Watching",
        body: "Inference efficiency (Mixture of Experts, speculative decoding, FlashAttention). Multimodal models that ground language in vision and action. Agent frameworks (LangGraph, CrewAI) that orchestrate LLMs with tools — this is where AI stops being a chatbot and starts being infrastructure. And the alignment question: RLHF produces obedient models but not necessarily honest ones. Constitutional AI and debate as an alignment mechanism are the most interesting research directions.",
      },
    ],
  },
];

/* ─── Modal ─────────────────────────────────────────────────────────── */

function Modal({ study, onClose }: { study: typeof CASE_STUDIES[0]; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", handleKey); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 200,
        background: "rgba(0,0,0,0.75)", backdropFilter: "blur(12px)",
        display: "flex", alignItems: "center", justifyContent: "center", padding: 16,
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          maxWidth: 680, width: "100%", maxHeight: "88vh",
          background: "#141418", border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 20, overflowY: "auto",
          boxShadow: "0 40px 100px rgba(0,0,0,0.7)",
        }}
      >
        {/* Header */}
        <div style={{
          position: "sticky", top: 0,
          background: "rgba(20,20,24,0.96)", backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          padding: "20px 28px", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16,
        }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
              <span style={{ fontSize: 20 }}>{study.emoji}</span>
              <span style={{ fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em", color: `${study.accent}99`, padding: "2px 8px", borderRadius: 6, background: `${study.accent}14`, border: `1px solid ${study.accent}25` }}>
                {study.tag}
              </span>
            </div>
            <h3 style={{ fontSize: 18, fontWeight: 900, color: "#E8E6F0", letterSpacing: "-0.02em", lineHeight: 1.2 }}>{study.title}</h3>
            <p style={{ fontSize: 12, color: "#9B95B0", marginTop: 4 }}>{study.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            style={{ flexShrink: 0, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, padding: "6px 10px", color: "#9B95B0", cursor: "pointer", fontSize: 12, fontWeight: 500 }}
          >
            ✕ Close
          </button>
        </div>

        <div style={{ padding: "24px 28px", display: "flex", flexDirection: "column", gap: 24 }}>
          {/* TL;DR */}
          <div style={{ background: `${study.accent}0E`, border: `1px solid ${study.accent}25`, borderRadius: 12, padding: "14px 18px" }}>
            <p style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: `${study.accent}99`, marginBottom: 6 }}>TL;DR</p>
            <p style={{ fontSize: 14, color: "#E8E6F0", lineHeight: 1.7, fontStyle: "italic" }}>{study.tldr}</p>
          </div>

          {/* Sections */}
          {study.sections.map((s, i) => (
            <div key={i}>
              <p style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: `${study.accent}80`, marginBottom: 8 }}>
                {s.heading}
              </p>
              <p style={{ fontSize: 14, color: "#B0ABCA", lineHeight: 1.8 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Main Component ────────────────────────────────────────────────── */

export default function CaseStudies() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState<typeof CASE_STUDIES[0] | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current?.querySelector(".section-header") ?? null,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true } }
      );
      sectionRef.current?.querySelectorAll(".cs-card").forEach((el, i) => {
        gsap.fromTo(el, { opacity: 0, y: 28 }, {
          opacity: 1, y: 0, duration: 0.65, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 87%", once: true },
          delay: i * 0.08,
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section id="case-studies" ref={sectionRef} style={{ position: "relative", maxWidth: 860, margin: "0 auto", padding: "96px 40px", zIndex: 1 }}>
        <div style={{ height: 1, background: "rgba(255,255,255,0.06)", marginBottom: 64 }} />

        <div className="section-header" style={{ marginBottom: 56, opacity: 0 }}>
          <p style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.18em", color: "rgba(124,111,234,0.5)", marginBottom: 10 }}>
            05 — Research
          </p>
          <h2 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 900, letterSpacing: "-0.03em", color: "#E8E6F0" }}>
            Case Studies
          </h2>
          <p style={{ fontSize: 14, color: "#9B95B0", marginTop: 10, maxWidth: 480, lineHeight: 1.65 }}>
            Deep dives into technology domains I obsess over — written to understand, not to impress.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: 14 }}>
          {CASE_STUDIES.map(study => (
            <div
              key={study.id}
              className="cs-card"
              onClick={() => setActive(study)}
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 16,
                padding: "24px 26px",
                cursor: "pointer",
                opacity: 0,
                transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = `${study.accent}40`;
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 32px ${study.accent}18`;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              {/* Tag + emoji */}
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                <span style={{ fontSize: 22 }}>{study.emoji}</span>
                <span style={{
                  fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em",
                  color: `${study.accent}99`, padding: "2px 8px", borderRadius: 6,
                  background: `${study.accent}12`, border: `1px solid ${study.accent}25`,
                }}>
                  {study.tag}
                </span>
              </div>

              {/* Title */}
              <h3 style={{ fontSize: 15, fontWeight: 800, color: "#E8E6F0", letterSpacing: "-0.02em", marginBottom: 6, lineHeight: 1.3 }}>
                {study.title}
              </h3>
              <p style={{ fontSize: 12, color: "#9B95B0", marginBottom: 16, lineHeight: 1.5 }}>{study.subtitle}</p>

              {/* TL;DR preview */}
              <p style={{ fontSize: 13, color: "#B0ABCA", lineHeight: 1.65, marginBottom: 20 }}>
                {study.tldr.slice(0, 120)}…
              </p>

              {/* Sections preview */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
                {study.sections.map(s => (
                  <span key={s.heading} style={{
                    fontSize: 10, padding: "2px 8px", borderRadius: 6,
                    background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                    color: "#9B95B0",
                  }}>
                    {s.heading}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <p style={{ fontSize: 11, color: "#7C6FEA", display: "flex", alignItems: "center", gap: 8, opacity: 0.7 }}>
                <span style={{ width: 16, height: 1, background: "currentColor", display: "inline-block" }} />
                Read full case study
              </p>
            </div>
          ))}
        </div>
      </section>

      {active && <Modal study={active} onClose={() => setActive(null)} />}
    </>
  );
}
