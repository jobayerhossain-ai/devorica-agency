import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-[#0B0B0B] text-white pt-32 pb-20 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors mb-8 group"
                >
                    <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    Back to Home
                </Link>

                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Privacy Policy</h1>
                <p className="text-[#9CA3AF] mb-12">Last updated: March 07, 2026</p>

                <div className="space-y-12 text-[#D1D5DB] leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-heading font-semibold text-white mb-4">1. Introduction</h2>
                        <p>
                            At Devorica, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website devorica.com, including any other media form, media channel, mobile website, or mobile application related or connected thereto.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading font-semibold text-white mb-4">2. Information Collection</h2>
                        <p className="mb-4">
                            We collect information that you provide directly to us when you:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Fill out a contact form or request a quote.</li>
                            <li>Sign up for our newsletter.</li>
                            <li>Communicate with us via email or social media.</li>
                        </ul>
                        <p className="mt-4">
                            The types of information we may collect include your name, email address, phone number, company name, and any other information you choose to provide.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading font-semibold text-white mb-4">3. Use of Your Information</h2>
                        <p className="mb-4">
                            We use the information we collect to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Provide, operate, and maintain our services.</li>
                            <li>Improve, personalize, and expand our website.</li>
                            <li>Understand and analyze how you use our website.</li>
                            <li>Develop new products, services, features, and functionality.</li>
                            <li>Communicate with you, either directly or through one of our partners.</li>
                            <li>Send you emails and newsletters.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading font-semibold text-white mb-4">4. Data Security</h2>
                        <p>
                            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading font-semibold text-white mb-4">5. Your Rights</h2>
                        <p>
                            Depending on your location, you may have the following rights regarding your personal data:
                        </p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                            <li>The right to access, update, or delete the information we have on you.</li>
                            <li>The right of rectification.</li>
                            <li>The right to object.</li>
                            <li>The right of restriction.</li>
                            <li>The right to data portability.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading font-semibold text-white mb-4">6. Contact Us</h2>
                        <p>
                            If you have questions or comments about this Privacy Policy, please contact us at:
                        </p>
                        <div className="mt-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                            <p className="font-semibold text-white">Devorica Agency</p>
                            <p>Email: hello@devorica.com</p>
                            <p>Address: Dhaka, Bangladesh</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
