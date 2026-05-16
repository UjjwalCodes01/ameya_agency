import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Insights | Digital Marketing Tips | Ameya Agency",
  description:
    "Practical digital marketing advice from the Ameya team — Instagram growth, local SEO, paid ads strategy, branding tips, and real-world case study insights.",
  openGraph: {
    title: "Blog & Insights | Ameya Digital Marketing",
    description:
      "Actionable tips on social media, SEO, branding, and paid advertising from Ameya's team of digital marketing strategists.",
    url: "https://ameyadigital.in/blog",
    type: "website",
  },
  alternates: { canonical: "https://ameyadigital.in/blog" },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
