import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Social Media, SEO, Ads, Branding | Ameya Agency",
  description:
    "Explore all digital marketing services offered by Ameya — Social Media Management, SEO & Local SEO, Paid Advertising (Meta & Google Ads), Content Creation, Branding, Website Design, and Analytics.",
  openGraph: {
    title: "Digital Marketing Services | Ameya Agency",
    description:
      "From social media to SEO to branding — Ameya covers every layer of your digital presence. Custom packages for every stage of growth.",
    url: "https://ameyadigital.in/services",
    type: "website",
  },
  alternates: { canonical: "https://ameyadigital.in/services" },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
