import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
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
    default: "Devorica — Custom Website Development Company in Bangladesh",
    template: "%s",
  },
  description: "Devorica builds high-performance custom websites, web applications, and landing pages for modern businesses in Bangladesh.",
  keywords: [
    "web development company bangladesh",
    "website development company bangladesh",
    "custom website development bangladesh",
    "web application development bangladesh",
    "landing page development bangladesh"
  ],
  authors: [{ name: "Devorica" }],
  icons: {
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Devorica — Custom Website Development Company in Bangladesh",
    description: "Devorica builds high-performance custom websites, web applications, and landing pages for modern businesses in Bangladesh.",
    url: "https://www.devorica.com",
    siteName: "Devorica",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devorica — Custom Website Development Company in Bangladesh",
    description: "Devorica builds high-performance custom websites, web applications, and landing pages for modern businesses in Bangladesh.",
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
import { Preloader } from "@/components/ui/Preloader";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <Script id="schema-global" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Devorica",
            "url": "https://www.devorica.com",
            "logo": "https://www.devorica.com/logo.png",
            "sameAs": []
          })
        }} />
        <ThemeProvider>
          <Preloader />
          <SmoothScrolling>
            <Navbar />
            <main className="min-h-screen pt-[80px]">
              {children}
            </main>
            <Footer />
            <ScrollToTop />
          </SmoothScrolling>
        </ThemeProvider>
      </body>
    </html>
  );
}
