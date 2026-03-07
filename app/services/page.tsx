import type { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
    title: 'Services | Devorica', // Base title - wait let's check SEO architecture
    description: 'Explore Devorica’s web development services.',
};

export default function ServicesPage() {
    return <ServicesClient />;
}
