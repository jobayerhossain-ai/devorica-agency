"use client";

import { motion } from "framer-motion";
import { fadeUpVariant, staggerContainer } from "@/animations/variants";
import { ProjectDetail } from "@/constants/portfolio";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ExternalLink, Globe, Layout, Cpu, Target, CheckCircle2 } from "lucide-react";
import { CTA } from "@/sections/cta/CTA";

export default function ProjectDetailView({ project }: { project: ProjectDetail }) {
    return (
        <div className="bg-surface">
            {/* Header / Hero */}
            <section className="relative pt-40 pb-20 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[600px] bg-accent/5 blur-[120px] rounded-full z-0 pointer-events-none" />

                <div className="max-w-[1280px] mx-auto px-6 relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="flex flex-col gap-8"
                    >
                        <motion.div variants={fadeUpVariant}>
                            <Link
                                href="/portfolio"
                                className="inline-flex items-center gap-2 text-foreground-muted hover:text-accent transition-colors mb-8 group"
                            >
                                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                                Back to Portfolio
                            </Link>
                        </motion.div>

                        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
                            <motion.div variants={fadeUpVariant} className="max-w-3xl">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-bold tracking-widest uppercase mb-6">
                                    {project.category}
                                </span>
                                <h1 className="text-5xl md:text-7xl font-bold font-heading text-foreground tracking-tighter leading-tight mb-6">
                                    {project.title}
                                </h1>
                                <p className="text-xl md:text-2xl text-foreground-muted leading-relaxed">
                                    {project.description}
                                </p>
                            </motion.div>

                            <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-12 border-l border-border pl-8 py-2">
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-foreground-muted mb-2">Client</p>
                                    <p className="text-lg font-semibold text-foreground">{project.client}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-foreground-muted mb-2">Year</p>
                                    <p className="text-lg font-semibold text-foreground">{project.year}</p>
                                </div>
                                {project.liveUrl && (
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-foreground-muted mb-2">Visit</p>
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-lg font-semibold text-accent hover:underline flex items-center gap-2"
                                        >
                                            Live Project <ExternalLink className="w-4 h-4" />
                                        </a>
                                    </div>
                                )}
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Featured Image */}
            <section className="pb-32">
                <div className="max-w-[1440px] mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden border border-border shadow-2xl bg-card"
                    >
                        <Image
                            src={project.mainImage}
                            alt={project.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="pb-32 relative">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

                        {/* Sidebar: Tech & Services */}
                        <div className="lg:col-span-4 order-2 lg:order-1">
                            <div className="sticky top-32 flex flex-col gap-12">
                                <div className="p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm">
                                    <div className="flex items-center gap-3 mb-6 text-accent">
                                        <Layout className="w-5 h-5" />
                                        <h4 className="font-bold uppercase tracking-widest text-sm text-foreground">Services Provided</h4>
                                    </div>
                                    <ul className="flex flex-col gap-3">
                                        {project.services.map((service, i) => (
                                            <li key={i} className="text-foreground-muted flex items-center gap-2">
                                                <span className="w-1 h-1 rounded-full bg-accent/40" />
                                                {service}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm">
                                    <div className="flex items-center gap-3 mb-6 text-accent">
                                        <Cpu className="w-5 h-5" />
                                        <h4 className="font-bold uppercase tracking-widest text-sm text-foreground">Technology Stack</h4>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 rounded-md bg-surface text-foreground-muted text-sm border border-border"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Main Content: Story */}
                        <div className="lg:col-span-8 order-1 lg:order-2 flex flex-col gap-20">

                            {/* Problem/Challenge */}
                            <div className="flex flex-col gap-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500">
                                        <Target className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-3xl font-bold font-heading text-foreground">The Challenge</h2>
                                </div>
                                <p className="text-xl text-foreground-muted leading-relaxed whitespace-pre-line">
                                    {project.challenge}
                                </p>
                            </div>

                            {/* Solution */}
                            <div className="flex flex-col gap-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                                        <Globe className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-3xl font-bold font-heading text-foreground">The Solution</h2>
                                </div>
                                <p className="text-xl text-foreground-muted leading-relaxed whitespace-pre-line">
                                    {project.solution}
                                </p>
                            </div>

                            {/* Results */}
                            <div className="p-12 rounded-3xl bg-gradient-to-br from-card to-card/50 border border-border relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-accent/10 transition-colors duration-700" />

                                <h2 className="text-3xl font-bold font-heading text-foreground mb-10 flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500">
                                        <CheckCircle2 className="w-5 h-5" />
                                    </div>
                                    Key Results
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {project.results.map((result, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="w-6 h-6 rounded-full bg-accent/20 flex-shrink-0 flex items-center justify-center mt-1">
                                                <div className="w-2 h-2 rounded-full bg-accent" />
                                            </div>
                                            <p className="text-lg text-foreground/90 font-medium">{result}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section className="pb-32 bg-surface-elevated">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="flex flex-col items-center mb-16 text-center">
                        <h2 className="text-4xl font-bold font-heading text-foreground mb-4">Project Gallery</h2>
                        <div className="w-20 h-1.5 bg-accent rounded-full mb-6" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {project.gallery.map((img, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative aspect-video rounded-2xl overflow-hidden border border-border shadow-xl hover:shadow-accent/5 transition-shadow"
                            >
                                <Image
                                    src={img}
                                    alt={`${project.title} Gallery ${i + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <CTA />
        </div>
    );
}
