import { Button } from "@/components/ui/button";
import { Calendar, MessageSquare } from "lucide-react";

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
    <div className="px-6 py-12 bg-primary/5">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground" data-testid="text-cta-heading">
          Ready to Start Your Business Journey?
        </h2>
        <p className="text-muted-foreground text-lg">
          Let us help you turn your business idea into reality
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={handleBookConsultation}
            size="lg"
            className="w-full sm:w-auto"
            data-testid="button-book-consultation"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Book Consultation
          </Button>
          <Button
            onClick={handleEnquireNow}
            variant="destructive"
            size="lg"
            className="w-full sm:w-auto"
            data-testid="button-enquire-now"
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            Enquire Now
          </Button>
        </div>
      </div>
    </div>
  );
}
