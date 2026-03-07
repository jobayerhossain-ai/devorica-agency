import { ArrowRight } from "lucide-react";
import { SectionLayout } from "@/components/layout/SectionLayout";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SERVICES } from "@/constants/data";
import Link from "next/link";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";

export function Services() {
    return (
        <SectionLayout id="services" background="dark" showGlow={true}>
            <AnimatedReveal className="mb-16 lg:mb-20">
                <SectionTitle
                    label="Success-Driven Solutions"
                    title="Strategic Engineering for Market-Defining Brands."
                    description="We don't just write code; we architect competitive advantages. Every solution is meticulously engineered to drive measurable business growth."
                    align="center"
                />
            </AnimatedReveal>

            <AnimatedReveal
                stagger={true}
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12"
            >
                {SERVICES.map((service) => {
                    const Icon = service.icon;
                    return (
                        <div
                            key={service.href}
                            className="group h-full"
                        >
                            <Link href={service.href} aria-label={`Learn more about ${service.title}`} className="block h-full transition-all duration-500 ease-out hover:-translate-y-2">
                                <div className="h-full flex flex-col relative overflow-hidden rounded-2xl bg-card-bg border border-border p-8 lg:p-10 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-accent/5 group-hover:border-accent/20">
                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="w-14 h-14 rounded-2xl border border-border bg-surface-alt flex items-center justify-center text-heading mb-10 group-hover:border-accent/40 group-hover:bg-accent/10 group-hover:text-accent transition-all duration-500 shadow-xl shadow-black/20">
                                            <Icon className="w-7 h-7" aria-hidden="true" />
                                        </div>

                                        <h3 className="text-2xl sm:text-3xl font-bold font-heading text-heading mb-6 tracking-tight group-hover:text-accent transition-colors duration-300">
                                            {service.title}
                                        </h3>

                                        <p className="text-subtext text-base sm:text-lg leading-relaxed mb-10 flex-grow font-medium">
                                            {service.description}
                                        </p>

                                        <div className="flex items-center text-[11px] font-bold text-subtext tracking-widest uppercase mt-auto group-hover:text-accent transition-all duration-300">
                                            Learn More Details
                                            <ArrowRight className="w-4 h-4 ml-3 transform group-hover:translate-x-2 transition-transform duration-500" aria-hidden="true" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </AnimatedReveal>
        </SectionLayout>
    );
}
