import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-2xl border bg-white px-4 text-sm text-slate-900 shadow-sm shadow-slate-900/5 transition-all duration-200 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
          error
            ? "border-rose-300 focus-visible:ring-rose-400/40"
            : "border-slate-200 hover:border-slate-300 focus-visible:border-violet-400",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
