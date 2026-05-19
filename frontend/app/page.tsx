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
  title: "Anaya | Best Digital Marketing Agency in India & Dehradun",
  description:
    "Anaya is a premium digital marketing agency in Dehradun, India. As a full service digital marketing agency, we help brands grow through social media management, SEO services, paid ads, and branding.",
  keywords: [
    "digital marketing agency Dehradun",
    "digital marketing agency India",
    "best digital marketing agency India",
    "full service digital marketing agency",
    "premium digital marketing agency",
    "social media marketing agency",
    "SEO agency India",
    "content marketing India",
    "Anaya digital",
  ],
  openGraph: {
    title: "Anaya Digital Marketing Agency | Boundless Possibilities. Limitless Growth.",
    description:
      "Premium digital marketing for ambitious brands. Social media, SEO, ads, content, and branding — all under one roof.",
    url: "https://anayadigital.in",
    type: "website",
    locale: "en_IN",
    siteName: "Anaya Digital Marketing Agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anaya Digital Marketing Agency",
    description: "Boundless Possibilities. Limitless Growth.",
  },
  alternates: { canonical: "https://anayadigital.in" },
};

/* ── LocalBusiness JSON-LD Structured Data ───────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://anayadigital.in",
  name: "Anaya Digital Marketing Agency",
  description:
    "A full service digital marketing agency in Dehradun providing premium social media management, SEO services, paid ads, and brand identity design across India.",
  url: "https://anayadigital.in",
  telephone: "+91-99999-99999",
  email: "hello@anayadigital.in",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lucknow",
    addressRegion: "Uttar Pradesh",
    postalCode: "226020",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 26.8467,
    longitude: 80.9462,
  },
  areaServed: ["India", "Lucknow", "Uttar Pradesh"],
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
    "https://instagram.com/anayadigital",
    "https://linkedin.com/company/anayadigital",
    "https://youtube.com/@anayadigital",
    "https://facebook.com/anayadigital",
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
