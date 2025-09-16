import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const ServiceDetail = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const slug = pathname.split('/').pop() || '';

    // Simple map for service content - keep in sync with Services.tsx
    const servicesMap: Record<string, { title: string; description: string; features: string[] }> = {
        aerodynamics: {
            title: 'Aerodynamics',
            description: "Aerodynamics corresponds to the fundamental science behind how objects move through the air. Understanding the forces of lift, drag, thrust, and weight allows engineers to design more efficient aircraft, cars, and even sports equipment. This knowledge directly impacts our lives by making air travel safer and more fuel-efficient, improving vehicle performance, and enabling the creation of advanced technologies.",
            features: ['Subsonic to low-supersonic flow analysis', 'Lift and Drag prediction', 'Static and Dynamic Stability', 'Turbulent flow analysis', 'Active flow control']
        },
        aerothermodynamics: {
            title: 'Aerothermodynamics',
            description: 'Design thermal protection systems and analyze hypersonic/aerothermo phenomena for re-entry and high-speed vehicles.',
            features: ['Hypersonic flow simulations', 'Wall-Heat flux calculations', 'Radiation effects', 'Thermal protection design', 'Atmospheric Entry & Ascent']
        },
        fsi: {
            title: 'Fluid Structure Interaction',
            description: "Ensure structural integrity under fluid loads using coupled FSI simulations and modal analysis.",
            features: ['Static stress analysis', 'Dynamic response', 'Modal analysis', 'Fatigue assessment', 'Preventing structural failure']
        },
        tailored: {
            title: 'Tailored Solutions',
            description: 'Customized simulation solutions for specific engineering needs and bespoke workflows.',
            features: ['Biofluid Dynamics', 'Pumps', 'High-speed trains', 'Civil Engineering', 'Smart Morphing & Sensing']
        },
        consulting: {
            title: 'Engineering Consulting',
            description: 'Expert consultation on numerical methods, verification & validation, and simulation strategies.',
            features: ['Method selection', 'Model validation', 'Results interpretation', 'Best practices']
        },
        custom: {
            title: 'Custom Solutions',
            description: 'Tailored simulation solutions and specialized analysis for unique engineering challenges.',
            features: ['Custom modeling', 'Algorithm development', 'Specialized analysis', 'Research support']
        }
    };

    const svc = servicesMap[slug] || { title: 'Service', description: 'Details coming soon.', features: [] };

    return (
        <section className="py-20 bg-background min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <button className="text-primary mb-6 flex items-center" onClick={() => navigate(-1)}>
                    <ArrowLeft className="mr-2" /> Back
                </button>
                <h1 className="text-3xl font-bold text-foreground mb-4">{svc.title}</h1>
                <p className="text-lg text-muted-foreground mb-6">{svc.description}</p>

                <div className="clear-both" />

                {slug === 'aerodynamics' ? (
                    <div className="md:flex md:items-start md:gap-8">
                        <div className="md:w-2/3">
                            <Accordion type="single" collapsible>
                                <AccordionItem value="subsonic">
                                    <AccordionTrigger>Subsonic to low-supersonic flow analysis</AccordionTrigger>
                                    <AccordionContent>
                                        We perform RANS and LES simulations across subsonic to low-supersonic regimes, including high-quality mesh generation, boundary layer resolution, and careful inflow/outflow treatment to ensure accurate results.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="lift-drag">
                                    <AccordionTrigger>Lift and Drag prediction</AccordionTrigger>
                                    <AccordionContent>
                                        CFS Engineering participated in several {' '}
                                            <a
                                                href="https://www.aiaa-dpw.org/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-primary underline"
                                            >
                                                AIAA drag prediction workshops.
                                            </a> {' '}
                                        After the 4th Drag Prediction Workshop drag polars were computed on
                                        the medium multi block structured grids provided by all Workshop
                                        participants, and the results were processed by the far field drag
                                        extraction tool developed by CFS Engineering and RUAG. These results
                                        are published in the following paper:
                                        <p className="mb-4">
                                            <a
                                                href="https://arc.aiaa.org/doi/10.2514/6.2010-4552"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-primary underline"
                                            >
                                                DPW4 Results Using Different Grids Including Near-Field/Far-Field Drag Analysis — AIAA (2010).
                                            </a>
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="stability">
                                    <AccordionTrigger>Static and Dynamic Stability</AccordionTrigger>
                                    <AccordionContent>
                                        Sending a vehicle into space is one thing,
                                        getting it safely back is a total different story.
                                        Dynamic stability in particular is a critical issue,
                                        in particular in the so called low speed regime
                                        (supersonic/transonic/subsonic regime).
                                        One can distinguish two types of stability, static and dynamic.
                                        Any moving vehicle is subject to minor changes in the forces
                                        acting on it. When such a change will lead to further changes
                                        bringing the vehicle back to it’s original position the vehicle is
                                        called statically stable. Dynamic stability is related to a
                                        perturbation of the steady state (flight and motion) of a vehicle
                                        and how the oscillations generated by this perturbation are damped out.
                                        CFS Engineering routinely performs steady CFD simulations to assess
                                        static stability and unsteady CFD simulations to analyze the dynamic
                                        stability of aircraft and re-entry vehicles.                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="turbulence">
                                    <AccordionTrigger>Turbulent flow analysis</AccordionTrigger>
                                    <AccordionContent>
                                        Advanced turbulence modeling and spectral analysis to capture wake dynamics, separation, and transition phenomena relevant to performance and noise.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="active-control">
                                    <AccordionTrigger>Active flow control</AccordionTrigger>
                                    <AccordionContent>
                                        Design and evaluation of actuation strategies (steady or unsteady) to manipulate boundary layers and wakes for drag reduction, lift augmentation, or noise mitigation.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                ) : slug === 'aerothermodynamics' ? (
                    <div className="md:flex md:items-start md:gap-8">
                        <div className="md:w-2/3">
                            <Accordion type="single" collapsible>
                                <AccordionItem value="hypersonic">
                                    <AccordionTrigger>Hypersonic flow simulations</AccordionTrigger>
                                    <AccordionContent>
                                        Numerical methods and high-temperature gas models for hypersonic aerothermodynamics, including coupling with radiation and chemical nonequilibrium when needed.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="wall-heat">
                                    <AccordionTrigger>Wall-Heat flux calculations</AccordionTrigger>
                                    <AccordionContent>
                                        Accurate surface heating computations using refined near-wall meshes and conjugate heat transfer setups to predict peak fluxes and total heat loads.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="radiation">
                                    <AccordionTrigger>Radiation effects</AccordionTrigger>
                                    <AccordionContent>
                                        Radiative heat transfer modeling and its interaction with gas-phase chemistry for re-entry conditions where radiation contributes significantly to heating.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="tps">
                                    <AccordionTrigger>Thermal protection design</AccordionTrigger>
                                    <AccordionContent>
                                        Design guidance and simulation of thermal protection systems (ablative and reusable), including transient heating and material response.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="entry-ascent">
                                    <AccordionTrigger>Atmospheric Entry & Ascent</AccordionTrigger>
                                    <AccordionContent>
                                        Integrated trajectory-coupled aerothermodynamic analyses for entry and ascent phases to support vehicle design and mission planning.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                ) : slug === 'fsi' ? (
                    <div className="md:flex md:items-start md:gap-8">
                        <div className="md:w-2/3">
                            <Accordion type="single" collapsible>
                                <AccordionItem value="static-stress">
                                    <AccordionTrigger>Static stress analysis</AccordionTrigger>
                                    <AccordionContent>
                                        Linear and nonlinear static structural analyses to compute stresses and deformations under steady loading conditions, including contact and large-deformation effects when required.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="dynamic-response">
                                    <AccordionTrigger>Dynamic response</AccordionTrigger>
                                    <AccordionContent>
                                        Time-domain coupled simulations to capture transient structural responses to unsteady aerodynamic loads, gusts, or maneuvers.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="modal-analysis">
                                    <AccordionTrigger>Modal analysis</AccordionTrigger>
                                    <AccordionContent>
                                        Eigenvalue and modal decomposition to obtain natural frequencies and mode shapes; used for flutter and resonance avoidance studies.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="fatigue">
                                    <AccordionTrigger>Fatigue assessment</AccordionTrigger>
                                    <AccordionContent>
                                        High-cycle and low-cycle fatigue estimation workflows based on load spectra derived from operational or mission profiles, enabling life prediction and maintenance planning.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="prevent-failure">
                                    <AccordionTrigger>Preventing structural failure</AccordionTrigger>
                                    <AccordionContent>
                                        Design recommendations and mitigation strategies (reinforcement, damping, control laws) to reduce risk of failure under coupled aero-structural loading.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                ) : slug === 'tailored' ? (
                    <div className="md:flex md:items-start md:gap-8">
                        <div className="md:w-2/3">
                            <Accordion type="single" collapsible>
                                <AccordionItem value="biofluid">
                                    <AccordionTrigger>Biofluid Dynamics</AccordionTrigger>
                                    <AccordionContent>
                                        Modeling of biological flows with multiphysics coupling, useful for bio-inspired actuator design and compliant surfaces.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="pumps">
                                    <AccordionTrigger>Pumps</AccordionTrigger>
                                    <AccordionContent>
                                        Design and CFD-driven optimization of industrial and medical pump geometries focusing on efficiency and cavitation avoidance.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="trains">
                                    <AccordionTrigger>High-speed trains</AccordionTrigger>
                                    <AccordionContent>
                                        Aerodynamic and aeroacoustic simulations tailored to high-speed rail to reduce drag, improve crosswind stability, and lower noise emissions.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="civil">
                                    <AccordionTrigger>Civil Engineering</AccordionTrigger>
                                    <AccordionContent>
                                        Wind engineering analyses, pollutant dispersion studies, and fluid-structure interaction for bridges and tall buildings.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="smart-morphing">
                                    <AccordionTrigger>Smart Morphing & Sensing</AccordionTrigger>
                                    <AccordionContent>
                                        Development and simulation of morphing skins and integrated sensing systems for performance-adaptive structures.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                ) : slug === 'consulting' ? (
                    <div className="md:flex md:items-start md:gap-8">
                        <div className="md:w-2/3">
                            <Accordion type="single" collapsible>
                                <AccordionItem value="method-selection">
                                    <AccordionTrigger>Method selection</AccordionTrigger>
                                    <AccordionContent>
                                        Guidance on choosing appropriate numerical methods, turbulence models, and boundary conditions to match project constraints and accuracy needs.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="validation">
                                    <AccordionTrigger>Model validation</AccordionTrigger>
                                    <AccordionContent>
                                        Support for experimental campaign design, data reduction, and comparison workflows to validate computational predictions.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="results-interpretation">
                                    <AccordionTrigger>Results interpretation</AccordionTrigger>
                                    <AccordionContent>
                                        Expert analysis to translate numerical output into actionable engineering decisions and design recommendations.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="best-practices">
                                    <AccordionTrigger>Best practices</AccordionTrigger>
                                    <AccordionContent>
                                        Recommendations for verification, robust meshing strategies, code validation, and reproducible workflows.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                ) : slug === 'custom' ? (
                    <div className="md:flex md:items-start md:gap-8">
                        <div className="md:w-2/3">
                            <Accordion type="single" collapsible>
                                <AccordionItem value="custom-modeling">
                                    <AccordionTrigger>Custom modeling</AccordionTrigger>
                                    <AccordionContent>
                                        Tailored physics models and solver customizations to capture domain-specific effects not covered by off-the-shelf tools.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="algorithms">
                                    <AccordionTrigger>Algorithm development</AccordionTrigger>
                                    <AccordionContent>
                                        Development of new numerical algorithms, high-performance solvers, and automation scripts to speed up analysis loops.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="specialized-analysis">
                                    <AccordionTrigger>Specialized analysis</AccordionTrigger>
                                    <AccordionContent>
                                        Uncommon or cutting-edge analyses (e.g., multi-fidelity coupling, uncertainty quantification) tailored to research and industrial needs.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="research-support">
                                    <AccordionTrigger>Research support</AccordionTrigger>
                                    <AccordionContent>
                                        Collaboration on grant proposals, method development, and prototype validation to support academic and industrial R&D.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                ) : (
                    <ul className="list-disc list-inside text-base text-muted-foreground">
                        {svc.features.map((f, i) => (
                            <li key={i}>{f}</li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    );
};

export default ServiceDetail;
