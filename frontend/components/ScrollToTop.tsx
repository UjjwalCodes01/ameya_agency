"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollUp}
      aria-label="Scroll to top"
      className="scroll-to-top"
      style={{
        position: "fixed",
        bottom: "100px",
        right: "24px",
        zIndex: "var(--z-above)" as unknown as number,
        width: "44px",
        height: "44px",
        borderRadius: "var(--radius-md)",
        background: "var(--color-bg-secondary)",
        border: "1px solid var(--color-border-gold)",
        color: "var(--color-gold)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1rem",
        transition: "all var(--transition-base)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        pointerEvents: visible ? "auto" : "none",
        backdropFilter: "blur(10px)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.background = "var(--color-gold-muted)";
        el.style.borderColor = "var(--color-gold)";
        el.style.transform = "translateY(-3px)";
        el.style.boxShadow = "var(--shadow-gold)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.background = "var(--color-bg-secondary)";
        el.style.borderColor = "var(--color-border-gold)";
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
      }}
    >
      ↑
    </button>
  );
}
