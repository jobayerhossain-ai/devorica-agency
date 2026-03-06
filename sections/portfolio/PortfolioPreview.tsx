"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { staggerContainer, fadeUpVariant } from "@/animations/variants";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const PROJECTS = [
    {
        title: "FinTech Dashboard",
        tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        href: "/portfolio/fintech"
    },
    {
        title: "E-Commerce Platform",
        tech: ["React", "Node.js", "Stripe"],
        image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=800",
        href: "/portfolio/ecommerce"
    },
    {
        title: "SaaS Marketing Site",
        tech: ["Next.js", "GSAP", "Sanity"],
        image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800",
        href: "/portfolio/saas"
    }
];

export function PortfolioPreview() {
    return (
        <Section id="portfolio" className="border-t border-[#1F2937] bg-[#0F172A] py-32 lg:py-24">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUpVariant}
            >
                <SectionTitle
                    label="Selected Projects"
                    title="Engineered for Impact."
                    description="Explore our recent high-performance web applications and custom websites built with precision."
                />
            </motion.div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
            >
                {PROJECTS.map((project, index) => (
                    <motion.div key={index} variants={fadeUpVariant} className="group cursor-pointer flex flex-col h-full">
                        <Link href={project.href} className="flex-1 flex flex-col h-full">
                            <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden mb-8 border border-[#1F2937] bg-[#0B0B0B] group-hover:border-accent/20 transition-all duration-500">
                                {/* Project Image with Zoom Hover */}
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />

                                {/* Overlay Hover Fade */}
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0F172A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-8 backdrop-blur-[2px] z-10">
                                    <button className="cta-button pointer-events-none translate-y-4 group-hover:translate-y-0 transition-all duration-500 text-sm">
                                        View Case Study
                                        <div className="cta-icon">
                                            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 0h24v24H0z" fill="none" />
                                                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor" />
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 flex-1">
                                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white group-hover:text-accent transition-colors duration-300 tracking-tight leading-tight">
                                    {project.title}
                                </h3>
                                <div className="flex flex-wrap gap-2.5 mt-auto">
                                    {project.tech.map((t, i) => (
                                        <Badge key={i} className="bg-white/5 border-white/5 text-[10px] font-bold uppercase tracking-widest text-subtext group-hover:border-accent/40 group-hover:text-white transition-all duration-300 py-1.5 px-3">
                                            {t}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>

            <div className="mt-20 flex justify-center">
                <Link href="/portfolio">
                    <button className="cta-button-outline h-14 text-base px-8">
                        View All Projects
                        <div className="cta-icon">
                            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor" />
                            </svg>
                        </div>
                    </button>
                </Link>
            </div>
        </Section>
    );
}
