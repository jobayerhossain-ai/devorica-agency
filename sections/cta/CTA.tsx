"use client";

import { AnimatedReveal } from "@/components/ui/AnimatedReveal";

export function CTA() {
    return (
        <section className="relative overflow-hidden bg-surface py-32 lg:py-40 border-t border-border transition-colors duration-300">
            {/* Subtle theme-aware background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 blur-[150px] rounded-full pointer-events-none transition-colors duration-300" />

            <div className="max-w-[1280px] mx-auto px-6 relative z-10 w-full">
                <AnimatedReveal
                    stagger={true}
                    className="flex flex-col items-center text-center max-w-3xl mx-auto"
                >
                    <h2
                        className="text-5xl sm:text-6xl lg:text-7xl font-black font-heading text-foreground mb-6 tracking-tight leading-tight transition-colors duration-300"
                    >
                        Ready to <span className="text-accent transition-colors duration-300">evolve?</span>
                    </h2>

                    <p
                        className="text-lg sm:text-xl text-foreground-muted mb-12 max-w-2xl leading-relaxed transition-colors duration-300"
                    >
                        {"Let's"} discuss how Devorica can provide the technical leverage your business needs to outperform the competition.
                    </p>

                    <form className="w-full max-w-2xl flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Enter your business email"
                            required
                            className="flex-1 bg-surface-elevated border border-border text-foreground text-base rounded-xl px-6 py-4 outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all duration-300 placeholder:text-foreground-muted"
                        />
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center font-bold text-sm tracking-wide rounded-xl transition-all duration-300 bg-accent text-white dark:text-black px-8 py-4 uppercase hover:brightness-110 hover:-translate-y-0.5 shadow-lg hover:shadow-[0_0_20px_var(--t-accent)] whitespace-nowrap"
                        >
                            Book a Discovery Call
                        </button>
                    </form>
                </AnimatedReveal>
            </div>
        </section>
    );
}
