import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Cog,
  BarChart3,
  Zap,
  ArrowRight,
  Plane,
  Rocket,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Plane,
      title: "Aerodynamics",
      description: "Improve the performance of your complex engineering systems through:",
      features: ["Subsonic to low-supersonic flow analysis", "Lift and Drag prediction", "Static and Dynamic Stability", "Turbulent flow analysis", "Active flow control"]
    },
    {
      icon: Rocket,
      title: "Aerothermodynamics",
      description: "Design thermal protection systems for re-entry vehicles:",
      features: ["Hypersonic flow simulations", "Wall-Heat flux calculations", "Radiation effects", "Thermal protection design"]
    },
    {
      icon: Building2,
      title: "Fluid Structure Interaction",
      description: "Ensure the integrity of your systems' structure under fluid loads:",
      features: ["Static stress analysis", "Dynamic response", "Modal analysis", "Fatigue assessment"]
    },
    {
      icon: Cog,
      title: "Tailored Solutions",
      description: "Customized simulation solutions for specific engineering needs.",
      features: ["Biofluid Dynamics", "Pumps", "High-speed trains", "Civil Engineering",]
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
    <section id="services" className="py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive numerical simulation services combining advanced computational methods
            with decades of engineering expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
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

      </div>
    </section>
  );
};

export default Services;