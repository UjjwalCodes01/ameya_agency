import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Services India | SEO, Ads, Branding | Anaya",
  description:
    "Discover Anaya's premium digital marketing services India: expert social media management services, local SEO services Dehradun, Google Ads management, and brand identity design.",
  openGraph: {
    title: "Digital Marketing Services | Anaya Agency",
    description:
      "From social media to SEO to branding — Anaya covers every layer of your digital presence. Custom packages for every stage of growth.",
    url: "https://anayadigital.in/services",
    type: "website",
  },
  alternates: { canonical: "https://anayadigital.in/services" },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
