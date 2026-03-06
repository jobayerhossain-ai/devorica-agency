import { ComponentProps, forwardRef } from "react";
import { cn } from "@/utils/cn";

export const Badge = forwardRef<HTMLSpanElement, ComponentProps<"span">>(
    ({ className, children, ...props }, ref) => {
        return (
            <span
                ref={ref}
                className={cn(
                    "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-text",
                    className
                )}
                {...props}
            >
                {children}
            </span>
        );
    }
);

Badge.displayName = "Badge";
