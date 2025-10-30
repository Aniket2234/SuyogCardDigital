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
    <div className="relative px-4 sm:px-6 pb-8">
      <div className="flex flex-col items-center -mt-20 sm:-mt-24 md:-mt-28">
        <div className="relative">
          <div className="absolute -inset-2 bg-gradient-to-r from-primary via-destructive to-chart-2 rounded-full blur-md opacity-50"></div>
          <Avatar className="relative w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 border-[6px] border-background shadow-2xl">
            <AvatarImage src={profileImage || logoImage} alt={companyName} />
            <AvatarFallback className="bg-gradient-to-br from-primary to-chart-2 text-primary-foreground text-4xl font-bold">
              S
            </AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-destructive to-destructive/80 rounded-full border-4 border-background flex items-center justify-center shadow-lg animate-pulse">
            <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
        </div>
        
        <div className="relative mt-6 w-full max-w-3xl">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-chart-2 to-destructive rounded-2xl blur opacity-20"></div>
          <Card className="relative p-5 sm:p-6 border-2 border-transparent shadow-xl bg-gradient-to-br from-card via-card to-primary/5">
            <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-primary via-chart-2 to-destructive -z-10"></div>
            
            <div className="text-center space-y-3">
              <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-primary/10 via-chart-2/10 to-primary/10 border-2 border-transparent rounded-full relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-chart-2 to-destructive opacity-30 blur-sm"></div>
                <p className="relative text-xs uppercase tracking-wider bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent font-black" data-testid="text-subtitle">
                  Tax & Finance Advisory Limited
                </p>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-primary via-destructive to-chart-2 bg-clip-text text-transparent" data-testid="text-company-name">
                {companyName}
              </h1>
              
              <div className="flex items-center justify-center gap-2">
                <div className="h-1 w-12 bg-gradient-to-r from-transparent via-primary to-primary rounded-full" />
                <div className="h-1.5 w-16 bg-gradient-to-r from-primary via-destructive to-chart-2 rounded-full" />
                <div className="h-1 w-12 bg-gradient-to-r from-chart-2 via-chart-2 to-transparent rounded-full" />
              </div>
              
              <p className="text-base sm:text-lg md:text-xl font-bold text-foreground pt-2" data-testid="text-tagline">
                {tagline}
              </p>
              <p className="text-sm text-muted-foreground max-w-xl mx-auto" data-testid="text-description">
                {description}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 mt-6">
              <a
                href={`tel:${phone}`}
                className="relative flex items-center gap-3 bg-gradient-to-r from-primary/5 to-chart-2/5 border-2 border-primary/30 hover:border-primary px-4 py-3 rounded-xl hover-elevate active-elevate-2 transition-all group overflow-hidden"
                data-testid="link-phone"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full -mr-10 -mt-10 group-hover:bg-primary/20 transition-colors"></div>
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center shadow-md">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground font-medium">Call Us</p>
                  <p className="font-bold text-foreground text-sm sm:text-base">{phone}</p>
                </div>
              </a>
              <a
                href={`mailto:${email}`}
                className="relative flex items-center gap-3 bg-gradient-to-r from-chart-2/5 to-destructive/5 border-2 border-chart-2/30 hover:border-chart-2 px-4 py-3 rounded-xl hover-elevate active-elevate-2 transition-all group overflow-hidden"
                data-testid="link-email"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-chart-2/10 rounded-full -mr-10 -mt-10 group-hover:bg-chart-2/20 transition-colors"></div>
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-chart-2 to-destructive flex items-center justify-center shadow-md">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground font-medium">Email Us</p>
                  <p className="font-bold text-foreground text-xs sm:text-sm">{email}</p>
                </div>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
