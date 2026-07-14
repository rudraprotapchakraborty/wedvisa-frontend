import { Hero, StatsBar, PlanningTools, HowItWorks, MiraSection, WhyWedvisa, SupplierCta, Inspiration, FinalCta, Footer } from "@/components/landing";
import { SiteHeader } from "@/components/landing/site-header";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <StatsBar />
        <PlanningTools />
        <HowItWorks />
        <MiraSection />
        <WhyWedvisa />
        <SupplierCta />
        <Inspiration />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
