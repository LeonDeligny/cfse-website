import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Thermometer, 
  Waves, 
  Building2, 
  Zap, 
  Wind,
  Factory,
  ArrowRight,
  ExternalLink
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Industrial Heat Exchanger Optimization",
      category: "Thermal Analysis",
      description: "Comprehensive CFD analysis and optimization of a shell-and-tube heat exchanger for a chemical processing plant, resulting in 25% improved efficiency.",
      technologies: ["CFD", "Heat Transfer", "Optimization"],
      icon: Thermometer,
      results: [
        "25% efficiency improvement",
        "15% reduction in pressure drop",
        "Optimized baffle design"
      ],
      industry: "Chemical Processing"
    },
    {
      title: "Turbomachinery Flow Analysis",
      category: "Fluid Dynamics",
      description: "Advanced turbulent flow simulation for centrifugal pump impeller design, optimizing performance across multiple operating conditions.",
      technologies: ["Turbulence Modeling", "CFD", "Performance Analysis"],
      icon: Waves,
      results: [
        "18% increase in hydraulic efficiency",
        "Reduced cavitation risk",
        "Extended operating range"
      ],
      industry: "Energy & Power"
    },
    {
      title: "High-Rise Building Wind Load Analysis",
      category: "Structural Mechanics",
      description: "Detailed FEM analysis of wind loads on a 40-story building structure, ensuring compliance with Swiss building codes and optimal design.",
      technologies: ["FEM", "Wind Load Analysis", "Structural Dynamics"],
      icon: Building2,
      results: [
        "Code compliance verification",
        "Optimized structural design",
        "Cost reduction of 12%"
      ],
      industry: "Construction"
    },
    {
      title: "Electric Motor Thermal Management",
      category: "Multiphysics",
      description: "Coupled electromagnetic-thermal-fluid analysis for high-performance electric motor cooling system design and optimization.",
      technologies: ["Multiphysics", "Thermal Management", "Electromagnetic Analysis"],
      icon: Zap,
      results: [
        "30°C temperature reduction",
        "Improved motor efficiency",
        "Enhanced reliability"
      ],
      industry: "Automotive"
    },
    {
      title: "HVAC System Optimization",
      category: "Environmental Engineering",
      description: "Comprehensive airflow analysis and optimization of HVAC systems for a pharmaceutical clean room facility, ensuring precise environmental control.",
      technologies: ["Airflow Analysis", "Contamination Modeling", "CFD"],
      icon: Wind,
      results: [
        "99.97% particle filtration efficiency",
        "20% energy savings",
        "Uniform temperature distribution"
      ],
      industry: "Pharmaceutical"
    },
    {
      title: "Manufacturing Process Optimization",
      category: "Industrial Engineering",
      description: "Multi-phase flow simulation and heat transfer analysis for optimizing injection molding processes in automotive component manufacturing.",
      technologies: ["Multi-phase Flow", "Process Optimization", "Heat Transfer"],
      icon: Factory,
      results: [
        "35% cycle time reduction",
        "Improved part quality",
        "Reduced material waste"
      ],
      industry: "Manufacturing"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Thermal Analysis": "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300",
      "Fluid Dynamics": "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300",
      "Structural Mechanics": "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300",
      "Multiphysics": "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300",
      "Environmental Engineering": "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/20 dark:text-cyan-300",
      "Industrial Engineering": "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how our advanced numerical simulation expertise has helped clients 
            solve complex engineering challenges across diverse industries.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="p-6 gradient-card border-card-border transition-smooth hover:shadow-glow hover:-translate-y-1 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="bg-primary/10 rounded-lg p-3 group-hover:bg-primary/20 transition-smooth">
                  <project.icon className="h-6 w-6 text-primary" />
                </div>
                <Badge className={getCategoryColor(project.category)}>
                  {project.category}
                </Badge>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-smooth">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Results */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-card-foreground mb-2">Key Results:</h4>
                <ul className="space-y-1">
                  {project.results.map((result, resultIndex) => (
                    <li key={resultIndex} className="flex items-center text-xs text-muted-foreground">
                      <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Industry */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-xs text-muted-foreground">
                  Industry: <span className="font-medium">{project.industry}</span>
                </span>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-xs p-2 group-hover:text-primary transition-smooth"
                >
                  <ExternalLink className="h-3 w-3" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="bg-primary rounded-lg p-8 md:p-12 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="animate-fade-in">
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-sm md:text-base text-white/90">Projects Completed</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-3xl md:text-4xl font-bold mb-2">25+</div>
              <div className="text-sm md:text-base text-white/90">Years Experience</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-3xl md:text-4xl font-bold mb-2">15+</div>
              <div className="text-sm md:text-base text-white/90">Industries Served</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
              <div className="text-sm md:text-base text-white/90">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their engineering challenges 
            into successful solutions with our expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg">
              Discuss Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg">
              View Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;