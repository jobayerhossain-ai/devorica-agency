"use client";

import { motion } from "framer-motion";
import { fadeUpVariant, staggerContainer } from "@/animations/variants";
import { BlogPost } from "@/constants/blog";
import { CTA } from "@/sections/cta/CTA";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ChevronRight, Share2 } from "lucide-react";

export default function BlogArticleView({ post }: { post: BlogPost }) {
    return (
        <article className="min-h-screen bg-surface">
            {/* Article Hero */}
            <section className="relative pt-40 pb-20 overflow-hidden border-b border-border bg-surface-elevated">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-accent/5 blur-[120px] rounded-full z-0 pointer-events-none" />

                <div className="max-w-[1280px] mx-auto px-6 relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-4xl mx-auto"
                    >
                        {/* Breadcrumbs */}
                        <nav className="flex items-center gap-2 mb-8 text-sm font-medium text-foreground-muted">
                            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-foreground truncate">{post.title}</span>
                        </nav>

                        <motion.h1
                            variants={fadeUpVariant}
                            className="text-4xl md:text-5xl lg:text-6xl font-black font-heading text-foreground mb-8 leading-tight tracking-tighter"
                        >
                            {post.title}
                        </motion.h1>

                        <motion.div variants={fadeUpVariant} className="flex flex-wrap items-center gap-6 text-foreground-muted border-t border-border/50 pt-8">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-accent" />
                                <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-accent" />
                                <span>{post.readingTime}</span>
                            </div>
                            <div className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest">
                                {post.category}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Article Content Area */}
            <section className="py-20">
                <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* Main Content */}
                    <div className="lg:col-span-8">
                        <div className="prose prose-invert prose-lg max-w-none">
                            <p className="text-xl leading-relaxed text-foreground-muted mb-12 font-medium">
                                {post.content.introduction}
                            </p>

                            {post.content.sections.map((section, idx) => (
                                <div key={idx} className="mb-12">
                                    <h2 className="text-3xl font-black font-heading text-foreground mb-6 tracking-tight">
                                        {section.title}
                                    </h2>
                                    <div className="text-foreground-muted leading-relaxed mb-8 whitespace-pre-wrap">
                                        {section.content}
                                    </div>

                                    {section.subsections?.map((sub, sidx) => (
                                        <div key={sidx} className="mb-8 pl-6 border-l-2 border-accent/20">
                                            <h3 className="text-xl font-bold font-heading text-foreground mb-4">
                                                {sub.title}
                                            </h3>
                                            <p className="text-foreground-muted leading-relaxed">
                                                {sub.content}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            ))}

                            {/* FAQ Section */}
                            {post.content.faqs.length > 0 && (
                                <div className="mt-20 p-8 md:p-12 rounded-[40px] bg-card border border-border">
                                    <h2 className="text-2xl font-black font-heading text-foreground mb-8 uppercase tracking-widest">Frequently Asked Questions</h2>
                                    <div className="space-y-8">
                                        {post.content.faqs.map((faq, fidx) => (
                                            <div key={fidx} className="space-y-3">
                                                <h4 className="text-lg font-bold text-accent">{faq.question}</h4>
                                                <p className="text-foreground-muted leading-relaxed">{faq.answer}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="mt-20 pt-10 border-t border-border">
                                <h2 className="text-2xl font-black font-heading text-foreground mb-4">Conclusion</h2>
                                <p className="text-foreground-muted leading-relaxed">
                                    {post.content.conclusion}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4 space-y-12">
                        {/* Quick Links / Related Services */}
                        <div className="p-8 rounded-[32px] bg-card border border-border shadow-2xl">
                            <h4 className="text-xs font-bold text-accent uppercase tracking-[0.2em] mb-6">Expert Solutions</h4>
                            <ul className="space-y-4">
                                {post.internalLinks.map((link, lidx) => (
                                    <li key={lidx}>
                                        <Link href={link.href} className="group flex items-center justify-between p-4 rounded-2xl bg-surface-elevated border border-border hover:border-accent/40 transition-all duration-300">
                                            <span className="font-bold text-sm group-hover:text-accent transition-colors">{link.text}</span>
                                            <ChevronRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Newsletter or Mini CTA */}
                        <div className="p-8 rounded-[32px] bg-accent/10 border border-accent/20 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-[50px] rounded-full" />
                            <h4 className="text-lg font-black text-foreground mb-4 relative z-10">Start Your Digital Growth</h4>
                            <p className="text-sm text-foreground-muted mb-6 relative z-10">Get a custom engineered solution for your business in Bangladesh.</p>
                            <Link href="/contact" className="inline-block px-6 py-3 rounded-full bg-accent text-white text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all relative z-10">
                                Book a Free Consultation
                            </Link>
                        </div>
                    </aside>

                </div>
            </section>

            {/* Global CTA */}
            <CTA />
        </article>
    );
}
