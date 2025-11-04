import { notFound } from 'next/navigation';
import { siteConfig } from '@/lib/siteConfig';
import ServicePageClient from './ServicePageClient';
import { Metadata } from 'next';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = siteConfig.services.find(s => s.slug === slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  const baseUrl = 'https://softcerosolutions.com';
  const serviceUrl = `${baseUrl}/services/${service.slug}`;

  return {
    title: `${service.title} — ${service.tagline}`,
    description: service.detailedDescription,
    keywords: [service.title, ...service.technologies, 'software development', 'SoftceroSolutions'],
    openGraph: {
      title: `${service.title} — ${service.tagline}`,
      description: service.detailedDescription,
      url: serviceUrl,
      siteName: siteConfig.name,
      type: 'website',
      images: [
        {
          url: `${baseUrl}${service.heroImage}`,
          width: 1200,
          height: 630,
          alt: `${service.title} by SoftceroSolutions`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} — ${service.tagline}`,
      description: service.detailedDescription,
      creator: '@softcerosolutions',
      images: [`${baseUrl}${service.heroImage}`],
    },
    alternates: {
      canonical: serviceUrl,
    },
  };
}

export async function generateStaticParams() {
  return siteConfig.services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = siteConfig.services.find(s => s.slug === slug);

  if (!service) {
    notFound();
  }

  return <ServicePageClient service={service} />;
}