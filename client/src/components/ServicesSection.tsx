import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  FileText, 
  Briefcase, 
  Users, 
  ShieldCheck,
  ScrollText,
  Landmark,
  Sprout,
  CreditCard,
  Receipt,
  ShoppingBag,
  Factory,
  Store,
  Rocket,
  Ship,
  FileSignature,
  Wallet,
  Heart,
  Globe,
  ClipboardCheck,
  Award,
  Gift,
  Target,
  ChevronDown
} from "lucide-react";
import ServiceCard from "./ServiceCard";

const businessRegistrationServices = [
  { icon: Building2, title: "Private Limited Company Registration", popular: true },
  { icon: Users, title: "OPC (One Person Company Registration)" },
  { icon: Briefcase, title: "Limited Liability (LLP) Registration", popular: true },
  { icon: Landmark, title: "Public Limited Company Registration" },
  { icon: Users, title: "Partnership Firm Registration" },
  { icon: FileText, title: "Proprietorship Firm Registration" },
  { icon: Heart, title: "Section 8 Company (NGO) Registration" },
  { icon: Sprout, title: "Farmer Producer Company Registration" }
];

const businessSupportServices = [
  { icon: CreditCard, title: "PAN Registration" },
  { icon: Receipt, title: "TAN Registration" },
  { icon: ShoppingBag, title: "GST Registration", popular: true },
  { icon: Factory, title: "Udyam (MSME) Registration" },
  { icon: Store, title: "Shop Act Registration/Gumasta Registration" },
  { icon: Rocket, title: "Startup India Registration", popular: true },
  { icon: Ship, title: "Import Export Code (IEC) Registration" },
  { icon: FileSignature, title: "Digital Signature Certificate (DSC)" },
  { icon: Wallet, title: "Professional Tax (PTRC) Registration" },
  { icon: ShieldCheck, title: "Employee State Insurance (ESI) Registration" },
  { icon: Globe, title: "LEI Registration" },
  { icon: ClipboardCheck, title: "Sec 8 Audit & Compliances" },
  { icon: ScrollText, title: "12A Registration" },
  { icon: Award, title: "80G Registration" },
  { icon: Gift, title: "NITI Ayog Registration" },
  { icon: Target, title: "CSR Registration" }
];

export default function ServicesSection() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>("business-registration");

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <div className="px-4 sm:px-6 py-10 sm:py-12 max-w-7xl mx-auto">
      <div className="text-center mb-8 sm:mb-10">
        <div className="relative inline-block mb-3">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-chart-2 rounded-full blur opacity-30"></div>
          <Badge variant="outline" className="relative border-2 border-primary/50 text-primary px-5 py-1.5 font-bold bg-gradient-to-r from-primary/5 to-chart-2/5">
            What We Offer
          </Badge>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r from-primary via-destructive to-chart-2 bg-clip-text text-transparent mb-3" data-testid="text-services-heading">
          Our Services
        </h2>
        <div className="flex items-center justify-center gap-2">
          <div className="h-1 w-12 bg-gradient-to-r from-transparent via-primary to-primary rounded-full" />
          <div className="h-1.5 w-16 bg-gradient-to-r from-primary via-destructive to-chart-2 rounded-full" />
          <div className="h-1 w-12 bg-gradient-to-r from-chart-2 via-chart-2 to-transparent rounded-full" />
        </div>
      </div>

      <div className="space-y-4 sm:space-y-5">
        <div className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-chart-2 to-primary rounded-2xl blur opacity-20"></div>
          <Card className="relative overflow-hidden border-2 border-transparent shadow-lg bg-gradient-to-br from-card to-primary/5">
            <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-primary via-chart-2 to-primary -z-10"></div>
            <button
              onClick={() => toggleCategory("business-registration")}
              className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left hover-elevate active-elevate-2 transition-all group"
              data-testid="button-category-business-registration"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary to-chart-2 border-2 border-white/20 flex items-center justify-center shadow-lg">
                    <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-black text-foreground">
                      Business Registration
                    </h3>
                    <p className="text-xs text-muted-foreground font-medium">8 specialized services</p>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 text-primary transition-transform duration-300 flex-shrink-0 ${expandedCategory === "business-registration" ? "rotate-180" : ""}`} />
              </div>
            </button>
            {expandedCategory === "business-registration" && (
              <div className="px-3 sm:px-6 pb-5 sm:pb-6 pt-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 animate-in slide-in-from-top-2 duration-300">
              {businessRegistrationServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  popular={service.popular}
                  onClick={() => console.log(`Clicked: ${service.title}`)}
                />
              ))}
            </div>
          )}
          </Card>
        </div>

        <div className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-chart-2 via-destructive to-chart-2 rounded-2xl blur opacity-20"></div>
          <Card className="relative overflow-hidden border-2 border-transparent shadow-lg bg-gradient-to-br from-card to-chart-2/5">
            <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-chart-2 via-destructive to-chart-2 -z-10"></div>
            <button
              onClick={() => toggleCategory("business-support")}
              className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left hover-elevate active-elevate-2 transition-all group"
              data-testid="button-category-business-support"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-chart-2 to-destructive border-2 border-white/20 flex items-center justify-center shadow-lg">
                    <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-black text-foreground">
                      Business Support
                    </h3>
                    <p className="text-xs text-muted-foreground font-medium">16 comprehensive services</p>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 text-chart-2 transition-transform duration-300 flex-shrink-0 ${expandedCategory === "business-support" ? "rotate-180" : ""}`} />
              </div>
            </button>
            {expandedCategory === "business-support" && (
              <div className="px-3 sm:px-6 pb-5 sm:pb-6 pt-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 animate-in slide-in-from-top-2 duration-300">
              {businessSupportServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  popular={service.popular}
                  onClick={() => console.log(`Clicked: ${service.title}`)}
                />
              ))}
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
