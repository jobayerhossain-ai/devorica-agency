import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PORTFOLIO_PROJECTS } from "@/constants/portfolio";
import ProjectDetailView from "@/components/portfolio/ProjectDetailView";
import Script from "next/script";

export async function generateStaticParams() {
    return Object.keys(PORTFOLIO_PROJECTS).map((slug) => ({
        slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const project = PORTFOLIO_PROJECTS[slug];

    if (!project) {
        return {
            title: "Project Not Found | Devorica",
        };
    }

    return {
        title: `${project.title} | Web Development Case Study | Devorica`,
        description: project.description,
        openGraph: {
            title: project.title,
            description: project.description,
            images: [project.mainImage],
            type: "article",
        },
    };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = PORTFOLIO_PROJECTS[slug];

    if (!project) {
        notFound();
    }

    // JSON-LD Schema for the project case study
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": project.title,
        "description": project.description,
        "image": project.mainImage,
        "author": {
            "@type": "Organization",
            "name": "Devorica",
            "url": "https://www.devorica.com"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Devorica",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.devorica.com/logo.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://www.devorica.com/portfolio/${slug}`
        }
    };

    return (
        <>
            <Script
                id="schema-project"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ProjectDetailView project={project} />
        </>
    );
}
