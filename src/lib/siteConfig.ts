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

export const siteConfig = {
  name: "Lotusly",
  tagline: "Where Innovation Blooms",
  description: "We specialize in mobile app development, backend systems, and modern web applications using cutting-edge technologies.",
  email: "hello@lotusly.com",
  phone: "+1 (555) 123-4567",
  address: "123 Innovation Drive, Tech City, TC 12345",
  
  social: {
    linkedin: "https://linkedin.com/company/lotusly",
    github: "https://github.com/lotusly",
    twitter: "https://twitter.com/lotusly_tech",
  },

  services: [
    {
      title: "Mobile App Development",
      description: "Cross-platform mobile applications using modern frameworks for iOS and Android.",
      icon: "Smartphone",
      features: [
        "Jetpack Compose Multiplatform",
        "React Native",
        "Flutter",
        "Native iOS/Android",
        "App Store Optimization"
      ]
    },
    {
      title: "Backend Development",
      description: "Scalable server-side applications and APIs with robust architecture.",
      icon: "Database",
      features: [
        "Node.js & Express",
        "Python & Django/FastAPI",
        "Java & Spring Boot",
        "PostgreSQL & MongoDB",
        "AWS & Cloud Services"
      ]
    },
    {
      title: "Website Development",
      description: "Modern, responsive web applications with excellent user experience.",
      icon: "Globe",
      features: [
        "React & Next.js",
        "TypeScript",
        "TailwindCSS",
        "Progressive Web Apps",
        "SEO Optimization"
      ]
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, intuitive user interfaces that enhance user experience.",
      icon: "Palette",
      features: [
        "Material Design",
        "iOS Human Interface",
        "Responsive Design",
        "Prototyping",
        "User Testing"
      ]
    }
  ],

  techStack: {
    mobile: [
      "Jetpack Compose Multiplatform",
      "React Native",
      "Flutter",
      "Kotlin",
      "Swift",
      "Dart"
    ],
    backend: [
      "Node.js",
      "Python",
      "Java",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "AWS",
      "Docker"
    ],
    frontend: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      "shadcn/ui"
    ]
  },

  process: [
    {
      number: 1,
      title: "Discovery & Planning",
      description: "We analyze your requirements, define project scope, and create a detailed roadmap.",
      icon: "Search",
      color: "from-pink-500 to-pink-600"
    },
    {
      number: 2,
      title: "Design & Prototyping",
      description: "Create wireframes, mockups, and interactive prototypes for your approval.",
      icon: "Palette",
      color: "from-purple-500 to-purple-600"
    },
    {
      number: 3,
      title: "Development",
      description: "Build your application using modern technologies and best practices.",
      icon: "Code",
      color: "from-green-500 to-green-600"
    },
    {
      number: 4,
      title: "Testing & Launch",
      description: "Rigorous testing, deployment, and post-launch support.",
      icon: "Rocket",
      color: "from-orange-500 to-orange-600"
    }
  ]
};


