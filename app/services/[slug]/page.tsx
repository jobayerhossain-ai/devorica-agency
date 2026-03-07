import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceTemplate } from "../../../components/layout/ServiceTemplate";

// Static database of official DevOrica services synced with the 5-service list
export const SERVICES_DB = {
    "custom-website-development": {
        title: "Custom Website",
        description: "Transform your brand with a high-performance digital asset. We engineer cinematic web experiences that combine artistic design with precision engineering to command market authority.",
        features: [
            { title: "Cinematic Motion", desc: "Fluid, high-performance animations using Framer Motion that guide the user journey without compromising speed." },
            { title: "Edge Performance", desc: "Server-Side Rendering (SSR) for sub-second load times globally, achieving 99+ Lighthouse scores." },
            { title: "SEO First", desc: "Advanced technical SEO structures with Schema.org markup and automated sitemap generation." },
            { title: "Custom CMS", desc: "Headless CMS integrations like Sanity or Contentful for easy, non-technical content management." }
        ],
        process: [
            { step: "01", title: "Discovery & Strategy", desc: "Deep dive into your brand DNA, values, and competitive market positioning." },
            { step: "02", title: "Technical Architecture", desc: "Planning site mapping, data structures, and SEO configuration." },
            { step: "03", title: "Agile Engineering", desc: "Clean code development using Next.js 15, TypeScript, and high-performance Tailwind styling." },
            { step: "04", title: "Optimization & Launch", desc: "Rigorous performance audits, Core Web Vitals testing, and global edge deployment." }
        ],
        expertInsights: [
            { title: "Art Meets Engineering", icon: "Zap", desc: "A great website is both a piece of art and a precise machine. We refuse to compromise on either." },
            { title: "Excellence Over Speed", icon: "Shield", desc: "World-class work takes time. We focus on industrial-grade quality that stands the test of time." }
        ],
        impactMetrics: [
            { value: "< 2.0s", label: "Target LCP" },
            { value: "45%", label: "Avg. ROI Growth" },
            { value: "98/100", label: "PageSpeed Score" }
        ],
        techStack: ["Next.js 15", "Tailwind CSS", "Framer Motion", "TypeScript", "Sanity CMS", "Vercel Edge"],
    },
    "web-application-development": {
        title: "Web App Development",
        description: "Industrial-grade applications engineered for scale, security, and peak operational performance. We build robust SaaS platforms and internal tools that streamline complex business logic.",
        features: [
            { title: "Dynamic Dashboards", desc: "Interactive data visualization, real-time management portals, and complex analytical tools." },
            { title: "Robust Security", desc: "Bank-grade authentication (MFA), role-based access control (RBAC), and AES-256 data encryption." },
            { title: "Scalable APIs", desc: "High-throughput REST or GraphQL APIs designed for low latency and high concurrency." },
            { title: "Cloud Integration", desc: "Cloud-native infrastructure with auto-scaling capabilities on AWS, Azure, or GCP." }
        ],
        process: [
            { step: "01", title: "Product Strategy", desc: "Defining user personas, core business logic, and MVP feature sets." },
            { step: "02", title: "Architecture Design", desc: "Designing database schemas, microservices architecture, and API contracts." },
            { step: "03", title: "Full-Stack Build", desc: "End-to-end development of reactive frontends and high-performance backends." },
            { step: "04", title: "UAT & Deployment", desc: "Rigorous automated testing, security audits, and production-ready scaling." }
        ],
        expertInsights: [
            { title: "Security by Design", icon: "Lock", desc: "Implementing OWASP Top 10 protections and secure session management to protect sensitive business data." },
            { title: "Microservices Scalability", icon: "Layers", desc: "Building modular systems that scale individual components independently to handle 10x traffic spikes." }
        ],
        impactMetrics: [
            { value: "99.9%", label: "Uptime SLA" },
            { value: "10x", label: "Traffic Scaling" },
            { value: "45%", label: "Cost Efficiency" }
        ],
        techStack: ["React 19", "Node.js", "PostgreSQL", "Next.js", "Redis", "Docker", "Kubernetes"],
    },
    "landing-page-development": {
        title: "Landing Page",
        description: "Hyper-optimized experiences designed with conversion psychology to turn visitors into high-value customers efficienty. Perfect for high-stakes marketing and product launches.",
        features: [
            { title: "Conversion Focus", desc: "Built with visual hierarchy and psychological triggers to maximize user conversion ROI." },
            { title: "Instant Loading", desc: "Optimized critical path rendering ensuring pages load within 3 seconds even on mobile data." },
            { title: "Lead Integration", desc: "Automated lead capture flowing directly into HubSpot, Mailchimp, or custom CRMs." },
            { title: "Visual Hierarchy", desc: "Directing the user's eye to the primary CTA through strategic use of whitespace and contrast." }
        ],
        process: [
            { step: "01", title: "Audit & Strategy", desc: "Analyzing campaign goals, target audience, and primary user objections." },
            { step: "02", title: "Visual Flow", desc: "Designing a clear, distraction-free layout focused on a single conversion goal." },
            { step: "03", title: "Rapid Engineering", desc: "High-velocity development using optimized assets for instant market entry." },
            { step: "04", title: "Optimization", desc: "Deployment with heatmapping and detailed conversion tracking integration." }
        ],
        expertInsights: [
            { title: "Speed to Conversion", icon: "Zap", desc: "Research shows every 1-second delay can reduce conversions by 8.4%. We target sub-second interactivity." },
            { title: "Outcome-Based Design", icon: "Eye", desc: "Every pixel is placed with a purpose: to drive the user towards your primary business objective." }
        ],
        impactMetrics: [
            { value: "9.8%", label: "Avg. Conv. Rate" },
            { value: "< 1s", label: "TBT Target" },
            { value: "2x", label: "Lead Generation" }
        ],
        techStack: ["Next.js", "Tailwind CSS", "Lenis Scroll", "Framer Motion", "GTM"],
    },
    "ecommerce-development": {
        title: "Ecommerce Development",
        description: "Premium shopping experiences that remove friction, build trust, and maximize average order value. We build high-capacity stores capable of handling massive global traffic.",
        features: [
            { title: "Headless Commerce", desc: "Modern decoupled architecture separating the frontend for 50% faster loading speeds." },
            { title: "Secure Checkout", desc: "Low-friction, PCI-compliant payment flows with Stripe and digital wallet integrations." },
            { title: "Multi-Currency", desc: "Automatic localization of pricing, taxes, and shipping rates for global markets." },
            { title: "Advanced Search", desc: "Instant faceted search with Algolia integration for ultra-fast product discovery." }
        ],
        process: [
            { step: "01", title: "Store Strategy", desc: "Catalog mapping, tax configuration, and shipping logic planning." },
            { step: "02", title: "UX Architecture", desc: "Designing seamless product discovery and intuitive mobile shopping." },
            { step: "03", title: "Commerce Build", desc: "Integrating Headless Shopify or custom engines with Next.js frontend." },
            { step: "04", title: "Security Audit", desc: "PCI compliance checks and production deployment for high volume." }
        ],
        expertInsights: [
            { title: "Headless Advantage", icon: "ShoppingCart", desc: "Decoupled frontends result in a median 15-30% increase in conversion rates due to superior UX." },
            { title: "Omnichannel Reach", icon: "Globe", desc: "Unified commerce logic serving web, mobile apps, and social commerce from a single source." }
        ],
        impactMetrics: [
            { value: "42%", label: "Conv. Increase" },
            { value: "23%", label: "Bounce Reduction" },
            { value: "50%", label: "Faster Market Speed" }
        ],
        techStack: ["Shopify Plus", "Next.js Commerce", "Stripe", "PostgreSQL", "Zustand", "Algolia"],
    },
    "app-development": {
        title: "App Development",
        description: "High-performance cross-platform solutions that extend your brand's reach and foster deep user retention. We build mobile experiences that users love to keep in their pockets.",
        features: [
            { title: "Hybrid Efficiency", desc: "90% code sharing between iOS and Android, reducing development costs by 40%." },
            { title: "Modern Performance", desc: "Utilizing React Native's new Fabric architecture for native-grade responsiveness." },
            { title: "Adaptive Layout", desc: "Pixel-perfect interfaces optimized for foldable devices and all screen sizes." },
            { title: "Cloud Sync", desc: "Robust offline-first data synchronization using TanStack Query and local storage." }
        ],
        process: [
            { step: "01", title: "Product Mapping", desc: "Prioritizing mobile features and defining user retention strategies." },
            { step: "02", title: "Mobile UX Design", desc: "Designing touch-friendly, high-performance UI components and flows." },
            { step: "03", title: "App Engineering", desc: "Developing cross-platform builds with React Native and Expo." },
            { step: "04", title: "Launch Support", desc: "Managing App Store & Google Play publication and analytics setup." }
        ],
        expertInsights: [
            { title: "The Fabric Engine", icon: "Smartphone", desc: "Direct access to native UI primitives ensures silky smooth 60fps animations in every interaction." },
            { title: "User Retention", icon: "Bell", desc: "Advanced push notification strategies designed to increase Daily Active Users (DAU)." }
        ],
        impactMetrics: [
            { value: "40%", label: "Cost Reduction" },
            { value: "90%", label: "Code Sharing" },
            { value: "20%", label: "Market Growth" }
        ],
        techStack: ["React Native", "Expo", "TypeScript", "TanStack Query", "Firebase", "Zustand"],
    }
};

export async function generateStaticParams() {
    return Object.keys(SERVICES_DB).map((slug) => ({
        slug,
    }));
}

const SEO_DATA: Record<string, { title: string, description: string, keywords: string[] }> = {
    "custom-website-development": {
        title: "Custom Website Development in Bangladesh | Devorica",
        description: "Professional custom website development services for businesses in Bangladesh. Fast, scalable, and SEO optimized websites.",
        keywords: ["custom website development bangladesh"]
    },
    "web-application-development": {
        title: "Web Application Development in Bangladesh | Devorica",
        description: "We develop powerful web applications using modern technologies for startups and businesses.",
        keywords: ["web application development bangladesh"]
    },
    "landing-page-development": {
        title: "Landing Page Development in Bangladesh | Devorica",
        description: "High converting landing pages designed for marketing campaigns and product launches.",
        keywords: ["landing page development bangladesh"]
    },
    "ecommerce-development": {
        title: "Ecommerce Development in Bangladesh | Devorica",
        description: "Premium ecommerce shopping experiences that build trust and maximize average order value.",
        keywords: ["ecommerce development bangladesh", "ecommerce website development"]
    },
    "app-development": {
        title: "App Development in Bangladesh | Devorica",
        description: "High-performance cross-platform mobile app development services in Bangladesh.",
        keywords: ["mobile app development bangladesh", "app development company"]
    }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const seo = SEO_DATA[slug];

    if (!seo) {
        return {
            title: "Web Development Services | Devorica",
            description: "Explore our premium web development services."
        };
    }

    return {
        title: seo.title,
        description: seo.description,
        keywords: seo.keywords,
        openGraph: {
            title: seo.title,
            description: seo.description,
            type: "website",
        }
    };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = SERVICES_DB[slug as keyof typeof SERVICES_DB];

    if (!service) {
        notFound();
    }

    return <ServiceTemplate service={service} />;
}
