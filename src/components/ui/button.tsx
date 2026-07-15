"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold tracking-[-0.01em] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] select-none",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--accent)] text-white shadow-[var(--shadow-accent)] hover:bg-[var(--accent-hover)] hover:shadow-[0_16px_40px_-10px_rgba(196,83,29,0.4)] hover:-translate-y-px",
        secondary:
          "bg-white text-slate-900 shadow-[var(--shadow-md)] border border-[var(--border)] hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-px",
        outline:
          "border border-white/30 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10 hover:border-white/50",
        outlineDark:
          "border border-[var(--border-strong)] bg-transparent text-slate-900 hover:bg-white hover:border-slate-300 hover:shadow-[var(--shadow-sm)]",
        ghost:
          "text-slate-700 hover:bg-slate-900/[0.04] hover:text-slate-900",
        dark: "bg-slate-900 text-[var(--foreground-on-dark)] shadow-[var(--shadow-lg)] hover:bg-slate-800 hover:-translate-y-px",
        gradient:
          "bg-[var(--accent)] text-white shadow-[var(--shadow-accent)] hover:bg-[var(--accent-hover)] hover:-translate-y-px",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-7 text-[0.9375rem]",
        xl: "h-14 px-9 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
