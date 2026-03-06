import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function TermsOfService() {
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

                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Terms of Service</h1>
                <p className="text-[#9CA3AF] mb-12">Last updated: March 07, 2026</p>

                <div className="space-y-12 text-[#D1D5DB] leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-heading font-semibold text-white mb-4">1. Agreement to Terms</h2>
                        <p>
                            By accessing our website at devorica.com, you agree to be bound by these Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading font-semibold text-white mb-4">2. Use License</h2>
                        <p className="mb-4">
                            Permission is granted to temporarily download one copy of the materials (information or software) on Devorica's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license, you may not:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Modify or copy the materials;</li>
                            <li>Use the materials for any commercial purpose, or for any public display;</li>
                            <li>Attempt to decompile or reverse engineer any software contained on the website;</li>
                            <li>Remove any copyright or other proprietary notations from the materials;</li>
                            <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading font-semibold text-white mb-4">3. Service Engagements</h2>
                        <p>
                            All professional service engagements between Devorica and its clients are governed by separate, signed Master Service Agreements (MSA) and Statements of Work (SOW). The information provided on this website is for informational purposes and does not constitute a binding contract for services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading font-semibold text-white mb-4">4. Disclaimer</h2>
                        <p>
                            The materials on Devorica's website are provided on an 'as is' basis. Devorica makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading font-semibold text-white mb-4">5. Limitations</h2>
                        <p>
                            In no event shall Devorica or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Devorica's website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading font-semibold text-white mb-4">6. Governing Law</h2>
                        <p>
                            These terms and conditions are governed by and construed in accordance with the laws of Bangladesh and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading font-semibold text-white mb-4">7. Contact Information</h2>
                        <div className="mt-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                            <p className="font-semibold text-white">Legal Department</p>
                            <p>Email: legal@devorica.com</p>
                            <p>Devorica Agency, Feni Sadar, Feni</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
