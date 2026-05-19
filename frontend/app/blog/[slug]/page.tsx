"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { articles, type Section } from "@/lib/blog-data";

function useReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); o.disconnect(); } }, { threshold: 0.05 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return { ref, style: { opacity: v ? 1 : 0, transform: v ? "none" : "translateY(24px)", transition: `all 0.65s ease ${delay}ms` } as React.CSSProperties };
}

function RenderSection({ s }: { s: Section }) {
  const { ref, style } = useReveal();

  if (s.type === "h2") return (
    <div ref={ref} style={style}>
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 600, color: "var(--color-text-primary)", margin: "var(--space-10) 0 var(--space-4)", lineHeight: 1.2, display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
        <span style={{ display: "inline-block", width: "28px", height: "2px", background: "var(--color-gold)", flexShrink: 0 }} />
        {s.content}
      </h2>
    </div>
  );

  if (s.type === "h3") return (
    <div ref={ref} style={style}>
      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.2rem, 2vw, 1.5rem)", fontWeight: 600, color: "var(--color-text-primary)", margin: "var(--space-6) 0 var(--space-3)", lineHeight: 1.3 }}>{s.content}</h3>
    </div>
  );

  if (s.type === "p") return (
    <div ref={ref} style={style}>
      <p style={{ fontSize: "var(--text-large)", color: "var(--color-text-secondary)", lineHeight: "1.9", marginBottom: "var(--space-5)" }}>{s.content}</p>
    </div>
  );

  if (s.type === "ul") return (
    <div ref={ref} style={style}>
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "var(--space-3)", margin: "var(--space-5) 0", paddingLeft: "var(--space-4)" }}>
        {s.items?.map((item) => (
          <li key={item} style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start", fontSize: "var(--text-large)", color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
            <span style={{ color: "var(--color-gold)", flexShrink: 0, marginTop: "6px", fontSize: "0.6rem" }}>◆</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  if (s.type === "blockquote") return (
    <div ref={ref} style={style}>
      <blockquote style={{
        borderLeft: "3px solid var(--color-gold)",
        paddingLeft: "var(--space-6)",
        margin: "var(--space-8) 0",
        background: "var(--color-gold-muted)",
        borderRadius: "0 var(--radius-md) var(--radius-md) 0",
        padding: "var(--space-6) var(--space-6) var(--space-6) var(--space-8)",
      }}>
        <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)", fontStyle: "italic", color: "var(--color-text-primary)", lineHeight: 1.7, margin: 0 }}>
          &ldquo;{s.content}&rdquo;
        </p>
      </blockquote>
    </div>
  );

  if (s.type === "cta") return (
    <div ref={ref} style={{ ...style, textAlign: "center", borderTop: "1px solid var(--color-border-gold)", paddingTop: "var(--space-10)", marginTop: "var(--space-10)" }}>
      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "var(--space-4)" }}>
        Ready to put this into practice for your brand?
      </h3>
      <p style={{ color: "var(--color-text-secondary)", marginBottom: "var(--space-6)", lineHeight: "var(--leading-relaxed)" }}>
        Book a free strategy call and let&apos;s build a digital marketing plan that actually works.
      </p>
      <div style={{ display: "flex", gap: "var(--space-4)", justifyContent: "center", flexWrap: "wrap" }}>
        <Link href="/contact" className="btn btn-primary btn-lg">Book a Free Call</Link>
        <Link href="/blog" className="btn btn-outline btn-lg">← More Articles</Link>
      </div>
    </div>
  );

  return null;
}

import { use } from "react";

export default function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const article = articles.find((a) => a.slug === resolvedParams.slug);
  if (!article) notFound();

  const heroR = useReveal(0);
  const relatedArticles = articles.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section style={{
        background: `linear-gradient(135deg, ${article.accentColor} 0%, var(--color-bg-primary) 60%)`,
        padding: "clamp(80px, 10vw, 140px) 0 clamp(50px, 6vw, 80px)",
        borderBottom: "1px solid var(--color-border)",
      }}>
        <div className="container-narrow">
          <div ref={heroR.ref} style={heroR.style}>
            {/* Breadcrumb */}
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", marginBottom: "var(--space-6)" }}>
              <Link href="/blog" style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "var(--tracking-wider)", textDecoration: "none" }}>← Blog</Link>
              <span style={{ color: "var(--color-border)" }}>/</span>
              <span className="tag">{article.category}</span>
            </div>

            {/* Big emoji */}
            <div style={{ width: "40px", height: "2px", background: "var(--color-gold)", marginBottom: "var(--space-6)", boxShadow: "0 0 12px var(--color-gold)" }} />

            {/* Title */}
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 4vw, 3.2rem)", fontWeight: 600, lineHeight: 1.15, color: "var(--color-text-primary)", marginBottom: "var(--space-6)" }}>
              {article.title}
            </h1>

            {/* Meta */}
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-5)", flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "linear-gradient(135deg, var(--color-gold-dark), var(--color-gold))", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "var(--text-small)", fontWeight: 700, color: "#0A0A0A" }}>A</div>
                <div>
                  <div style={{ fontSize: "var(--text-small)", fontWeight: 500, color: "var(--color-text-primary)" }}>{article.author}</div>
                  <div style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)" }}>{article.authorRole}</div>
                </div>
              </div>
              <div style={{ display: "flex", gap: "var(--space-4)", color: "var(--color-text-muted)", fontSize: "var(--text-xs)" }}>
                <span>{article.date}</span>
                <span>·</span>
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section style={{ background: "var(--color-bg-primary)", padding: "var(--section-py) 0" }}>
        <div className="container-narrow">
          {/* Excerpt (lead paragraph) */}
          <p style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
            fontStyle: "italic",
            color: "var(--color-text-primary)",
            lineHeight: 1.8,
            marginBottom: "var(--space-8)",
            paddingBottom: "var(--space-8)",
            borderBottom: "1px solid var(--color-border)",
          }}>
            {article.excerpt}
          </p>

          {/* Body sections */}
          <div>
            {article.body.map((section, i) => (
              <RenderSection key={i} s={section} />
            ))}
          </div>

          {/* Tags */}
          <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap", marginTop: "var(--space-10)", paddingTop: "var(--space-8)", borderTop: "1px solid var(--color-border)" }}>
            <span style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "var(--tracking-wide)", marginRight: "var(--space-2)" }}>Tags:</span>
            {[article.category, "Digital Marketing", "Anaya"].map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section style={{ background: "var(--color-bg-secondary)", borderTop: "1px solid var(--color-border)", padding: "clamp(60px, 8vw, 100px) 0" }}>
          <div className="container">
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "var(--space-8)", textAlign: "center" }}>
              More from the <span style={{ color: "var(--color-gold)" }}>Anaya Blog</span>
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--space-6)" }}>
              {relatedArticles.map((a) => (
                <Link key={a.slug} href={`/blog/${a.slug}`} style={{ textDecoration: "none" }}>
                  <div style={{
                    background: "var(--color-bg-tertiary)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-xl)",
                    overflow: "hidden",
                    transition: "all var(--transition-base)",
                  }}
                    onMouseEnter={(e) => { const el = e.currentTarget; el.style.borderColor = "var(--color-border-gold)"; el.style.transform = "translateY(-4px)"; }}
                    onMouseLeave={(e) => { const el = e.currentTarget; el.style.borderColor = "var(--color-border)"; el.style.transform = "none"; }}>
                    <div style={{ padding: "var(--space-6)" }}>
                      <span className="tag" style={{ marginBottom: "var(--space-3)", display: "inline-block" }}>{a.category}</span>
                      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 600, color: "var(--color-text-primary)", lineHeight: 1.3, marginBottom: "var(--space-2)" }}>{a.title}</h3>
                      <p style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)" }}>{a.readTime}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
