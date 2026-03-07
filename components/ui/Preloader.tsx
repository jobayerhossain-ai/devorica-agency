"use client";

import { useEffect, useState } from "react";

export const Preloader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Hide preloader after window is fully loaded
        const handleLoad = () => {
            // Small delay for smooth transition
            setTimeout(() => {
                setLoading(false);
            }, 800);
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
            // Fallback in case load event doesn't fire
            const timeout = setTimeout(handleLoad, 3000);
            return () => {
                window.removeEventListener("load", handleLoad);
                clearTimeout(timeout);
            };
        }
    }, []);

    return (
        <div className={`preloader-container ${!loading ? "hidden" : ""}`}>
            <div className="preloader-frame">
                <div className="preloader-center">
                    <div className="preloader-dot dot-1"></div>
                    <div className="preloader-dot dot-2"></div>
                    <div className="preloader-dot dot-3"></div>
                </div>
            </div>
        </div>
    );
};
