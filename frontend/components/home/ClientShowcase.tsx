"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const clients = [
  {
    slug: "beatband",
    name: "BeatBand™",
    industry: "Consumer Electronics / D2C",
    services: ["Brand Strategy", "Performance Ads", "Social Media"],
    result: "Launched a New Product Category",
    resultDetail: "India's first Bluetooth sleep headband — free shipping, 5★ reviews, 10–13h battery life",
    bgGradient: "linear-gradient(135deg, rgba(139,92,246,0.12) 0%, rgba(201,168,76,0.08) 100%)",
    num: "01",
  },
  {
    slug: "ganga-farm",
    name: "Ganga Farm",
    industry: "Agriculture & Organic",
    services: ["Local SEO", "Branding", "Awareness Campaigns"],
    result: "3× Website Traffic",
    resultDetail: "Ranked #1 on Google Maps in Lucknow",
    bgGradient: "linear-gradient(135deg, rgba(34,197,94,0.10) 0%, rgba(201,168,76,0.08) 100%)",
    num: "02",
  },
  {
    slug: "fabricvton",
    name: "FabricVTON",
    industry: "AI / Fashion Tech (Shopify)",
    services: ["Brand Strategy", "Go-to-Market", "Performance Ads"],
    result: "~67% Conversion Increase",
    resultDetail: "~81% add-to-cart lift · ~25% fewer returns · 61s avg. engagement",
    bgGradient: "linear-gradient(135deg, rgba(14,165,233,0.10) 0%, rgba(201,168,76,0.08) 100%)",
    num: "03",
  },
];

export default function ClientShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="section" style={{ background: "var(--color-bg-secondary)" }} ref={ref}>
      <div className="container">

        {/* Header */}
        <div className="section-header" style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)", transition: "all 0.7s ease" }}>
          <span className="eyebrow">Client Work</span>
          <h2>Brands We&apos;ve <span style={{ color: "var(--color-gold)" }}>Grown</span></h2>
          <p>Real clients. Real results. Here&apos;s a snapshot of what we&apos;ve built together.</p>
        </div>

        {/* Client Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "var(--space-8)" }}>
          {clients.map((client, i) => (
            <div
              key={client.name}
              style={{
                background: client.bgGradient,
                border: "1px solid var(--color-border-gold)",
                borderRadius: "var(--radius-xl)",
                padding: "var(--space-10)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.7s ease ${i * 150 + 200}ms`,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Client number badge */}
              <div style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "var(--color-gold)", border: "1px solid var(--color-border-gold)", display: "inline-block", padding: "4px 12px", borderRadius: "var(--radius-full)", marginBottom: "var(--space-5)", letterSpacing: "var(--tracking-wider)" }}>{client.num}</div>

              {/* Industry tag */}
              <span className="tag" style={{ marginBottom: "var(--space-4)", display: "inline-block" }}>{client.industry}</span>

              {/* Name */}
              <h3 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                fontWeight: 600,
                color: "var(--color-text-primary)",
                marginBottom: "var(--space-4)",
              }}>
                {client.name}
              </h3>

              {/* Services tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)", marginBottom: "var(--space-6)" }}>
                {client.services.map((s) => (
                  <span key={s} style={{
                    fontSize: "var(--text-xs)", fontWeight: 400, color: "var(--color-text-muted)",
                    background: "rgba(255,255,255,0.05)", border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-full)", padding: "3px 10px",
                  }}>{s}</span>
                ))}
              </div>

              {/* Result */}
              <div style={{
                borderTop: "1px solid var(--color-border-gold)",
                paddingTop: "var(--space-5)",
                marginBottom: "var(--space-6)",
              }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2rem)", fontWeight: 600, color: "var(--color-gold)", marginBottom: "var(--space-1)" }}>
                  {client.result}
                </div>
                <p style={{ fontSize: "var(--text-small)", color: "var(--color-text-secondary)" }}>{client.resultDetail}</p>
              </div>

              {/* CTA */}
              <Link
                href={`/work/${client.slug}`}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "var(--space-2)",
                  fontSize: "var(--text-xs)", fontWeight: 600, letterSpacing: "var(--tracking-wider)",
                  textTransform: "uppercase", color: "var(--color-gold)", textDecoration: "none",
                }}
              >
                View Case Study <span>→</span>
              </Link>

              {/* Decorative corner line */}
              <div style={{
                position: "absolute", bottom: 0, right: 0,
                width: "120px", height: "120px",
                background: "radial-gradient(circle at bottom right, rgba(201,168,76,0.1), transparent 70%)",
                pointerEvents: "none",
              }} />
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "var(--space-12)", opacity: visible ? 1 : 0, transition: "opacity 0.7s ease 600ms" }}>
          <Link href="/work" className="btn btn-outline">See All Case Studies</Link>
        </div>
      </div>
    </section>
  );
}
