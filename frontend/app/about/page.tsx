"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* ── Scroll reveal hook ──────────────────────────────────── */
function useReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); o.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return { ref, style: { opacity: v ? 1 : 0, transform: v ? "none" : "translateY(30px)", transition: `all 0.7s ease ${delay}ms` } as React.CSSProperties };
}

/* ── Philosophy Pillars ──────────────────────────────────── */
const pillars = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    title: "Strategy First",
    desc: "Every action we take is rooted in research and data. We don't guess — we plan, then execute with precision.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
      </svg>
    ),
    title: "Creative Excellence",
    desc: "Creativity isn't decoration — it's how we make brands memorable. We obsess over craft, quality, and originality.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    title: "Data-Driven",
    desc: "We measure everything. Every decision is validated by performance data — so we improve continuously, not just occasionally.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
    title: "Results Obsessed",
    desc: "Vanity metrics don't interest us. We track the numbers that actually matter — leads, conversions, revenue, and growth.",
  },
];

/* ── Industries ──────────────────────────────────────────── */
const industries = [
  { label: "Music & Entertainment" },
  { label: "Agriculture & Organic" },
  { label: "Fashion & Lifestyle" },
  { label: "Food & Beverage" },
  { label: "Technology" },
  { label: "Retail & E-commerce" },
  { label: "Health & Wellness" },
  { label: "Real Estate" },
];

/* ── Differentiators ─────────────────────────────────────── */
const whyUs = [
  "Strategy before execution — no random posting, ever",
  "Transparent reporting — you see exactly what's working",
  "Senior-level attention on every account, not interns",
  "Dehradun-based with deep understanding of Indian markets",
  "Built for long-term growth, not short-term vanity metrics",
  "We only take on clients we know we can deliver results for",
];

/* ── Page Component ──────────────────────────────────────── */
export default function AboutPage() {
  const heroR    = useReveal(0);
  const storyR   = useReveal(0);
  const mvR      = useReveal(0);
  const pillarsR = useReveal(0);
  const teamR    = useReveal(0);
  const indR     = useReveal(0);
  const whyR     = useReveal(0);
  const ctaR     = useReveal(0);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section style={{
        background: "var(--color-bg-primary)", textAlign: "center",
        padding: "clamp(80px, 10vw, 140px) 0 clamp(60px, 8vw, 100px)",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
          width: "700px", height: "400px",
          background: "radial-gradient(ellipse, rgba(201,168,76,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div ref={heroR.ref} style={heroR.style}>
            <span className="eyebrow" style={{ display: "block", marginBottom: "var(--space-5)" }}>About Anaya</span>
            <h1 style={{
              fontFamily: "var(--font-display)", fontSize: "var(--text-h1)", fontWeight: 600,
              lineHeight: 1.1, color: "var(--color-text-primary)", marginBottom: "var(--space-5)",
            }}>
              We Are{" "}
              <span style={{
                background: "linear-gradient(135deg, var(--color-gold-light), var(--color-gold))",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>Anaya</span>
            </h1>
            <p style={{ color: "var(--color-text-secondary)", maxWidth: "560px", margin: "0 auto", lineHeight: "var(--leading-relaxed)", fontSize: "var(--text-large)" }}>
              A premium digital marketing agency from Dehradun — built to help ambitious brands grow with strategy, creativity, and relentless focus on results.
            </p>
          </div>
        </div>
      </section>

      {/* ── Origin Story ─────────────────────────────────── */}
      <section className="section" style={{ background: "var(--color-bg-secondary)" }}>
        <div className="container-narrow">
          <div ref={storyR.ref} style={storyR.style}>
            <span className="eyebrow" style={{ display: "block", marginBottom: "var(--space-5)" }}>Our Story</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h2)", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "var(--space-8)", lineHeight: 1.2 }}>
              Built from a belief that every brand deserves{" "}
              <em style={{ color: "var(--color-gold)" }}>premium marketing.</em>
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
              {[
                "Anaya was founded in Dehradun with a simple but bold conviction: great digital marketing shouldn't be reserved for enterprise brands with massive budgets. Ambitious founders, growing businesses, and local legends deserve strategy that's thoughtful, creative, and actually moves the needle.",
                "We saw an industry full of agencies that promised the world and delivered generic content. We built Anaya as the antidote — a team that treats every client's brand with the same care and precision we'd give our own. No bloated retainers, no junior staff handling your account. Just senior-level strategy and obsessive execution.",
                "Today, we partner with brands across music, agriculture, fashion, tech, and more — helping them build digital presence that converts. From Dehradun to across India, and growing globally.",
              ].map((para, i) => (
                <p key={i} style={{ fontSize: "var(--text-large)", color: "var(--color-text-secondary)", lineHeight: "var(--leading-relaxed)" }}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ─────────────────────────────── */}
      <section className="section" style={{ background: "var(--color-bg-primary)" }}>
        <div className="container">
          <div ref={mvR.ref} style={{ ...mvR.style, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--space-8)" }}>
            {[
              {
                label: "Our Mission",
                icon: "◎",
                text: "To make premium digital marketing accessible to every ambitious brand — delivering strategy, creativity, and measurable results that drive real growth, not just likes.",
              },
              {
                label: "Our Vision",
                icon: "◆",
                text: "To be the most trusted digital marketing partner for Indian brands going global — known for exceptional creative work, transparent results, and relationships built on trust.",
              },
            ].map((item, i) => (
              <div key={item.label} style={{
                background: "var(--color-bg-tertiary)",
                border: "1px solid var(--color-border-gold)",
                borderRadius: "var(--radius-xl)",
                padding: "clamp(32px, 4vw, 48px)",
                opacity: mvR.style.opacity,
                transform: mvR.style.transform,
                transition: `all 0.7s ease ${i * 150}ms`,
              }}>
                <div style={{ fontSize: "1.6rem", color: "var(--color-gold)", marginBottom: "var(--space-4)" }}>{item.icon}</div>
                <span className="eyebrow" style={{ display: "block", marginBottom: "var(--space-4)" }}>{item.label}</span>
                <p style={{ fontSize: "var(--text-large)", color: "var(--color-text-secondary)", lineHeight: "var(--leading-relaxed)" }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Philosophy Pillars ───────────────────────────── */}
      <section className="section" style={{ background: "var(--color-bg-secondary)" }}>
        <div className="container">
          <div className="section-header" ref={pillarsR.ref} style={{ ...pillarsR.style }}>
            <span className="eyebrow">Our Philosophy</span>
            <h2>What Drives <span style={{ color: "var(--color-gold)" }}>Everything We Do</span></h2>
            <p>Four principles that shape every strategy, every campaign, every piece of content we create.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "var(--space-6)" }}>
            {pillars.map((p, i) => (
              <div key={p.title} style={{
                background: "var(--color-bg-tertiary)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-lg)",
                padding: "var(--space-8)",
                opacity: pillarsR.style.opacity,
                transform: pillarsR.style.transform,
                transition: `all 0.7s ease ${i * 100 + 200}ms`,
              }}>
                <div style={{ color: "var(--color-gold)", marginBottom: "var(--space-4)" }}>{p.icon}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "var(--space-3)" }}>{p.title}</h3>
                <p style={{ fontSize: "var(--text-small)", color: "var(--color-text-secondary)", lineHeight: "var(--leading-relaxed)" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ─────────────────────────────────────────── */}
      <section className="section" style={{ background: "var(--color-bg-primary)" }}>
        <div className="container">
          <div className="section-header" ref={teamR.ref} style={teamR.style}>
            <span className="eyebrow">The Team</span>
            <h2>The People Behind <span style={{ color: "var(--color-gold)" }}>Your Growth</span></h2>
            <p>Small by design. Senior by standard. Passionate by nature.</p>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{
              background: "var(--color-bg-tertiary)",
              border: "1px solid var(--color-border-gold)",
              borderRadius: "var(--radius-xl)",
              padding: "clamp(40px, 5vw, 60px)",
              maxWidth: "480px",
              width: "100%",
              textAlign: "center",
              opacity: teamR.style.opacity,
              transform: teamR.style.transform,
              transition: "all 0.7s ease 200ms",
            }}>
              {/* Avatar */}
              <div style={{
                width: "96px", height: "96px", borderRadius: "50%",
                background: "linear-gradient(135deg, var(--color-gold-dark), var(--color-gold-light))",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto var(--space-6)",
                fontSize: "2.2rem", fontWeight: 700, color: "#0A0A0A",
                fontFamily: "var(--font-display)",
                border: "2px solid var(--color-gold)",
              }}>
                A
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "var(--space-2)" }}>
                Founder &amp; Lead Strategist
              </h3>
              <span className="tag" style={{ marginBottom: "var(--space-5)", display: "inline-block" }}>Anaya Digital</span>
              <p style={{ fontSize: "var(--text-small)", color: "var(--color-text-secondary)", lineHeight: "var(--leading-relaxed)" }}>
                With deep roots in digital strategy, content creation, and brand building — our founder brings hands-on expertise to every client account. No middle layers. You work directly with the person who built the strategy.
              </p>
              <div style={{ marginTop: "var(--space-6)", paddingTop: "var(--space-5)", borderTop: "1px solid var(--color-border)", display: "flex", justifyContent: "center", gap: "var(--space-8)" }}>
                {[{ val: "3+", label: "Years" }, { val: "30+", label: "Clients" }, { val: "150+", label: "Campaigns" }].map((s) => (
                  <div key={s.label} style={{ textAlign: "center" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 600, color: "var(--color-gold)" }}>{s.val}</div>
                    <div style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "var(--tracking-wide)" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Industries ───────────────────────────────────── */}
      <section className="section" style={{ background: "var(--color-bg-secondary)" }}>
        <div className="container">
          <div className="section-header" ref={indR.ref} style={indR.style}>
            <span className="eyebrow">Industries We Serve</span>
            <h2>From Music to <span style={{ color: "var(--color-gold)" }}>Agriculture & Beyond</span></h2>
            <p>We bring strategic thinking and creative excellence to every industry we work in.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "var(--space-4)" }}>
            {industries.map((ind, i) => (
              <div key={ind.label} style={{
                background: "var(--color-bg-tertiary)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-lg)",
                padding: "var(--space-6)",
                textAlign: "center",
                opacity: indR.style.opacity,
                transform: indR.style.transform,
                transition: `all 0.6s ease ${i * 60 + 100}ms`,
              }}>
                <div style={{ width: "8px", height: "8px", background: "var(--color-gold)", margin: "0 auto var(--space-3)", borderRadius: "1px" }} />
                <div style={{ fontSize: "var(--text-xs)", color: "var(--color-text-secondary)", lineHeight: 1.4, fontWeight: 400 }}>{ind.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Anaya ─────────────────────────────── */}
      <section className="section" style={{ background: "var(--color-bg-primary)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "var(--space-12)", alignItems: "center" }}>
            {/* Left */}
            <div ref={whyR.ref} style={whyR.style}>
              <span className="eyebrow" style={{ display: "block", marginBottom: "var(--space-5)" }}>Why Us</span>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h2)", fontWeight: 600, color: "var(--color-text-primary)", lineHeight: 1.2, marginBottom: "var(--space-5)" }}>
                Why Choose <span style={{ color: "var(--color-gold)" }}>Anaya</span>
              </h2>
              <p style={{ color: "var(--color-text-secondary)", lineHeight: "var(--leading-relaxed)", fontSize: "var(--text-large)" }}>
                There are hundreds of agencies. Here&apos;s why the brands that care about quality choose us.
              </p>
            </div>
            {/* Right — list */}
            <div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
                {whyUs.map((item, i) => (
                  <li key={item} style={{
                    display: "flex", gap: "var(--space-4)", alignItems: "flex-start",
                    padding: "var(--space-5)",
                    background: "var(--color-bg-secondary)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-md)",
                    opacity: whyR.style.opacity,
                    transform: whyR.style.transform,
                    transition: `all 0.6s ease ${i * 80 + 200}ms`,
                  }}>
                    <span style={{ display: "inline-block", width: "5px", height: "5px", background: "var(--color-gold)", flexShrink: 0, marginTop: "6px", borderRadius: "1px" }} />
                    <span style={{ fontSize: "var(--text-small)", color: "var(--color-text-secondary)", lineHeight: "var(--leading-relaxed)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Strip ────────────────────────────────────── */}
      <section style={{
        background: "var(--color-bg-secondary)",
        borderTop: "1px solid var(--color-border-gold)",
        padding: "clamp(80px, 10vw, 120px) 0",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at center, rgba(201,168,76,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }} ref={ctaR.ref}>
          <div style={ctaR.style}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "var(--space-5)", lineHeight: 1.2 }}>
              Let&apos;s Build Something{" "}
              <span style={{ background: "linear-gradient(135deg, var(--color-gold-light), var(--color-gold))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Great Together
              </span>
            </h2>
            <p style={{ color: "var(--color-text-secondary)", maxWidth: "480px", margin: "0 auto var(--space-8)", lineHeight: "var(--leading-relaxed)" }}>
              Book a free 30-minute strategy call. No pressure, no pitch — just an honest conversation about your brand and what&apos;s possible.
            </p>
            <div style={{ display: "flex", gap: "var(--space-4)", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn btn-primary btn-lg">Book a Free Call</Link>
              <Link href="/work" className="btn btn-outline btn-lg">See Our Work</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
