"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* ── Icons ──────────────────────────────────────────────── */
const icons: Record<string, React.ReactNode> = {
  social: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.7 5.4 4.1 8.1 3.9-.1-.4-.1-.8-.1-1.2C11 4.4 13.4 2 16 2c1.2 0 2.4.5 3.2 1.3L22 4z"/>
    </svg>
  ),
  content: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
    </svg>
  ),
  seo: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
    </svg>
  ),
  ads: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
    </svg>
  ),
  branding: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
  web: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  ),
  analytics: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
    </svg>
  ),
};

/* ── Service Data ─────────────────────────────────────────── */
const services = [
  {
    id: "social-media",
    icon: "social",
    title: "Social Media Management",
    tagline: "Turn scrollers into loyal followers",
    desc: "We manage your brand's presence across every major platform — content strategy, creative production, scheduling, community management, and monthly reporting. We don't just post; we build audiences that convert.",
    tags: ["Instagram", "Facebook", "LinkedIn", "YouTube", "Reels", "Stories"],
    features: [
      "Custom content calendar every month",
      "Platform-specific creative (Reels, Carousels, Stories)",
      "Community management & DM handling",
      "Monthly performance report",
      "Hashtag & caption strategy",
    ],
    accent: "rgba(139,92,246,0.12)",
  },
  {
    id: "content",
    icon: "content",
    title: "Content Creation",
    tagline: "Content that stops the scroll",
    desc: "From Reels and short-form videos to graphics, carousels, and brand photography direction — we produce content that reflects your brand's unique positioning and drives real engagement.",
    tags: ["Reels", "Graphics", "Copywriting", "Video Editing", "Photography Direction"],
    features: [
      "Short-form video (Reels, YouTube Shorts)",
      "Branded graphics & carousel design",
      "Long-form copy & captions",
      "Content repurposing strategy",
      "Brand voice guidelines",
    ],
    accent: "rgba(236,72,153,0.08)",
  },
  {
    id: "seo",
    icon: "seo",
    title: "SEO & Local SEO",
    tagline: "Be found by the people who matter",
    desc: "We get your business ranking higher on Google — both organically and in local search. From technical audits to keyword targeting and Google My Business optimisation, we build search visibility that compounds.",
    tags: ["On-Page SEO", "Off-Page SEO", "Google My Business", "Local Ranking", "Technical SEO"],
    features: [
      "Technical SEO audit & fixes",
      "Keyword research & strategy",
      "Google My Business optimisation",
      "Local citation building",
      "Monthly ranking report",
    ],
    accent: "rgba(34,197,94,0.08)",
  },
  {
    id: "ads",
    icon: "ads",
    title: "Paid Advertising",
    tagline: "Every rupee spent, tracked and optimised",
    desc: "High-ROI Meta Ads and Google Ads campaigns that reach your ideal customer and convert. We handle targeting, creative, A/B testing, and budget optimisation — with full transparency on your spend.",
    tags: ["Meta Ads", "Google Ads", "Retargeting", "A/B Testing", "ROI Tracking"],
    features: [
      "Campaign strategy & setup",
      "Audience research & targeting",
      "Ad creative & copy",
      "Continuous A/B testing",
      "Weekly performance dashboard",
    ],
    accent: "rgba(245,158,11,0.08)",
  },
  {
    id: "branding",
    icon: "branding",
    title: "Branding & Identity",
    tagline: "Build your empire. Be remembered.",
    desc: "We craft complete visual identities — logo design, brand kits, colour palettes, typography, tone of voice, and brand guidelines. Everything you need to show up consistently and confidently across every touchpoint.",
    tags: ["Logo Design", "Brand Kit", "Visual Identity", "Tone of Voice", "Brand Guidelines"],
    features: [
      "Logo design (3 concepts + revisions)",
      "Full brand kit (colours, fonts, patterns)",
      "Brand guidelines document",
      "Tone of voice & messaging",
      "Social media profile branding",
    ],
    accent: "rgba(201,168,76,0.08)",
  },
  {
    id: "web",
    icon: "web",
    title: "Website Design",
    tagline: "Your digital storefront, perfected",
    desc: "We design and build high-converting business websites and landing pages — fast, mobile-first, and built to turn visitors into leads. Every site is SEO-ready from day one.",
    tags: ["Landing Pages", "Business Websites", "Mobile-First", "SEO-Ready", "Fast Loading"],
    features: [
      "Custom design (no templates)",
      "Mobile-first, fully responsive",
      "SEO foundations built-in",
      "Contact forms & CTAs optimised",
      "Handoff with CMS if needed",
    ],
    accent: "rgba(14,165,233,0.08)",
  },
  {
    id: "analytics",
    icon: "analytics",
    title: "Analytics & Reporting",
    tagline: "Data that tells you what's actually working",
    desc: "Monthly reports, KPI dashboards, and strategy reviews that give you complete clarity on your digital marketing performance. No vanity metrics — only insights that inform smart decisions.",
    tags: ["GA4", "Monthly Reports", "KPI Dashboard", "Strategy Reviews", "Conversion Tracking"],
    features: [
      "Google Analytics 4 setup",
      "Custom KPI dashboard",
      "Monthly written report",
      "Quarterly strategy review",
      "Goal & conversion tracking",
    ],
    accent: "rgba(99,102,241,0.08)",
  },
];

/* ── Scroll Reveal Hook ───────────────────────────────────── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

/* ── Service Card ─────────────────────────────────────────── */
function ServiceCard({ s, index }: { s: typeof services[0]; index: number }) {
  const { ref, visible } = useReveal();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      id={s.id}
      style={{
        background: `linear-gradient(135deg, ${s.accent} 0%, var(--color-bg-tertiary) 100%)`,
        border: `1px solid ${hovered ? "var(--color-border-gold)" : "var(--color-border)"}`,
        borderRadius: "var(--radius-xl)",
        padding: "clamp(32px, 4vw, 56px)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ease ${index * 80}ms, transform 0.7s ease ${index * 80}ms, border-color var(--transition-base)`,
        scrollMarginTop: "calc(var(--nav-height) + 20px)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "var(--space-8)", alignItems: "start" }}>
        {/* Left — content */}
        <div>
          {/* Icon + Title row */}
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-5)", marginBottom: "var(--space-5)" }}>
            <div style={{
              color: "var(--color-gold)",
              background: "var(--color-gold-muted)",
              border: "1px solid var(--color-gold-border)",
              borderRadius: "var(--radius-md)",
              padding: "var(--space-3)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              {icons[s.icon]}
            </div>
            <div>
              <p style={{ fontSize: "var(--text-xs)", color: "var(--color-gold)", letterSpacing: "var(--tracking-wider)", textTransform: "uppercase", marginBottom: "var(--space-1)" }}>
                {s.tagline}
              </p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 600, color: "var(--color-text-primary)", lineHeight: 1.2 }}>
                {s.title}
              </h2>
            </div>
          </div>

          {/* Description */}
          <p style={{ fontSize: "var(--text-base)", color: "var(--color-text-secondary)", lineHeight: "var(--leading-relaxed)", marginBottom: "var(--space-6)", maxWidth: "560px" }}>
            {s.desc}
          </p>

          {/* Features */}
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "var(--space-2)", marginBottom: "var(--space-6)" }}>
            {s.features.map((f) => (
              <li key={f} style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", fontSize: "var(--text-small)", color: "var(--color-text-secondary)" }}>
                <span style={{ color: "var(--color-gold)", fontSize: "0.75rem", flexShrink: 0 }}>✦</span>
                {f}
              </li>
            ))}
          </ul>

          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)", marginBottom: "var(--space-8)" }}>
            {s.tags.map((t) => <span key={t} className="tag">{t}</span>)}
          </div>

          {/* CTA */}
          <Link href="/contact" className="btn btn-outline btn-sm">
            Get a Quote →
          </Link>
        </div>

        {/* Right — big number watermark (desktop) */}
        <div style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(5rem, 8vw, 9rem)",
          fontWeight: 700,
          color: "rgba(201,168,76,0.06)",
          lineHeight: 1,
          userSelect: "none",
          flexShrink: 0,
          alignSelf: "center",
          display: "block",
        }}>
          0{index + 1}
        </div>
      </div>
    </div>
  );
}

/* ── Custom Pricing CTA (replaces old pricing tiers) ─────────── */
function CustomPricingCTA() {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} style={{
      background: "var(--color-bg-secondary)",
      border: "1px solid var(--color-border-gold)",
      borderRadius: "var(--radius-xl)",
      padding: "clamp(48px, 6vw, 80px)",
      textAlign: "center",
      marginTop: "var(--space-12)",
      position: "relative",
      overflow: "hidden",
      opacity: visible ? 1 : 0,
      transform: visible ? "none" : "translateY(30px)",
      transition: "all 0.7s ease",
    }}>
      {/* Background glow */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at center, rgba(201,168,76,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{ position: "relative", zIndex: 1 }}>
        <span className="eyebrow" style={{ display: "block", marginBottom: "var(--space-5)" }}>Custom Packages</span>
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
          fontWeight: 600,
          color: "var(--color-text-primary)",
          marginBottom: "var(--space-6)",
          lineHeight: 1.2,
        }}>
          Every brand is different.{" "}
          <span style={{ color: "var(--color-gold)" }}>So is every package.</span>
        </h2>
        <p style={{
          color: "var(--color-text-secondary)",
          maxWidth: "560px",
          margin: "0 auto var(--space-8)",
          lineHeight: "var(--leading-relaxed)",
          fontSize: "var(--text-large)",
        }}>
          We don&apos;t believe in fixed pricing. Tell us your goals and budget, and we&apos;ll build a plan that actually fits &mdash; no bloated retainers, no unnecessary add-ons.
        </p>
        <div style={{ display: "flex", gap: "var(--space-4)", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="https://cal.com/anayadigital/strategy-call"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
          >
            Book a Free Strategy Call
          </a>
          <Link href="/contact" className="btn btn-outline btn-lg">
            Send an Enquiry
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────── */
export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: "var(--color-bg-primary)",
        padding: "clamp(80px, 10vw, 140px) 0 clamp(60px, 8vw, 100px)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "30%", left: "50%", transform: "translate(-50%,-50%)",
          width: "600px", height: "400px",
          background: "radial-gradient(ellipse, rgba(201,168,76,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <span className="eyebrow" style={{ display: "block", marginBottom: "var(--space-5)" }}>Our Services</span>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-h1)",
            fontWeight: 600,
            color: "var(--color-text-primary)",
            marginBottom: "var(--space-5)",
            lineHeight: 1.1,
          }}>
            Everything Your Brand Needs to <span style={{
              background: "linear-gradient(135deg, var(--color-gold-light), var(--color-gold))",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>Win Online</span>
          </h1>
          <p style={{ color: "var(--color-text-secondary)", maxWidth: "560px", margin: "0 auto var(--space-10)", lineHeight: "var(--leading-relaxed)", fontSize: "var(--text-large)" }}>
            From social media to search visibility to brand identity — we cover every layer of your digital presence, with strategy at the core of everything we do.
          </p>
          {/* Jump links */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-3)", justifyContent: "center" }}>
            {services.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="tag" style={{ cursor: "pointer", textDecoration: "none" }}>
                {s.title.split(" ")[0]}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section style={{ background: "var(--color-bg-primary)", paddingBottom: "var(--section-py)" }}>
        <div className="container" style={{ display: "flex", flexDirection: "column", gap: "var(--space-8)" }}>
          {services.map((s, i) => <ServiceCard key={s.id} s={s} index={i} />)}
          <CustomPricingCTA />
        </div>
      </section>
    </>
  );
}
