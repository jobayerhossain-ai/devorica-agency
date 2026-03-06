"use client";

import { motion } from "framer-motion";
import { fadeUpVariant, staggerContainer } from "@/animations/variants";
import { CTA } from "@/sections/cta/CTA";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

// Full Portfolio Data Source
const PORTFOLIO_PROJECTS = [
    {
        title: "FinTech Dashboard Analytics",
        description: "A comprehensive financial dashboard providing real-time data visualization and deep analytics for enterprise banking clients.",
        tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Recharts"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
        href: "/portfolio/fintech-dashboard"
    },
    {
        title: "E-Commerce Global Platform",
        description: "A high-conversion, wildly fast multi-tenant headless e-commerce platform handling 10k+ concurrent checkouts.",
        tech: ["React", "Node.js", "Stripe", "PostgreSQL"],
        image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=1200",
        href: "/portfolio/ecommerce-platform"
    },
    {
        title: "SaaS Marketing Site",
        description: "A conversion-optimized B2B SaaS marketing website featuring heavy scroll animations and split-testing architecture.",
        tech: ["Next.js", "GSAP", "Sanity CMS", "TypeScript"],
        image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=1200",
        href: "/portfolio/saas-site"
    },
    {
        title: "Healthcare Mobile App",
        description: "A cross-platform React Native application for patient scheduling, telemedicine calls, and secure record keeping.",
        tech: ["React Native", "Firebase", "WebRTC", "Express"],
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200",
        href: "/portfolio/healthcare-app"
    },
    {
        title: "AI Logistics Engine",
        description: "An AI-powered logistics tracking dashboard visualizing global supply chains and predicting shipment delays intelligently.",
        tech: ["Vue.js", "Python", "TensorFlow", "Mapbox"],
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
        href: "/portfolio/ai-logistics"
    },
    {
        title: "Real Estate Property Portal",
        description: "A premium real estate listing application with dynamic map search, virtual 3D tours, and automated agent matching.",
        tech: ["Next.js", "Prisma", "AWS S3", "Three.js"],
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200",
        href: "/portfolio/real-estate"
    }
];

export default function PortfolioPage() {
    return (
        <div className="bg-[#0B0B0B]">
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
                        <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border border-[#1F2937] bg-[#0F172A]">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                            <span className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                                Proven Results
                            </span>
                        </div>
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold font-heading text-white mb-8 tracking-tighter leading-[1.1]">
                            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/70">Works</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
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
                        {PORTFOLIO_PROJECTS.map((project, index) => (
                            <motion.div
                                key={index}
                                variants={fadeUpVariant}
                                className="group flex flex-col h-full transition-all duration-500 ease-out hover:-translate-y-2"
                            >
                                <Link href={project.href} className="flex-1 flex flex-col h-full">
                                    {/* Large Image Showcase */}
                                    <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-10 border border-[#1F2937] bg-[#0F172A] shadow-lg group-hover:shadow-accent/5 group-hover:border-accent/20 transition-all duration-500">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />

                                        {/* Simplified Hover Overlay */}
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-10">
                                            <div className="px-6 py-3 rounded-full bg-white text-black font-bold flex items-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 tracking-tight">
                                                View Case Study <ExternalLink className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Project Details */}
                                    <div className="flex flex-col gap-5 flex-1 px-2">
                                        <div className="flex flex-col gap-3">
                                            <h3 className="text-3xl font-bold font-heading text-white tracking-tight group-hover:text-accent transition-colors duration-300">
                                                {project.title}
                                            </h3>

                                            <p className="text-[#9CA3AF] text-lg leading-relaxed">
                                                {project.description}
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap gap-2.5 mt-auto pt-4">
                                            {project.tech.map((t, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 text-xs font-semibold tracking-wide uppercase rounded-full border border-[#1F2937] bg-[#0F172A] text-gray-400 group-hover:border-accent/20 group-hover:text-accent/80 transition-all duration-300"
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
