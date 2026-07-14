"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import Link from "next/link";
import { countries } from "@/lib/data";
import {
  AnimatedSection,
  SectionHeading,
  StaggerItem,
} from "@/components/landing/animated-section";

export function Countries() {
  return (
    <AnimatedSection
      id="countries"
      className="bg-transparent px-4 py-24 sm:px-6 md:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Countries"
          title="Supported destinations worldwide"
          description="Specialized guidance for partner and marriage visa pathways across major destination countries."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {countries.map((country) => (
            <StaggerItem key={country.code}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="h-full"
              >
                <Link
                  href={country.href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm shadow-slate-900/5 transition-shadow duration-300 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-600/10"
                >
                  <div className="mb-6 flex items-start justify-between">
                    <span
                      className="text-5xl leading-none drop-shadow-sm transition-transform duration-500 group-hover:scale-110"
                      role="img"
                      aria-label={`${country.name} flag`}
                    >
                      {country.flag}
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 transition-all duration-300 group-hover:border-violet-200 group-hover:bg-violet-50 group-hover:text-violet-600">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                    {country.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-violet-600">
                    {country.code}
                  </p>

                  <div className="mt-6 space-y-2.5 border-t border-slate-100 pt-5">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Clock className="h-4 w-4 text-slate-400" />
                      <span>Processing: {country.processingTime}</span>
                    </div>
                    <p className="text-sm font-medium text-slate-800">
                      {country.approvalGuidance}
                    </p>
                  </div>
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
