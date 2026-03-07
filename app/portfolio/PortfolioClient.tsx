"use client";

import { motion } from "framer-motion";
import { fadeUpVariant, staggerContainer } from "@/animations/variants";
import { CTA } from "@/sections/cta/CTA";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

import { PORTFOLIO_PROJECTS } from "@/constants/portfolio";

// Convert to array for rendering
const ALL_PROJECTS = Object.values(PORTFOLIO_PROJECTS);

export default function PortfolioPage() {
    return (
        <div className="bg-surface-elevated">
            {/* Portfolio Page Dedicated Hero */}
            <section className="relative pt-40 pb-32 overflow-hidden">
                {/* Subtle Ambient Background Lighting */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-gradient-to-b from-accent/10 to-transparent blur-[120px] rounded-full z-0 opacity-50" />

                <div className="max-w-[1280px] mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeUpVariant}
                        className="flex flex-col items-center"
                    >
                        <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border border-border bg-card">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                            <span className="text-sm font-semibold text-foreground-muted tracking-wider uppercase">
                                Proven Results
                            </span>
                        </div>
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold font-heading text-foreground mb-8 tracking-tighter leading-[1.1]">
                            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground/90 to-accent">Works</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-foreground-muted max-w-3xl mx-auto leading-relaxed">
                            A curated selection of high-performance digital products engineered for industry leaders and disruptive startups.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Complete Portfolio Grid */}
            <section className="pb-32">
                <div className="max-w-[1280px] mx-auto px-6">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 lg:gap-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        {ALL_PROJECTS.map((project, index) => (
                            <motion.div
                                key={index}
                                variants={fadeUpVariant}
                                className="group flex flex-col h-full transition-all duration-500 ease-out hover:-translate-y-2"
                            >
                                <Link href={`/portfolio/${project.slug}`} className="flex-1 flex flex-col h-full">
                                    {/* Large Image Showcase */}
                                    <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-10 border border-border bg-card shadow-lg group-hover:shadow-accent/5 group-hover:border-accent/20 transition-all duration-500">
                                        <Image
                                            src={project.mainImage}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />

                                        {/* Simplified Hover Overlay */}
                                        <div className="absolute inset-0 bg-surface/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-10">
                                            <div className="px-6 py-3 rounded-full bg-white text-black font-bold flex items-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 tracking-tight">
                                                View Case Study <ExternalLink className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Project Details */}
                                    <div className="flex flex-col gap-5 flex-1 px-2">
                                        <div className="flex flex-col gap-3">
                                            <h3 className="text-3xl font-bold font-heading text-foreground group-hover:text-accent transition-colors duration-300 tracking-tight leading-tight">
                                                {project.title}
                                            </h3>

                                            <p className="text-foreground-muted text-lg leading-relaxed">
                                                {project.description}
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap gap-2.5 mt-auto pt-4">
                                            {project.techStack.map((t, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 text-xs font-semibold tracking-wide uppercase rounded-full border border-border bg-card text-foreground-muted group-hover:border-accent/20 group-hover:text-accent/80 transition-all duration-300"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Universal CTA */}
            <CTA />
        </div>
    );
}
