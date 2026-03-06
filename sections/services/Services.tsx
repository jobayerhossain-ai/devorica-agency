"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Globe, Rocket, ShoppingCart, Smartphone } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { staggerContainer, fadeUpVariant } from "@/animations/variants";
import Link from "next/link";

const SERVICES = [
    {
        title: "Custom Website",
        description: "Transform your digital presence into a high-converting brand asset that commands authority and drives engagement.",
        icon: Globe,
        href: "/services/custom-website"
    },
    {
        title: "Web App Development",
        description: "Industrial-grade applications engineered for scale and performance, designed to accelerate business innovation.",
        icon: Code,
        href: "/services/web-app-development"
    },
    {
        title: "Landing Page",
        description: "Hyper-optimized experiences designed with conversion psychology to turn visitors into high-value customers.",
        icon: Rocket,
        href: "/services/landing-page"
    },
    {
        title: "Ecommerce Development",
        description: "Premium shopping experiences that remove friction, build trust, and maximize average order value through intelligent UX.",
        icon: ShoppingCart,
        href: "/services/ecommerce-development"
    },
    {
        title: "App Development",
        description: "High-performance cross-platform solutions that extend your brand's reach and foster deep user retention.",
        icon: Smartphone,
        href: "/services/app-development"
    }
];

export function Services() {
    return (
        <Section id="services" className="bg-[#0B0B0B] py-32 lg:py-24 border-b border-[#1F2937] overflow-hidden relative">
            {/* Subtle Ambient Background Lighting */}
            <div className="absolute bottom-0 right-0 w-full max-w-4xl h-[400px] bg-accent/5 blur-[120px] rounded-full z-0 pointer-events-none" />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUpVariant}
                className="text-center max-w-4xl mx-auto mb-16 lg:mb-20"
            >
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-accent/20 bg-[#0F172A] text-accent text-xs font-bold tracking-[0.2em] uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
                    Success-Driven Solutions
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-black font-heading text-white mb-8 tracking-tighter">
                    Strategic Engineering for <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-accent/60">Market-Defining Brands.</span>
                </h2>
                <p className="text-xl sm:text-2xl text-[#9CA3AF] leading-relaxed max-w-2xl mx-auto font-medium">
                    We don't just write code; we architect competitive advantages. Every solution is meticulously engineered to drive measurable business growth and global impact.
                </p>
            </motion.div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
            >
                {SERVICES.map((service, index) => {
                    const Icon = service.icon;
                    return (
                        <motion.div
                            key={service.href}
                            variants={fadeUpVariant}
                            className="group h-full"
                        >
                            <Link href={service.href} aria-label={`Learn more about ${service.title}`} className="block h-full transition-all duration-500 ease-out hover:-translate-y-2">
                                <div className="h-full flex flex-col relative overflow-hidden rounded-2xl bg-[#0F172A] border border-[#1F2937] p-8 lg:p-10 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-accent/5 group-hover:border-accent/20">
                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="w-14 h-14 rounded-2xl border border-[#1F2937] bg-[#111827] flex items-center justify-center text-white mb-10 group-hover:border-accent/40 group-hover:bg-accent/10 group-hover:text-accent transition-all duration-500 shadow-xl shadow-black/40">
                                            <Icon className="w-7 h-7" />
                                        </div>

                                        <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-6 tracking-tight group-hover:text-accent transition-colors duration-300">
                                            {service.title}
                                        </h3>

                                        <p className="text-[#9CA3AF] text-base sm:text-lg leading-relaxed mb-10 flex-grow font-medium">
                                            {service.description}
                                        </p>

                                        <div className="flex items-center text-[11px] font-bold text-gray-400 tracking-widest uppercase mt-auto group-hover:text-accent transition-all duration-300">
                                            Learn More Details
                                            <ArrowRight className="w-4 h-4 ml-3 transform group-hover:translate-x-2 transition-transform duration-500" aria-hidden="true" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    );
                })}
            </motion.div>
        </Section>
    );
}
