"use client";

import dynamic from "next/dynamic";
import { ReactNode } from "react";

const ReactLenis = dynamic(
    () => import("lenis/react").then((mod) => mod.ReactLenis),
    { ssr: false }
);

export function SmoothScrolling({ children }: { children: ReactNode }) {
    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
            {children}
        </ReactLenis>
    );
}
