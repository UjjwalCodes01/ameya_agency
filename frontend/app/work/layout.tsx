import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work & Case Studies | Ameya Digital Marketing Agency",
  description:
    "See the results Ameya has delivered for real brands — Beatband, Ganga Farm, and more. Case studies covering social media growth, local SEO, paid ads, and branding.",
  openGraph: {
    title: "Client Work & Case Studies | Ameya Agency",
    description:
      "Real clients. Real results. Explore how Ameya has driven 200%+ engagement, 3× traffic, and #1 Google rankings for ambitious brands.",
    url: "https://ameyadigital.in/work",
    type: "website",
  },
  alternates: { canonical: "https://ameyadigital.in/work" },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
