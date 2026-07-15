"use client";

import { type FormEvent, useState, useEffect } from "react";
import { X, Eye, EyeOff, Loader2 } from "lucide-react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { motion, AnimatePresence } from "framer-motion";
import { easeOutExpo } from "@/lib/motion";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: "signin" | "signup";
  setActiveTab: (tab: "signin" | "signup") => void;
}

export function AuthModal({
  isOpen,
  onClose,
  activeTab,
  setActiveTab,
}: AuthModalProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setEmail("");
      setPassword("");
      setName("");
      setErrors({});
      setSuccess(false);
      setShowPassword(false);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  const validate = (): boolean => {
    const next: Record<string, string> = {};
    if (!email.trim()) {
      next.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "Enter a valid email address";
    }

    if (!password) {
      next.password = "Password is required";
    } else if (password.length < 8) {
      next.password = "Password must be at least 8 characters";
    }

    if (activeTab === "signup" && !name.trim()) {
      next.name = "Name is required";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setSuccess(false);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitting(false);
    setSuccess(true);
  };

  const inputClass = (hasError: boolean) =>
    `w-full h-12 bg-[var(--background)] px-4 rounded-xl text-sm font-medium text-slate-900 border transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent-ring)] ${
      hasError
        ? "border-rose-300"
        : "border-[var(--border)] focus:border-[var(--accent)]/40"
    }`;

  return (
    <AnimatePresence>
      {isOpen ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="auth-modal-title"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 cursor-pointer bg-slate-900/50 backdrop-blur-md"
          />

          <motion.div
            initial={{ scale: 0.96, opacity: 0, y: 12 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0, y: 12 }}
            transition={{ duration: 0.4, ease: easeOutExpo }}
            className="relative z-10 flex w-full max-w-[440px] flex-col rounded-[2rem] border border-[var(--border)] bg-white p-8 shadow-[var(--shadow-xl)] sm:p-10"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-6 top-6 cursor-pointer rounded-full p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mt-1 flex flex-col items-center select-none">
              <div className="flex items-center gap-2">
                <div className="relative h-8 w-8 overflow-hidden">
                  <Image
                    src={logo}
                    alt="WedVisa Logo"
                    className="object-contain"
                    width={32}
                    height={32}
                    priority
                  />
                </div>
                <span
                  id="auth-modal-title"
                  className="text-[22px] font-bold leading-none tracking-tight text-slate-900"
                >
                  wed<span className="text-[var(--accent)]">visa</span>
                </span>
              </div>
              <p className="mt-3.5 text-[13px] font-medium text-slate-500">
                {activeTab === "signin" ? "Welcome back" : "Join Wedvisa"}
              </p>
            </div>

            <div className="relative mt-7 flex border-b border-[var(--border)]">
              {(["signin", "signup"] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => {
                    setActiveTab(tab);
                    setErrors({});
                    setSuccess(false);
                  }}
                  className={`flex-1 cursor-pointer pb-3 text-center text-[14.5px] font-bold transition-colors duration-300 ${
                    activeTab === tab
                      ? "text-[var(--accent)]"
                      : "text-slate-400 hover:text-slate-800"
                  }`}
                >
                  {tab === "signin" ? "Sign in" : "Create account"}
                </button>
              ))}
              <motion.div
                className="absolute bottom-0 h-0.5 bg-[var(--accent)]"
                animate={{ left: activeTab === "signin" ? "0%" : "50%" }}
                transition={{ duration: 0.35, ease: easeOutExpo }}
                style={{ width: "50%" }}
              />
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-7 flex flex-col gap-5"
              noValidate
            >
              {activeTab === "signup" && (
                <div className="flex flex-col items-start text-left">
                  <label
                    htmlFor="auth-name"
                    className="mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-500"
                  >
                    Your Name
                  </label>
                  <input
                    id="auth-name"
                    type="text"
                    placeholder="e.g. Emma Davies"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="name"
                    className={inputClass(!!errors.name)}
                  />
                  {errors.name && (
                    <span className="mt-1.5 text-[11px] font-medium text-rose-500">
                      {errors.name}
                    </span>
                  )}
                </div>
              )}

              <div className="flex flex-col items-start text-left">
                <label
                  htmlFor="auth-email"
                  className="mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-500"
                >
                  Email Address
                </label>
                <input
                  id="auth-email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  className={inputClass(!!errors.email)}
                />
                {errors.email && (
                  <span className="mt-1.5 text-[11px] font-medium text-rose-500">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="flex flex-col items-start text-left">
                <label
                  htmlFor="auth-password"
                  className="mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-500"
                >
                  {activeTab === "signin" ? "Password" : "Create Password"}
                </label>
                <div className="relative w-full">
                  <input
                    id="auth-password"
                    type={showPassword ? "text" : "password"}
                    placeholder={
                      activeTab === "signin"
                        ? "Enter your password"
                        : "At least 8 characters"
                    }
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete={
                      activeTab === "signin" ? "current-password" : "new-password"
                    }
                    className={`${inputClass(!!errors.password)} pr-12`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3.5 top-1/2 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full text-slate-400 transition-colors hover:text-slate-600"
                    tabIndex={-1}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <span className="mt-1.5 text-[11px] font-medium text-rose-500">
                    {errors.password}
                  </span>
                )}
              </div>

              {activeTab === "signin" && (
                <div className="-mt-1 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-[12.5px] font-semibold text-[var(--accent)] transition-colors hover:text-[var(--accent-hover)]"
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="light-sweep mt-1 flex h-[52px] cursor-pointer items-center justify-center gap-2 rounded-xl bg-[var(--accent)] text-[14.5px] font-bold text-white shadow-[var(--shadow-accent)] transition-colors hover:bg-[var(--accent-hover)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>
                      {activeTab === "signin"
                        ? "Signing in..."
                        : "Creating account..."}
                    </span>
                  </>
                ) : (
                  <span>
                    {activeTab === "signin" ? "Sign in" : "Create account"}
                  </span>
                )}
              </button>

              {success && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl border border-emerald-100 bg-emerald-50 p-3 text-center text-[12px] font-medium text-emerald-700"
                >
                  {activeTab === "signin"
                    ? "Logged in successfully (Demo)!"
                    : "Account created successfully (Demo)!"}
                </motion.div>
              )}

              {activeTab === "signup" && (
                <p className="px-4 text-center text-[10px] font-medium leading-relaxed text-slate-400">
                  By creating an account you agree to our{" "}
                  <a
                    href="#terms"
                    className="underline transition-colors hover:text-slate-600"
                  >
                    Terms
                  </a>{" "}
                  and{" "}
                  <a
                    href="#privacy"
                    className="underline transition-colors hover:text-slate-600"
                  >
                    Privacy Policy
                  </a>
                </p>
              )}

              <div className="mt-1 border-t border-[var(--border)] pt-5 text-center">
                {activeTab === "signin" ? (
                  <p className="text-[12.5px] font-medium text-slate-500">
                    Don&apos;t have an account?{" "}
                    <button
                      type="button"
                      onClick={() => {
                        setActiveTab("signup");
                        setErrors({});
                        setSuccess(false);
                      }}
                      className="cursor-pointer font-bold text-[var(--accent)] transition-colors hover:text-[var(--accent-hover)]"
                    >
                      Create one free
                    </button>
                  </p>
                ) : (
                  <p className="text-[12.5px] font-medium text-slate-500">
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => {
                        setActiveTab("signin");
                        setErrors({});
                        setSuccess(false);
                      }}
                      className="cursor-pointer font-bold text-[var(--accent)] transition-colors hover:text-[var(--accent-hover)]"
                    >
                      Sign in
                    </button>
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
