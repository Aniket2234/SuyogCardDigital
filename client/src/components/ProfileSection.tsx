import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Phone, Mail, Globe } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
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
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-destructive/20 to-chart-2/20 rounded-full"></div>
          <Avatar className="relative w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 border-[6px] border-background shadow-lg ring-2 ring-primary/20">
            <AvatarImage src={profileImage || logoImage} alt={companyName} />
            <AvatarFallback className="bg-gradient-to-br from-primary to-chart-2 text-primary-foreground text-4xl font-bold">
              S
            </AvatarFallback>
          </Avatar>
        </div>
        
        <div className="relative mt-6 w-full max-w-3xl">
          <Card className="relative p-5 sm:p-6 border-2 border-primary/20 shadow-lg bg-gradient-to-br from-card via-card to-primary/5">
            
            <div className="text-center space-y-3">
              <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-primary/10 via-chart-2/10 to-primary/10 border-2 border-primary/30 rounded-full relative">
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

            <div className="grid sm:grid-cols-3 gap-3 mt-6">
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
                  <p className="font-bold text-foreground text-xs md:text-sm whitespace-nowrap">{phone}</p>
                </div>
              </a>
              <a
                href={`mailto:${email}`}
                className="relative flex items-center gap-3 bg-gradient-to-r from-chart-2/5 to-primary/5 border-2 border-chart-2/30 hover:border-chart-2 px-4 py-3 rounded-xl hover-elevate active-elevate-2 transition-all group overflow-hidden"
                data-testid="link-email"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-chart-2/10 rounded-full -mr-10 -mt-10 group-hover:bg-chart-2/20 transition-colors"></div>
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-chart-2 to-primary flex items-center justify-center shadow-md">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground font-medium">Email Us</p>
                  <p className="font-bold text-foreground text-xs sm:text-sm">{email}</p>
                </div>
              </a>
              <a
                href="https://sahyog.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center gap-3 bg-gradient-to-r from-primary/5 to-chart-2/5 border-2 border-primary/30 hover:border-primary px-4 py-3 rounded-xl hover-elevate active-elevate-2 transition-all group overflow-hidden"
                data-testid="link-website"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full -mr-10 -mt-10 group-hover:bg-primary/20 transition-colors"></div>
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center shadow-md">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground font-medium">Visit Website</p>
                  <p className="font-bold text-foreground text-xs sm:text-sm">sahyog.in</p>
                </div>
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 mt-6 pt-6 border-t-2 border-dashed border-primary/20">
              <a
                href="https://www.linkedin.com/company/sahyog"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0077B5] flex items-center justify-center hover:scale-110 transition-all shadow-lg"
                data-testid="link-linkedin"
              >
                <FaLinkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.instagram.com/sahyog.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#E4405F] flex items-center justify-center hover:scale-110 transition-all shadow-lg"
                data-testid="link-instagram"
              >
                <FaInstagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://twitter.com/sahyog"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1DA1F2] flex items-center justify-center hover:scale-110 transition-all shadow-lg"
                data-testid="link-twitter"
              >
                <FaTwitter className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.facebook.com/sahyog"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center hover:scale-110 transition-all shadow-lg"
                data-testid="link-facebook"
              >
                <FaFacebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://wa.me/918888004466"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center hover:scale-110 transition-all shadow-lg"
                data-testid="link-whatsapp"
              >
                <FaWhatsapp className="w-5 h-5 text-white" />
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
