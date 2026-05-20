import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import Script from "next/script";
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
  title: "Anaya Digital Marketing Agency | Best Digital Marketing Agency India & Lucknow",
  description:
    "Anaya is a premium digital marketing agency based in Lucknow, India. We specialise in social media management, SEO services, Google Ads, paid advertising, content creation, and branding for ambitious brands across India.",
  keywords: [
    "digital marketing agency Lucknow",
    "best digital marketing agency India",
    "full service digital marketing agency",
    "social media management India",
    "SEO agency India",
    "Google Ads agency India",
    "content marketing India",
    "branding agency Lucknow",
    "Anaya digital marketing",
  ],
  openGraph: {
    title: "Anaya | Best Digital Marketing Agency India & Lucknow",
    description: "Premium digital marketing agency — social media, SEO, ads, content, and branding that delivers real results.",
    type: "website",
    locale: "en_IN",
    siteName: "Anaya Digital Marketing Agency",
    url: "https://anayadigital.in",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anaya Digital Marketing Agency",
    description: "Boundless Possibilities. Limitless Growth.",
  },
  alternates: { canonical: "https://anayadigital.in" },
};

// ── Analytics & Heatmap IDs ─────────────────────────────────
// TODO: Replace these placeholder IDs before going live
const GA_MEASUREMENT_ID  = "G-XXXXXXXXXX";   // Google Analytics 4 — get from analytics.google.com
const MS_CLARITY_ID      = "XXXXXXXXXX";     // Microsoft Clarity (free heatmap) — get from clarity.microsoft.com

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
      <head>
        {/* ── Google Analytics 4 ─────────────────────────── */}
        {GA_MEASUREMENT_ID !== "G-XXXXXXXXXX" && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', { page_path: window.location.pathname });
              `}
            </Script>
          </>
        )}

        {/* ── Microsoft Clarity (Heatmap) ─────────────────── */}
        {MS_CLARITY_ID !== "XXXXXXXXXX" && (
          <Script id="microsoft-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${MS_CLARITY_ID}");
            `}
          </Script>
        )}
      </head>
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
