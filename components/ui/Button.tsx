import { ComponentProps, forwardRef } from "react";
import { cn } from "@/utils/cn";

interface ButtonProps extends ComponentProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "cta" | "cta-outline";
    size?: "sm" | "md" | "lg" | "xl";
    showIcon?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", showIcon, children, ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface disabled:opacity-50 disabled:pointer-events-none group";

        const variants = {
            primary: "bg-gradient-to-br from-accent to-secondary-accent text-surface hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:-translate-y-0.5",
            secondary: "bg-foreground/10 text-foreground hover:bg-foreground/15 hover:-translate-y-0.5",
            outline: "border border-secondary-accent text-foreground hover:bg-foreground/5 hover:border-accent hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)]",
            ghost: "text-foreground-muted hover:text-foreground hover:bg-foreground/5",
            cta: "cta-animated",
            "cta-outline": "bg-secondary-accent/10 backdrop-blur-md border border-secondary-accent/30 text-secondary-accent hover:bg-secondary-accent/20 hover:border-secondary-accent/60 hover:shadow-[0_0_25px_rgba(99,102,241,0.3)] hover:-translate-y-1",
        };

        const sizes = {
            sm: "px-4 py-2 text-sm",
            md: "px-8 py-4 text-base",
            lg: "px-10 py-5 text-lg",
            xl: "px-8 py-4 text-lg h-14",
        };

        const isCTA = variant === "cta";

        if (isCTA) {
            return (
                <button
                    ref={ref}
                    className={cn(variants[variant], className)}
                    {...props}
                >
                    <span className="circle" aria-hidden="true">
                        <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">{children}</span>
                </button>
            );
        }

        return (
            <button
                ref={ref}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                {...props}
            >
                {children}
                {showIcon && (
                    <div className="ml-4 flex items-center justify-center transition-all duration-300">
                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor" />
                        </svg>
                    </div>
                )}
            </button>
        );
    }
);

Button.displayName = "Button";
