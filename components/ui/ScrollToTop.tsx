"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 400);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.3 }}
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                    className="cursor-pointer fixed bottom-8 right-8 z-50 after:content-['scroll\_to\_top'] after:text-white after:absolute after:text-nowrap after:scale-0 hover:after:scale-100 after:duration-200 w-14 h-14 rounded-full border-4 border-accent/40 bg-[#0F172A] flex items-center justify-center duration-300 hover:rounded-[50px] hover:w-36 group/button overflow-hidden active:scale-90 shadow-2xl shadow-black/60 hover:border-accent/60"
                >
                    <svg
                        className="w-3 fill-white delay-50 duration-200 group-hover/button:-translate-y-12"
                        viewBox="0 0 384 512"
                    >
                        <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                    </svg>
                </motion.button>
            )}
        </AnimatePresence>
    );
}
