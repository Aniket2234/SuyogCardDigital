import HeroBanner from "@/components/HeroBanner";
import ProfileSection from "@/components/ProfileSection";
import ServicesSection from "@/components/ServicesSection";
import CTASection from "@/components/CTASection";
import ShareSection from "@/components/ShareSection";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-chart-2/5">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      
      <div className="max-w-6xl mx-auto p-2 sm:p-4 md:p-8 md:pt-12">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-destructive to-chart-2 rounded-2xl md:rounded-3xl blur opacity-30"></div>
          
          <div className="relative bg-background rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden border-2 border-transparent bg-clip-padding">
            <div className="absolute inset-0 rounded-2xl md:rounded-3xl p-[2px] bg-gradient-to-r from-primary via-destructive to-chart-2 -z-10"></div>
            
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
