# Anaya Digital — Website Fix Brief
**Site:** https://ameya-agency.vercel.app  
**Prepared for:** Developer / Team  
**Status:** Pre-launch fixes required

---

## 🔴 FIX 1 — Contact Details (Every Page)

All contact details are currently fake placeholders. Replace across the **entire site** (navbar, footer, contact page, WhatsApp floating button):

| Field | Current (Wrong) | Replace With |
|---|---|---|
| WhatsApp Number | `9999999999` | *(your real number)* |
| Email | `hello@anayadigital.in` | *(your real email)* |
| Address | C-3, Sitapur Street, Lucknow 226020 | *(confirm actual address)* |
| Instagram | `instagram.com/anayadigital` | *(confirm handle exists)* |
| LinkedIn | `linkedin.com/company/anayadigital` | *(confirm page exists)* |
| YouTube | `youtube.com/@anayadigital` | *(confirm channel exists)* |
| Facebook | `facebook.com/anayadigital` | *(confirm page exists)* |

> ⚠️ The WhatsApp floating chat button at the bottom right also uses the fake number — fix that too.

---

## 🔴 FIX 2 — Location Consistency

Currently the site says **Dehradun** in some meta tags and **Lucknow** in the visible content. This looks unprofessional and hurts local SEO.

**Decision: Use "Lucknow" everywhere.**

Files/sections to update:

- `index` page — hero says "Lucknow, India" ✅ keep
- `about` page — meta description says "Dehradun" → change to **Lucknow**
- `about` meta `og:description` — says "Dehradun" → change to **Lucknow**
- `services` page — meta keywords say "Dehradun" → change to **Lucknow**
- `services` meta description — says "Dehradun" → change to **Lucknow**
- All `meta-keywords` fields — replace every instance of `digital marketing agency Dehradun` with `digital marketing agency Lucknow`
- All `canonical` URLs — currently pointing to `anayadigital.in` — confirm this domain is live, else update to vercel URL temporarily

---

## 🔴 FIX 3 — Homepage Stats (Make Honest)

Current stats are inflated and will lose trust with any smart client. Replace with real honest numbers:

| Current (Remove) | Replace With |
|---|---|
| 30+ Clients Served | 3+ Clients Served |
| 150+ Campaigns Run | 10+ Campaigns Run |
| 8+ Industries | 3+ Industries |
| 3+ Years Experience | Remove this entirely OR change to "Fresh Agency, Senior Strategy" |

On the **Work page**, replace these stats:

| Current | Replace With |
|---|---|
| 500K+ Total Impressions | Remove or leave blank until real |
| 1,200+ Leads Generated | Remove or leave blank until real |
| 20+ Campaigns Delivered | 5+ Campaigns Delivered |
| 100% Client Retention | Remove — can't claim this yet |

---

## 🔴 FIX 4 — Fake Client Testimonials

The homepage testimonials section currently shows:
- **Aryan Mehta** — Founder, Beatband
- **Ritu Sharma** — Owner, Ganga Farm

These are made-up people. Either:

**Option A (Recommended):** Remove the testimonials section entirely until you have real ones.

**Option B:** Replace with a placeholder message like:
> *"We're just getting started — our first case studies are live. Reach out and become one of our founding clients."*

---

## 🟡 FIX 5 — Client Logos & Case Study Cards

### Add Client Logos as Background/Branding Element on Work Cards

Each case study card on `/work` should feature the client's logo as a styled background or watermark behind the card. Steps:

- **BeatBand** — source logo from beatband.in and add to card
- **Ganga Farm** — design/source a simple logo and add to card
- **FabricVTON** — source logo from fabricvton.com and add to card

Also on the **Ganga Farm case study**: review and update the content — the description currently reads generic. Update with any real details you have about the project.

---

## 🟡 FIX 6 — About Page Team Section

Currently the About page shows only one generic "Founder" with initial "A" and no real name or photo.

The `/manager` page already has all 5 real names. Link them properly.

### What to do:

1. On the **About page**, replace the single generic founder block with all 5 team members
2. Each team member card should show:
   - Real **full name**
   - Real **role/title**
   - Their **photo** (add actual photos — even a professional headshot or clean casual photo works)
   - Their **LinkedIn profile link**
   - 1 line personal bio / what they handle at Anaya

### Team (from /manager page):

| Name | Current Title | Suggested Real Role |
|---|---|---|
| Tejasvi | Manager | Co-Founder & Strategy Lead |
| Aaditya Singh | Manager | Co-Founder & Performance Marketing |
| Aaditya Singhal | Manager | Co-Founder & Content & Creative |
| Ujjwal Tyagi | Manager | Co-Founder & Paid Media |
| Rudra Veer Singh Rathore | Manager | Co-Founder & SEO & Organic Growth |

3. The `/manager` page is currently set to `noindex, nofollow` in meta — that's fine, keep it hidden from Google, but make sure the About page links to it properly.

---

## 🟡 FIX 7 — Blog Section

Currently only **2 articles** exist, both from May 2025. An almost-empty blog looks worse than no blog.

**Recommended action:** Remove the Blog link from the main navigation for now.

- Comment out or hide the Blog nav item
- Keep the blog pages live (don't delete them) — just don't surface it until you have 6+ posts
- Re-add to nav once you have consistent content

---

## 🟡 FIX 8 — Pricing Section (Services Page)

The current pricing tiers show:

- Starter — from ₹15,000/mo
- Growth — from ₹35,000/mo
- Scale — from ₹70,000/mo

This creates a mismatch with your actual deal structure and can confuse or lose clients.

### What to do:

**Remove the pricing section entirely.**

Replace with a clean CTA block:

---

### Suggested Replacement Copy:

> **Every brand is different. So is every package.**
>
> We don't believe in fixed pricing. Tell us your goals and budget, and we'll build a plan that actually fits — no bloated retainers, no unnecessary add-ons.
>
> [**Book a Free Strategy Call →**](https://cal.com/YOUR-CAL-LINK)

---

### Cal.com Setup:
1. Create a free account at [cal.com](https://cal.com)
2. Set up a **30-minute "Free Strategy Call"** event
3. Add your availability
4. Copy your booking link (e.g. `cal.com/anayadigital/strategy-call`)
5. Replace all `https://ameya-agency.vercel.app/contact` CTA buttons with this Cal.com link — OR keep the contact form for written enquiries and add Cal.com as a secondary "prefer to talk?" option

---

## 🟢 FIX 9 — Analytics & Heatmap Setup

These are not code changes — they are third-party script installs. Add to the site `<head>` tag:

### Google Analytics 4
1. Go to [analytics.google.com](https://analytics.google.com)
2. Create a new GA4 property for `anayadigital.in`
3. Copy the `G-XXXXXXXXXX` measurement ID
4. Add the GA4 script tag to `<head>` on every page:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Heatmap — Microsoft Clarity (Free)
1. Go to [clarity.microsoft.com](https://clarity.microsoft.com) — it's **100% free**
2. Create project → get your script tag
3. Add to `<head>` on every page
4. Within 24 hours you'll see: click maps, scroll depth, session recordings

> Why Clarity over Hotjar? Clarity is completely free with no session limits — perfect for a new agency.

---

## 🟢 FIX 10 — Backlinks / Team Profile Page

Each team member should have their own backlink setup for personal branding and SEO:

### Per person, set up:
- [ ] LinkedIn profile — complete with Anaya listed as current company
- [ ] Google Search Console — verify site ownership  
- [ ] Add each person's LinkedIn to their team card on the website
- [ ] Consider a brief "thoughts / philosophy" quote under each person's card on the website — adds personality and trust

### Example team card format:
```
[Photo]
Tejasvi
Co-Founder & Strategy Lead
"Great marketing starts with knowing what not to do."
[LinkedIn ↗]
```

---

## ✅ Priority Order

| Priority | Fix | Effort |
|---|---|---|
| 🔴 Do today | Fix WhatsApp number | 5 mins |
| 🔴 Do today | Fix email address | 5 mins |
| 🔴 Do today | Fix location to Lucknow everywhere | 30 mins |
| 🔴 Do today | Fix fake stats | 20 mins |
| 🔴 Do today | Remove fake testimonials | 10 mins |
| 🟡 This week | Replace pricing with Cal.com CTA | 1 hour |
| 🟡 This week | Add real team on About page with photos | 2 hours |
| 🟡 This week | Add client logos to Work cards | 2 hours |
| 🟡 This week | Hide Blog from nav | 5 mins |
| 🟢 This month | Google Analytics 4 setup | 30 mins |
| 🟢 This month | Microsoft Clarity heatmap setup | 30 mins |
| 🟢 This month | Team LinkedIn profiles complete | Ongoing |

---

*Brief prepared by Anaya team — May 2025*
