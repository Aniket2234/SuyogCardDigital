import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Heart, Users, TrendingUp } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function AboutSection() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setSelectedCard(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const cards = [
    {
      id: 0,
      icon: Target,
      iconBg: "from-primary to-chart-2",
      title: "Our Mission",
      description: "Simplify business registration and management across India"
    },
    {
      id: 1,
      icon: Heart,
      iconBg: "from-chart-2 to-primary",
      title: "Our Values",
      description: "Integrity, excellence, and customer satisfaction in every service"
    },
    {
      id: 2,
      icon: Users,
      iconBg: "from-primary to-chart-2",
      title: "500+ Clients",
      description: "Trusted by hundreds of businesses across India"
    },
    {
      id: 3,
      icon: TrendingUp,
      iconBg: "from-chart-2 to-primary",
      title: "10+ Years",
      description: "A decade of experience in business advisory services"
    }
  ];

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

        <div ref={containerRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card) => {
            const Icon = card.icon;
            const isSelected = selectedCard === card.id;
            
            return (
              <Card 
                key={card.id}
                onClick={() => setSelectedCard(isSelected ? null : card.id)}
                className={`p-5 cursor-pointer hover-elevate transition-all ${
                  isSelected 
                    ? 'border-2 border-primary bg-gradient-to-br from-card to-primary/10 scale-105 shadow-lg' 
                    : 'border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5'
                }`}
                data-testid={`card-${card.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.iconBg} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-black text-foreground mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {card.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
