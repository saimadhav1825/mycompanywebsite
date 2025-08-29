import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/siteConfig";
import { Toaster } from "sonner";
import Script from "next/script";
import { Navbar } from "@/components/Navbar";
import { Chatbot } from "@/components/Chatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lotusly.com"),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: [
      { url: "/favicon.ico", rel: "icon" },
      { url: "/lotusly-favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: ["/favicon.ico"],
    apple: ["/lotusly-favicon.svg"],
  },
  keywords: [
    "mobile app development",
    "web development",
    "backend development",
    "Jetpack Compose Multiplatform",
    "React Native",
    "Flutter",
    "Next.js",
    "React",
    "Node.js",
    "Python",
    "Java",
  ],
  authors: [{ name: siteConfig.name }],
  alternates: { canonical: "/" },
      openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://lotusly.com",
      siteName: siteConfig.name,
      title: `${siteConfig.name} — ${siteConfig.tagline}`,
      description: siteConfig.description,
    },
      twitter: {
      card: "summary_large_image",
      title: `${siteConfig.name} — ${siteConfig.tagline}`,
      description: siteConfig.description,
      creator: "@lotusly_tech",
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
        <Navbar />
        {children}
        <Chatbot />
        <Toaster richColors position="top-right" />
        {/* JSON-LD Structured Data */}
        <Script id="org-jsonld" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: siteConfig.name,
            url: 'https://lotusly.com',
            description: siteConfig.description,
            contactPoint: [{
              '@type': 'ContactPoint',
              email: siteConfig.email,
              telephone: siteConfig.phone,
              contactType: 'customer service',
            }],
            sameAs: [siteConfig.social.linkedin, siteConfig.social.github, siteConfig.social.twitter],
          })}
        </Script>
      </body>
    </html>
  );
}
