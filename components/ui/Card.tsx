import { ComponentProps, forwardRef } from "react";
import { cn } from "@/utils/cn";

export const Card = forwardRef<HTMLDivElement, ComponentProps<"div">>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "bg-card-bg rounded-2xl p-8 border border-border transition-all duration-300",
                    "hover:-translate-y-2 hover:border-secondary-accent/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)]",
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Card.displayName = "Card";
