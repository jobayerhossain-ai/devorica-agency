import type { Metadata } from 'next';
import PortfolioClient from './PortfolioClient';

export const metadata: Metadata = {
    title: 'Our Web Development Portfolio | Devorica',
    description: 'Explore our web development and application development projects built for modern businesses.',
};

export default function PortfolioPage() {
    return <PortfolioClient />;
}
