"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { use, useEffect, useRef, useState } from "react";

/* ── Case Study Data ──────────────────────────────────────── */
const caseStudies: Record<string, CaseStudy> = {
  beatband: {
    slug: "beatband",
    name: "BeatBand",
    industry: "Consumer Electronics / D2C",
    tags: ["Brand Strategy", "Performance Ads", "Social Media"],
    num: "01",
    accent: "rgba(139,92,246,0.12)",
    taglineHero: "Launched India's first Bluetooth sleep headband brand from scratch.",
    duration: "Ongoing",
    year: "2024",
    stats: [
      { val: "10–13h", label: "Battery Life USP" },
      { val: "Free", label: "Shipping Across India" },
      { val: "5★", label: "Customer Reviews" },
      { val: "D2C", label: "Direct-to-Consumer" },
    ],
    challenge: {
      heading: "The Challenge",
      body: "BeatBand™ entered the market with a genuinely innovative product — a soft Bluetooth headband with ultra-thin built-in speakers, designed for sleep, workouts, and travel. But in a sea of traditional earbuds and headphones, they had zero brand recognition, no digital presence, and needed to educate the market on an entirely new product category before they could convert buyers.",
    },
    approach: {
      heading: "Our Approach",
      body: "We built the entire brand narrative around the core pain point: earbuds hurt. Whether it's side-sleepers, gym-goers, meditators, or frequent travellers — everyone has experienced the discomfort of traditional audio. Our strategy focused on problem-aware content that made the audience feel understood before presenting BeatBand as the natural solution.",
      bullets: [
        "Full D2C brand positioning & product storytelling",
        "Pain-point-led creative for sleep, workouts & travel audiences",
        "UGC-style social content strategy (Reels & testimonial hooks)",
        "Performance ad campaigns on Meta targeting Indian buyers",
        "Shopify product page copywriting — comfort-first messaging",
        "Review generation strategy to build social proof",
      ],
    },
    execution: {
      heading: "Execution",
      body: "We launched with a hero content series across Instagram and Facebook — each piece addressing a specific use case: sleeping on your side, running without earbuds falling out, meditating hands-free, travelling on long flights. The creative used authentic UGC-style formats that felt native to the feed. Simultaneously, our Meta ad campaigns targeted interest segments like sleep health, fitness, yoga, and frequent travellers across India, driving qualified traffic directly to the Shopify store.",
    },
    results: {
      heading: "Results",
      body: "BeatBand rapidly accumulated verified 5-star reviews from real customers across all key use cases — sleep, workouts, meditation, and travel. The brand now ships free across India and has built a growing loyal customer base who actively share their experience online. The product's unique comfort proposition continues to drive strong word-of-mouth and organic discovery.",
    },
  },
  "ganga-farm": {
    slug: "ganga-farm",
    name: "Ganga Farm",
    industry: "Agriculture & Organic",
    tags: ["Local SEO", "Branding", "Awareness Campaigns"],
    num: "02",
    accent: "rgba(34,197,94,0.10)",
    taglineHero: "From invisible to #1 on Google Maps in Lucknow.",
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
      body: "Ganga Farm is an organic agriculture brand based in Lucknow — quality produce, trusted by local families for years. But they had no digital presence. No Google Maps presence, a dated website with almost zero traffic, and no way for new customers to find them. Local competitors were outranking them despite inferior products.",
    },
    approach: {
      heading: "Our Approach",
      body: "The strategy was clear: dominate local search. We conducted a full local SEO audit, claimed and optimised their Google Business Profile, rebuilt their brand identity to reflect their organic values, and launched a targeted local awareness campaign on Meta.",
      bullets: [
        "Google Business Profile setup & full optimisation",
        "Local keyword research & on-page SEO",
        "Brand identity refresh (logo, colours, packaging direction)",
        "Review generation strategy (40+ 5-star reviews)",
        "Meta awareness ads targeting Lucknow & surrounding areas",
      ],
    },
    execution: {
      heading: "Execution",
      body: "We rebuilt their Google Business Profile from scratch — complete with professional photos, updated categories, weekly posts, and a Q&A section. On the website, we rewrote all key pages with local keywords and added structured schema markup. Simultaneously, we ran a month-long Meta awareness campaign targeting a 15km radius around Lucknow.",
    },
    results: {
      heading: "Results",
      body: "Within 3 months, Ganga Farm ranked #1 on Google Maps for key terms like 'organic farm Lucknow' and 'fresh vegetables Lucknow'. Website traffic tripled, phone calls from Google increased by 85%, and their review count went from 6 to over 46. They now have a waiting list for weekly vegetable boxes.",
    },
  },
  fabricvton: {
    slug: "fabricvton",
    name: "FabricVTON",
    industry: "AI / Fashion Tech (Shopify)",
    tags: ["Brand Strategy", "Go-to-Market", "Performance Ads"],
    num: "03",
    accent: "rgba(14,165,233,0.10)",
    taglineHero: "Turning browser hesitation into buyer confidence with AI try-on.",
    duration: "Ongoing",
    year: "2024",
    stats: [
      { val: "~81%", label: "Add-to-Cart Lift" },
      { val: "~67%", label: "Conversion Increase" },
      { val: "~25%", label: "Fewer Returns" },
      { val: "~61s", label: "Avg. Engagement" },
    ],
    challenge: {
      heading: "The Challenge",
      body: "FabricVTON is an AI-powered virtual try-on platform built for Shopify stores — letting shoppers upload a photo and instantly see how a garment looks on them, without a physical fitting room. The product was technically impressive, but needed a compelling brand narrative and a go-to-market strategy that could cut through the noise and get Shopify merchants to trust and install a brand-new AI app.",
    },
    approach: {
      heading: "Our Approach",
      body: "We identified the core merchant pain points: high return rates, cart abandonment due to fit uncertainty, and the challenge of standing out in a crowded fashion market. Our strategy positioned FabricVTON not just as a tech tool, but as a revenue driver — framing try-on as a conversion and retention strategy, not just a gimmick.",
      bullets: [
        "Brand positioning: 'Turn hesitation into revenue'",
        "Shopify merchant targeting — D2C fashion & streetwear segments",
        "ROI-focused messaging: returns reduction + conversion uplift",
        "Landing page narrative & feature storytelling",
        "Social proof strategy using before/after try-on visuals",
        "Performance ads targeting Shopify store owners",
      ],
    },
    execution: {
      heading: "Execution",
      body: "We rebuilt the brand's messaging architecture from the ground up — leading with merchant outcomes (67% conversion lift, 25% fewer returns, 81% add-to-cart uplift) backed by real platform data. The website was restructured to guide merchants through a clear value journey: problem → solution → ROI calculator → pricing. Ad campaigns targeted Shopify merchants in fashion verticals with direct response creative that led with the headline metrics.",
    },
    results: {
      heading: "Results",
      body: "FabricVTON launched with a compelling brand presence that communicates value immediately. The platform is live on Shopify with clear pricing tiers (Starter to Enterprise), an interactive ROI calculator, and a conversion-optimised landing page. Shoppers using the virtual try-on engage for an average of 61 seconds per session — dramatically higher than standard product page engagement, validating the core premise that seeing is buying.",
    },
  },
};

type CaseStudy = {
  slug: string; name: string; industry: string; tags: string[];
  num: string; accent: string; taglineHero: string;
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

function StatItem({ val, label, delay }: { val: string; label: string; delay: number }) {
  const { ref, style } = useReveal(delay);
  return (
    <div ref={ref} style={style}>
      <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "var(--color-gold)", lineHeight: 1, marginBottom: "var(--space-2)" }}>{val}</div>
      <div style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "var(--tracking-wider)" }}>{label}</div>
    </div>
  );
}

export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const cs = caseStudies[slug];
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
              <div style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "var(--color-gold)", border: "1px solid var(--color-border-gold)", display: "inline-block", padding: "4px 14px", borderRadius: "var(--radius-full)", marginBottom: "var(--space-4)", letterSpacing: "var(--tracking-wider)" }}>{cs.num}</div>
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
            {cs.stats.map((s, i) => (
              <StatItem key={s.label} val={s.val} label={s.label} delay={i * 100} />
            ))}
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
                  <span style={{ display: "inline-block", width: "5px", height: "5px", background: "var(--color-gold)", flexShrink: 0, marginTop: "6px", borderRadius: "1px" }} />{b}
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
