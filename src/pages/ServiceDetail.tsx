import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function MDOModel() {
    const gltf = useGLTF('/serviceimages/mdo.glb');
    useEffect(() => {
        gltf.scene.traverse((child) => {
            if ((child as THREE.Mesh).isMesh && (child as THREE.Mesh).material) {
                ((child as THREE.Mesh).material as THREE.Material).side = THREE.DoubleSide;
            }
        });
    }, [gltf]);
    return <primitive object={gltf.scene} scale={1} rotation={[-Math.PI / 2, 0, 0]} />;
}

function OneraM6Model() {
    const gltf = useGLTF('/serviceimages/onera_m6_wing.glb');
    useEffect(() => {
        gltf.scene.traverse((child) => {
            if ((child as THREE.Mesh).isMesh && (child as THREE.Mesh).material) {
                ((child as THREE.Mesh).material as THREE.Material).side = THREE.DoubleSide;
            }
        });
    }, [gltf]);
    // Orientation/scale may be adjusted depending on the source GLB. Tweak rotation/scale if needed.
    return <primitive object={gltf.scene} scale={1} rotation={[-Math.PI / 2, 0, 0]} />;
}

function A320Model() {
    const gltf = useGLTF('/serviceimages/a320.glb');
    useEffect(() => {
        gltf.scene.traverse((child) => {
            if ((child as THREE.Mesh).isMesh && (child as THREE.Mesh).material) {
                ((child as THREE.Mesh).material as THREE.Material).side = THREE.DoubleSide;
            }
        });
    }, [gltf]);
    // adjust scale/rotation if the model orientation or size requires it
    return <primitive object={gltf.scene} scale={1} rotation={[-Math.PI / 2, 0, 0]}/>;
}

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
            description: 'Customized simulation solutions for specific engineering needs.',
            features: ['Biofluid Dynamics', 'Pumps', 'High-speed trains', 'Civil Engineering', 'Smart Morphing & Sensing']
        },
        methods: {
            title: 'Expert Methods',
            description: 'Expert consultation on numerical methods, verification & validation, and simulation strategies.',
            features: ['Particles Tracking', 'Separation – 6DoF', 'Chimera method', 'Sliding meshes']
        },
        custom: {
            title: 'Custom Solutions',
            description: 'Tailored simulation solutions and specialized analysis for unique engineering challenges.',
            features: ['Custom modeling', 'Algorithm development', 'Specialized analysis', 'Research support']
        }
    };

    const svc = servicesMap[slug] || { title: 'Service', description: 'Details coming soon.', features: [] };
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

    const openLightbox = (src: string) => {
        setLightboxSrc(src);
        setLightboxOpen(true);
    };

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
                            <Accordion type="single" collapsible defaultValue="lift-drag">
                                <AccordionItem value="lift-drag">
                                    <AccordionTrigger>Lift and Drag prediction</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="mb-4">
                                            CFS Engineering participated in several {' '}
                                            <a
                                                href="https://www.aiaa-dpw.org/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-primary underline"
                                            >
                                                AIAA drag prediction workshops.
                                            </a>{' '}
                                            After the 4th Drag Prediction Workshop drag polars were computed on
                                            the medium multi block structured grids provided by all Workshop
                                            participants, and the results were processed by the far field drag
                                            extraction tool developed by CFS Engineering and RUAG. These results
                                            are published in the following paper:
                                        </p>
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

                                        <div className="w-full mb-4">
                                            <div className="w-full h-[320px] bg-white rounded-lg overflow-hidden shadow-sm">
                                                <Canvas camera={{ position: [-38, 5, 0], fov: 45 }} style={{ background: '#fff' }}>
                                                    <ambientLight intensity={0.6} />
                                                    <hemisphereLight color={0xffffff} groundColor={0x888888} intensity={0.4} />
                                                    <directionalLight position={[10, 10, 10]} intensity={1} />
                                                    <Suspense fallback={null}>
                                                        <Stage environment="studio" intensity={1} adjustCamera={false}>
                                                            <A320Model />
                                                        </Stage>
                                                    </Suspense>
                                                    <OrbitControls enablePan enableZoom enableRotate />
                                                </Canvas>
                                            </div>
                                            <div className="mt-3 text-sm text-muted-foreground">Interactive A320 model — drag to rotate, scroll to zoom.</div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="subsonic">
                                    <AccordionTrigger>Subsonic to low-supersonic flow analysis</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="mb-4">
                                            We perform RANS and DES simulations across subsonic to low-supersonic regimes,
                                            including high-quality mesh generation, boundary layer resolution, and careful
                                            inflow/outflow treatment to ensure accurate results.
                                            A well-known aerodynamic test case is the ONERA M6 Wing,
                                            a classical validation case in the CFD community, originally tested by
                                            NASA in the 1970s. See our LinkedIn post for a short discussion and visual:
                                            {' '}
                                            <a
                                                href="https://www.linkedin.com/posts/cfs-engineering-sa_cfd-aerospaceengineering-nsmb-activity-7318181371087085568-Tfgz?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEUBhLIBq3fueHNUORS-WQpJXe5_hSxl7-k"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-primary underline"
                                            >
                                                LinkedIn: ONERA M6 demonstration.
                                            </a>
                                        </p>
                                        <div className="w-full mb-4">
                                            <div className="w-full h-[320px] bg-white rounded-lg overflow-hidden shadow-sm">
                                                <Canvas camera={{ position: [0, 2, 3], fov: 20 }} style={{ background: '#fff' }}>
                                                    <ambientLight intensity={0.6} />
                                                    <hemisphereLight color={0xffffff} groundColor={0x888888} intensity={0.4} />
                                                    <directionalLight position={[0, 0, 10]} intensity={-1} />
                                                    <Suspense fallback={null}>
                                                        <Stage environment="studio" intensity={-1} adjustCamera={false}>
                                                            <OneraM6Model />
                                                        </Stage>
                                                    </Suspense>
                                                    <OrbitControls enablePan enableZoom enableRotate />
                                                </Canvas>
                                            </div>
                                            <div className="mt-3 text-sm text-muted-foreground">Interactive ONERA M6 model — drag to rotate, scroll to zoom.</div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="stability">
                                    <AccordionTrigger>Static and Dynamic Stability</AccordionTrigger>
                                    <AccordionContent>
                                        <img src="/serviceimages/dynamic_stability.webp" alt="Pumps" className="w-24 sm:w-64 md:w-64 rounded-lg shadow-sm float-left mr-4 mb-3 cursor-pointer" onClick={() => openLightbox('/serviceimages/dynamic_stability.webp')} />
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
                            <Accordion type="single" collapsible defaultValue="hypersonic">
                                <AccordionItem value="hypersonic">
                                    <AccordionTrigger>Hypersonic flow simulations</AccordionTrigger>
                                    <AccordionContent>
                                        Numerical methods and high-temperature gas models for hypersonic aerothermodynamics, including coupling with radiation and chemical nonequilibrium when needed.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="wall-heat">
                                    <AccordionTrigger>Wall-Heat flux calculations</AccordionTrigger>
                                    <AccordionContent>
                                        <img src="/serviceimages/wall_heatflux.webp" alt="Wall Heat Flux" className="w-24 sm:w-48 md:w-64 rounded-lg shadow-sm float-left mr-4 mb-3 cursor-pointer" onClick={() => openLightbox('/serviceimages/wall_heatflux.webp')} />
                                        Accurate surface heating computations using refined near-wall 
                                        meshes and conjugate heat transfer setups to predict peak 
                                        fluxes and total heat loads. Re-entry vehicles enter the 
                                        atmosphere (Earth or Mars) at very high speed. 
                                        This speed is reduced to the atmosphere, generating heat. 
                                        For this reason re-entry vehicles have a Thermal Protection 
                                        System (TPS) protecting the vehicle. CFS Engineering performs 
                                        routine CFD simulations to determine the heat flux on re-entry 
                                        vehicles. The value of this heat flux strongly depends on the 
                                        properties of TPS, and this is translated in different boundary 
                                        conditions for the temperature and species that can be used 
                                        in the CFD solver (adiabatic wall, temperature imposed, 
                                        radiative equilibrium, fully, partial or non-catalytic wall).
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
                            <Accordion type="single" collapsible defaultValue="static-stress">
                                <AccordionItem value="static-stress">
                                    <AccordionTrigger>Static stress analysis</AccordionTrigger>
                                    <AccordionContent>
                                        Linear and nonlinear static structural analyses to compute
                                        stresses and deformations under steady loading conditions,
                                        including contact and large-deformation effects when required.
                                        In the following interactive MDO model we can see the deformation of
                                        a simple wing structure under aerodynamic load.
                                        <div className="w-full mb-4">
                                            <div className="w-full h-[300px] bg-white rounded-lg overflow-hidden shadow-sm">
                                                <Canvas camera={{ position: [-500, 0, 0], fov: 5 }} style={{ background: '#fff' }}>
                                                    <ambientLight intensity={0.6} />
                                                    <hemisphereLight color={0xffffff} groundColor={0x888888} intensity={0.4} />
                                                    <directionalLight position={[10, 10, 10]} intensity={1} />
                                                    <Suspense fallback={null}>
                                                        <Stage environment="studio" intensity={1} adjustCamera={false}>
                                                            <MDOModel />
                                                        </Stage>
                                                    </Suspense>
                                                    <OrbitControls enablePan enableZoom enableRotate />
                                                </Canvas>
                                            </div>
                                            <div className="mt-3 text-sm text-muted-foreground">Interactive MDO model — click & drag to rotate, scroll to zoom.</div>
                                        </div>
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
                            <Accordion type="single" collapsible defaultValue="biofluid">
                                <AccordionItem value="biofluid">
                                    <AccordionTrigger>Biofluid Dynamics</AccordionTrigger>
                                    <AccordionContent>
                                        <img src="/serviceimages/biofluid_dynamics.webp" alt="Biofluid Dynamics" className="w-24 sm:w-48 md:w-48 rounded-lg shadow-sm float-left mr-4 mb-3 cursor-pointer" onClick={() => openLightbox('/serviceimages/biofluid_dynamics.webp')} />
                                        Modeling of biological flows with multiphysics coupling,
                                        useful for bio-inspired actuator design and compliant surfaces.
                                        3D simulations of blood flow through different parts of human body.
                                        Hemodynamics in heart, with moving leaflets for aortic valve, mitral valve etc.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="pumps">
                                    <AccordionTrigger>Pumps</AccordionTrigger>
                                    <AccordionContent>
                                        <img src="/serviceimages/pumps.webp" alt="Pumps" className="w-24 sm:w-64 md:w-64 rounded-lg shadow-sm float-left mr-4 mb-3 cursor-pointer" onClick={() => openLightbox('/serviceimages/pumps.webp')} />
                                        Design and CFD-driven optimization of industrial and medical pump geometries focusing on efficiency and cavitation avoidance.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="trains">
                                    <AccordionTrigger>High-speed trains</AccordionTrigger>
                                    <AccordionContent>
                                        <img src="/serviceimages/transportation.webp" alt="High-speed trains" className="w-24 sm:w-48 md:w-64 rounded-lg shadow-sm float-left mr-4 mb-3 cursor-pointer" onClick={() => openLightbox('/serviceimages/transportation.webp')} />
                                        Aerodynamic and aeroacoustic simulations tailored to high-speed rail to reduce drag,
                                        improve crosswind stability, and lower noise emissions.
                                        The aerodynamics of high speed trains and the proper ventilation of air therein
                                        is of particular interest to ensure passenger safety.
                                        {' '} <a
                                            href="https://www.stadlerrail.com/en"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary underline"
                                        >
                                            Stadler Rail
                                        </a> {' '} took contact
                                        with CFS Engineering to better understand airflow around and in trains, particularly
                                        with respect to its new double-decker version.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="civil">
                                    <AccordionTrigger>Civil Engineering</AccordionTrigger>
                                    <AccordionContent>
                                        <img src="/serviceimages/civil_engineering.webp" alt="High-speed trains" className="w-24 sm:w-48 md:w-64 rounded-lg shadow-sm float-left mr-4 mb-3 cursor-pointer" onClick={() => openLightbox('/serviceimages/civil_engineering.webp')} />
                                        Wind engineering analyses, pollutant dispersion studies.
                                        Simulation of smoke propagation from overheating of our
                                        computer cluster !
                                        Here is an example using
                                        {' '} <a
                                            href="https://pages.nist.gov/fds-smv/index.html"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary underline"
                                        >
                                            Fire Dynamics Simulator (FDS)
                                        </a> {' '}
                                        and Smokeview (SMV). FDS is a large-eddy simulation (LES) code
                                        for low-speed flows, with an emphasis on smoke and heat
                                        transport from fires.
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
                ) : slug === 'methods' ? (
                    <div className="md:flex md:items-start md:gap-8">
                        <div className="md:w-2/3">
                            <Accordion type="single" collapsible defaultValue="Separation – 6DoF">
                                <AccordionItem value="Particles Tracking">
                                    <AccordionTrigger>Particles Tracking</AccordionTrigger>
                                    <AccordionContent>
                                        <img src="/serviceimages/particle_tracking.webp" alt="Particle Tracking" className="w-24 sm:w-48 md:w-64 rounded-lg shadow-sm float-left mr-4 mb-3 cursor-pointer" onClick={() => openLightbox('/serviceimages/particle_tracking.webp')} />
                                        The earliest rockets employed solid propellants, 
                                        and today solid propellant rockets are among the most 
                                        powerful on the world. To increase the specific impulse 
                                        Aluminum particles are added in the solid fuel grain. 
                                        There particles radiate, and the NSMB CFD solver includes a 
                                        particle tracking module that permits to track the particles 
                                        leaving the rocket nozzle.                                    
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="Separation – 6DoF">
                                    <AccordionTrigger>Separation – 6DoF</AccordionTrigger>
                                    <AccordionContent>
                                        <img src="/serviceimages/separation.webp" alt="Separation – 6DoF" className="w-24 sm:w-48 md:w-64 rounded-lg shadow-sm float-left mr-4 mb-3 cursor-pointer" onClick={() => openLightbox('/serviceimages/separation.webp')} />
                                        Support Moving body simulations are a challenging task 
                                        including moving grids, rigid body movement and complex flow 
                                        features that need to be resolved. The NSMB CFD solver includes 
                                        a 6-DoF (Degrees of Freedom) module that recomputes the 
                                        position of the moving body at each time step. The chimera 
                                        method is employed in which each body has its own grid, that 
                                        are sliding across each other. In the example on the right the 
                                        apex cover has its own grid around it, and is moving upwards. 
                                        The capsule also has its own grids, and moves slowly downwards. 
                                        A back ground grid is used on which both the apex cover and 
                                        capsules are moving.for experimental campaign design, data 
                                        reduction, and comparison workflows to validate computational 
                                        predictions.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="Chimera Method">
                                    <AccordionTrigger>Chimera Method</AccordionTrigger>
                                    <AccordionContent>
                                        <img src="/serviceimages/chimera_method.webp" alt="Chimera Method – 6DoF" className="w-24 sm:w-48 md:w-64 rounded-lg shadow-sm float-left mr-4 mb-3 cursor-pointer" onClick={() => openLightbox('/serviceimages/chimera_method.webp')} />
                                        Chimera method also called overset grid method is developed to 
                                        facilitate the mesh generation for complex shapes, using 
                                        different grids for different parts of a geometry. The grids 
                                        are used together, with overlapping of several cells and 
                                        interpolation between these cells in order to have the 
                                        continuity of the flow through each grids. This technic is also 
                                        frequently used in the case of moving bodies, where the grid 
                                        around the moving body overlaps a fixed background grid.                                    
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="Sliding Meshes">
                                    <AccordionTrigger>Sliding Meshes</AccordionTrigger>
                                    <AccordionContent>
                                        <img src="/serviceimages/sliding_meshes.webp" alt="Sliding Meshes – 6DoF" className="w-24 sm:w-48 md:w-64 rounded-lg shadow-sm float-left mr-4 mb-3 cursor-pointer" onClick={() => openLightbox('/serviceimages/sliding_meshes.webp')} />
                                        The NSMB CFD solver includes a sliding mesh approach that 
                                        permits to simulate moving configurations, as for example a 
                                        rotating propellor or a train entering a tunnel.                                    
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                ) : slug === 'custom' ? (
                    <div className="md:flex md:items-start md:gap-8">
                        <div className="md:w-2/3">
                            <Accordion type="single" collapsible defaultValue="custom-modeling">
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
            {/* Lightbox dialog for images */}
            <Dialog open={lightboxOpen} onOpenChange={(o) => setLightboxOpen(o)}>
                <DialogContent className="sm:max-w-xl w-full h-auto p-0 bg-transparent shadow-none">
                    {lightboxSrc && (
                        <img src={lightboxSrc} alt="Preview" className="w-full h-auto rounded-md" />
                    )}
                </DialogContent>
            </Dialog>
        </section>
    );
};

export default ServiceDetail;
