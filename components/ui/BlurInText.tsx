"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface BlurInTextProps {
    text: string;
    className?: string;
    delayOffset?: number;
}

export const BlurInText = ({ text, className, delayOffset = 0 }: BlurInTextProps) => {
    return (
        <motion.span
            className={cn("inline-flex whitespace-pre-wrap", className)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
                hidden: { opacity: 1 },
                visible: {
                    opacity: 1,
                    transition: {
                        delayChildren: delayOffset,
                        staggerChildren: 0.05
                    }
                }
            }}
        >
            {text.split('').map((char, i) => (
                <motion.span
                    key={i}
                    variants={{
                        hidden: { opacity: 0, filter: "blur(10px)" },
                        visible: { opacity: 1, filter: "blur(0px)" }
                    }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut"
                    }}
                    className="inline-block"
                >
                    {char === ' ' ? '\u00A0' : char}
                </motion.span>
            ))}
        </motion.span>
    );
};
