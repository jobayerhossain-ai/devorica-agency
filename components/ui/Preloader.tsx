"use client";

import { useEffect, useState } from "react";

export const Preloader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const minDuration = 1500; // 1.5 seconds minimum
        const startTime = Date.now();

        const handleLoad = () => {
            const elapsedTime = Date.now() - startTime;
            const remainingTime = Math.max(0, minDuration - elapsedTime);

            setTimeout(() => {
                setLoading(false);
            }, remainingTime);
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
            return () => window.removeEventListener("load", handleLoad);
        }
    }, []);

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
};
