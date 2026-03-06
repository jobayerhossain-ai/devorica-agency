import { Metadata } from "next";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
    title: "Contact Devorica | Start Your Project",
    description: "Get in touch with Devorica's engineering team today. We build high-performance custom websites, web applications, and digital products for industry leaders.",
    openGraph: {
        title: "Contact Devorica",
        description: "Partner with us to transform your vision into a high-performance reality.",
        type: "website",
    }
};

export default function ContactPage() {
    return <ContactClient />;
}
