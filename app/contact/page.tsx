import { Metadata } from "next";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
    title: "Contact Devorica | Web Development Agency",
    description: "Start your project with Devorica. Contact our web development team today.",
    openGraph: {
        title: "Contact Devorica | Web Development Agency",
        description: "Start your project with Devorica. Contact our web development team today.",
        type: "website",
    }
};

export default function ContactPage() {
    return <ContactClient />;
}
