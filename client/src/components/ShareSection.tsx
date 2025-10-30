import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { QRCodeSVG } from "qrcode.react";
import { Share2, Download, MessageCircle, Linkedin, Mail, Copy, Check } from "lucide-react";
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
    <div className="px-6 py-12 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground" data-testid="text-share-heading">
          Share This Card
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Actions</h3>
            <div className="space-y-3">
              <Button
                onClick={handleCopyLink}
                variant="outline"
                className="w-full justify-start"
                data-testid="button-copy-link"
              >
                {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                {copied ? "Link Copied!" : "Copy Link"}
              </Button>
              
              <Button
                onClick={handleDownloadVCard}
                variant="outline"
                className="w-full justify-start"
                data-testid="button-download-vcard"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Contact
              </Button>

              <div className="pt-2">
                <p className="text-sm font-medium text-muted-foreground mb-3">Share via</p>
                <div className="flex gap-2">
                  <Button
                    onClick={handleWhatsAppShare}
                    size="icon"
                    variant="outline"
                    className="rounded-full"
                    data-testid="button-share-whatsapp"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </Button>
                  <Button
                    onClick={handleLinkedInShare}
                    size="icon"
                    variant="outline"
                    className="rounded-full"
                    data-testid="button-share-linkedin"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Button>
                  <Button
                    onClick={handleEmailShare}
                    size="icon"
                    variant="outline"
                    className="rounded-full"
                    data-testid="button-share-email"
                  >
                    <Mail className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 flex flex-col items-center justify-center">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Scan QR Code</h3>
            <div className="bg-white p-4 rounded-md">
              <QRCodeSVG value={cardUrl} size={200} data-testid="qr-code" />
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Scan to open this card on mobile
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
