import { ComponentProps, forwardRef } from "react";
import { cn } from "@/utils/cn";

export const Divider = forwardRef<HTMLHRElement, ComponentProps<"hr">>(
    ({ className, ...props }, ref) => {
        return (
            <hr
                ref={ref}
                className={cn("w-full border-t border-[#1F2937]", className)}
                {...props}
            />
        );
    }
);

Divider.displayName = "Divider";
