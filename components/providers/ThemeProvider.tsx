"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>("dark");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Read stored preference or default to dark
        const stored = localStorage.getItem("theme") as Theme | null;
        const initialTheme = stored || "dark";
        setTheme(initialTheme);
        applyTheme(initialTheme);
        setMounted(true);

        // Remove no-transition class after first paint
        requestAnimationFrame(() => {
            document.documentElement.classList.remove("no-transition");
        });
    }, []);

    function applyTheme(t: Theme) {
        const root = document.documentElement;
        if (t === "light") {
            root.classList.add("light");
        } else {
            root.classList.remove("light");
        }
    }

    function toggleTheme() {
        const next: Theme = theme === "dark" ? "light" : "dark";
        setTheme(next);
        applyTheme(next);
        localStorage.setItem("theme", next);
    }

    // Prevent hydration mismatch — render children immediately,
    // the inline script in layout handles initial class
    return (
        <ThemeContext.Provider value={{ theme: mounted ? theme : "dark", toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
