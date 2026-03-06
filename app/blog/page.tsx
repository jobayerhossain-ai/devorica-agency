import { Metadata } from "next";
import { BlogClient } from "./BlogClient";

// SEO Metadata for the Blog Index
export const metadata: Metadata = {
    title: "Insight & Engineering Blog | Devorica",
    description: "Read the latest insights on high-performance web development, Next.js architecture, scalable e-commerce, and modern UI/UX design from the engineering team at Devorica.",
    openGraph: {
        title: "Devorica Engineering Blog",
        description: "Technical deep-dives, case studies, and modern web development insights.",
        type: "website",
    }
};

export default function BlogPage() {
    return <BlogClient />;
}
