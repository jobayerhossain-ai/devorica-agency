"use client";

import { motion } from "framer-motion";
import { fadeUpVariant, staggerContainer } from "@/animations/variants";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
    return (
        <Section className="relative min-h-[90vh] flex items-center pt-32 pb-16 lg:pt-24 lg:pb-12 overflow-hidden bg-[#0F172A]">
            {/* Background Ambient Glows */}
            <div className="absolute top-0 right-0 w-full lg:w-1/2 h-1/2 bg-accent/10 lg:bg-accent/20 blur-[120px] lg:blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-0 left-0 w-full lg:w-1/2 h-1/2 bg-secondary-accent/10 lg:bg-secondary-accent/20 blur-[120px] lg:blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

            <div className="max-w-[1280px] mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                {/* Left Side Structure (Typography & CTAs) */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="flex flex-col items-center text-center lg:items-start lg:text-left"
                >
                    <motion.div variants={fadeUpVariant} className="inline-block mb-8 px-5 py-2 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-md">
                        <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-accent">
                            Excellence Over Speed • Radical Transparency
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={fadeUpVariant}
                        className="text-5xl sm:text-6xl md:text-8xl lg:text-[110px] font-black font-heading text-white leading-[0.9] mb-10 tracking-tighter"
                    >
                        Where Art<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/70 to-accent/90">
                            Meets Engineering.
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={fadeUpVariant}
                        className="text-xl sm:text-2xl text-[#9CA3AF] leading-relaxed max-w-xl mb-12 font-medium"
                    >
                        Making world-class web development accessible to ambitious businesses. We turn complex ideas into cinematic, high-performance digital reality.
                    </motion.p>

                    <motion.div
                        variants={fadeUpVariant}
                        className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
                    >
                        <Link href="/contact" className="w-full sm:w-auto">
                            <button className="cta-button h-14 text-base px-6 sm:px-8 w-full sm:w-auto">
                                Start Your Project
                                <div className="cta-icon">
                                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor" />
                                    </svg>
                                </div>
                            </button>
                        </Link>
                        <Link href="/portfolio" className="w-full sm:w-auto">
                            <button className="cta-button-outline h-14 text-base px-6 sm:px-8 w-full sm:w-auto">
                                View Portfolio
                                <div className="cta-icon">
                                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor" />
                                    </svg>
                                </div>
                            </button>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Right Side - Human Focused Visual & Success Pulse */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                    className="relative w-full max-w-2xl mx-auto lg:ml-0 group"
                >
                    {/* Main Visual Asset */}
                    <div className="relative rounded-[40px] border border-white/10 bg-[#090909] overflow-hidden shadow-2xl shadow-black/60 aspect-square lg:aspect-[4/5] xl:aspect-square">
                        <Image
                            src="/images/hero-modern.png"
                            alt="DevOrica — Human centric digital growth visual showing strategic web engineering"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 640px"
                            priority
                            className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-60" />
                    </div>

                    {/* Success Pulse - Floating Metrics */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="absolute -bottom-6 -left-6 md:-left-12 p-6 rounded-3xl border border-accent/20 bg-[#0F172A]/80 backdrop-blur-xl shadow-2xl z-20 max-w-[200px]"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-2 h-2 rounded-full bg-accent animate-ping" />
                            <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Growth Pulse</span>
                        </div>
                        <div className="text-3xl font-black text-white">+120%</div>
                        <div className="text-[10px] text-[#9CA3AF] font-medium leading-tight mt-1">Average ROI increase across partner portfolios</div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="absolute -top-6 -right-6 p-6 rounded-3xl border border-secondary-accent/20 bg-[#0F172A]/80 backdrop-blur-xl shadow-2xl z-20"
                    >
                        <div className="text-2xl font-black text-white italic">9.8<span className="text-secondary-accent">%</span></div>
                        <div className="text-[10px] text-[#9CA3AF] font-bold uppercase tracking-[0.1em]">Target Conversion</div>
                    </motion.div>

                    {/* Decorative Elements */}
                    <div className="absolute -inset-10 bg-accent/10 blur-[100px] rounded-full -z-10 group-hover:bg-accent/15 transition-colors" />
                </motion.div>

            </div>
        </Section>
    );
}
