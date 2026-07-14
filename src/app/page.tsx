import { Hero, Footer } from "@/components/landing";
import { SiteHeader } from "@/components/landing/site-header";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
      </main>
      <Footer />
    </>
  );
}
