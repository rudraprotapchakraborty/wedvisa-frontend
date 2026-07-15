import type { Transition, Variants } from "framer-motion";

/** Cinematic easing curves — Apple-adjacent, never bounce-cheap */
export const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];
export const easeOutQuart: [number, number, number, number] = [0.25, 1, 0.5, 1];
export const easeInOutSoft: [number, number, number, number] = [0.65, 0, 0.35, 1];

export const springSoft = {
  type: "spring" as const,
  stiffness: 120,
  damping: 22,
  mass: 0.9,
};

export const springSnappy = {
  type: "spring" as const,
  stiffness: 380,
  damping: 28,
  mass: 0.7,
};

export const springMagnetic = {
  type: "spring" as const,
  stiffness: 260,
  damping: 20,
  mass: 0.6,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: easeOutExpo },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, ease: easeOutExpo },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: easeOutExpo },
  },
};

export const blurReveal: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: easeOutExpo },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
};

export const revealMask: Variants = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 0.9, ease: easeOutExpo },
  },
};

export const defaultViewport = {
  once: true,
  margin: "-10% 0px -8% 0px",
  amount: 0.2 as const,
};

export function transition(
  delay = 0,
  duration = 0.8
): Transition {
  return { duration, delay, ease: easeOutExpo };
}
