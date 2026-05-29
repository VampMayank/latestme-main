"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Home",       id: "home"       },
  { label: "About",      id: "about"      },
  { label: "Projects",   id: "projects"   },
  { label: "Experience", id: "experience" },
  { label: "Skills",     id: "skills"     },
  { label: "Education",  id: "education"  },
];

export default function Nav() {
  const [activeId, setActiveId] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Force dark theme on mount
    document.documentElement.setAttribute("data-theme", "dark");

    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      if (window.scrollY < 100) { setActiveId("home"); return; }
      
      const ids = links.map(l => l.id).filter(id => id !== "home");
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.getBoundingClientRect().top <= 100) { 
          setActiveId(ids[i]); 
          return; 
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMenuOpen(false);
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.pushState(null, "", "/");
      setActiveId("home");
      return;
    }
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    window.history.pushState(null, "", `#${id}`);
    setActiveId(id);
  };

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 999,
        height: 60, display: "flex", alignItems: "center", justifyContent: "space-between",
        paddingLeft: "clamp(20px, 4vw, 48px)", paddingRight: "clamp(20px, 4vw, 48px)",
        backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
        background: scrolled ? "var(--bg)" : "transparent",
        opacity: scrolled ? 0.98 : 1,
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "background 0.3s, border-color 0.3s, opacity 0.3s",
      }}>

        {/* Logo */}
        <a href="/" onClick={e => handleLink(e, "home")} style={{ textDecoration: "none", flexShrink: 0 }}>
          <span style={{ fontSize: 18, fontWeight: 800, color: "var(--text)", letterSpacing: "0.15em", userSelect: "none" }}>MV</span>
        </a>

        {/* Desktop links */}
        <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 2 }}>
          {links.map(l => {
            const isActive = activeId === l.id;
            return (
              <a key={l.id} href={l.id === "home" ? "/" : `#${l.id}`} onClick={e => handleLink(e, l.id)}
                style={{ height: 32, display: "inline-flex", alignItems: "center", padding: "0 14px", fontSize: 13, fontWeight: isActive ? 600 : 400, color: isActive ? "var(--text)" : "var(--text3)", textDecoration: "none", borderRadius: 6, whiteSpace: "nowrap", background: isActive ? "var(--card)" : "transparent", transition: "all 0.15s" }}
              >{l.label}</a>
            );
          })}
        </div>

        {/* Desktop CTA (Theme Toggle Removed) */}
        <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
          <a
            href="/mayank-verma-resume.pdf"
            download
            style={{ height: 34, display: "inline-flex", alignItems: "center", gap: 7, padding: "0 16px", fontSize: 13, fontWeight: 600, color: '#0a0a0e', borderRadius: 8, background: "var(--text)", whiteSpace: "nowrap", textDecoration: "none", transition: "opacity 0.15s" }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
            Resume
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="nav-mobile" style={{ display: "none", alignItems: "center" }}>
          <button onClick={() => setMenuOpen(v => !v)}
            style={{ flexDirection: "column", gap: 5, background: "transparent", border: "none", cursor: "pointer", padding: 6, display: "flex" }}
          >
            <span style={{ width: 22, height: 2, background: "var(--text)", borderRadius: 2, display: "block", transition: "transform 0.2s, opacity 0.2s", transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none" }} />
            <span style={{ width: 22, height: 2, background: "var(--text)", borderRadius: 2, display: "block", transition: "opacity 0.2s", opacity: menuOpen ? 0 : 1 }} />
            <span style={{ width: 22, height: 2, background: "var(--text)", borderRadius: 2, display: "block", transition: "transform 0.2s, opacity 0.2s", transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none" }} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ position: "fixed", top: 60, left: 0, right: 0, zIndex: 998, background: "var(--bg)", borderBottom: "1px solid var(--border)", padding: "16px 24px 20px", display: "flex", flexDirection: "column", gap: 4 }}>
          {links.map(l => (
            <a key={l.id} href={l.id === "home" ? "/" : `#${l.id}`} onClick={e => handleLink(e, l.id)}
              style={{ padding: "12px 8px", fontSize: 15, fontWeight: activeId === l.id ? 700 : 400, color: activeId === l.id ? "var(--text)" : "var(--text2)", textDecoration: "none", borderBottom: "1px solid var(--border)" }}
            >{l.label}</a>
          ))}
          <a href="/mayank-verma-resume.pdf" download
            style={{ marginTop: 12, height: 42, borderRadius: 8, background: "var(--text)", color: '#0a0a0e', fontSize: 14, fontWeight: 700, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}
          >Resume</a>
        </div>
      )}

    </>
  );
}
