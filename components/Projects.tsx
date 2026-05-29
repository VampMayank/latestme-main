"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X, Zap, TrendingUp, Users, Clock, Layout, Search, Package } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    name: "Argmac Admin Dashboard",
    tagline: "Unified Enterprise Infrastructure",
    period: "May 2026 – Present",
    status: "Active",
    stack: ["Next.js", "Supabase", "Vercel", "GSC API", "PostgreSQL", "Tailwind"],
    summary: "A centralized command center for Argmac to manage datasets, employee tasks, inventory, and real-time SEO analytics.",
    metrics: [{ icon: Search, label: "SEO", sub: "Insights" }, { icon: Layout, label: "Unified", sub: "Frame" }, { icon: Users, label: "Task", sub: "Mgmt" }, { icon: Package, label: "Inventory", sub: "Control" }],
    accent: "#22D3EE",
    caseStudy: {
      origin: "Developed to solve the fragmentation of company data and workflows into a single efficient web application.",
      problem: "Disparate systems for SEO tracking, inventory, and employee tasks led to operational inefficiencies.",
      architecture: "Next.js frontend for speed, Supabase for a robust backend and real-time database, deployed on Vercel.",
      challenges: ["Aligning diverse datasets into a single frame", "Integrating Google Search Console for automated SEO analysis", "Implementing real-time task assigning and inventory tracking"],
      engineering: ["API integration for GSC data ingestion", "Supabase RLS for secure employee management", "Optimized Next.js routes for enterprise-scale inventory"],
      outcome: "A single, high-performance web app that streamlined Argmac's entire internal operations.",
    },
  },
  {
    name: "Savora",
    tagline: "Expense Intelligence for Individuals",
    period: "Jan 2026 – Present",
    status: "Live",
    stack: ["Next.js 15", "NestJS", "PostgreSQL", "Neon DB", "Render", "Recharts"],
    summary: "A serverless expense manager with sub-200ms dashboard load times and real-time tracking.",
    metrics: [{ icon: Zap, label: "<200ms", sub: "load time" }, { icon: TrendingUp, label: "JWT", sub: "auth" }, { icon: Users, label: "Neon", sub: "serverless" }, { icon: Clock, label: "PostgreSQL", sub: "DB" }],
    accent: "#34D399",
    caseStudy: {
      origin: "Built to solve the personal need for a fast and smart expense tracking tool.",
      problem: "Existing tools were slow and lacked automated categorization and real-time insights.",
      architecture: "NestJS backend with Neon PostgreSQL, Next.js frontend deployed.",
      challenges: ["Achieving sub-200ms load times", "Implementing secure JWT authentication", "Managing serverless database connections"],
      engineering: ["Edge caching for dashboards", "JWT refresh rotation", "Recharts for dynamic analytics"],
      outcome: "Sub-200ms dashboard loads and robust session handling.",
    },
  },
  {
    name: "Zenra",
    tagline: "Connect Through Music",
    period: "Jan 2025 – Dec 2025",
    status: "Completed",
    stack: ["React Native", "Node.js", "MongoDB", "Socket.io", "Firebase"],
    summary: "A cross-platform music-based social app matching people based on music taste.",
    metrics: [{ icon: Users, label: "500+", sub: "active users" }, { icon: TrendingUp, label: "99.5%", sub: "uptime" }, { icon: Zap, label: "25%", sub: "faster load" }, { icon: Clock, label: "Low-latency", sub: "chat" }],
    accent: "#F472B6",
    caseStudy: {
      origin: "Inspired by the deep compatibility signal of music taste.",
      problem: "Generic social apps lack strong compatibility signals.",
      architecture: "Node.js backend with Socket.io for real-time features, React Native for mobile.",
      challenges: ["Real-time matchmaking at scale", "Cross-platform consistency", "Optimizing bundle size"],
      engineering: ["Socket.io matchmaking backend", "Code splitting for faster loads", "Firebase for push notifications"],
      outcome: "Grew to 500+ active users with 99.5% uptime.",
    },
  },
  {
    name: "Network Management System",
    tagline: "Centralized Hardware Monitoring",
    period: "July 2025 – Aug 2025",
    status: "Completed",
    stack: ["React.js", "TypeScript", "MySQL", "Node.js"],
    summary: "A full-stack tool to monitor performance and health of critical network hardware.",
    metrics: [{ icon: Zap, label: "Real-time", sub: "monitoring" }, { icon: TrendingUp, label: "Robust", sub: "GUI" }, { icon: Users, label: "Centralized", sub: "mgmt" }, { icon: Clock, label: "System", sub: "logs" }],
    accent: "#38BDF8",
    caseStudy: {
      origin: "Developed to improve daily monitoring workflows for network administrators.",
      problem: "Need for a centralized view of distributed hardware health and logs.",
      architecture: "Node.js backend with MySQL, React.js frontend with reusable components.",
      challenges: ["Ingesting real-time hardware data", "Designing reusable React components", "Efficient querying of network elements"],
      engineering: ["Real-time data analytics display", "System logs integration", "Hardware health metrics visualization"],
      outcome: "Improved monitoring efficiency and hardware health visibility.",
    },
  },
];

function CaseStudyModal({ project, onClose }: { project: (typeof projects)[0]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(12px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 30 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl w-full max-h-[88vh] overflow-y-auto rounded-2xl"
        style={{ background: "var(--bg)", border: "1px solid var(--border)", boxShadow: "0 32px 80px rgba(0,0,0,0.6)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="sticky top-0 px-7 py-5 flex items-start justify-between"
          style={{
            background: "var(--bg)",
            backdropFilter: "blur(8px)",
            borderBottom: "1px solid var(--border)",
            zIndex: 10
          }}
        >
          <div>
            <div className="flex items-center gap-2.5 mb-1">
              <h3 className="text-xl font-black" style={{ color: "var(--text)" }}>
                {project.name}
              </h3>
              <span
                className="text-xs px-2.5 py-0.5 rounded-full font-bold"
                style={{ background: `${project.accent}25`, color: project.accent, border: `1px solid ${project.accent}45` }}
              >
                {project.status}
              </span>
            </div>
            <p className="text-sm font-medium" style={{ color: "var(--text2)" }}>{project.tagline}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full transition-colors"
            style={{ color: "var(--text2)" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "var(--card)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "transparent")}
          >
            <X size={18} />
          </button>
        </div>

        <div className="px-7 py-6 space-y-8">
          <div className="grid grid-cols-4 gap-2.5">
            {project.metrics.map(({ icon: Icon, label, sub }) => (
              <div
                key={sub}
                className="text-center rounded-xl py-3 px-1"
                style={{ border: "1px solid var(--border)", background: "var(--card)" }}
              >
                <Icon size={14} style={{ color: project.accent, margin: "0 auto 6px" }} />
                <p className="text-sm font-bold" style={{ color: "var(--text)" }}>{label}</p>
                <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "var(--text3)" }}>{sub}</p>
              </div>
            ))}
          </div>

          {[
            { label: "Origin Story", content: `"${project.caseStudy.origin}"`, italic: true },
            { label: "The Problem", content: project.caseStudy.problem },
            { label: "Architecture", content: project.caseStudy.architecture },
          ].map(({ label, content, italic }) => (
            <div key={label}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: project.accent }}>{label}</p>
              <p
                className={`text-[15px] leading-relaxed ${italic ? "pl-4" : ""}`}
                style={{
                  color: "var(--text2)",
                  fontStyle: italic ? "italic" : "normal",
                  borderLeft: italic ? `3px solid ${project.accent}50` : "none",
                }}
              >
                {content}
              </p>
            </div>
          ))}

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: project.accent }}>Hard Problems</p>
            <div className="space-y-3">
              {project.caseStudy.challenges.map((c, i) => (
                <div
                  key={i}
                  className="flex gap-4 text-[14.5px] rounded-xl px-5 py-4"
                  style={{ background: "var(--card)", border: "1px solid var(--border)", color: "var(--text2)" }}
                >
                  <span className="shrink-0 font-black" style={{ color: project.accent }}>{i + 1}.</span>
                  {c}
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: project.accent }}>Engineering Decisions</p>
            <ul className="space-y-3">
              {project.caseStudy.engineering.map((e, i) => (
                <li key={i} className="text-[14.5px] flex gap-4" style={{ color: "var(--text2)" }}>
                  <span style={{ marginTop: 9, flexShrink: 0, width: 5, height: 5, borderRadius: "50%", background: project.accent }} />
                  {e}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="rounded-xl p-6"
            style={{ background: `${project.accent}08`, border: `1px solid ${project.accent}20` }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: project.accent }}>Outcome</p>
            <p className="text-[15px] leading-relaxed font-medium" style={{ color: "var(--text)" }}>{project.caseStudy.outcome}</p>
          </div>

          <div className="flex flex-wrap gap-2 pb-2">
            {project.stack.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 text-xs font-bold rounded-full"
                style={{ color: "var(--text2)", background: "rgba(255,255,255,0.06)", border: "1px solid var(--border)" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [active, setActive] = useState<(typeof projects)[0] | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

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

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "power2.out",
            scrollTrigger: { trigger: card, start: "top 85%", once: true },
            delay: i * 0.1,
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} style={{ maxWidth: 860, margin: "0 auto", padding: "0 40px 100px" }}>
      <div className="section-header" style={{ marginBottom: 56, opacity: 0, paddingTop: "40px" }}>
        <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em", color: "var(--accent)", marginBottom: 10 }}>02 — Selected Work</p>
        <h2 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 900, letterSpacing: "-0.03em", color: "var(--text)" }}>Projects</h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {projects.map((project, i) => (
          <div
            key={project.name}
            ref={(el) => { if (el) cardsRef.current[i] = el; }}
            onClick={() => setActive(project)}
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: 16,
              padding: "24px 28px",
              cursor: "pointer",
              opacity: 0,
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = `${project.accent}50`;
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = `0 12px 40px ${project.accent}15`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16 }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8, flexWrap: "wrap" }}>
                  <h3 style={{ fontSize: 20, fontWeight: 900, color: "var(--text)" }}>{project.name}</h3>
                  <span style={{ fontSize: 11, padding: "2px 10px", borderRadius: 999, fontWeight: 700, background: `${project.accent}20`, color: project.accent, border: `1px solid ${project.accent}40` }}>
                    {project.status}
                  </span>
                  <span style={{ fontSize: 11, color: "var(--text3)", fontWeight: 600 }}>{project.period}</span>
                </div>
                <p style={{ fontSize: 14, color: "var(--accent)", fontWeight: 700, marginBottom: 8 }}>{project.tagline}</p>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--text2)", marginBottom: 16 }}>{project.summary}</p>

                <div style={{ display: "flex", gap: 24, flexWrap: "wrap", marginBottom: 16 }}>
                  {project.metrics.map(({ label, sub }) => (
                    <div key={sub} style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                      <span style={{ fontSize: 14, fontWeight: 800, color: "var(--text)" }}>{label}</span>
                      <span style={{ fontSize: 11, color: "var(--text3)", fontWeight: 700, textTransform: "uppercase" }}>{sub}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {project.stack.slice(0, 6).map((t) => (
                    <span
                      key={t}
                      style={{ padding: "3px 12px", fontSize: 12, borderRadius: 999, fontWeight: 600, color: "var(--text2)", background: "rgba(255,255,255,0.06)", border: "1px solid var(--border)" }}
                    >
                      {t}
                    </span>
                  ))}
                  {project.stack.length > 6 && (
                    <span style={{ padding: "3px 12px", fontSize: 12, borderRadius: 999, fontWeight: 600, color: "var(--text3)" }}>+{project.stack.length - 6}</span>
                  )}
                </div>
              </div>

              <div style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--card)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                 <ArrowUpRight size={18} style={{ color: project.accent }} />
              </div>
            </div>

            <p style={{ fontSize: 12, marginTop: 20, display: "flex", alignItems: "center", gap: 8, color: project.accent, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              <span style={{ width: 24, height: 2, background: "currentColor", display: "inline-block", opacity: 0.4 }} />
              Explore Case Study
            </p>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {active && <CaseStudyModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}
