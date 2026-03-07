import Image from "next/image";
import { SectionLayout } from "@/components/layout/SectionLayout";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TECH_STACK } from "@/constants/data";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";

export function TechnologyStack() {
    return (
        <SectionLayout background="dark">
            <AnimatedReveal>
                <SectionTitle
                    label="Technologies We Master"
                    title="Our Tech Stack."
                    description="We utilize the most powerful, modern frameworks to ensure your application runs seamlessly and scales infinitely."
                />
            </AnimatedReveal>

            <AnimatedReveal
                stagger={true}
                className="grid grid-cols-2 lg:grid-cols-6 gap-6 max-w-5xl mx-auto mt-20"
            >
                {TECH_STACK.map((tech, index) => (
                    <div
                        key={index}
                        className="group flex flex-col items-center justify-center p-8 bg-[#0F172A] border border-[#1F2937] rounded-2xl relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-accent/50 cursor-default"
                    >
                        {/* Hover Ambient Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-accent/20 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                        <div className="relative z-10 w-12 h-12 mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                            <Image
                                src={tech.logo}
                                alt={tech.name}
                                width={48}
                                height={48}
                                className="object-contain"
                                unoptimized
                            />
                        </div>
                        <span className="text-subtext font-medium group-hover:text-white transition-colors duration-300 relative z-10 text-center text-sm md:text-base">
                            {tech.name}
                        </span>
                    </div>
                ))}
            </AnimatedReveal>
        </SectionLayout>
    );
}
