"use client";

import { type FormEvent, useState } from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/auth/password-input";
import {
  AuthDivider,
  SocialButtons,
} from "@/components/auth/social-buttons";

interface LoginFormState {
  email: string;
  password: string;
  remember: boolean;
}

export function LoginForm() {
  const [form, setForm] = useState<LoginFormState>({
    email: "",
    password: "",
    remember: true,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof LoginFormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = (): boolean => {
    const next: Partial<Record<keyof LoginFormState, string>> = {};
    if (!form.email.trim()) {
      next.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Enter a valid email address";
    }
    if (!form.password) {
      next.password = "Password is required";
    } else if (form.password.length < 8) {
      next.password = "Password must be at least 8 characters";
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
    await new Promise((resolve) => setTimeout(resolve, 900));

    setSubmitting(false);
    setSuccess(true);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <SocialButtons />
      <AuthDivider />

      <div>
        <Label htmlFor="login-email">Email</Label>
        <Input
          id="login-email"
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
        <div className="mb-2 flex items-center justify-between">
          <Label htmlFor="login-password" className="mb-0">
            Password
          </Label>
          <Link
            href="/login"
            className="text-xs font-medium text-violet-600 transition hover:text-violet-700"
          >
            Forgot password?
          </Link>
        </div>
        <PasswordInput
          id="login-password"
          name="password"
          autoComplete="current-password"
          placeholder="Enter your password"
          value={form.password}
          error={Boolean(errors.password)}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        {errors.password ? (
          <p className="mt-1.5 text-xs text-rose-600">{errors.password}</p>
        ) : null}
      </div>

      <label className="flex cursor-pointer items-center gap-2.5 text-sm text-slate-600">
        <input
          type="checkbox"
          checked={form.remember}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, remember: e.target.checked }))
          }
          className="h-4 w-4 rounded border-slate-300 text-violet-600 focus:ring-violet-500"
        />
        Keep me signed in
      </label>

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
            Signing in…
          </>
        ) : (
          "Sign in"
        )}
      </Button>

      {success ? (
        <p className="rounded-2xl bg-emerald-50 px-4 py-3 text-center text-sm text-emerald-700">
          Signed in successfully (demo). Connect your auth API next.
        </p>
      ) : null}
    </form>
  );
}
