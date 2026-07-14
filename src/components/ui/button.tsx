import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-violet-600 text-white shadow-lg shadow-violet-600/25 hover:bg-violet-500 hover:shadow-violet-500/30 hover:scale-[1.02]",
        secondary:
          "bg-white text-slate-900 shadow-md shadow-slate-900/5 hover:bg-slate-50 hover:scale-[1.02]",
        outline:
          "border border-white/40 bg-transparent text-white backdrop-blur-sm hover:bg-white/10 hover:border-white/60",
        outlineDark:
          "border border-slate-200 bg-white text-slate-900 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700",
        ghost: "text-slate-700 hover:bg-slate-100 hover:text-slate-900",
        gradient:
          "bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white shadow-lg shadow-violet-600/30 hover:shadow-violet-500/40 hover:scale-[1.02]",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-8 text-base",
        xl: "h-16 px-10 text-lg",
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
