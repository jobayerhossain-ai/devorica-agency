"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { fadeUpVariant } from "@/animations/variants";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const TESTIMONIALS = [
    {
        quote: "Devorica built a fast and modern website for our business. The performance leap was immediately noticeable and leads increased by 40%.",
        name: "Sarah Jenkins",
        role: "CEO, InnovateTech",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
        rating: 5
    },
    {
        quote: "The team’s professionalism and attention to pixel-perfect design resulted in exactly the application we envisioned. Absolutely stellar work.",
        name: "Michael Chen",
        role: "Founder, SaaSFlow",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
        rating: 5
    },
    {
        quote: "They completely transformed our e-commerce platform. Our load times dropped to under a second and our conversion rate doubled.",
        name: "Emily Rodriguez",
        role: "Director of Marketing, RetailPro",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
        rating: 5
    }
];

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction: number) => {
            return {
                x: direction > 0 ? 100 : -100,
                opacity: 0,
                scale: 0.95
            };
        },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction: number) => {
            return {
                zIndex: 0,
                x: direction < 0 ? 100 : -100,
                opacity: 0,
                scale: 0.95
            };
        }
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        let nextIndex = currentIndex + newDirection;
        if (nextIndex < 0) nextIndex = TESTIMONIALS.length - 1;
        if (nextIndex >= TESTIMONIALS.length) nextIndex = 0;
        setCurrentIndex(nextIndex);
    };

    return (
        <Section id="testimonials" className="bg-[#0F172A] py-32 lg:py-24 border-y border-[#1F2937] overflow-hidden">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUpVariant}
            >
                <SectionTitle
                    label="Client Feedback"
                    title="Engineered for trust."
                    description="Hear what industry leaders are saying about our bespoke digital solutions."
                />
            </motion.div>

            <div className="relative max-w-5xl mx-auto mt-20 px-6 sm:px-12">
                {/* Carousel controls LG */}
                <div className="absolute top-1/2 -translate-y-1/2 left-0 z-20 hidden lg:block">
                    <button
                        onClick={() => paginate(-1)}
                        className="w-14 h-14 rounded-full bg-[#1F2937]/80 backdrop-blur-md border border-[#374151] flex items-center justify-center text-white hover:bg-accent hover:text-[#0B0B0B] transition-all duration-300 focus:outline-none shadow-2xl"
                    >
                        <ChevronLeft className="w-7 h-7" />
                    </button>
                </div>

                <div className="absolute top-1/2 -translate-y-1/2 right-0 z-20 hidden lg:block">
                    <button
                        onClick={() => paginate(1)}
                        className="w-14 h-14 rounded-full bg-[#1F2937]/80 backdrop-blur-md border border-[#374151] flex items-center justify-center text-white hover:bg-accent hover:text-[#0B0B0B] transition-all duration-300 focus:outline-none shadow-2xl"
                    >
                        <ChevronRight className="w-7 h-7" />
                    </button>
                </div>

                {/* Slides Container */}
                <div className="relative h-auto min-h-[480px] sm:min-h-[350px] w-full flex justify-center items-center">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.3 },
                                scale: { duration: 0.3 }
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);

                                if (swipe < -swipeConfidenceThreshold) {
                                    paginate(1);
                                } else if (swipe > swipeConfidenceThreshold) {
                                    paginate(-1);
                                }
                            }}
                            className="absolute w-full max-w-3xl bg-[#0B0B0B] p-10 lg:p-12 rounded-3xl border border-[#1F2937] shadow-2xl flex flex-col items-center text-center cursor-grab active:cursor-grabbing"
                        >
                            {/* Quote decoration */}
                            <div className="absolute top-10 left-10 text-7xl text-[#1F2937] font-heading font-black opacity-20 select-none hidden md:block leading-none">&quot;</div>
                            <div className="absolute bottom-10 right-10 text-7xl text-[#1F2937] font-heading font-black opacity-20 select-none hidden md:block leading-none rotate-180">&quot;</div>

                            <div className="flex gap-1.5 mb-8">
                                {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                                ))}
                            </div>

                            <p className="text-white text-xl md:text-2xl leading-relaxed mb-12 italic font-medium relative z-10 w-full px-2 lg:px-6">
                                &quot;{TESTIMONIALS[currentIndex].quote}&quot;
                            </p>

                            <div className="flex flex-col items-center gap-4 mt-auto">
                                <div className="w-16 h-16 rounded-full overflow-hidden border border-accent/20 relative shadow-xl shadow-black/40">
                                    <Image
                                        src={TESTIMONIALS[currentIndex].image}
                                        alt={TESTIMONIALS[currentIndex].name}
                                        fill
                                        className="object-cover"
                                        sizes="64px"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg tracking-tight">{TESTIMONIALS[currentIndex].name}</h4>
                                    <p className="text-[#9CA3AF] text-[11px] font-bold uppercase tracking-widest mt-1">{TESTIMONIALS[currentIndex].role}</p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Mobile / Native pagination dots */}
                <div className="flex justify-center gap-3 mt-12">
                    {TESTIMONIALS.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                setDirection(idx > currentIndex ? 1 : -1);
                                setCurrentIndex(idx);
                            }}
                            className={`h-1.5 rounded-full transition-all duration-500 ease-out ${currentIndex === idx ? "w-8 bg-accent" : "w-3 bg-white/10 hover:bg-white/20"
                                }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
}
