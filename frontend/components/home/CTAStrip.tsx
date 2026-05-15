"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function CTAStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        background: "var(--color-bg-secondary)",
        borderTop: "1px solid var(--color-border-gold)",
        position: "relative",
        overflow: "hidden",
        padding: "clamp(80px, 12vw, 160px) 0",
      }}
    >
      {/* Ambient glow */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "700px", height: "400px",
        background: "radial-gradient(ellipse, rgba(201,168,76,0.10) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>

        {/* Eyebrow */}
        <div style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)", transition: "all 0.6s ease 0ms" }}>
          <span className="eyebrow">Ready to Scale?</span>
        </div>

        {/* Headline */}
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.2rem, 5vw, 4rem)",
          fontWeight: 600,
          lineHeight: 1.1,
          color: "var(--color-text-primary)",
          maxWidth: "700px",
          margin: "var(--space-5) auto var(--space-5)",
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(24px)",
          transition: "all 0.7s ease 120ms",
        }}>
          Your Next Chapter Starts{" "}
          <span style={{
            background: "linear-gradient(135deg, var(--color-gold-light), var(--color-gold))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Here.
          </span>
        </h2>

        {/* Subtext */}
        <p style={{
          fontFamily: "var(--font-body)",
          fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
          color: "var(--color-text-secondary)",
          maxWidth: "520px",
          margin: "0 auto var(--space-10)",
          lineHeight: "var(--leading-relaxed)",
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(20px)",
          transition: "all 0.7s ease 250ms",
        }}>
          Book a free strategy call and let&apos;s map out exactly how we&apos;ll grow your brand — no fluff, no jargon, just a clear plan.
        </p>

        {/* Buttons */}
        <div style={{
          display: "flex",
          gap: "var(--space-4)",
          justifyContent: "center",
          flexWrap: "wrap",
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(20px)",
          transition: "all 0.7s ease 380ms",
        }}>
          <Link href="/contact" className="btn btn-primary btn-lg">Start a Project</Link>
          <Link href="/about" className="btn btn-outline btn-lg">Learn About Us</Link>
        </div>

        {/* Reassurance row */}
        <div style={{
          display: "flex",
          gap: "var(--space-8)",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "var(--space-10)",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.7s ease 500ms",
        }}>
          {["Free strategy call", "Reply within 24 hours", "No lock-in contracts"].map((item) => (
            <div key={item} style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
              <span style={{ color: "var(--color-gold)", fontSize: "0.8rem" }}>✓</span>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-small)", color: "var(--color-text-muted)" }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
