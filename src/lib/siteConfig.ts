export type SocialLinks = {
  linkedin: string;
  github: string;
  twitter: string;
};

export type ServiceItem = {
  key: string;
  title: string;
  description: string;
};

export type SiteConfig = {
  name: string;
  tagline: string;
  description: string;
  url: string;
  locale: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  socials: SocialLinks;
  services: ServiceItem[];
};

export const siteConfig: SiteConfig = {
  name: "Acme Dev Studio",
  tagline: "We build websites, mobile apps & backend systems",
  description:
    "Helping businesses launch, scale, and succeed with modern web, mobile, and backend engineering.",
  url: "https://www.acmedevstudio.com",
  locale: "en_US",
  contactEmail: "hello@acmedevstudio.com",
  contactPhone: "+1 (555) 000-0000",
  address: "Remote-first • Global",
  socials: {
    linkedin: "https://www.linkedin.com/company/acmedevstudio",
    github: "https://github.com/acmedevstudio",
    twitter: "https://x.com/acmedevstudio",
  },
  services: [
    {
      key: "web",
      title: "Website Development",
      description:
        "SEO-friendly, blazing-fast websites with modern stacks like Next.js and TailwindCSS.",
    },
    {
      key: "mobile",
      title: "Mobile App Development",
      description:
        "High-quality iOS and Android apps using React Native and Kotlin/Swift when needed.",
    },
    {
      key: "backend",
      title: "Backend & APIs",
      description:
        "Robust, scalable APIs and services with Node.js, PostgreSQL, and cloud-native tooling.",
    },
    {
      key: "uiux",
      title: "UI/UX Design",
      description:
        "Thoughtful product design, wireframes, and prototypes to validate quickly.",
    },
  ],
};


