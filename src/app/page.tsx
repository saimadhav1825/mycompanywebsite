import { Hero } from "@/components/Hero";
import dynamic from "next/dynamic";

// Lazy load below-the-fold sections for better initial load performance
const ServicesSection = dynamic(() => import("@/components/Sections").then(mod => ({ default: mod.ServicesSection })), {
  loading: () => <div className="h-96 bg-transparent" />,
});

const WhyChooseUsSection = dynamic(() => import("@/components/WhyChooseUsSection").then(mod => ({ default: mod.WhyChooseUsSection })), {
  loading: () => <div className="h-96 bg-transparent" />,
});

const ProcessSection = dynamic(() => import("@/components/Sections").then(mod => ({ default: mod.ProcessSection })), {
  loading: () => <div className="h-96 bg-transparent" />,
});

const AboutSection = dynamic(() => import("@/components/Sections").then(mod => ({ default: mod.AboutSection })), {
  loading: () => <div className="h-96 bg-transparent" />,
});

const ProjectsSection = dynamic(() => import("@/components/ProjectsSection").then(mod => ({ default: mod.ProjectsSection })), {
  loading: () => <div className="h-96 bg-transparent" />,
});

const ContactSection = dynamic(() => import("@/components/ContactSection").then(mod => ({ default: mod.ContactSection })), {
  loading: () => <div className="h-96 bg-transparent" />,
});

const Footer = dynamic(() => import("@/components/Footer").then(mod => ({ default: mod.Footer })), {
  loading: () => <div className="h-32 bg-transparent" />,
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ServicesSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
