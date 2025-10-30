import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function EnquireSection() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: ""
  });
  const [showDialog, setShowDialog] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowDialog(true);
    // Reset form
    setFormData({ name: "", number: "", email: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="px-4 sm:px-6 py-10 sm:py-12 bg-gradient-to-r from-primary/10 via-chart-2/5 to-primary/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-primary/20 to-chart-2/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-chart-2/20 to-primary/20 rounded-full blur-3xl" />
      
      <div className="relative max-w-4xl mx-auto">
        <Card className="relative border-2 border-primary/20 shadow-lg overflow-hidden bg-gradient-to-br from-card to-primary/5">
          <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-chart-2/20 to-transparent rounded-full -mr-12 sm:-mr-16 -mt-12 sm:-mt-16" />
          <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-tr from-primary/20 to-transparent rounded-full -ml-12 sm:-ml-16 -mb-12 sm:-mb-16" />
          
          <div className="relative p-6 sm:p-8 md:p-12 text-center space-y-5 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r from-primary via-destructive to-chart-2 bg-clip-text text-transparent mb-3">
              Enquire Now
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-1 w-12 bg-gradient-to-r from-transparent via-primary to-primary rounded-full" />
              <div className="h-1.5 w-16 bg-gradient-to-r from-primary via-destructive to-chart-2 rounded-full" />
              <div className="h-1 w-12 bg-gradient-to-r from-chart-2 via-chart-2 to-transparent rounded-full" />
            </div>
            
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto font-semibold">
              Fill in your details and we'll get back to you shortly
            </p>
            
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 pt-4">
              <div className="text-left">
                <Label htmlFor="name" className="text-sm font-bold">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 border-2 border-primary/20 focus:border-primary rounded-full"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="text-left">
                <Label htmlFor="number" className="text-sm font-bold">Phone Number</Label>
                <Input
                  id="number"
                  name="number"
                  type="tel"
                  value={formData.number}
                  onChange={handleChange}
                  required
                  className="mt-1 border-2 border-primary/20 focus:border-primary rounded-full"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div className="text-left">
                <Label htmlFor="email" className="text-sm font-bold">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 border-2 border-primary/20 focus:border-primary rounded-full"
                  placeholder="Enter your email address"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full h-12 sm:h-14 text-base sm:text-lg font-black bg-gradient-to-r from-primary to-chart-2 border-2 border-white/20 shadow-xl hover:shadow-2xl hover:scale-105 transition-transform rounded-full"
              >
                <Send className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                Submit Enquiry
              </Button>
            </form>

            <div className="flex items-center justify-center gap-3 mt-8 pt-6 border-t-2 border-dashed border-primary/20">
              <p className="text-sm font-black text-muted-foreground">Connect with us:</p>
              <a
                href="https://wa.me/918888004466"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center hover:scale-110 transition-all shadow-lg"
              >
                <FaWhatsapp className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.instagram.com/sahyog.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#E4405F] flex items-center justify-center hover:scale-110 transition-all shadow-lg"
              >
                <FaInstagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/company/sahyog"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0077B5] flex items-center justify-center hover:scale-110 transition-all shadow-lg"
              >
                <FaLinkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://twitter.com/sahyog"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1DA1F2] flex items-center justify-center hover:scale-110 transition-all shadow-lg"
              >
                <FaTwitter className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.facebook.com/sahyog"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center hover:scale-110 transition-all shadow-lg"
              >
                <FaFacebook className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </Card>
      </div>

      <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Enquiry Submitted Successfully!</AlertDialogTitle>
            <AlertDialogDescription>
              Thank you for your enquiry. We have received your information and will get back to you shortly.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button onClick={() => setShowDialog(false)}>Close</Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
