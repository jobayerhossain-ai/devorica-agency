"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUpVariant, staggerContainer } from "@/animations/variants";
import { CTA } from "@/sections/cta/CTA";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { BLOG_POSTS } from "@/constants/blog";

// Map the SEO database to the display format
const ALL_POSTS = Object.values(BLOG_POSTS).map(post => ({
    id: post.slug,
    title: post.title,
    excerpt: post.description,
    category: post.category,
    author: "Devorica Team",
    date: new Date(post.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    readTime: post.readingTime,
    image: post.image.url,
    href: `/blog/${post.slug}`
}));

const POSTS_PER_PAGE = 6;

export function BlogClient() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(ALL_POSTS.length / POSTS_PER_PAGE);
    const currentPosts = ALL_POSTS.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

    return (
        <div className="bg-surface-elevated">
            {/* Blog Header / Hero */}
            <section className="relative pt-40 pb-32 overflow-hidden border-b border-border">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-accent/5 blur-[120px] rounded-full z-0 pointer-events-none" />

                <div className="max-w-[1280px] mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeUpVariant}
                        className="flex flex-col items-center"
                    >
                        <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-border bg-card text-accent text-sm font-semibold tracking-wider uppercase">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                            Insights & Engineering
                        </div>
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold font-heading text-foreground mb-8 tracking-tighter leading-tight">
                            Devorica <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/60">Insights</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-foreground-muted max-w-3xl mx-auto leading-relaxed">
                            Technical deep-dives, architectural blueprints, and modern development perspectives from our engineering team.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Blog Grid Layout */}
            <section className="py-32">
                <div className="max-w-[1280px] mx-auto px-6">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        {currentPosts.map((post) => (
                            <motion.div
                                key={post.id}
                                variants={fadeUpVariant}
                                className="group flex flex-col h-full transition-all duration-500 ease-out hover:-translate-y-2"
                            >
                                <Link href={post.href} className="flex flex-col h-full bg-card rounded-xl border border-border overflow-hidden group-hover:border-accent/20 group-hover:shadow-2xl group-hover:shadow-accent/5 transition-all duration-500">
                                    {/* Article Image Preview */}
                                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-elevated">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                        <div className="absolute top-5 left-5 z-20">
                                            <span className="px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded-full border border-border bg-surface/40 backdrop-blur-md text-foreground">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Article Content Preview */}
                                    <div className="p-8 md:p-10 flex flex-col flex-1">
                                        {/* Metadata Row */}
                                        <div className="flex items-center gap-6 text-[11px] font-bold uppercase tracking-widest text-foreground-muted mb-6">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-3.5 h-3.5 text-accent" />
                                                <span>{post.date}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock className="w-3.5 h-3.5 text-accent" />
                                                <span>{post.readTime}</span>
                                            </div>
                                        </div>

                                        <h3 className="text-2xl font-bold font-heading text-foreground mb-4 group-hover:text-accent leading-tight transition-colors duration-300">
                                            {post.title}
                                        </h3>

                                        <p className="text-foreground-muted text-base leading-relaxed mb-8 flex-1">
                                            {post.excerpt}
                                        </p>

                                        {/* Footer Row */}
                                        <div className="flex items-center justify-between pt-8 border-t border-border mt-auto">
                                            <div className="flex flex-col">
                                                <span className="text-[11px] font-bold text-foreground-muted uppercase tracking-widest mb-1">Author</span>
                                                <span className="text-sm font-bold text-foreground tracking-tight">{post.author}</span>
                                            </div>
                                            <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground group-hover:border-accent/40 group-hover:bg-accent group-hover:text-black transition-all duration-500">
                                                <ArrowRight className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Interactive Pagination */}
                    {totalPages > 1 && (
                        <motion.div
                            className="mt-24 flex justify-center items-center gap-3"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <Button
                                variant="outline"
                                size="md"
                                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                disabled={currentPage === 1}
                                className="w-12 h-12 p-0 rounded-xl border-border bg-card hover:bg-accent hover:text-black hover:border-accent disabled:opacity-20 transition-all duration-300"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </Button>

                            {[...Array(totalPages)].map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentPage(i + 1)}
                                    className={`w-12 h-12 rounded-xl font-bold tracking-tight transition-all duration-300 ${currentPage === i + 1
                                        ? "bg-accent text-black border-accent"
                                        : "bg-card text-foreground border border-border hover:border-accent/50"
                                        }`}
                                >
                                    {i + 1}
                                </button>
                            ))}

                            <Button
                                variant="outline"
                                size="md"
                                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                disabled={currentPage === totalPages}
                                className="w-12 h-12 p-0 rounded-xl border-border bg-card hover:bg-accent hover:text-black hover:border-accent disabled:opacity-20 transition-all duration-300"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </Button>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Universal CTA */}
            <CTA />
        </div>
    );
}
