import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Tips | Content Marketing Agency India | Anaya",
  description:
    "Insights from Anaya, a leading content marketing agency India. Get actionable tips from our social media strategy agency experts and local SEO agency India team.",
  openGraph: {
    title: "Blog & Insights | Anaya Digital Marketing",
    description:
      "Actionable tips on social media, SEO, branding, and paid advertising from Anaya's team of digital marketing strategists.",
    url: "https://anayadigital.in/blog",
    type: "website",
  },
  alternates: { canonical: "https://anayadigital.in/blog" },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
