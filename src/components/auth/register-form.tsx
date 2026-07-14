"use client";

import { type FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import { Check, Loader2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/auth/password-input";
import {
  AuthDivider,
  SocialButtons,
} from "@/components/auth/social-buttons";
import { cn } from "@/lib/utils";

interface RegisterFormState {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

type FieldErrors = Partial<Record<keyof RegisterFormState, string>>;

export function RegisterForm() {
  const [form, setForm] = useState<RegisterFormState>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const passwordChecks = useMemo(
    () => [
      {
        label: "At least 8 characters",
        ok: form.password.length >= 8,
      },
      {
        label: "Contains a number",
        ok: /\d/.test(form.password),
      },
      {
        label: "Contains a letter",
        ok: /[a-zA-Z]/.test(form.password),
      },
    ],
    [form.password]
  );

  const validate = (): boolean => {
    const next: FieldErrors = {};

    if (!form.fullName.trim()) {
      next.fullName = "Full name is required";
    } else if (form.fullName.trim().length < 2) {
      next.fullName = "Enter your full name";
    }

    if (!form.email.trim()) {
      next.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Enter a valid email address";
    }

    if (!form.password) {
      next.password = "Password is required";
    } else if (form.password.length < 8 || !/\d/.test(form.password) || !/[a-zA-Z]/.test(form.password)) {
      next.password = "Password does not meet requirements";
    }

    if (!form.confirmPassword) {
      next.confirmPassword = "Confirm your password";
    } else if (form.confirmPassword !== form.password) {
      next.confirmPassword = "Passwords do not match";
    }

    if (!form.acceptTerms) {
      next.acceptTerms = "Please accept the terms to continue";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setSuccess(false);

    // UI-only auth demo — wire to your API later
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitting(false);
    setSuccess(true);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <SocialButtons />
      <AuthDivider label="or register with email" />

      <div>
        <Label htmlFor="register-name">Full name</Label>
        <Input
          id="register-name"
          name="fullName"
          autoComplete="name"
          placeholder="Alex Rivera"
          value={form.fullName}
          error={Boolean(errors.fullName)}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, fullName: e.target.value }))
          }
        />
        {errors.fullName ? (
          <p className="mt-1.5 text-xs text-rose-600">{errors.fullName}</p>
        ) : null}
      </div>

      <div>
        <Label htmlFor="register-email">Email</Label>
        <Input
          id="register-email"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={form.email}
          error={Boolean(errors.email)}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        {errors.email ? (
          <p className="mt-1.5 text-xs text-rose-600">{errors.email}</p>
        ) : null}
      </div>

      <div>
        <Label htmlFor="register-password">Password</Label>
        <PasswordInput
          id="register-password"
          name="password"
          autoComplete="new-password"
          placeholder="Create a strong password"
          value={form.password}
          error={Boolean(errors.password)}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        <ul className="mt-2.5 space-y-1">
          {passwordChecks.map((check) => (
            <li
              key={check.label}
              className={cn(
                "flex items-center gap-1.5 text-xs",
                check.ok ? "text-emerald-600" : "text-slate-400"
              )}
            >
              {check.ok ? (
                <Check className="h-3 w-3" />
              ) : (
                <X className="h-3 w-3" />
              )}
              {check.label}
            </li>
          ))}
        </ul>
        {errors.password ? (
          <p className="mt-1.5 text-xs text-rose-600">{errors.password}</p>
        ) : null}
      </div>

      <div>
        <Label htmlFor="register-confirm">Confirm password</Label>
        <PasswordInput
          id="register-confirm"
          name="confirmPassword"
          autoComplete="new-password"
          placeholder="Re-enter your password"
          value={form.confirmPassword}
          error={Boolean(errors.confirmPassword)}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, confirmPassword: e.target.value }))
          }
        />
        {errors.confirmPassword ? (
          <p className="mt-1.5 text-xs text-rose-600">{errors.confirmPassword}</p>
        ) : null}
      </div>

      <div>
        <label className="flex cursor-pointer items-start gap-2.5 text-sm text-slate-600">
          <input
            type="checkbox"
            checked={form.acceptTerms}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, acceptTerms: e.target.checked }))
            }
            className="mt-0.5 h-4 w-4 rounded border-slate-300 text-violet-600 focus:ring-violet-500"
          />
          <span>
            I agree to the{" "}
            <Link href="#legal" className="font-medium text-violet-600 hover:text-violet-700">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#legal" className="font-medium text-violet-600 hover:text-violet-700">
              Privacy Policy
            </Link>
          </span>
        </label>
        {errors.acceptTerms ? (
          <p className="mt-1.5 text-xs text-rose-600">{errors.acceptTerms}</p>
        ) : null}
      </div>

      <Button
        type="submit"
        variant="gradient"
        size="lg"
        className="h-12 w-full rounded-2xl"
        disabled={submitting}
      >
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Creating account…
          </>
        ) : (
          "Create free account"
        )}
      </Button>

      {success ? (
        <p className="rounded-2xl bg-emerald-50 px-4 py-3 text-center text-sm text-emerald-700">
          Account created (demo). Connect your auth API next.
        </p>
      ) : null}
    </form>
  );
}
