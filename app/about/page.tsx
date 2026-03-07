import { Metadata } from "next";
import { AboutClient } from "./AboutClient";

export const metadata: Metadata = {
    title: "About Devorica | Web Development Agency",
    description: "Learn about Devorica, a modern web development agency helping businesses build high-performance digital products.",
    openGraph: {
        title: "About Devorica | Web Development Agency",
        description: "Learn about Devorica, a modern web development agency helping businesses build high-performance digital products.",
        type: "website",
    }
};

export default function AboutPage() {
    return <AboutClient />;
}
