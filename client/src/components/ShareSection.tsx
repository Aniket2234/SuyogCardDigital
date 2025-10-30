import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { QRCodeSVG } from "qrcode.react";
import { Share2, Download, MessageCircle, Linkedin, Mail, Copy, Check, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ShareSectionProps {
  cardUrl?: string;
  companyName: string;
  phone: string;
  email: string;
}

export default function ShareSection({ 
  cardUrl = window.location.href,
  companyName,
  phone,
  email
}: ShareSectionProps) {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopyLink = () => {
    navigator.clipboard.writeText(cardUrl);
    setCopied(true);
    toast({
      title: "Link Copied!",
      description: "The link has been copied to your clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsAppShare = () => {
    const message = `Check out ${companyName}'s digital business card: ${cardUrl}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleLinkedInShare = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(cardUrl)}`, '_blank');
  };

  const handleEmailShare = () => {
    const subject = `${companyName} - Digital Business Card`;
    const body = `I'd like to share ${companyName}'s digital business card with you:\n\n${cardUrl}`;
    window.open(`mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  };

  const handleDownloadVCard = () => {
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:${companyName}
ORG:${companyName}
TEL:${phone}
EMAIL:${email}
URL:${cardUrl}
END:VCARD`;

    const blob = new Blob([vCard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${companyName.replace(/\s+/g, '_')}.vcf`;
    link.click();
    window.URL.revokeObjectURL(url);
    
    toast({
      title: "vCard Downloaded!",
      description: "The contact has been saved to your device.",
    });
  };

  return (
    <div className="px-4 sm:px-6 py-10 sm:py-12 bg-gradient-to-b from-background via-primary/5 to-chart-2/10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <div className="relative inline-block mb-3">
            <Badge variant="outline" className="relative border-2 border-primary/50 px-5 py-1.5 font-bold bg-gradient-to-r from-primary/5 to-chart-2/5">
              <Share2 className="w-3 h-3 mr-1.5 text-primary" />
              <span className="text-primary">Share & Connect</span>
            </Badge>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r from-primary via-destructive to-chart-2 bg-clip-text text-transparent mb-3" data-testid="text-share-heading">
            Share This Card
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-1 w-12 bg-gradient-to-r from-transparent via-primary to-primary rounded-full" />
            <div className="h-1.5 w-16 bg-gradient-to-r from-primary via-destructive to-chart-2 rounded-full" />
            <div className="h-1 w-12 bg-gradient-to-r from-chart-2 via-chart-2 to-transparent rounded-full" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          <Card className="p-5 sm:p-6 border-2 border-primary/20 shadow-md bg-gradient-to-br from-card to-primary/5">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-black text-foreground">Quick Actions</h3>
              </div>
              <div className="space-y-3">
                <Button
                  onClick={handleCopyLink}
                  variant="outline"
                  className="w-full justify-start border-2 hover:border-primary h-11 sm:h-12 bg-gradient-to-r from-primary/5 to-transparent"
                  data-testid="button-copy-link"
                >
                  {copied ? <Check className="w-5 h-5 mr-3 text-green-500" /> : <Copy className="w-5 h-5 mr-3 text-primary" />}
                  <span className="font-bold text-sm sm:text-base">{copied ? "Link Copied!" : "Copy Link"}</span>
                </Button>
                
                <Button
                  onClick={handleDownloadVCard}
                  variant="outline"
                  className="w-full justify-start border-2 hover:border-chart-2 h-11 sm:h-12 bg-gradient-to-r from-chart-2/5 to-transparent"
                  data-testid="button-download-vcard"
                >
                  <Download className="w-5 h-5 mr-3 text-chart-2" />
                  <span className="font-bold text-sm sm:text-base">Download Contact</span>
                </Button>

                <div className="pt-3 border-t-2 border-dashed border-primary/20">
                  <p className="text-sm font-black text-foreground mb-4">Share via Social Media</p>
                  <div className="flex gap-2 sm:gap-3">
                    <Button
                      onClick={handleWhatsAppShare}
                      size="icon"
                      className="rounded-xl h-11 w-11 sm:h-12 sm:w-12 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 border-2 border-white/20 shadow-lg"
                      data-testid="button-share-whatsapp"
                    >
                      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                    </Button>
                    <Button
                      onClick={handleLinkedInShare}
                      size="icon"
                      className="rounded-xl h-11 w-11 sm:h-12 sm:w-12 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 border-2 border-white/20 shadow-lg"
                      data-testid="button-share-linkedin"
                    >
                      <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                    </Button>
                    <Button
                      onClick={handleEmailShare}
                      size="icon"
                      className="rounded-xl h-11 w-11 sm:h-12 sm:w-12 bg-gradient-to-br from-primary to-chart-2 border-2 border-white/20 shadow-lg"
                      data-testid="button-share-email"
                    >
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                    </Button>
                  </div>
                </div>
              </div>
          </Card>

          <Card className="p-5 sm:p-6 border-2 border-chart-2/20 shadow-md bg-gradient-to-br from-card to-chart-2/5">
              <h3 className="text-base sm:text-lg font-black mb-4 text-foreground text-center">Scan QR Code</h3>
              <div className="relative mx-auto w-fit">
                <div className="relative bg-white p-4 sm:p-5 rounded-xl shadow-md border-2 border-primary/10">
                  <QRCodeSVG value={cardUrl} size={180} className="sm:w-[200px] sm:h-[200px]" data-testid="qr-code" level="H" />
                </div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground mt-4 sm:mt-5 text-center font-bold">
                📱 Scan to open this card instantly on your mobile device
              </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
