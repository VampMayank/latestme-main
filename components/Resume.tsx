"use client";

export default function Resume() {
  return (
    <div id="about" style={{ position: "relative", zIndex: 10, maxWidth: 700, margin: "0 auto", padding: "80px 40px 80px", color: "#d4d2e8" }}>

      {/* Name */}
      <h1 style={{ fontSize: "clamp(32px,5vw,52px)", fontWeight: 900, letterSpacing: "-0.03em", color: "#eceaf6", marginBottom: 12, lineHeight: 1 }}>
        Mayank Verma
      </h1>

      {/* Contacts */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 20px", marginBottom: 48, fontSize: 13, color: "#9B95B0" }}>
        {[
          { label: "mayank.1196mverma@gmail.com", href: "mailto:mayank.1196mverma@gmail.com" },
          { label: "+91 95400 38915", href: "tel:+919540038915" },
          { label: "GitHub", href: "https://github.com/VampMayank" },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/mayank-verma-556291266" },
        ].map(({ label, href }) => (
          <a key={label} href={href} style={{ color: "inherit", textDecoration: "none" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#E8E6F0")}
            onMouseLeave={e => (e.currentTarget.style.color = "#9B95B0")}>
            {label}
          </a>
        ))}
      </div>

      <Divider />

      {/* Summary */}
      <Section label="Summary">
        <p style={{ fontSize: 14, color: "#B0ABCA", lineHeight: 1.75 }}>
          Product-focused full-stack developer experienced in shipping fast, scalable SaaS features with React, Next.js, and Node.js. Strong in building real-time systems, enterprise dashboards, and production-ready applications with a focus on SEO and performance.
        </p>
      </Section>

      <Divider />

      {/* Currently Building */}
      <Section label="Currently Building">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {[
            { name: "Argmac Dashboard", desc: "Unified enterprise command center with real-time SEO & task management.", tag: "Active · Dashboard", accent: "#06B6D4" },
            { name: "Savora", desc: "Serverless expense manager with real-time analytics and sub-200ms load times.", tag: "Live · SaaS", accent: "#059669" },
          ].map(item => (
            <div key={item.name} style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${item.accent}25`, borderRadius: 12, padding: "16px 18px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: "#E8E6F0" }}>{item.name}</p>
                <span style={{ fontSize: 10, color: `${item.accent}99`, background: `${item.accent}12`, border: `1px solid ${item.accent}22`, borderRadius: 5, padding: "2px 7px", fontWeight: 600, letterSpacing: "0.06em" }}>{item.tag}</span>
              </div>
              <p style={{ fontSize: 12, color: "#9B95B0", lineHeight: 1.6 }}>{item.desc}</p>
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
            <p style={{ fontSize: 14, fontWeight: 700, color: "#E8E6F0" }}>Dronacharya College of Engineering</p>
            <span style={{ fontSize: 12, color: "#7C7490" }}>Sept 2022 – Present</span>
          </div>
          <p style={{ fontSize: 13, color: "#B0ABCA" }}>B.Tech in Computer Science and Engineering · GPA: 7.5/10</p>
          <p style={{ fontSize: 12, color: "#7C7490", marginTop: 4 }}>Coursework: DSA, DBMS, OOP, Networking, OS</p>
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
          <div key={name} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 12 }}>
            <p style={{ fontSize: 13, color: "#B0ABCA" }}>{name} <span style={{ color: "#7C7490", fontSize: 11 }}>({issuer})</span></p>
            <p style={{ fontSize: 12, color: "#9B95B0", flexShrink: 0, marginLeft: 16, fontWeight: 600 }}>{year}</p>
          </div>
        ))}
      </Section>

    </div>
  );
}

function Divider() {
  return <div style={{ height: 1, background: "rgba(255,255,255,0.08)", margin: "40px 0" }} />;
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.22em", color: "rgba(6, 182, 212, 0.55)", marginBottom: 20 }}>{label}</p>
      {children}
    </div>
  );
}

function Job({ company, link, role, stack, period, bullets }: {
  company: string; link: string; role: string; stack: string; period: string; bullets: string[];
}) {
  return (
    <div style={{ marginBottom: 36 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 2 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
          <p style={{ fontSize: 15, fontWeight: 700, color: "#E8E6F0" }}>{company}</p>
          <span style={{ fontSize: 11, color: "#06B6D4", opacity: 0.7 }}>{link}</span>
        </div>
        <span style={{ fontSize: 12, color: "#7C7490", flexShrink: 0, marginLeft: 16 }}>{period}</span>
      </div>
      <p style={{ fontSize: 12, color: "#9B95B0", marginBottom: 5, fontWeight: 500 }}>{role}</p>
      <p style={{ fontSize: 11, color: "#5A5470", fontFamily: "monospace", marginBottom: 14, lineHeight: 1.6 }}>{stack}</p>
      <ul style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {bullets.map((b, i) => (
          <li key={i} style={{ display: "flex", gap: 10, fontSize: 13.5, color: "#B0ABCA", lineHeight: 1.7 }}>
            <span style={{ flexShrink: 0, marginTop: 9, width: 4, height: 4, borderRadius: "50%", background: "rgba(6, 182, 212, 0.5)" }} />
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SkillRow({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: "flex", gap: 24, marginBottom: 10 }}>
      <p style={{ fontSize: 11, color: "#7C7490", width: 100, flexShrink: 0, paddingTop: 1, fontWeight: 500 }}>{label}</p>
      <p style={{ fontSize: 13, color: "#B0ABCA", lineHeight: 1.6 }}>{value}</p>
    </div>
  );
}
