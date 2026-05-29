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
    accent: "#06B6D4",
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
    accent: "#059669",
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
    accent: "#DB2777",
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
    accent: "#0EA5E9",
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
      style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(12px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 30 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl w-full max-h-[88vh] overflow-y-auto rounded-2xl"
        style={{ background: "var(--bg)", border: "1px solid var(--border)", boxShadow: "0 32px 80px rgba(0,0,0,0.5)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="sticky top-0 px-7 py-5 flex items-start justify-between"
          style={{
            background: "var(--bg)",
            backdropFilter: "blur(8px)",
            borderBottom: "1px solid var(--border)",
            opacity: 0.98
          }}
        >
          <div>
            <div className="flex items-center gap-2.5 mb-1">
              <h3 className="text-xl font-black" style={{ color: "var(--text)" }}>
                {project.name}
              </h3>
              <span
                className="text-xs px-2.5 py-0.5 rounded-full font-medium"
                style={{ background: `${project.accent}20`, color: project.accent, border: `1px solid ${project.accent}40` }}
              >
                {project.status}
              </span>
            </div>
            <p className="text-sm" style={{ color: "var(--text3)" }}>{project.tagline}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full transition-colors"
            style={{ color: "var(--text3)" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "var(--card)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "transparent")}
          >
            <X size={15} />
          </button>
        </div>

        <div className="px-7 py-6 space-y-7">
          <div className="grid grid-cols-4 gap-2.5">
            {project.metrics.map(({ icon: Icon, label, sub }) => (
              <div
                key={sub}
                className="text-center rounded-xl py-3"
                style={{ border: "1px solid var(--border)", background: "var(--card)" }}
              >
                <Icon size={13} style={{ color: project.accent, margin: "0 auto 4px" }} />
                <p className="text-sm font-bold" style={{ color: "var(--text)" }}>{label}</p>
                <p className="text-xs" style={{ color: "var(--text3)" }}>{sub}</p>
              </div>
            ))}
          </div>

          {[
            { label: "Origin Story", content: `"${project.caseStudy.origin}"`, italic: true },
            { label: "The Problem", content: project.caseStudy.problem },
            { label: "Architecture", content: project.caseStudy.architecture },
          ].map(({ label, content, italic }) => (
            <div key={label}>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-2" style={{ color: `${project.accent}80` }}>{label}</p>
              <p
                className={`text-sm leading-relaxed ${italic ? "pl-4" : ""}`}
                style={{
                  color: "var(--text2)",
                  fontStyle: italic ? "italic" : "normal",
                  borderLeft: italic ? `2px solid ${project.accent}40` : "none",
                }}
              >
                {content}
              </p>
            </div>
          ))}

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-3" style={{ color: `${project.accent}80` }}>Hard Problems</p>
            <div className="space-y-2">
              {project.caseStudy.challenges.map((c, i) => (
                <div
                  key={i}
                  className="flex gap-3 text-sm rounded-xl px-4 py-3"
                  style={{ background: "var(--card)", border: "1px solid var(--border)", color: "var(--text2)" }}
                >
                  <span className="shrink-0 font-bold" style={{ color: project.accent }}>{i + 1}.</span>
                  {c}
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-3" style={{ color: `${project.accent}80` }}>Engineering Decisions</p>
            <ul className="space-y-2">
              {project.caseStudy.engineering.map((e, i) => (
                <li key={i} className="text-sm flex gap-3" style={{ color: "var(--text2)" }}>
                  <span style={{ marginTop: 8, flexShrink: 0, width: 5, height: 5, borderRadius: "50%", background: `${project.accent}40` }} />
                  {e}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="rounded-xl p-5"
            style={{ background: `${project.accent}10`, border: `1px solid ${project.accent}25` }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-2" style={{ color: `${project.accent}80` }}>Outcome</p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text)" }}>{project.caseStudy.outcome}</p>
          </div>

          <div className="flex flex-wrap gap-2 pb-1">
            {project.stack.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 text-xs rounded-full"
                style={{ color: "var(--text3)", background: "var(--card)", border: "1px solid var(--border)" }}
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
        <p style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.18em", color: "rgba(6, 182, 212, 0.5)", marginBottom: 10 }}>02 — Selected Work</p>
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
              transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = `${project.accent}40`;
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 32px ${project.accent}18`;
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
                  <h3 style={{ fontSize: 18, fontWeight: 900, color: "var(--text)" }}>{project.name}</h3>
                  <span style={{ fontSize: 11, padding: "2px 10px", borderRadius: 999, fontWeight: 500, background: `${project.accent}18`, color: project.accent, border: `1px solid ${project.accent}35` }}>
                    {project.status}
                  </span>
                  <span style={{ fontSize: 11, color: "var(--text3)" }}>{project.period}</span>
                </div>
                <p style={{ fontSize: 13, color: "var(--text3)", marginBottom: 8 }}>{project.tagline}</p>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--text2)", marginBottom: 16 }}>{project.summary}</p>

                <div style={{ display: "flex", gap: 20, flexWrap: "wrap", marginBottom: 14 }}>
                  {project.metrics.map(({ label, sub }) => (
                    <div key={sub} style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                      <span style={{ fontSize: 13, fontWeight: 700, color: project.accent }}>{label}</span>
                      <span style={{ fontSize: 11, color: "var(--text3)" }}>{sub}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {project.stack.slice(0, 6).map((t) => (
                    <span
                      key={t}
                      style={{ padding: "2px 10px", fontSize: 11, borderRadius: 999, color: "var(--text3)", background: "var(--card)", border: "1px solid var(--border)" }}
                    >
                      {t}
                    </span>
                  ))}
                  {project.stack.length > 6 && (
                    <span style={{ padding: "2px 10px", fontSize: 11, borderRadius: 999, color: "var(--text3)" }}>+{project.stack.length - 6}</span>
                  )}
                </div>
              </div>

              <ArrowUpRight size={16} style={{ color: "var(--text3)", flexShrink: 0, marginTop: 4 }} />
            </div>

            <p style={{ fontSize: 11, marginTop: 16, display: "flex", alignItems: "center", gap: 8, color: "var(--text3)" }}>
              <span style={{ width: 16, height: 1, background: "currentColor", display: "inline-block" }} />
              Read full case study
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
