"use client";

import { motion } from "framer-motion";
import {
  AnimatedSection,
  FadeIn,
  StaggerItem,
} from "@/components/landing/animated-section";

// Custom SVGs matching the hand-drawn look of the design
function GiftHeartIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="8" width="18" height="14" rx="2" />
      <path d="M12 8V22" />
      <path d="M3 12h18" />
      <path d="M12 8a2.5 2.5 0 0 1-2.5-2.5c0-2 2.5-3 2.5-3s2.5 1 2.5 3A2.5 2.5 0 0 1 12 8z" />
      <path
        d="M12 17.5c-.8-.72-2.7-2.28-2.7-3.3a1.5 1.5 0 0 1 2.7-.9 1.5 1.5 0 0 1 2.7.9c0 1.02-1.9 2.58-2.7 3.3z"
        fill="white"
        stroke="currentColor"
        strokeWidth="1.25"
      />
    </svg>
  );
}

function GlobeHeartIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      <path d="M12 2v20" />
      <path
        d="M12 14.5c-.8-.72-2.7-2.28-2.7-3.3a1.5 1.5 0 0 1 2.7-.9 1.5 1.5 0 0 1 2.7.9c0 1.02-1.9 2.58-2.7 3.3z"
        fill="white"
        stroke="currentColor"
        strokeWidth="1.25"
      />
    </svg>
  );
}

function RingsHeartIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="9" cy="13" r="5" />
      <circle cx="15" cy="13" r="5" />
      <path
        d="M12 13.5c-.4-.36-1.35-1.14-1.35-1.65a.75.75 0 0 1 1.35-.45.75.75 0 0 1 1.35.45c0 .51-.95 1.29-1.35 1.65z"
        fill="white"
        stroke="currentColor"
        strokeWidth="1.25"
      />
    </svg>
  );
}

function CalendarHeartIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <path
        d="M12 17.5c-.8-.72-2.7-2.28-2.7-3.3a1.5 1.5 0 0 1 2.7-.9 1.5 1.5 0 0 1 2.7.9c0 1.02-1.9 2.58-2.7 3.3z"
        fill="white"
        stroke="currentColor"
        strokeWidth="1.25"
      />
    </svg>
  );
}

function OliveBranch({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      className={className}
    >
      <path d="M3 20c8-4 13-11 16-16" />
      <path d="M11 11.5c-1-1.5-3-1-3.5.5s1 3.5 2.5 3c1.5-.5 2-2 1-3.5z" />
      <path d="M14 8c-1-1.5-3-1-3.5.5s1 3.5 2.5 3c1.5-.5 2-2 1-3.5z" />
      <path d="M7 16.5c-1-1.5-3-1-3.5.5s1 3.5 2.5 3c1.5-.5 2-2 1-3.5z" />
    </svg>
  );
}

const highlights = [
  {
    title: "Free to start, no wall",
    description: "Use the tools and your planner without paying or signing up first. Pay only if you choose Mira for an event.",
    icon: GiftHeartIcon,
  },
  {
    title: "Built for every culture",
    description: "Civil, religious, Nikah, Hindu, Sikh, multicultural – planning and guidance that fits your traditions, not a generic template.",
    icon: GlobeHeartIcon,
  },
  {
    title: "Everything connected",
    description: "Your budget, guests, timeline and suppliers all talk to each other. Change one, the rest keep up.",
    icon: RingsHeartIcon,
  },
  {
    title: "One account, every event",
    description: "Engagement party, the wedding, the anniversary after. Plan each celebration from the same home.",
    icon: CalendarHeartIcon,
  },
];

export function WhyWedvisa() {
  return (
    <div className="relative w-full bg-[#faf6f0] overflow-hidden">
      {/* Background floral decoration matching the right edge */}
      <div 
        className="absolute top-0 bottom-0 right-0 w-[20%] pointer-events-none opacity-20 select-none bg-contain bg-right bg-no-repeat"
        style={{ backgroundImage: "url('/watercolor-floral-bg.jpg')" }}
      />

      <AnimatedSection
        id="why-wedvisa"
        className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-32 lg:px-8 z-10 flex flex-col gap-24 lg:gap-32"
      >
        {/* Row 1: Header Text & Triptych Images */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Heading & Text */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Eyebrow: WHY WEDVISA */}
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#d04b19]">
              Why Wedvisa
            </p>

            {/* Separator Line with Heart */}
            <div className="flex items-center w-full max-w-[140px] my-3.5 gap-3">
              <div className="h-[1px] bg-[#dfd2c4] flex-grow" />
              <span className="text-[#e85a23] text-xs leading-none">♡</span>
              <div className="h-[1px] bg-[#dfd2c4] flex-grow" />
            </div>

            {/* Main Title */}
            <h2 className="mt-2 font-serif text-4xl sm:text-5xl lg:text-[46px] lg:leading-[1.15] font-medium text-[#1c1613] relative">
              More than a <br />
              <span className="text-[#e85a23] italic font-serif">checklist</span> app.
              <OliveBranch className="inline-block h-6 w-6 ml-2.5 text-[#dfd2c4] -rotate-12 absolute -top-1" />
            </h2>

            {/* Subtext */}
            <p className="mt-6 text-sm sm:text-base leading-relaxed text-slate-600 font-normal max-w-md">
              Most wedding tools do one thing. <br className="hidden sm:inline" />
              Wedvisa connects your whole day &mdash; and respects that no two weddings look the same.
            </p>
          </div>

          {/* Right Column: Triptych Arch Images */}
          <div className="lg:col-span-6 flex justify-center w-full">
            <div className="grid grid-cols-3 gap-3.5 items-end max-w-[480px] w-full">
              {/* Arch 1 (Left) */}
              <FadeIn direction="up" delay={0.05} className="w-full aspect-[3/4.5] rounded-t-[80px] overflow-hidden shadow-xs border border-[#dfd2c4]/50 bg-white">
                <img
                  src="/why-wedvisa-1.jpg"
                  alt="Invitation cards and ring macro shot"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </FadeIn>

              {/* Arch 2 (Center - Taller) */}
              <FadeIn direction="up" delay={0.1} className="w-full aspect-[3/5] rounded-t-[100px] overflow-hidden shadow-md border border-[#dfd2c4]/55 bg-white">
                <img
                  src="/why-wedvisa-2.jpg"
                  alt="Bride and groom embracing"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </FadeIn>

              {/* Arch 3 (Right) */}
              <FadeIn direction="up" delay={0.15} className="w-full aspect-[3/4.5] rounded-t-[80px] overflow-hidden shadow-xs border border-[#dfd2c4]/50 bg-white">
                <img
                  src="/why-wedvisa-3.jpg"
                  alt="Wedding reception table setting"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </FadeIn>
            </div>
          </div>
        </div>

        {/* Row 2: Highlights Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 max-w-6xl mx-auto text-center">
          {highlights.map((highlight, idx) => {
            const IconComponent = highlight.icon;
            return (
              <div key={highlight.title} className="relative px-6 flex flex-col items-center">
                {/* Desktop vertical divider with central orange dot */}
                {idx > 0 && (
                  <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 h-20 w-[1px] bg-[#dfd2c4]/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#e85a23] absolute -left-[3px] top-1/2 -translate-y-1/2" />
                  </div>
                )}

                <StaggerItem className="flex flex-col items-center">
                  {/* Icon container */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#f2eae1] text-[#e85a23] bg-white shadow-2xs hover:shadow-xs transition-shadow duration-300">
                    <IconComponent className="h-6 w-6" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 font-serif text-[16px] font-semibold text-[#1c1613]">
                    {highlight.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-[12.5px] leading-relaxed text-slate-500 font-normal">
                    {highlight.description}
                  </p>
                </StaggerItem>
              </div>
            );
          })}
        </div>
      </AnimatedSection>
    </div>
  );
}
