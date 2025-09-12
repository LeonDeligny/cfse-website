import cfseLogoImg from "@/assets/cfse-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src={cfseLogoImg} 
                alt="CFS Engineering" 
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-white/80 mb-4">
              Expert numerical simulation services for fluid mechanics and structural mechanics 
              engineering problems since 1999.
            </p>
            <p className="text-white/60 text-sm">
              Located at EPFL Innovation Park<br />
              1015 Lausanne, Switzerland
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>Aerodynamics</li>
              <li>Aerothermodynamics</li>
              <li>Fluid Structure Interaction</li>
              <li>Tailored Solutions</li>
              <li>Engineering Consulting</li>
              <li>Custom Solutions</li>
            </ul>
          </div>

          {/* Contact & Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="space-y-3 text-white/80 text-sm">
              <p>EPFL Innovation Park</p>
              <p>1015 Lausanne, Switzerland</p>
              <div className="pt-2">
                <a 
                  href="http://www.epfl.ch" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-smooth"
                >
                  EPFL - Swiss Federal Institute of Technology
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} CFS Engineering. All rights reserved. | 
            Computational Fluids & Structures Engineering Solutions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;