"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { fadeUpVariant, staggerContainer } from "@/animations/variants";

const PROCESS_STEPS = [
    { step: "01", title: "Research", desc: "Understanding your business goals and user needs." },
    { step: "02", title: "Design", desc: "Crafting pixel-perfect, conversion-optimized visuals." },
    { step: "03", title: "Development", desc: "Writing clean, scalable code on modern stacks." },
    { step: "04", title: "Testing", desc: "Rigorous QA for performance and cross-browser stability." },
    { step: "05", title: "Launch", desc: "Deploying seamlessly and monitoring analytics." }
];

export function Process() {
    return (
        <Section id="process" className="bg-[#0F172A] border-y border-[#1F2937] py-32 lg:py-24">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUpVariant}
            >
                <SectionTitle
                    label="Our Process"
                    title="From concept to execution in 5 steps."
                    description="A transparent, agile workflow designed to deliver results on time and on budget."
                />
            </motion.div>

            {/* Horizontal Timeline */}
            <div className="relative mt-20">
                {/* Connecting Line */}
                <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-0.5 bg-[#1F2937]" />

                {/* Animated Gradient Line layered over the top */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-accent/0 via-accent to-secondary-accent/0 origin-left"
                />

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-6 relative z-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                >
                    {PROCESS_STEPS.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={fadeUpVariant}
                            className="flex flex-col items-center text-center group"
                        >
                            {/* Step Node */}
                            <div className="w-14 h-14 rounded-full bg-[#1F2937] border-2 border-[#374151] flex items-center justify-center text-white font-bold font-heading mb-6 group-hover:border-accent group-hover:bg-accent/10 group-hover:text-accent transition-all duration-300 relative z-10 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                                {item.step}
                            </div>
                            <h3 className="text-xl font-bold font-heading text-white mb-3 transition-colors group-hover:text-accent">{item.title}</h3>
                            <p className="text-subtext text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </Section>
    );
}
