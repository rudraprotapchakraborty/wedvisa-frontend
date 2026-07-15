import type { Metadata } from "next";
import { SiteHeader } from "@/components/landing/site-header";
import { Footer } from "@/components/landing/footer";
import { BlogListing } from "@/components/blog/blog-listing";

export const metadata: Metadata = {
  title: "Inspiration & Guides",
  description:
    "Real UK wedding planning advice, cost breakdowns, and honest guides — grounded in culture, not generic listicles.",
};

export default function BlogPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-[var(--background)]">
        <section className="relative overflow-hidden border-b border-[var(--border)] bg-[var(--background-elevated)] pt-32 pb-16 sm:pt-36 sm:pb-20">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="ambient-glow left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 bg-[var(--accent)]/[0.06]" />
          </div>
          <div className="relative mx-auto max-w-[var(--max-width)] px-4 text-center sm:px-6 lg:px-8">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
              Inspiration
            </p>
            <h1 className="mx-auto max-w-3xl font-serif text-4xl font-medium tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              Clarity for every step of your{" "}
              <em className="not-italic font-serif italic text-[var(--accent)]">
                wedding plan
              </em>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
              Practical guides, real UK costs, and product updates written for
              couples building their day with intention.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[var(--max-width)] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <BlogListing />
        </section>
      </main>
      <Footer />
    </>
  );
}
