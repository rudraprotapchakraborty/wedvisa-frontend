"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, Heart } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  AnimatedSection,
  FadeIn,
  StaggerItem,
} from "@/components/landing/animated-section";

// Custom SVG Icons matching the style of the highlights
function ChecklistIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M8 9h8" />
      <path d="M8 13h8" />
      <path d="M8 17h6" />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function PadlockIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}

function BranchIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={className}>
      <path d="M3 20c8-4 13-11 16-16" />
      <path d="M11 11.5c-1-1.5-3-1-3.5.5s1 3.5 2.5 3c1.5-.5 2-2 1-3.5z" />
      <path d="M7 16.5c-1-1.5-3-1-3.5.5s1 3.5 2.5 3c1.5-.5 2-2 1-3.5z" />
    </svg>
  );
}

const miniFeatures = [
  {
    title: "Smart planning",
    description: "All your details, in perfect order.",
    icon: ChecklistIcon,
  },
  {
    title: "Everyone in sync",
    description: "Guests, partners and tasks together.",
    icon: UsersIcon,
  },
  {
    title: "Beautiful timelines",
    description: "See everything, right on time.",
    icon: CalendarIcon,
  },
  {
    title: "Stress-free journey",
    description: "Tools that simplify, so you can enjoy.",
    icon: PadlockIcon,
  },
];

export function FinalCta() {
  return (
    <section id="final-cta" className="w-full overflow-hidden bg-[#faf6f0]">
      <div className="grid grid-cols-12 min-h-[620px]">
        {/* Left Column: Content (Col Span 7) */}
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-center p-8 sm:p-12 md:p-16 lg:p-20 text-left relative z-20">
          {/* Subtle leaves decoration in bottom-left */}
          <div 
            className="absolute bottom-0 left-0 w-[250px] h-[200px] pointer-events-none opacity-20 select-none bg-contain bg-left-bottom bg-no-repeat"
            style={{ backgroundImage: "url('/watercolor-floral-bg.jpg')" }}
          />

          <FadeIn className="relative z-10">
            {/* Eyebrow badge */}
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#d04b19]">
              <BranchIcon className="h-4.5 w-4.5 text-[#d04b19] -rotate-12" />
              <span>Plan beautifully. Celebrate fully.</span>
            </div>

            {/* Title */}
            <h2 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-[46px] leading-[1.12] font-medium text-[#1c1613] max-w-lg">
              Your wedding, <br />
              all in <span className="text-[#e85a23] italic font-serif">one place.</span>
            </h2>

            {/* Heart divider */}
            <div className="flex items-center w-full max-w-[140px] my-5 gap-3">
              <div className="h-[1px] bg-[#dfd2c4] flex-grow" />
              <span className="text-[#e85a23] text-xs leading-none">♡</span>
              <div className="h-[1px] bg-[#dfd2c4] flex-grow" />
            </div>

            {/* Description */}
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 font-normal max-w-md">
              Start with the free tools, create your plan when you&apos;re ready. No wall, no pressure.
            </p>

            {/* Buttons Row */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                asChild
                className="h-12 px-7 rounded-full bg-[#d04b19] text-white hover:bg-[#b83f12] font-semibold text-[13.5px] shadow-sm shadow-[#d04b19]/10 transition-colors duration-200"
              >
                <Link href="/?auth=register">
                  Start planning free
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                className="h-12 px-7 rounded-full border border-slate-300/80 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-[13.5px] transition-colors duration-200 inline-flex items-center justify-between"
              >
                <Link href="/suppliers" className="w-full flex items-center justify-between">
                  <span>Find suppliers</span>
                  <Users className="ml-2 h-4 w-4 text-slate-400" />
                </Link>
              </Button>
            </div>

            {/* Bottom Mini Columns */}
            <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-[#dfd2c4]/50 max-w-xl">
              {miniFeatures.map((feature) => {
                const IconComponent = feature.icon;
                return (
                  <div key={feature.title} className="flex flex-col items-start text-left">
                    <div className="text-[#e85a23] mb-2.5">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <h4 className="text-[11.5px] font-bold text-[#1c1613] tracking-wide">
                      {feature.title}
                    </h4>
                    <p className="mt-1 text-[10px] sm:text-[10.5px] leading-relaxed text-slate-400 font-medium">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>

        {/* Right Column: Image & Curve & Card (Col Span 5) */}
        <div className="col-span-12 lg:col-span-5 relative min-h-[400px] lg:min-h-full overflow-hidden z-10 bg-slate-900">
          <img
            src="/final-cta.jpg"
            alt="Wedding reception outdoor tables at dusk"
            className="h-full w-full object-cover"
          />

          {/* S-curve overlay on desktop, blending right image with left column */}
          <svg
            className="absolute left-0 top-0 bottom-0 h-full w-24 text-[#faf6f0] fill-current pointer-events-none z-10 hidden lg:block -translate-x-px"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path d="M0 0 L100 0 C 40 30, 20 70, 100 100 L0 100 Z" />
          </svg>

          {/* Floating overlay card */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="absolute bottom-6 left-6 right-6 lg:left-8 bg-white rounded-[20px] p-4.5 sm:p-5 shadow-xl border border-[#f2eae1] flex items-center gap-4 max-w-sm z-20"
          >
            {/* Round Badge */}
            <div className="h-11 w-11 rounded-full bg-[#d04b19] flex items-center justify-center text-white shrink-0 shadow-xs">
              <Heart className="h-4.5 w-4.5 fill-white text-[#d04b19]" />
            </div>

            {/* Text details */}
            <div className="text-left">
              <h5 className="font-serif text-[14px] font-semibold text-[#1c1613] leading-tight">
                Everything you need, nothing you don&apos;t.
              </h5>
              <p className="mt-1.5 text-[10.5px] leading-relaxed text-slate-500 font-medium">
                Budget, guest lists, timelines, suppliers and more &mdash; all working together.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
