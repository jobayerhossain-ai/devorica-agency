"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUpVariant } from "@/animations/variants";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export function ContactClient() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isBudgetOpen, setIsBudgetOpen] = useState(false);
    const [selectedBudget, setSelectedBudget] = useState("");
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsBudgetOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate an API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 1500);
    };

    return (
        <>
            {/* Contact Hero Section */}
            <section className="relative pt-32 pb-24 bg-card-bg border-b border-border overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-accent/10 blur-[120px] rounded-full z-0 pointer-events-none" />

                <div className="max-w-[1280px] mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeUpVariant}
                    >
                        <div className="inline-block mb-6 px-4 py-2 rounded-full border border-glass-border bg-glass backdrop-blur-sm">
                            <span className="text-sm font-medium bg-gradient-to-r from-accent to-secondary-accent bg-clip-text text-transparent">
                                Let&apos;s Talk
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-heading mb-6 tracking-tight">
                            Start your <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary-accent">Project</span>
                        </h1>
                        <p className="text-xl text-subtext max-w-2xl mx-auto leading-relaxed mt-6">
                            Whether you need a high-performance web application or a conversion-focused corporate landing page, our engineering team is ready to deliver.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="py-24 bg-surface-alt">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Left Column: Contact Information */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeUpVariant}
                            className="flex flex-col gap-12"
                        >
                            <div>
                                <h3 className="text-3xl font-bold font-heading text-heading mb-4">Get in touch</h3>
                                <p className="text-subtext text-lg leading-relaxed max-w-md">
                                    Fill out the form to the right, or simply reach out via email or phone. We typically respond within 24 hours.
                                </p>
                            </div>

                            <div className="flex flex-col gap-8">
                                {/* Email Block */}
                                <div className="flex items-start gap-5 group">
                                    <div className="w-14 h-14 rounded-2xl bg-[#1F2937] border border-border flex items-center justify-center shrink-0 group-hover:bg-accent/10 group-hover:border-accent/40 transition-colors duration-300">
                                        <Mail className="w-6 h-6 text-heading group-hover:text-accent transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <h4 className="text-heading font-bold text-xl mb-1">Email Us</h4>
                                        <a href="mailto:support@devorica.com" className="text-subtext hover:text-white transition-colors text-lg">
                                            support@devorica.com
                                        </a>
                                    </div>
                                </div>

                                {/* Phone Block */}
                                <div className="flex items-start gap-5 group">
                                    <div className="w-14 h-14 rounded-2xl bg-[#1F2937] border border-border flex items-center justify-center shrink-0 group-hover:bg-accent/10 group-hover:border-accent/40 transition-colors duration-300">
                                        <Phone className="w-6 h-6 text-heading group-hover:text-accent transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <h4 className="text-heading font-bold text-xl mb-1">Call Us</h4>
                                        <a href="tel:+8801619504428" className="text-subtext hover:text-white transition-colors text-lg">
                                            +8801619504428
                                        </a>
                                    </div>
                                </div>

                                {/* Office Block */}
                                <div className="flex items-start gap-5 group">
                                    <div className="w-14 h-14 rounded-2xl bg-[#1F2937] border border-border flex items-center justify-center shrink-0 group-hover:bg-accent/10 group-hover:border-accent/40 transition-colors duration-300">
                                        <MapPin className="w-6 h-6 text-heading group-hover:text-accent transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <h4 className="text-heading font-bold text-xl mb-1">Office</h4>
                                        <p className="text-subtext text-lg">
                                            Feni Sadar, Feni<br />
                                            Bangladesh
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column: Contact Form */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeUpVariant}
                        >
                            <div className="bg-card-bg p-8 md:p-12 rounded-3xl border border-border shadow-xl relative overflow-hidden">
                                {/* Ambient Form Glow */}
                                <div className="absolute -top-32 -right-32 w-64 h-64 bg-accent/10 blur-[80px] rounded-full pointer-events-none" />

                                {isSubmitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="h-full min-h-[400px] flex flex-col items-center justify-center text-center relative z-10"
                                    >
                                        <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                                            <Send className="w-10 h-10 text-green-400 ml-1" />
                                        </div>
                                        <h3 className="text-3xl font-bold font-heading text-heading mb-2">Message Sent!</h3>
                                        <p className="text-subtext text-lg max-w-xs mx-auto mb-8">
                                            Thank you for reaching out. A Devorica engineer will be in touch shortly.
                                        </p>
                                        <button className="cta-button-outline" onClick={() => setIsSubmitted(false)} type="button">
                                            Send Another Message
                                            <div className="cta-icon">
                                                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor" />
                                                </svg>
                                            </div>
                                        </button>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="flex flex-col gap-2">
                                                <label htmlFor="firstName" className="text-sm font-medium text-subtext">First Name</label>
                                                <input
                                                    id="firstName"
                                                    type="text"
                                                    required
                                                    className="w-full bg-surface-alt border border-border rounded-xl px-4 py-3 text-heading placeholder:text-subtext/60 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                                                    placeholder="John"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <label htmlFor="lastName" className="text-sm font-medium text-subtext">Last Name</label>
                                                <input
                                                    id="lastName"
                                                    type="text"
                                                    required
                                                    className="w-full bg-surface-alt border border-border rounded-xl px-4 py-3 text-heading placeholder:text-subtext/60 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                                                    placeholder="Doe"
                                                />
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="email" className="text-sm font-medium text-subtext">Corporate Email</label>
                                            <input
                                                id="email"
                                                type="email"
                                                required
                                                className="w-full bg-surface-alt border border-border rounded-xl px-4 py-3 text-heading placeholder:text-subtext/60 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                                                placeholder="john@company.com"
                                            />
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-medium text-subtext">Project Budget</label>
                                            <div className="relative" ref={dropdownRef}>
                                                <button
                                                    type="button"
                                                    onClick={() => setIsBudgetOpen(!isBudgetOpen)}
                                                    className="w-full bg-surface-alt border border-border rounded-xl px-4 py-3 text-heading text-left flex justify-between items-center hover:border-border transition-all focus:outline-none focus:border-accent"
                                                >
                                                    <span className={selectedBudget ? "text-heading" : "text-[#4B5563]"}>
                                                        {selectedBudget || "Select an option"}
                                                    </span>
                                                    <motion.svg
                                                        animate={{ rotate: isBudgetOpen ? 180 : 0 }}
                                                        width="12" height="12" viewBox="0 0 12 12" fill="none"
                                                        className="text-subtext"
                                                    >
                                                        <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </motion.svg>
                                                </button>

                                                <AnimatePresence>
                                                    {isBudgetOpen && (
                                                        <motion.div
                                                            initial={{ opacity: 0, y: 0, scale: 0.95 }}
                                                            animate={{ opacity: 1, y: 8, scale: 1 }}
                                                            exit={{ opacity: 0, y: 0, scale: 0.95 }}
                                                            transition={{
                                                                type: "spring",
                                                                stiffness: 300,
                                                                damping: 30
                                                            }}
                                                            className="absolute top-full left-0 w-full z-50 mt-1 bg-card-bg backdrop-blur-xl border border-glass-border rounded-2xl shadow-2xl overflow-hidden py-2"
                                                        >
                                                            {[
                                                                "$5 - $100",
                                                                "$100 - $500",
                                                                "$500 - $5,000",
                                                                "$5,000 - $50,000"
                                                            ].map((option) => (
                                                                <button
                                                                    key={option}
                                                                    type="button"
                                                                    onClick={() => {
                                                                        setSelectedBudget(option);
                                                                        setIsBudgetOpen(false);
                                                                    }}
                                                                    className="w-full px-6 py-3 text-left text-body hover:bg-accent/10 hover:text-white transition-colors flex items-center justify-between group"
                                                                >
                                                                    {option}
                                                                    {selectedBudget === option && (
                                                                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                                                    )}
                                                                </button>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                            {/* Hidden input for form submission if needed */}
                                            <input type="hidden" name="budget" value={selectedBudget} />
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="message" className="text-sm font-medium text-subtext">Project Details</label>
                                            <textarea
                                                id="message"
                                                required
                                                rows={5}
                                                className="w-full bg-surface-alt border border-border rounded-xl px-4 py-3 text-heading placeholder:text-subtext/60 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                                                placeholder="Tell us about your technical requirements..."
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="cta-button h-14 text-base w-full mt-2 justify-center"
                                            disabled={isSubmitting}
                                            style={{ opacity: isSubmitting ? 0.6 : 1, pointerEvents: isSubmitting ? 'none' : 'auto' }}
                                        >
                                            {isSubmitting ? "Transmitting..." : "Send Message"}
                                            <div className="cta-icon">
                                                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor" />
                                                </svg>
                                            </div>
                                        </button>
                                    </form>
                                )}
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Ultra-Grade Map Section */}
            <section className="pb-24 bg-surface-alt">
                <div className="max-w-[1280px] mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative w-full h-[500px] rounded-[2.5rem] overflow-hidden border border-white/5 group shadow-2xl"
                    >
                        {/* Ambient Glow */}
                        <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />

                        {/* High-End Map Header Overlay */}
                        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 px-8 py-3 rounded-full bg-card-bg/80 backdrop-blur-md border border-glass-border shadow-2xl">
                            <h2 className="text-xl md:text-2xl font-heading font-bold bg-gradient-to-r from-accent to-secondary-accent bg-clip-text text-transparent">
                                Visit Our Office
                            </h2>
                        </div>

                        {/* High-End Map Container */}
                        <div className="w-full h-full scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-out">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d916.5341460413717!2d91.40331842038323!3d23.027740831945554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375369b34ad880ad%3A0x164ca01aec37204e!2sHospital%20Rd!5e1!3m2!1sen!2sbd!4v1772838829921!5m2!1sen!2sbd"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="opacity-95"
                            ></iframe>
                        </div>

                        {/* Glass Overlay for aesthetics */}
                        <div className="absolute bottom-10 left-10 z-20 px-6 py-4 rounded-2xl bg-card-bg/80 backdrop-blur-md border border-glass-border shadow-xl">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                                <span className="text-heading font-medium">Headquarters</span>
                            </div>
                            <p className="text-sm text-subtext mt-1">Feni Sadar, Feni, Bangladesh</p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
