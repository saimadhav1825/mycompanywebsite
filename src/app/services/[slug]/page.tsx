import { notFound } from 'next/navigation';
import { siteConfig } from '@/lib/siteConfig';
import ServicePageClient from './ServicePageClient';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = siteConfig.services.find(s => s.slug === slug);

  if (!service) {
    notFound();
  }

  return <ServicePageClient service={service} />;
}