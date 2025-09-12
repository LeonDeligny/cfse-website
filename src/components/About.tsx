import { Card } from "@/components/ui/card";
import { Building, Users, Award, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About CFS Engineering
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A leading consultancy company specializing in numerical simulation of engineering problems, 
            founded in 1999 and based in Lausanne, Switzerland.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Mission Statement */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Our Mission</h3>
            <blockquote className="text-lg text-muted-foreground italic border-l-4 border-primary pl-6 mb-6">
              "To offer services in the Numerical Simulation of Fluid Mechanics and Structural Mechanics Engineering Problems"
            </blockquote>
            <p className="text-muted-foreground mb-4">
              CFS Engineering has been at the forefront of computational engineering for over two decades. 
              We provide expert numerical simulation services that help our clients solve complex engineering 
              challenges across various industries.
            </p>
            <p className="text-muted-foreground">
              Our strategic location at the EPFL Innovation Park connects us to cutting-edge research and 
              innovation, ensuring we deliver state-of-the-art solutions to our clients worldwide.
            </p>
          </div>

          {/* Key Stats/Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="p-6 gradient-card border-card-border transition-smooth hover:shadow-glow">
              <div className="flex items-center mb-4">
                <Building className="h-8 w-8 text-primary mr-3" />
                <h4 className="text-lg font-semibold text-card-foreground">Founded</h4>
              </div>
              <p className="text-2xl font-bold text-primary">1999</p>
              <p className="text-muted-foreground text-sm">25+ years of expertise</p>
            </Card>

            <Card className="p-6 gradient-card border-card-border transition-smooth hover:shadow-glow">
              <div className="flex items-center mb-4">
                <MapPin className="h-8 w-8 text-primary mr-3" />
                <h4 className="text-lg font-semibold text-card-foreground">Location</h4>
              </div>
              <p className="text-lg font-bold text-primary">EPFL Innovation Park</p>
              <p className="text-muted-foreground text-sm">Lausanne, Switzerland</p>
            </Card>

            <Card className="p-6 gradient-card border-card-border transition-smooth hover:shadow-glow">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-primary mr-3" />
                <h4 className="text-lg font-semibold text-card-foreground">Expertise</h4>
              </div>
              <p className="text-lg font-bold text-primary">Numerical</p>
              <p className="text-muted-foreground text-sm">Simulation Specialists</p>
            </Card>

            <Card className="p-6 gradient-card border-card-border transition-smooth hover:shadow-glow">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-primary mr-3" />
                <h4 className="text-lg font-semibold text-card-foreground">Collaboration</h4>
              </div>
              <p className="text-lg font-bold text-primary">EPFL</p>
              <p className="text-muted-foreground text-sm">Research Connection</p>
            </Card>
          </div>
        </div>

        {/* Expertise Areas */}
        <div className="bg-card rounded-lg p-8 shadow-md">
          <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">Core Competencies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <h4 className="text-xl font-semibold text-primary mb-3">Fluid Mechanics</h4>
              <p className="text-muted-foreground">
                Advanced computational fluid dynamics (CFD) simulations for complex flow problems, 
                heat transfer analysis, and multi-phase flow systems.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold text-primary mb-3">Structural Mechanics</h4>
              <p className="text-muted-foreground">
                Comprehensive structural analysis, finite element methods (FEM), stress analysis, 
                and dynamic response simulations for engineering structures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;