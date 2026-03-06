"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { fadeUpVariant, staggerContainer } from "@/animations/variants";
import Image from "next/image";

const TECH_STACK = [
    {
        name: "Laravel",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg"
    },
    {
        name: "React",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
    },
    {
        name: "Next.js",
        logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
    },
    {
        name: "Node.js",
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
    },
    {
        name: "Python",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
    },
    {
        name: "Tailwind CSS",
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
    }
];

export function TechnologyStack() {
    return (
        <Section className="py-32 lg:py-24 bg-[#0B0B0B] border-y border-[#1F2937]">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUpVariant}
                className="text-center mb-20"
            >
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading text-white mb-8 tracking-tighter">Technologies <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">We Master</span></h2>
                <p className="text-lg sm:text-xl text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed">
                    We utilize the most powerful, modern frameworks to ensure your application runs seamlessly and scales infinitely.
                </p>
            </motion.div>

            <motion.div
                className="grid grid-cols-2 lg:grid-cols-6 gap-6 max-w-5xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
            >
                {TECH_STACK.map((tech, index) => {
                    return (
                        <motion.div
                            key={index}
                            variants={fadeUpVariant}
                            className="group flex flex-col items-center justify-center p-8 bg-[#0F172A] border border-[#1F2937] rounded-2xl relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-accent/50 cursor-default"
                        >
                            {/* Hover Ambient Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-accent/20 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                            <div className="relative z-10 w-12 h-12 mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                <Image
                                    src={tech.logo}
                                    alt={tech.name}
                                    width={48}
                                    height={48}
                                    className="object-contain"
                                    unoptimized
                                />
                            </div>
                            <span className="text-subtext font-medium group-hover:text-white transition-colors duration-300 relative z-10 text-center text-sm md:text-base">
                                {tech.name}
                            </span>
                        </motion.div>
                    );
                })}
            </motion.div>
        </Section>
    );
}
