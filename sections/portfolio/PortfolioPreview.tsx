import { SectionTitle } from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { SectionLayout } from "@/components/layout/SectionLayout";
import { PROJECTS } from "@/constants/data";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";

export function PortfolioPreview() {
    return (
        <SectionLayout id="portfolio" background="transparent">
            <AnimatedReveal>
                <SectionTitle
                    label="Selected Projects"
                    title="Engineered for Impact."
                    description="Explore our recent high-performance web applications and custom websites built with precision."
                />
            </AnimatedReveal>

            <AnimatedReveal
                stagger={true}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8"
            >
                {PROJECTS.map((project, index) => (
                    <div key={index} className="group cursor-pointer flex flex-col h-full">
                        <Link href={project.href} className="flex-1 flex flex-col h-full">
                            <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden mb-8 border border-border bg-surface group-hover:border-accent/20 transition-all duration-500">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />

                                {/* Overlay Hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-surface-elevated to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-8 backdrop-blur-[2px] z-10">
                                    <Button variant="cta" className="pointer-events-none translate-y-4 group-hover:translate-y-0 transition-all duration-500 text-sm">
                                        View Case Study
                                    </Button>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 flex-1">
                                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-foreground group-hover:text-accent transition-colors duration-300 tracking-tight leading-tight">
                                    {project.title}
                                </h3>
                                <div className="flex flex-wrap gap-2.5 mt-auto">
                                    {project.tech.map((t, i) => (
                                        <Badge key={i} className="bg-foreground/5 border-foreground/5 text-[10px] font-bold uppercase tracking-widest text-foreground-muted group-hover:border-accent/40 group-hover:text-foreground transition-all duration-300 py-1.5 px-3">
                                            {t}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </AnimatedReveal>

            <div className="mt-20 flex justify-center">
                <Link href="/portfolio">
                    <Button variant="cta-outline" size="xl">
                        View All Projects
                    </Button>
                </Link>
            </div>
        </SectionLayout>
    );
}
