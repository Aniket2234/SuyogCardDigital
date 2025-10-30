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
    <div className="px-6 py-12 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <Badge variant="outline" className="mb-3 border-primary/30 text-primary px-4 py-1">
            <Share2 className="w-3 h-3 mr-1" />
            Share & Connect
          </Badge>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-2" data-testid="text-share-heading">
            Share This Card
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 border-2 border-primary/20 shadow-xl">
            <div className="flex items-center gap-2 mb-5">
              <Sparkles className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-bold text-foreground">Quick Actions</h3>
            </div>
            <div className="space-y-3">
              <Button
                onClick={handleCopyLink}
                variant="outline"
                className="w-full justify-start border-2 hover:border-primary/50 h-12"
                data-testid="button-copy-link"
              >
                {copied ? <Check className="w-5 h-5 mr-3 text-green-500" /> : <Copy className="w-5 h-5 mr-3" />}
                <span className="font-semibold">{copied ? "Link Copied!" : "Copy Link"}</span>
              </Button>
              
              <Button
                onClick={handleDownloadVCard}
                variant="outline"
                className="w-full justify-start border-2 hover:border-primary/50 h-12"
                data-testid="button-download-vcard"
              >
                <Download className="w-5 h-5 mr-3" />
                <span className="font-semibold">Download Contact</span>
              </Button>

              <div className="pt-3 border-t-2 border-dashed border-border">
                <p className="text-sm font-bold text-foreground mb-4">Share via Social Media</p>
                <div className="flex gap-3">
                  <Button
                    onClick={handleWhatsAppShare}
                    size="icon"
                    className="rounded-xl h-12 w-12 bg-green-500 hover:bg-green-600 border-2 border-green-600"
                    data-testid="button-share-whatsapp"
                  >
                    <MessageCircle className="w-6 h-6" />
                  </Button>
                  <Button
                    onClick={handleLinkedInShare}
                    size="icon"
                    className="rounded-xl h-12 w-12 bg-blue-600 hover:bg-blue-700 border-2 border-blue-700"
                    data-testid="button-share-linkedin"
                  >
                    <Linkedin className="w-6 h-6" />
                  </Button>
                  <Button
                    onClick={handleEmailShare}
                    size="icon"
                    className="rounded-xl h-12 w-12"
                    data-testid="button-share-email"
                  >
                    <Mail className="w-6 h-6" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-2 border-chart-2/20 shadow-xl bg-gradient-to-br from-card to-primary/5">
            <h3 className="text-lg font-bold mb-4 text-foreground text-center">Scan QR Code</h3>
            <div className="bg-white p-5 rounded-xl shadow-lg border-4 border-primary/20 mx-auto w-fit">
              <QRCodeSVG value={cardUrl} size={200} data-testid="qr-code" level="H" />
            </div>
            <p className="text-sm text-muted-foreground mt-5 text-center font-medium">
              📱 Scan to open this card instantly on your mobile device
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
