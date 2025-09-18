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
    return <primitive object={gltf.scene} scale={1} rotation={[-Math.PI / 2, 0, 0]} />;
}

// BiofluidPublications component (module scope)
function BiofluidPublications() {
    const [bibOpen, setBibOpen] = useState(false);
    const [selectedBib, setSelectedBib] = useState<string | null>(null);
    const [copied, setCopied] = useState(false);

    type Publication = {
        id: string;
        authors: string;
        title: string;
        journal: string;
        year: string;
        details?: string;
        links?: string;
        bibtex: string;
    };

    const publications: Publication[] = [
        {
            id: 'berdajs-2017-ann-thorac-surg',
            authors: 'Berdajs, D.; Mosbahi, S.; Ferrari, E.; Charbonnier, D.; von Segesser, L. K.',
            title: 'Aortic Valve Pathology as a Predictive Factor for Acute Aortic Dissection',
            journal: 'The Annals of Thoracic Surgery',
            year: '2017',
            details: 'vol. 104, no. 4, pp. 1340-1348, 2017.',
            links: 'https://www.annalsthoracicsurgery.org/article/S0003-4975(17)30400-9/abstract',
            bibtex: `@article{berdajs2017_aorticvalve,
  author = {Berdajs, D. and Mosbahi, S. and Ferrari, E. and Charbonnier, D. and von Segesser, L. K.},
  title = {Aortic Valve Pathology as a Predictive Factor for Acute Aortic Dissection},
  journal = {The Annals of Thoracic Surgery},
  volume = {104},
  number = {4},
  pages = {1340--1348},
  year = {2017}
}`
        },
        {
            id: 'berdajs-2017-ejcts-impact-synthetic',
            authors: 'Berdajs, D.; Mosbahi, S.; Strano, F.; Forro, Z.; Burki, M.; von Segesser, L. K.',
            title: 'Impact of synthetic elements on aortic root haemodynamics: computed fluid dynamics of aortic root reconstruction and valve reimplantation',
            journal: 'European Journal of Cardio-thoracic Surgery',
            year: '2017',
            details: 'vol. 51, no. 3, pp. 432-441, 2017.',
            links: 'https://academic.oup.com/ejcts/article/51/3/432/2738865',
            bibtex: `@article{berdajs2017_synthetic,
  author = {Berdajs, D. and Mosbahi, S. and Strano, F. and Forro, Z. and Burki, M. and von Segesser, L. K.},
  title = {Impact of synthetic elements on aortic root haemodynamics: computed fluid dynamics of aortic root reconstruction and valve reimplantation},
  journal = {European Journal of Cardio-thoracic Surgery},
  volume = {51},
  number = {3},
  pages = {432--441},
  year = {2017}
}`
        },
        {
            id: 'berdajs-2016-ejcts-david',
            authors: 'Berdajs, D.; Mosbahi, S.; Forro, Z.; Gerber, C.; Burki, M.; von Segesser, L. K.',
            title: 'Aortic root haemodynamics following David procedure: numerical analysis of 3-dimensional haemodynamics',
            journal: 'European Journal of Cardio-thoracic Surgery',
            year: '2016',
            details: 'vol. 49, no. 6, pp. 1588-1598, 2016.',
            links: 'https://academic.oup.com/ejcts/article/49/6/1588/2197382',
            bibtex: `@article{berdajs2016_david,
  author = {Berdajs, D. and Mosbahi, S. and Forro, Z. and Gerber, C. and Burki, M. and von Segesser, L. K.},
  title = {Aortic root haemodynamics following David procedure: numerical analysis of 3-dimensional haemodynamics},
  journal = {European Journal of Cardio-thoracic Surgery},
  volume = {49},
  number = {6},
  pages = {1588--1598},
  year = {2016}
}`
        },
        {
            id: 'berdajs-2016-ejcts-3droot',
            authors: 'Berdajs, D.; Mosbahi, S.; Forro, Z.; Gerber, C.; Ferrari, E.; Charbonnier, D.; von Segesser, L. K.',
            title: 'Numerical analysis of the 3-dimensional aortic root morphology during the cardiac cycle',
            journal: 'European Journal of Cardio-thoracic Surgery',
            year: '2016',
            details: 'vol. 49, no. 4, pp. 1213-1221, 2016.',
            links: 'https://academic.oup.com/ejcts/article/49/4/1213/2465325',
            bibtex: `@article{berdajs2016_3droot,
  author = {Berdajs, D. and Mosbahi, S. and Forro, Z. and Gerber, C. and Ferrari, E. and Charbonnier, D. and von Segesser, L. K.},
  title = {Numerical analysis of the 3-dimensional aortic root morphology during the cardiac cycle},
  journal = {European Journal of Cardio-thoracic Surgery},
  volume = {49},
  number = {4},
  pages = {1213--1221},
  year = {2016}
}`
        },
        {
            id: 'berdajs-2015-ictts-rvot-oversizing',
            authors: 'Berdajs, D.; Mosbahi, S.; Vos, J. B.; Charbonnier, D.; Hullin, R.; von Segesser, L. K.',
            title: 'Fluid dynamics simulation of right ventricular outflow tract oversizing',
            journal: 'Interactive Cardiovascular and Thoracic Surgery',
            year: '2015',
            details: 'vol. 21, no. 2, pp. 176-182, 2015.',
            links: 'https://academic.oup.com/icvts/article/21/2/176/766587',
            bibtex: `@article{berdajs2015_rvot,
  author = {Berdajs, D. and Mosbahi, S. and Vos, J. B. and Charbonnier, D. and Hullin, R. and von Segesser, L. K.},
  title = {Fluid dynamics simulation of right ventricular outflow tract oversizing},
  journal = {Interactive Cardiovascular and Thoracic Surgery},
  volume = {21},
  number = {2},
  pages = {176--182},
  year = {2015}
}`
        },
        {
            id: 'berdajs-2015-j-surg-res-flow-dynamics',
            authors: 'Berdajs, D.; Mosbahi, S.; Charbonnier, D.; Hullin, R.; von Segesser, L. K.',
            title: 'Analysis of flow dynamics in right ventricular outflow tract',
            journal: 'Journal of Surgical Research',
            year: '2015',
            details: 'vol. 197, no. 1, pp. 50-57, 2015.',
            links: 'https://www.journalofsurgicalresearch.com/article/S0022-4804(15)00220-6/abstract',
            bibtex: `@article{berdajs2015_flowdynamics,
  author = {Berdajs, D. and Mosbahi, S. and Charbonnier, D. and Hullin, R. and von Segesser, L. K.},
  title = {Analysis of flow dynamics in right ventricular outflow tract},
  journal = {Journal of Surgical Research},
  volume = {197},
  number = {1},
  pages = {50--57},
  year = {2015}
}`
        },
        {
            id: 'mosbahi-2014-ictts-benchmodel',
            authors: 'Mosbahi, S.; Mickaily-Huber, E.; Charbonnier, D.; Hullin, R.; Burki, M.; Ferrari, E.; von Segesser, L. K.; Berdajs, D.',
            title: 'Computational fluid dynamics of the right ventricular outflow tract and of the pulmonary artery: a bench model of flow dynamics',
            journal: 'Interactive Cardiovascular and Thoracic Surgery',
            year: '2014',
            details: 'vol. 19, no. 4, pp. 611-616, 2014.',
            links: 'https://academic.oup.com/icvts/article/19/4/611/765319',
            bibtex: `@article{mosbahi2014_benchmodel,
  author = {Mosbahi, S. and Mickaily-Huber, E. and Charbonnier, D. and Hullin, R. and Burki, M. and Ferrari, E. and von Segesser, L. K. and Berdajs, D.},
  title = {Computational fluid dynamics of the right ventricular outflow tract and of the pulmonary artery: a bench model of flow dynamics},
  journal = {Interactive Cardiovascular and Thoracic Surgery},
  volume = {19},
  number = {4},
  pages = {611--616},
  year = {2014}
}`
        }
    ];

    const openBib = (bib: string) => {
        setSelectedBib(bib);
        setBibOpen(true);
    };

    const copyBib = async () => {
        if (!selectedBib) return;
        try {
            await navigator.clipboard.writeText(selectedBib);
            setCopied(true);
            setTimeout(() => setCopied(false), 1600);
        } catch (e) {
            const ta = document.createElement('textarea');
            ta.value = selectedBib;
            document.body.appendChild(ta);
            ta.select();
            try {
                document.execCommand('copy');
                setCopied(true);
                setTimeout(() => setCopied(false), 1600);
            } catch (_) {
                alert('Copy failed — please copy manually.');
            }
            document.body.removeChild(ta);
        }
    };

    return (
        <div className="mt-3 space-y-3">
            {publications.map((p) => (
                <div key={p.id} className="border rounded p-3 bg-white">
                    <p className="text-sm font-medium">{p.authors}</p>
                    <p className="">{p.title}</p>
                    <p className="">{p.journal} {p.details}</p>
                    <div className="mt-2 flex items-center gap-3 text-sm">
                        {p.links && (
                            <a href={p.links} target="_blank" rel="noopener noreferrer" className="text-primary underline">Links</a>
                        )}
                        <button onClick={() => openBib(p.bibtex)} className="text-primary underline">BibTeX</button>
                    </div>
                </div>
            ))}

            <Dialog open={bibOpen} onOpenChange={(o) => { if (!o) setSelectedBib(null); setBibOpen(o); }}>
                <DialogContent className="sm:max-w-lg w-full p-4">
                    <h3 className="text-lg font-semibold mb-2">BibTeX</h3>
                    <pre className="text-sm bg-gray-100 rounded p-3 overflow-auto break-words">{selectedBib}</pre>
                    <div className="mt-3 flex gap-3">
                        <button onClick={copyBib} className="px-3 py-2 bg-primary text-white rounded">{copied ? 'Copied' : 'Copy BibTeX'}</button>
                        <button onClick={() => setBibOpen(false)} className="px-3 py-2 border rounded">Close</button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
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
        // methods: {
        //     title: 'Expert Methods',
        //     description: 'Expert consultation on numerical methods, verification & validation, and simulation strategies.',
        //     features: ['Particles Tracking', 'Separation – 6DoF', 'Chimera method', 'Sliding meshes']
        // },
        // custom: {
        //     title: 'Custom Solutions',
        //     description: 'Tailored simulation solutions and specialized analysis for unique engineering challenges.',
        //     features: ['Custom modeling', 'Algorithm development', 'Specialized analysis', 'Reconstruct wind tunnel tests']
        // }useState
    };

    const svc = servicesMap[slug] || { title: 'Service', description: 'Details coming soon.', features: [] };
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
    const [stabilityBibOpen, setStabilityBibOpen] = useState(false);
    const stabilityBibtex = `@inproceedings{charbonnier2019_dynamicderivatives,
    author = {Charbonnier, D. and Vos, J. B.},
    title = {Determination of Dynamic Derivatives of Re-entry Vehicles using Unsteady CFD},
    booktitle = {FAR2019},
    address = {Monopoli},
    year = {2019},
    doi = {https://cfse.ch/nextcloud/index.php/s/PNHiJdSYHT5FXiX}
}`;
    const [stabilityBib2Open, setStabilityBib2Open] = useState(false);
    const stabilityBibtex2 = `@inproceedings{charbonnier2015_marcoPolo,
    author = {Charbonnier, D. and Vos, J. B. and Clopeau, E. and Ferracina, L. and Maraffa, L.},
    title = {MarcoPolo-R ERC Dynamic Stability Characterization: Computational Campaign},
    booktitle = {ESA ATD},
    address = {Lisbon},
    year = {2015},
    url = {https://www.researchgate.net/publication/275638548_MarcoPolo-R_ERC_Dynamic_Stability_Characterization_Computational_Campaign}
}`;

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
                    <div className="grid md:grid-cols-2 md:items-start md:gap-8">
                        <div>
                            <section className="mb-6 border rounded-lg p-4 bg-white shadow-sm">
                                <h3 className="text-xl font-semibold mb-2">Lift and Drag prediction</h3>
                                <p className="mb-4">
                                    CFS Engineering participated in several{' '}
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
                                    <div className="mt-3 ">Interactive A320 model — drag to rotate, scroll to zoom.</div>
                                </div>
                            </section>

                            <section className="mb-6 border rounded-lg p-4 bg-white shadow-sm">
                                <h3 className="text-xl font-semibold mb-2">Static and Dynamic Stability</h3>
                                <img src="/serviceimages/dynamic_stability.webp" alt="Dynamic Stability" className="w-24 sm:w-64 md:w-64 rounded-lg shadow-sm float-left mr-4 mb-3 cursor-pointer" onClick={() => openLightbox('/serviceimages/dynamic_stability.webp')} />
                                <p>
                                    Sending a vehicle into space is one thing, getting it safely back is a totally different story.
                                    Dynamic stability in particular is a critical issue, especially in the low speed regime
                                    (supersonic/transonic/subsonic regime). One can distinguish two types of stability, static and dynamic.
                                    Any moving vehicle is subject to minor changes in the forces acting on it. When such a change will lead to further changes
                                    bringing the vehicle back to its original position the vehicle is called statically stable. Dynamic stability is related to a
                                    perturbation of the steady state (flight and motion) of a vehicle and how the oscillations generated by this perturbation are damped out.
                                    CFS Engineering routinely performs steady CFD simulations to assess static stability and unsteady CFD simulations to analyze the dynamic
                                    stability of aircraft and re-entry vehicles.
                                </p>
                                <div className="clear-both mt-4">
                                    <Accordion type="single" collapsible>
                                        <AccordionItem value="stability-pubs">
                                            <AccordionTrigger>Related Publications</AccordionTrigger>
                                            <AccordionContent>
                                                <div className="text-sm">
                                                    <p className="mb-2 font-medium">Charbonnier, D.; Vos, J. B.</p>
                                                    <p className="mb-2">Determination of Dynamic Derivatives of Re-entry Vehicles using Unsteady CFD — FAR2019, Monopoli, 2019.</p>
                                                    <div className="flex items-center gap-3">
                                                        <a href="https://cfse.ch/nextcloud/index.php/s/PNHiJdSYHT5FXiX" target="_blank" rel="noopener noreferrer" className="text-primary underline">Links</a>
                                                        <button onClick={() => setStabilityBibOpen(!stabilityBibOpen)} className="text-primary underline">BibTeX</button>
                                                    </div>
                                                    {stabilityBibOpen && (
                                                        <pre className="mt-3 p-3 bg-gray-100 rounded text-sm overflow-auto">{stabilityBibtex}</pre>
                                                    )}
                                                    <div className="mt-4 border-t pt-3">
                                                        <p className="mb-2 font-medium">Charbonnier, D.; Vos, J. B.; Clopeau, E.; Ferracina, L.; Maraffa, L.</p>
                                                        <p className="mb-2">MarcoPolo-R ERC Dynamic Stability Characterization: Computational Campaign — ESA ATD, Lisbon, 2015.</p>
                                                        <div className="flex items-center gap-3">
                                                            <a href="https://www.researchgate.net/publication/275638548_MarcoPolo-R_ERC_Dynamic_Stability_Characterization_Computational_Campaign" target="_blank" rel="noopener noreferrer" className="text-primary underline">Links</a>
                                                            <button onClick={() => setStabilityBib2Open(!stabilityBib2Open)} className="text-primary underline">BibTeX</button>
                                                        </div>
                                                        {stabilityBib2Open && (
                                                            <pre className="mt-3 p-3 bg-gray-100 rounded text-sm overflow-auto">{stabilityBibtex2}</pre>
                                                        )}
                                                    </div>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </section>

                            <section className="mb-6 border rounded-lg p-4 bg-white shadow-sm">
                                <h3 className="text-xl font-semibold mb-2">Active flow control</h3>
                                <p>
                                    Design and evaluation of actuation strategies (steady or unsteady) to manipulate boundary layers and wakes for drag reduction,
                                    lift augmentation, or noise mitigation.
                                </p>
                            </section>
                        </div>

                        <div>
                            <section className="mb-6 border rounded-lg p-4 bg-white shadow-sm">
                                <h3 className="text-xl font-semibold mb-2">Turbulent flow analysis</h3>
                                <p>
                                    Advanced turbulence modeling and spectral analysis to capture wake dynamics, separation, and transition phenomena relevant to performance and noise.
                                </p>
                            </section>

                            <section className="mb-6 border rounded-lg p-4 bg-white shadow-sm">
                                <h3 className="text-xl font-semibold mb-2">Subsonic to low-supersonic flow analysis</h3>
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
                                    <div className="mt-3 ">Interactive ONERA M6 model — drag to rotate, scroll to zoom.</div>
                                </div>
                            </section>
                        </div>
                    </div>
                ) : slug === 'aerothermodynamics' ? (
                    <div className="grid md:grid-cols-2 md:items-start md:gap-8">
                        <div>
                            <section className="mb-6 border rounded-lg p-4 bg-white shadow-sm">
                                <h3 className="text-xl font-semibold mb-2">Hypersonic flow simulations</h3>
                                <p>
                                    Numerical methods and high-temperature gas models for hypersonic aerothermodynamics, including coupling with radiation and chemical nonequilibrium when needed.
                                </p>
                            </section>

                            <section className="mb-6 border rounded-lg p-4 bg-white shadow-sm">
                                <h3 className="text-xl font-semibold mb-2">Wall-Heat flux calculations</h3>
                                <img src="/serviceimages/wall_heatflux.webp" alt="Wall Heat Flux" className="w-24 sm:w-48 md:w-64 rounded-lg shadow-sm float-left mr-4 mb-3 cursor-pointer" onClick={() => openLightbox('/serviceimages/wall_heatflux.webp')} />
                                <p>
                                    Re-entry vehicles enter the atmosphere (Earth or Mars) at very high speed. This speed is reduced to the atmosphere, generating heat. For this reason re-entry vehicles have a Thermal Protection System (TPS) protecting the vehicle. CFS Engineering performs routine CFD simulations to determine the heat flux on re-entry vehicles. The value of this heat flux strongly depends on the properties of TPS, and this is translated in different boundary conditions for the temperature and species that can be used in the CFD solver (adiabatic wall, temperature imposed, radiative equilibrium, fully, partial or non-catalytic wall).                                </p>
                            </section>

                            <section className="mb-6 border rounded-lg p-4 bg-white shadow-sm">
                                <h3 className="text-xl font-semibold mb-2">Radiation effects</h3>
                                <p>
                                    Radiative heat transfer modeling and its interaction with gas-phase chemistry for re-entry conditions where radiation contributes significantly to heating.
                                </p>
                                <p className="mt-4">

                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
                                    <img
                                        src="/serviceimages/radiations.webp"
                                        alt="With radiation"
                                        className="w-48 h-32 sm:w-64 sm:h-40 md:w-80 md:h-48 object-cover rounded-lg shadow-sm cursor-pointer"
                                        onClick={() => openLightbox('/serviceimages/radiations.webp')}
                                    />

                                    <img
                                        src="/serviceimages/no_radiations.webp"
                                        alt="Without radiation"
                                        className="w-48 h-32 sm:w-64 sm:h-40 md:w-80 md:h-48 object-cover rounded-lg shadow-sm cursor-pointer"
                                        onClick={() => openLightbox('/serviceimages/no_radiations.webp')}
                                    />
                                </div>
                                <p className="mt-4">
                                    Since the Hot Plume project (financed by the European Space Agency) the NSMB CFD code will be extended to permit the numerical simulation of hot gases with particles. In particular the following models have been implemented:
                                </p>
                                <ul className="list-disc list-inside mt-3">
                                    <li>Chemistry models (frozen, equilibrium and non-equilibrium) for the simulation of hot plumes.</li>
                                    <li>A Lagrangian particle tracking model to track solid particles coming out of the nozzle exit from VEGA-type launch vehicles.</li>
                                    <li>A simple radiation model for solid particles.</li>
                                </ul>
                                <p className="mt-4">
                                    The Hot Plume project focuses on a VEGA type of launcher and of particular interest is the first stage engine firing in the transonic regime (Mach = 0.8). However, the extensions made to the CFD tool are applicable to other launch vehicles including retro-jet firing for stage separation with multiple plumes.
                                </p>
                            </section>
                        </div>
                        <div>
                            <section className="mb-6 border rounded-lg p-4 bg-white shadow-sm">
                                <h3 className="text-xl font-semibold mb-2">Thermal protection design</h3>
                                <img src="/serviceimages/wind_tunnel_rebuilding.webp" alt="wind_tunnel_rebuilding" className="w-46 sm:w-72 md:w-64 rounded-lg shadow-sm float-left mr-4 mb-3 cursor-pointer" onClick={() => openLightbox('/serviceimages/wind_tunnel_rebuilding.webp')} />
                                <p>
                                    Design guidance and simulation of thermal protection systems (ablative and reusable), including transient heating and material response.
                                </p>
                                <p className="mt-4">
                                    The ultimate verification of a re-entry vehicle design is in-flight simulation with the help of experimental vehicles or a prototype. Such a flight will permit the validation of computational simulation tools and the verification and improvement of ground-to-flight extrapolation methods. The ESA Future Launchers Preparatory Program (FLPP) was conceived to provide a framework for, among other technology challenges, the development of the Intermediate eXperimental Vehicle (IXV). The IXV project was initiated in 2005 by ESA after analysis and comparison of different ESA and national concepts a slender lifting body configuration was selected as IXV geometry to permit Europe to gain experience with aerodynamic controlled re-entry.
                                </p>
                            </section>

                            <section className="mb-6 border rounded-lg p-4 bg-white shadow-sm">
                                <h3 className="text-xl font-semibold mb-2">Atmospheric Entry & Ascent</h3>
                                <img src="/serviceimages/edl_entry_descent.webp" alt="edl_entry_descent" className="w-46 sm:w-72 md:w-64 rounded-lg shadow-sm float-left mr-4 mb-3 cursor-pointer" onClick={() => openLightbox('/serviceimages/edl_entry_descent.webp')} />
                                <p>
                                    In the frame of the ESA Mars Precision Lander project an aero-thermodynamic assessment is made of a spike shape entry system for a ground penetrator mission. CFS Engineering performed a bunch of CFD simulations using NSMB on the Entry Descent and Landing (EDL) configuration proposed in this project. Steady CFD simulations for the generation of the Aerodynamic Data Base (AEDB) and Aero-Thermodynamic Data base (ATDB) for the EDL system, steady CFD simulations for the AEDB generation of the penetrator alone, as well as unsteady CFD simulations for the penetrator system and the penetrator alone to determine the stability derivatives have been performed during this project.                                </p>
                            </section>
                        </div>
                    </div>
                ) : slug === 'fsi' ? (
                    <div className="grid md:grid-cols-2 md:items-start md:gap-8">
                        <div>
                            <section className="mb-6 border rounded-lg p-4 bg-white shadow-sm">
                                <h3 className="text-xl font-semibold mb-2">Static stress analysis</h3>
                                <p>
                                    Linear and nonlinear static structural analyses to compute stresses and deformations under steady loading conditions, including contact and large-deformation effects when required.
                                </p>

                                <div className="w-full mt-4 mb-4">
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
                                    <div className="mt-3 ">Interactive MDO model — click & drag to rotate, scroll to zoom.</div>
                                </div>
                            </section>

                            <section className="mb-6 border rounded-lg p-4 bg-white shadow-sm">
                                <h3 className="text-xl font-semibold mb-2">Dynamic response</h3>
                                <img src="/serviceimages/dynamic_response.webp" alt="dynamic_response" className="w-46 sm:w-56 md:w-48 rounded-lg shadow-sm float-left mr-4 mb-3 cursor-pointer" onClick={() => openLightbox('/serviceimages/dynamic_response.webp')} />
                                <p>
                                    The Swiss Airforce operates the F/A-18 fighter since 1997.
                                    The Swiss usage of this aircraft is more severe than the US
                                    Navy Design, resulting in a different structural design.
                                    To better understand the aerodynamic loads a large investment
                                    was made in the development of a CFD capacity to generate these
                                    loads for different flight conditions. Procedures were developed
                                    for both static and dynamic Fluid Structure Interaction (FSI).
                                    Dynamic FSI calculations were made to study vertical tail
                                    buffeting using a tightly coupled approach. Papers on studies
                                    for the F/A-fighter were given at the AIAA Aviation Conferences
                                    in 2017 and 2018. Other papers on FSI were given in 2016 and 2018.
                                </p>
                            </section>
                        </div>

                        <div>
                            <section className="mb-6 border rounded-lg p-4 bg-white shadow-sm">
                                <h3 className="text-xl font-semibold mb-2">Modal analysis</h3>
                                <p>
                                    Eigenvalue and modal decomposition to obtain natural frequencies and mode shapes; used for flutter and resonance avoidance studies.
                                </p>
                            </section>

                            <section className="mb-6 border rounded-lg p-4 bg-white shadow-sm">
                                <h3 className="text-xl font-semibold mb-2">Fatigue assessment</h3>
                                <p>
                                    High-cycle and low-cycle fatigue estimation workflows based on load spectra derived from operational or mission profiles, enabling life prediction and maintenance planning.
                                </p>
                            </section>

                            <section className="mb-6 border rounded-lg p-4 bg-white shadow-sm">
                                <h3 className="text-xl font-semibold mb-2">Preventing structural failure</h3>
                                <p>
                                    Design recommendations and mitigation strategies (reinforcement, damping, control laws) to reduce risk of failure under coupled aero-structural loading.
                                </p>
                            </section>
                        </div>
                    </div>
                ) : slug === 'tailored' ? (
                    <div className="grid md:grid-cols-2 md:items-start md:gap-8">
                        <div>
                            <section className="mb-6 border rounded-lg p-4 bg-white shadow-sm">
                                <h3 className="text-xl font-semibold mb-2">Biofluid Dynamics</h3>
                                <img src="/serviceimages/biofluid_dynamics.webp" alt="Biofluid Dynamics" className="w-32 sm:w-56 md:w-48 rounded-lg shadow-sm block float-none mr-0 mb-3 cursor-pointer" onClick={() => openLightbox('/serviceimages/biofluid_dynamics.webp')} />
                                <p className="mt-4">
                                    3D simulations of biological flows, moving boundaries, and multiphysics coupling for biomedical device design and hemodynamics studies.
                                </p>
                                <div className="mt-4">
                                    <Accordion type="single" collapsible>
                                        <AccordionItem value="pubs">
                                            <AccordionTrigger>Related Publications</AccordionTrigger>
                                            <AccordionContent>
                                                <BiofluidPublications />
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </section>

                            <section className="mb-6 border rounded-lg p-4 bg-white shadow-sm">
                                <h3 className="text-xl font-semibold mb-2">Pumps</h3>
                                <img src="/serviceimages/pumps.webp" alt="Pumps" className="w-48 sm:w-64 md:w-64 object-cover rounded-lg shadow-sm block mx-auto mb-4 cursor-pointer" onClick={() => openLightbox('/serviceimages/pumps.webp')} />
                                <p>
                                    Design and CFD-driven optimization of industrial and medical pump geometries focusing on efficiency and cavitation avoidance.
                                </p>
                            </section>
                        </div>

                        <div>
                            <section className="mb-6 border rounded-lg p-4 bg-white shadow-sm">
                                <h3 className="text-xl font-semibold mb-2">High-speed trains</h3>
                                <img
                                    src="/serviceimages/transportation.webp"
                                    alt="High-speed trains"
                                    className="w-48 h-32 sm:w-64 sm:h-40 md:w-80 md:h-48 object-cover rounded-lg shadow-sm block mx-auto mb-4 cursor-pointer"
                                    onClick={() => openLightbox('/serviceimages/transportation.webp')} />
                                <p>
                                    Aerodynamic and aeroacoustic simulations tailored to
                                    high-speed rail to reduce drag, improve crosswind stability,
                                    and lower noise emissions.  CFD simulations were also made to study :
                                </p>
                                <ul className="mt-3 list-inside">
                                    <li className="flex items-center "><div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>Influence of nose design on aerodynamic drag</li>
                                    <li className="flex items-center "><div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>Cooling inlet/outlet effects</li>
                                    <li className="flex items-center "><div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>Aerodynamic loads under side winds</li>
                                    <li className="flex items-center "><div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>Influence of side walls near the track</li>
                                    <li className="flex items-center "><div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>Influence of a passing train on people waiting on a platform</li>
                                    <li className="flex items-center "><div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>Influence of the entering of a train in a tunnel</li>
                                </ul>
                            </section>

                            <section className="mb-6 border rounded-lg p-4 bg-white shadow-sm">
                                <h3 className="text-xl font-semibold mb-2">Civil Engineering & Smart Morphing</h3>
                                <img src="/serviceimages/civil_engineering.webp" alt="civil_engineering" className="w-32 sm:w-56 md:w-48 rounded-lg shadow-sm float-left mr-4 mb-3 cursor-pointer" onClick={() => openLightbox('/serviceimages/civil_engineering.webp')} />
                                <p>
                                    Wind engineering, pollutant dispersion, and smart morphing & sensing projects for performance and noise reduction using active surfaces and sensing feedback.
                                </p>
                                <p className="mt-4">
                                    One specific example is the Internal project about fire and smoke propagation using the FDS software developed by NIST (National Institute of Standards and Technology).
                                    Fire Dynamics Simulator (FDS) is a computational fluid dynamics (CFD) model of fire-driven fluid flow. The software solves numerically a form of the Navier-Stokes equations appropriate for low-speed, thermally-driven flow, with an emphasis on smoke and heat transport from fires.
                                </p>
                            </section>
                        </div>
                    </div>
                ) : slug === 'methods' ? (
                    <div className="grid md:grid-cols-2 md:items-start md:gap-8">
                        <div>
                            <section className="mb-6 border rounded-lg p-4 bg-white shadow-sm">
                                <h3 className="text-xl font-semibold mb-2">Particles Tracking</h3>
                                <img src="/serviceimages/particle_tracking.webp" alt="Particle Tracking" className="w-24 sm:w-48 md:w-64 rounded-lg shadow-sm float-left mr-4 mb-3 cursor-pointer" onClick={() => openLightbox('/serviceimages/particle_tracking.webp')} />
                                <p>
                                    Particle tracking modules for multiphase flows and particulate radiative effects, used in propulsion and aerosol studies.
                                </p>
                            </section>

                            <section className="mb-6 border rounded-lg p-4 bg-white shadow-sm">
                                <h3 className="text-xl font-semibold mb-2">Separation – 6DoF</h3>
                                <img src="/serviceimages/separation.webp" alt="Separation – 6DoF" className="w-24 sm:w-48 md:w-64 rounded-lg shadow-sm float-left mr-4 mb-3 cursor-pointer" onClick={() => openLightbox('/serviceimages/separation.webp')} />
                                <p>
                                    Moving body simulations with 6-DoF coupling, moving meshes, and chimera overset approaches for complex interactions and data reduction workflows.
                                </p>
                            </section>
                        </div>

                        <div>
                            <section className="mb-6 border rounded-lg p-4 bg-white shadow-sm">
                                <h3 className="text-xl font-semibold mb-2">Chimera Method</h3>
                                <img src="/serviceimages/chimera_method.webp" alt="Chimera Method – 6DoF" className="w-24 sm:w-48 md:w-64 rounded-lg shadow-sm float-left mr-4 mb-3 cursor-pointer" onClick={() => openLightbox('/serviceimages/chimera_method.webp')} />
                                <p>
                                    Overset grid techniques to simplify meshing of complex moving geometries and enable robust interpolation between overlapping meshes.
                                </p>
                            </section>

                            <section className="mb-6 border rounded-lg p-4 bg-white shadow-sm">
                                <h3 className="text-xl font-semibold mb-2">Sliding Meshes</h3>
                                <img src="/serviceimages/sliding_meshes.webp" alt="Sliding Meshes – 6DoF" className="w-24 sm:w-48 md:w-64 rounded-lg shadow-sm float-left mr-4 mb-3 cursor-pointer" onClick={() => openLightbox('/serviceimages/sliding_meshes.webp')} />
                                <p>
                                    Sliding mesh approaches for rotating machinery and relative motion between components such as propellers and tunnel entries.
                                </p>
                            </section>
                        </div>
                    </div>
                ) : slug === 'custom' ? (
                    <div className="grid md:grid-cols-2 md:items-start md:gap-8">
                        <div>
                            <section className="mb-6 border rounded-lg p-4 bg-white shadow-sm">
                                <h3 className="text-xl font-semibold mb-2">Custom modeling</h3>
                                <p>
                                    Tailored physics models and solver customizations to capture domain-specific effects not covered by off-the-shelf tools.
                                </p>
                            </section>

                            <section className="mb-6 border rounded-lg p-4 bg-white shadow-sm">
                                <h3 className="text-xl font-semibold mb-2">Algorithm development</h3>
                                <p>
                                    Development of new numerical algorithms, high-performance solvers, and automation scripts to speed up analysis loops.
                                </p>
                            </section>
                        </div>

                        <div>
                            <section className="mb-6 border rounded-lg p-4 bg-white shadow-sm">
                                <h3 className="text-xl font-semibold mb-2">Specialized analysis</h3>
                                <p>
                                    Cutting-edge analyses tailored to research and industrial needs. Example: IXV Post-Flight Analysis to validate CFD tools against flight data.
                                </p>
                                <img src="/serviceimages/specialized_analysis_1.webp" alt="specialized_analysis_1" className="w-24 sm:w-48 md:w-64 rounded-lg shadow-sm mt-3 cursor-pointer" onClick={() => openLightbox('/serviceimages/specialized_analysis_1.webp')} />
                            </section>

                            <section className="mb-6 border rounded-lg p-4 bg-white shadow-sm">
                                <h3 className="text-xl font-semibold mb-2">Reconstruct wind tunnel tests</h3>
                                <p>
                                    Since May 2025, CFS Engineering has been participating in ESA projects focusing on entry/descent systems. We reconstruct wind tunnel tests and rebuild dynamic stability tests at high subsonic/transonic conditions.
                                </p>
                            </section>
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
