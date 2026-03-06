"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Globe, Code, Rocket, ShoppingCart, Smartphone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];

const SERVICES = [
    {
        title: "Custom Website",
        href: "/services/custom-website",
        description: "Cinematic, high-performance web experiences that convert.",
        icon: Globe,
    },
    {
        title: "Web App Development",
        href: "/services/web-app-development",
        description: "Industrial-grade SaaS platforms and internal tools.",
        icon: Code,
    },
    {
        title: "Landing Page",
        href: "/services/landing-page",
        description: "Hyper-optimized pages designed for maximum conversion.",
        icon: Rocket,
    },
    {
        title: "Ecommerce Development",
        href: "/services/ecommerce-development",
        description: "Premium shopping experiences that maximize AOV.",
        icon: ShoppingCart,
    },
    {
        title: "App Development",
        href: "/services/app-development",
        description: "Cross-platform mobile apps with native performance.",
        icon: Smartphone,
    },
];

// Mobile nav links include Services as a plain link
const MOBILE_NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu instantly on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Close mobile menu on resize to prevent UI glitches
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setIsOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-[#0F172A]/80 backdrop-blur-md border-b border-[#1F2937]/50 shadow-sm py-3"
                : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 relative z-50 group">
                    <Image
                        src="/images/logo.png"
                        alt="Devorica Logo"
                        width={230}
                        height={92}
                        className="h-[92px] w-auto object-contain -my-6"
                        priority
                    />
                </Link>

                {/* Desktop Navigation with Radix NavigationMenu */}
                <div className="hidden lg:flex items-center">
                    <NavigationMenu>
                        <NavigationMenuList>
                            {/* Home Link */}
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    className={navigationMenuTriggerStyle()}
                                    asChild
                                >
                                    <Link
                                        href="/"
                                        className={pathname === "/" ? "!text-accent" : "text-subtext"}
                                    >
                                        Home
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            {/* Services Dropdown */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger
                                    className={`${pathname?.startsWith("/services") ? "!text-accent" : "text-subtext"}`}
                                >
                                    Services
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[420px] gap-1 p-3 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                        {SERVICES.map((service) => {
                                            const Icon = service.icon;
                                            return (
                                                <li key={service.title}>
                                                    <NavigationMenuLink asChild>
                                                        <Link
                                                            href={service.href}
                                                            className="group/item flex items-start gap-3 select-none rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-white/5 focus:bg-white/5"
                                                        >
                                                            <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-accent/20 transition-colors">
                                                                <Icon className="w-4 h-4 text-accent" />
                                                            </div>
                                                            <div className="flex flex-col gap-1">
                                                                <div className="text-sm font-semibold leading-none text-white">
                                                                    {service.title}
                                                                </div>
                                                                <p className="line-clamp-2 text-xs leading-snug text-[#9CA3AF]">
                                                                    {service.description}
                                                                </p>
                                                            </div>
                                                        </Link>
                                                    </NavigationMenuLink>
                                                </li>
                                            );
                                        })}
                                        {/* View All Link */}
                                        <li className="col-span-full">
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    href="/services"
                                                    className="flex items-center justify-center rounded-lg p-3 text-xs font-bold text-accent uppercase tracking-widest hover:bg-accent/5 transition-colors border-t border-white/5 mt-1"
                                                >
                                                    View All Services →
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* Other Nav Links */}
                            {NAV_LINKS.filter(l => l.label !== "Home").map((link) => {
                                const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
                                return (
                                    <NavigationMenuItem key={link.label}>
                                        <NavigationMenuLink
                                            className={navigationMenuTriggerStyle()}
                                            asChild
                                        >
                                            <Link
                                                href={link.href}
                                                className={isActive ? "!text-accent" : "text-subtext"}
                                            >
                                                {link.label}
                                            </Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                );
                            })}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Desktop CTA */}
                <div className="hidden lg:flex items-center">
                    <Link href="/contact">
                        <button className="cta-button">
                            Start Project
                            <div className="cta-icon">
                                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor" />
                                </svg>
                            </div>
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden relative z-[1000] p-2 text-white outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                    aria-expanded={isOpen}
                >
                    <div className={`hamburger-toggle ${isOpen ? "is-open" : ""}`}>
                        <span className="bar" />
                        <span className="bar" />
                        <span className="bar" />
                    </div>
                </button>

                {/* Mobile Navigation Menu */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-[#0F172A] z-[999] flex flex-col items-center justify-center lg:hidden overflow-hidden"
                        style={{ minHeight: "100dvh" }}
                    >
                        <nav className="flex flex-col items-center gap-8" aria-label="Mobile navigation">
                            {MOBILE_NAV_LINKS.map((link, i) => {
                                const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
                                return (
                                    <motion.div
                                        key={link.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className={`text-2xl font-heading font-medium transition-colors ${isActive ? "text-accent" : "text-white hover:text-accent"
                                                }`}
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: MOBILE_NAV_LINKS.length * 0.1 }}
                                className="pt-4"
                            >
                                <Link href="/contact" onClick={() => setIsOpen(false)} className="w-full inline-block">
                                    <button className="cta-button w-full min-w-[200px] justify-center text-lg">
                                        Start Project
                                        <div className="cta-icon">
                                            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 0h24v24H0z" fill="none" />
                                                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor" />
                                            </svg>
                                        </div>
                                    </button>
                                </Link>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </div>
        </header>
    );
}
