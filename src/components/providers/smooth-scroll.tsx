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

    // Snappier + less continuous interpolation work than 1.35s
    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.2,
      wheelMultiplier: 1,
      // Don't fight native gesture on trackpads as hard
      syncTouch: false,
    });

    lenis.on("scroll", (e) => {
      ScrollTrigger.update();
      const limit = e.limit || 1;
      cinematic.setScroll({
        y: e.scroll,
        progress: Math.min(1, e.scroll / limit),
        velocity: e.velocity,
      });
    });

    const tickerFn = (time: number) => {
      lenis.raf(time * 1000);
      const { nx, ny, sx, sy } = cinematic.pointer;
      if (Math.abs(nx - sx) > 0.0008 || Math.abs(ny - sy) > 0.0008) {
        cinematic.smoothPointer(0.12);
      }
    };
    gsap.ticker.add(tickerFn);
    gsap.ticker.lagSmoothing(1000, 16);

    document.documentElement.classList.add("lenis", "lenis-smooth");
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
      lenis.scrollTo(el as HTMLElement, { offset: -80, duration: 1.2 });
    };
    document.addEventListener("click", onAnchorClick);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const t = window.setTimeout(refresh, 800);

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
