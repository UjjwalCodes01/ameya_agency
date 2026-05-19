"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

/* ── Scroll reveal ───────────────────────────────────────── */
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

/* ── Social Icons ────────────────────────────────────────── */
const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/anayadigital",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/anayadigital",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@anayadigital",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com/anayadigital",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
];

const services = [
  "Social Media Management",
  "Content Creation",
  "SEO & Local SEO",
  "Paid Advertising (Meta/Google)",
  "Branding & Identity",
  "Website Design",
  "Analytics & Reporting",
  "Full-Stack Package",
  "Not sure yet — let's talk",
];

const budgets = [
  "Under ₹15,000/month",
  "₹15,000 – ₹35,000/month",
  "₹35,000 – ₹70,000/month",
  "₹70,000+/month",
  "Prefer not to say",
];

/* ── Input styles ────────────────────────────────────────── */
const inputBase: React.CSSProperties = {
  width: "100%",
  background: "var(--color-bg-tertiary)",
  border: "1px solid var(--color-border)",
  borderRadius: "var(--radius-md)",
  padding: "14px 16px",
  fontFamily: "var(--font-body)",
  fontSize: "var(--text-base)",
  fontWeight: 300,
  color: "var(--color-text-primary)",
  outline: "none",
  transition: "border-color var(--transition-fast)",
  appearance: "none",
  WebkitAppearance: "none",
};

/* ── Contact Form ────────────────────────────────────────── */
function ContactForm() {
  const { ref, style } = useReveal(0);
  const [form, setForm] = useState({ name: "", business: "", email: "", phone: "", service: "", budget: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  };

  const borderColor = (field: string) =>
    focused === field ? "var(--color-gold)" : form[field as keyof typeof form] ? "var(--color-border-gold)" : "var(--color-border)";

  if (submitted) {
    return (
      <div ref={ref} style={{ ...style, textAlign: "center", padding: "clamp(60px, 8vw, 100px) var(--space-8)", background: "var(--color-bg-tertiary)", border: "1px solid var(--color-border-gold)", borderRadius: "var(--radius-xl)" }}>
        <div style={{ marginBottom: "var(--space-6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: "56px", height: "56px", borderRadius: "50%", border: "2px solid var(--color-gold)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
        </div>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "var(--space-4)" }}>
          We&apos;ve received your enquiry!
        </h3>
        <p style={{ color: "var(--color-text-secondary)", lineHeight: "var(--leading-relaxed)", maxWidth: "360px", margin: "0 auto var(--space-8)" }}>
          Expect a reply from us within 24 hours. We&apos;re already looking forward to learning about your brand.
        </p>
        <button onClick={() => setSubmitted(false)} className="btn btn-outline btn-sm">Submit Another Enquiry</button>
      </div>
    );
  }

  const labelStyle: React.CSSProperties = { display: "block", fontFamily: "var(--font-body)", fontSize: "var(--text-xs)", fontWeight: 500, letterSpacing: "var(--tracking-wider)", textTransform: "uppercase", color: "var(--color-text-muted)", marginBottom: "var(--space-2)" };
  const fieldWrap: React.CSSProperties = { display: "flex", flexDirection: "column" };

  return (
    <div ref={ref} style={style}>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
        {/* Row: Name + Business */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "var(--space-5)" }}>
          <div style={fieldWrap}>
            <label htmlFor="name" style={labelStyle}>Your Name *</label>
            <input id="name" name="name" type="text" required placeholder="Aryan Mehta" value={form.name} onChange={handleChange} onFocus={() => setFocused("name")} onBlur={() => setFocused(null)} style={{ ...inputBase, borderColor: borderColor("name") }} />
          </div>
          <div style={fieldWrap}>
            <label htmlFor="business" style={labelStyle}>Business Name *</label>
            <input id="business" name="business" type="text" required placeholder="Beatband" value={form.business} onChange={handleChange} onFocus={() => setFocused("business")} onBlur={() => setFocused(null)} style={{ ...inputBase, borderColor: borderColor("business") }} />
          </div>
        </div>

        {/* Row: Email + Phone */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "var(--space-5)" }}>
          <div style={fieldWrap}>
            <label htmlFor="email" style={labelStyle}>Email *</label>
            <input id="email" name="email" type="email" required placeholder="hello@yourband.com" value={form.email} onChange={handleChange} onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} style={{ ...inputBase, borderColor: borderColor("email") }} />
          </div>
          <div style={fieldWrap}>
            <label htmlFor="phone" style={labelStyle}>Phone *</label>
            <input id="phone" name="phone" type="tel" required placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} onFocus={() => setFocused("phone")} onBlur={() => setFocused(null)} style={{ ...inputBase, borderColor: borderColor("phone") }} />
          </div>
        </div>

        {/* Service dropdown */}
        <div style={fieldWrap}>
          <label htmlFor="service" style={labelStyle}>Service Interested In *</label>
          <select id="service" name="service" required value={form.service} onChange={handleChange} onFocus={() => setFocused("service")} onBlur={() => setFocused(null)}
            style={{ ...inputBase, borderColor: borderColor("service"), cursor: "pointer", color: form.service ? "var(--color-text-primary)" : "var(--color-text-muted)" }}>
            <option value="" disabled>Select a service…</option>
            {services.map((s) => <option key={s} value={s} style={{ background: "#1A1A1A" }}>{s}</option>)}
          </select>
        </div>

        {/* Budget dropdown */}
        <div style={fieldWrap}>
          <label htmlFor="budget" style={labelStyle}>Monthly Budget <span style={{ color: "var(--color-text-muted)", fontWeight: 300, textTransform: "none", letterSpacing: 0 }}>(optional)</span></label>
          <select id="budget" name="budget" value={form.budget} onChange={handleChange} onFocus={() => setFocused("budget")} onBlur={() => setFocused(null)}
            style={{ ...inputBase, borderColor: borderColor("budget"), cursor: "pointer", color: form.budget ? "var(--color-text-primary)" : "var(--color-text-muted)" }}>
            <option value="" style={{ background: "#1A1A1A" }}>Select a range…</option>
            {budgets.map((b) => <option key={b} value={b} style={{ background: "#1A1A1A" }}>{b}</option>)}
          </select>
        </div>

        {/* Message */}
        <div style={fieldWrap}>
          <label htmlFor="message" style={labelStyle}>Tell Us About Your Brand *</label>
          <textarea id="message" name="message" required rows={5} placeholder="Brief us on your brand, goals, current challenges, and what you'd like to achieve…" value={form.message} onChange={handleChange} onFocus={() => setFocused("message")} onBlur={() => setFocused(null)}
            style={{ ...inputBase, borderColor: borderColor("message"), resize: "vertical", minHeight: "130px" }} />
        </div>

        {/* Submit */}
        <button type="submit" disabled={loading} className="btn btn-primary btn-lg" style={{ width: "100%", cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.7 : 1 }}>
          {loading ? "Sending…" : "Send Enquiry →"}
        </button>

        <p style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)", textAlign: "center", lineHeight: "var(--leading-relaxed)" }}>
          We reply within 24 hours · No spam, ever · Your details are safe with us
        </p>
      </form>
    </div>
  );
}

/* ── Page ────────────────────────────────────────────────── */
export default function ContactPage() {
  const heroR    = useReveal(0);
  const nextR    = useReveal(0);
  const infoR    = useReveal(100);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section style={{
        background: "var(--color-bg-primary)", textAlign: "center",
        padding: "clamp(80px, 10vw, 140px) 0 clamp(50px, 6vw, 80px)",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "700px", height: "400px", background: "radial-gradient(ellipse, rgba(201,168,76,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div ref={heroR.ref} style={heroR.style}>
            <span className="eyebrow" style={{ display: "block", marginBottom: "var(--space-5)" }}>Get In Touch</span>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h1)", fontWeight: 600, lineHeight: 1.1, color: "var(--color-text-primary)", marginBottom: "var(--space-5)" }}>
              Let&apos;s Grow{" "}
              <span style={{ background: "linear-gradient(135deg, var(--color-gold-light), var(--color-gold))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Together</span>
            </h1>
            <p style={{ color: "var(--color-text-secondary)", maxWidth: "520px", margin: "0 auto", lineHeight: "var(--leading-relaxed)", fontSize: "var(--text-large)" }}>
              Ready to take your digital presence to the next level? Fill in the form below and we&apos;ll be in touch within 24 hours to schedule your free strategy call.
            </p>
          </div>
        </div>
      </section>

      {/* ── Main Grid ─────────────────────────────────────── */}
      <section style={{ background: "var(--color-bg-primary)", paddingBottom: "var(--section-py)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "var(--space-12)", alignItems: "start" }}>

            {/* ── Left: Form ──────────────────────────────── */}
            <div style={{ background: "var(--color-bg-secondary)", border: "1px solid var(--color-border-gold)", borderRadius: "var(--radius-xl)", padding: "clamp(32px, 4vw, 56px)" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "var(--space-2)" }}>
                Send Us an Enquiry
              </h2>
              <p style={{ fontSize: "var(--text-small)", color: "var(--color-text-secondary)", marginBottom: "var(--space-8)", lineHeight: "var(--leading-relaxed)" }}>
                Tell us about your brand and goals. The more detail you share, the better we can prepare for our first conversation.
              </p>
              <ContactForm />
            </div>

            {/* ── Right: Info panel ───────────────────────── */}
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>

              {/* What Happens Next */}
              <div ref={nextR.ref} style={{ ...nextR.style, background: "var(--color-bg-secondary)", border: "1px solid var(--color-border-gold)", borderRadius: "var(--radius-xl)", padding: "clamp(28px, 4vw, 44px)" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.3rem, 2vw, 1.7rem)", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "var(--space-6)" }}>What Happens Next</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
                  {[
                    { n: "01", title: "We Review Your Enquiry", desc: "Our team reads every submission carefully and identifies how we can best help your brand." },
                    { n: "02", title: "Free Strategy Call", desc: "We schedule a 30-minute call to understand your goals, challenges, and vision in detail." },
                    { n: "03", title: "Custom Proposal", desc: "You receive a tailored strategy and pricing document — no generic packages, ever." },
                  ].map((step, i) => (
                    <div key={step.n} style={{ display: "flex", gap: "var(--space-5)", alignItems: "flex-start" }}>
                      <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "var(--color-gold-muted)", border: "1px solid var(--color-gold-border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontFamily: "var(--font-display)", fontSize: "var(--text-small)", fontWeight: 600, color: "var(--color-gold)" }}>
                        {step.n}
                      </div>
                      <div>
                        <div style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-base)", fontWeight: 500, color: "var(--color-text-primary)", marginBottom: "var(--space-1)" }}>{step.title}</div>
                        <p style={{ fontSize: "var(--text-small)", color: "var(--color-text-secondary)", lineHeight: "var(--leading-relaxed)" }}>{step.desc}</p>
                      </div>
                      {/* Connector */}
                      {i < 2 && <div style={{ position: "absolute", display: "none" }} />}
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Contact Info */}
              <div ref={infoR.ref} style={{ ...infoR.style, background: "var(--color-bg-secondary)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-xl)", padding: "clamp(28px, 4vw, 44px)" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.3rem, 2vw, 1.7rem)", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "var(--space-6)" }}>
                  Prefer Direct Contact?
                </h3>

                {/* Response badge */}
                <div style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-2)", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.25)", borderRadius: "var(--radius-full)", padding: "6px 14px", marginBottom: "var(--space-6)" }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22c55e", animation: "pulse 2s infinite" }} />
                  <span style={{ fontSize: "var(--text-xs)", fontWeight: 500, color: "#22c55e", letterSpacing: "var(--tracking-wide)" }}>We reply within 24 hours</span>
                  <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }`}</style>
                </div>

                {/* Contact items */}
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", marginBottom: "var(--space-6)" }}>
                  {[
                    { icon: (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    ), label: "Email", val: "hello@anayadigital.in", href: "mailto:hello@anayadigital.in" },
                    { icon: (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    ), label: "WhatsApp", val: "Chat with us now", href: "https://wa.me/919999999999" },
                    { icon: (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    ), label: "Location", val: "C-3, Sitapur Street, Lucknow 226020", href: null },
                  ].map((item) => (
                    <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "var(--space-4)", padding: "var(--space-4)", background: "var(--color-bg-tertiary)", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border)" }}>
                      <div style={{ flexShrink: 0, color: "var(--color-gold)" }}>{item.icon}</div>
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "var(--tracking-wide)", marginBottom: "2px" }}>{item.label}</div>
                        {item.href ? (
                          <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" style={{ fontSize: "var(--text-small)", color: "var(--color-gold)", fontWeight: 400, textDecoration: "none", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", display: "block" }}>{item.val}</a>
                        ) : (
                          <span style={{ fontSize: "var(--text-small)", color: "var(--color-text-secondary)" }}>{item.val}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* WhatsApp CTA */}
                <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: "100%", textDecoration: "none", display: "flex", justifyContent: "center", alignItems: "center", gap: "var(--space-2)" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                  Message on WhatsApp
                </a>

                {/* Social Links */}
                <div style={{ marginTop: "var(--space-6)", paddingTop: "var(--space-5)", borderTop: "1px solid var(--color-border)" }}>
                  <p style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "var(--tracking-wider)", marginBottom: "var(--space-4)" }}>Follow Us</p>
                  <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
                    {socials.map((s) => (
                      <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                        style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border)", color: "var(--color-text-secondary)", textDecoration: "none", transition: "all var(--transition-base)" }}
                        onMouseEnter={(e) => { const el = e.currentTarget; el.style.borderColor = "var(--color-gold)"; el.style.color = "var(--color-gold)"; el.style.background = "var(--color-gold-muted)"; }}
                        onMouseLeave={(e) => { const el = e.currentTarget; el.style.borderColor = "var(--color-border)"; el.style.color = "var(--color-text-secondary)"; el.style.background = "transparent"; }}>
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
