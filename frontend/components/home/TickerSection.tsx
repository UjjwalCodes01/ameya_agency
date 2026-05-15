"use client";

const items = [
  "Social Media Management",
  "Search Engine Optimisation",
  "Paid Advertising",
  "Content Creation",
  "Brand Strategy",
  "Reels & Video",
  "Google Ads",
  "Local SEO",
  "Meta Ads",
  "Brand Identity",
  "Analytics & Reporting",
  "Website Design",
];

const Dot = () => (
  <span style={{ color: "var(--color-gold)", margin: "0 var(--space-6)", fontSize: "0.5rem", verticalAlign: "middle" }}>◆</span>
);

export default function TickerSection() {
  const repeated = [...items, ...items]; // duplicate for seamless loop

  return (
    <div
      style={{
        background: "var(--color-bg-secondary)",
        borderTop: "1px solid var(--color-border-gold)",
        borderBottom: "1px solid var(--color-border-gold)",
        padding: "var(--space-5) 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Fade edges */}
      <div style={{
        position: "absolute", left: 0, top: 0, bottom: 0, width: "80px", zIndex: 1,
        background: "linear-gradient(to right, var(--color-bg-secondary), transparent)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", right: 0, top: 0, bottom: 0, width: "80px", zIndex: 1,
        background: "linear-gradient(to left, var(--color-bg-secondary), transparent)",
        pointerEvents: "none",
      }} />

      <div className="marquee-track" style={{ willChange: "transform" }}>
        {repeated.map((item, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", whiteSpace: "nowrap" }}>
            <span style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-small)",
              fontWeight: 400,
              letterSpacing: "var(--tracking-wider)",
              textTransform: "uppercase",
              color: "var(--color-text-secondary)",
            }}>
              {item}
            </span>
            <Dot />
          </span>
        ))}
      </div>
    </div>
  );
}
