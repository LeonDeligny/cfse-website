import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Building,
  ExternalLink
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your engineering simulation needs? Get in touch with our expert team 
            at EPFL Innovation Park.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-6 gradient-card border-card-border">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 rounded-lg p-3">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">Our Location</h3>
                  <p className="text-muted-foreground">
                    EPFL Innovation Park<br />
                    1015 Lausanne<br />
                    Switzerland
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 gradient-card border-card-border">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 rounded-lg p-3">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">EPFL Connection</h3>
                  <p className="text-muted-foreground mb-3">
                    Located at the Swiss Federal Institute of Technology Innovation Park, 
                    connecting us to world-class research and development.
                  </p>
                  <a 
                    href="https://epfl-innovationpark.ch/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary-light transition-smooth"
                  >
                    Visit EPFL Innovation Park
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 gradient-card border-card-border">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 rounded-lg p-3">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">Get in Touch</h3>
                  <p className="text-muted-foreground mb-3">
                    Ready to discuss your engineering simulation project? 
                    We'd love to hear about your challenges and how we can help.
                  </p>
                  <Button variant="professional" size="sm">
                    Send Message
                    <Mail className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form / Info */}
          <div className="space-y-8">
            <Card className="p-8 gradient-card border-card-border">
              <h3 className="text-xl font-semibold text-card-foreground mb-6">
                Project Consultation
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-card-foreground mb-3">What We Discuss:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      Your specific engineering challenges
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      Simulation requirements and objectives
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      Timeline and project scope
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      Technical approach and methodology
                    </li>
                  </ul>
                </div>

                <div className="border-t border-border pt-6">
                  <h4 className="text-lg font-medium text-card-foreground mb-3">Why Choose CFS Engineering:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mr-3"></div>
                      25+ years of simulation expertise
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mr-3"></div>
                      Advanced computational methods
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mr-3"></div>
                      EPFL Innovation Park location
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mr-3"></div>
                      Customized engineering solutions
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Quick Links */}
            <Card className="p-6 gradient-card border-card-border">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">Quick Links</h3>
              <div className="space-y-3">
                <a 
                  href="http://www.epfl.ch" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-muted-foreground hover:text-primary transition-smooth"
                >
                  <Globe className="h-4 w-4 mr-3" />
                  EPFL - Swiss Federal Institute of Technology
                  <ExternalLink className="ml-auto h-4 w-4" />
                </a>
                <a 
                  href="https://epfl-innovationpark.ch/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-muted-foreground hover:text-primary transition-smooth"
                >
                  <Building className="h-4 w-4 mr-3" />
                  EPFL Innovation Park
                  <ExternalLink className="ml-auto h-4 w-4" />
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;