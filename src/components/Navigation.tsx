import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import cfseLogoImg from "@/assets/cfse-logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logoRef = useRef<HTMLImageElement>(null);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "People", href: "#people" },
    { label: "Summary", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => {
                const aboutSection = document.getElementById('about');
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.hash = '#about';
                }
                if (logoRef.current) {
                  // You can use logoRef.current here if needed
                  // For example: logoRef.current.classList.add('clicked');
                }
              }}
              className="focus:outline-none group"
              aria-label="Go to About section"
              style={{ background: 'none', border: 'none', padding: 0 }}
            >
              <img
                ref={logoRef}
                src={cfseLogoImg}
                alt="CFS Engineering"
                className="h-10 w-auto transition duration-200 group-hover:brightness-110 group-hover:contrast-125 group-active:scale-95"
                style={{ filter: 'none' }}
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-smooth"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Contact Button */}
          <div className="hidden md:block">
            <Button
              variant="default"
              size="sm"
              asChild
            >
              <a href="mailto:contact@cfse.ch">Contact Us</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t border-border">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-smooth"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2">
                <Button variant="default" size="sm" className="w-full">
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;