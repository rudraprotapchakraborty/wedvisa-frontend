import dynamic from "next/dynamic";
import { Hero, StatsBar, Footer } from "@/components/landing";
import { SiteHeader } from "@/components/landing/site-header";
import { CinematicAtmosphere } from "@/components/cinematic/atmosphere";

/* Below-fold sections: code-split so hero paints first */
const CinematicJourney = dynamic(
  () =>
    import("@/components/landing/cinematic-journey").then(
      (m) => m.CinematicJourney
    ),
  { ssr: true }
);
const PlanningTools = dynamic(
  () =>
    import("@/components/landing/planning-tools").then((m) => m.PlanningTools),
  { ssr: true }
);
const HowItWorks = dynamic(
  () => import("@/components/landing/how-it-works").then((m) => m.HowItWorks),
  { ssr: true }
);
const MiraSection = dynamic(
  () => import("@/components/landing/mira-section").then((m) => m.MiraSection),
  { ssr: true }
);
const WhyWedvisa = dynamic(
  () => import("@/components/landing/why-wedvisa").then((m) => m.WhyWedvisa),
  { ssr: true }
);
const Scrapbook = dynamic(
  () => import("@/components/landing/scrapbook").then((m) => m.Scrapbook),
  { ssr: true }
);
const SupplierCta = dynamic(
  () => import("@/components/landing/supplier-cta").then((m) => m.SupplierCta),
  { ssr: true }
);
const Inspiration = dynamic(
  () => import("@/components/landing/inspiration").then((m) => m.Inspiration),
  { ssr: true }
);
const FinalCta = dynamic(
  () => import("@/components/landing/final-cta").then((m) => m.FinalCta),
  { ssr: true }
);

export default function HomePage() {
  return (
    <>
      <CinematicAtmosphere />
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <StatsBar />
        {/* No content-visibility on GSAP-pinned journey — breaks ScrollTrigger */}
        <CinematicJourney />
        <div className="perf-section">
          <PlanningTools />
        </div>
        <div className="perf-section">
          <HowItWorks />
        </div>
        <div className="perf-section">
          <MiraSection />
        </div>
        <div className="perf-section">
          <WhyWedvisa />
        </div>
        <div className="perf-section">
          <Scrapbook />
        </div>
        <div className="perf-section">
          <SupplierCta />
        </div>
        <div className="perf-section">
          <Inspiration />
        </div>
        <div className="perf-section">
          <FinalCta />
        </div>
      </main>
      <Footer />
    </>
  );
}
