import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/siteConfig";
import { Toaster } from "sonner";
import Script from "next/script";
import { Navbar } from "@/components/Navbar";
import { LazyChatbot } from "@/components/LazyChatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://softcerosolutions.com"),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  referrer: 'origin-when-cross-origin',
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: 'technology',
  icons: {
    icon: [
      { url: "/favicon.ico", rel: "icon" },
      { url: "/softcerosolutions-favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: ["/favicon.ico"],
    apple: ["/softcerosolutions-favicon.svg"],
  },
  keywords: [
    "software development company",
    "mobile app development",
    "web development",
    "backend development",
    "custom software solutions",
    "SoftceroSolutions",
    "Jetpack Compose Multiplatform",
    "React Native",
    "Flutter",
    "Next.js",
    "React",
    "Node.js",
    "Python",
    "Java",
    "UI/UX design",
    "app development services",
    "website design",
    "software consulting",
  ],
  authors: [{ name: siteConfig.name }],
  alternates: { canonical: "/" },
      openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://softcerosolutions.com",
        siteName: siteConfig.name,
        title: `${siteConfig.name} — ${siteConfig.tagline}`,
        description: siteConfig.description,
      },
      twitter: {
        card: "summary_large_image",
        title: `${siteConfig.name} — ${siteConfig.tagline}`,
        description: siteConfig.description,
        creator: "@softcerosolutions",
      },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Skip to content link for accessibility */}
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">
          {children}
        </main>
        <LazyChatbot />
        <Toaster richColors position="top-right" />
        {/* JSON-LD Structured Data - Organization */}
        <Script id="org-jsonld" type="application/ld+json" strategy="lazyOnload">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: siteConfig.name,
            url: 'https://softcerosolutions.com',
            logo: 'https://softcerosolutions.com/softcerosolutions-favicon.svg',
            description: siteConfig.description,
            address: {
              '@type': 'PostalAddress',
              streetAddress: siteConfig.address,
            },
            contactPoint: [{
              '@type': 'ContactPoint',
              email: siteConfig.email,
              telephone: siteConfig.phone,
              contactType: 'customer service',
              availableLanguage: ['English'],
            }],
            sameAs: [siteConfig.social.linkedin, siteConfig.social.github, siteConfig.social.twitter],
            founder: {
              '@type': 'Organization',
              name: siteConfig.name,
            },
          })}
        </Script>

        {/* JSON-LD Structured Data - Website */}
        <Script id="website-jsonld" type="application/ld+json" strategy="lazyOnload">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: siteConfig.name,
            url: 'https://softcerosolutions.com',
            description: siteConfig.description,
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://softcerosolutions.com/?s={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          })}
        </Script>

        {/* JSON-LD Structured Data - Local Business */}
        <Script id="business-jsonld" type="application/ld+json" strategy="lazyOnload">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: siteConfig.name,
            image: 'https://softcerosolutions.com/softcerosolutions-favicon.svg',
            '@id': 'https://softcerosolutions.com',
            url: 'https://softcerosolutions.com',
            telephone: siteConfig.phone,
            priceRange: '$$',
            address: {
              '@type': 'PostalAddress',
              streetAddress: siteConfig.address,
            },
            openingHoursSpecification: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '09:00',
              closes: '18:00',
            },
            sameAs: [siteConfig.social.linkedin, siteConfig.social.github, siteConfig.social.twitter],
          })}
        </Script>
      </body>
    </html>
  );
}
