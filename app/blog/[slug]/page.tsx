import { Metadata } from "next";
import { notFound } from "next/navigation";
import { BLOG_POSTS, PROGRAMMATIC_PAGES } from "@/constants/blog";
import BlogArticleView from "@/components/blog/BlogArticleView";
import Script from "next/script";

export async function generateStaticParams() {
    const manualSlugs = Object.keys(BLOG_POSTS);
    const programmaticSlugs = Object.keys(PROGRAMMATIC_PAGES);

    return [...manualSlugs, ...programmaticSlugs].map((slug) => ({
        slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = BLOG_POSTS[slug] || PROGRAMMATIC_PAGES[slug];

    if (!post) {
        return {
            title: "Blog | Devorica",
            description: "Read our latest insights on web development and digital growth."
        };
    }

    return {
        title: post.title,
        description: post.description,
        keywords: post.keywords,
        openGraph: {
            title: post.title,
            description: post.description,
            type: "article",
            publishedTime: post.publishDate,
            images: [
                {
                    url: post.image.url,
                    alt: post.image.alt,
                }
            ]
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.description,
            images: [post.image.url],
        }
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = BLOG_POSTS[slug] || PROGRAMMATIC_PAGES[slug];

    if (!post) {
        notFound();
    }

    // FAQ Schema JSON-LD
    const faqSchema = post.content.faqs.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": post.content.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    } : null;

    // Article Schema JSON-LD
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.description,
        "image": post.image.url,
        "datePublished": post.publishDate,
        "author": {
            "@type": "Organization",
            "name": "Devorica",
            "url": "https://www.devorica.com"
        }
    };

    return (
        <>
            <Script
                id="schema-article"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            {faqSchema && (
                <Script
                    id="schema-faq"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            )}
            <BlogArticleView post={post} />
        </>
    );
}
