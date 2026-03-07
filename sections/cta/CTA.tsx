"use client";

import { Button } from "@/components/ui/Button";
import { SectionLayout } from "@/components/layout/SectionLayout";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";

export function CTA() {
    return (
        <section className="relative overflow-hidden bg-[#050B14] py-32 lg:py-40 border-t border-white/5">
            {/* Extremely subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00E5FF]/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-[1280px] mx-auto px-6 relative z-10 w-full">
                <AnimatedReveal
                    stagger={true}
                    className="flex flex-col items-center text-center max-w-3xl mx-auto"
                >
                    <h2
                        className="text-5xl sm:text-6xl lg:text-7xl font-black font-heading text-white mb-6 tracking-tight leading-tight"
                    >
                        Ready to <span className="text-[#00E5FF]">evolve?</span>
                    </h2>

                    <p
                        className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed"
                    >
                        {"Let's"} discuss how Devorica can provide the technical leverage your business needs to outperform the competition.
                    </p>

                    <form className="w-full max-w-2xl flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Enter your business email"
                            required
                            className="flex-1 bg-[#0F172A] border border-white/10 text-white text-base rounded-xl px-6 py-4 outline-none focus:border-[#00E5FF]/50 focus:ring-1 focus:ring-[#00E5FF]/50 transition-all placeholder:text-gray-500"
                        />
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center font-bold text-sm tracking-wide rounded-xl transition-all duration-300 bg-[#00E5FF] text-black px-8 py-4 uppercase hover:bg-[#00E5FF] hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] whitespace-nowrap"
                        >
                            Book a Discovery Call
                        </button>
                    </form>
                </AnimatedReveal>
            </div>
        </section>
    );
}
