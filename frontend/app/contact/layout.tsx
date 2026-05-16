import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Ameya | Book a Free Strategy Call",
  description:
    "Ready to grow your brand? Get in touch with Ameya Digital Marketing Agency. Book a free 30-minute strategy call — no pressure, just an honest plan for your brand.",
  openGraph: {
    title: "Contact Ameya | Free Strategy Call",
    description:
      "Start your digital growth journey. Book a free strategy call with Ameya — reply within 24 hours, no lock-in contracts.",
    url: "https://ameyadigital.in/contact",
    type: "website",
  },
  alternates: { canonical: "https://ameyadigital.in/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
