import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  onClick?: () => void;
  popular?: boolean;
}

export default function ServiceCard({ icon: Icon, title, onClick, popular }: ServiceCardProps) {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-chart-2 to-destructive rounded-xl opacity-0 group-hover:opacity-40 blur transition-opacity duration-300"></div>
      <Card
        className="relative p-4 sm:p-5 hover-elevate active-elevate-2 cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-primary border-2 hover:-translate-y-1 overflow-hidden bg-gradient-to-br from-card to-primary/5"
        onClick={onClick}
        data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        {popular && (
          <Badge className="absolute -right-8 top-3 rotate-45 px-8 bg-gradient-to-r from-destructive to-destructive/80 text-white text-xs font-bold shadow-lg">
            Popular
          </Badge>
        )}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-full -mr-12 -mt-12 group-hover:from-primary/20 transition-colors" />
        
        <div className="flex flex-col items-center text-center space-y-3 relative">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-chart-2 rounded-xl blur-sm opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-primary via-chart-2 to-primary border-2 border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
              <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
          </div>
          <h3 className="text-xs sm:text-sm font-bold text-foreground leading-tight min-h-[36px] sm:min-h-[40px] flex items-center px-1">
            {title}
          </h3>
        </div>
      </Card>
    </div>
  );
}
