"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const filters = ["All", "Social Media", "Branding", "SEO", "Ads", "Web"];

const projects = [
  {
    slug: "beatband",
    name: "BeatBand",
    industry: "Consumer Electronics / D2C",
    tags: ["Social Media", "Ads", "Branding"],
    headline: "Launched India's First Bluetooth Sleep Headband Brand",
    desc: "BeatBand™ is a premium Bluetooth headband designed for sleep, workouts & travel — ultra-thin speakers, soft breathable fabric, and up to 13 hours of battery life. We built the brand's digital presence end-to-end: product storytelling, social content, and performance ads that turned early adopters into a loyal community.",
    result1: { val: "10–13h", label: "Battery Life USP" },
    result2: { val: "Free", label: "Shipping Across India" },
    num: "01",
    accent: "linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(201,168,76,0.06) 100%)",
    thumbAccent: "rgba(139,92,246,0.2)",
    borderHover: "rgba(139,92,246,0.4)",
    url: "https://beatband.in/",
  },
  {
    slug: "ganga-farm",
    name: "Ganga Farm",
    industry: "Agriculture & Organic",
    tags: ["SEO", "Branding"],
    headline: "3× Website Traffic in 3 Months",
    desc: "Brought Ganga Farm from invisible to #1 on Google Maps in Dehradun — local SEO, GMB optimisation, and a brand identity that reflects their organic, community-first values.",
    result1: { val: "3×", label: "Website Traffic" },
    result2: { val: "#1", label: "Google Maps Rank" },
    num: "02",
    accent: "linear-gradient(135deg, rgba(34,197,94,0.12) 0%, rgba(201,168,76,0.06) 100%)",
    thumbAccent: "rgba(34,197,94,0.2)",
    borderHover: "rgba(34,197,94,0.4)",
    url: null,
  },
  {
    slug: "fabricvton",
    name: "FabricVTON",
    industry: "AI / Fashion Tech (Shopify)",
    tags: ["Web", "Branding", "Ads"],
    headline: "+81% Lift in Add-to-Cart with AI Try-On",
    desc: "FabricVTON is an AI-powered virtual try-on platform built for Shopify stores. We crafted its digital brand, go-to-market positioning, and ad strategy — helping fashion merchants reduce return rates by ~25%, boost conversions by ~67%, and drive 61-second average engagement sessions on product pages.",
    result1: { val: "~67%", label: "Conversion Increase" },
    result2: { val: "~25%", label: "Fewer Returns" },
    num: "03",
    accent: "linear-gradient(135deg, rgba(14,165,233,0.12) 0%, rgba(201,168,76,0.06) 100%)",
    thumbAccent: "rgba(14,165,233,0.2)",
    borderHover: "rgba(14,165,233,0.4)",
    url: "https://www.fabricvton.com/",
  },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); o.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return { ref, v };
}

function ProjectCard({ p, index, activeFilter }: { p: typeof projects[0]; index: number; activeFilter: string }) {
  const { ref, v } = useReveal();
  const [hovered, setHovered] = useState(false);
  const visible = activeFilter === "All" || p.tags.includes(activeFilter);

  if (!visible) return null;

  return (
    <div
      ref={ref}
      style={{
        background: p.accent,
        border: `1px solid ${hovered ? p.borderHover : "var(--color-border-gold)"}`,
        borderRadius: "var(--radius-xl)",
        overflow: "hidden",
        opacity: v ? 1 : 0,
        transform: v ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ease ${index * 150}ms, transform 0.7s ease ${index * 150}ms, border-color var(--transition-base), box-shadow var(--transition-base)`,
        boxShadow: hovered ? "var(--shadow-gold)" : "none",
        cursor: "pointer",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Thumbnail area */}
      <div style={{
        height: "200px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `rgba(0,0,0,0.15)`,
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: "4rem", fontWeight: 600, color: p.thumbAccent, letterSpacing: "-4px", userSelect: "none" }}>{p.num}</div>
        {/* Hover overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "rgba(201,168,76,0.05)",
          opacity: hovered ? 1 : 0,
          transition: "opacity var(--transition-base)",
        }} />
      </div>

      {/* Content */}
      <div style={{ padding: "var(--space-8)" }}>
        {/* Tags */}
        <div style={{ display: "flex", gap: "var(--space-2)", marginBottom: "var(--space-4)", flexWrap: "wrap" }}>
          <span className="tag">{p.industry}</span>
          {p.tags.map((t) => (
            <span key={t} style={{
              fontSize: "var(--text-xs)", color: "var(--color-text-muted)",
              border: "1px solid var(--color-border)", borderRadius: "var(--radius-full)",
              padding: "3px 10px", fontFamily: "var(--font-body)",
            }}>{t}</span>
          ))}
        </div>

        {/* Name */}
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
          fontWeight: 600, color: "var(--color-text-primary)",
          marginBottom: "var(--space-3)",
        }}>{p.name}</h2>

        {/* Headline */}
        <p style={{
          fontFamily: "var(--font-display)",
          fontSize: "var(--text-large)",
          fontWeight: 500,
          color: "var(--color-gold)",
          marginBottom: "var(--space-4)",
          fontStyle: "italic",
        }}>{p.headline}</p>

        {/* Desc */}
        <p style={{ fontSize: "var(--text-small)", color: "var(--color-text-secondary)", lineHeight: "var(--leading-relaxed)", marginBottom: "var(--space-6)" }}>
          {p.desc}
        </p>

        {/* Results row */}
        <div style={{ display: "flex", gap: "var(--space-8)", marginBottom: "var(--space-6)", borderTop: "1px solid var(--color-border)", paddingTop: "var(--space-5)" }}>
          {[p.result1, p.result2].map((r) => (
            <div key={r.label}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", fontWeight: 600, color: "var(--color-gold)" }}>{r.val}</div>
              <div style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "var(--tracking-wide)" }}>{r.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
          <Link href={`/work/${p.slug}`} className="btn btn-outline btn-sm">
            View Case Study →
          </Link>
          {p.url && (
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn btn-sm" style={{ background: "transparent", border: "1px solid var(--color-border)", color: "var(--color-text-muted)", borderRadius: "var(--radius-full)" }}>
              Visit Live Site ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function PlaceholderCard() {
  const { ref, v } = useReveal();
  return (
    <div ref={ref} style={{
      border: "2px dashed var(--color-border-gold)",
      borderRadius: "var(--radius-xl)",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      minHeight: "480px", textAlign: "center",
      padding: "var(--space-10)",
      opacity: v ? 1 : 0,
      transform: v ? "translateY(0)" : "translateY(40px)",
      transition: "all 0.7s ease 300ms",
      background: "rgba(201,168,76,0.02)",
    }}>
      <div style={{ marginBottom: "var(--space-6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: "48px", height: "48px", border: "1px solid var(--color-border-gold)", transform: "rotate(45deg)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: "8px", height: "8px", background: "var(--color-gold)", transform: "rotate(-45deg)" }} />
        </div>
      </div>
      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", fontWeight: 500, color: "var(--color-text-primary)", marginBottom: "var(--space-3)" }}>
        Your Brand Could Be Here
      </h3>
      <p style={{ fontSize: "var(--text-small)", color: "var(--color-text-secondary)", maxWidth: "280px", lineHeight: "var(--leading-relaxed)", marginBottom: "var(--space-8)" }}>
        We&apos;re always looking for ambitious brands ready to grow. Let&apos;s build your case study together.
      </p>
      <Link href="/contact" className="btn btn-primary">Start a Project</Link>
    </div>
  );
}

function AggregateStats() {
  const { ref, v } = useReveal();
  const stats = [
    { val: "500K+", label: "Total Impressions" },
    { val: "1,200+", label: "Leads Generated" },
    { val: "20+", label: "Campaigns Delivered" },
    { val: "100%", label: "Client Retention" },
  ];
  return (
    <div ref={ref} style={{
      marginTop: "var(--space-16)",
      background: "var(--color-bg-secondary)",
      border: "1px solid var(--color-border-gold)",
      borderRadius: "var(--radius-xl)",
      padding: "clamp(40px, 5vw, 64px)",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
      gap: "var(--space-8)",
      textAlign: "center",
      opacity: v ? 1 : 0,
      transform: v ? "none" : "translateY(30px)",
      transition: "all 0.7s ease",
    }}>
      {stats.map((s, i) => (
        <div key={s.label} style={{ opacity: v ? 1 : 0, transform: v ? "none" : "translateY(20px)", transition: `all 0.6s ease ${i * 100 + 200}ms` }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 600, color: "var(--color-gold)", marginBottom: "var(--space-2)" }}>{s.val}</div>
          <div style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "var(--tracking-wider)" }}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <>
      {/* Hero */}
      <section style={{
        background: "var(--color-bg-primary)", textAlign: "center",
        padding: "clamp(80px, 10vw, 140px) 0 clamp(50px, 6vw, 80px)",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "40%", left: "50%", transform: "translate(-50%,-50%)",
          width: "600px", height: "400px",
          background: "radial-gradient(ellipse, rgba(201,168,76,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <span className="eyebrow" style={{ display: "block", marginBottom: "var(--space-5)" }}>Our Work</span>
          <h1 style={{
            fontFamily: "var(--font-display)", fontSize: "var(--text-h1)", fontWeight: 600,
            lineHeight: 1.1, color: "var(--color-text-primary)", marginBottom: "var(--space-5)",
          }}>
            Results That <span style={{
              background: "linear-gradient(135deg, var(--color-gold-light), var(--color-gold))",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>Speak for Themselves</span>
          </h1>
          <p style={{ color: "var(--color-text-secondary)", maxWidth: "520px", margin: "0 auto", lineHeight: "var(--leading-relaxed)", fontSize: "var(--text-large)" }}>
            Every project starts with strategy and ends with measurable growth. Here&apos;s what we&apos;ve built.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section style={{ background: "var(--color-bg-primary)", paddingBottom: "var(--space-4)" }}>
        <div className="container">
          <div style={{
            display: "flex", gap: "var(--space-3)", flexWrap: "wrap", justifyContent: "center",
            borderBottom: "1px solid var(--color-border)", paddingBottom: "var(--space-6)",
          }}>
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-xs)", fontWeight: 500,
                  letterSpacing: "var(--tracking-wider)", textTransform: "uppercase",
                  padding: "8px 20px", borderRadius: "var(--radius-full)",
                  border: `1px solid ${activeFilter === f ? "var(--color-gold)" : "var(--color-border)"}`,
                  background: activeFilter === f ? "var(--color-gold-muted)" : "transparent",
                  color: activeFilter === f ? "var(--color-gold)" : "var(--color-text-secondary)",
                  cursor: "pointer",
                  transition: "all var(--transition-base)",
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section style={{ background: "var(--color-bg-primary)", padding: "var(--space-10) 0 var(--section-py)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "var(--space-8)" }}>
            {projects.map((p, i) => (
              <ProjectCard key={p.slug} p={p} index={i} activeFilter={activeFilter} />
            ))}
            <PlaceholderCard />
          </div>

          <AggregateStats />
        </div>
      </section>
    </>
  );
}
