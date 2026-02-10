import { useState } from "react";
import { Menu, X } from "lucide-react";
import chevronLogo from "@/assets/chevron-logo.png";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-cream border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={chevronLogo} alt="Threshold Partners logo" className="h-8 w-8" />
          <span className="font-heading font-bold text-xl tracking-wide text-navy">
            THRESHOLD PARTNERS
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-3">
          <button
            onClick={() => scrollTo("lead-magnet")}
            className="px-5 py-2.5 rounded-md bg-orange text-navy font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            The Leadership Gap
          </button>
          <a
            href="https://calendar.app.google/58qqkkF4R7CzgheV6"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-md bg-orange text-navy font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Book a Call
          </a>
        </nav>

        {/* Mobile toggle */}
        <button className="md:hidden text-navy" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-2 bg-cream">
          <button
            onClick={() => scrollTo("lead-magnet")}
            className="w-full px-5 py-2.5 rounded-md bg-orange text-navy font-heading font-semibold text-sm"
          >
            The Leadership Gap
          </button>
          <a
            href="https://calendar.app.google/58qqkkF4R7CzgheV6"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full px-5 py-2.5 rounded-md bg-orange text-navy font-heading font-semibold text-sm text-center"
          >
            Book a Call
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
