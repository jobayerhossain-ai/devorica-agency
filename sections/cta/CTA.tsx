"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { fadeUpVariant, staggerContainer } from "@/animations/variants";
import Link from "next/link";

export function CTA() {
    return (
        <Section className="py-32 lg:py-24 relative overflow-hidden bg-[#0B0B0B]">
            {/* Modern Mesh Grid Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/20 blur-[120px] rounded-full mix-blend-screen" style={{ willChange: "transform", transform: "translateZ(0)" }} />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-secondary-accent/20 blur-[130px] rounded-full mix-blend-screen" />

                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.10]"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, #374151 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>

            <div className="max-w-[1280px] mx-auto px-6 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="relative p-10 sm:p-14 lg:p-20 rounded-[40px] border border-white/10 bg-white/[0.02] backdrop-blur-2xl overflow-hidden group shadow-2xl shadow-black/80"
                >
                    {/* Inner Glow */}
                    <div className="absolute -inset-x-20 -top-20 h-40 bg-gradient-to-b from-accent/10 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <div className="relative z-10 flex flex-col items-center text-center">
                        <motion.div variants={fadeUpVariant} className="mb-10">
                            <span className="px-5 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent text-[11px] font-bold tracking-[0.2em] uppercase">
                                Global Partnership
                            </span>
                        </motion.div>

                        <motion.h2
                            variants={fadeUpVariant}
                            className="text-4xl sm:text-5xl lg:text-7xl font-black font-heading text-white mb-10 leading-[1.05] tracking-tighter"
                        >
                            Ready to scale your <br className="hidden lg:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-accent/80">
                                next digital success?
                            </span>
                        </motion.h2>

                        <motion.p
                            variants={fadeUpVariant}
                            className="text-xl sm:text-2xl text-[#9CA3AF] mb-14 max-w-2xl leading-relaxed font-medium"
                        >
                            Partner with Devorica to transform your boldest vision into a market-dominating success story.
                            Our strategic engineering team is ready to accelerate your ROI and define your competitive edge.
                        </motion.p>

                        <motion.div
                            variants={fadeUpVariant}
                            className="flex flex-col sm:flex-row gap-5"
                        >
                            <Link href="/contact" className="w-full sm:w-auto">
                                <button className="cta-button h-14 text-base px-6 sm:px-8 w-full sm:w-auto justify-center">
                                    Start Your Project
                                    <div className="cta-icon">
                                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor" />
                                        </svg>
                                    </div>
                                </button>
                            </Link>
                            <Link href="/contact" className="w-full sm:w-auto">
                                <button className="cta-button-outline h-14 text-base px-6 sm:px-8 w-full sm:w-auto justify-center">
                                    Contact Our Team
                                    <div className="cta-icon">
                                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor" />
                                        </svg>
                                    </div>
                                </button>
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
