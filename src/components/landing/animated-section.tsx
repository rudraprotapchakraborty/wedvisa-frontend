"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  defaultViewport,
  easeOutExpo,
  fadeUp,
  staggerContainer,
} from "@/lib/motion";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
  as?: "section" | "div";
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  id,
  as = "section",
}: AnimatedSectionProps) {
  const Comp = as === "div" ? motion.div : motion.section;

  return (
    <Comp
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.1, delayChildren: delay },
        },
      }}
    >
      {children}
    </Comp>
  );
}

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  blur?: boolean;
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  blur = false,
}: FadeInProps) {
  const offsets: Record<string, { x?: number; y?: number }> = {
    up: { y: 32 },
    down: { y: -32 },
    left: { x: 32 },
    right: { x: -32 },
    none: {},
  };

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        ...offsets[direction],
        ...(blur ? { filter: "blur(10px)" } : {}),
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        ...(blur ? { filter: "blur(0px)" } : {}),
      }}
      viewport={defaultViewport}
      transition={{
        duration: 0.85,
        delay,
        ease: easeOutExpo,
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  );
}

export function StaggerGroup({
  children,
  className,
  fast = false,
}: {
  children: ReactNode;
  className?: string;
  fast?: boolean;
}) {
  const variants: Variants = fast
    ? {
        hidden: {},
        visible: { transition: { staggerChildren: 0.06, delayChildren: 0.04 } },
      }
    : staggerContainer;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  accentWord,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
  /** Optional word inside title to style as italic accent */
  accentWord?: string;
}) {
  const renderTitle = () => {
    if (!accentWord || !title.includes(accentWord)) return title;
    const [before, after] = title.split(accentWord);
    return (
      <>
        {before}
        <em className="not-italic font-serif italic text-[var(--accent)]">
          {accentWord}
        </em>
        {after}
      </>
    );
  };

  return (
    <div
      className={cn(
        "mx-auto mb-14 max-w-3xl md:mb-20",
        align === "center" ? "text-center" : "text-left ml-0"
      )}
    >
      {eyebrow ? (
        <FadeIn>
          <p
            className={cn(
              "mb-4 text-[11px] font-semibold uppercase tracking-[0.28em]",
              light ? "text-white/55" : "text-[var(--accent)]"
            )}
          >
            {eyebrow}
          </p>
        </FadeIn>
      ) : null}
      <FadeIn delay={0.05} blur>
        <h2
          className={cn(
            "font-serif text-4xl font-medium tracking-tight text-balance md:text-5xl lg:text-[3.25rem] lg:leading-[1.12]",
            light ? "text-white" : "text-slate-900"
          )}
        >
          {renderTitle()}
        </h2>
      </FadeIn>
      {description ? (
        <FadeIn delay={0.12}>
          <p
            className={cn(
              "mt-5 text-base leading-relaxed text-pretty md:text-lg",
              light ? "text-white/65" : "text-slate-600",
              align === "center" && "mx-auto max-w-2xl"
            )}
          >
            {description}
          </p>
        </FadeIn>
      ) : null}
    </div>
  );
}

/** Thin horizontal rule with optional center mark */
export function Ornament({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <div className={cn("flex items-center w-full max-w-[7.5rem] gap-3", className)} aria-hidden>
      <div
        className={cn(
          "h-px flex-grow",
          light ? "bg-white/20" : "bg-[var(--border-strong)]"
        )}
      />
      <span
        className={cn(
          "h-1 w-1 rounded-full",
          light ? "bg-white/50" : "bg-[var(--accent)]"
        )}
      />
      <div
        className={cn(
          "h-px flex-grow",
          light ? "bg-white/20" : "bg-[var(--border-strong)]"
        )}
      />
    </div>
  );
}
