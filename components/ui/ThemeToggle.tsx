"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return (
            <button className="w-10 h-10 rounded-xl border border-border bg-surface-elevated flex items-center justify-center" aria-label="Toggle theme">
                <div className="w-5 h-5" />
            </button>
        );
    }

    const isDark = theme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="w-10 h-10 rounded-xl border border-border bg-surface-elevated hover:bg-card-hover flex items-center justify-center transition-all duration-300 group"
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        >
            {isDark ? (
                <Sun className="w-5 h-5 text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
            ) : (
                <Moon className="w-5 h-5 text-indigo-500 group-hover:-rotate-12 transition-transform duration-300" />
            )}
        </button>
    );
}
