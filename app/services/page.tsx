"use client";

import { motion } from "framer-motion";
import { fadeUpVariant, staggerContainer } from "@/animations/variants";
import { CTA } from "@/sections/cta/CTA";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

import { CheckCircle2, Laptop, Rocket, Globe, ShoppingCart, Smartphone, ArrowRight, Code, Zap } from "lucide-react";

// Flagship Services Data for the Detailed Services Page
const DETAILED_SERVICES = [
    {
        title: "Custom Website Development",
        description: "Transform your brand with a high-performance digital asset. We engineer cinematic web experiences that combine artistic design with precision engineering to command market authority.",
        icon: Globe,
        href: "/services/custom-website",
        outcomes: [
            "SEO-optimized 'industrial-grade' architecture",
            "Sub-second delivery via global edge networks",
            "Tailored Headless CMS for non-technical teams",
            "Full mobile and accessibility (a11y) compliance"
        ],
        processTitle: "Process Overview",
        processSteps: [
            { id: 1, title: "Discovery & Strategy", desc: "Deep dive into brand DNA and user journey mapping." },
            { id: 2, title: "Technical Prototyping", desc: "Designing high-fidelity, interactive prototypes." },
            { id: 3, title: "Agile Engineering", desc: "Clean, maintainable code with continuous feedback." }
        ]
    },
    {
        title: "Web App Development",
        description: "Industrial-grade applications engineered for scale, security, and peak operational performance. We build robust SaaS platforms and internal tools that streamline complex business logic.",
        icon: Code,
        href: "/services/web-app-development",
        outcomes: [
            "99.9% Uptime SLA for critical operations",
            "Bank-grade security with AES-256 encryption",
            "Scalable microservices and robust API layers",
            "Real-time data synchronization and dashboards"
        ],
        processTitle: "Development Lifecycle",
        processSteps: [
            { id: 1, title: "System Architecture", desc: "Planning scalable database schemas and cloud infrastructure." },
            { id: 2, title: "Full-Stack Build", desc: "End-to-end development of reactive frontends and backends." },
            { id: 3, title: "UAT & Deployment", desc: "Rigorous automated testing and production-ready scaling." }
        ]
    },
    {
        title: "Landing Page Development",
        description: "Hyper-optimized experiences designed with conversion psychology to turn visitors into high-value customers. Perfect for high-stakes marketing campaigns and product launches.",
        icon: Rocket,
        href: "/services/landing-page",
        outcomes: [
            "9.8% Average conversion rate increase",
            "Instant loading (< 1s) on mobile devices",
            "Automated lead capture and CRM integration",
            "Architecture ready for rapid A/B testing"
        ],
        processTitle: "Conversion Roadmap",
        processSteps: [
            { id: 1, title: "Conversion Audit", desc: "Analyzing campaign goals and identifying user friction points." },
            { id: 2, title: "Visual Flow Design", desc: "Directing user attention with strategic visual hierarchy." },
            { id: 3, title: "Rapid Deployment", desc: "High-velocity launch with full analytics tracking." }
        ]
    },
    {
        title: "Ecommerce Development",
        description: "Premium shopping experiences that remove friction, build trust, and maximize average order value. We build high-capacity stores capable of handling massive global traffic.",
        icon: ShoppingCart,
        href: "/services/ecommerce-development",
        outcomes: [
            "42% Average increase in checkout conversion",
            "Low-friction, PCI-compliant payment gateways",
            "Advanced inventory and multi-currency logic",
            "Omnichannel reach across web and social"
        ],
        processTitle: "Strategic Commerce",
        processSteps: [
            { id: 1, title: "Store Strategy", desc: "Tax mapping, shipping logic, and catalog structure." },
            { id: 2, title: "UX UX Engineering", desc: "Designing seamless product discovery and checkout." },
            { id: 3, title: "Commerce Integration", desc: "Connecting Headless Shopify or custom engines." }
        ]
    },
    {
        title: "App Development",
        description: "High-performance cross-platform solutions that extend your brand's reach and foster deep user retention. We build mobile experiences that users love to keep in their pockets.",
        icon: Smartphone,
        href: "/services/app-development",
        outcomes: [
            "90% Code sharing between iOS and Android",
            "Native-level responsiveness at 60fps",
            "Offline-first synchronization and storage",
            "Cloud-native push notification strategies"
        ],
        processTitle: "Mobile Workflow",
        processSteps: [
            { id: 1, title: "Product Mapping", desc: "Prioritizing mobile-first features and retention loops." },
            { id: 2, title: "Mobile UX Design", desc: "Designing thumb-friendly, ergonomic interaction flows." },
            { id: 3, title: "App Engineering", desc: "Robust development using React Native and Expo." }
        ]
    }
];

export default function ServicesPage() {
    return (
        <div className="bg-[#0B0B0B]">
            {/* Services Page Dedicated Hero */}
            <section className="relative pt-40 pb-32 overflow-hidden border-b border-[#1F2937]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-accent/5 blur-[120px] rounded-full z-0 pointer-events-none" />

                <div className="max-w-[1280px] mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeUpVariant}
                        className="flex flex-col items-center"
                    >
                        <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-accent/20 bg-[#0F172A] text-accent text-sm font-bold tracking-widest uppercase">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                            Engineering Excellence
                        </div>
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-black font-heading text-white mb-8 tracking-tighter leading-tight">
                            Strategic Servi<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-accent/80">ces</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
                            A comprehensive suite of digital solutions engineered to scale your business and dominate your competitive landscape.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Detailed Alternating Services Sections */}
            <section className="py-32">
                <div className="max-w-[1280px] mx-auto px-6 space-y-32 md:space-y-48">
                    {DETAILED_SERVICES.map((service, index) => {
                        const isEven = index % 2 === 0;
                        const Icon = service.icon;

                        return (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={staggerContainer}
                                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-24 items-center`}
                            >
                                {/* Content Column */}
                                <motion.div variants={fadeUpVariant} className="flex-1 w-full">
                                    <div className="flex flex-col gap-8">
                                        <div className="w-14 h-14 rounded-2xl border border-[#374151] bg-[#1F2937] flex items-center justify-center text-accent/80 group-hover:text-accent transition-colors shadow-2xl shadow-black/40">
                                            <Icon className="w-7 h-7" />
                                        </div>

                                        <div className="space-y-6">
                                            <h2 className="text-4xl md:text-5xl font-black font-heading text-white tracking-tight">
                                                {service.title}
                                            </h2>
                                            <p className="text-lg text-[#9CA3AF] leading-relaxed max-w-xl font-medium">
                                                {service.description}
                                            </p>
                                        </div>

                                        <div className="space-y-6">
                                            <h4 className="text-[11px] font-bold text-white uppercase tracking-[0.2em]">KEY OUTCOMES:</h4>
                                            <ul className="grid grid-cols-1 gap-4">
                                                {service.outcomes.map((outcome, i) => (
                                                    <li key={i} className="flex items-center gap-3 text-gray-300">
                                                        <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                                                            <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                                                        </div>
                                                        <span className="text-base font-medium">{outcome}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="pt-4">
                                            <Link href={service.href}>
                                                <button className="cta-button h-14 text-base px-6">
                                                    Learn More
                                                    <div className="cta-icon">
                                                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M0 0h24v24H0z" fill="none" />
                                                            <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor" />
                                                        </svg>
                                                    </div>
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Process Overview Column */}
                                <motion.div variants={fadeUpVariant} className="flex-1 w-full">
                                    <div className="bg-[#0F172A] p-8 md:p-14 rounded-[40px] border border-[#1F2937] shadow-sm relative overflow-hidden group hover:border-accent/30 transition-all duration-700">
                                        {/* Background accent glow */}
                                        <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-[70px] pointer-events-none group-hover:bg-accent/10 transition-colors" />

                                        <h4 className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-12 block">
                                            PROCESS OVERVIEW
                                        </h4>

                                        <div className="space-y-10 relative">
                                            {/* Vertical Timeline Line */}
                                            <div className="absolute left-[19px] top-6 bottom-6 w-px bg-white/5 z-0" />

                                            {service.processSteps.map((step) => (
                                                <div key={step.id} className="relative z-10 flex gap-8">
                                                    <div className="w-10 h-10 rounded-full bg-[#1F2937] border border-[#374151] flex items-center justify-center shrink-0 text-accent font-bold text-sm shadow-xl group-hover:border-accent/40 group-hover:bg-accent/10 transition-all duration-500">
                                                        {step.id}
                                                    </div>
                                                    <div className="space-y-2 pt-1">
                                                        <h5 className="text-xl font-bold text-white tracking-tight">{step.title}</h5>
                                                        <p className="text-[#9CA3AF] leading-relaxed text-base font-medium">{step.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* Render universal CTA block */}
            <CTA />
        </div>
    );
}
