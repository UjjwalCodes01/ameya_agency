"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useRef, useState } from "react";

/* ── Case Study Data ──────────────────────────────────────── */
const caseStudies: Record<string, CaseStudy> = {
  beatband: {
    slug: "beatband",
    name: "Beatband",
    industry: "Music & Entertainment",
    tags: ["Social Media", "Content Strategy", "Branding"],
    icon: "🎵",
    accent: "rgba(139,92,246,0.12)",
    taglineHero: "From zero strategy to a thriving fan community.",
    duration: "4 months",
    year: "2024",
    stats: [
      { val: "+200%", label: "Engagement Rate" },
      { val: "3×", label: "Follower Growth" },
      { val: "18", label: "Reels Published" },
      { val: "500K+", label: "Total Impressions" },
    ],
    challenge: {
      heading: "The Challenge",
      body: "Beatband was a music entertainment brand with great talent but no digital presence. Their Instagram had sporadic posts with no strategy, minimal engagement, and a brand voice that didn't reflect their identity. They needed to attract music lovers, event organisers, and sponsors — but weren't showing up anywhere online.",
    },
    approach: {
      heading: "Our Approach",
      body: "We started with a full brand audit and audience research — understanding who Beatband's fans were, where they spent time, and what content made them stop scrolling. From there, we developed a content strategy built around consistent Reels (performance clips, BTS, covers), a refreshed visual identity, and a community engagement playbook.",
      bullets: [
        "Brand voice & visual identity refresh",
        "Monthly content calendar with 20+ assets",
        "Reels strategy: performance clips + BTS",
        "Hashtag research & caption frameworks",
        "Community management: DMs, comments, collabs",
      ],
    },
    execution: {
      heading: "Execution",
      body: "Over four months, we produced and published 18 high-quality Reels, 30+ static posts, and managed all community interactions. Every post was optimised for the algorithm — timing, hashtags, captions, and hooks. We also coordinated two artist collabs that expanded reach to new audiences.",
    },
    results: {
      heading: "Results",
      body: "In four months, Beatband's Instagram engagement rate jumped 200%, follower count tripled, and their content consistently hit 20K–60K views per Reel. They now attract inbound interest from event organisers and have a content engine that runs like clockwork.",
    },
  },
  "ganga-farm": {
    slug: "ganga-farm",
    name: "Ganga Farm",
    industry: "Agriculture & Organic",
    tags: ["Local SEO", "Branding", "Awareness Campaigns"],
    icon: "🌿",
    accent: "rgba(34,197,94,0.10)",
    taglineHero: "From invisible to #1 on Google Maps in Dehradun.",
    duration: "3 months",
    year: "2024",
    stats: [
      { val: "3×", label: "Website Traffic" },
      { val: "#1", label: "Google Maps Rank" },
      { val: "85%", label: "More Calls & Visits" },
      { val: "40+", label: "5-Star Reviews Added" },
    ],
    challenge: {
      heading: "The Challenge",
      body: "Ganga Farm is an organic agriculture brand based in Dehradun — quality produce, trusted by local families for years. But they had no digital presence. No Google Maps presence, a dated website with almost zero traffic, and no way for new customers to find them. Local competitors were outranking them despite inferior products.",
    },
    approach: {
      heading: "Our Approach",
      body: "The strategy was clear: dominate local search. We conducted a full local SEO audit, claimed and optimised their Google Business Profile, rebuilt their brand identity to reflect their organic values, and launched a targeted local awareness campaign on Meta.",
      bullets: [
        "Google Business Profile setup & full optimisation",
        "Local keyword research & on-page SEO",
        "Brand identity refresh (logo, colours, packaging direction)",
        "Review generation strategy (40+ 5-star reviews)",
        "Meta awareness ads targeting Dehradun & surrounding areas",
      ],
    },
    execution: {
      heading: "Execution",
      body: "We rebuilt their Google Business Profile from scratch — complete with professional photos, updated categories, weekly posts, and a Q&A section. On the website, we rewrote all key pages with local keywords and added structured schema markup. Simultaneously, we ran a month-long Meta awareness campaign targeting a 15km radius around Dehradun.",
    },
    results: {
      heading: "Results",
      body: "Within 3 months, Ganga Farm ranked #1 on Google Maps for key terms like 'organic farm Dehradun' and 'fresh vegetables Dehradun'. Website traffic tripled, phone calls from Google increased by 85%, and their review count went from 6 to over 46. They now have a waiting list for weekly vegetable boxes.",
    },
  },
};

type CaseStudy = {
  slug: string; name: string; industry: string; tags: string[];
  icon: string; accent: string; taglineHero: string;
  duration: string; year: string;
  stats: { val: string; label: string }[];
  challenge: { heading: string; body: string };
  approach: { heading: string; body: string; bullets: string[] };
  execution: { heading: string; body: string };
  results: { heading: string; body: string };
};

function useReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); o.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return { ref, style: { opacity: v ? 1 : 0, transform: v ? "none" : "translateY(30px)", transition: `all 0.7s ease ${delay}ms` } };
}

function Section({ heading, children }: { heading: string; children: React.ReactNode }) {
  const { ref, style } = useReveal();
  return (
    <div ref={ref} style={{ ...style, marginBottom: "var(--space-12)" }}>
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "var(--space-5)", display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
        <span style={{ display: "inline-block", width: "32px", height: "2px", background: "var(--color-gold)", flexShrink: 0 }} />
        {heading}
      </h2>
      {children}
    </div>
  );
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const cs = caseStudies[params.slug];
  if (!cs) notFound();

  const heroReveal = useReveal(0);

  return (
    <>
      {/* Hero */}
      <section style={{
        background: `linear-gradient(135deg, ${cs.accent} 0%, var(--color-bg-primary) 60%)`,
        padding: "clamp(80px, 10vw, 140px) 0 clamp(60px, 8vw, 100px)",
        borderBottom: "1px solid var(--color-border-gold)",
      }}>
        <div className="container">
          {/* Breadcrumb */}
          <div style={{ marginBottom: "var(--space-6)", display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
            <Link href="/work" style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "var(--tracking-wider)", textDecoration: "none" }}>← Work</Link>
            <span style={{ color: "var(--color-border)" }}>/</span>
            <span style={{ fontSize: "var(--text-xs)", color: "var(--color-gold)", textTransform: "uppercase", letterSpacing: "var(--tracking-wider)" }}>{cs.name}</span>
          </div>

          <div ref={heroReveal.ref} style={heroReveal.style}>
            {/* Tags */}
            <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap", marginBottom: "var(--space-6)" }}>
              <span className="tag">{cs.industry}</span>
              {cs.tags.map((t) => <span key={t} style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-full)", padding: "3px 10px" }}>{t}</span>)}
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-6)", flexWrap: "wrap" }}>
              <div style={{ fontSize: "4rem", lineHeight: 1, flexShrink: 0 }}>{cs.icon}</div>
              <div>
                <h1 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h1)", fontWeight: 600, lineHeight: 1.1, color: "var(--color-text-primary)", marginBottom: "var(--space-4)" }}>
                  {cs.name}
                </h1>
                <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.1rem, 2vw, 1.5rem)", fontStyle: "italic", color: "var(--color-gold)", marginBottom: "var(--space-6)" }}>
                  &ldquo;{cs.taglineHero}&rdquo;
                </p>
                <div style={{ display: "flex", gap: "var(--space-8)", flexWrap: "wrap" }}>
                  <div><div style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "var(--tracking-wider)", marginBottom: "2px" }}>Duration</div><div style={{ color: "var(--color-text-primary)", fontWeight: 500 }}>{cs.duration}</div></div>
                  <div><div style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "var(--tracking-wider)", marginBottom: "2px" }}>Year</div><div style={{ color: "var(--color-text-primary)", fontWeight: 500 }}>{cs.year}</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "var(--color-bg-secondary)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="container" style={{ padding: "clamp(40px, 5vw, 64px) var(--section-px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "var(--space-6)", textAlign: "center" }}>
            {cs.stats.map((s, i) => {
              const { ref, style } = useReveal(i * 100);
              return (
                <div key={s.label} ref={ref} style={style}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "var(--color-gold)", lineHeight: 1, marginBottom: "var(--space-2)" }}>{s.val}</div>
                  <div style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "var(--tracking-wider)" }}>{s.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Body */}
      <section style={{ background: "var(--color-bg-primary)", padding: "var(--section-py) 0" }}>
        <div className="container-narrow">
          <Section heading={cs.challenge.heading}>
            <p style={{ color: "var(--color-text-secondary)", lineHeight: "var(--leading-relaxed)", fontSize: "var(--text-large)" }}>{cs.challenge.body}</p>
          </Section>

          <Section heading={cs.approach.heading}>
            <p style={{ color: "var(--color-text-secondary)", lineHeight: "var(--leading-relaxed)", fontSize: "var(--text-large)", marginBottom: "var(--space-6)" }}>{cs.approach.body}</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              {cs.approach.bullets.map((b) => (
                <li key={b} style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start", color: "var(--color-text-secondary)", fontSize: "var(--text-base)" }}>
                  <span style={{ color: "var(--color-gold)", flexShrink: 0, marginTop: "4px" }}>✦</span>{b}
                </li>
              ))}
            </ul>
          </Section>

          <Section heading={cs.execution.heading}>
            <p style={{ color: "var(--color-text-secondary)", lineHeight: "var(--leading-relaxed)", fontSize: "var(--text-large)" }}>{cs.execution.body}</p>
          </Section>

          <Section heading={cs.results.heading}>
            <p style={{ color: "var(--color-text-secondary)", lineHeight: "var(--leading-relaxed)", fontSize: "var(--text-large)", marginBottom: "var(--space-8)" }}>{cs.results.body}</p>
          </Section>

          {/* CTA */}
          <div style={{ textAlign: "center", borderTop: "1px solid var(--color-border-gold)", paddingTop: "var(--space-12)" }}>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 500, color: "var(--color-text-primary)", marginBottom: "var(--space-6)" }}>
              Want results like these for your brand?
            </p>
            <div style={{ display: "flex", gap: "var(--space-4)", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn btn-primary btn-lg">Start a Project</Link>
              <Link href="/work" className="btn btn-outline btn-lg">← All Case Studies</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
