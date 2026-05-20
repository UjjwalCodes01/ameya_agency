"use client";

import Link from "next/link";
import Image from "next/image";

// Inline SVG Icons for social links
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/anayadigital", icon: <InstagramIcon /> },
  { label: "LinkedIn",  href: "https://linkedin.com/company/anayadigital", icon: <LinkedInIcon /> },
  { label: "YouTube",   href: "https://youtube.com/@anayadigital", icon: <YouTubeIcon /> },
  { label: "Facebook",  href: "https://facebook.com/anayadigital", icon: <FacebookIcon /> },
];

const quickLinks = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work",     href: "/work" },
  // Blog hidden until 6+ posts are ready
  { label: "Contact",  href: "/contact" },
];

const serviceLinks = [
  { label: "Social Media Management", href: "/services#social-media" },
  { label: "SEO & Local SEO",         href: "/services#seo" },
  { label: "Paid Advertising",        href: "/services#ads" },
  { label: "Content Creation",        href: "/services#content" },
  { label: "Branding & Identity",     href: "/services#branding" },
  { label: "Website Design",          href: "/services#web" },
];

export default function Footer() {
  const footerLinkStyle: React.CSSProperties = {
    fontFamily:     "var(--font-body)",
    fontSize:       "var(--text-small)",
    fontWeight:     300,
    color:          "var(--color-text-secondary)",
    textDecoration: "none",
    transition:     "color var(--transition-fast)",
    lineHeight:     "2",
    display:        "block",
  };

  return (
    <footer
      style={{
        backgroundColor: "var(--color-bg-secondary)",
        borderTop:       "2px solid var(--color-gold)",
        marginTop:       "auto",
      }}
    >
      {/* Main footer grid */}
      <div
        className="container"
        style={{
          paddingTop:    "clamp(60px, 8vw, 100px)",
          paddingBottom: "clamp(40px, 6vw, 60px)",
        }}
      >
        <div
          style={{
            display:             "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap:                 "clamp(32px, 5vw, 64px)",
          }}
        >
          {/* Column 1 — Brand */}
          <div>
            <Link href="/" style={{ display: "inline-block", marginBottom: "var(--space-5)" }}>
              <Image
                src="/anaya.png"
                alt="Anaya Digital Marketing Agency"
                width={500}
                height={500}
                style={{ objectFit: "contain", height: "72px", width: "auto" }}
                unoptimized={true}
              />
            </Link>
            <p
              style={{
                fontFamily:    "var(--font-display)",
                fontSize:      "var(--text-small)",
                fontWeight:    400,
                letterSpacing: "var(--tracking-widest)",
                textTransform: "uppercase",
                color:         "var(--color-gold)",
                marginBottom:  "var(--space-4)",
              }}
            >
              Boundless Possibilities.<br />Limitless Growth.
            </p>
            <p
              style={{
                fontSize:   "var(--text-small)",
                fontWeight: 300,
                color:      "var(--color-text-muted)",
                lineHeight: "var(--leading-relaxed)",
                maxWidth:   "260px",
              }}
            >
              Anaya is a premium digital marketing agency helping ambitious brands grow their online presence and drive real results.
            </p>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4
              style={{
                fontFamily:    "var(--font-body)",
                fontSize:      "var(--text-xs)",
                fontWeight:    600,
                letterSpacing: "var(--tracking-widest)",
                textTransform: "uppercase",
                color:         "var(--color-gold)",
                marginBottom:  "var(--space-5)",
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: "none" }}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={footerLinkStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold-light)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-secondary)")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <h4
              style={{
                fontFamily:    "var(--font-body)",
                fontSize:      "var(--text-xs)",
                fontWeight:    600,
                letterSpacing: "var(--tracking-widest)",
                textTransform: "uppercase",
                color:         "var(--color-gold)",
                marginBottom:  "var(--space-5)",
              }}
            >
              Services
            </h4>
            <ul style={{ listStyle: "none" }}>
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={footerLinkStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold-light)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-secondary)")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact + Social */}
          <div>
            <h4
              style={{
                fontFamily:    "var(--font-body)",
                fontSize:      "var(--text-xs)",
                fontWeight:    600,
                letterSpacing: "var(--tracking-widest)",
                textTransform: "uppercase",
                color:         "var(--color-gold)",
                marginBottom:  "var(--space-5)",
              }}
            >
              Get in Touch
            </h4>

            {/* Email */}
            <a
              href="mailto:hello@anayadigital.in"
              style={{
                ...footerLinkStyle,
                marginBottom: "var(--space-2)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold-light)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-secondary)")}
            >
              hello@anayadigital.in
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...footerLinkStyle,
                marginBottom: "var(--space-2)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold-light)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-secondary)")}
            >
              WhatsApp Us
            </a>

            {/* Location */}
            <p
              style={{
                fontSize:      "var(--text-small)",
                color:         "var(--color-text-muted)",
                lineHeight:    "var(--leading-relaxed)",
                marginTop:     "var(--space-4)",
                marginBottom:  "var(--space-6)",
              }}
            >
              C-3, Sitapur Street<br />Lucknow, Uttar Pradesh 226020<br />India
            </p>

            {/* Social Icons */}
            <div style={{ display: "flex", gap: "var(--space-4)", flexWrap: "wrap" }}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{
                    display:         "flex",
                    alignItems:      "center",
                    justifyContent:  "center",
                    width:           "40px",
                    height:          "40px",
                    borderRadius:    "var(--radius-md)",
                    border:          "1px solid var(--color-border)",
                    color:           "var(--color-text-secondary)",
                    transition:      "all var(--transition-base)",
                    textDecoration:  "none",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "var(--color-gold)";
                    el.style.color       = "var(--color-gold)";
                    el.style.background  = "var(--color-gold-muted)";
                    el.style.transform   = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "var(--color-border)";
                    el.style.color       = "var(--color-text-secondary)";
                    el.style.background  = "transparent";
                    el.style.transform   = "none";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Bottom bar */}
      <div
        style={{
          borderTop:       "1px solid var(--color-border)",
          backgroundColor: "rgba(0,0,0,0.3)",
        }}
      >
        <div
          className="container"
          style={{
            paddingTop:     "var(--space-5)",
            paddingBottom:  "var(--space-5)",
            display:        "flex",
            alignItems:     "center",
            justifyContent: "space-between",
            flexWrap:       "wrap",
            gap:            "var(--space-4)",
          }}
        >
          <p
            style={{
              fontSize:   "var(--text-xs)",
              color:      "var(--color-text-muted)",
              fontWeight: 300,
            }}
          >
            © 2025 Anaya Digital Marketing Agency. All rights reserved.
          </p>

          <div style={{ display: "flex", gap: "var(--space-6)", flexWrap: "wrap" }}>
            <Link
              href="/privacy"
              style={{
                fontSize:       "var(--text-xs)",
                color:          "var(--color-text-muted)",
                textDecoration: "none",
                transition:     "color var(--transition-fast)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-muted)")}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              style={{
                fontSize:       "var(--text-xs)",
                color:          "var(--color-text-muted)",
                textDecoration: "none",
                transition:     "color var(--transition-fast)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-muted)")}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
