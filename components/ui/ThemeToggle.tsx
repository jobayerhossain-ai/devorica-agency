"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { cn } from "@/utils/cn";

export function ThemeToggle({ className }: { className?: string }) {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                "relative w-10 h-10 rounded-full flex items-center justify-center",
                "border border-border bg-glass backdrop-blur-sm",
                "hover:border-accent/50 hover:bg-accent/10",
                "transition-all duration-300 cursor-pointer",
                "group",
                className
            )}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
            {/* Sun icon - visible in dark mode */}
            <Sun
                className={cn(
                    "w-[18px] h-[18px] absolute transition-all duration-300",
                    theme === "dark"
                        ? "opacity-100 rotate-0 scale-100 text-accent"
                        : "opacity-0 rotate-90 scale-0 text-accent"
                )}
            />
            {/* Moon icon - visible in light mode */}
            <Moon
                className={cn(
                    "w-[18px] h-[18px] absolute transition-all duration-300",
                    theme === "light"
                        ? "opacity-100 rotate-0 scale-100 text-secondary-accent"
                        : "opacity-0 -rotate-90 scale-0 text-secondary-accent"
                )}
            />
        </button>
    );
}
