import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Globe } from "lucide-react";
import logoImage from '@assets/generated_images/SAHYOG_company_logo_circular_3e2c4b6e.png';

interface ProfileSectionProps {
  profileImage?: string;
  companyName: string;
  tagline: string;
  description: string;
  phone: string;
  email: string;
}

export default function ProfileSection({
  profileImage,
  companyName,
  tagline,
  description,
  phone,
  email
}: ProfileSectionProps) {
  return (
    <div className="relative px-6 pb-8">
      <div className="flex flex-col items-center -mt-24 md:-mt-28">
        <div className="relative">
          <Avatar className="w-40 h-40 md:w-48 md:h-48 border-[6px] border-background shadow-2xl ring-4 ring-primary/20">
            <AvatarImage src={profileImage || logoImage} alt={companyName} />
            <AvatarFallback className="bg-primary text-primary-foreground text-4xl font-bold">
              S
            </AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-destructive rounded-full border-4 border-background flex items-center justify-center shadow-lg">
            <Globe className="w-6 h-6 text-white" />
          </div>
        </div>
        
        <Card className="mt-6 p-6 max-w-3xl w-full border-2 border-primary/20 shadow-xl">
          <div className="text-center space-y-3">
            <div className="inline-block px-4 py-1 bg-primary/10 border border-primary/30 rounded-full">
              <p className="text-xs uppercase tracking-wider text-primary font-bold" data-testid="text-subtitle">
                Tax & Finance Advisory Limited
              </p>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black text-foreground bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent" data-testid="text-company-name">
              {companyName}
            </h1>
            
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-destructive to-transparent mx-auto" />
            
            <p className="text-lg md:text-xl font-semibold text-foreground pt-2" data-testid="text-tagline">
              {tagline}
            </p>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto" data-testid="text-description">
              {description}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 mt-6">
            <a
              href={`tel:${phone}`}
              className="flex items-center gap-3 bg-card border-2 border-card-border hover:border-primary/50 px-4 py-3 rounded-lg hover-elevate active-elevate-2 transition-all group"
              data-testid="link-phone"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Call Us</p>
                <p className="font-semibold text-foreground">{phone}</p>
              </div>
            </a>
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-3 bg-card border-2 border-card-border hover:border-primary/50 px-4 py-3 rounded-lg hover-elevate active-elevate-2 transition-all group"
              data-testid="link-email"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Email Us</p>
                <p className="font-semibold text-foreground text-sm">{email}</p>
              </div>
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
}
