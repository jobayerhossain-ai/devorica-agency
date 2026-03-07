"use client";

import { motion, HTMLMotionProps, Variants } from "framer-motion";
import { ReactNode } from "react";
import { fadeUpVariant, staggerContainer } from "@/animations/variants";

interface AnimatedRevealProps extends HTMLMotionProps<"div"> {
    children?: ReactNode;
    variants?: Variants;
    stagger?: boolean;
    once?: boolean;
    margin?: string;
    delay?: number;
}

export function AnimatedReveal({
    children,
    variants = fadeUpVariant,
    stagger = false,
    once = true,
    margin = "-100px",
    delay = 0,
    className,
    ...props
}: AnimatedRevealProps) {
    if (stagger) {
        return (
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once, margin }}
                variants={staggerContainer}
                className={className}
                {...props}
            >
                {children}
            </motion.div>
        );
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once, margin }}
            variants={variants}
            transition={{ delay }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}
