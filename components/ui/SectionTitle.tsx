import { cn } from "@/utils/cn";

interface SectionTitleProps {
    label: string;
    title: string;
    description?: string;
    align?: "left" | "center" | "right";
    className?: string;
}

export function SectionTitle({
    label,
    title,
    description,
    align = "center",
    className,
}: SectionTitleProps) {
    const alignments = {
        left: "text-left items-start",
        center: "text-center items-center mx-auto",
        right: "text-right items-end ml-auto",
    };

    return (
        <div className={cn("flex flex-col gap-4 max-w-2xl mb-16", alignments[align], className)}>
            <span className="text-secondary-accent font-semibold tracking-wider uppercase text-sm">
                {label}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-text leading-tight">
                {title}
            </h2>
            {description && (
                <p className="text-subtext text-lg">
                    {description}
                </p>
            )}
        </div>
    );
}
