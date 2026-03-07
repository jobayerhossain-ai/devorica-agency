import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { SectionLayout } from "@/components/layout/SectionLayout";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";

export function CTA() {
    return (
        <SectionLayout background="dark" className="relative overflow-hidden">
            {/* Inner Glow/Mesh Effect */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/20 blur-[120px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-secondary-accent/20 blur-[130px] rounded-full mix-blend-screen" />
            </div>

            <AnimatedReveal
                stagger={true}
                className="relative z-10 p-10 sm:p-14 lg:p-20 rounded-[40px] border border-glass-border bg-glass backdrop-blur-2xl overflow-hidden group shadow-2xl shadow-black/40"
            >
                {/* Hover Glow Effect */}
                <div className="absolute -inset-x-20 -top-20 h-40 bg-gradient-to-b from-accent/10 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="mb-10">
                        <span className="px-5 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent text-[11px] font-bold tracking-[0.2em] uppercase">
                            Global Partnership
                        </span>
                    </div>

                    <h2
                        className="text-4xl sm:text-5xl lg:text-7xl font-black font-heading text-heading mb-10 leading-[1.05] tracking-tighter"
                    >
                        Ready to scale your <br className="hidden lg:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-heading via-heading to-accent/80">
                            next digital success?
                        </span>
                    </h2>

                    <p
                        className="text-xl sm:text-2xl text-subtext mb-14 max-w-2xl leading-relaxed font-medium"
                    >
                        Partner with Devorica to transform your boldest vision into a market-dominating success story. Our strategic engineering team is ready to accelerate your ROI.
                    </p>

                    <div
                        className="flex flex-col sm:flex-row gap-5"
                    >
                        <Link href="/contact" className="w-full sm:w-auto">
                            <Button variant="cta" size="xl" className="w-full sm:w-auto">
                                Start Your Project
                            </Button>
                        </Link>
                        <Link href="/contact" className="w-full sm:w-auto">
                            <Button variant="cta-outline" size="xl" className="w-full sm:w-auto">
                                Contact Our Team
                            </Button>
                        </Link>
                    </div>
                </div>
            </AnimatedReveal>
        </SectionLayout>
    );
}
