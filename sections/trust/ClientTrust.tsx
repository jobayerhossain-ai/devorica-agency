import { SectionLayout } from "@/components/layout/SectionLayout";
import { CLIENT_TRUST_STATS } from "@/constants/data";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";

export function ClientTrust() {
    return (
        <SectionLayout className="py-12 !border-b-0" background="dark" showGlow={false}>
            <AnimatedReveal stagger={true} className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-border">
                {CLIENT_TRUST_STATS.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center px-4 py-8 md:py-4 transition-transform hover:scale-105 duration-300"
                        >
                            <div className="mb-4 p-3 rounded-full bg-accent/10">
                                <Icon className="w-8 h-8 text-accent" aria-hidden="true" />
                            </div>
                            <h3 className="text-xl font-bold font-heading text-foreground mb-2">
                                {stat.title}
                            </h3>
                            <p className="text-foreground-muted font-medium text-sm">
                                {stat.description}
                            </p>
                        </div>
                    );
                })}
            </AnimatedReveal>
        </SectionLayout>
    );
}
