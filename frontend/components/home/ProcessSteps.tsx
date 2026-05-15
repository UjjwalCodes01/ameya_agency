"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "We deep-dive into your brand, audience, competitors, and goals. No guesswork — everything is rooted in research.",
    icon: "◎",
  },
  {
    num: "02",
    title: "Strategy",
    desc: "We build a custom digital marketing roadmap tailored specifically to your business, budget, and growth targets.",
    icon: "◈",
  },
  {
    num: "03",
    title: "Execute",
    desc: "Our team rolls out campaigns, content, and creatives — with precision timing and obsessive attention to quality.",
    icon: "◉",
  },
  {
    num: "04",
    title: "Grow",
    desc: "We track, analyse, and optimise continuously so your results compound month after month.",
    icon: "◆",
  },
];

export default function ProcessSteps() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="section" style={{ background: "var(--color-bg-secondary)" }} ref={ref}>
      <div className="container">

        {/* Header */}
        <div className="section-header" style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)", transition: "all 0.7s ease" }}>
          <span className="eyebrow">How We Work</span>
          <h2>Our <span style={{ color: "var(--color-gold)" }}>Process</span></h2>
          <p>A proven 4-step framework that turns strategy into measurable growth.</p>
        </div>

        {/* Steps */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "var(--space-6)",
          position: "relative",
        }}>
          {/* Connecting line (desktop only) */}
          <div style={{
            position: "absolute",
            top: "40px",
            left: "12.5%",
            right: "12.5%",
            height: "1px",
            background: "linear-gradient(90deg, transparent, var(--color-border-gold), transparent)",
            display: "none", // hidden on mobile — shown via CSS
          }} />

          {steps.map((step, i) => (
            <div
              key={step.num}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "var(--space-8)",
                background: "var(--color-bg-tertiary)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-lg)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.7s ease ${i * 130 + 200}ms`,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Step number */}
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-xs)",
                fontWeight: 600,
                letterSpacing: "var(--tracking-widest)",
                textTransform: "uppercase",
                color: "var(--color-gold)",
                marginBottom: "var(--space-4)",
              }}>
                STEP {step.num}
              </div>

              {/* Icon */}
              <div style={{
                fontSize: "1.8rem",
                color: "var(--color-gold)",
                marginBottom: "var(--space-4)",
                lineHeight: 1,
              }}>
                {step.icon}
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                fontWeight: 600,
                color: "var(--color-text-primary)",
                marginBottom: "var(--space-3)",
              }}>
                {step.title}
              </h3>

              {/* Desc */}
              <p style={{
                fontSize: "var(--text-small)",
                color: "var(--color-text-secondary)",
                lineHeight: "var(--leading-relaxed)",
              }}>
                {step.desc}
              </p>

              {/* Arrow between steps */}
              {i < steps.length - 1 && (
                <div style={{
                  position: "absolute",
                  bottom: "var(--space-6)",
                  right: "var(--space-6)",
                  color: "var(--color-gold)",
                  opacity: 0.4,
                  fontSize: "1.2rem",
                }}>
                  →
                </div>
              )}

              {/* BG large number watermark */}
              <div style={{
                position: "absolute",
                bottom: "-10px",
                right: "var(--space-4)",
                fontFamily: "var(--font-display)",
                fontSize: "6rem",
                fontWeight: 700,
                color: "rgba(201,168,76,0.04)",
                lineHeight: 1,
                pointerEvents: "none",
                userSelect: "none",
              }}>
                {step.num}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
