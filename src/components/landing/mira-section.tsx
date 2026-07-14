"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import {
  AnimatedSection,
  FadeIn,
} from "@/components/landing/animated-section";

export function MiraSection() {
  return (
    <AnimatedSection
      id="mira-assistant"
      className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8 z-10"
    >
      {/* Large Card Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full rounded-[32px] border border-[#dfd2c4]/55 bg-[#fbf9f6] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-[0_8px_30px_-6px_rgba(28,22,19,0.03)]"
      >
        {/* Subtle radial yellow-orange blur behind the chat container */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[45%] h-[70%] bg-radial-gradient from-[#e85a23]/6 to-transparent blur-3xl pointer-events-none z-0" />

        <div className="relative grid gap-12 lg:grid-cols-12 lg:items-center z-10">
          {/* Left Column: Text area */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Badge: COMING SOON */}
            <span className="inline-flex items-center gap-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] text-[#d04b19]">
              <Sparkles className="h-3 w-3 fill-[#d04b19]" />
              Coming Soon
            </span>

            {/* Title */}
            <h2 className="mt-5 font-serif text-3.5xl sm:text-4xl lg:text-[40px] leading-[1.18] font-medium text-[#1c1613]">
              Meet Mira, your{" "}
              <span className="text-[#e85a23] italic font-serif">
                AI planning assistant.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 text-slate-600 text-sm sm:text-[14.5px] leading-relaxed font-normal max-w-xl">
              When you&apos;re ready, add Mira to any event and she&apos;ll build your plan, suggest
              suppliers that fit your budget and style, and keep everything on track. Optional, per
              event &mdash; only when you want the help.
            </p>

            {/* Bottom Capsule: Launching later this year */}
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#dfd2c4]/70 bg-[#eee5db]/30 px-4 py-1.5 text-[12px] font-semibold text-slate-600 shadow-2xs">
              <span>⏳</span>
              <span>Launching later this year</span>
            </div>
          </div>

          {/* Right Column: Mock Chat UI */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
            {/* Chat Box Container */}
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
              className="w-full max-w-[420px] bg-white rounded-[28px] border border-[#f2eae1] p-6 sm:p-7 shadow-[0_12px_36px_-8px_rgba(28,22,19,0.06)] flex flex-col gap-4.5"
            >
              {/* Bubble 1: User message */}
              <div className="flex flex-col items-start">
                <div className="max-w-[88%] bg-[#f3ece3]/70 text-[#1c1613] text-[13px] sm:text-[13.5px] leading-relaxed font-medium px-4.5 py-3 rounded-[18px] rounded-tl-[4px]">
                  We&apos;ve got £25k and 120 guests in Manchester. Where do we start?
                </div>
              </div>

              {/* Bubble 2: Mira response */}
              <div className="flex flex-col items-start">
                <div className="max-w-[90%] bg-[#d04b19] text-white text-[13px] sm:text-[13.5px] leading-relaxed font-medium px-4.5 py-3 rounded-[18px] rounded-tl-[4px] shadow-sm">
                  Let&apos;s lock your venue first &mdash; it shapes everything. For 120 guests at that budget I&apos;d aim for £6&ndash;8k on the venue. Want me to shortlist three near Manchester?
                </div>
              </div>

              {/* Bubble 3: User response */}
              <div className="flex flex-col items-start">
                <div className="inline-flex items-center gap-1 bg-[#f3ece3]/70 text-[#1c1613] text-[13px] sm:text-[13.5px] leading-relaxed font-medium px-4.5 py-3 rounded-[18px] rounded-tl-[4px]">
                  Yes please ✨
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatedSection>
  );
}
