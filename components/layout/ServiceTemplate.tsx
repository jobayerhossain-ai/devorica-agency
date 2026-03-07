"use client";

import { motion } from "framer-motion";
import { fadeUpVariant } from "@/animations/variants";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle2, Zap, Shield, Lock, Layers, Eye, Smartphone, ShoppingCart, Globe, Bell } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/sections/cta/CTA";
import { PortfolioPreview } from "@/sections/portfolio/PortfolioPreview";

const ICON_MAP = {
    Zap: <Zap className="w-6 h-6" />,
    Shield: <Shield className="w-6 h-6" />,
    Lock: <Lock className="w-6 h-6" />,
    Layers: <Layers className="w-6 h-6" />,
    Eye: <Eye className="w-6 h-6" />,
    Smartphone: <Smartphone className="w-6 h-6" />,
    ShoppingCart: <ShoppingCart className="w-6 h-6" />,
    Globe: <Globe className="w-6 h-6" />,
    Bell: <Bell className="w-6 h-6" />,
};

interface ServiceData {
    title: string;
    description: string;
    features: { title: string; desc: string }[];
    process: { step: string; title: string; desc: string }[];
    expertInsights: { title: string; icon: string; desc: string }[];
    impactMetrics: { value: string; label: string }[];
    techStack: string[];
}

export function ServiceTemplate({ service }: { service: ServiceData }) {
    return (
        <div className="bg-surface transition-colors duration-300">
            {/* 1. Ultra Premium Hero */}
            <Section className="min-h-[70vh] flex items-center pt-40 pb-32 relative overflow-hidden">
                {/* Background Visuals */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary-accent/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/4" />

                <div className="max-w-5xl mx-auto text-center relative z-10 px-6">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeUpVariant}
                        className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border border-border bg-card text-accent text-xs font-bold tracking-[0.2em] uppercase"
                    >
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        Premium Service Range
                    </motion.div>

                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={fadeUpVariant}
                        className="text-6xl md:text-8xl font-bold font-heading text-foreground mb-10 leading-[1.05] tracking-tighter"
                    >
                        {service.title.split(' ').map((word, i) => (
                            <span key={i} className={i === service.title.split(' ').length - 1 ? "text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground/80 to-accent" : ""}>
                                {word}{' '}
                            </span>
                        ))}
                    </motion.h1>

                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={fadeUpVariant}
                        className="text-xl md:text-2xl text-foreground-muted leading-relaxed max-w-3xl mx-auto mb-12 font-medium"
                    >
                        {service.description}
                    </motion.p>

                    <motion.div variants={fadeUpVariant} initial="hidden" animate="visible" className="flex justify-center gap-6">
                        <Link href="/contact">
                            <button className="cta-button h-16 text-lg px-8">
                                Start Your Project
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
            </Section>

            {/* 2. Industrial Impact (Metrics) */}
            <Section className="bg-surface py-20 border-t border-border transition-colors duration-300">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {service.impactMetrics.map((metric, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUpVariant}
                                className="relative group text-center p-8 rounded-3xl border border-border bg-card/50 overflow-hidden transition-colors duration-300"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="text-5xl font-black text-foreground mb-2 group-hover:text-accent transition-colors duration-500">
                                    {metric.value}
                                </div>
                                <div className="text-foreground-muted font-bold tracking-widest uppercase text-xs">
                                    {metric.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* 3. Core Capabilities (Grid) */}
            <Section className="bg-surface py-32 border-y border-border transition-colors duration-300">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-6">
                            Core Capabilities
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
                        {service.features.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUpVariant}
                                className="group p-10 rounded-3xl border border-border bg-card hover:border-accent/40 transition-all duration-500 shadow-xl"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-accent/5">
                                    <CheckCircle2 className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold font-heading text-foreground mb-4 group-hover:text-accent transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-foreground-muted text-lg leading-relaxed">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* 4. Expert Insights */}
            <Section className="bg-surface-elevated py-32 relative overflow-hidden transition-colors duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <Badge className="mb-6 px-4 py-1 text-[10px] font-bold tracking-[0.3em] uppercase bg-accent/10 border-accent/20 text-accent">
                                Expert Insights
                            </Badge>
                            <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-8 leading-tight">
                                Deep Dive into Industrial <br />
                                <span className="text-accent">Standards.</span>
                            </h2>
                            <p className="text-foreground-muted text-xl leading-relaxed mb-10">
                                We don&apos;t just build; we engineer with precision. Our strategies are backed by authoritative research and industry-standard best practices.
                            </p>
                        </div>
                        <div className="space-y-6">
                            {service.expertInsights.map((insight, i) => (
                                <motion.div
                                    key={i}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeUpVariant}
                                    className="p-8 rounded-2xl border border-border bg-surface hover:bg-foreground/[0.02] transition-colors group"
                                >
                                    <div className="flex gap-6">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all duration-500">
                                            {ICON_MAP[insight.icon as keyof typeof ICON_MAP]}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-foreground mb-2">{insight.title}</h4>
                                            <p className="text-foreground-muted text-sm leading-relaxed">{insight.desc}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* 3. The Roadmap (Workflow) */}
            <Section className="bg-surface-elevated py-32 relative overflow-hidden transition-colors duration-300">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,229,255,0.03),transparent_25%)]" />

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-bold font-heading text-foreground mb-8 tracking-tighter">
                            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/60">Success.</span>
                        </h2>
                        <p className="text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto">
                            Our proprietary development lifecycle is engineered to move from concept to market at peak velocity.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {service.process.map((step, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUpVariant}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="text-[120px] font-black font-heading text-foreground/[0.03] absolute -translate-y-16 group-hover:text-accent/5 transition-colors duration-700 select-none">
                                    {step.step}
                                </div>
                                <div className="w-12 h-12 rounded-full border border-border bg-foreground/5 flex items-center justify-center text-foreground font-bold mb-8 group-hover:border-accent/50 group-hover:bg-accent/10 group-hover:text-accent transition-all duration-500 relative z-10 shadow-2xl">
                                    {step.step}
                                </div>
                                <h4 className="text-xl font-bold text-foreground mb-4 relative z-10">{step.title}</h4>
                                <p className="text-sm text-foreground-muted leading-relaxed px-4 relative z-10">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* 4. Technologies */}
            <Section className="bg-surface border-y border-border py-20 transition-colors duration-300">
                <div className="flex flex-col items-center gap-10">
                    <h3 className="text-lg font-bold tracking-[0.2em] uppercase text-foreground-muted">
                        Built With Excellence
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {service.techStack.map((tech, i) => (
                            <Badge key={i} className="px-6 py-3 text-sm font-bold bg-card border-border text-foreground hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 rounded-xl">
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </div>
            </Section>

            {/* 5. Featured Projects */}
            <PortfolioPreview />

            {/* 6. CTA */}
            <CTA />
        </div>
    );
}
