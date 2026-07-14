import {
  Countries,
  CtaSection,
  Faq,
  Features,
  Footer,
  Hero,
  HowItWorks,
  Pricing,
  Testimonials,
} from "@/components/landing";
import { SiteHeader } from "@/components/landing/site-header";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <Features />
        <Countries />
        <Testimonials />
        <Pricing />
        <Faq />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
