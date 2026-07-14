import type { Metadata } from "next";
import Link from "next/link";
import { AuthShell } from "@/components/auth/auth-shell";
import { LoginForm } from "@/components/auth/login-form";

export const metadata: Metadata = {
  title: "Log in",
  description:
    "Sign in to your WedVisa account to continue your wedding visa journey.",
};

export default function LoginPage() {
  return (
    <AuthShell
      title="Welcome back"
      subtitle="Sign in to access your couple workspace and AI tools."
      footer={
        <>
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-violet-600 transition hover:text-violet-700"
          >
            Create one free
          </Link>
        </>
      }
    >
      <LoginForm />
    </AuthShell>
  );
}
