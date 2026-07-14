"use client";

import { motion } from "framer-motion";
import { howItWorksSteps } from "@/lib/data";
import {
  AnimatedSection,
  SectionHeading,
  StaggerItem,
} from "@/components/landing/animated-section";

export function HowItWorks() {
  return (
    <AnimatedSection
      id="how-it-works"
      className="relative bg-white px-4 py-24 sm:px-6 md:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="How it works"
          title="Three elegant steps to clarity"
          description="A refined path from first question to submission-ready—designed for couples who want confidence, not chaos."
        />

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {howItWorksSteps.map((step) => {
            const Icon = step.icon;
            return (
              <StaggerItem key={step.step}>
                <motion.article
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative h-full overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm shadow-slate-900/5 transition-shadow duration-300 hover:shadow-xl hover:shadow-violet-600/10 md:p-10"
                >
                  <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-violet-500/5 transition-transform duration-500 group-hover:scale-150" />
                  <div className="relative">
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-600/25 transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-7 w-7" strokeWidth={1.5} />
                      </div>
                      <span className="font-serif text-4xl font-medium text-slate-100 transition-colors duration-300 group-hover:text-violet-100">
                        0{step.step}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </motion.article>
              </StaggerItem>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
