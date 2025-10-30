import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Heart, Users, TrendingUp } from "lucide-react";

export default function AboutSection() {
  return (
    <div id="about" className="px-4 sm:px-6 py-10 sm:py-12 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r from-primary via-destructive to-chart-2 bg-clip-text text-transparent mb-3">
            About Us
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-1 w-12 bg-gradient-to-r from-transparent via-primary to-primary rounded-full" />
            <div className="h-1.5 w-16 bg-gradient-to-r from-primary via-destructive to-chart-2 rounded-full" />
            <div className="h-1 w-12 bg-gradient-to-r from-chart-2 via-chart-2 to-transparent rounded-full" />
          </div>
        </div>

        <Card className="p-6 sm:p-8 border-2 border-primary/20 shadow-lg bg-gradient-to-br from-card to-primary/5 mb-6">
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
            <span className="font-black text-foreground">SAHYOG Tax & Finance Advisory Limited</span> is your trusted partner for all business registration and compliance needs in India. We provide comprehensive solutions for individuals, social entities, and businesses to meet their various requirements including registrations, tax filings, compliance, loan management, and business startup services.
          </p>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Our mission is to turn your business idea into reality. We guide you through every step of your journey as a business owner – from business planning to business management.
          </p>
        </Card>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="p-5 border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5 hover-elevate transition-all">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-black text-foreground mb-2">Our Mission</h3>
            <p className="text-sm text-muted-foreground">
              Simplify business registration and management across India
            </p>
          </Card>

          <Card className="p-5 border-2 border-chart-2/20 bg-gradient-to-br from-card to-chart-2/5 hover-elevate transition-all">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-chart-2 to-destructive flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-black text-foreground mb-2">Our Values</h3>
            <p className="text-sm text-muted-foreground">
              Integrity, excellence, and customer satisfaction in every service
            </p>
          </Card>

          <Card className="p-5 border-2 border-destructive/20 bg-gradient-to-br from-card to-destructive/5 hover-elevate transition-all">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-destructive to-primary flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-black text-foreground mb-2">500+ Clients</h3>
            <p className="text-sm text-muted-foreground">
              Trusted by hundreds of businesses across India
            </p>
          </Card>

          <Card className="p-5 border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5 hover-elevate transition-all">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-black text-foreground mb-2">10+ Years</h3>
            <p className="text-sm text-muted-foreground">
              A decade of experience in business advisory services
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
