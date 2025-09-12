import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Waves, 
  Building2, 
  Thermometer, 
  Cog, 
  BarChart3, 
  Zap,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Waves,
      title: "Computational Fluid Dynamics (CFD)",
      description: "Advanced flow analysis, turbulence modeling, and multi-phase flow simulations for complex engineering systems.",
      features: ["Turbulent flow analysis", "Heat and mass transfer", "Multi-phase systems", "Flow optimization"]
    },
    {
      icon: Building2,
      title: "Structural Analysis (FEM)",
      description: "Comprehensive finite element analysis for static and dynamic structural problems across various materials.",
      features: ["Static stress analysis", "Dynamic response", "Modal analysis", "Fatigue assessment"]
    },
    {
      icon: Thermometer,
      title: "Heat Transfer Analysis",
      description: "Thermal modeling and analysis for heat exchangers, cooling systems, and thermal management applications.",
      features: ["Conduction analysis", "Convection modeling", "Radiation effects", "Thermal optimization"]
    },
    {
      icon: Cog,
      title: "Multiphysics Simulation",
      description: "Coupled analysis combining fluid flow, heat transfer, and structural mechanics for complex engineering problems.",
      features: ["Fluid-structure interaction", "Thermal-structural coupling", "Multi-domain analysis", "System integration"]
    },
    {
      icon: BarChart3,
      title: "Engineering Consulting",
      description: "Expert consultation on numerical methods, simulation strategy, and engineering problem-solving approaches.",
      features: ["Method selection", "Model validation", "Results interpretation", "Best practices"]
    },
    {
      icon: Zap,
      title: "Custom Solutions",
      description: "Tailored simulation solutions and specialized analysis for unique engineering challenges and research projects.",
      features: ["Custom modeling", "Algorithm development", "Specialized analysis", "Research support"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive numerical simulation services combining advanced computational methods 
            with decades of engineering expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-6 gradient-card border-card-border transition-smooth hover:shadow-glow hover:-translate-y-1 group"
            >
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 rounded-lg p-3 mr-4 group-hover:bg-primary/20 transition-smooth">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">{service.title}</h3>
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full group-hover:border-primary group-hover:text-primary transition-smooth"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-primary rounded-lg p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let our experienced team help you solve your most challenging engineering problems 
            with advanced numerical simulation techniques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
              Get a Quote
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;