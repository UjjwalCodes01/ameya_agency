"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";

/* ── Character Reveal Utility ─────────────────────────────── */
function RevealText({ text, delay = 0, className = "", style = {} }: {
  text: string; delay?: number; className?: string; style?: React.CSSProperties;
}) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <span className={className} style={{ display: "inline-block", ...style }}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            overflow: "hidden",
            verticalAlign: "bottom",
          }}
        >
          <span
            style={{
               display: "inline-block",
               transform: visible ? "translateY(0)" : "translateY(105%)",
               opacity: visible ? 1 : 0,
               transition: `transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay + i * 22}ms, opacity 0.4s ease ${delay + i * 22}ms`,
               whiteSpace: char === " " ? "pre" : "normal",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        </span>
      ))}
    </span>
  );
}

/* ── Orbit UI ─────────────────────────────────────────────── */
const orbitNodes = [
  { label: "Social Media", angle: 0,   radius: 130, speed: 18, size: 10, delay: 0 },
  { label: "SEO",          angle: 72,  radius: 160, speed: 24, size: 8,  delay: 1.2 },
  { label: "Paid Ads",     angle: 144, radius: 110, speed: 14, size: 12, delay: 0.6 },
  { label: "Branding",     angle: 216, radius: 155, speed: 20, size: 9,  delay: 2 },
  { label: "Content",      angle: 288, radius: 125, speed: 16, size: 11, delay: 1.8 },
];

function OrbitUI({ visible }: { visible: boolean }) {
  const cx = 240;
  const cy = 240;

  return (
    <div style={{
      position: "relative",
      width: "480px",
      height: "480px",
      flexShrink: 0,
      opacity: visible ? 1 : 0,
      transition: "opacity 1.2s ease 800ms",
    }}>
      <svg
        width="480"
        height="480"
        viewBox="0 0 480 480"
        style={{ position: "absolute", inset: 0, overflow: "visible" }}
      >
        {/* Orbit rings */}
        {orbitNodes.map((node, i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={node.radius}
            fill="none"
            stroke="rgba(201,168,76,0.08)"
            strokeWidth="1"
            strokeDasharray="3 8"
          />
        ))}

        {/* Connection lines — drawn from center to each node */}
        {orbitNodes.map((node, i) => {
          const rad = (node.angle * Math.PI) / 180;
          const nx = cx + node.radius * Math.cos(rad);
          const ny = cy + node.radius * Math.sin(rad);
          return (
            <line
              key={i}
              x1={cx}
              y1={cy}
              x2={nx}
              y2={ny}
              stroke="rgba(201,168,76,0.12)"
              strokeWidth="0.5"
            />
          );
        })}

        {/* Central core glow */}
        <circle cx={cx} cy={cy} r="4" fill="var(--color-gold)" opacity="1">
          <animate attributeName="r" values="4;7;4" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.6;1" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx={cx} cy={cy} r="18" fill="none" stroke="var(--color-gold)" strokeWidth="0.5" opacity="0.3">
          <animate attributeName="r" values="18;26;18" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0.1;0.3" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx={cx} cy={cy} r="40" fill="rgba(201,168,76,0.04)" />

        {/* Orbiting nodes */}
        {orbitNodes.map((node, i) => {
          const animDuration = `${node.speed}s`;
          return (
            <g key={i}>
              <animateTransform
                attributeName="transform"
                type="rotate"
                from={`0 ${cx} ${cy}`}
                to={`360 ${cx} ${cy}`}
                dur={animDuration}
                repeatCount="indefinite"
              />
              {/* Animated dot along the orbit ring */}
              <circle
                cx={cx + node.radius}
                cy={cy}
                r={node.size / 2}
                fill="var(--color-gold)"
                opacity="0.9"
              />
            </g>
          );
        })}
      </svg>

      {/* Floating labels for each node — positioned absolutely */}
      {orbitNodes.map((node, i) => {
        const rad = (node.angle * Math.PI) / 180;
        const nx = cx + node.radius * Math.cos(rad);
        const ny = cy + node.radius * Math.sin(rad);

        // Label offset — push it outside the dot
        const labelOffsetX = Math.cos(rad) * 24;
        const labelOffsetY = Math.sin(rad) * 20;

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${nx + labelOffsetX}px`,
              top: `${ny + labelOffsetY}px`,
              transform: "translate(-50%, -50%)",
              background: "rgba(10,10,10,0.85)",
              border: "1px solid rgba(201,168,76,0.25)",
              borderRadius: "20px",
              padding: "4px 10px",
              fontSize: "0.65rem",
              fontFamily: "var(--font-body)",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--color-text-secondary)",
              whiteSpace: "nowrap",
              backdropFilter: "blur(8px)",
              pointerEvents: "none",
              opacity: visible ? 1 : 0,
              transition: `opacity 0.8s ease ${1000 + i * 150}ms`,
            }}
          >
            {node.label}
          </div>
        );
      })}

      {/* Center label */}
      <div style={{
        position: "absolute",
        left: `${cx}px`,
        top: `${cy}px`,
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        pointerEvents: "none",
      }}>
        <div style={{
          fontFamily: "var(--font-display)",
          fontSize: "0.9rem",
          fontWeight: 600,
          color: "var(--color-gold)",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          opacity: visible ? 1 : 0,
          transition: "opacity 1.2s ease 1200ms",
        }}>
          Anaya
        </div>
      </div>
    </div>
  );
}

/* ── Hero Section ─────────────────────────────────────────── */
export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { clearTimeout(t); window.removeEventListener("scroll", onScroll); };
  }, []);

  const parallaxOrbit = {
    transform: `translateY(${scrollY * 0.15}px) scale(${1 - scrollY * 0.0003})`,
    opacity: Math.max(0, 1 - scrollY * 0.003),
  };

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "var(--color-bg-primary)",
      }}
    >
      {/* Ambient gold glow blobs */}
      <div style={{
        position: "absolute", top: "10%", left: "-5%",
        width: "600px", height: "600px",
        background: "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)",
        filter: "blur(80px)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "5%", right: "-10%",
        width: "500px", height: "500px",
        background: "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)",
        filter: "blur(100px)", pointerEvents: "none",
      }} />

      {/* Top gold line */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent)",
      }} />

      {/* Main Content — Split Screen */}
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "clamp(40px, 6vw, 80px)",
          padding: "var(--section-py) var(--section-px)",
          minHeight: "100vh",
        }}
      >
        {/* Left — Typography */}
        <div style={{ flex: 1, maxWidth: "620px" }}>
          {/* Eyebrow */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.6s ease 0ms, transform 0.6s ease 0ms",
            marginBottom: "var(--space-8)",
          }}>
            <span className="eyebrow">Building Empires · Lucknow, India</span>
          </div>

          {/* Main headline — character reveal */}
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.5rem, 4.5vw, 4rem)",
            fontWeight: 600,
            lineHeight: 1.0,
            letterSpacing: "-0.02em",
            color: "var(--color-text-primary)",
            marginBottom: "var(--space-8)",
          }}>
            <div style={{ overflow: "hidden", marginBottom: "0.05em" }}>
              <RevealText text="Boundless" delay={200} />
            </div>
            <div style={{ overflow: "hidden", marginBottom: "0.05em" }}>
              <RevealText
                text="Possibilities."
                delay={400}
                style={{ color: "var(--color-gold)" }}
              />
            </div>
            <div style={{ overflow: "hidden" }}>
              <RevealText text="Limitless Growth." delay={600} />
            </div>
          </h1>

          {/* Subheadline */}
          <p style={{
            color: "var(--color-text-secondary)",
            fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
            lineHeight: "var(--leading-relaxed)",
            maxWidth: "520px",
            marginBottom: "var(--space-10)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease 900ms, transform 0.7s ease 900ms",
          }}>
            We are an empire-building digital marketing agency from Lucknow —
            helping ambitious brands scale through data-driven strategies and bold execution.
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: "flex",
            gap: "var(--space-4)",
            flexWrap: "wrap",
            marginBottom: "var(--space-16)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease 1100ms, transform 0.7s ease 1100ms",
          }}>
            <Link href="/contact" className="btn btn-primary btn-lg">Start a Project</Link>
            <Link href="/work" className="btn btn-outline btn-lg">View Our Work</Link>
          </div>

          {/* Minimal stat strip */}
          <div style={{
            display: "flex",
            gap: "var(--space-10)",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.7s ease 1300ms",
          }}>
            {[
              { num: "3+", label: "Clients" },
              { num: "10+", label: "Campaigns" },
              { num: "3+", label: "Industries" },
            ].map((s) => (
              <div key={s.label}>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.8rem",
                  fontWeight: 600,
                  color: "var(--color-gold)",
                  lineHeight: 1,
                }}>{s.num}</div>
                <div style={{
                  fontSize: "var(--text-xs)",
                  color: "var(--color-text-muted)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginTop: "4px",
                }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Orbit UI (desktop only) */}
        <div
          className="hero-orbit"
          style={{
            flexShrink: 0,
            ...parallaxOrbit,
            transition: "transform 0.1s linear",
          }}
        >
          <OrbitUI visible={visible} />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div style={{
        position: "absolute",
        bottom: "32px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "var(--space-2)",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.7s ease 1600ms",
      }}>
        <span style={{
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-xs)",
          color: "var(--color-text-muted)",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
        }}>Scroll</span>
        <div style={{
          width: "1px",
          height: "50px",
          background: "linear-gradient(to bottom, var(--color-gold), transparent)",
          animation: "scrollPulse 2s ease-in-out infinite",
        }} />
        <style>{`
          @keyframes scrollPulse {
            0%, 100% { opacity: 0.3; transform: scaleY(1); }
            50% { opacity: 1; transform: scaleY(1.2); }
          }
          .hero-orbit {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          @media (max-width: 900px) {
            .hero-orbit { display: none; }
          }
        `}</style>
      </div>
    </section>
  );
}
