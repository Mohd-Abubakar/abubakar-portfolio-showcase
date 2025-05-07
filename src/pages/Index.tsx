
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
