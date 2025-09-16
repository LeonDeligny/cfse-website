import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, Lightbulb, Globe } from "lucide-react";
import heroSimulationImg from "@/assets/lac-leman.avif";

const Hero = () => {
  const handleExploreServices = () => {
    const section = document.getElementById("services");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleViewProjects = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroSimulationImg} 
          alt="Engineering simulation visualization" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Computational Fluids & 
            <span className="block gradient-text bg-gradient-to-r from-accent-cyan to-white bg-clip-text text-transparent">
              Structures Engineering
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Expert numerical simulation services for fluid mechanics and structural mechanics engineering problems
          </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="hero"
              size="lg"
              className="animate-slide-up"
              onClick={handleExploreServices}
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="animate-slide-up animation-delay-200 font-bold text-black border-black hover:font-bold"
              onClick={handleViewProjects}
            >
              View Projects
            </Button>
          </div>

           {/* Key features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center animate-slide-up animation-delay-300">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-4">
                <Calculator className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Advanced Simulation</h3>
              <p className="text-white/80 text-sm">Cutting-edge numerical methods for complex engineering challenges</p>
            </div>
            
            <div className="flex flex-col items-center text-center animate-slide-up animation-delay-500">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-4">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Expert Solutions</h3>
              <p className="text-white/80 text-sm">25+ years of experience in engineering consultancy</p>
            </div>
            
            <div className="flex flex-col items-center text-center animate-slide-up animation-delay-700">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">International Collaboration</h3>
              <p className="text-white/80 text-sm">Collaborated with 10+ manufacturers, institutes and aerospace centers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;