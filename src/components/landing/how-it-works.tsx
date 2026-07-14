"use client";

import { motion } from "framer-motion";
import {
  CalendarRange,
  ClipboardList,
  Store,
  Image,
} from "lucide-react";
import {
  AnimatedSection,
  FadeIn,
  StaggerItem,
} from "@/components/landing/animated-section";

const steps = [
  {
    step: "01",
    title: "Create your event",
    description: "Set your date, budget and guest count. Your personal planner is ready instantly.",
    icon: CalendarRange,
  },
  {
    step: "02",
    title: "Plan in one place",
    description: "Budget, checklist, guest list, timeline and seating – all connected, always in sync.",
    icon: ClipboardList,
  },
  {
    step: "03",
    title: "Find your suppliers",
    description: "Browse UK photographers, venues, caterers and florists and enquire directly.",
    icon: Store,
  },
  {
    step: "04",
    title: "Celebrate & remember",
    description: "A private gallery your guests can add to – then plan the next milestone too.",
    icon: Image,
  },
];

export function HowItWorks() {
  return (
    <div className="relative w-full bg-[#faf6f0] overflow-hidden">
      {/* Background floral decoration matching the left edge */}
      <div 
        className="absolute top-0 bottom-0 left-0 w-[20%] pointer-events-none opacity-20 select-none bg-contain bg-left bg-no-repeat"
        style={{ backgroundImage: "url('/watercolor-floral-bg.jpg')" }}
      />

      <AnimatedSection
        id="how-it-works"
        className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-32 lg:px-8 z-10"
      >
        {/* Top Section: Header & Image */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Heading & Text */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Eyebrow: HOW IT WORKS */}
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#d04b19]">
              How It Works
            </p>

            {/* Separator Line with Heart */}
            <div className="flex items-center w-full max-w-[140px] my-3.5 gap-3">
              <div className="h-[1px] bg-[#dfd2c4] flex-grow" />
              <span className="text-[#e85a23] text-xs leading-none">♡</span>
              <div className="h-[1px] bg-[#dfd2c4] flex-grow" />
            </div>

            {/* Main Title */}
            <h2 className="mt-2 font-serif text-4xl sm:text-5xl lg:text-[46px] lg:leading-[1.15] font-medium text-[#1c1613]">
              From &ldquo;yes&rdquo; to &ldquo;I do&rdquo;, <br className="hidden sm:inline" />
              <span className="text-[#e85a23] italic font-serif">perfectly organised.</span>
            </h2>

            {/* Subtext */}
            <p className="mt-6 text-sm sm:text-base leading-relaxed text-slate-600 font-normal max-w-md">
              One free account holds every part of your wedding &mdash; <br className="hidden md:inline" />
              and any celebration that comes after it.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-6 flex justify-center">
            <FadeIn direction="right" className="relative w-full max-w-[500px] aspect-[4/3] rounded-[24px] overflow-hidden shadow-md shadow-slate-900/5 border border-[#dfd2c4]/55 bg-[#f6efe7]">
              <img
                src="/wedding-planning-couple.jpg"
                alt="Couple planning wedding together"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </FadeIn>
          </div>
        </div>

        {/* Middle Section: Cards Flow */}
        <div className="mt-20 lg:mt-24 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 max-w-6xl mx-auto">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div key={step.step} className="relative h-full">
                <StaggerItem className="h-full">
                  <div className="relative flex flex-col items-center bg-white rounded-[24px] border border-[#f2eae1] p-6 pt-10 text-center shadow-[0_4px_16px_-4px_rgba(28,22,19,0.02)] h-full">
                    {/* Floating number badge */}
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white border border-[#f2eae1] text-xs font-semibold text-[#d04b19] shadow-xs">
                      {step.step}
                    </div>

                    {/* Icon container */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#f2eae1] text-[#e85a23] bg-[#faf6f0]/50">
                      <IconComponent className="h-5 w-5 stroke-[1.75]" />
                    </div>

                    {/* Title */}
                    <h3 className="mt-4 font-serif text-[17px] font-semibold text-[#1c1613]">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2.5 text-[12.5px] leading-relaxed text-slate-500 font-normal">
                      {step.description}
                    </p>
                  </div>
                </StaggerItem>

                {/* Connecting Line and Dot between steps */}
                {idx < 3 && (
                  <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 -right-4 w-8 items-center justify-center z-20 pointer-events-none">
                    <div className="w-8 h-[1px] bg-[#f2eae1]" />
                    <div className="w-1.5 h-1.5 rounded-full bg-[#e85a23] absolute" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Section: Cursive Slogan */}
        <FadeIn delay={0.2} className="mt-16 sm:mt-20 text-center">
          <p className="font-script text-[32px] sm:text-[38px] text-[#e85a23] tracking-wide leading-none">
            Organise everything. Enjoy every moment. ♡
          </p>
        </FadeIn>
      </AnimatedSection>
    </div>
  );
}
