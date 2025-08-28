import { Hero } from "@/components/Hero";
import { AboutSection, ServicesSection, ProjectsSection, ProcessSection, TestimonialsSection } from "@/components/Sections";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
