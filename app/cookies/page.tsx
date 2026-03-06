import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function CookiePolicy() {
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

                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Cookie Policy</h1>
                <p className="text-[#9CA3AF] mb-12">Last updated: March 07, 2026</p>

                <div className="space-y-12 text-[#D1D5DB] leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-heading font-semibold text-white mb-4">1. What are Cookies?</h2>
                        <p>
                            Cookies are small text files that are stored on your computer or mobile device when you visit a website. They help the website remember your actions and preferences over a period of time, so you don't have to keep re-entering them whenever you come back to the site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading font-semibold text-white mb-4">2. How We Use Cookies</h2>
                        <p className="mb-4">
                            We use cookies to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Understand how you use our website.</li>
                            <li>Remember your preferences and settings.</li>
                            <li>Analyze our traffic and improve site performance.</li>
                            <li>Ensure the security of our website.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading font-semibold text-white mb-4">3. Types of Cookies We Use</h2>
                        <div className="grid gap-6 mt-6">
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                <h3 className="text-lg font-semibold text-white mb-2">Essential Cookies</h3>
                                <p className="text-sm">Necessary for the website to function properly. These cannot be disabled.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                <h3 className="text-lg font-semibold text-white mb-2">Analytics Cookies</h3>
                                <p className="text-sm">Help us understand how visitors interact with our website by collecting and reporting information anonymously.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                <h3 className="text-lg font-semibold text-white mb-2">Preference Cookies</h3>
                                <p className="text-sm">Allow the website to remember choices you make (like your language or the region you are in).</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading font-semibold text-white mb-4">4. Managing Cookies</h2>
                        <p>
                            Most web browsers allow you to control cookies through their settings. You can choose to block or delete cookies, but doing so may affect your experience on our website. To find out more about cookies, including how to see what cookies have been set, visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">allaboutcookies.org</a>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading font-semibold text-white mb-4">5. Changes to This Policy</h2>
                        <p>
                            We may update this Cookie Policy from time to time. We encourage you to periodically review this page for the latest information on our cookie practices.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading font-semibold text-white mb-4">6. Contact Us</h2>
                        <p>
                            If you have questions about our use of cookies, please contact us at support@devorica.com.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
