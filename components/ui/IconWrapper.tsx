import { ComponentProps, forwardRef } from "react";
import { cn } from "@/utils/cn";

interface IconWrapperProps extends ComponentProps<"div"> {
    size?: "sm" | "md" | "lg";
}

export const IconWrapper = forwardRef<HTMLDivElement, IconWrapperProps>(
    ({ className, size = "md", children, ...props }, ref) => {
        const sizes = {
            sm: "w-8 h-8 rounded-md",
            md: "w-12 h-12 rounded-lg",
            lg: "w-16 h-16 rounded-xl",
        };

        return (
            <div
                ref={ref}
                className={cn(
                    "flex items-center justify-center bg-white/5 border border-white/10 text-accent",
                    sizes[size],
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);

IconWrapper.displayName = "IconWrapper";
