import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.devorica.com"),
  title: {
    default: "Devorica | High-Performance Web Development Agency",
    template: "%s | Devorica",
  },
  description: "Where Art Meets Engineering. We make world-class web development accessible to ambitious businesses — custom websites, web apps, ecommerce, and mobile apps.",
  keywords: ["web development", "custom website", "web app", "ecommerce", "app development", "Next.js", "Bangladesh", "DevOrica"],
  authors: [{ name: "DevOrica" }],
  icons: {
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Devorica | Where Art Meets Engineering",
    description: "We make world-class web development accessible to ambitious businesses. Custom websites, web apps, ecommerce, and mobile solutions.",
    url: "https://www.devorica.com",
    siteName: "DevOrica",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devorica | Where Art Meets Engineering",
    description: "We make world-class web development accessible to ambitious businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { SmoothScrolling } from "@/components/layout/SmoothScrolling";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <SmoothScrolling>
          <Navbar />
          <main className="min-h-screen pt-[80px]">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </SmoothScrolling>
      </body>
    </html>
  );
}


