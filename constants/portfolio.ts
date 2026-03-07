export interface ProjectDetail {
    slug: string;
    title: string;
    category: string;
    client: string;
    year: string;
    services: string[];
    techStack: string[];
    description: string;
    challenge: string;
    solution: string;
    results: string[];
    mainImage: string;
    gallery: string[];
    liveUrl?: string;
}

export const PORTFOLIO_PROJECTS: Record<string, ProjectDetail> = {
    "fintech-dashboard": {
        slug: "fintech-dashboard",
        title: "FinTech Narrative Dashboard",
        category: "Web Application",
        client: "Nexus Finance",
        year: "2024",
        services: ["UI/UX Design", "System Architecture", "Frontend Development"],
        techStack: ["Next.js 15", "Tailwind CSS", "Framer Motion", "Recharts"],
        description: "A high-performance financial dashboard designed to visualize complex market data into actionable insights for institutional investors.",
        challenge: "The client needed to display millions of real-time data points without overwhelming the user or compromising browser performance. The existing solution was sluggish and lacked mobile responsiveness.",
        solution: "We engineered a custom data streaming layer using Server Components and optimized the rendering cycle of visualization components. We implemented a 'Glassmorphism' design language to create a premium, modern feel.",
        results: [
            "45% increase in user retention",
            "Sub-2s initial load time with millions of data points",
            "Seamless performance on mobile devices"
        ],
        mainImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
        gallery: [
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=800"
        ],
        liveUrl: "https://nexus-finance-demo.vercel.app"
    },
    "ecommerce-platform": {
        slug: "ecommerce-platform",
        title: "Luxura E-Commerce Engine",
        category: "E-Commerce",
        client: "Luxura Global",
        year: "2023",
        services: ["E-commerce Strategy", "Headless Development", "SEO Optimization"],
        techStack: ["Next.js", "Shopify Hydrogen", "Tailwind CSS", "Stripe"],
        description: "A premium headless e-commerce platform for a luxury fashion brand, focused on cinematic product storytelling and frictionless checkout.",
        challenge: "The brand struggled with high bounce rates on product pages due to slow load times of high-resolution heritage images and a complex multi-step checkout.",
        solution: "We implemented a headless architecture using Shopify's Storefront API and Next.js. We used advanced image optimization and a one-page persistent checkout flow to maximize conversion.",
        results: [
            "32% increase in average order value",
            "Bounce rate reduced by 50%",
            "Mobile conversion rate doubled within 3 months"
        ],
        mainImage: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=1200",
        gallery: [
            "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800"
        ],
        liveUrl: "https://luxura-store.com"
    },
    "saas-marketing-site": {
        slug: "saas-marketing-site",
        title: "CloudSync SaaS Ecosystem",
        category: "SaaS Marketing",
        client: "CloudSync Inc.",
        year: "2024",
        services: ["Brand Strategy", "Interactive Design", "Animation Engineering"],
        techStack: ["Next.js", "GSAP ScrollTrigger", "Lenis", "Sanity CMS"],
        description: "A high-conversion marketing site for a cloud infrastructure provider, featuring immersive scroll-based storytelling and interactive technical demos.",
        challenge: "CloudSync had a complex technical product that was difficult to explain through static text. They needed a way to visually demonstrate their infrastructure benefits.",
        solution: "We built a narrative-driven experience using GSAP for complex scroll-triggered animations. We integrated 3D-like CSS transformations to visualize data flow and cloud processes in real-time.",
        results: [
            "60% increase in demo requests",
            "Average time on page increased by 3 minutes",
            "100/100 Lighthouse SEO and Performance scores"
        ],
        mainImage: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=1200",
        gallery: [
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
        ]
    }
};
