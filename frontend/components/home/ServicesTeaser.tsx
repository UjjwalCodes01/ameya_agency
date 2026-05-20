"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.7 5.4 4.1 8.1 3.9-.1-.4-.1-.8-.1-1.2C11 4.4 13.4 2 16 2c1.2 0 2.4.5 3.2 1.3L22 4z"/>
      </svg>
    ),
    title: "Social Media",
    desc: "Strategic content, consistent posting, and community management that builds real audiences on Instagram, Facebook, LinkedIn & more.",
    tag: "Brand Growth",
    href: "/services#social-media",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
    ),
    title: "SEO & Local SEO",
    desc: "Rank higher on Google and dominate local search results. We cover on-page, off-page, GMB, and keyword strategy.",
    tag: "Search Visibility",
    href: "/services#seo",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
    title: "Paid Advertising",
    desc: "High-ROI Meta Ads and Google Ads campaigns. We target the right audience, optimise budgets, and track every rupee spent.",
    tag: "Performance",
    href: "/services#ads",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: "Branding",
    desc: "Logo, visual identity, brand kit, tone of voice — everything you need to build your empire and stay consistent across every touchpoint.",
    tag: "Identity",
    href: "/services#branding",
  },
];

export default function ServicesTeaser() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="section" style={{ background: "var(--color-bg-primary)" }} ref={ref}>
      <div className="container">
        {/* Header */}
        <div className="section-header" style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)", transition: "all 0.7s ease" }}>
          <span className="eyebrow">What We Do</span>
          <h2>Services Built for <span style={{ color: "var(--color-gold)" }}>Results</span></h2>
          <p>From brand discovery to conversion — we handle every layer of your digital presence.</p>
        </div>

        {/* Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "var(--space-6)" }}>
          {services.map((s, i) => (
            <div
              key={s.title}
              style={{
                background: "var(--color-bg-tertiary)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-lg)",
                padding: "var(--space-8)",
                transition: "all var(--transition-base)",
                cursor: "pointer",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transitionDelay: `${i * 100 + 200}ms`,
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-4)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "var(--color-border-gold)";
                el.style.transform = "translateY(-6px)";
                el.style.boxShadow = "var(--shadow-gold)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "var(--color-border)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Icon */}
              <div style={{ color: "var(--color-gold)", marginBottom: "var(--space-2)" }}>{s.icon}</div>

              {/* Tag */}
              <span className="tag">{s.tag}</span>

              {/* Title */}
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 500, color: "var(--color-text-primary)" }}>{s.title}</h3>

              {/* Description */}
              <p style={{ fontSize: "var(--text-small)", lineHeight: "var(--leading-relaxed)", color: "var(--color-text-secondary)", flex: 1 }}>{s.desc}</p>

              {/* Link */}
              <Link href={s.href} style={{
                display: "inline-flex", alignItems: "center", gap: "var(--space-2)",
                fontSize: "var(--text-xs)", fontWeight: 500, letterSpacing: "var(--tracking-wider)",
                textTransform: "uppercase", color: "var(--color-gold)", textDecoration: "none",
                marginTop: "var(--space-2)",
                transition: "gap var(--transition-fast)",
              }}>
                Learn More <span>→</span>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "var(--space-12)", opacity: visible ? 1 : 0, transition: "opacity 0.7s ease 600ms" }}>
          <Link href="/services" className="btn btn-outline">View All Services</Link>
        </div>
      </div>
    </section>
  );
}
