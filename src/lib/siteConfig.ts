export type SocialLinks = {
  linkedin: string;
  github: string;
  twitter: string;
};

export type ServiceItem = {
  key?: string;
  title: string;
  description: string;
  slug: string;
  tagline: string;
  heroImage: string;
  detailedDescription: string;
  benefits: string[];
  process: {
    title: string;
    description: string;
    icon: string;
  }[];
  useCases: string[];
  industries: string[];
  technologies: string[];
  icon: string;
  features: string[];
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
  name: "SoftceroSolutions",
  tagline: "Simple Software That Works",
  description: "We make websites and mobile apps that help your business grow. Simple, fast, and built just for you.",
  email: "hello@softcerosolutions.com",
  phone: "+1 (555) 123-4567",
  address: "123 Innovation Drive, Tech City, TC 12345",
  
  social: {
    linkedin: "https://linkedin.com/company/softcerosolutions",
    github: "https://github.com/softcerosolutions",
    twitter: "https://twitter.com/softcerosolutions",
  },

  services: [
    {
      key: "mobile-app",
      title: "Mobile App Development",
      description: "Mobile apps for iPhone and Android that work great and look amazing.",
      slug: "mobile-app-development",
      tagline: "Your App, Everywhere",
      heroImage: "/images/services/mobile-app-hero.svg",
      detailedDescription: "We build high-performance iOS & Android apps tailored to your business needs. From idea validation and UI/UX design to publishing on app stores, we handle the entire development lifecycle. Our team specializes in creating native experiences while maintaining code efficiency through cross-platform frameworks.",
      benefits: [
        "Reach millions of users on iOS and Android",
        "Native performance with cross-platform efficiency", 
        "Seamless integration with device features",
        "Scalable architecture for future growth",
        "App Store optimization and marketing support"
      ],
      process: [
        {
          title: "Discovery & Ideation",
          description: "We analyze your business goals, target audience, and technical requirements to create a comprehensive app strategy.",
          icon: "Search"
        },
        {
          title: "Wireframing & UI/UX Design",
          description: "Create intuitive user interfaces with detailed wireframes, mockups, and interactive prototypes.",
          icon: "Palette"
        },
        {
          title: "Development & Testing",
          description: "Build your app using modern frameworks with rigorous testing on real devices and simulators.",
          icon: "Code"
        },
        {
          title: "Deployment & Support",
          description: "Launch your app on app stores and provide ongoing maintenance, updates, and feature enhancements.",
          icon: "Rocket"
        }
      ],
      useCases: [
        "E-commerce and marketplace apps",
        "Social networking and community platforms",
        "Productivity and business tools",
        "Health and fitness tracking",
        "Educational and learning platforms",
        "Entertainment and media apps"
      ],
      industries: [
        "E-commerce & Retail",
        "Healthcare & Wellness", 
        "Education & EdTech",
        "Finance & FinTech",
        "Entertainment & Media",
        "Travel & Hospitality"
      ],
      technologies: [
        "React Native",
        "Flutter",
        "Kotlin Multiplatform",
        "Swift",
        "Kotlin",
        "Firebase",
        "AWS Amplify"
      ],
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
      key: "web-development",
      title: "Website Development",
      description: "Beautiful websites that work on phones, tablets, and computers.",
      slug: "web-development",
      tagline: "Websites That Sell",
      heroImage: "/images/services/web-development-hero.svg",
      detailedDescription: "We craft responsive, SEO-friendly, and scalable websites that boost your online presence. From landing pages to enterprise portals, our web solutions are built with modern technologies and best practices to ensure optimal performance, security, and user experience.",
      benefits: [
        "Responsive design that works on all devices",
        "SEO optimization for better search rankings",
        "Fast loading times and optimal performance",
        "Scalable architecture for business growth",
        "Secure and maintainable codebase"
      ],
      process: [
        {
          title: "Requirement Analysis",
          description: "Understand your business goals, target audience, and technical requirements for the perfect web solution.",
          icon: "Search"
        },
        {
          title: "Frontend Development",
          description: "Create stunning, responsive user interfaces using modern frameworks and design systems.",
          icon: "Palette"
        },
        {
          title: "Backend Integration",
          description: "Build robust server-side functionality with API integrations and database management.",
          icon: "Database"
        },
        {
          title: "Testing & Deployment",
          description: "Comprehensive testing across devices and browsers, followed by secure deployment and ongoing support.",
          icon: "Rocket"
        }
      ],
      useCases: [
        "Corporate websites and portfolios",
        "E-commerce and online stores",
        "Content management systems",
        "Customer portals and dashboards",
        "Booking and reservation systems",
        "SaaS application frontends"
      ],
      industries: [
        "Professional Services",
        "E-commerce & Retail",
        "Healthcare",
        "Real Estate",
        "Manufacturing",
        "Non-profit Organizations"
      ],
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Node.js",
        "PostgreSQL",
        "Vercel"
      ],
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
      key: "backend-development",
      title: "Backend Development",
      description: "The behind-the-scenes tech that makes your app work fast and safe.",
      slug: "backend-development",
      tagline: "The Engine Behind Your App",
      heroImage: "/images/services/backend-development-hero.svg",
      detailedDescription: "We help businesses scale with secure cloud solutions and robust backend systems. Our team builds high-performance APIs, databases, and server infrastructure using modern technologies like Node.js, Python, and cloud platforms including AWS, Azure, and GCP.",
      benefits: [
        "Scalable architecture that grows with your business",
        "Secure data handling and API protection",
        "High-performance database optimization",
        "Cloud-native solutions for reliability",
        "Comprehensive monitoring and analytics"
      ],
      process: [
        {
          title: "Architecture Planning",
          description: "Design scalable system architecture with optimal database schema and API structure.",
          icon: "Settings"
        },
        {
          title: "API Development",
          description: "Build secure, well-documented REST and GraphQL APIs with proper authentication and validation.",
          icon: "Code"
        },
        {
          title: "Database Design",
          description: "Implement efficient database solutions with proper indexing, relationships, and data integrity.",
          icon: "Database"
        },
        {
          title: "Cloud Deployment",
          description: "Deploy to cloud platforms with auto-scaling, monitoring, and continuous integration pipelines.",
          icon: "Rocket"
        }
      ],
      useCases: [
        "REST and GraphQL APIs",
        "Microservices architecture",
        "Real-time applications with WebSocket",
        "Data processing and analytics",
        "Authentication and authorization systems",
        "Third-party service integrations"
      ],
      industries: [
        "FinTech & Banking",
        "Healthcare & Medical",
        "E-commerce & Retail",
        "IoT & Manufacturing",
        "Media & Entertainment",
        "Education & EdTech"
      ],
      technologies: [
        "Node.js",
        "Python",
        "PostgreSQL",
        "MongoDB", 
        "Redis",
        "AWS",
        "Docker"
      ],
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
      key: "ui-ux-design",
      title: "UI/UX Design",
      description: "Making your app look great and easy to use.",
      slug: "ui-ux-design",
      tagline: "Design That Works",
      heroImage: "/images/services/ui-ux-design-hero.svg",
      detailedDescription: "We create intuitive designs that engage users and drive conversions. Our human-centered design approach focuses on usability, accessibility, and smooth interactions. From wireframes to high-fidelity prototypes, we ensure your product provides an exceptional user experience.",
      benefits: [
        "User-centered design that improves engagement",
        "Higher conversion rates and user satisfaction",
        "Accessible designs for all users",
        "Consistent brand experience across platforms",
        "Data-driven design decisions"
      ],
      process: [
        {
          title: "Research & Analysis",
          description: "Conduct user research, competitor analysis, and usability audits to understand your target audience.",
          icon: "Search"
        },
        {
          title: "Wireframing & Prototyping",
          description: "Create low and high-fidelity wireframes, followed by interactive prototypes for user testing.",
          icon: "FolderOpen"
        },
        {
          title: "Visual Design",
          description: "Develop beautiful visual designs with proper typography, color schemes, and brand consistency.",
          icon: "Palette"
        },
        {
          title: "Testing & Iteration",
          description: "Conduct usability testing and iterate based on user feedback to optimize the final design.",
          icon: "Settings"
        }
      ],
      useCases: [
        "Mobile app interfaces",
        "Web application dashboards",
        "E-commerce user journeys",
        "SaaS product interfaces",
        "Brand identity and style guides",
        "Accessibility improvements"
      ],
      industries: [
        "Technology & SaaS",
        "E-commerce & Retail",
        "Healthcare & Medical",
        "Finance & Banking",
        "Education & Learning",
        "Entertainment & Media"
      ],
      technologies: [
        "Figma",
        "Adobe XD", 
        "Sketch",
        "Principle",
        "InVision",
        "Miro",
        "Webflow"
      ],
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
      color: "from-rose-500 to-pink-600"
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


