import { ComponentProps, forwardRef } from "react";
import { cn } from "@/utils/cn";

export const Section = forwardRef<HTMLElement, ComponentProps<"section">>(
    ({ className, children, ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={cn("w-full py-20 md:py-32 relative overflow-hidden", className)}
                {...props}
            >
                <div className="max-w-[1280px] mx-auto px-6 w-full h-full relative z-10">
                    {children}
                </div>
            </section>
        );
    }
);

Section.displayName = "Section";
