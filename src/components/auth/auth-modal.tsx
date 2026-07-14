"use client";

import { type FormEvent, useState, useEffect } from "react";
import { X, Eye, EyeOff, Loader2 } from "lucide-react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { motion, AnimatePresence } from "framer-motion";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: "signin" | "signup";
  setActiveTab: (tab: "signin" | "signup") => void;
}

export function AuthModal({ isOpen, onClose, activeTab, setActiveTab }: AuthModalProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      // Reset form states on close
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

  if (!isOpen) return null;

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

    // Mock API request
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitting(false);
    setSuccess(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/40 backdrop-blur-xs cursor-pointer"
        />

        {/* Modal card */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-[440px] bg-white rounded-[32px] p-8 sm:p-10 shadow-2xl border border-slate-100 flex flex-col z-10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-6 top-6 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Logo */}
          <div className="flex flex-col items-center select-none mt-2">
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
              <span className="text-[22px] font-bold tracking-tight text-[#000000] font-sans leading-none">
                wed<span className="text-[#e85a23]">visa</span>
              </span>
            </div>
            <p className="mt-3.5 text-[13px] text-slate-500 font-medium">
              {activeTab === "signin" ? "Welcome back" : "Join Wedvisa"}
            </p>
          </div>

          {/* Tabs Navigation */}
          <div className="flex border-b border-slate-100 mt-6.5 relative">
            <button
              onClick={() => {
                setActiveTab("signin");
                setErrors({});
                setSuccess(false);
              }}
              className={`flex-1 text-center pb-3 text-[14.5px] font-bold transition-colors duration-200 cursor-pointer ${
                activeTab === "signin" ? "text-[#e85a23]" : "text-slate-450 hover:text-slate-800"
              }`}
            >
              Sign in
            </button>
            <button
              onClick={() => {
                setActiveTab("signup");
                setErrors({});
                setSuccess(false);
              }}
              className={`flex-1 text-center pb-3 text-[14.5px] font-bold transition-colors duration-200 cursor-pointer ${
                activeTab === "signup" ? "text-[#e85a23]" : "text-slate-450 hover:text-slate-800"
              }`}
            >
              Create account
            </button>
            {/* Slide bar */}
            <div
              className="absolute bottom-0 h-[2px] bg-[#e85a23] transition-all duration-300 ease-out"
              style={{
                width: "50%",
                left: activeTab === "signin" ? "0%" : "50%",
              }}
            />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-7 flex flex-col gap-5.5" noValidate>
            {/* Tab 2 Only: YOUR NAME */}
            {activeTab === "signup" && (
              <div className="flex flex-col items-start text-left">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Emma Davies"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full h-12 bg-[#faf6f0] px-4 rounded-xl text-sm font-medium text-slate-900 border ${
                    errors.name ? "border-rose-300 focus:outline-rose-450" : "border-[#dfd2c4]/40 focus:outline-[#e85a23]/60"
                  }`}
                />
                {errors.name && (
                  <span className="text-[11px] text-rose-500 mt-1.5 font-medium">{errors.name}</span>
                )}
              </div>
            )}

            {/* EMAIL ADDRESS */}
            <div className="flex flex-col items-start text-left">
              <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full h-12 bg-[#faf6f0] px-4 rounded-xl text-sm font-medium text-slate-900 border ${
                  errors.email ? "border-rose-300 focus:outline-rose-450" : "border-[#dfd2c4]/40 focus:outline-[#e85a23]/60"
                }`}
              />
              {errors.email && (
                <span className="text-[11px] text-rose-500 mt-1.5 font-medium">{errors.email}</span>
              )}
            </div>

            {/* PASSWORD / CREATE PASSWORD */}
            <div className="flex flex-col items-start text-left">
              <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                {activeTab === "signin" ? "Password" : "Create Password"}
              </label>
              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder={activeTab === "signin" ? "Enter your password" : "At least 8 characters"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full h-12 bg-[#faf6f0] pl-4 pr-12 rounded-xl text-sm font-medium text-slate-900 border ${
                    errors.password ? "border-rose-300 focus:outline-rose-450" : "border-[#dfd2c4]/40 focus:outline-[#e85a23]/60"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center justify-center h-8 w-8 rounded-full text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
                </button>
              </div>
              {errors.password && (
                <span className="text-[11px] text-rose-500 mt-1.5 font-medium">{errors.password}</span>
              )}
            </div>

            {/* Forgot Password Link (Sign in only) */}
            {activeTab === "signin" && (
              <div className="flex justify-end -mt-2">
                <button
                  type="button"
                  className="text-[12.5px] font-semibold text-[#e85a23] hover:text-[#d04b19] transition-colors cursor-pointer"
                >
                  Forgot password?
                </button>
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full h-[52px] bg-[#d04b19] text-white hover:bg-[#b83f12] disabled:bg-slate-350 transition-colors rounded-xl font-bold text-[14.5px] shadow-sm shadow-[#d04b19]/15 flex items-center justify-center gap-2 cursor-pointer mt-1"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-4.5 w-4.5 animate-spin" />
                  <span>{activeTab === "signin" ? "Signing in..." : "Creating account..."}</span>
                </>
              ) : (
                <span>{activeTab === "signin" ? "Sign in" : "Create account"}</span>
              )}
            </button>

            {/* Success state demo feedback */}
            {success && (
              <div className="text-[12px] bg-emerald-50 text-emerald-700 rounded-xl p-3 text-center border border-emerald-100 font-medium">
                {activeTab === "signin" ? "Logged in successfully (Demo)!" : "Account created successfully (Demo)!"}
              </div>
            )}

            {/* Disclaimer (Register only) */}
            {activeTab === "signup" && (
              <p className="text-[10px] text-slate-400 font-medium leading-relaxed text-center px-4">
                By creating an account you agree to our{" "}
                <a href="#terms" className="underline hover:text-slate-600 transition-colors">Terms</a> and{" "}
                <a href="#privacy" className="underline hover:text-slate-600 transition-colors">Privacy Policy</a>
              </p>
            )}

            {/* Bottom Swapper Link */}
            <div className="text-center mt-1 border-t border-slate-100 pt-5">
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
                    className="font-bold text-[#e85a23] hover:text-[#d04b19] transition-colors cursor-pointer"
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
                    className="font-bold text-[#e85a23] hover:text-[#d04b19] transition-colors cursor-pointer"
                  >
                    Sign in
                  </button>
                </p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
