"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Shield, Sparkles } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";

interface AuthShellProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  footer?: ReactNode;
}

const highlights = [
  "AI eligibility guidance",
  "Secure private workspace",
  "Document & timeline tools",
];

export function AuthShell({ children, title, subtitle, footer }: AuthShellProps) {
  return (
    <div className="relative min-h-full flex-1 bg-slate-50">
      <div className="relative mx-auto grid min-h-[100svh] w-full max-w-7xl lg:grid-cols-2">
        {/* Brand panel */}
        <div className="relative hidden overflow-hidden bg-slate-900 p-10 text-white lg:flex lg:flex-col lg:justify-between lg:p-14">

          <div className="relative">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-lg transition-transform duration-300 group-hover:scale-105 overflow-hidden">
                <Image
                  src={logo}
                  alt="WedVisa Logo"
                  fill
                  sizes="40px"
                  className="object-cover"
                  priority
                />
              </span>
              <span className="text-xl font-semibold tracking-tight">
                WedVisa
              </span>
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mt-16 max-w-md"
            >
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5" />
                AI-powered wedding visa platform
              </p>
              <h1 className="font-serif text-4xl font-medium leading-tight tracking-tight xl:text-5xl">
                Your journey together, guided with care.
              </h1>
              <p className="mt-5 text-base leading-relaxed text-white/80">
                Organize evidence, generate documents, and prepare for interviews
                in one private, beautiful workspace built for couples.
              </p>
            </motion.div>
          </div>

          <motion.ul
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.55 }}
            className="relative space-y-3"
          >
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-sm font-medium text-white/90"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                  <CheckCircle2 className="h-4 w-4" />
                </span>
                {item}
              </li>
            ))}
            <li className="mt-6 flex items-center gap-2 text-xs text-white/70">
              <Shield className="h-3.5 w-3.5" />
              Private · Encrypted · Built for couples
            </li>
          </motion.ul>
        </div>

        {/* Form panel */}
        <div className="relative flex flex-col justify-center px-4 py-10 sm:px-8 lg:px-12 xl:px-20">
          <div className="mb-8 flex items-center justify-between lg:hidden">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-white border border-slate-200/50 shadow-md transition-transform duration-300 group-hover:scale-105 overflow-hidden">
                <Image
                  src={logo}
                  alt="WedVisa Logo"
                  fill
                  sizes="36px"
                  className="object-cover"
                  priority
                />
              </span>
              <span className="text-lg font-semibold text-slate-900">
                WedVisa
              </span>
            </Link>
            <Link
              href="/"
              className="text-sm font-medium text-slate-500 transition hover:text-violet-700"
            >
              Back home
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto w-full max-w-md"
          >
            <div className="mb-8">
              <h2 className="font-serif text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl">
                {title}
              </h2>
              <p className="mt-2 text-base text-slate-600">{subtitle}</p>
            </div>

            <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8">
              {children}
            </div>

            {footer ? (
              <div className="mt-6 text-center text-sm text-slate-600">
                {footer}
              </div>
            ) : null}

            <p className="mt-8 hidden text-center text-xs text-slate-400 lg:block">
              <Link href="/" className="transition hover:text-violet-600">
                ← Back to homepage
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
