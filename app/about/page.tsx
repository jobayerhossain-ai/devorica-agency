import { Metadata } from "next";
import { AboutClient } from "./AboutClient";

export const metadata: Metadata = {
    title: "About Devorica | Our Mission, Vision & Team",
    description: "Learn about Devorica, a high-end web development agency. Discover our mission, our story, the technology stack we master, and the engineering team behind our success.",
    openGraph: {
        title: "About Devorica",
        description: "Building fast, scalable, and modern digital products for growing businesses.",
        type: "website",
    }
};

export default function AboutPage() {
    return <AboutClient />;
}
