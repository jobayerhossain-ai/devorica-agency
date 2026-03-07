import { MetadataRoute } from 'next';

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
        'custom-website',
        'web-app-development',
        'landing-page',
        'ecommerce-development',
        'app-development',
    ].map((slug) => ({
        url: `${baseUrl}/services/${slug}`,
        lastModified: new Date().toISOString().split('T')[0],
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }));

    return [...staticRoutes, ...serviceSlugRoutes];
}
