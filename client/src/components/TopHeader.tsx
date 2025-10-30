import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Share2, QrCode, X, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

export default function TopHeader() {
  const [showQRDialog, setShowQRDialog] = useState(false);
  const [showShareDialog, setShowShareDialog] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const cardUrl = "https://airavatadigitalcard.netlify.app/";

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(cardUrl);
      setCopied(true);
      toast({
        title: "Link copied!",
        description: "The link has been copied to your clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast({
        title: "Failed to copy",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "SAHYOG Tax & Finance Advisory Limited",
          text: "Check out our digital business card!",
          url: cardUrl,
        });
      } catch (error) {
        console.log("Share canceled");
      }
    } else {
      setShowShareDialog(true);
    }
  };

  return (
    <>
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <Button
          size="icon"
          onClick={() => setShowQRDialog(true)}
          className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-chart-2 hover:scale-110 transition-transform shadow-lg border-2 border-white/20"
          data-testid="button-qr-code"
        >
          <QrCode className="w-5 h-5 text-white" />
        </Button>
        
        <Button
          size="icon"
          onClick={handleShare}
          className="w-10 h-10 rounded-full bg-gradient-to-br from-chart-2 to-primary hover:scale-110 transition-transform shadow-lg border-2 border-white/20"
          data-testid="button-share"
        >
          <Share2 className="w-5 h-5 text-white" />
        </Button>
      </div>

      <Dialog open={showQRDialog} onOpenChange={setShowQRDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center font-black text-2xl bg-gradient-to-r from-primary via-destructive to-chart-2 bg-clip-text text-transparent">
              Scan QR Code
            </DialogTitle>
            <DialogDescription className="text-center">
              Scan this QR code to view our digital business card
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center justify-center gap-4 py-4">
            <div className="p-4 bg-white rounded-xl shadow-lg border-4 border-primary/20">
              <QRCodeSVG
                value={cardUrl}
                size={200}
                level="H"
                includeMargin={false}
              />
            </div>
            <p className="text-xs text-muted-foreground text-center max-w-xs">
              Point your camera at this code to open the link
            </p>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showShareDialog} onOpenChange={setShowShareDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center font-black text-2xl bg-gradient-to-r from-primary via-destructive to-chart-2 bg-clip-text text-transparent">
              Share Digital Card
            </DialogTitle>
            <DialogDescription className="text-center">
              Copy the link or share via other means
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-4">
            <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
              <input
                type="text"
                value={cardUrl}
                readOnly
                className="flex-1 bg-transparent text-sm outline-none"
              />
              <Button
                size="sm"
                onClick={handleCopyLink}
                className="shrink-0"
                data-testid="button-copy-link"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 mr-1" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-1" />
                    Copy
                  </>
                )}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              Share this link with anyone to show them your digital business card
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
