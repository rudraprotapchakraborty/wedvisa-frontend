"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import { pricingPlans } from "@/lib/data";
import { Button } from "@/components/ui/button";
import {
  AnimatedSection,
  SectionHeading,
  StaggerItem,
} from "@/components/landing/animated-section";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <AnimatedSection
      id="pricing"
      className="bg-white px-4 py-24 sm:px-6 md:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple plans for every stage"
          description="Start free, then choose the workspace that matches your journey. Upgrade anytime as your application grows."
        />

        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3 lg:gap-8">
          {pricingPlans.map((plan) => (
            <StaggerItem key={plan.id} className="h-full">
              <motion.div
                whileHover={{ y: -8, scale: plan.highlighted ? 1.02 : 1.015 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "relative h-full rounded-3xl",
                  plan.highlighted &&
                    "bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 p-[2px] shadow-2xl shadow-violet-600/20"
                )}
              >
                {plan.highlighted ? (
                  <div className="absolute -top-3.5 left-1/2 z-10 -translate-x-1/2">
                    <span className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-lg shadow-violet-600/30">
                      Most popular
                    </span>
                  </div>
                ) : null}

                <article
                  className={cn(
                    "relative flex h-full flex-col rounded-[22px] bg-white p-8 md:p-9",
                    !plan.highlighted &&
                      "rounded-3xl border border-slate-200/80 shadow-sm shadow-slate-900/5"
                  )}
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {plan.description}
                  </p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="font-serif text-5xl font-medium tracking-tight text-slate-900">
                      {plan.price}
                    </span>
                    <span className="text-slate-500">{plan.period}</span>
                  </div>

                  <ul className="mt-8 flex-1 space-y-3.5">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-slate-700"
                      >
                        <span
                          className={cn(
                            "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                            plan.highlighted
                              ? "bg-violet-100 text-violet-700"
                              : "bg-slate-100 text-slate-600"
                          )}
                        >
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    size="lg"
                    variant={plan.highlighted ? "gradient" : "outlineDark"}
                    className="mt-8 w-full"
                  >
                    <Link href="/register">{plan.cta}</Link>
                  </Button>
                </article>
              </motion.div>
            </StaggerItem>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
