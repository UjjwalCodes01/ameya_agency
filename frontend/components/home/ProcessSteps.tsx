"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "We begin with an exhaustive audit of your brand's digital ecosystem. By deep-diving into your audience psychology, mapping competitor vulnerabilities, and defining aggressive performance KPIs, we lay a concrete foundation. No guesswork, no assumptions—just ruthless, data-backed research designed to uncover hidden revenue opportunities.",
    icon: "◎",
    bgImage: "/discover.png",
  },
  {
    num: "02",
    title: "Strategy",
    desc: "Armed with data, we architect a bespoke empire-building roadmap. This isn't a generic playbook; it's a multi-channel growth strategy tailored specifically to dominate your industry. We align your budget with high-impact tactics, structuring campaigns that prioritize immediate ROI while setting the stage for long-term market leadership.",
    icon: "◈",
    bgImage: "/strategy.png",
  },
  {
    num: "03",
    title: "Execute",
    desc: "This is where strategy transforms into tangible momentum. Our specialists roll out elite creatives, high-converting copy, and precision-targeted campaigns across chosen platforms. With an obsessive attention to quality and aggressive timeline management, we launch initiatives that immediately capture attention and drive qualified traffic.",
    icon: "◉",
    bgImage: "/execute.png",
  },
  {
    num: "04",
    title: "Grow",
    desc: "Launch is only the beginning. We deploy advanced analytics to monitor every interaction, relentlessly A/B testing and optimizing for maximum conversion. By aggressively tracking performance metrics, we scale what works and eliminate what doesn't, ensuring your brand achieves compounding month-over-month growth and sustained dominance.",
    icon: "◆",
    bgImage: "/growth.png",
  },
];

export default function ProcessSteps() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="section" style={{ background: "var(--color-bg-secondary)" }} ref={ref}>
      <style>{`
        .process-accordion {
          display: flex;
          flex-direction: column;
          gap: 16px;
          height: 600px;
          width: 100%;
        }
        @media (min-width: 768px) {
          .process-accordion {
            flex-direction: row;
            height: 500px;
          }
        }
        .process-card {
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border);
          overflow: hidden;
          cursor: pointer;
          position: relative;
          transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
          background: var(--color-bg-tertiary);
        }
        .process-card.active {
          background: linear-gradient(135deg, var(--color-bg-tertiary) 0%, #111 100%);
          border-color: var(--color-border-gold);
        }
      `}</style>
      <div className="container">

        {/* Header */}
        <div className="section-header" style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)", transition: "all 0.7s ease" }}>
          <span className="eyebrow">How We Work</span>
          <h2>Our <span style={{ color: "var(--color-gold)" }}>Process</span></h2>
          <p>A proven 4-step framework that turns strategy into measurable growth.</p>
        </div>

        {/* Steps Accordion */}
        <div className="process-accordion" style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease 200ms",
        }}>
          {steps.map((step, i) => {
            const isActive = activeStep === i;

            return (
              <div
                key={step.num}
                className={`process-card ${isActive ? 'active' : ''}`}
                onMouseEnter={() => setActiveStep(i)}
                onClick={() => setActiveStep(i)}
                style={{
                  flex: isActive ? 5 : 1,
                }}
              >
                {/* Background Photo Overlay */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${step.bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: isActive ? 0.15 : 0.05,
                  transition: "opacity 0.6s ease",
                  zIndex: 0,
                  pointerEvents: "none",
                }} />

                {/* BG large number watermark */}
                <div style={{
                  position: "absolute",
                  bottom: isActive ? "-5%" : "50%",
                  right: isActive ? "5%" : "50%",
                  transform: isActive ? "none" : "translate(50%, 50%)",
                  fontFamily: "var(--font-display)",
                  fontSize: isActive ? "16rem" : "4rem",
                  fontWeight: 700,
                  color: isActive ? "rgba(201,168,76,0.03)" : "rgba(255,255,255,0.03)",
                  lineHeight: 1,
                  pointerEvents: "none",
                  userSelect: "none",
                  transition: "all 0.6s cubic-bezier(0.25, 1, 0.5, 1)",
                  zIndex: 0,
                }}>
                  {step.num}
                </div>

                <div style={{
                  position: "absolute",
                  inset: 0,
                  padding: "var(--space-8)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: isActive ? "flex-end" : "center",
                  alignItems: isActive ? "flex-start" : "center",
                  transition: "all 0.5s ease",
                  zIndex: 1,
                }}>
                  
                  {/* Inactive State: Just the number and icon */}
                  <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "10px",
                    opacity: isActive ? 0 : 1,
                    position: isActive ? "absolute" : "relative",
                    pointerEvents: "none",
                    transition: "opacity 0.3s ease",
                  }}>
                    <div style={{ color: "var(--color-gold)", fontSize: "1.5rem" }}>{step.icon}</div>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--color-text-secondary)", letterSpacing: "2px" }}>{step.num}</div>
                  </div>

                  {/* Active State: Full animated content */}
                  <div style={{
                    opacity: isActive ? 1 : 0,
                    pointerEvents: isActive ? "auto" : "none",
                    transform: isActive ? "translateY(0)" : "translateY(30px)",
                    transition: isActive ? "all 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) 0.35s" : "all 0.3s ease",
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    maxWidth: "340px",
                  }}>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "var(--space-3)",
                      marginBottom: "var(--space-4)",
                    }}>
                      <div style={{ color: "var(--color-gold)", fontSize: "1.5rem" }}>{step.icon}</div>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "2px", color: "var(--color-gold)" }}>STEP {step.num}</div>
                    </div>
                    
                    <h3 style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(2rem, 3vw, 2.8rem)",
                      fontWeight: 600,
                      color: "var(--color-text-primary)",
                      marginBottom: "var(--space-4)",
                    }}>
                      {step.title}
                    </h3>
                    
                    <p style={{
                      fontSize: "var(--text-regular)",
                      color: "var(--color-text-secondary)",
                      lineHeight: "var(--leading-relaxed)",
                    }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
