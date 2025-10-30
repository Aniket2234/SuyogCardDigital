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
    <div className="px-6 py-12 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <Badge variant="outline" className="mb-3 border-primary/30 text-primary px-4 py-1">
          What We Offer
        </Badge>
        <h2 className="text-3xl md:text-4xl font-black text-foreground mb-2" data-testid="text-services-heading">
          Our Services
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
      </div>

      <div className="space-y-5">
        <Card className="overflow-hidden border-2 border-primary/20 shadow-lg">
          <button
            onClick={() => toggleCategory("business-registration")}
            className="w-full px-6 py-5 text-left hover-elevate active-elevate-2 transition-all group"
            data-testid="button-category-business-registration"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground">
                    Business Registration Services
                  </h3>
                  <p className="text-xs text-muted-foreground">8 specialized services</p>
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 text-primary transition-transform duration-300 ${expandedCategory === "business-registration" ? "rotate-180" : ""}`} />
            </div>
          </button>
          {expandedCategory === "business-registration" && (
            <div className="px-6 pb-6 pt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-in slide-in-from-top-2 duration-300">
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

        <Card className="overflow-hidden border-2 border-chart-2/20 shadow-lg">
          <button
            onClick={() => toggleCategory("business-support")}
            className="w-full px-6 py-5 text-left hover-elevate active-elevate-2 transition-all group"
            data-testid="button-category-business-support"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-chart-2/10 border border-chart-2/30 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-chart-2" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground">
                    Business Support Services
                  </h3>
                  <p className="text-xs text-muted-foreground">16 comprehensive services</p>
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 text-chart-2 transition-transform duration-300 ${expandedCategory === "business-support" ? "rotate-180" : ""}`} />
            </div>
          </button>
          {expandedCategory === "business-support" && (
            <div className="px-6 pb-6 pt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-in slide-in-from-top-2 duration-300">
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
  );
}
