"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Facebook, Instagram, Github, Linkedin } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();
    const [mounted, setMounted] = useState(false);
    const { theme, systemTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    const currentTheme = theme === 'system' ? systemTheme : theme;
    const isLight = mounted && currentTheme === 'light';
    const logoSrc = isLight
        ? "/images/Black Closed Sign Landscape Poster (1).png"
        : "/images/logo.png";

    return (
        <footer className="bg-surface border-t border-border pt-20 pb-10 transition-colors duration-300">
            <div className="max-w-[1280px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                    {/* Column 1: Brand & Description */}
                    <div className="flex flex-col gap-6">
                        <Link href="/" className="inline-block">
                            <Image
                                src={logoSrc}
                                alt="Devorica Logo"
                                width={230}
                                height={92}
                                className="h-[92px] w-auto object-contain shrink-0 transition-opacity duration-300"
                            />
                        </Link>
                        <p className="text-foreground-muted text-base leading-relaxed max-w-sm">
                            We build fast, scalable, and modern digital products for growing businesses. High-performance custom websites &amp; web applications that convert.
                        </p>
                        <ul className="social-icons">
                            <li className="icon-content">
                                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page" data-social="facebook" className="social-link">
                                    <Facebook />
                                </a>
                                <div className="tooltip">Facebook</div>
                            </li>
                            <li className="icon-content">
                                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram profile" data-social="instagram" className="social-link">
                                    <Instagram />
                                </a>
                                <div className="tooltip">Instagram</div>
                            </li>
                            <li className="icon-content">
                                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Visit our GitHub repository" data-social="github" className="social-link">
                                    <Github />
                                </a>
                                <div className="tooltip">GitHub</div>
                            </li>
                            <li className="icon-content">
                                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Visit our LinkedIn profile" data-social="linkedin" className="social-link">
                                    <Linkedin />
                                </a>
                                <div className="tooltip">LinkedIn</div>
                            </li>
                        </ul>
                    </div>

                    {/* Column 2: Services */}
                    <div>
                        <h4 className="text-foreground font-semibold mb-6">Services</h4>
                        <ul className="flex flex-col gap-4">
                            <li><Link href="/services#website" className="text-foreground-muted hover:text-foreground transition-colors">Custom Website</Link></li>
                            <li><Link href="/services#webapp" className="text-foreground-muted hover:text-foreground transition-colors">Web App Development</Link></li>
                            <li><Link href="/services#landing-page" className="text-foreground-muted hover:text-foreground transition-colors">Landing Page</Link></li>
                            <li><Link href="/services#ecommerce" className="text-foreground-muted hover:text-foreground transition-colors">Ecommerce Development</Link></li>
                            <li><Link href="/services#app" className="text-foreground-muted hover:text-foreground transition-colors">App Development</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Company */}
                    <div>
                        <h4 className="text-foreground font-semibold mb-6">Company</h4>
                        <ul className="flex flex-col gap-4">
                            <li><Link href="/about" className="text-foreground-muted hover:text-foreground transition-colors">About Us</Link></li>
                            <li><Link href="/portfolio" className="text-foreground-muted hover:text-foreground transition-colors">Portfolio</Link></li>
                            <li><Link href="/blog" className="text-foreground-muted hover:text-foreground transition-colors">Blog</Link></li>
                            <li><Link href="/contact" className="text-foreground-muted hover:text-foreground transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h4 className="text-foreground font-semibold mb-6">Contact</h4>
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-start gap-3 text-foreground-muted">
                                <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                <a href="mailto:support@devorica.com" className="hover:text-foreground transition-colors">support@devorica.com</a>
                            </li>
                            <li className="flex items-start gap-3 text-foreground-muted">
                                <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                <a href="tel:+8801619504428" className="hover:text-foreground transition-colors">+8801619504428</a>
                            </li>
                            <li className="flex items-start gap-3 text-foreground-muted">
                                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                <span>Feni Sadar, Feni</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground-muted">
                    <p>© {currentYear} Devorica. All rights reserved.</p>
                    <div className="flex flex-wrap justify-center md:justify-end gap-6">
                        <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
                        <Link href="/cookies" className="hover:text-foreground transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
