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
  { label: "Music & Entertainment", colSpan: 2, rowSpan: 2, bg: "linear-gradient(135deg, #1a1a1a, #0a0a0a)", color: "var(--color-gold)", desc: "Amplifying artists and labels with strategies that turn listeners into loyal fanbases." },
  { label: "Agriculture", colSpan: 2, rowSpan: 1, bg: "linear-gradient(135deg, #0a0a0a, #111)", color: "var(--color-text-primary)", desc: "Modernising agritech and organic brands for a digital-first world." },
  { label: "Fashion", colSpan: 1, rowSpan: 1, bg: "var(--color-bg-tertiary)", color: "var(--color-text-secondary)" },
  { label: "Food & Bev", colSpan: 1, rowSpan: 1, bg: "var(--color-bg-tertiary)", color: "var(--color-text-secondary)" },
  { label: "Technology", colSpan: 2, rowSpan: 1, bg: "linear-gradient(45deg, #111, #0a0a0a)", color: "var(--color-text-primary)", desc: "Scaling SaaS and hardware brands through precision B2B and B2C funnels." },
  { label: "E-commerce", colSpan: 2, rowSpan: 1, bg: "var(--color-bg-tertiary)", color: "var(--color-text-primary)", desc: "Driving massive ROAS and compounding lifetime value." },
  { label: "Wellness", colSpan: 1, rowSpan: 1, bg: "var(--color-bg-tertiary)", color: "var(--color-text-secondary)" },
  { label: "Real Estate", colSpan: 3, rowSpan: 1, bg: "linear-gradient(to right, #0a0a0a, #1a1a1a)", color: "var(--color-gold)", desc: "Generating high-intent leads for luxury and commercial properties." },
];

/* ── Differentiators ─────────────────────────────────────── */
const whyUsData = [
  {
    title: "Strategy First",
    desc: "No random posting, ever. We build comprehensive strategies before executing a single tactic.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
  },
  {
    title: "Transparent Reporting",
    desc: "You see exactly what's working. Real-time dashboards and honest monthly reviews.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
  },
  {
    title: "Senior Attention",
    desc: "Your account is handled by experts, not handed off to junior interns after the pitch.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  },
  {
    title: "Local Expertise",
    desc: "Lucknow-based with a deep, nuanced understanding of regional and Indian markets.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
  },
  {
    title: "Long-Term Growth",
    desc: "We build systems that compound over time, ignoring short-term vanity metrics.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
  },
  {
    title: "Vetted Partnerships",
    desc: "We strictly take on clients we know we can deliver exceptional, measurable results for.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
  },
];

/* ── Spotlight Grid Component ────────────────────────────── */
function SpotlightGrid({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const cards = containerRef.current.querySelectorAll('.spotlight-card');
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
      (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
    });
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="spotlight-container"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "var(--space-6)",
        position: "relative",
      }}
    >
      {children}
    </div>
  );
}

function SpotlightCard({ item }: { item: typeof whyUsData[0] }) {
  return (
    <div className="spotlight-card" style={{
      position: "relative",
      background: "var(--color-border)",
      borderRadius: "var(--radius-lg)",
      padding: "1px", // The glowing border width
      overflow: "hidden",
      height: "100%",
    }}>
      {/* Dynamic Border Glow */}
      <div className="spotlight-glow" style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(400px circle at var(--mouse-x, -500px) var(--mouse-y, -500px), rgba(201,168,76,0.8), transparent 40%)",
        transition: "opacity 0.3s",
        zIndex: 0,
        opacity: 0, // Handled by CSS on parent hover
      }} />

      {/* Inner Card content container */}
      <div style={{
        position: "relative",
        zIndex: 1,
        background: "var(--color-bg-secondary)",
        borderRadius: "calc(var(--radius-lg) - 1px)",
        padding: "clamp(32px, 4vw, 40px)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-4)",
      }}>
        {/* Dynamic Inner Background Glow */}
        <div className="spotlight-glow" style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(400px circle at var(--mouse-x, -500px) var(--mouse-y, -500px), rgba(201,168,76,0.06), transparent 40%)",
          transition: "opacity 0.3s",
          pointerEvents: "none",
          opacity: 0, // Handled by CSS on parent hover
        }} />
        
        <div style={{ position: "relative", zIndex: 2 }}>
          <div style={{ color: "var(--color-gold)", marginBottom: "var(--space-5)" }}>{item.icon}</div>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "var(--space-3)" }}>
            {item.title}
          </h3>
          <p style={{ fontSize: "var(--text-small)", color: "var(--color-text-secondary)", lineHeight: "var(--leading-relaxed)" }}>
            {item.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

const BentoCard = ({ ind, i, revealStyle }: { ind: any, i: number, revealStyle: any }) => {
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const xPct = (x / rect.width) * 100;
    const yPct = (y / rect.height) * 100;
    
    // Subtle tilt for large boxes
    const rotateX = ((y / rect.height) - 0.5) * -10;
    const rotateY = ((x / rect.width) - 0.5) * 10;
    
    setGlare({ x: xPct, y: yPct, opacity: 1 });
    setRotate({ x: rotateX, y: rotateY });
  };
  
  const handleMouseLeave = () => {
    setGlare(prev => ({ ...prev, opacity: 0 }));
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div 
      className={`bento-card col-span-${ind.colSpan} row-span-${ind.rowSpan}`}
      style={{ perspective: "1200px" }}
    >
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          position: "relative",
          background: ind.bg,
          border: "1px solid var(--color-border)",
          borderRadius: "var(--radius-xl)",
          padding: "clamp(24px, 4vw, 40px)",
          textAlign: "left",
          opacity: revealStyle.opacity,
          transition: glare.opacity 
            ? "none" 
            : (revealStyle.opacity === 1 ? "all 0.6s cubic-bezier(0.25, 1, 0.5, 1)" : `all 0.8s cubic-bezier(0.25, 1, 0.5, 1) ${i * 80 + 100}ms`),
          transform: glare.opacity 
            ? `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(1.02)` 
            : revealStyle.transform,
          transformStyle: "preserve-3d",
          overflow: "hidden",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          cursor: "crosshair",
        }}
      >
        {/* Subtle background glow */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(201,168,76,0.15) 0%, transparent 60%)`,
          opacity: glare.opacity,
          transition: "opacity 0.4s ease",
          pointerEvents: "none",
          zIndex: 0,
        }} />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 1, transform: glare.opacity ? "translateZ(20px)" : "none", transition: "transform 0.4s ease-out" }}>
          <div style={{ 
            fontFamily: "var(--font-display)", 
            fontSize: "var(--text-small)", 
            color: "var(--color-gold)", 
            letterSpacing: "2px",
            marginBottom: "var(--space-6)"
          }}>
            0{i + 1}
          </div>
          
          <h3 style={{ 
            fontFamily: "var(--font-display)", 
            fontSize: ind.rowSpan === 2 ? "clamp(2rem, 5vw, 4.5rem)" : "clamp(1.5rem, 3vw, 2.5rem)", 
            fontWeight: 600, 
            lineHeight: 1.1, 
            color: ind.color,
            transition: "color 0.4s ease",
            textShadow: glare.opacity ? "0 10px 30px rgba(0,0,0,0.5)" : "none"
          }}>
            {ind.label}
          </h3>

          {ind.desc && (
            <p style={{
              marginTop: "var(--space-4)",
              color: "var(--color-text-secondary)",
              fontSize: "var(--text-base)",
              lineHeight: 1.5,
              opacity: glare.opacity ? 1 : 0.7,
              transition: "opacity 0.4s ease",
            }}>
              {ind.desc}
            </p>
          )}
        </div>

        {/* Huge Watermark Number */}
        <div style={{
          position: "absolute",
          bottom: "-5%",
          right: "-5%",
          fontFamily: "var(--font-display)",
          fontSize: ind.rowSpan === 2 ? "18rem" : "10rem",
          fontWeight: 700,
          color: "rgba(255,255,255,0.02)",
          lineHeight: 1,
          pointerEvents: "none",
          transition: "transform 0.4s ease-out",
          transform: glare.opacity ? "scale(1.1) translateZ(10px)" : "scale(1)",
        }}>
          {i + 1}
        </div>
      </div>
    </div>
  );
};

/* ── Holographic Team Badge ──────────────────────────────── */
const teamMembers = [
  {
    idNumber: "ANY-001",
    access: "LVL_ALPHA",
    initials: "T",
    name: "Tejasvi",
    title: "Co-Founder & Strategy Lead",
    bio: "Great marketing starts with knowing what not to do.",
    detail: "Leads strategy and client relations with a focus on measurable growth and brand excellence.",
    linkedin: "https://linkedin.com/in/tejasvi",
  },
  {
    idNumber: "ANY-002",
    access: "LVL_BETA",
    initials: "AS",
    name: "Aaditya Singh",
    title: "Co-Founder & Performance Marketing",
    bio: "Every rupee spent should work harder than the last.",
    detail: "Oversees campaign execution and performance marketing operations across all client accounts.",
    linkedin: "https://linkedin.com/in/aadityasingh",
  },
  {
    idNumber: "ANY-003",
    access: "LVL_BETA",
    initials: "AS",
    name: "Aaditya Singhal",
    title: "Co-Founder & Content & Creative",
    bio: "Content without strategy is just noise.",
    detail: "Drives content strategy and creative direction ensuring every piece of content serves the brand.",
    linkedin: "https://linkedin.com/in/aadityasinghal",
  },
  {
    idNumber: "ANY-004",
    access: "LVL_GAMMA",
    initials: "UT",
    name: "Ujjwal Tyagi",
    title: "Co-Founder & Paid Media",
    bio: "Data tells you where to go. Intuition tells you how fast.",
    detail: "Manages digital advertising and paid media campaigns delivering consistent ROI for clients.",
    linkedin: "https://linkedin.com/in/ujjwaltyagi",
  },
  {
    idNumber: "ANY-005",
    access: "LVL_DELTA",
    initials: "RR",
    name: "Rudra Veer Singh Rathore",
    title: "Co-Founder & SEO & Organic Growth",
    bio: "Organic growth is the only kind that compounds.",
    detail: "Leads SEO and organic growth initiatives building long-term digital presence for every client.",
    linkedin: "https://linkedin.com/in/rudraveersinghrathore",
  },
];

const HoloBadge = ({ member, index, revealStyle }: { member: typeof teamMembers[0]; index: number; revealStyle: any }) => {
  const [hologram, setHologram] = useState({ x: 50, y: 50, opacity: 0 });
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const xPct = (x / rect.width) * 100;
    const yPct = (y / rect.height) * 100;
    
    const rotateX = ((y / rect.height) - 0.5) * -15; 
    const rotateY = ((x / rect.width) - 0.5) * 15;  
    
    setHologram({ x: xPct, y: yPct, opacity: 1 });
    setRotate({ x: rotateX, y: rotateY });
  };
  
  const handleMouseLeave = () => {
    setHologram(prev => ({ ...prev, opacity: 0 }));
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div style={{ perspective: "1000px", height: "100%" }}>
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          position: "relative",
          background: "linear-gradient(180deg, #111 0%, #050505 100%)",
          border: "1px solid var(--color-border)",
          borderRadius: "16px",
          padding: "clamp(24px, 4vw, 32px)",
          textAlign: "left",
          opacity: revealStyle.opacity,
          transition: hologram.opacity 
            ? "border-color 0.3s ease" 
            : (revealStyle.opacity === 1 ? "all 0.6s cubic-bezier(0.25, 1, 0.5, 1)" : `all 0.8s cubic-bezier(0.25, 1, 0.5, 1) ${index * 80 + 100}ms`),
          transform: hologram.opacity 
            ? `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(1.02)` 
            : revealStyle.transform,
          transformStyle: "preserve-3d",
          overflow: "hidden",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          borderColor: hologram.opacity ? "var(--color-gold-muted)" : "var(--color-border)",
          boxShadow: hologram.opacity ? "0 20px 40px rgba(0,0,0,0.8)" : "0 10px 30px rgba(0,0,0,0.5)",
        }}
      >
        {/* Holographic Sheen Layer */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at ${hologram.x}% ${hologram.y}%, rgba(201,168,76,0.2) 0%, rgba(0,255,255,0.05) 30%, rgba(255,0,255,0.05) 60%, transparent 80%)`,
          opacity: hologram.opacity,
          transition: "opacity 0.4s ease",
          pointerEvents: "none",
          zIndex: 0,
          mixBlendMode: "color-dodge",
        }} />
        
        {/* Top ID Markings */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "var(--space-6)", position: "relative", zIndex: 1 }}>
          <div style={{ 
            fontFamily: "var(--font-mono)", 
            fontSize: "0.65rem", 
            color: "var(--color-text-muted)", 
            letterSpacing: "2px",
            display: "flex", flexDirection: "column", gap: "4px"
          }}>
            <span>ID: {member.idNumber}</span>
            <span style={{ color: "var(--color-gold)" }}>{member.access}</span>
          </div>
          {/* Fake Barcode */}
          <div style={{
            display: "flex", gap: "2px", height: "16px", opacity: 0.3
          }}>
            {[1,3,2,1,4,1,2,3,1,1,2,3,1,2,1].map((w, idx) => (
              <div key={idx} style={{ width: `${w}px`, background: "var(--color-text-primary)", height: "100%" }} />
            ))}
          </div>
        </div>

        {/* Content Container (Pops out in 3D) */}
        <div style={{ position: "relative", zIndex: 1, transform: hologram.opacity ? "translateZ(30px)" : "none", transition: "transform 0.4s ease-out", flex: 1, display: "flex", flexDirection: "column" }}>
          
          <div style={{
            width: "60px", height: "60px", borderRadius: "8px",
            background: "linear-gradient(135deg, var(--color-gold-dark), var(--color-gold-light))",
            display: "flex", alignItems: "center", justifyContent: "center",
            marginBottom: "var(--space-5)",
            fontSize: "1.2rem", fontWeight: 700, color: "#0A0A0A",
            fontFamily: "var(--font-display)",
            letterSpacing: "1px",
            boxShadow: hologram.opacity ? "0 10px 20px rgba(201,168,76,0.3)" : "none",
            transition: "box-shadow 0.4s ease",
          }}>
            {member.initials}
          </div>

          <h3 style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.6rem",
            fontWeight: 600,
            color: "var(--color-text-primary)",
            marginBottom: "2px",
            lineHeight: 1.2,
          }}>
            {member.name}
          </h3>

          <p style={{
            fontSize: "0.7rem",
            color: "var(--color-gold)",
            fontFamily: "var(--font-mono)",
            textTransform: "uppercase",
            letterSpacing: "2px",
            marginBottom: "var(--space-5)",
          }}>
            {member.title}
          </p>

          <p style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: "1.1rem",
            color: hologram.opacity ? "var(--color-text-primary)" : "var(--color-text-secondary)",
            lineHeight: 1.4,
            marginBottom: "var(--space-4)",
            borderLeft: "2px solid var(--color-gold)",
            paddingLeft: "var(--space-4)",
            transition: "color 0.4s ease",
          }}>
            "{member.bio}"
          </p>

          <p style={{
            fontSize: "var(--text-small)",
            color: "var(--color-text-muted)",
            lineHeight: 1.5,
            marginBottom: "var(--space-6)",
            flex: 1,
          }}>
            {member.detail}
          </p>

          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "0.75rem",
              fontFamily: "var(--font-mono)",
              color: "var(--color-gold)",
              textDecoration: "none",
              textTransform: "uppercase",
              letterSpacing: "1px",
              marginTop: "auto",
              paddingTop: "var(--space-4)",
              borderTop: "1px dashed rgba(255,255,255,0.1)",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            Verify Profile
          </a>
        </div>
      </div>
    </div>
  );
};

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
              A digital marketing agency from Lucknow — built to help ambitious brands grow with strategy, creativity, and relentless focus on results.
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
              <em style={{ color: "var(--color-gold)" }}>empire-building marketing.</em>
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
              {[
                "Anaya was founded in Lucknow with a simple but bold conviction: great digital marketing shouldn't be reserved for enterprise brands with massive budgets. Ambitious founders, growing businesses, and local legends deserve strategy that's thoughtful, creative, and actually moves the needle.",
                "We saw an industry full of agencies that promised the world and delivered generic content. We built Anaya as the antidote — a team that treats every client's brand with the same care and precision we'd give our own. No bloated retainers, no junior staff handling your account. Just senior-level strategy and obsessive execution.",
                "Today, we partner with brands across music, agriculture, fashion, tech, and more — helping them build digital presence that converts. From Lucknow to across India, and growing globally.",
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
                text: "To make empire-building digital marketing accessible to every ambitious brand — delivering strategy, creativity, and measurable results that drive real growth, not just likes.",
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
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "var(--space-6)", marginTop: "var(--space-8)" }}>
            {teamMembers.map((member, i) => (
              <HoloBadge key={member.name} member={member} index={i} revealStyle={teamR.style} />
            ))}
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
          
          <style>{`
            .crazy-bento-grid {
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              grid-auto-rows: 240px;
              gap: var(--space-4);
            }
            .col-span-1 { grid-column: span 1; }
            .col-span-2 { grid-column: span 2; }
            .col-span-3 { grid-column: span 3; }
            .col-span-4 { grid-column: span 4; }
            .row-span-1 { grid-row: span 1; }
            .row-span-2 { grid-row: span 2; }
            
            @media (max-width: 1024px) {
              .crazy-bento-grid {
                grid-template-columns: repeat(2, 1fr);
                grid-auto-rows: 220px;
              }
              .col-span-3 { grid-column: span 2; } /* tablet fix */
            }
            @media (max-width: 640px) {
              .crazy-bento-grid {
                grid-template-columns: 1fr;
                grid-auto-rows: 200px;
              }
              .col-span-1, .col-span-2, .col-span-3, .col-span-4 {
                grid-column: span 1 !important;
              }
              .row-span-1, .row-span-2 {
                grid-row: span 1 !important;
              }
            }
          `}</style>

          <div className="crazy-bento-grid">
            {industries.map((ind, i) => (
              <BentoCard key={ind.label} ind={ind} i={i} revealStyle={indR.style} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Anaya ─────────────────────────────── */}
      <section className="section" style={{ background: "var(--color-bg-primary)" }}>
        <style>{`
          .spotlight-container:hover .spotlight-glow {
            opacity: 1 !important;
          }
          @media (max-width: 1024px) {
            .spotlight-glow {
              opacity: 0.5 !important;
              background: radial-gradient(circle at 50% 0%, rgba(201,168,76,0.2), transparent 70%) !important;
            }
          }
        `}</style>

        <div className="container">
          <div ref={whyR.ref} style={{ ...whyR.style, textAlign: "center", marginBottom: "var(--space-12)", maxWidth: "700px", margin: "0 auto var(--space-12)" }}>
            <span className="eyebrow" style={{ display: "block", marginBottom: "var(--space-5)" }}>Why Us</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h2)", fontWeight: 600, color: "var(--color-text-primary)", lineHeight: 1.2, marginBottom: "var(--space-5)" }}>
              Why Choose <span style={{ color: "var(--color-gold)" }}>Anaya</span>
            </h2>
            <p style={{ color: "var(--color-text-secondary)", lineHeight: "var(--leading-relaxed)", fontSize: "var(--text-large)" }}>
              There are hundreds of agencies. Here's why the brands that care about real, sustainable growth choose to partner with us.
            </p>
          </div>
          
          <div style={{ ...whyR.style }}>
            <SpotlightGrid>
              {whyUsData.map((item) => (
                <SpotlightCard key={item.title} item={item} />
              ))}
            </SpotlightGrid>
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
