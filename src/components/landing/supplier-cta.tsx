"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { FadeIn } from "@/components/landing/animated-section";

export function SupplierCta() {
  return (
    <section
      id="suppliers"
      className="relative w-full overflow-hidden border-y border-[var(--border)] bg-[var(--background-muted)] px-4 py-14 sm:px-6 md:py-16 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="ambient-glow right-0 top-1/2 h-40 w-64 -translate-y-1/2 bg-[var(--accent)]/[0.07]" />
      </div>

      <div className="relative mx-auto max-w-[var(--max-width)]">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center md:gap-12">
          <FadeIn className="flex max-w-2xl flex-col gap-3 text-left">
            <h2 className="font-serif text-2xl font-medium tracking-tight text-slate-900 sm:text-3xl">
              Looking for the right suppliers?
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-[0.9375rem]">
              Browse UK wedding photographers, venues, caterers, florists and
              more. Compare profiles, see their work, and enquire directly —
              all from inside your plan.
            </p>
          </FadeIn>

          <FadeIn direction="none" delay={0.1} className="shrink-0">
            <Magnetic strength={0.18}>
              <Button asChild size="lg" className="light-sweep">
                <Link href="/suppliers">
                  Find suppliers
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </Magnetic>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
