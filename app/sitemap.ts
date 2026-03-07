import { MetadataRoute } from 'next';
import { BLOG_POSTS, PROGRAMMATIC_PAGES } from '@/constants/blog';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.devorica.com';

    const staticRoutes = [
        '',
        '/services',
        '/portfolio',
        '/blog',
        '/about',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString().split('T')[0], // YYYY-MM-DD
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1.0 : 0.8,
    }));

    const serviceSlugRoutes = [
        'custom-website-development',
        'web-application-development',
        'landing-page-development',
        'ecommerce-development',
        'app-development',
    ].map((slug) => ({
        url: `${baseUrl}/services/${slug}`,
        lastModified: new Date().toISOString().split('T')[0],
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }));

    const blogPostRoutes = Object.keys(BLOG_POSTS).map((slug) => ({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: BLOG_POSTS[slug].publishDate,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    const programmaticRoutes = Object.keys(PROGRAMMATIC_PAGES).map((slug) => ({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: PROGRAMMATIC_PAGES[slug].publishDate,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...staticRoutes, ...serviceSlugRoutes, ...blogPostRoutes, ...programmaticRoutes];
}
