import type { Metadata } from "next";
import HeroSection    from "@/components/home/HeroSection";
import TickerSection  from "@/components/home/TickerSection";
import ServicesTeaser from "@/components/home/ServicesTeaser";
import ClientShowcase from "@/components/home/ClientShowcase";
import StatsBar       from "@/components/home/StatsBar";
import ProcessSteps   from "@/components/home/ProcessSteps";
import Testimonials   from "@/components/home/Testimonials";
import CTAStrip       from "@/components/home/CTAStrip";

export const metadata: Metadata = {
  title: "Ameya Digital Marketing Agency | Boundless Possibilities. Limitless Growth.",
  description:
    "Ameya is a premium digital marketing agency in Dehradun. We help ambitious brands grow through social media, SEO, paid ads, content, and branding.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TickerSection />
      <ServicesTeaser />
      <ClientShowcase />
      <StatsBar />
      <ProcessSteps />
      <Testimonials />
      <CTAStrip />
    </>
  );
}
