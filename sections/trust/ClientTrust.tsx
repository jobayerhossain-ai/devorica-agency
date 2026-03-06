"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { staggerContainer, fadeUpVariant } from "@/animations/variants";
import { CheckCircle, ShieldCheck, Zap } from "lucide-react";

const TRUST_STATS = [
    {
        icon: <CheckCircle className="w-8 h-8 text-accent" />,
        title: "100+ Projects",
        description: "Successfully Delivered",
    },
    {
        icon: <Zap className="w-8 h-8 text-accent" />,
        title: "Fast & Scalable",
        description: "Built for Performance",
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-accent" />,
        title: "Secure & Modern",
        description: "Enterprise Grade Tech",
    },
];

export function ClientTrust() {
    return (
        <Section className="py-12 bg-[#0B0B0B] border-b border-[#1F2937]">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
                className="max-w-[1280px] mx-auto px-6"
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#1F2937]">
                    {TRUST_STATS.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={fadeUpVariant}
                            className="flex flex-col items-center text-center px-4 py-8 md:py-4 transition-transform hover:scale-105 duration-300"
                        >
                            <div className="mb-4 p-3 rounded-full bg-accent/10">
                                {stat.icon}
                            </div>
                            <h3 className="text-xl font-bold font-heading text-white mb-2">
                                {stat.title}
                            </h3>
                            <p className="text-subtext font-medium text-sm">
                                {stat.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </Section>
    );
}
