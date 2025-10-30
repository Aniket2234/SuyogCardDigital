import { Linkedin, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:info@sahyog.in"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-contact"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-blogs"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-careers"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Our Mission</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Turn your business idea into reality with us. Begin your journey as a business owner with us – From business planning to Business Management
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Connect With Us</h3>
            <div className="flex gap-3">
              <a
                href="https://wa.me/918888004466"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover-elevate active-elevate-2 transition-all"
                data-testid="link-social-whatsapp"
              >
                <MessageCircle className="w-5 h-5 text-primary" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover-elevate active-elevate-2 transition-all"
                data-testid="link-social-linkedin"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
              <a
                href="mailto:info@sahyog.in"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover-elevate active-elevate-2 transition-all"
                data-testid="link-social-email"
              >
                <Mail className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-card-border">
          <p className="text-muted-foreground text-sm text-center">
            A complete solution for all Individual, social & business entities to meet their various requirement such as registrations, tax filings, compliance, Loan Management, Business Start Up Services and other Business Support services across India.
          </p>
          <p className="text-muted-foreground text-xs text-center mt-4">
            © {new Date().getFullYear()} SAHYOG Tax & Finance Advisory Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
