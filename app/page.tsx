import { Hero } from "@/sections/hero/Hero";
import { ClientTrust } from "@/sections/trust/ClientTrust";
import { Services } from "@/sections/services/Services";
import { PortfolioPreview } from "@/sections/portfolio/PortfolioPreview";
import { Process } from "@/sections/process/Process";
import { TechnologyStack } from "@/sections/tech/TechnologyStack";
import { Testimonials } from "@/sections/testimonials/Testimonials";
import { CTA } from "@/sections/cta/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientTrust />
      <Services />
      <PortfolioPreview />
      <Process />
      <TechnologyStack />
      <Testimonials />
      <CTA />
    </>
  );
}
