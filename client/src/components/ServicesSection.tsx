import { useState } from "react";
import { Card } from "@/components/ui/card";
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
  Target
} from "lucide-react";
import ServiceCard from "./ServiceCard";

const businessRegistrationServices = [
  { icon: Building2, title: "Private Limited Company Registration" },
  { icon: Users, title: "OPC (One Person Company Registration)" },
  { icon: Briefcase, title: "Limited Liability (LLP) Registration" },
  { icon: Landmark, title: "Public Limited Company Registration" },
  { icon: Users, title: "Partnership Firm Registration" },
  { icon: FileText, title: "Proprietorship Firm Registration" },
  { icon: Heart, title: "Section 8 Company (NGO) Registration" },
  { icon: Sprout, title: "Farmer Producer Company Registration" }
];

const businessSupportServices = [
  { icon: CreditCard, title: "PAN Registration" },
  { icon: Receipt, title: "TAN Registration" },
  { icon: ShoppingBag, title: "GST Registration" },
  { icon: Factory, title: "Udyam (MSME) Registration" },
  { icon: Store, title: "Shop Act Registration/Gumasta Registration" },
  { icon: Rocket, title: "Startup India Registration" },
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
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground" data-testid="text-services-heading">
        Our Services
      </h2>

      <div className="space-y-6">
        <Card className="overflow-hidden">
          <button
            onClick={() => toggleCategory("business-registration")}
            className="w-full px-6 py-4 text-left hover-elevate active-elevate-2 transition-all"
            data-testid="button-category-business-registration"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg md:text-xl font-semibold text-foreground">
                Business Registration Services
              </h3>
              <span className="text-muted-foreground text-sm">
                {expandedCategory === "business-registration" ? "−" : "+"}
              </span>
            </div>
          </button>
          {expandedCategory === "business-registration" && (
            <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {businessRegistrationServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  onClick={() => console.log(`Clicked: ${service.title}`)}
                />
              ))}
            </div>
          )}
        </Card>

        <Card className="overflow-hidden">
          <button
            onClick={() => toggleCategory("business-support")}
            className="w-full px-6 py-4 text-left hover-elevate active-elevate-2 transition-all"
            data-testid="button-category-business-support"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg md:text-xl font-semibold text-foreground">
                Business Support Services
              </h3>
              <span className="text-muted-foreground text-sm">
                {expandedCategory === "business-support" ? "−" : "+"}
              </span>
            </div>
          </button>
          {expandedCategory === "business-support" && (
            <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {businessSupportServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
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
