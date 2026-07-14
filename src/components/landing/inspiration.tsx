"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import Link from "next/link";
import {
  AnimatedSection,
  FadeIn,
} from "@/components/landing/animated-section";

export function Inspiration() {
  return (
    <AnimatedSection
      id="inspiration"
      className="relative w-full bg-[#faf6f0] px-4 py-24 sm:px-6 md:py-32 lg:px-8 overflow-hidden"
    >
      <div className="relative mx-auto max-w-7xl z-10 text-center">
        {/* Eyebrow: INSPIRATION */}
        <FadeIn>
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#d04b19]">
            Inspiration
          </p>
        </FadeIn>

        {/* Heading */}
        <FadeIn delay={0.05} className="mt-4">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[46px] leading-[1.15] font-medium text-[#1c1613] max-w-3xl mx-auto">
            Real weddings &amp;{" "}
            <span className="text-[#e85a23] italic font-serif">honest guides.</span>
          </h2>
        </FadeIn>

        {/* Subtext */}
        <FadeIn delay={0.1} className="mt-5">
          <p className="max-w-2xl mx-auto text-sm sm:text-base leading-relaxed text-slate-600 font-normal">
            Planning advice grounded in real UK wedding costs and culture &mdash; not generic listicles.
          </p>
        </FadeIn>

        {/* Cards Grid */}
        <div className="mt-16 grid gap-8 grid-cols-12 max-w-6xl mx-auto text-left">
          {/* Card 1: Left (Wider, Col Span 7) */}
          <div className="col-span-12 lg:col-span-7">
            <FadeIn className="h-full">
              <Link href="/blog/partner-visa-checklist-2026" className="group block h-full bg-white rounded-[24px] border border-[#f2eae1] p-4.5 sm:p-5 shadow-[0_4px_20px_-4px_rgba(28,22,19,0.02)] hover:shadow-[0_12px_28px_-6px_rgba(28,22,19,0.05)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  {/* Image container */}
                  <div className="relative aspect-[16/10] w-full rounded-[18px] overflow-hidden bg-slate-100 shadow-2xs">
                    <img
                      src="/inspiration-1.jpg"
                      alt="Bride and groom exit with confetti"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    {/* Badge */}
                    <div className="absolute top-4.5 left-4.5 bg-white/95 backdrop-blur-xs text-[10px] font-bold tracking-wider text-slate-800 px-3 py-1.5 rounded-full border border-slate-100 shadow-2xs">
                      PLANNING GUIDES
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 font-serif text-[20px] font-semibold text-[#1c1613] leading-snug group-hover:text-[#e85a23] transition-colors duration-200">
                    Wedding Budget Calculator UK - Free Tool + Real Breakdown
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-[13.5px] leading-relaxed text-slate-500 font-normal">
                    Plan your UK wedding budget in minutes using Wedvisa&apos;s free budget calculator tool based on industry insights and the right budget allocation.
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-6 pt-3.5 border-t border-slate-100 flex items-center gap-2 text-[11px] font-bold text-slate-400">
                  <BookOpen className="h-3.5 w-3.5 stroke-[2.25]" />
                  <span>8 min to read</span>
                </div>
              </Link>
            </FadeIn>
          </div>

          {/* Card 2: Right (Narrower, Col Span 5) */}
          <div className="col-span-12 lg:col-span-5">
            <FadeIn className="h-full" delay={0.08}>
              <Link href="/blog/uk-spouse-visa-evidence-guide" className="group block h-full bg-white rounded-[24px] border border-[#f2eae1] p-4.5 sm:p-5 shadow-[0_4px_20px_-4px_rgba(28,22,19,0.02)] hover:shadow-[0_12px_28px_-6px_rgba(28,22,19,0.05)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  {/* Image container */}
                  <div className="relative aspect-[16/10] w-full rounded-[18px] overflow-hidden bg-slate-100 shadow-2xs">
                    <img
                      src="/inspiration-2.jpg"
                      alt="Bride and groom at manor house"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    {/* Badge */}
                    <div className="absolute top-4.5 left-4.5 bg-white/95 backdrop-blur-xs text-[10px] font-bold tracking-wider text-slate-800 px-3 py-1.5 rounded-full border border-slate-100 shadow-2xs">
                      PLANNING GUIDES
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 font-serif text-[20px] font-semibold text-[#1c1613] leading-snug group-hover:text-[#e85a23] transition-colors duration-200">
                    How much does a UK wedding actually cost in 2026?
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-[13.5px] leading-relaxed text-slate-500 font-normal">
                    Real figures from UK surveys, broken down by category &mdash; venue, catering, photogr...
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-6 pt-3.5 border-t border-slate-100 flex items-center gap-2 text-[11px] font-bold text-slate-400">
                  <BookOpen className="h-3.5 w-3.5 stroke-[2.25]" />
                  <span>5</span>
                </div>
              </Link>
            </FadeIn>
          </div>
        </div>

        {/* Explore Button */}
        <FadeIn delay={0.15} className="mt-16 flex justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white hover:bg-slate-50 px-7 py-3 text-sm font-semibold text-[#1c1613] shadow-3xs transition-colors duration-200"
          >
            Explore all inspiration &rarr;
          </Link>
        </FadeIn>
      </div>
    </AnimatedSection>
  );
}
