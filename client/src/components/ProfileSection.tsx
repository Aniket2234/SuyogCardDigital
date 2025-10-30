import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Building2, Phone, Mail } from "lucide-react";

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
    <div className="relative px-6 pb-6">
      <div className="flex flex-col items-center -mt-20 md:-mt-24">
        <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-background shadow-lg">
          <AvatarImage src={profileImage} alt={companyName} />
          <AvatarFallback className="bg-primary text-primary-foreground text-4xl font-bold">
            <Building2 className="w-16 h-16" />
          </AvatarFallback>
        </Avatar>
        
        <div className="text-center mt-4 space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground" data-testid="text-company-name">
            {companyName}
          </h1>
          <p className="text-sm uppercase tracking-wide text-muted-foreground font-semibold" data-testid="text-subtitle">
            TAX & FINANCE ADVISORY LIMITED
          </p>
        </div>

        <div className="mt-4 max-w-2xl text-center">
          <p className="text-lg md:text-xl font-medium text-foreground" data-testid="text-tagline">
            {tagline}
          </p>
          <p className="text-sm text-muted-foreground mt-2" data-testid="text-description">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-6">
          <a
            href={`tel:${phone}`}
            className="flex items-center gap-2 text-foreground hover-elevate active-elevate-2 px-4 py-2 rounded-md transition-all"
            data-testid="link-phone"
          >
            <Phone className="w-4 h-4 text-primary" />
            <span className="font-medium">{phone}</span>
          </a>
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2 text-foreground hover-elevate active-elevate-2 px-4 py-2 rounded-md transition-all"
            data-testid="link-email"
          >
            <Mail className="w-4 h-4 text-primary" />
            <span className="font-medium">{email}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
