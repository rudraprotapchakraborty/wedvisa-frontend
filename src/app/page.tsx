import {
  Hero,
  StatsBar,
  CinematicJourney,
  PlanningTools,
  HowItWorks,
  MiraSection,
  WhyWedvisa,
  SupplierCta,
  Inspiration,
  FinalCta,
  Footer,
} from "@/components/landing";
import { SiteHeader } from "@/components/landing/site-header";
import { CinematicAtmosphere } from "@/components/cinematic/atmosphere";

export default function HomePage() {
  return (
    <>
      <CinematicAtmosphere />
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <StatsBar />
        <CinematicJourney />
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
