"use client";

import { motion } from "framer-motion";
import { Check, Download, FileText, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[90svh] w-full bg-[#f6efe7] overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center">
      {/* Blurred background bokeh overlay on the right */}
      <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[65%] pointer-events-none opacity-20 select-none">
        <img
          src="https://images.pexels.com/photos/948185/pexels-photo-948185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Wedding backdrop"
          className="h-full w-full object-cover blur-[8px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f6efe7] via-[#f6efe7]/95 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Text & Buttons */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center w-fit rounded-full border border-[#e85a23]/30 bg-[#e85a23]/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#e85a23]">
              <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[#e85a23]" />
              The Free UK Wedding Planner
            </div>

            {/* Heading */}
            <h1 className="mt-6 font-serif text-5xl font-medium leading-[1.08] tracking-tight text-[#000000] sm:text-6xl md:text-7.5xl">
              Plan your wedding <br />
              without the <span className="text-[#e85a23] italic">chaos.</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-700 sm:text-lg">
              Budget, guest list, timeline, suppliers — every part of your day in one
              calm place. Free to use, no account needed to start.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <Button
                asChild
                className="h-12 px-6 rounded-full bg-[#e85a23] text-white hover:bg-[#d04b19] font-medium shadow-md shadow-[#e85a23]/10 min-w-[200px]"
              >
                <Link href="/?auth=register">
                  <Play className="mr-2 h-3.5 w-3.5 fill-white text-white" />
                  Start planning free
                </Link>
              </Button>
              <Button
                asChild
                className="h-12 px-6 rounded-full border border-slate-300 bg-white/50 backdrop-blur-sm text-[#000000] hover:bg-white/80 font-medium min-w-[170px]"
              >
                <Link href="#features">
                  <Download className="mr-2 h-4 w-4" />
                  Try the free tools
                </Link>
              </Button>
            </div>

            {/* Sub-label under buttons */}
            <div className="mt-5 flex items-center gap-2 text-xs font-medium text-slate-500">
              <span className="text-[#e85a23] font-bold">✓</span>
              <span>No credit card. No sign-up wall. Start in seconds.</span>
            </div>
          </div>

          {/* Right Column: Polaroid Collage & Checklist Card */}
          <div className="lg:col-span-7 flex justify-center items-center">
            <div className="relative w-full max-w-[550px] h-[520px] md:h-[580px] flex items-center justify-center select-none">
              
              {/* Polaroid 1 (Top Left: Bouquet) */}
              <div className="absolute top-[3%] left-[8%] w-[130px] md:w-[150px] -rotate-12 bg-white p-2 pb-5 shadow-lg border border-slate-100/50">
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img
                    src="/1.png"
                    alt="Wedding"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Polaroid 2 (Top Right: Arch) */}
              <div className="absolute top-[1%] right-[10%] w-[120px] md:w-[140px] rotate-12 bg-white p-2 pb-5 shadow-lg border border-slate-100/50">
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img
                    src="/2.png"
                    alt="Wedding"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Polaroid 3 (Middle Left: Groom & Bride) */}
              <div className="absolute top-[28%] left-[2%] w-[140px] md:w-[160px] -rotate-6 bg-white p-2 pb-5 shadow-lg border border-slate-100/50">
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img
                    src="/3.png"
                    alt="Wedding"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Polaroid 4 (Middle Right: Candle Table) */}
              <div className="absolute top-[32%] right-[3%] w-[130px] md:w-[155px] rotate-8 bg-white p-2 pb-5 shadow-lg border border-slate-100/50">
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img
                    src="/4.png"
                    alt="Wedding"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Polaroid 5 (Bottom Left: Reception Lights) */}
              <div className="absolute bottom-[4%] left-[12%] w-[130px] md:w-[150px] rotate-6 bg-white p-2 pb-5 shadow-lg border border-slate-100/50">
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img
                    src="/1.png"
                    alt="Wedding"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Polaroid 6 (Bottom Right: Cake) */}
              <div className="absolute bottom-[3%] right-[12%] w-[120px] md:w-[140px] -rotate-3 bg-white p-2 pb-5 shadow-lg border border-slate-100/50">
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img
                    src="/2.png"
                    alt="Wedding"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              {/* Center Checklist Card */}
              <div className="relative z-10 w-[290px] md:w-[330px] bg-white rounded-3xl shadow-xl border border-slate-200/50">
                {/* Header (Black Background) */}
                <div className="bg-[#1c1613] p-4 text-white flex items-center justify-between rounded-t-3xl">
                  <div className="flex items-center gap-3">
                    {/* Circle avatar */}
                    <div className="h-8.5 w-8.5 rounded-full bg-[#e85a23] flex items-center justify-center text-xs font-bold text-white shadow-sm">
                      E&J
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-xs leading-none">Emma & Jack</h4>
                      <p className="text-[9px] text-slate-400 mt-1 leading-none">14 June 2027 – 280 days to go</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[9px] font-semibold text-slate-300">
                    Wedding day
                  </span>
                </div>

                {/* Body (White Background) */}
                <div className="p-4 flex flex-col gap-3.5 rounded-b-3xl">
                  {/* Planning Progress Row */}
                  <div className="flex flex-col gap-1.5 text-left">
                    <div className="flex justify-between text-[11px] font-semibold">
                      <span className="text-slate-500">Planning progress</span>
                      <span className="text-[#e85a23]">62%</span>
                    </div>
                    {/* Progress Bar */}
                    <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                      <div className="h-full w-[62%] rounded-full bg-[#e85a23]" />
                    </div>
                  </div>

                  {/* Checklist Items */}
                  <div className="flex flex-col gap-3">
                    {/* Item 1 */}
                    <div className="flex items-center justify-between text-left">
                      <div className="flex items-center gap-2.5">
                        <div className="h-5 w-5 rounded-full bg-[#4caf50] flex items-center justify-center text-white shrink-0">
                          <Check className="h-3 w-3 stroke-[3]" />
                        </div>
                        <span className="text-[11px] font-medium text-slate-800">Choose your venue</span>
                      </div>
                      <span className="text-[9px] font-semibold text-slate-400 shrink-0">Done</span>
                    </div>

                    {/* Item 2 */}
                    <div className="flex items-center justify-between text-left">
                      <div className="flex items-center gap-2.5">
                        <div className="h-5 w-5 rounded-full bg-[#4caf50] flex items-center justify-center text-white shrink-0">
                          <Check className="h-3 w-3 stroke-[3]" />
                        </div>
                        <span className="text-[11px] font-medium text-slate-800">Book photographer</span>
                      </div>
                      <span className="text-[9px] font-semibold text-slate-400 shrink-0">Done</span>
                    </div>

                    {/* Item 3 */}
                    <div className="flex items-center justify-between text-left">
                      <div className="flex items-center gap-2.5">
                        <div className="h-5 w-5 rounded-full border border-[#e85a23] flex items-center justify-center shrink-0">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#e85a23]" />
                        </div>
                        <span className="text-[11px] font-medium text-slate-800">Confirm caterer</span>
                      </div>
                      <span className="text-[9px] font-semibold text-[#e85a23] shrink-0">In progress</span>
                    </div>

                    {/* Item 4 */}
                    <div className="flex items-center justify-between text-left">
                      <div className="flex items-center gap-2.5">
                        <div className="h-5 w-5 rounded-full border border-slate-200 shrink-0" />
                        <span className="text-[11px] font-medium text-slate-400">Send save-the-dates</span>
                      </div>
                    </div>

                    {/* Item 5 */}
                    <div className="flex items-center justify-between text-left">
                      <div className="flex items-center gap-2.5">
                        <div className="h-5 w-5 rounded-full border border-slate-200 shrink-0" />
                        <span className="text-[11px] font-medium text-slate-400">Track guest RSVPs</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tasks Due Floaty Card (Bottom Right, nested absolute inside checklist card to overlap it perfectly) */}
                <div className="absolute -bottom-6 -right-6 md:-right-8 z-20 bg-white rounded-2xl shadow-xl border border-slate-200/50 p-3.5 flex items-center gap-3 w-[180px] text-left">
                  <div className="h-9 w-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                    <FileText className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <h5 className="font-semibold text-xs text-slate-900 truncate">3 tasks due</h5>
                    <p className="text-[9px] text-slate-400 mt-0.5">this month</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}