"use client";

import { useEffect, useState } from "react";

export function Preloader() {
    const [loading, setLoading] = useState(true);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const minDuration = 2000; // 2 seconds minimum
        const startTime = Date.now();
        let timeoutId: NodeJS.Timeout;

        const handleLoad = () => {
            const elapsedTime = Date.now() - startTime;
            const remainingTime = Math.max(0, minDuration - elapsedTime);

            timeoutId = setTimeout(() => {
                setLoading(false);
            }, remainingTime);
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
            // Fallback in case load event somehow misses
            const fallbackId = setTimeout(handleLoad, 3000);

            return () => {
                window.removeEventListener("load", handleLoad);
                clearTimeout(fallbackId);
                if (timeoutId) clearTimeout(timeoutId);
            };
        }

        return () => {
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, []);

    // SSR and initial client render should be identical
    if (!isMounted) {
        return (
            <div className="preloader-container">
                <div className="preloader-frame">
                    <div className="preloader-center">
                        <div className="preloader-dot dot-1"></div>
                        <div className="preloader-dot dot-2"></div>
                        <div className="preloader-dot dot-3"></div>
                        <p className="preloader-text">Loading...</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={`preloader-container ${!loading ? "hidden" : ""}`}>
            <div className="preloader-frame">
                <div className="preloader-center">
                    <div className="preloader-dot dot-1"></div>
                    <div className="preloader-dot dot-2"></div>
                    <div className="preloader-dot dot-3"></div>
                    <p className="preloader-text">Loading...</p>
                </div>
            </div>
        </div>
    );
}
