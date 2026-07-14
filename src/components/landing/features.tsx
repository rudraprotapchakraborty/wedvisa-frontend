"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { features } from "@/lib/data";
import { Button } from "@/components/ui/button";
import {
  AnimatedSection,
  FadeIn,
  SectionHeading,
} from "@/components/landing/animated-section";
import { FeatureIllustration } from "@/components/landing/feature-illustration";

const accents = ["violet", "fuchsia", "indigo"] as const;

export function Features() {
  return (
    <AnimatedSection
      id="services"
      className="relative overflow-hidden bg-slate-50/80 px-4 py-24 sm:px-6 md:py-32 lg:px-8"
    >
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Features"
          title="Everything you need for a stronger application"
          description="Purpose-built tools that replace spreadsheets, guesswork, and late-night stress with clarity and calm."
        />

        <div className="space-y-24 md:space-y-32">
          {features.map((feature, index) => {
            const accent = accents[index % accents.length];
            return (
              <div
                key={feature.id}
                id={feature.id}
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  feature.reverse ? "" : ""
                }`}
              >
                <FadeIn
                  direction={feature.reverse ? "left" : "right"}
                  className={feature.reverse ? "lg:order-2" : "lg:order-1"}
                >
                  <FeatureIllustration
                    icon={feature.icon}
                    title={feature.title}
                    accent={accent}
                  />
                </FadeIn>

                <FadeIn
                  direction={feature.reverse ? "right" : "left"}
                  delay={0.1}
                  className={feature.reverse ? "lg:order-1" : "lg:order-2"}
                >
                  <div className="max-w-xl">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-violet-600">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="font-serif text-3xl font-medium tracking-tight text-slate-900 md:text-4xl">
                      {feature.title}
                    </h3>
                    <p className="mt-4 text-lg leading-relaxed text-slate-600">
                      {feature.description}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {feature.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-start gap-3 text-slate-700"
                        >
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-700">
                            <Check className="h-3 w-3" strokeWidth={3} />
                          </span>
                          <span className="text-base">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <motion.div
                      className="mt-8"
                      whileHover={{ x: 2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Button asChild variant="gradient" size="lg">
                        <Link href={feature.href}>
                          {feature.cta}
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                </FadeIn>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
