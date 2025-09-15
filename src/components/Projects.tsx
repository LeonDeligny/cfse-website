import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Rocket,
  Leaf,
  Network,
  Plane,
  Factory,
  Satellite,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useState } from "react";

const Projects = () => {
  const navigate = useNavigate();
  const projects = [
    {
      title: "Morphing Wings for Sustainable Aviation",
      category: "Aerodynamics",
      description: "Development of a morphing wing concept to enhance lift-to-drag performance and reduce noise during takeoff, cruise and landing.",
      technologies: ["Turbulence flow modelling", "Spectral Analysis", "Deforming mesh"],
      icon: Leaf,
      status: "Ongoing",
      industry: "Civil Aviation"
    },
    {
      title: "Mars Entry and Descent System",
      category: "Aerothermodynamics",
      description: "Simulation on several points along the trajectory on the descent to Mars. Reconstructing wind tunnel tests. Perform dynamic stability analysis of the transonic inflatable breaking unit.",
      technologies: ["CFD", "Heat Transfer", "Static and Dynamic Stability"],
      icon: Satellite,
      status: "Ongoing",
      industry: "Aerospatial Engineering"
    },
    {
      title: "Re-usable Launch Vehicles",
      category: "Aerodynamics",
      description: "Transonic and supersonic aerodynamic analysis for Re-usable Launch Vehicles, with a focus on aerodynamics forces and grid-fins shape optimization.",
      technologies: ["Shape Optimization", "CFD", "Static Stability", "Chimera mesh"],
      icon: Rocket,
      status: "Ongoing",
      industry: "Aerospatial Engineering"
    },
    {
      title: "Collaborative Systems of Systems",
      category: "Aerodynamics",
      description: "COLOSSUS is developing a novel system-of-systems design methodology to optimize aircraft, their operations, and business models simultaneously. The project will apply this method to intermodal transport and wildfire-fighting, and then openly publish its solutions, methods, and tools to benefit research and industry.",
      technologies: ["Wildfire aircrafts Stability", "Shape Optimization"],
      icon: Network,
      status: "Ongoing",
      industry: "Civil Aviation"
    },
    {
      title: "F/A 18",
      category: "Fluid Structure Interaction",
      description: "The maneuver spectrum of the Swiss usage of this aircraft is about 3 times more severe than the US Navy design. As a consequence, it is crucial to perform advanced fluid structure simulation to ensure structural integrity.",
      technologies: ["Static Wing Deformation", "Vertical tail buffeting", "Aeroelastic Instability"],
      icon: Plane,
      status: "Ongoing",
      industry: "Military & Defense Aviation"
    },
    {
      title: "Software Development",
      category: "In house software development",
      description: "Development and maintenance of advanced engineering software tools for simulation, visualization and design (CFD solvers, mesh generators...). Our work supports both internal research and external client projects, ensuring robust, scalable, and user-friendly solutions for the aerospace and industrial sectors.",
      technologies: ["NSMB Solver", "Baspl3", "CEASIOMpy"],
      icon: Factory,
      status: "Ongoing",
      industry: "In house software development"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Aerodynamics": "bg-blue-300 text-black-800 dark:bg-blue-900/40 dark:text-blue-200",
      "Aerothermodynamics": "bg-blue-100 text-black-800 dark:bg-blue-900/20 dark:text-blue-300",
      "Fluid Structure Interaction": "bg-cyan-100 text-black-800 dark:bg-green-900/20 dark:text-green-300",
      "Multiphysics": "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300",
      "Industrial Engineering": "bg-orange-100 text-black-800 dark:bg-orange-900/20 dark:text-orange-300"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  const [openMarsModal, setOpenMarsModal] = useState(false);

  const marsDescription = `Since May 2025, CFS Engineering has been participating in an ESA-funded project focused on the development of a Mars Entry and Descent System. CFD simulations will be performed at points throughout the trajectories. This will provide a complete aerodynamic database, showing variation with Mach and angle of attack. CFS Engineering will reconstruct wind tunnel tests and will rebuild the T-IBU dynamic stability test at high subsonic/transonic conditions.`;

  return (
    <section id="projects" className="py-1 bg-background">
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
                <Badge className={getCategoryColor(project.category) + " pointer-events-none select-none"}>
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

              {/* Status Bar */}
              <div className="mb-4">
                <div className="flex items-center gap-2">
                  <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${project.status === 'Ongoing' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300' : 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300'}`}>
                    {project.status}
                  </span>
                  <span className="text-xs text-muted-foreground">{project.status === 'Ongoing' ? 'Project in progress' : 'Project completed'}</span>
                </div>
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
                  onClick={() => {
                    switch (project.title) {
                      case "Mars Entry and Descent System":
                        navigate("/projects/mars-entry-descent");
                        break;
                      case "Re-usable Launch Vehicles":
                        navigate("/projects/reusable-launch-vehicles");
                        break;
                      case "Morphing Wings for Sustainable Aviation":
                        navigate("/projects/morphing-wing");
                        break;
                      case "Collaborative Systems of Systems":
                        navigate("/projects/collaborative-systems");
                        break;
                      case "F/A 18":
                        navigate("/projects/fa18");
                        break;
                      case "Software Development":
                        navigate("/projects/software-development");
                        break;
                      default:
                        break;
                    }
                  }}
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
              <div className="text-3xl md:text-4xl font-bold mb-2">20+</div>
              <div className="text-sm md:text-base text-white/90">Projects Completed</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-3xl md:text-4xl font-bold mb-2">25+</div>
              <div className="text-sm md:text-base text-white/90">Years Experience</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-3xl md:text-4xl font-bold mb-2">5+</div>
              <div className="text-sm md:text-base text-white/90">Industries Served</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-3xl md:text-4xl font-bold mb-2">12+</div>
              <div className="text-sm md:text-base text-white/90">Collaborators</div>
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
            <Button
              variant="default"
              size="lg"
              onClick={() => {
                window.location.href =
                  'mailto:contact@cfse.ch';
              }}
            >
              Discuss Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
        {/* Mars Entry Modal */}
        {openMarsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                onClick={() => setOpenMarsModal(false)}
                aria-label="Close"
              >
                ×
              </button>
              <h3 className="text-xl font-bold mb-4 text-primary">Mars Entry and Descent System</h3>
              <p className="text-gray-800 whitespace-pre-line">{marsDescription}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;