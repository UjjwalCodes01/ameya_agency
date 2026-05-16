import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Ameya | Premium Digital Marketing Agency in Dehradun",
  description:
    "Learn about Ameya Digital Marketing Agency — our story, mission, philosophy, and the team behind your brand's growth. Based in Dehradun, serving India & globally.",
  openGraph: {
    title: "About Ameya | Premium Digital Marketing Agency",
    description:
      "We are Ameya — a premium digital marketing agency from Dehradun built on strategy, creativity, and relentless focus on results.",
    url: "https://ameyadigital.in/about",
    type: "website",
  },
  alternates: { canonical: "https://ameyadigital.in/about" },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
