import { Hero } from "@/components/Hero";
import { AboutSection, ServicesSection, ProcessSection } from "@/components/Sections";
import { ProjectsSection } from "@/components/ProjectsSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
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
      <WhyChooseUsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
