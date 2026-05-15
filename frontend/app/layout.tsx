import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Navbar          from "@/components/Navbar";
import Footer          from "@/components/Footer";
import ScrollToTop     from "@/components/ScrollToTop";
import WhatsAppWidget  from "@/components/WhatsAppWidget";
import PageTransition  from "@/components/PageTransition";

const cormorant = Cormorant_Garamond({
  variable: "--font-display-loaded",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-body-loaded",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ameya Digital Marketing Agency | Boundless Possibilities. Limitless Growth.",
  description:
    "Ameya is a premium digital marketing agency based in Dehradun, India. We specialise in social media, SEO, paid ads, content creation, and branding for ambitious brands.",
  keywords: [
    "digital marketing agency Dehradun",
    "social media management India",
    "SEO agency India",
    "brand strategy",
    "paid advertising",
    "content creation",
    "Ameya",
  ],
  openGraph: {
    title: "Ameya Digital Marketing Agency",
    description: "Boundless Possibilities. Limitless Growth.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main style={{ flex: 1, paddingTop: "var(--nav-height)" }}>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <ScrollToTop />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
