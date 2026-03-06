import { ComponentProps, forwardRef } from "react";
import { cn } from "@/utils/cn";

interface ButtonProps extends ComponentProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:pointer-events-none";

        const variants = {
            primary: "bg-gradient-to-br from-accent to-secondary-accent text-primary hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:-translate-y-0.5",
            secondary: "bg-white/10 text-white hover:bg-white/15 hover:-translate-y-0.5",
            outline: "border border-secondary-accent text-text hover:bg-white/5 hover:border-accent hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)]",
            ghost: "text-subtext hover:text-white hover:bg-white/5",
        };

        const sizes = {
            sm: "px-4 py-2 text-sm",
            md: "px-8 py-4 text-base",
            lg: "px-10 py-5 text-lg",
        };

        return (
            <button
                ref={ref}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";
