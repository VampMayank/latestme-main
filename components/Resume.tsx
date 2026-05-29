"use client";

export default function Resume() {
  return (
    <div id="about" style={{ position: "relative", zIndex: 10, maxWidth: 700, margin: "0 auto", padding: "80px 40px 80px", color: "var(--text2)" }}>

      {/* Name */}
      <h1 style={{ fontSize: "clamp(32px,5vw,52px)", fontWeight: 900, letterSpacing: "-0.03em", color: "var(--text)", marginBottom: 12, lineHeight: 1 }}>
        Mayank Verma
      </h1>

      {/* Contacts */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 20px", marginBottom: 48, fontSize: 14, color: "var(--text3)", fontWeight: 600 }}>
        {[
          { label: "mayank.1196mverma@gmail.com", href: "mailto:mayank.1196mverma@gmail.com" },
          { label: "+91 95400 38915", href: "tel:+919540038915" },
          { label: "GitHub", href: "https://github.com/VampMayank" },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/mayank-verma-556291266" },
        ].map(({ label, href }) => (
          <a key={label} href={href} style={{ color: "inherit", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--text3)")}>
            {label}
          </a>
        ))}
      </div>

      <Divider />

      {/* Summary */}
      <Section label="Summary">
        <p style={{ fontSize: 15, color: "var(--text2)", lineHeight: 1.75, fontWeight: 400 }}>
          Product-focused full-stack developer experienced in shipping fast, scalable SaaS features with React, Next.js, and Node.js. Strong in building real-time systems, enterprise dashboards, and production-ready applications with a focus on SEO and performance.
        </p>
      </Section>

      <Divider />

      {/* Currently Building */}
      <Section label="Currently Building">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {[
            { name: "Argmac Dashboard", desc: "Unified enterprise command center with real-time SEO & task management.", tag: "Active · Dashboard", accent: "#22D3EE" },
            { name: "Savora", desc: "Serverless expense manager with real-time analytics and sub-200ms load times.", tag: "Live · SaaS", accent: "#34D399" },
          ].map(item => (
            <div key={item.name} style={{ background: "var(--card)", border: `1px solid var(--border)`, borderRadius: 12, padding: "18px 20px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                <p style={{ fontSize: 14, fontWeight: 800, color: "var(--text)" }}>{item.name}</p>
                <span style={{ fontSize: 10, color: item.accent, background: `${item.accent}15`, border: `1px solid ${item.accent}35`, borderRadius: 5, padding: "2px 8px", fontWeight: 800, letterSpacing: "0.06em" }}>{item.tag}</span>
              </div>
              <p style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.6, fontWeight: 400 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Divider />

      {/* Skills */}
      <Section label="Skills">
        <SkillRow label="Frontend"     value="React, Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, GSAP, Recharts" />
        <SkillRow label="Backend"      value="Node.js, Express, NestJS, Supabase Auth, REST APIs, WebSockets, JWT" />
        <SkillRow label="Databases"    value="PostgreSQL, MongoDB, Supabase, Neon DB, Redis" />
        <SkillRow label="Mobile"       value="React Native (Android & iOS), Expo" />
        <SkillRow label="Tools & SEO"  value="Vercel, Git, GitHub Actions, Docker, Google Search Console API, Technical SEO, Site Architecture, Shopify" />
      </Section>

      <Divider />

      {/* Experience */}
      <div id="experience" style={{ scrollMarginTop: 80 }} />
      <Section label="Work Experience">
        <Job
          company="Argmac"
          link="Developer Intern"
          role="Fullstack Developer Intern"
          stack="Enterprise Dashboard, Shopify, Technical SEO, Next.js, Supabase"
          period="May 2026 – Present"
          bullets={[
            "Architected and deployed a centralized enterprise dashboard using Next.js and Supabase to unify disparate datasets, employee task management, and order inventory into a single frame.",
            "Integrated Google Search Console API to automate technical SEO analysis, providing real-time store performance insights and improving search visibility.",
            "Maintaining and resolving complex issues on the company’s infrastructure and Shopify store to ensure 99.9% optimal functionality.",
          ]}
        />
        <Job
          company="Indian Oil Corporation Limited"
          link="Summer Intern"
          role="Fullstack Developer Intern"
          stack="React.js, TypeScript, MySQL, Bootstrap"
          period="June 2025 – July 2025"
          bullets={[
            "Contributed to a centralized graphical user interface (GUI) that enabled enterprise network administrators to manage distributed devices.",
            "Built functional, highly responsive interfaces using React.js and TypeScript to automate and improve daily monitoring workflows.",
            "Managed structured relational data using MySQL, ensuring efficient performance querying of complex network elements.",
          ]}
        />
      </Section>

      <Divider />

      {/* Projects */}
      <div id="projects" style={{ scrollMarginTop: 80 }} />
      <Section label="Projects">
        <Job
          company="Argmac Dashboard"
          link="Admin Command Center"
          role="Lead Developer"
          stack="Next.js, Supabase, Vercel, GSC API, PostgreSQL, Tailwind"
          period="May 2026 – Present"
          bullets={[
            "Unified diverse enterprise datasets (inventory, tasks, SEO) into a single web application with real-time updates.",
            "Developed an automated SEO analysis tool using Google Search Console API for instant store performance tracking.",
            "Implemented secure employee management and task assigning systems using Supabase RLS and real-time features.",
          ]}
        />
        <Job
          company="Savora"
          link="Expense Manager"
          role="Fullstack Developer"
          stack="Next.js 15, NestJS, PostgreSQL, Neon DB, Cloud Platforms, Render, CI/CD"
          period="Jan 2026 – Present"
          bullets={[
            "Architected serverless backend with NestJS and Neon PostgreSQL; achieved sub-200ms dashboard load times via edge caching.",
            "Implemented secure JWT authentication and environment variable management across staging and production.",
            "Built real-time expense tracking with category breakdowns and Recharts-powered analytics dashboard.",
          ]}
        />
      </Section>

      <Divider />

      {/* Education */}
      <Section label="Education">
        <div style={{ marginBottom: 24 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4 }}>
            <p style={{ fontSize: 15, fontWeight: 800, color: "var(--text)" }}>Dronacharya College of Engineering</p>
            <span style={{ fontSize: 12, color: "var(--text3)", fontWeight: 700 }}>Sept 2022 – Present</span>
          </div>
          <p style={{ fontSize: 14, color: "var(--text2)", fontWeight: 500 }}>B.Tech in Computer Science and Engineering · GPA: 7.5/10</p>
          <p style={{ fontSize: 13, color: "var(--text3)", marginTop: 6, fontWeight: 500 }}>Coursework: DSA, DBMS, OOP, Networking, OS</p>
        </div>
      </Section>

      <Divider />

      {/* Certificates */}
      <Section label="Certificates">
        {[
          ["Meta Front-End Developer Professional Certificate", "Coursera", "2025"],
          ["Google UX Design Professional Certificate", "Coursera", "2025"],
          ["Meta React Native Specialization", "Coursera", "2024"],
        ].map(([name, issuer, year]) => (
          <div key={name} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 14 }}>
            <p style={{ fontSize: 14, color: "var(--text2)", fontWeight: 600 }}>{name} <span style={{ color: "var(--text3)", fontSize: 12, fontWeight: 500 }}>({issuer})</span></p>
            <p style={{ fontSize: 12, color: "var(--text3)", flexShrink: 0, marginLeft: 16, fontWeight: 800 }}>{year}</p>
          </div>
        ))}
      </Section>

    </div>
  );
}

function Divider() {
  return <div style={{ height: 1, background: "var(--border)", margin: "40px 0" }} />;
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.22em", color: "var(--accent)", marginBottom: 24 }}>{label}</p>
      {children}
    </div>
  );
}

function Job({ company, link, role, stack, period, bullets }: {
  company: string; link: string; role: string; stack: string; period: string; bullets: string[];
}) {
  return (
    <div style={{ marginBottom: 40 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
          <p style={{ fontSize: 16, fontWeight: 800, color: "var(--text)" }}>{company}</p>
          <span style={{ fontSize: 12, color: "var(--accent)", fontWeight: 700 }}>{link}</span>
        </div>
        <span style={{ fontSize: 12, color: "var(--text3)", flexShrink: 0, marginLeft: 16, fontWeight: 700 }}>{period}</span>
      </div>
      <p style={{ fontSize: 14, color: "var(--text2)", marginBottom: 6, fontWeight: 600 }}>{role}</p>
      <p style={{ fontSize: 12, color: "var(--accent)", fontFamily: "monospace", marginBottom: 16, lineHeight: 1.6, fontWeight: 600, opacity: 0.9 }}>{stack}</p>
      <ul style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {bullets.map((b, i) => (
          <li key={i} style={{ display: "flex", gap: 12, fontSize: 15, color: "var(--text2)", lineHeight: 1.7, fontWeight: 400 }}>
            <span style={{ flexShrink: 0, marginTop: 10, width: 4, height: 4, borderRadius: "50%", background: "var(--accent)", opacity: 0.6 }} />
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SkillRow({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: "flex", gap: 24, marginBottom: 12 }}>
      <p style={{ fontSize: 12, color: "var(--text3)", width: 100, flexShrink: 0, paddingTop: 2, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</p>
      <p style={{ fontSize: 14.5, color: "var(--text2)", lineHeight: 1.6, fontWeight: 500 }}>{value}</p>
    </div>
  );
}
