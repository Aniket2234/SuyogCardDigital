import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MessageSquare, Sparkles, TrendingUp } from "lucide-react";

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
    <div className="px-6 py-12 bg-gradient-to-r from-primary/10 via-primary/5 to-chart-2/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-chart-2/5 rounded-full blur-3xl" />
      
      <Card className="max-w-4xl mx-auto relative border-2 border-primary/30 shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-destructive/10 rounded-full -mr-16 -mt-16" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full -ml-16 -mb-16" />
        
        <div className="relative p-8 md:p-12 text-center space-y-6">
          <div className="inline-block p-3 bg-primary/10 rounded-full mb-2">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-black text-foreground" data-testid="text-cta-heading">
            Ready to Start Your Business Journey?
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium">
            Let us help you turn your business idea into reality. Get expert guidance from planning to management.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4 pt-4 max-w-2xl mx-auto">
            <Button
              onClick={handleBookConsultation}
              size="lg"
              className="w-full h-14 text-lg font-bold border-2 border-primary shadow-lg hover:shadow-xl"
              data-testid="button-book-consultation"
            >
              <Calendar className="w-6 h-6 mr-2" />
              Book Consultation
            </Button>
            <Button
              onClick={handleEnquireNow}
              variant="destructive"
              size="lg"
              className="w-full h-14 text-lg font-bold border-2 border-destructive shadow-lg hover:shadow-xl"
              data-testid="button-enquire-now"
            >
              <MessageSquare className="w-6 h-6 mr-2" />
              Enquire Now
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 pt-6 border-t-2 border-dashed border-border mt-8">
            <div className="text-center">
              <div className="text-2xl font-black text-primary">500+</div>
              <div className="text-xs text-muted-foreground font-medium">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-chart-2">1000+</div>
              <div className="text-xs text-muted-foreground font-medium">Registrations</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-destructive">10+</div>
              <div className="text-xs text-muted-foreground font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
