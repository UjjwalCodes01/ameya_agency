"use client";

import { useEffect, useState } from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ── Manager Data ─────────────────────────────────────────── */
const managers = [
  {
    name: "Tejasvi",
    initials: "T",
    title: "Manager",
    bio: "Leads strategy and client relations with a focus on measurable growth and brand excellence.",
  },
  {
    name: "Aaditya Singh",
    initials: "AS",
    title: "Manager",
    bio: "Oversees campaign execution and performance marketing operations across all client accounts.",
  },

  {
    name: "Ujjwal Tyagi",
    initials: "UT",
    title: "Manager",
    bio: "Manages digital advertising and paid media campaigns delivering consistent ROI for clients.",
  },
  {
    name: "Rudra Veer Singh Rathore",
    initials: "RR",
    title: "Manager",
    bio: "Leads SEO and organic growth initiatives building long term digital presence for every client.",
  },
];

/* ── Modal ────────────────────────────────────────────────── */
function ManagerModal({ manager, onClose }: { manager: typeof managers[0]; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", handler); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "var(--space-6)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#1A1A1A",
          border: "1px solid rgba(201,168,76,0.4)",
          borderRadius: "var(--radius-xl)",
          padding: "clamp(40px, 5vw, 60px)",
          maxWidth: "480px", width: "100%",
          textAlign: "center",
          position: "relative",
          boxShadow: "0 0 60px rgba(201,168,76,0.12)",
          animation: "modalIn 0.3s ease",
        }}
      >
        <style>{`@keyframes modalIn { from { opacity:0; transform:scale(0.94) translateY(12px); } to { opacity:1; transform:scale(1) translateY(0); } }`}</style>

        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: "absolute", top: "var(--space-5)", right: "var(--space-5)",
            background: "transparent", border: "none", cursor: "pointer",
            color: "var(--color-text-muted)", padding: "4px",
            transition: "color var(--transition-fast)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-muted)")}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>

        {/* Avatar */}
        <div style={{
          width: "100px", height: "100px", borderRadius: "50%",
          border: "1px solid var(--color-gold)",
          background: "var(--color-bg-primary)",
          display: "flex", alignItems: "center", justifyContent: "center",
          margin: "0 auto var(--space-6)",
          fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 600, color: "var(--color-gold)",
        }}>
          {manager.initials}
        </div>

        {/* Name */}
        <h2 style={{
          fontFamily: "var(--font-display)", fontSize: "1.9rem", fontWeight: 600,
          color: "var(--color-text-primary)", letterSpacing: "1px", marginBottom: "var(--space-2)",
        }}>
          {manager.name}
        </h2>

        {/* Title */}
        <p style={{
          fontFamily: "var(--font-body)", fontSize: "0.7rem", color: "var(--color-gold)",
          textTransform: "uppercase", letterSpacing: "2.5px", marginBottom: "var(--space-5)",
        }}>
          {manager.title}
        </p>

        {/* Divider */}
        <div style={{ width: "40px", height: "1px", background: "var(--color-gold)", margin: "0 auto var(--space-6)" }} />

        {/* Bio */}
        <p style={{
          fontFamily: "var(--font-body)", fontWeight: 300,
          color: "rgba(255,255,255,0.55)", lineHeight: "var(--leading-relaxed)",
          fontSize: "var(--text-base)", marginBottom: "var(--space-8)",
        }}>
          {manager.bio}
        </p>

        {/* Social placeholders */}
        <div style={{ display: "flex", gap: "var(--space-3)", justifyContent: "center" }}>
          {[
            { label: "LinkedIn", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
            { label: "Instagram", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
          ].map((s) => (
            <a
              key={s.label}
              href="#"
              aria-label={s.label}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                width: "40px", height: "40px",
                border: "1px solid var(--color-gold)", borderRadius: "var(--radius-md)",
                color: "var(--color-gold)", textDecoration: "none",
                transition: "all var(--transition-fast)",
              }}
              onMouseEnter={(e) => { const el = e.currentTarget; el.style.background = "var(--color-gold)"; el.style.color = "#0A0A0A"; }}
              onMouseLeave={(e) => { const el = e.currentTarget; el.style.background = "transparent"; el.style.color = "var(--color-gold)"; }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Manager Card ─────────────────────────────────────────── */
function ManagerCard({ manager, delay }: { manager: typeof managers[0]; delay: number }) {
  const [hovered, setHovered] = useState(false);
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        role="button"
        tabIndex={0}
        aria-label={`View profile of ${manager.name}`}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setOpen(true); }}
        style={{
          background: "#1A1A1A",
          borderWidth: "0.5px",
          borderStyle: "solid",
          borderColor: hovered ? "rgba(201,168,76,0.5)" : "rgba(201,168,76,0.2)",
          borderRadius: "var(--radius-xl)",
          padding: "clamp(28px, 3vw, 40px)",
          textAlign: "center",
          cursor: "pointer",
          transition: "all 0.35s ease",
          boxShadow: hovered ? "0 8px 40px rgba(201,168,76,0.12)" : "none",
          transform: visible ? (hovered ? "translateY(-6px)" : "translateY(0)") : "translateY(20px)",
          opacity: visible ? 1 : 0,
        }}
      >
        {/* Avatar */}
        <div style={{
          width: "120px", height: "120px", borderRadius: "50%",
          borderWidth: "1px", borderStyle: "solid", 
          borderColor: hovered ? "var(--color-gold-light)" : "var(--color-gold)",
          background: "var(--color-bg-primary)",
          display: "flex", alignItems: "center", justifyContent: "center",
          margin: "0 auto var(--space-5)",
          fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 600,
          color: "var(--color-gold)",
          transition: "border-color 0.35s ease, box-shadow 0.35s ease",
          boxShadow: hovered ? "0 0 20px rgba(201,168,76,0.2)" : "none",
        }}>
          {manager.initials}
        </div>

        {/* Name */}
        <h3 style={{
          fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 600,
          color: "var(--color-text-primary)", letterSpacing: "2px", marginBottom: "var(--space-2)",
        }}>
          {manager.name}
        </h3>

        {/* Title */}
        <p style={{
          fontFamily: "var(--font-body)", fontSize: "0.7rem", color: "var(--color-gold)",
          textTransform: "uppercase", letterSpacing: "2.5px", marginBottom: "var(--space-4)",
        }}>
          {manager.title}
        </p>

        {/* Gold line */}
        <div style={{ width: "32px", height: "1px", background: "var(--color-gold)", margin: "0 auto var(--space-4)" }} />

        {/* Bio */}
        <p style={{
          fontFamily: "var(--font-body)", fontWeight: 300,
          color: "rgba(255,255,255,0.5)", lineHeight: "var(--leading-relaxed)",
          fontSize: "var(--text-small)",
        }}>
          {manager.bio}
        </p>
      </div>

      {open && <ManagerModal manager={manager} onClose={() => setOpen(false)} />}
    </>
  );
}

/* ── Page ─────────────────────────────────────────────────── */
export default function ManagerPage() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVisible(true), 80); return () => clearTimeout(t); }, []);

  const fade = (delay: number): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(20px)",
    transition: `all 0.7s ease ${delay}ms`,
  });

  const first3 = managers.slice(0, 3);
  const last2  = managers.slice(3);

  return (
    <>
      <main style={{ minHeight: "100vh", background: "#0A0A0A", paddingBottom: "var(--section-py)" }}>
        {/* ── Hero ──────────────────────────────────────────── */}
        <section style={{
          textAlign: "center",
          padding: "clamp(80px, 10vw, 140px) 0 clamp(60px, 8vw, 100px)",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
            width: "700px", height: "400px",
            background: "radial-gradient(ellipse, rgba(201,168,76,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <div style={fade(0)}>
              <span className="eyebrow" style={{ display: "block", marginBottom: "var(--space-5)" }}>Our Leadership</span>
              <h1 style={{
                fontFamily: "var(--font-display)", fontSize: "var(--text-h1)", fontWeight: 600,
                lineHeight: 1.1, color: "var(--color-text-primary)", marginBottom: "var(--space-5)",
              }}>
                The People Behind{" "}
                <span style={{ background: "linear-gradient(135deg, var(--color-gold-light), var(--color-gold))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  The Work
                </span>
              </h1>
              <p style={{ color: "var(--color-text-secondary)", maxWidth: "520px", margin: "0 auto", lineHeight: "var(--leading-relaxed)", fontSize: "var(--text-large)" }}>
                Meet the managers who drive strategy, execution and results at Anaya Digital Marketing Agency.
              </p>
            </div>
            <div style={{ ...fade(200), width: "60px", height: "1px", background: "var(--color-gold)", margin: "var(--space-10) auto 0" }} />
          </div>
        </section>

        {/* ── Cards Grid ────────────────────────────────────── */}
        <section style={{ padding: "0 0 var(--section-py)" }}>
          <div className="container">
            {/* Row 1 — 3 cards */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "var(--space-6)",
              marginBottom: "var(--space-6)",
            }}>
              {first3.map((m, i) => (
                <ManagerCard key={m.name} manager={m} delay={200 + i * 120} />
              ))}
            </div>

            {/* Row 2 — 2 cards centered */}
            <div style={{
              display: "flex",
              gap: "var(--space-6)",
              justifyContent: "center",
              flexWrap: "wrap",
            }}>
              {last2.map((m, i) => (
                <div key={m.name} style={{ width: "min(100%, 340px)", flex: "0 1 340px" }}>
                  <ManagerCard manager={m} delay={560 + i * 120} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
