
import React, { useState } from "react";

const SoftwareDevelopment = () => {
    const [selected, setSelected] = useState("nsmb");

    return (
        <section className="py-20 bg-background min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                {/* Menu Selector */}
                <div className="flex justify-center gap-4 mb-8">
                    <button
                        className={`px-4 py-2 rounded font-semibold shadow transition-colors focus:outline-none focus:ring-2 ${selected === "nsmb" ? "bg-primary text-background hover:bg-primary/80 focus:ring-primary/50" : "bg-muted text-foreground hover:bg-muted/80 focus:ring-muted/50"}`}
                        onClick={() => setSelected("nsmb")}
                    >
                        NSMB
                    </button>
                    <button
                        className={`px-4 py-2 rounded font-semibold shadow transition-colors focus:outline-none focus:ring-2 ${selected === "b2000++" ? "bg-primary text-background hover:bg-primary/80 focus:ring-primary/50" : "bg-muted text-foreground hover:bg-muted/80 focus:ring-muted/50"}`}
                        onClick={() => setSelected("b2000++")}
                    >
                        b2000++
                    </button>
                    <button
                        className={`px-4 py-2 rounded font-semibold shadow transition-colors focus:outline-none focus:ring-2 ${selected === "baspl3" ? "bg-primary text-background hover:bg-primary/80 focus:ring-primary/50" : "bg-muted text-foreground hover:bg-muted/80 focus:ring-muted/50"}`}
                        onClick={() => setSelected("baspl3")}
                    >
                        Baspl3
                    </button>
                    <button
                        className={`px-4 py-2 rounded font-semibold shadow transition-colors focus:outline-none focus:ring-2 ${selected === "cesiompy" ? "bg-primary text-background hover:bg-primary/80 focus:ring-primary/50" : "bg-muted text-foreground hover:bg-muted/80 focus:ring-muted/50"}`}
                        onClick={() => setSelected("cesiompy")}
                    >
                        CESIOMpy
                    </button>
                </div>

                {/* NSMB Section */}
                {selected === "nsmb" && (
                    <>
                        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">Navier-Stokes Multi-Block Solver (NSMB)</h1>
                        <p className="text-lg text-muted-foreground mb-8">
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
                    </>
                )}

                {/* Baspl3 Section */}
                {selected === "b2000++" && (
                    <>
                        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">Finite Element Analysis Environment </h1>
                        <div className="flex items-center mb-8 gap-4">
                            <a href="https://www.smr.ch/products/b2000/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                                <img
                                    src="/softwares/b2000pro.png"
                                    alt="b2000pro Logo"
                                    className="h-24 w-24 object-contain"
                                    style={{ minWidth: '13rem', minHeight: '13rem' }}
                                />
                            </a>
                            <p className="text-lg text-muted-foreground m-0">
                                B2000++ is a <span className="font-semibold">Finite Element problem solving environment</span> made primarly to analyze the behaviour of structures. B2000++ can predict with a high degree of accuracy the deformation field, the stress field, the buckling behavior, and the temperature distribution of many thin- and thick-walled, metallic and laminated composite structures. <br />
                                B2000++ is developed by the Swiss company SMR which collaborates actively with CFSE.
                            </p>
                        </div>
                    </>
                )}


                {/* Baspl3 Section */}
                {selected === "baspl3" && (
                    <>
                        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">Baspl3</h1>
                        <p className="text-lg text-muted-foreground mb-8">
                            Baspl3 is our in-house developed post-processing visualization
                            tool tailored for NSMB and the engineers at CFSE.
                        </p>
                    </>
                )}

                {/* CESIOMpy Section */}
                {selected === "cesiompy" && (
                    <>
                        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">CESIOMpy</h1>
                        <div className="flex items-center mb-8 gap-4">
                            <a href="https://github.com/cfsengineering/CEASIOMpy/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                                <img
                                    src="/softwares/ceasiompy.png"
                                    alt="CEASIOMpy Logo"
                                    className="h-24 w-24 object-contain"
                                    style={{ minWidth: '10rem', minHeight: '10rem' }}
                                />
                            </a>
                            <p className="text-lg text-muted-foreground m-0">
                                CESIOMpy is an <span className="font-semibold">open source</span> Python-based tool for multidisciplinary design and optimization, focusing on aerospace applications. It integrates various simulation modules and supports automated workflows.<br />
                                You can find the source code and contribute on <a href="https://github.com/cfsengineering/CEASIOMpy" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">GitHub</a>.
                            </p>
                        </div>
                    </>
                )}

                <div className="mt-8">
                    <button className="text-primary hover:underline" onClick={() => { window.location.href = '/#projects'; }}>
                        ← Back to Projects
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SoftwareDevelopment;
