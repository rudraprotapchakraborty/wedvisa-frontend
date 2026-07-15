"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cinematic } from "@/lib/cinematic-store";

let gsapRegistered = false;

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) return;

    if (!gsapRegistered) {
      gsap.registerPlugin(ScrollTrigger);
      gsapRegistered = true;
    }

    const lenis = new Lenis({
      duration: 1.35,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.35,
      wheelMultiplier: 0.92,
    });

    // Bridge Lenis ↔ GSAP ScrollTrigger
    lenis.on("scroll", (e) => {
      ScrollTrigger.update();
      const limit = e.limit || 1;
      cinematic.setScroll({
        y: e.scroll,
        progress: Math.min(1, e.scroll / limit),
        velocity: e.velocity,
      });
    });

    // Drive Lenis from GSAP ticker for shared clock
    const tickerFn = (time: number) => {
      lenis.raf(time * 1000);
      cinematic.smoothPointer(0.09);
    };
    gsap.ticker.add(tickerFn);
    gsap.ticker.lagSmoothing(0);

    document.documentElement.classList.add("lenis", "lenis-smooth");

    // Expose for optional external control
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    const onPointer = (e: PointerEvent) => {
      cinematic.setPointer(e.clientX, e.clientY);
    };
    window.addEventListener("pointermove", onPointer, { passive: true });

    const onAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.(
        'a[href^="#"]'
      ) as HTMLAnchorElement | null;
      if (!anchor) return;
      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: -80, duration: 1.6 });
    };
    document.addEventListener("click", onAnchorClick);

    // Refresh after images/layout settle
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const t = window.setTimeout(refresh, 600);

    return () => {
      window.clearTimeout(t);
      window.removeEventListener("load", refresh);
      window.removeEventListener("pointermove", onPointer);
      document.removeEventListener("click", onAnchorClick);
      gsap.ticker.remove(tickerFn);
      document.documentElement.classList.remove("lenis", "lenis-smooth");
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
      lenis.destroy();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return <>{children}</>;
}
