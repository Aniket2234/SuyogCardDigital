import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  onClick?: () => void;
}

export default function ServiceCard({ icon: Icon, title, onClick }: ServiceCardProps) {
  return (
    <Card
      className="p-6 hover-elevate active-elevate-2 cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-primary/50"
      onClick={onClick}
      data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="flex flex-col items-center text-center space-y-3">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-sm font-medium text-foreground leading-tight">
          {title}
        </h3>
      </div>
    </Card>
  );
}
