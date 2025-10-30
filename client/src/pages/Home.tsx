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
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      
      <div className="max-w-6xl mx-auto">
        <div className="md:p-8 md:pt-12">
          <div className="bg-background md:rounded-3xl md:shadow-2xl md:border-2 md:border-primary/20 overflow-hidden">
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
        </div>
      </div>
    </div>
  );
}
