import { ComponentProps, forwardRef } from "react";
import { cn } from "@/utils/cn";

export const Divider = forwardRef<HTMLHRElement, ComponentProps<"hr">>(
    ({ className, ...props }, ref) => {
        return (
            <hr
                ref={ref}
                className={cn("w-full border-t border-border", className)}
                {...props}
            />
        );
    }
);

Divider.displayName = "Divider";
