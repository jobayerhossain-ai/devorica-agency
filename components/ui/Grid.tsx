import { ComponentProps, forwardRef } from "react";
import { cn } from "@/utils/cn";

export const Grid = forwardRef<HTMLDivElement, ComponentProps<"div">>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6", className)}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Grid.displayName = "Grid";
