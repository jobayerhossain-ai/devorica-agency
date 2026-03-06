"use client";

import { motion } from "framer-motion";
import { fadeUpVariant, staggerContainer } from "@/animations/variants";
import { CTA } from "@/sections/cta/CTA";
import { TechnologyStack } from "@/sections/tech/TechnologyStack";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Target, Lightbulb, Users, Facebook, Instagram, Github, Linkedin } from "lucide-react";
import Image from "next/image";

const CORE_VALUES = [
    {
        icon: Target,
        title: "Precision Engineering",
        description: "We don't just write code; we architect systems. Every line is optimized for performance, scalability, and maintainability."
    },
    {
        icon: Lightbulb,
        title: "Innovation First",
        description: "We constantly explore the bleeding edge of web technologies to give our clients an unfair competitive advantage."
    },
    {
        icon: Users,
        title: "Collaborative Partnership",
        description: "We work as an extension of your team, providing transparent, agile, and dedicated engineering support."
    }
];

const TEAM_MEMBERS = [
    {
        name: "Jobayer Hossain",
        role: "CEO",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
        socials: {
            facebook: "#",
            instagram: "#",
            github: "#",
            linkedin: "#"
        }
    }
];

export function AboutClient() {
    return (
        <>
            {/* About Hero Section */}
            <section className="relative pt-32 pb-24 bg-[#0F172A] border-b border-[#1F2937] overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-accent/10 blur-[120px] rounded-full z-0 pointer-events-none" />

                <div className="max-w-[1280px] mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeUpVariant}
                        >
                            <div className="inline-block mb-6 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-sm">
                                <span className="text-sm font-medium text-accent">
                                    Our Story
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold font-heading text-white mb-6 tracking-tight leading-tight">
                                We engineer <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary-accent">digital excellence.</span>
                            </h1>
                            <p className="text-xl text-subtext leading-relaxed">
                                Devorica was founded on a simple premise: businesses deserve digital products that don&apos;t just look beautiful, but perform ruthlessly.
                            </p>
                            <p className="text-lg text-subtext leading-relaxed mt-4">
                                Based in Dhaka, Bangladesh, we are a tightly-knit team of senior engineers and product designers who bridge the gap between creative vision and complex technical reality.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                            className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-[#1F2937] shadow-2xl"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
                                alt="The Devorica Team collaborating"
                                fill
                                className="object-cover"
                                priority
                            />
                            {/* Glassmorphic overlay piece */}
                            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[#0B0B0B]/70 backdrop-blur-md border border-white/10">
                                <p className="text-white font-medium text-lg">&quot;Code is poetry, but performance is business.&quot;</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Values Section */}
            <section className="py-24 bg-[#0B0B0B] border-b border-[#1F2937]">
                <div className="max-w-[1280px] mx-auto px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeUpVariant}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <SectionTitle
                            label="Our Mission"
                            title="Built for the bold."
                            description="Our mission is to arm ambitious companies with the high-performance technical infrastructure they need to dominate their respective markets."
                        />
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        {CORE_VALUES.map((val, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeUpVariant}
                                className="bg-[#0F172A] p-8 rounded-2xl border border-[#1F2937] hover:border-accent/30 transition-colors group"
                            >
                                <div className="w-14 h-14 rounded-xl bg-[#1F2937] flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                                    <val.icon className="w-7 h-7 text-white group-hover:text-accent transition-colors" />
                                </div>
                                <h3 className="text-2xl font-bold font-heading text-white mb-4">{val.title}</h3>
                                <p className="text-subtext leading-relaxed">{val.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Leadership / Team Section */}
            <section className="py-24 bg-[#0F172A]">
                <div className="max-w-[1280px] mx-auto px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeUpVariant}
                        className="mb-16"
                    >
                        <SectionTitle
                            label="Our Leadership"
                            title="The architects behind the screen."
                        />
                    </motion.div>

                    <motion.div
                        className="flex justify-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        {TEAM_MEMBERS.map((member, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeUpVariant}
                                className="group relative max-w-[300px] w-full"
                            >
                                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-6 bg-[#1F2937] border border-[#1F2937] group-hover:border-accent/40 transition-colors">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    />
                                    {/* Gradient overlay and social links */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                                        <div className="flex gap-4">
                                            {member.socials.facebook && (
                                                <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/10 hover:bg-accent hover:text-[#0B0B0B] text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300">
                                                    <Facebook className="w-5 h-5" />
                                                </a>
                                            )}
                                            {member.socials.instagram && (
                                                <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/10 hover:bg-accent hover:text-[#0B0B0B] text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-500">
                                                    <Instagram className="w-5 h-5" />
                                                </a>
                                            )}
                                            {member.socials.github && (
                                                <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/10 hover:bg-accent hover:text-[#0B0B0B] text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-700">
                                                    <Github className="w-5 h-5" />
                                                </a>
                                            )}
                                            {member.socials.linkedin && (
                                                <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/10 hover:bg-accent hover:text-[#0B0B0B] text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-1000">
                                                    <Linkedin className="w-5 h-5" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-xl font-bold font-heading text-white mb-1 group-hover:text-accent transition-colors">{member.name}</h3>
                                    <p className="text-sm font-medium text-subtext">{member.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Reusable Technology Expertise Section */}
            <TechnologyStack />

            {/* Universal CTA */}
            <CTA />
        </>
    );
}
