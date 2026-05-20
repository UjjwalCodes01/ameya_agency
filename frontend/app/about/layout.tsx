import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Digital Marketing Agency India | About Anaya",
  description:
    "Anaya is a results driven digital marketing agency based in Lucknow. As a creative digital marketing agency, we partner with ambitious startups and small businesses to accelerate their growth.",
  openGraph: {
    title: "About Anaya | Digital Marketing Agency",
    description:
      "We are Anaya — a digital marketing agency from Lucknow built on strategy, creativity, and relentless focus on results.",
    url: "https://anayadigital.in/about",
    type: "website",
  },
  alternates: { canonical: "https://anayadigital.in/about" },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
