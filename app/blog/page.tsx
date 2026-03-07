import { Metadata } from "next";
import { BlogClient } from "./BlogClient";

// SEO Metadata for the Blog Index
export const metadata: Metadata = {
    title: "Web Development Blog | Devorica",
    description: "Guides, tutorials, and insights about web development, website design, and modern technologies.",
    openGraph: {
        title: "Web Development Blog | Devorica",
        description: "Guides, tutorials, and insights about web development, website design, and modern technologies.",
        type: "website",
    }
};

export default function BlogPage() {
    return <BlogClient />;
}
