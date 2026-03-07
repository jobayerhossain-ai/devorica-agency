import { SectionLayout } from "@/components/layout/SectionLayout";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PROCESS_STEPS } from "@/constants/data";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";

export function Process() {
    return (
        <SectionLayout id="process">
            <AnimatedReveal>
                <SectionTitle
                    label="Our Process"
                    title="From concept to execution in 5 steps."
                    description="A transparent, agile workflow designed to deliver results on time and on budget."
                />
            </AnimatedReveal>

            {/* Horizontal Timeline */}
            <div className="relative mt-20">
                {/* Connecting Line */}
                <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-0.5 bg-border" />

                <AnimatedReveal
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-accent/0 via-accent to-secondary-accent/0 origin-left"
                />

                <AnimatedReveal
                    stagger={true}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-6 relative z-10"
                >
                    {PROCESS_STEPS.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center group"
                        >
                            {/* Step Node */}
                            <div className="w-14 h-14 rounded-full bg-card-hover border-2 border-border flex items-center justify-center text-foreground font-bold font-heading mb-6 group-hover:border-accent group-hover:bg-accent/10 group-hover:text-accent transition-all duration-300 relative z-10 shadow-lg">
                                {item.step}
                            </div>
                            <h3 className="text-xl font-bold font-heading text-foreground mb-3 transition-colors group-hover:text-accent">{item.title}</h3>
                            <p className="text-foreground-muted text-sm">{item.desc}</p>
                        </div>
                    ))}
                </AnimatedReveal>
            </div>
        </SectionLayout>
    );
}
