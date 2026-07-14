"use client";

import { Button } from "@/components/ui/button";

export function SocialButtons() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <Button
        type="button"
        variant="outlineDark"
        className="h-12 w-full rounded-2xl"
        onClick={() => undefined}
      >
        <GoogleIcon />
        Google
      </Button>
      <Button
        type="button"
        variant="outlineDark"
        className="h-12 w-full rounded-2xl"
        onClick={() => undefined}
      >
        <AppleIcon />
        Apple
      </Button>
    </div>
  );
}

export function AuthDivider({ label = "or continue with email" }: { label?: string }) {
  return (
    <div className="relative my-6">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-slate-200" />
      </div>
      <div className="relative flex justify-center text-xs uppercase tracking-wide">
        <span className="bg-white px-3 text-slate-400">{label}</span>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
      <path
        fill="#EA4335"
        d="M12 10.2v3.9h5.5c-.2 1.3-1.6 3.9-5.5 3.9-3.3 0-6-2.7-6-6s2.7-6 6-6c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.8 3.4 14.6 2.4 12 2.4 6.9 2.4 2.7 6.6 2.7 11.7S6.9 21 12 21c6.1 0 8.1-4.3 8.1-6.5 0-.4 0-.7-.1-1H12z"
      />
      <path
        fill="#34A853"
        d="M3.9 7.5l3.2 2.4C8 7.5 9.9 6 12 6c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.8 3.4 14.6 2.4 12 2.4 8.3 2.4 5.1 4.5 3.9 7.5z"
      />
      <path
        fill="#4A90E2"
        d="M12 21c2.5 0 4.6-.8 6.1-2.2l-3-2.4c-.8.6-1.9 1-3.1 1-3.1 0-5.7-2.1-6.6-4.9l-3.2 2.5C4 18.6 7.7 21 12 21z"
      />
      <path
        fill="#FBBC05"
        d="M5.4 12.5c0-.7.1-1.4.3-2L2.5 8c-.6 1.3-1 2.8-1 4.5s.4 3.2 1 4.5l3.2-2.5c-.2-.6-.3-1.3-.3-2z"
      />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
      <path d="M16.7 12.6c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.2-2.8.9-3.5.9s-1.8-.8-3-.8c-1.5 0-3 .9-3.8 2.3-1.6 2.8-.4 7 1.2 9.3.8 1.1 1.7 2.3 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7 2-1.1 2.8-2.2c.9-1.3 1.2-2.5 1.3-2.6-.1 0-2.4-.9-2.5-3.9zM14.5 5.7c.6-.8 1.1-1.9.9-3-1 .1-2.1.7-2.8 1.5-.6.7-1.1 1.8-.9 2.9 1 .1 2.1-.5 2.8-1.4z" />
    </svg>
  );
}
