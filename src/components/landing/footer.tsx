"use client";

import { type FormEvent, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { footerColumns } from "@/lib/data";
import { Button } from "@/components/ui/button";

interface SocialLink {
  label: string;
  href: string;
  icon: ReactNode;
}

const socialLinks: SocialLink[] = [
  {
    label: "X",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="5" strokeWidth="1.75" />
        <circle cx="12" cy="12" r="4" strokeWidth="1.75" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
        <path d="M6.5 8.5a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5zM5 10h3v9H5v-9zm5 0h2.9v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V19h-3v-4.1c0-.98-.02-2.24-1.37-2.24-1.37 0-1.58 1.07-1.58 2.17V19h-3v-9z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
      </svg>
    ),
  },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <footer className="relative border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr] lg:gap-16">
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-md shadow-violet-600/30">
                <span className="font-serif text-lg font-semibold text-white">
                  W
                </span>
              </span>
              <span className="text-lg font-semibold tracking-tight text-white">
                WedVisa
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              AI-powered wedding visa guidance for couples building a life across
              borders—private, secure, and beautifully simple.
            </p>

            <form onSubmit={onSubmit} className="mt-8 max-w-md">
              <p className="mb-3 text-sm font-semibold text-white">
                Newsletter
              </p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="h-11 flex-1 rounded-full border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-violet-400/50 focus:ring-2 focus:ring-violet-500/30"
                  aria-label="Email address"
                />
                <Button type="submit" variant="gradient" size="default">
                  Subscribe
                </Button>
              </div>
              {submitted ? (
                <motion.p
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-xs text-emerald-400"
                >
                  Thanks for subscribing—welcome to WedVisa.
                </motion.p>
              ) : null}
            </form>

            <div className="mt-8 flex items-center gap-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ y: -2, scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-white"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-semibold text-white">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-slate-400 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} WedVisa. All rights reserved. Not a law
            firm—informational guidance only.
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-slate-500">
            <Link href="#legal" className="transition hover:text-slate-300">
              Privacy
            </Link>
            <Link href="#legal" className="transition hover:text-slate-300">
              Terms
            </Link>
            <Link href="#legal" className="transition hover:text-slate-300">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
