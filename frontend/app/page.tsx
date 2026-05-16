import type { Metadata } from "next";
import HeroSection    from "@/components/home/HeroSection";
import TickerSection  from "@/components/home/TickerSection";
import ServicesTeaser from "@/components/home/ServicesTeaser";
import ClientShowcase from "@/components/home/ClientShowcase";
import StatsBar       from "@/components/home/StatsBar";
import ProcessSteps   from "@/components/home/ProcessSteps";
import Testimonials   from "@/components/home/Testimonials";
import CTAStrip       from "@/components/home/CTAStrip";

export const metadata: Metadata = {
  title: "Ameya Digital Marketing Agency | Boundless Possibilities. Limitless Growth.",
  description:
    "Ameya is a premium digital marketing agency in Dehradun, India. We help ambitious brands grow through social media management, SEO, paid advertising, content creation, and branding.",
  keywords: [
    "digital marketing agency Dehradun",
    "social media management India",
    "SEO agency Dehradun",
    "Google Ads agency India",
    "Meta Ads agency",
    "branding agency Uttarakhand",
    "content marketing India",
    "Ameya digital",
  ],
  openGraph: {
    title: "Ameya Digital Marketing Agency | Boundless Possibilities. Limitless Growth.",
    description:
      "Premium digital marketing for ambitious brands. Social media, SEO, ads, content, and branding — all under one roof.",
    url: "https://ameyadigital.in",
    type: "website",
    locale: "en_IN",
    siteName: "Ameya Digital Marketing Agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ameya Digital Marketing Agency",
    description: "Boundless Possibilities. Limitless Growth.",
  },
  alternates: { canonical: "https://ameyadigital.in" },
};

/* ── LocalBusiness JSON-LD Structured Data ───────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://ameyadigital.in",
  name: "Ameya Digital Marketing Agency",
  description:
    "Premium digital marketing agency in Dehradun — social media, SEO, paid ads, content creation, and branding.",
  url: "https://ameyadigital.in",
  telephone: "+91-99999-99999",
  email: "hello@ameyadigital.in",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dehradun",
    addressRegion: "Uttarakhand",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 30.3165,
    longitude: 78.0322,
  },
  areaServed: ["India", "Dehradun", "Uttarakhand"],
  serviceType: [
    "Social Media Management",
    "Search Engine Optimisation",
    "Paid Advertising",
    "Content Creation",
    "Branding",
    "Website Design",
    "Analytics",
  ],
  sameAs: [
    "https://instagram.com/ameyadigital",
    "https://linkedin.com/company/ameyadigital",
    "https://youtube.com/@ameyadigital",
    "https://facebook.com/ameyadigital",
  ],
  priceRange: "₹₹",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "19:00",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Inject structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <TickerSection />
      <ServicesTeaser />
      <ClientShowcase />
      <StatsBar />
      <ProcessSteps />
      <Testimonials />
      <CTAStrip />
    </>
  );
}
