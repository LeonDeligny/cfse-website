import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MapPin,
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
            Summary
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
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-lg p-3 flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-row w-full items-start gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">Our Location</h3>
                    <p className="text-muted-foreground">
                      EPFL Innovation Park – Building A<br />
                      1015 Lausanne<br />
                      Switzerland
                    </p>
                  </div>
                  <div className="rounded-lg overflow-hidden border border-border shadow-sm w-48 min-w-[160px] h-32">
                    <iframe
                      title="EPFL Innovation Park – Building A Map"
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5491.025719628417!2d6.5602468!3d46.5177524!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c30fdc0000001%3A0x5c17aaeec5468263!2sCFS%20Engineering!5e0!3m2!1sen!2sch!4v1757872612016!5m2!1sen!2sch"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
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
                  <Button
                    variant="professional"
                    size="sm"
                    onClick={() => {
                      window.location.href =
                        'mailto:contact@cfse.ch';
                    }}
                  >
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

          {/* Collaborators Logos Section */}
          <div className="text-center mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Our Collaborators</h3>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <img src="/collaborators/dlr.svg" alt="DLR" className="h-16 w-auto object-contain" />
              {/* Add more logos here, e.g. ESA, EPFL, etc. */}
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Contact;