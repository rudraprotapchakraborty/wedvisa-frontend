"use client";

import { motion } from "framer-motion";
import {
  Calculator,
  Check,
  Users,
  Calendar,
  ClipboardList,
  Coins,
} from "lucide-react";
import Link from "next/link";
import {
  AnimatedSection,
  FadeIn,
  StaggerItem,
} from "@/components/landing/animated-section";

const tools = [
  {
    title: "Budget Calculator",
    description: "Set your total, allocate by category, and see exactly where your money goes.",
    linkText: "Open calculator",
    href: "/budget-calculator",
    icon: Calculator,
    iconColor: "text-[#7c3aed]", // Purple
    iconBg: "bg-[#f3e8ff]",
  },
  {
    title: "Wedding Checklist",
    description: "A complete UK planning checklist that adjusts to how far away your date is.",
    linkText: "Open checklist",
    href: "/checklist",
    icon: Check,
    iconColor: "text-[#10b981]", // Green
    iconBg: "bg-[#ecfdf5]",
    isCheckIcon: true,
  },
  {
    title: "Guest List Manager",
    description: "Build your list, track RSVPs, and manage daytime and evening invites.",
    linkText: "Open guest list",
    href: "/guest-list",
    icon: Users,
    iconColor: "text-[#4f46e5]", // Indigo
    iconBg: "bg-[#e0e7ff]",
  },
  {
    title: "Timeline Planner",
    description: "Map out your day from morning to night with our smart timeline builder.",
    linkText: "Open timeline",
    href: "/timeline",
    icon: Calendar,
    iconColor: "text-[#7c3aed]", // Purple
    iconBg: "bg-[#f3e8ff]",
  },
  {
    title: "Vendor Tracker",
    description: "Keep all your suppliers, contracts, and payments organized in one place.",
    linkText: "Open tracker",
    href: "/vendor-tracker",
    icon: ClipboardList,
    iconColor: "text-[#7c3aed]", // Purple
    iconBg: "bg-[#f3e8ff]",
  },
  {
    title: "Savings Finder",
    description: "Find smart ways to save on your wedding without compromising.",
    linkText: "Open savings finder",
    href: "/savings-finder",
    icon: Coins,
    iconColor: "text-[#e85a23]", // Orange
    iconBg: "bg-[#fff3ed]",
  },
];

export function PlanningTools() {
  return (
    <div
      className="relative w-full bg-[#faf6f0] bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/watercolor-floral-bg.jpg')",
      }}
    >
      <AnimatedSection
        id="planning-tools"
        className="px-4 py-24 sm:px-6 md:py-32 lg:px-8"
      >
        {/* Soft gradient overlay to ensure perfect readability in the center */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#faf6f0]/85 to-transparent pointer-events-none" />

        <div className="relative mx-auto max-w-7xl z-10 text-center">
          {/* Badge: + No account needed */}
          <FadeIn className="inline-flex items-center justify-center">
            <div className="rounded-full border border-[#eee5db] bg-white/60 backdrop-blur-xs px-3.5 py-1 text-[12px] font-medium tracking-wide text-slate-600 shadow-xs">
              + No account needed
            </div>
          </FadeIn>

          {/* Small Eyebrow: FREE PLANNING TOOLS */}
          <FadeIn delay={0.05} className="mt-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#d04b19]">
              Free Planning Tools
            </p>
          </FadeIn>

          {/* Heading */}
          <FadeIn delay={0.1} className="mt-4">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[46px] leading-[1.15] font-medium text-[#1c1613] max-w-3xl mx-auto">
              Start planning right now –{" "}
              <span className="text-[#e85a23] italic font-serif">for free.</span>
            </h2>
          </FadeIn>

          {/* Subtext */}
          <FadeIn delay={0.15} className="mt-5">
            <p className="max-w-2xl mx-auto text-sm sm:text-base leading-relaxed text-slate-600 font-normal">
              Six interactive tools you can use today, no sign-up required. Save your work whenever
              <br className="hidden md:inline" /> you&apos;re ready to create a free account.
            </p>
          </FadeIn>

          {/* Cards Grid */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 max-w-6xl mx-auto text-left">
            {tools.map((tool, idx) => {
              const IconComponent = tool.icon;
              return (
                <StaggerItem key={tool.title} className="h-full">
                  <motion.div
                    whileHover={{ y: -6, scale: 1.01 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="flex flex-col justify-between h-full bg-white rounded-[24px] border border-[#f2eae1]/80 p-7 md:p-8 shadow-[0_4px_20px_-4px_rgba(28,22,19,0.03)] hover:shadow-[0_12px_24px_-6px_rgba(28,22,19,0.06)] transition-shadow duration-300"
                  >
                    <div>
                      {/* Icon container */}
                      <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#f5efe6]/70">
                        {tool.isCheckIcon ? (
                          <div className={`flex h-6 w-6 items-center justify-center rounded-md ${tool.iconBg} ${tool.iconColor} border border-emerald-200/50`}>
                            <IconComponent className="h-4.5 w-4.5 stroke-[3]" />
                          </div>
                        ) : (
                          <IconComponent className={`h-6 w-6 ${tool.iconColor}`} strokeWidth={1.75} />
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="mt-6 font-serif text-[20px] font-semibold text-[#1c1613]">
                        {tool.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-3 text-[13.5px] leading-relaxed text-slate-500 font-normal">
                        {tool.description}
                      </p>
                    </div>

                    {/* Action Link */}
                    <div className="mt-6 pt-2">
                      <Link
                        href={tool.href}
                        className="group/link inline-flex items-center text-[13px] font-semibold text-[#e85a23] hover:text-[#d04b19] transition-colors"
                      >
                        {tool.linkText}
                        <span className="ml-1 transition-transform duration-200 group-hover/link:translate-x-1">
                          &rarr;
                        </span>
                      </Link>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
