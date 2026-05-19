import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hire Digital Marketing Agency | Contact Anaya",
  description:
    "Looking to hire digital marketing agency experts? Contact Anaya for a free strategy call. We are an affordable digital marketing agency focused on measurable growth.",
  openGraph: {
    title: "Contact Anaya | Free Strategy Call",
    description:
      "Start your digital growth journey. Book a free strategy call with Anaya — reply within 24 hours, no lock-in contracts.",
    url: "https://anayadigital.in/contact",
    type: "website",
  },
  alternates: { canonical: "https://anayadigital.in/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
