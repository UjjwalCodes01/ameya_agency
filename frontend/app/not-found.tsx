"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVisible(true), 80); return () => clearTimeout(t); }, []);

  const fade = (delay: number): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(20px)",
    transition: `all 0.7s ease ${delay}ms`,
  });

  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--color-bg-primary)",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Ambient glow */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "600px", height: "400px", background: "radial-gradient(ellipse, rgba(201,168,76,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="container" style={{ position: "relative", zIndex: 1, padding: "var(--section-py) var(--section-px)" }}>
        {/* Large 404 */}
        <div style={{ ...fade(0), fontFamily: "var(--font-display)", fontSize: "clamp(7rem, 20vw, 14rem)", fontWeight: 700, lineHeight: 1, background: "linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.04))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: "var(--space-4)", userSelect: "none" }}>
          404
        </div>

        {/* Gold divider */}
        <div style={{ ...fade(100), width: "60px", height: "2px", background: "var(--color-gold)", margin: "0 auto var(--space-8)" }} />

        <h1 style={{ ...fade(150), fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 4vw, 2.8rem)", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "var(--space-5)", lineHeight: 1.2 }}>
          Page Not Found
        </h1>

        <p style={{ ...fade(250), color: "var(--color-text-secondary)", maxWidth: "440px", margin: "0 auto var(--space-10)", lineHeight: "var(--leading-relaxed)", fontSize: "var(--text-large)" }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>

        {/* CTAs */}
        <div className="btn-pair" style={{ ...fade(350), display: "flex", gap: "var(--space-4)", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" className="btn btn-primary btn-lg">← Back to Home</Link>
          <Link href="/contact" className="btn btn-outline btn-lg">Contact Us</Link>
        </div>

        {/* Quick links */}
        <div style={{ ...fade(500), marginTop: "var(--space-12)", display: "flex", gap: "var(--space-6)", justifyContent: "center", flexWrap: "wrap" }}>
          {[
            { label: "Services", href: "/services" },
            { label: "Our Work", href: "/work" },
            { label: "Blog", href: "/blog" },
            { label: "About", href: "/about" },
          ].map((l) => (
            <Link key={l.href} href={l.href} style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "var(--tracking-wider)", textDecoration: "none", transition: "color var(--transition-fast)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-muted)")}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
