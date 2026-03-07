import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { SectionLayout } from "@/components/layout/SectionLayout";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";

export function Hero() {
    return (
        <SectionLayout className="min-h-[90vh] flex items-center pt-32 pb-16 lg:pt-24 lg:pb-12" background="transparent">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                {/* Left Side Structure (Typography & CTAs) */}
                <AnimatedReveal
                    stagger={true}
                    margin="-50px"
                    className="flex flex-col items-center text-center lg:items-start lg:text-left"
                >
                    <div className="inline-block mb-8 px-5 py-2 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-md">
                        <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-accent">
                            Excellence Over Speed • Radical Transparency
                        </span>
                    </div>

                    <h1
                        className="text-5xl sm:text-6xl md:text-8xl lg:text-[110px] font-black font-heading text-heading leading-[0.9] mb-10 tracking-tighter"
                    >
                        Where Art<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-heading via-heading/70 to-accent/90">
                            Meets Engineering.
                        </span>
                    </h1>

                    <p
                        className="text-xl sm:text-2xl text-subtext leading-relaxed max-w-xl mb-12 font-medium"
                    >
                        Making world-class web development accessible to ambitious businesses. We turn complex ideas into cinematic, high-performance digital reality.
                    </p>

                    <div
                        className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
                    >
                        <Link href="/contact" className="w-full sm:w-auto">
                            <Button variant="cta" size="xl" className="w-full sm:w-auto">
                                Start Your Project
                            </Button>
                        </Link>
                        <Link href="/portfolio" className="w-full sm:w-auto">
                            <Button variant="cta-outline" size="xl" className="w-full sm:w-auto">
                                View Portfolio
                            </Button>
                        </Link>
                    </div>
                </AnimatedReveal>

                {/* Right Side - Human Focused Visual & Success Pulse */}
                <AnimatedReveal
                    initial={{ opacity: 0, scale: 0.9, x: 20 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                    className="relative w-full max-w-2xl mx-auto lg:ml-0 group"
                >
                    {/* Main Visual Asset */}
                    <div className="relative rounded-[40px] border border-border bg-surface-alt overflow-hidden shadow-2xl shadow-black/60 aspect-square lg:aspect-[4/5] xl:aspect-square">
                        <Image
                            src="/images/hero-modern.png"
                            alt="DevOrica — Human centric digital growth visual showing strategic web engineering"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 640px"
                            priority
                            className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                    </div>

                    {/* Success Pulse - Floating Metrics */}
                    <div className="absolute -bottom-6 -left-6 md:-left-12 p-6 rounded-3xl border border-accent/20 bg-surface/80 backdrop-blur-xl shadow-2xl z-20 max-w-[200px]">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-2 h-2 rounded-full bg-accent animate-ping" />
                            <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Growth Pulse</span>
                        </div>
                        <div className="text-3xl font-black text-heading">+120%</div>
                        <div className="text-[10px] text-subtext font-medium leading-tight mt-1">Average ROI increase across partner portfolios</div>
                    </div>

                    <div className="absolute -top-6 -right-6 p-6 rounded-3xl border border-secondary-accent/20 bg-surface/80 backdrop-blur-xl shadow-2xl z-20">
                        <div className="text-2xl font-black text-heading italic">9.8<span className="text-secondary-accent">%</span></div>
                        <div className="text-[10px] text-subtext font-bold uppercase tracking-[0.1em]">Target Conversion</div>
                    </div>
                </AnimatedReveal>
            </div>
        </SectionLayout>
    );
}
