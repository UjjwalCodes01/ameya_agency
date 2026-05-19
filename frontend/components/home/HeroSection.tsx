"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const fade = (delay: number): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
  });

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "var(--color-bg-primary)",
      }}
    >
      {/* Ambient gold glow blobs */}
      <div style={{
        position: "absolute", top: "15%", left: "10%",
        width: "500px", height: "500px",
        background: "radial-gradient(circle, rgba(201,168,76,0.10) 0%, transparent 70%)",
        borderRadius: "50%", filter: "blur(60px)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "20%", right: "5%",
        width: "400px", height: "400px",
        background: "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)",
        borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none",
      }} />

      {/* Thin gold horizontal lines decoration */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)",
      }} />

      {/* Content */}
      <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1, padding: "var(--section-py) var(--section-px)" }}>

        {/* Eyebrow */}
        <div style={{ ...fade(0), marginBottom: "var(--space-6)" }}>
          <span className="eyebrow">Premium Digital Marketing · Lucknow, India</span>
        </div>

        {/* Main Headline */}
        <h1
          style={{
            ...fade(150),
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-hero)",
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "var(--color-text-primary)",
            marginBottom: "var(--space-4)",
            maxWidth: "900px",
            margin: "0 auto var(--space-4)",
          }}
        >
          Boundless{" "}
          <span style={{
            background: "linear-gradient(135deg, var(--color-gold-light), var(--color-gold), var(--color-gold-dark))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Possibilities.
          </span>
          <br />Limitless Growth.
        </h1>

        {/* Subheadline */}
        <p style={{
          ...fade(300),
          color: "var(--color-text-secondary)",
          fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
          lineHeight: "var(--leading-relaxed)",
          maxWidth: "600px",
          margin: "0 auto var(--space-10)",
        }}>
          We are a premium digital marketing agency providing creative digital marketing services India. We help ambitious brands scale through data-driven strategies and bold execution.
        </p>

        {/* CTA Buttons */}
        <div className="btn-pair" style={{
          ...fade(450),
          display: "flex",
          gap: "var(--space-4)",
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: "var(--space-16)",
        }}>
          <Link href="/contact" className="btn btn-primary btn-lg">Start a Project</Link>
          <Link href="/work" className="btn btn-outline btn-lg">View Our Work</Link>
        </div>

        {/* Floating Stats Badge */}
        <div className="hero-stats" style={{
          ...fade(600),
          display: "inline-flex",
          gap: "var(--space-8)",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "var(--space-4) var(--space-8)",
          background: "rgba(255,255,255,0.03)",
          border: "1px solid var(--color-border-gold)",
          borderRadius: "var(--radius-full)",
          backdropFilter: "blur(10px)",
        }}>
          {[
            { num: "30+", label: "Clients Served" },
            { num: "150+", label: "Campaigns Run" },
            { num: "8+", label: "Industries" },
            { num: "3+", label: "Years Experience" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 600, color: "var(--color-gold)" }}>{s.num}</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-xs)", color: "var(--color-text-muted)", letterSpacing: "var(--tracking-wide)", textTransform: "uppercase" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div style={{
        ...fade(800),
        position: "absolute",
        bottom: "40px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "var(--space-2)",
      }}>
        <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-xs)", color: "var(--color-text-muted)", letterSpacing: "var(--tracking-widest)", textTransform: "uppercase" }}>Scroll</span>
        <div style={{
          width: "1px",
          height: "50px",
          background: "linear-gradient(to bottom, var(--color-gold), transparent)",
          animation: "scrollPulse 2s ease-in-out infinite",
        }} />
        <style>{`
          @keyframes scrollPulse {
            0%, 100% { opacity: 0.3; transform: scaleY(1); }
            50% { opacity: 1; transform: scaleY(1.2); }
          }
        `}</style>
      </div>
    </section>
  );
}
