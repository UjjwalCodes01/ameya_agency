"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { articles, categories } from "@/lib/blog-data";

function useReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); o.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return { ref, style: { opacity: v ? 1 : 0, transform: v ? "none" : "translateY(28px)", transition: `all 0.7s ease ${delay}ms` } as React.CSSProperties };
}

function ArticleCard({ article, index, large = false }: { article: typeof articles[0]; index: number; large?: boolean }) {
  const { ref, style } = useReveal(index * 100);
  const [hovered, setHovered] = useState(false);

  return (
    <div ref={ref} style={style}>
      <Link href={`/blog/${article.slug}`} style={{ textDecoration: "none", display: "block" }}>
        <div
          style={{
            background: large
              ? `linear-gradient(135deg, ${article.accentColor} 0%, var(--color-bg-tertiary) 100%)`
              : "var(--color-bg-tertiary)",
            border: `1px solid ${hovered ? "var(--color-border-gold)" : "var(--color-border)"}`,
            borderRadius: "var(--radius-xl)",
            overflow: "hidden",
            transition: "all var(--transition-base)",
            transform: hovered ? "translateY(-4px)" : "none",
            boxShadow: hovered ? "var(--shadow-gold)" : "none",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Thumbnail */}
          <div style={{
            height: large ? "220px" : "160px",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: large ? "4.5rem" : "3.5rem",
            background: article.accentColor,
            position: "relative",
          }}>
            {article.emoji}
            {article.featured && (
              <div style={{ position: "absolute", top: "var(--space-4)", left: "var(--space-4)" }}>
                <span className="tag">Featured</span>
              </div>
            )}
          </div>

          {/* Content */}
          <div style={{ padding: large ? "var(--space-8)" : "var(--space-6)", display: "flex", flexDirection: "column", flex: 1 }}>
            {/* Meta */}
            <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "center", marginBottom: "var(--space-4)", flexWrap: "wrap" }}>
              <span className="tag">{article.category}</span>
              <span style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)" }}>{article.date}</span>
              <span style={{ color: "var(--color-border)", fontSize: "var(--text-xs)" }}>·</span>
              <span style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)" }}>{article.readTime}</span>
            </div>

            {/* Title */}
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: large ? "clamp(1.4rem, 2.5vw, 2rem)" : "clamp(1.1rem, 2vw, 1.35rem)",
              fontWeight: 600,
              color: hovered ? "var(--color-gold-light)" : "var(--color-text-primary)",
              lineHeight: 1.25,
              marginBottom: "var(--space-4)",
              transition: "color var(--transition-fast)",
            }}>
              {article.title}
            </h2>

            {/* Excerpt */}
            <p style={{
              fontSize: "var(--text-small)",
              color: "var(--color-text-secondary)",
              lineHeight: "var(--leading-relaxed)",
              flex: 1,
              marginBottom: "var(--space-5)",
            }}>
              {article.excerpt}
            </p>

            {/* Author + Read more */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid var(--color-border)", paddingTop: "var(--space-4)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "linear-gradient(135deg, var(--color-gold-dark), var(--color-gold))", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "var(--text-xs)", fontWeight: 600, color: "#0A0A0A" }}>A</div>
                <span style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)" }}>{article.author}</span>
              </div>
              <span style={{ fontSize: "var(--text-xs)", color: "var(--color-gold)", letterSpacing: "var(--tracking-wide)", textTransform: "uppercase", fontWeight: 500 }}>
                Read →
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

function NewsletterSignup() {
  const { ref, style } = useReveal();
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <div ref={ref} style={{
      ...style,
      background: "var(--color-bg-secondary)",
      border: "1px solid var(--color-border-gold)",
      borderRadius: "var(--radius-xl)",
      padding: "clamp(40px, 5vw, 60px)",
      textAlign: "center",
      marginTop: "var(--space-16)",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(201,168,76,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "relative", zIndex: 1 }}>
        <span className="eyebrow" style={{ display: "block", marginBottom: "var(--space-4)" }}>Stay Updated</span>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "var(--space-4)" }}>
          Get Marketing Tips in Your Inbox
        </h3>
        <p style={{ color: "var(--color-text-secondary)", maxWidth: "400px", margin: "0 auto var(--space-8)", lineHeight: "var(--leading-relaxed)" }}>
          One email per month. No spam. Just actionable digital marketing insights from the Ameya team.
        </p>
        {done ? (
          <div style={{ padding: "var(--space-4) var(--space-8)", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.25)", borderRadius: "var(--radius-full)", display: "inline-block" }}>
            <span style={{ fontSize: "var(--text-small)", color: "#22c55e", fontWeight: 500 }}>✓ You&apos;re subscribed! Thank you.</span>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); if (email) setDone(true); }} style={{ display: "flex", gap: "var(--space-3)", maxWidth: "440px", margin: "0 auto", flexWrap: "wrap", justifyContent: "center" }}>
            <input
              type="email" required placeholder="your@email.com" value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                flex: 1, minWidth: "220px",
                background: "var(--color-bg-tertiary)", border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-sm)", padding: "14px 16px",
                fontFamily: "var(--font-body)", fontSize: "var(--text-base)", color: "var(--color-text-primary)",
                outline: "none",
              }}
              onFocus={(e) => e.target.style.borderColor = "var(--color-gold)"}
              onBlur={(e) => e.target.style.borderColor = "var(--color-border)"}
            />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const heroR = useReveal();

  const featured = articles.find((a) => a.featured);
  const filtered = articles.filter((a) => activeCategory === "All" || a.category === activeCategory);
  const rest = filtered.filter((a) => !a.featured || activeCategory !== "All");

  return (
    <>
      {/* Hero */}
      <section style={{
        background: "var(--color-bg-primary)", textAlign: "center",
        padding: "clamp(80px, 10vw, 140px) 0 clamp(50px, 6vw, 80px)",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "700px", height: "400px", background: "radial-gradient(ellipse, rgba(201,168,76,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div ref={heroR.ref} style={heroR.style}>
            <span className="eyebrow" style={{ display: "block", marginBottom: "var(--space-5)" }}>Blog & Insights</span>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h1)", fontWeight: 600, lineHeight: 1.1, color: "var(--color-text-primary)", marginBottom: "var(--space-5)" }}>
              Insights &{" "}
              <span style={{ background: "linear-gradient(135deg, var(--color-gold-light), var(--color-gold))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Ideas</span>
            </h1>
            <p style={{ color: "var(--color-text-secondary)", maxWidth: "520px", margin: "0 auto", lineHeight: "var(--leading-relaxed)", fontSize: "var(--text-large)" }}>
              Practical digital marketing advice, industry insights, and behind-the-scenes strategy from the Ameya team.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <div style={{ background: "var(--color-bg-primary)", paddingBottom: "var(--space-4)" }}>
        <div className="container">
          <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap", justifyContent: "center", borderBottom: "1px solid var(--color-border)", paddingBottom: "var(--space-6)" }}>
            {categories.map((c) => (
              <button key={c} onClick={() => setActiveCategory(c)}
                style={{
                  fontFamily: "var(--font-body)", fontSize: "var(--text-xs)", fontWeight: 500,
                  letterSpacing: "var(--tracking-wider)", textTransform: "uppercase",
                  padding: "8px 20px", borderRadius: "var(--radius-full)",
                  border: `1px solid ${activeCategory === c ? "var(--color-gold)" : "var(--color-border)"}`,
                  background: activeCategory === c ? "var(--color-gold-muted)" : "transparent",
                  color: activeCategory === c ? "var(--color-gold)" : "var(--color-text-secondary)",
                  cursor: "pointer", transition: "all var(--transition-base)",
                }}>
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <section style={{ background: "var(--color-bg-primary)", padding: "var(--space-10) 0 var(--section-py)" }}>
        <div className="container">
          {/* Featured post (only when showing All) */}
          {activeCategory === "All" && featured && (
            <div style={{ marginBottom: "var(--space-10)" }}>
              <ArticleCard article={featured} index={0} large />
            </div>
          )}

          {/* Article Grid */}
          {rest.length > 0 ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "var(--space-6)" }}>
              {rest.map((a, i) => <ArticleCard key={a.slug} article={a} index={i} />)}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "var(--space-16)", color: "var(--color-text-muted)" }}>
              <div style={{ fontSize: "2rem", marginBottom: "var(--space-4)" }}>✦</div>
              <p>No articles in this category yet — check back soon!</p>
            </div>
          )}

          {/* Newsletter */}
          <NewsletterSignup />
        </div>
      </section>
    </>
  );
}
