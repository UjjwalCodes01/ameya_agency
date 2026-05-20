"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 3, suffix: "+", label: "Clients Served", desc: "Brands that trust us" },
  { value: 10, suffix: "+", label: "Campaigns Run", desc: "Across Meta, Google & more" },
  { value: 3, suffix: "+", label: "Industries Served", desc: "Music to Agriculture" },
];

function useCounter(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

function StatItem({ value, suffix, label, desc, active, delay }: {
  value: number; suffix: string; label: string; desc: string; active: boolean; delay: number;
}) {
  const count = useCounter(value, 1800, active);
  return (
    <div style={{
      textAlign: "center",
      padding: "var(--space-8) var(--space-6)",
      opacity: active ? 1 : 0,
      transform: active ? "translateY(0)" : "translateY(20px)",
      transition: `all 0.7s ease ${delay}ms`,
    }}>
      <div style={{
        fontFamily: "var(--font-display)",
        fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
        fontWeight: 600,
        lineHeight: 1,
        background: "linear-gradient(135deg, var(--color-gold-light), var(--color-gold))",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        marginBottom: "var(--space-2)",
      }}>
        {count}{suffix}
      </div>
      <div style={{
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-base)",
        fontWeight: 500,
        color: "var(--color-text-primary)",
        marginBottom: "var(--space-1)",
      }}>
        {label}
      </div>
      <div style={{ fontSize: "var(--text-small)", color: "var(--color-text-muted)" }}>{desc}</div>
    </div>
  );
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setActive(true); obs.disconnect(); } }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ background: "var(--color-bg-primary)", position: "relative", overflow: "hidden" }}>
      {/* Top gold line */}
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, var(--color-gold), transparent)" }} />

      <div className="container" style={{ paddingTop: "clamp(60px, 8vw, 100px)", paddingBottom: "clamp(60px, 8vw, 100px)" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "var(--space-4)",
          position: "relative",
        }}>
          {/* Vertical separators */}
          {stats.map((s, i) => (
            <div key={s.label} style={{ position: "relative" }}>
              {i > 0 && (
                <div style={{
                  position: "absolute", left: 0, top: "20%", bottom: "20%",
                  width: "1px",
                  background: "linear-gradient(to bottom, transparent, var(--color-border-gold), transparent)",
                }} />
              )}
              <StatItem {...s} active={active} delay={i * 120} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gold line */}
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, var(--color-gold), transparent)" }} />
    </section>
  );
}
