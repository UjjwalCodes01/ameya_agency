import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Agency Case Studies India | Anaya Work",
  description:
    "Explore our digital marketing agency portfolio India. See how Anaya delivers result oriented digital marketing India for ambitious brands with measurable ROI.",
  openGraph: {
    title: "Client Work & Case Studies | Anaya Agency",
    description:
      "Real clients. Real results. Explore how Anaya has driven 200%+ engagement, 3× traffic, and #1 Google rankings for ambitious brands.",
    url: "https://anayadigital.in/work",
    type: "website",
  },
  alternates: { canonical: "https://anayadigital.in/work" },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
