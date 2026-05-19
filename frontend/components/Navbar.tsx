"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work",     href: "/work" },
  { label: "Blog",     href: "/blog" },
  { label: "Contact",  href: "/contact" },
];

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className="navbar"
        style={{
          position:        "fixed",
          top:             0,
          left:            0,
          right:           0,
          zIndex:          "var(--z-nav)",
          height:          "var(--nav-height)",
          display:         "flex",
          alignItems:      "center",
          transition:      "all var(--transition-base)",
          backgroundColor: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
          borderBottom:    scrolled ? "1px solid var(--color-border-gold)" : "1px solid transparent",
          backdropFilter:  scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        }}
      >
        <div
          className="container"
          style={{
            display:        "flex",
            alignItems:     "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
            <Image
              src="/image.png"
              alt="Anaya Digital Marketing Agency"
              width={500}
              height={500}
              style={{ objectFit: "contain", width: "auto", height: "64px" }}
              unoptimized={true}
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="desktop-nav" aria-label="Primary navigation">
            <ul
              style={{
                display:    "flex",
                alignItems: "center",
                gap:        "var(--space-8)",
                listStyle:  "none",
              }}
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      style={{
                        fontFamily:    "var(--font-body)",
                        fontSize:      "var(--text-small)",
                        fontWeight:    400,
                        letterSpacing: "var(--tracking-wide)",
                        textTransform: "uppercase",
                        color:         isActive ? "var(--color-gold)" : "var(--color-text-secondary)",
                        textDecoration: "none",
                        transition:    "color var(--transition-fast)",
                        paddingBottom: "2px",
                        borderBottom:  isActive
                          ? "1px solid var(--color-gold)"
                          : "1px solid transparent",
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) (e.target as HTMLElement).style.color = "var(--color-gold-light)";
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) (e.target as HTMLElement).style.color = "var(--color-text-secondary)";
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className="desktop-cta">
            <Link href="/contact" className="btn btn-outline btn-sm">
              Let&apos;s Talk
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            style={{
              display:         "none",
              background:      "none",
              border:          "none",
              cursor:          "pointer",
              padding:         "var(--space-2)",
              flexDirection:   "column",
              gap:             "5px",
              alignItems:      "center",
              justifyContent:  "center",
            }}
          >
            <span
              style={{
                display:       "block",
                width:         "24px",
                height:        "1.5px",
                background:    menuOpen ? "var(--color-gold)" : "var(--color-text-primary)",
                transition:    "all var(--transition-base)",
                transform:     menuOpen ? "rotate(45deg) translate(4.5px, 4.5px)" : "none",
              }}
            />
            <span
              style={{
                display:    "block",
                width:      "24px",
                height:     "1.5px",
                background: "var(--color-gold)",
                transition: "all var(--transition-base)",
                opacity:    menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display:    "block",
                width:      "24px",
                height:     "1.5px",
                background: menuOpen ? "var(--color-gold)" : "var(--color-text-primary)",
                transition: "all var(--transition-base)",
                transform:  menuOpen ? "rotate(-45deg) translate(4.5px, -4.5px)" : "none",
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Menu Overlay */}
      <div
        className="mobile-overlay"
        aria-hidden={!menuOpen}
        style={{
          position:        "fixed",
          inset:           0,
          zIndex:          "var(--z-overlay)",
          background:      "var(--color-bg-primary)",
          display:         "flex",
          flexDirection:   "column",
          alignItems:      "center",
          justifyContent:  "center",
          transform:       menuOpen ? "translateX(0)" : "translateX(100%)",
          transition:      "transform var(--transition-slow)",
          willChange:      "transform",
        }}
      >
        {/* Close button */}
        <button
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          style={{
            position:   "absolute",
            top:        "28px",
            right:      "28px",
            background: "none",
            border:     "none",
            cursor:     "pointer",
            color:      "var(--color-text-secondary)",
            fontSize:   "1.5rem",
            lineHeight: 1,
            padding:    "var(--space-2)",
            transition: "color var(--transition-fast)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-secondary)")}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>

        {/* Logo in overlay */}
        <div style={{ marginBottom: "var(--space-12)" }}>
          <Image
            src="/image.png"
            alt="Anaya"
            width={500}
            height={500}
            style={{ objectFit: "contain", height: "80px", width: "auto" }}
            unoptimized={true}
          />
        </div>

        {/* Mobile Nav Links */}
        <nav aria-label="Mobile navigation">
          <ul
            style={{
              listStyle:  "none",
              textAlign:  "center",
              display:    "flex",
              flexDirection: "column",
              gap:        "var(--space-6)",
            }}
          >
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <li
                  key={link.href}
                  style={{
                    opacity:   menuOpen ? 1 : 0,
                    transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                    transition: `opacity 0.4s ease ${i * 70}ms, transform 0.4s ease ${i * 70}ms`,
                  }}
                >
                  <Link
                    href={link.href}
                    style={{
                      fontFamily:    "var(--font-display)",
                      fontSize:      "clamp(1.6rem, 4vw, 2.4rem)",
                      fontWeight:    400,
                      letterSpacing: "0.05em",
                      color:         isActive ? "var(--color-gold)" : "var(--color-text-primary)",
                      textDecoration: "none",
                      transition:    "color var(--transition-fast)",
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.color = "var(--color-gold-light)";
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.color = isActive
                        ? "var(--color-gold)"
                        : "var(--color-text-primary)";
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile CTA */}
        <div
          style={{
            marginTop: "var(--space-10)",
            opacity:   menuOpen ? 1 : 0,
            transform: menuOpen ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.4s ease 480ms, transform 0.4s ease 480ms",
          }}
        >
          <Link href="/contact" className="btn btn-primary btn-lg">
            Let&apos;s Talk
          </Link>
        </div>

        {/* Gold border bottom decorative line */}
        <div
          style={{
            position:   "absolute",
            bottom:     0,
            left:       0,
            right:      0,
            height:     "2px",
            background: "linear-gradient(90deg, transparent, var(--color-gold), transparent)",
          }}
        />
      </div>

      {/* Responsive styles injected as a style tag */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
