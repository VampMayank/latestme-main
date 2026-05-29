"use client";

import { useEffect } from "react";

const contacts = [
  {
    label: "WhatsApp",
    sub: "+91 98918 23495",
    href: "https://wa.me/919540038915",
    color: "#22C55E",
    bg: "rgba(34,197,94,0.08)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    label: "Email",
    sub: "mayank.1196mverma@gmail.com",
    href: "mailto:mayank.1196mverma@gmail.com",
    color: "#a78bfa",
    bg: "rgba(124,111,234,0.08)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    sub: "linkedin.com/in/mayank-verma-9a1b6a225",
    href: "https://linkedin.com/in/mayank-verma-9a1b6a225",
    color: "#38BDF8",
    bg: "rgba(56,189,248,0.08)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
];

export default function ContactModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", handleKey); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{ position: "fixed", inset: 0, zIndex: 1000, background: "rgba(0,0,0,0.5)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{ width: "100%", maxWidth: 400, borderRadius: 24, overflow: "hidden", background: "rgba(15,15,20,0.85)", backdropFilter: "blur(40px)", WebkitBackdropFilter: "blur(40px)", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04) inset" }}
      >
        {/* Top accent bar */}
        <div style={{ height: 3, background: "linear-gradient(90deg, #7C6FEA 0%, #a78bfa 50%, #22C55E 100%)" }} />

        {/* Header */}
        <div style={{ padding: "28px 28px 0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <h3 style={{ fontSize: 22, fontWeight: 900, color: "#F0EEF8", letterSpacing: "-0.03em", marginBottom: 6 }}>Let&apos;s talk</h3>
              <p style={{ fontSize: 13, color: "#4A4660", lineHeight: 1.5 }}>Pick your preferred channel</p>
            </div>
            <button
              onClick={onClose}
              style={{ width: 32, height: 32, borderRadius: 10, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "#6B6585", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "background 0.15s, color 0.15s" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLButtonElement; el.style.background = "rgba(255,255,255,0.1)"; el.style.color = "#E8E6F0"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLButtonElement; el.style.background = "rgba(255,255,255,0.05)"; el.style.color = "#6B6585"; }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M1 1l10 10M11 1L1 11"/></svg>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div style={{ padding: "20px 20px 24px", display: "flex", flexDirection: "column", gap: 10 }}>
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 18px", borderRadius: 16, background: c.bg, border: `1px solid ${c.color}20`, textDecoration: "none", position: "relative", overflow: "hidden", transition: "transform 0.18s, border-color 0.18s, background 0.18s" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.transform = "scale(1.02)"; el.style.borderColor = `${c.color}50`; el.style.background = `${c.color}14`; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.transform = "scale(1)"; el.style.borderColor = `${c.color}20`; el.style.background = c.bg; }}
            >
              {/* Glow blob */}
              <div style={{ position: "absolute", top: -20, right: -20, width: 80, height: 80, borderRadius: "50%", background: c.color, opacity: 0.06, filter: "blur(20px)", pointerEvents: "none" }} />

              {/* Icon */}
              <div style={{ width: 46, height: 46, borderRadius: 13, background: `${c.color}18`, border: `1px solid ${c.color}30`, display: "flex", alignItems: "center", justifyContent: "center", color: c.color, flexShrink: 0 }}>
                {c.icon}
              </div>

              {/* Text */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontSize: 14, fontWeight: 700, color: "#E8E6F0", letterSpacing: "-0.01em" }}>{c.label}</p>
                <p style={{ fontSize: 12, color: "#5A5470", marginTop: 3, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c.sub}</p>
              </div>

              {/* Arrow */}
              <div style={{ width: 28, height: 28, borderRadius: 8, background: `${c.color}12`, display: "flex", alignItems: "center", justifyContent: "center", color: c.color, flexShrink: 0 }}>
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
