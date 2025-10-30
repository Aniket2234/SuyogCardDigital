import HeroBanner from "@/components/HeroBanner";
import ProfileSection from "@/components/ProfileSection";
import ServicesSection from "@/components/ServicesSection";
import CTASection from "@/components/CTASection";
import ShareSection from "@/components/ShareSection";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      
      <HeroBanner />
      
      <ProfileSection
        companyName="SAHYOG"
        tagline="The Simplest way to Register and manage your Business in India"
        description="A complete solution for all your business needs"
        phone="+91-8888004466"
        email="info@sahyog.in"
      />

      <ServicesSection />
      
      <CTASection />
      
      <ShareSection
        companyName="SAHYOG Tax & Finance Advisory Limited"
        phone="+91-8888004466"
        email="info@sahyog.in"
      />
      
      <Footer />
    </div>
  );
}
