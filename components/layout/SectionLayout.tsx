import { ReactNode } from "react";
import { cn } from "@/utils/cn";
import { Section } from "@/components/ui/Section";

interface SectionLayoutProps {
    id?: string;
    className?: string;
    children: ReactNode;
    showGlow?: boolean;
    glowColor?: "accent" | "secondary";
    background?: "default" | "dark" | "transparent";
}

export function SectionLayout({
    id,
    className,
    children,
    showGlow = true,
    glowColor = "accent",
    background = "default"
}: SectionLayoutProps) {
    const bgStyles = {
        default: "bg-background",
        dark: "bg-surface-alt",
        transparent: "bg-transparent"
    };

    const glows = {
        accent: "bg-accent/10 lg:bg-accent/20 blur-[120px] lg:blur-[150px]",
        secondary: "bg-secondary-accent/10 lg:bg-secondary-accent/20 blur-[120px] lg:blur-[150px]"
    };

    return (
        <Section
            id={id}
            className={cn(
                "relative py-32 lg:py-24 overflow-hidden border-b border-border/20",
                bgStyles[background],
                className
            )}
        >
            {showGlow && (
                <>
                    <div className={cn("absolute top-0 right-0 w-full lg:w-1/2 h-1/2 rounded-full pointer-events-none mix-blend-screen", glows[glowColor])} />
                    <div className={cn("absolute bottom-0 left-0 w-full lg:w-1/2 h-1/2 rounded-full pointer-events-none mix-blend-screen opacity-50", glows[glowColor === "accent" ? "secondary" : "accent"])} />
                </>
            )}

            <div className="max-w-[1280px] mx-auto px-6 relative z-10 w-full">
                {children}
            </div>
        </Section>
    );
}
