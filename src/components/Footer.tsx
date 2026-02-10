import { Linkedin, CalendarDays, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-navy text-cream">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10 items-start mb-12">
          {/* Left */}
          <div>
            <p className="font-heading font-bold text-lg tracking-wide mb-1">THRESHOLD PARTNERS</p>
            <p className="font-body text-cream/70 text-sm">AI Advisory for Leadership Teams</p>
          </div>

          {/* Center */}
          <div className="flex items-center justify-center">
            <a
              href="mailto:conor@threshold-partners.com"
              className="font-body text-cream/80 hover:text-cream transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              conor@threshold-partners.com
            </a>
          </div>

          {/* Right */}
          <div className="flex items-center md:justify-end gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-cream/10 hover:bg-cream/20 flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-cream/10 hover:bg-cream/20 flex items-center justify-center transition-colors"
              aria-label="Book a call"
            >
              <CalendarDays className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-6 text-center">
          <p className="font-body text-cream/50 text-sm">© 2026 Threshold Partners</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
