import { Globe, Code, Rocket, ShoppingCart, Smartphone, CheckCircle, ShieldCheck, Zap, LucideIcon } from "lucide-react";

export const CLIENT_TRUST_STATS = [
    {
        icon: CheckCircle,
        title: "100+ Projects",
        description: "Successfully Delivered",
    },
    {
        icon: Zap,
        title: "Fast & Scalable",
        description: "Built for Performance",
    },
    {
        icon: ShieldCheck,
        title: "Secure & Modern",
        description: "Enterprise Grade Tech",
    },
];

export interface NavLink {
    label: string;
    href: string;
}

export interface Service {
    title: string;
    href: string;
    description: string;
    icon: LucideIcon;
}

export interface ProcessStep {
    step: string;
    title: string;
    desc: string;
}

export interface Testimonial {
    quote: string;
    name: string;
    role: string;
    image: string;
    rating: number;
}

export interface Project {
    title: string;
    tech: string[];
    image: string;
    href: string;
}

export interface TechItem {
    name: string;
    logo: string;
}

export const NAV_LINKS: NavLink[] = [
    { label: "Home", href: "/" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];

export const SERVICES: Service[] = [
    {
        title: "Custom Website",
        href: "/services/custom-website-development",
        description: "Cinematic, high-performance web experiences that convert.",
        icon: Globe,
    },
    {
        title: "Web App Development",
        href: "/services/web-application-development",
        description: "Industrial-grade SaaS platforms and internal tools.",
        icon: Code,
    },
    {
        title: "Landing Page",
        href: "/services/landing-page-development",
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

export const PROCESS_STEPS: ProcessStep[] = [
    { step: "01", title: "Research", desc: "Understanding your business goals and user needs." },
    { step: "02", title: "Design", desc: "Crafting pixel-perfect, conversion-optimized visuals." },
    { step: "03", title: "Development", desc: "Writing clean, scalable code on modern stacks." },
    { step: "04", title: "Testing", desc: "Rigorous QA for performance and cross-browser stability." },
    { step: "05", title: "Launch", desc: "Deploying seamlessly and monitoring analytics." }
];

export const CLIENT_TESTIMONIALS: Testimonial[] = [
    {
        quote: "Devorica built a fast and modern website for our business. The performance leap was immediately noticeable and leads increased by 40%.",
        name: "Sarah Jenkins",
        role: "CEO, InnovateTech",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
        rating: 5
    },
    {
        quote: "The team’s professionalism and attention to pixel-perfect design resulted in exactly the application we envisioned. Absolutely stellar work.",
        name: "Michael Chen",
        role: "Founder, SaaSFlow",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
        rating: 5
    },
    {
        quote: "They completely transformed our e-commerce platform. Our load times dropped to under a second and our conversion rate doubled.",
        name: "Emily Rodriguez",
        role: "Director of Marketing, RetailPro",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
        rating: 5
    }
];

export const PROJECTS: Project[] = [
    {
        title: "FinTech Dashboard",
        tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        href: "/portfolio/fintech"
    },
    {
        title: "E-Commerce Platform",
        tech: ["React", "Node.js", "Stripe"],
        image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=800",
        href: "/portfolio/ecommerce"
    },
    {
        title: "SaaS Marketing Site",
        tech: ["Next.js", "GSAP", "Sanity"],
        image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800",
        href: "/portfolio/saas"
    }
];

export const TECH_STACK: TechItem[] = [
    {
        name: "Laravel",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg"
    },
    {
        name: "React",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
    },
    {
        name: "Next.js",
        logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
    },
    {
        name: "Node.js",
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
    },
    {
        name: "Python",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
    },
    {
        name: "Tailwind CSS",
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
    }
];
