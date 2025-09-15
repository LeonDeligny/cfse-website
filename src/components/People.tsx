import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { ChevronDown, ChevronUp, ExternalLink, Linkedin, Users, Award } from "lucide-react";

const People = () => {
  const [showFormer, setShowFormer] = useState(false);
  const currentTeam = [
    {
      name: "Jan Vos",
      photo: "/team/jan-vos.jpg",
      linkedin: "https://www.linkedin.com/in/jan-vos-841180/",
      description: "Jan has over 40 years of experience in fluid mechanics simulations, specializing in Magneto Hydrodynamics (MHD), combustion, and hypersonic flows. He also lectured at the Laboratory of Computational Engineering at EPFL.",
      role: "Senior CFD Engineer",
      experience: "40+ years"
    },
    {
      name: "Alain Gehri",
      photo: "/team/alain-gehri.jpg",
      description: "Alain has more than 30 years experience in structured multi-block grid generation, and flow simulation for space/aeronautical applications. He is responsible for grid generation, development of CFD codes and post-processing tools.",
      role: "Grid Generation Specialist",
      experience: "30+ years"
    },
    {
      name: "Giacomo Benedetti",
      photo: "/team/giacomo-benedetti.jpg",
      linkedin: "https://www.linkedin.com/in/giacomo-benedetti-3019551b9/",
      description: "Giacomo is responsible for the development of the aircraft design framework CEASIOMpy and making CFD calculations using multiple solvers, as SU2 and NSMB. He is currently involved in the Horizon Europe project Colossus.",
      role: "Aircraft Design Framework Developer",
      experience: "Research & Development"
    },
    {
      name: "Romain Gauthier",
      photo: "/team/romain-gauthier.jpg",
      linkedin: "https://www.linkedin.com/in/romain-gauthier-436b44292/",
      description: "Romain leads the R&D for the live skin concept within the Horizon Europe BEALIVE project. His work focuses on simulating unsteady flows on a Airbus A320's airfoil using flapping actuators to enhance aerodynamic performance through active flow control.",
      role: "Active Flow Control Researcher",
      experience: "EU Project Lead"
    },
    {
      name: "Leon Deligny",
      photo: "/team/leon-deligny.jpg",
      linkedin: "https://www.linkedin.com/in/leon-deligny/",
      description: "Leon is reponsible for the development of Baspl3 (post-processing visualization tool), the fluid structure code for Smart Memory Alloys (SMAs), CFSE's website and the FSCON spatial coupling tool.",
      role: "Scientific Collaborator",
      experience: "Machine Learning Scientist"
    }
  ];

  const formerTeam = [
    {
      name: "Dominique Charbonnier",
      photo: "/formerteam/dominique-charbonnier.jpg",
      linkedin: "https://linkedin.com/in/dominique-charbonnier",
      description: "18 years experience in CFD, first in the field of turbo-machinery applied to studies of rotor-stator interactions, film-cooling and heat transfer prediction. Since he joined CFSE in 2009, he works on a wide range of aeronautical and aerospace related projects, from mesh generation, simulations, post-processing to reporting. He is also responsible for the design of websites, the setup of collaborative platforms, and communication documents for European projects in which CFSE participates.",
      role: "Senior CFD Engineer & Communication",
      experience: "18 years"
    },
    {
      name: "Aidan Jungo",
      photo: "/formerteam/aidan-jungo.jpg",
      linkedin: "https://linkedin.com/in/aidan-jungo",
      description: "8 years experience in CFD and aircraft design at CFSE after getting his master degree at EPFL in mechanical engineering. He was responsible for the development of the Python framework CEASIOMpy and CFD calculations with SU2.",
      role: "CFD Engineer & Python Developer",
      experience: "8 years"
    },
    {
      name: "Malo Drougard",
      photo: "/formerteam/malo-drougard.jpg",
      linkedin: "https://linkedin.com/in/malo-drougard",
      description: "Young and dynamic computer scientist, specialized in computer graphics and UX design.",
      role: "Computer Scientist & UX Designer",
      experience: "Graphics & UX Specialist"
    }
  ];

  const TeamMemberCard = ({ member, isFormer = false }: { member: any, isFormer?: boolean }) => (
    <Card className="p-6 gradient-card border-card-border transition-smooth hover:shadow-glow hover:-translate-y-1 group">
      <div className="flex flex-col items-center text-center mb-4">
        <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4 overflow-hidden">
          {member.photo ? (
            <img
              src={member.photo}
              alt={member.name}
              className="object-cover w-full h-full"
            />
          ) : (
            <Users className="w-12 h-12 text-muted-foreground" />
          )}
        </div>
        <h3 className="text-xl font-semibold text-card-foreground mb-1">
          {member.name}
        </h3>
        <p className="text-primary font-medium text-sm mb-2">
          {member.role}
        </p>
        <Badge variant="secondary" className="mb-3">
          {member.experience}
        </Badge>
        {isFormer && (
          <Badge variant="outline" className="mb-3 text-xs">
            Former Employee
          </Badge>
        )}
      </div>

      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {member.description}
      </p>

      {member.linkedin && (
        <div className="flex justify-center">
          <Button
            variant="outline"
            size="sm"
            className="w-full group-hover:border-primary group-hover:text-primary transition-smooth"
            asChild
          >
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn Profile
              <ExternalLink className="w-3 h-3 ml-2" />
            </a>
          </Button>
        </div>
      )}
    </Card>
  );

  return (
    <section id="people" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            The Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the expert team behind CFS Engineering, bringing decades of combined experience
            in computational fluid dynamics and structural mechanics.
          </p>
        </div>

        {/* Current Team */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <Users className="w-6 h-6 text-primary mr-3" />
            <h3 className="text-2xl font-semibold text-foreground">Current Team</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {currentTeam.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>

        {/* Former Team Members Toggle */}
        <div className="mb-2 flex flex-col items-center"> {/* reduced mb-8 to mb-2 for less space below toggle */}
          <button
            className="flex items-center gap-2 text-primary font-medium hover:underline focus:outline-none mb-0" // mb-1 to mb-0 for less space under button
            onClick={() => setShowFormer((prev) => !prev)}
            aria-expanded={showFormer}
            aria-controls="former-team-section"
          >
            {showFormer ? (
              <>
                <ChevronUp className="w-5 h-5" />
                Hide Former Team Members
              </>
            ) : (
              <>
                <ChevronDown className="w-5 h-5" />
                See Former Team Members
              </>
            )}
          </button>
          {showFormer && (
            <div
              id="former-team-section"
              className="w-full mt-1"
            >
              <div className="flex items-center justify-center mb-1"> {/* mb-8 to mb-4 */}
                <Award className="w-6 h-6 text-accent-steel mr-3" />
                <h3 className="text-2xl font-semibold text-foreground">Former Team Members</h3>
              </div>
              <p className="text-center text-muted-foreground mb-4 max-w-2xl mx-auto"> {/* mb-8 to mb-4 */}
                We are grateful to our former colleagues who contributed significantly to our success
                and continue to excel in their respective careers.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {formerTeam.map((member, index) => (
                  <TeamMemberCard key={index} member={member} isFormer={true} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default People;