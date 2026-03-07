"use client";

import { useState } from "react";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";

export function CTA() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email.trim()) {
            setError("Please fill in this field.");
            return;
        }

        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        // Clear error and proceed with form submission logic
        setError("");
        console.log("Form submitted with:", email);
        // Add actual submission logic here...
    };

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

                    <form
                        className="w-full max-w-2xl flex flex-col sm:flex-row gap-4 relative"
                        onSubmit={handleSubmit}
                        noValidate
                    >
                        <div className="relative flex-1">
                            <input
                                type="email"
                                placeholder="Enter your business email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    if (error) setError(""); // Clear error as user types
                                }}
                                className={`w-full bg-surface-elevated border text-foreground text-base rounded-xl px-6 py-4 outline-none focus:ring-1 transition-all duration-300 placeholder:text-foreground-muted ${error
                                        ? "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/50"
                                        : "border-border focus:border-accent/50 focus:ring-accent/50"
                                    }`}
                            />
                            {/* Custom Error Tooltip */}
                            {error && (
                                <div className="absolute top-full left-0 mt-2 z-20 flex items-center gap-2 bg-[#2c1a1b] border border-red-500/30 text-[#fca5a5] text-sm px-4 py-2 rounded-lg shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
                                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-red-500/20">
                                        <svg className="w-3 h-3 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                    </div>
                                    <span className="font-medium">{error}</span>
                                </div>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center font-bold text-sm tracking-wide rounded-xl transition-all duration-300 bg-accent text-white dark:text-black px-8 py-4 uppercase hover:brightness-110 hover:-translate-y-0.5 shadow-lg hover:shadow-[0_0_20px_var(--t-accent)] whitespace-nowrap h-[58px]"
                        >
                            Book a Discovery Call
                        </button>
                    </form>
                </AnimatedReveal>
            </div>
        </section>
    );
}
