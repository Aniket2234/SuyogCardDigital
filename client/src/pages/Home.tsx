import HeroBanner from "@/components/HeroBanner";
import ProfileSection from "@/components/ProfileSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import EnquireSection from "@/components/EnquireSection";
import BottomNav from "@/components/BottomNav";

export default function Home() {
  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-chart-2/5 pb-20">
      <div className="max-w-6xl mx-auto p-2 sm:p-4 md:p-8 md:pt-12">
        <div className="relative">
          <div className="relative bg-background rounded-2xl md:rounded-3xl shadow-xl overflow-hidden border-4 border-primary/10">
            <div className="absolute inset-0 rounded-2xl md:rounded-3xl border-2 border-gradient-to-r from-primary/20 via-destructive/20 to-chart-2/20"></div>
            
            <div id="home">
              <HeroBanner />
              
              <ProfileSection
                companyName="SAHYOG"
                tagline="The Simplest way to Register and manage your Business in India"
                description="A complete solution for all your business needs"
                phone="+91-8888004466"
                email="info@sahyog.in"
              />
            </div>

            <AboutSection />

            <div id="services">
              <ServicesSection />
            </div>
            
            <div id="enquire">
              <EnquireSection />
            </div>
          </div>
        </div>
      </div>

      <BottomNav onNavigate={handleNavigate} />
    </div>
  );
}
