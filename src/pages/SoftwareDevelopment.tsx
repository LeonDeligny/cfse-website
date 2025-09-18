
import React, { useState } from "react";
import { ArrowLeft } from 'lucide-react';

const SoftwareDevelopment = () => {
    const [selected, setSelected] = useState("nsmb");

    return (
        <section className="py-20 bg-background min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mt-8">
                    <button className="text-primary mb-6 flex items-center" onClick={() => { window.location.href = '/#projects'; }}>
                        <ArrowLeft className="mr-2" /> Back
                    </button>
                </div>                

                <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center mx-auto">Software Development</h1>

                <div className="grid md:grid-cols-2 md:items-start md:gap-8">
                <div>
                    <section className="mb-4 border rounded-lg p-4 bg-white shadow-sm">
                        <h3 className="text-xl font-semibold mb-2">Navier-Stokes Multi-Block Solver (NSMB)</h3>

                        <p className="text-lg  mb-8">
                            NSMB is a structured Multi Block Navier-Stokes solver which has been developed since June 1992 by CFS Engineering and several other universities and research establishments. It is a finite volume solver for the solution of the compressible Euler and Navier-Stokes equations on structured multi-block grids. The code is written in Fortran and parallelized using MPI. Since 2004, NSMB is further developed by the following research institutions:
                        </p>
                        {/* Research Institution Logos */}
                        <div className="flex gap-8 items-center justify-center mb-8 overflow-x-auto whitespace-nowrap">
                            <a href="https://www.epfl.ch/" target="_blank" rel="noopener noreferrer">
                                <img src="/collaborators/epfl.png" alt="EPFL" className="h-12 w-auto object-contain hover:scale-105 transition-transform" />
                            </a>
                            <a href="https://www.dlr.de/" target="_blank" rel="noopener noreferrer">
                                <img src="/collaborators/dlr.svg" alt="DLR" className="h-12 w-auto object-contain hover:scale-105 transition-transform" />
                            </a>
                            <a href="https://www.ethz.ch/en.html" target="_blank" rel="noopener noreferrer">
                                <img src="/collaborators/ethz.png" alt="ETHZ" className="h-12 w-auto object-contain hover:scale-105 transition-transform" />
                            </a>
                            <a href="https://en.unistra.fr/" target="_blank" rel="noopener noreferrer">
                                <img src="/collaborators/imf-strasbourg.svg" alt="IMF Strasbourg" className="h-12 w-auto object-contain hover:scale-105 transition-transform" />
                            </a>
                            <a href="https://www.imft.fr/en/accueil-english/" target="_blank" rel="noopener noreferrer">
                                <img src="/collaborators/imft.png" alt="IMFT" className="h-12 w-auto object-contain hover:scale-105 transition-transform" />
                            </a>
                            <a href="https://www.tum.de/en/" target="_blank" rel="noopener noreferrer">
                                <img src="/collaborators/tum.svg" alt="TUM" className="h-12 w-auto object-contain hover:scale-105 transition-transform" />
                            </a>
                            <a href="https://www.ruag.com/" target="_blank" rel="noopener noreferrer">
                                <img src="/collaborators/ruag.png" alt="RUAG" className="h-12 w-auto object-contain hover:scale-105 transition-transform" />
                            </a>
                        </div>
                    </section>
                </div>

                <div>
                    <section className="mb-4 border rounded-lg p-4 bg-white shadow-sm">

                    <h3 className="text-xl font-semibold mb-2">Finite Element Analysis Environment</h3>
                    <div className="flex items-center mb-8 gap-4">
                        <a href="https://www.smr.ch/products/b2000/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                            <img
                                src="/softwares/b2000pro.png"
                                alt="b2000pro Logo"
                                className="h-24 w-24 object-contain"
                                style={{ minWidth: '13rem', minHeight: '13rem' }}
                            />
                        </a>
                        <p className="text-lg m-0">
                            B2000++ is a <span className="font-semibold">Finite Element problem solving environment</span> made primarly to analyze the behaviour of structures. B2000++ can predict with a high degree of accuracy the deformation field, the stress field, the buckling behavior, and the temperature distribution of many thin- and thick-walled, metallic and laminated composite structures. <br />
                            B2000++ is developed by the Swiss company SMR which collaborates actively with CFSE.
                        </p>
                    </div>
                    </section>
                </div>

                <div>
                    <section className="mb-4 border rounded-lg p-4 bg-white shadow-sm">
                    <h3 className="text-xl font-semibold mb-2">Baspl3</h3>
                    <p className="text-lg  mb-8">
                        Baspl3 is our in-house developed post-processing visualization
                        tool tailored for NSMB's data outputs and the engineers at CFSE.
                    </p>
                    </section>
                </div>

                <div>
                    <section className="mb-4 border rounded-lg p-4 bg-white shadow-sm">
                    <h3 className="text-xl font-semibold mb-2">CEASIOMpy</h3>
                    <div className="flex items-center mb-8 gap-4">
                        <a href="https://github.com/cfsengineering/CEASIOMpy/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                            <img
                                src="/softwares/ceasiompy.png"
                                alt="CEASIOMpy Logo"
                                className="h-24 w-24 object-contain"
                                style={{ minWidth: '10rem', minHeight: '10rem' }}
                            />
                        </a>
                        <p className="text-lg  m-0">
                            CESIOMpy is an <span className="font-semibold">open source</span> Python-based tool for multidisciplinary design and optimization, focusing on aerospace applications. It integrates various simulation modules and supports automated workflows.<br />
                            You can find the source code and contribute on <a href="https://github.com/cfsengineering/CEASIOMpy" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">GitHub</a>.
                        </p>
                    </div>
                    </section>
                </div>
            </div>
            </div>
        </section>
    );
};

export default SoftwareDevelopment;
