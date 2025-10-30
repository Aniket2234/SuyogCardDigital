import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MessageSquare, TrendingUp } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function CTASection() {
  const handleBookConsultation = () => {
    console.log('Book Consultation clicked');
    window.open(`https://wa.me/918888004466?text=${encodeURIComponent("Hi, I'd like to book a consultation with SAHYOG Tax & Finance Advisory.")}`, '_blank');
  };

  const handleEnquireNow = () => {
    console.log('Enquire Now clicked');
    window.open('mailto:info@sahyog.in?subject=Business Enquiry', '_blank');
  };

  return (
    <div className="px-4 sm:px-6 py-10 sm:py-12 bg-gradient-to-r from-primary/10 via-chart-2/5 to-primary/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-primary/20 to-chart-2/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-chart-2/20 to-primary/20 rounded-full blur-3xl" />
      
      <div className="relative max-w-4xl mx-auto">
        <Card className="relative border-2 border-primary/20 shadow-lg overflow-hidden bg-gradient-to-br from-card to-primary/5">
          <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-chart-2/20 to-transparent rounded-full -mr-12 sm:-mr-16 -mt-12 sm:-mt-16" />
          <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-tr from-primary/20 to-transparent rounded-full -ml-12 sm:-ml-16 -mb-12 sm:-mb-16" />
          
          <div className="relative p-6 sm:p-8 md:p-12 text-center space-y-5 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r from-primary via-destructive to-chart-2 bg-clip-text text-transparent mb-3" data-testid="text-cta-heading">
              Ready to Start Your Business Journey?
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-1 w-12 bg-gradient-to-r from-transparent via-primary to-primary rounded-full" />
              <div className="h-1.5 w-16 bg-gradient-to-r from-primary via-destructive to-chart-2 rounded-full" />
              <div className="h-1 w-12 bg-gradient-to-r from-chart-2 via-chart-2 to-transparent rounded-full" />
            </div>
            
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto font-semibold">
              Let us help you turn your business idea into reality. Get expert guidance from planning to management.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 pt-4 max-w-2xl mx-auto">
              <Button
                onClick={handleBookConsultation}
                size="lg"
                className="w-full h-12 sm:h-14 text-base sm:text-lg font-black bg-gradient-to-r from-primary to-chart-2 border-2 border-white/20 shadow-xl hover:shadow-2xl hover:scale-105 transition-transform"
                data-testid="button-book-consultation"
              >
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                Book Consultation
              </Button>
              <Button
                onClick={handleEnquireNow}
                size="lg"
                className="w-full h-12 sm:h-14 text-base sm:text-lg font-black bg-gradient-to-r from-chart-2 to-primary border-2 border-white/20 shadow-xl hover:shadow-2xl hover:scale-105 transition-transform"
                data-testid="button-enquire-now"
              >
                <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                Enquire Now
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 border-t-2 border-dashed border-primary/20 mt-6 sm:mt-8">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-black bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">500+</div>
                <div className="text-xs sm:text-sm text-muted-foreground font-bold mt-1">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-black bg-gradient-to-r from-chart-2 to-primary bg-clip-text text-transparent">1000+</div>
                <div className="text-xs sm:text-sm text-muted-foreground font-bold mt-1">Registrations</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-black bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">10+</div>
                <div className="text-xs sm:text-sm text-muted-foreground font-bold mt-1">Years Exp.</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t-2 border-dashed border-primary/20">
              <p className="text-sm font-black text-muted-foreground mr-2">Connect with us:</p>
              <a
                href="https://wa.me/918888004466"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#20BD5A] transition-all hover-elevate active-elevate-2 shadow-lg"
                data-testid="link-whatsapp-contact"
              >
                <FaWhatsapp className="w-5 h-5 text-white" />
                <span className="text-white font-bold text-sm">WhatsApp</span>
              </a>
              <a
                href="https://www.instagram.com/sahyog.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:scale-105 transition-all hover-elevate active-elevate-2 shadow-lg"
                data-testid="link-instagram-contact"
              >
                <FaInstagram className="w-5 h-5 text-white" />
                <span className="text-white font-bold text-sm">Instagram</span>
              </a>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
