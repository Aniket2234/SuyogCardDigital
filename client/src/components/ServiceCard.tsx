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
    <Card
      className="relative p-5 hover-elevate active-elevate-2 cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-primary border-2 hover:-translate-y-1 overflow-hidden group"
      onClick={onClick}
      data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {popular && (
        <Badge className="absolute -right-8 top-3 rotate-45 px-8 bg-destructive text-white text-xs">
          Popular
        </Badge>
      )}
      <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -mr-10 -mt-10 group-hover:bg-primary/10 transition-colors" />
      
      <div className="flex flex-col items-center text-center space-y-3 relative">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform">
          <Icon className="w-7 h-7 text-primary" />
        </div>
        <h3 className="text-sm font-semibold text-foreground leading-tight min-h-[40px] flex items-center">
          {title}
        </h3>
      </div>
    </Card>
  );
}
