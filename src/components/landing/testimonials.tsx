"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import {
  AnimatedSection,
  SectionHeading,
} from "@/components/landing/animated-section";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const amount = Math.min(360, el.clientWidth * 0.8);
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <AnimatedSection
      id="testimonials"
      className="overflow-hidden bg-slate-50/80 px-4 py-24 sm:px-6 md:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl md:mb-0">
            <SectionHeading
              eyebrow="Testimonials"
              title="Loved by couples building a life together"
              description="Real stories from partners who used WedVisa to navigate their visa journey with more clarity and less stress."
              align="left"
            />
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Previous testimonials"
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all hover:border-violet-200 hover:text-violet-700 disabled:cursor-not-allowed disabled:opacity-40"
              )}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Next testimonials"
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all hover:border-violet-200 hover:text-violet-700 disabled:cursor-not-allowed disabled:opacity-40"
              )}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.015 }}
              className="w-[min(100%,340px)] shrink-0 snap-start rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm shadow-slate-900/5 transition-shadow duration-300 hover:shadow-xl hover:shadow-violet-600/10 sm:w-[380px]"
            >
              <div className="mb-5 flex items-center gap-0.5 text-amber-400">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-base leading-relaxed text-slate-700">
                &ldquo;{item.review}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-violet-600 text-sm font-semibold text-white shadow-md shadow-violet-600/20">
                  {item.avatar}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{item.name}</p>
                  <p className="text-sm text-slate-500">{item.country}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
