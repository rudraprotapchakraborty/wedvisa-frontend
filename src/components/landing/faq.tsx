"use client";

import { faqItems } from "@/lib/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AnimatedSection,
  FadeIn,
  SectionHeading,
} from "@/components/landing/animated-section";

export function Faq() {
  return (
    <AnimatedSection
      id="faq"
      className="bg-slate-50/80 px-4 py-24 sm:px-6 md:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Answers for curious couples"
          description="Everything you need to know about WedVisa, privacy, and how we support your application journey."
        />

        <FadeIn delay={0.1}>
          <div className="rounded-3xl border border-slate-200/80 bg-white px-6 shadow-sm shadow-slate-900/5 sm:px-8">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </FadeIn>
      </div>
    </AnimatedSection>
  );
}
