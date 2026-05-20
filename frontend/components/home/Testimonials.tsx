"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote: "Anaya completely transformed our Instagram presence. The content they create is on-brand, consistent, and our engagement has never been higher. They feel like a true extension of our team.",
    name: "Aryan Mehta",
    role: "Founder, Beatband",
    initials: "AM",
  },
  {
    quote: "We went from barely being found online to ranking #1 on Google Maps in Lucknow within 3 months. The SEO work Anaya did for Ganga Farm has brought in real local customers — not just clicks.",
    name: "Ritu Sharma",
    role: "Owner, Ganga Farm",
    initials: "RS",
  },
];

const QuoteIcon = () => (
  <svg width="32" height="24" viewBox="0 0 32 24" fill="none">
    <path d="M0 24V14.4C0 6.4 4.8 1.6 14.4 0l1.6 2.4C10.4 3.6 7.2 7.2 6.4 12H12V24H0ZM20 24V14.4C20 6.4 24.8 1.6 34.4 0L36 2.4C30.4 3.6 27.2 7.2 26.4 12H32V24H20Z"
      fill="currentColor" opacity="0.3"/>
  </svg>
);

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="section" style={{ background: "var(--color-bg-primary)", position: "relative", overflow: "hidden" }} ref={ref}>
      {/* Bg glow */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "600px", height: "400px",
        background: "radial-gradient(ellipse, rgba(201,168,76,0.05) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div className="section-header" style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)", transition: "all 0.7s ease" }}>
          <span className="eyebrow">Client Stories</span>
          <h2>What Our <span style={{ color: "var(--color-gold)" }}>Clients Say</span></h2>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "var(--space-8)" }}>
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              style={{
                background: "var(--color-bg-tertiary)",
                border: "1px solid var(--color-border-gold)",
                borderRadius: "var(--radius-xl)",
                padding: "var(--space-10)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.7s ease ${i * 150 + 200}ms`,
                position: "relative",
              }}
            >
              {/* Quote icon */}
              <div style={{ color: "var(--color-gold)", marginBottom: "var(--space-6)" }}>
                <QuoteIcon />
              </div>

              {/* Stars */}
              <div style={{ display: "flex", gap: "3px", marginBottom: "var(--space-5)" }}>
                {[...Array(5)].map((_, si) => (
                  <svg key={si} width="14" height="14" viewBox="0 0 24 24" fill="var(--color-gold)" stroke="var(--color-gold)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                ))}
              </div>

              {/* Quote */}
              <p style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
                fontStyle: "italic",
                fontWeight: 400,
                color: "var(--color-text-primary)",
                lineHeight: "1.8",
                marginBottom: "var(--space-8)",
              }}>
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)", borderTop: "1px solid var(--color-border)", paddingTop: "var(--space-6)" }}>
                {/* Avatar */}
                <div style={{
                  width: "44px", height: "44px", borderRadius: "50%", flexShrink: 0,
                  background: "linear-gradient(135deg, var(--color-gold-dark), var(--color-gold))",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-body)", fontSize: "var(--text-small)", fontWeight: 600, color: "#0A0A0A",
                }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-small)", fontWeight: 600, color: "var(--color-text-primary)" }}>{t.name}</div>
                  <div style={{ fontSize: "var(--text-xs)", color: "var(--color-gold)", letterSpacing: "var(--tracking-wide)" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
