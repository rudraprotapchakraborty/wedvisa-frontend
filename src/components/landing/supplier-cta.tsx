"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/landing/animated-section";

export function SupplierCta() {
  return (
    <section className="w-full bg-[#f2eadf] border-y border-[#dfd2c4] py-12 md:py-14 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-12">
          {/* Left Column: Heading and description */}
          <FadeIn className="flex flex-col gap-3 max-w-2xl text-left">
            <h2 className="font-serif text-2xl sm:text-3.5xl font-medium text-[#1c1613] tracking-tight">
              Looking for the right suppliers?
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed font-normal">
              Browse UK wedding photographers, venues, caterers, florists and more. <br className="hidden sm:inline" />
              Compare profiles, see their work, and enquire directly &mdash; all from inside your plan.
            </p>
          </FadeIn>

          {/* Right Column: CTA Button */}
          <FadeIn direction="none" delay={0.1} className="shrink-0 flex items-center">
            <Button
              asChild
              className="h-12 px-8 rounded-full bg-[#d04b19] text-white hover:bg-[#b83f12] font-semibold text-[14px] shadow-sm shadow-[#d04b19]/10 transition-colors duration-200"
            >
              <Link href="/suppliers">
                Find suppliers
              </Link>
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
