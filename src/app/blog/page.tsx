import type { Metadata } from "next";
import { SiteHeader } from "@/components/landing/site-header";
import { Footer } from "@/components/landing/footer";
import { BlogListing } from "@/components/blog/blog-listing";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Guides, country tips, and product insights for couples preparing partner, spouse, and wedding visas with WedVisa.",
};

export default function BlogPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-slate-50/60">
        <section className="relative overflow-hidden border-b border-slate-200/80 bg-white pt-32 pb-16 sm:pt-36 sm:pb-20">
          <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
              Blog
            </p>
            <h1 className="mx-auto max-w-3xl font-serif text-4xl font-medium tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              Clarity for every step of your visa journey
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
              Practical guides, country insights, and product updates written for
              couples building a life across borders.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <BlogListing />
        </section>
      </main>
      <Footer />
    </>
  );
}
