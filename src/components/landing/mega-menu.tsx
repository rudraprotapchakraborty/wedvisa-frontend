"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { megaMenuItems } from "@/lib/data";
import { Button } from "@/components/ui/button";

interface MegaMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MegaMenu({ open, onClose }: MegaMenuProps) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -12, height: 0 }}
          animate={{ opacity: 1, y: 0, height: "auto" }}
          exit={{ opacity: 0, y: -8, height: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-0 right-0 top-full z-50 overflow-hidden"
          onMouseLeave={onClose}
        >
          <div className="border-t border-slate-100 bg-white/95 shadow-2xl shadow-slate-900/10 backdrop-blur-xl">
            <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-14">
              <div className="grid gap-3 sm:grid-cols-2">
                {megaMenuItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.04 * index, duration: 0.35 }}
                    >
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="group flex gap-4 rounded-2xl p-4 transition-all duration-300 hover:bg-violet-50/80"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-purple-600 text-white shadow-md shadow-violet-600/20 transition-transform duration-300 group-hover:scale-105">
                          <Icon className="h-5 w-5" strokeWidth={1.75} />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900 transition-colors group-hover:text-violet-700">
                            {item.title}
                          </p>
                          <p className="mt-1 text-sm leading-relaxed text-slate-500">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.12, duration: 0.4 }}
                className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 p-8 text-white shadow-xl"
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/15 blur-2xl" />
                <div className="pointer-events-none absolute -bottom-10 left-6 h-32 w-32 rounded-full bg-fuchsia-300/30 blur-2xl" />
                <div className="relative">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-medium leading-snug">
                    Your wedding visa,
                    <br />
                    intelligently guided
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/80">
                    Explore AI tools built for couples—eligibility, timelines,
                    documents, and interview prep in one elegant workspace.
                  </p>
                  <Button
                    asChild
                    variant="secondary"
                    size="lg"
                    className="mt-6"
                  >
                    <Link href="/register" onClick={onClose}>
                      Explore all services
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
