const Collaborators = () => {
    return (
        <section className="py-1 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="w-full flex flex-col items-center">
                    <h3 className="text-2xl font-semibold text-foreground mb-6 w-full text-center">They trust us</h3>
                    <div className="flex flex-wrap justify-center gap-8 items-center w-full">
                        <a href="https://airinnova.se/" target="_blank" rel="noopener noreferrer">
                            <img src="/collaborators/airinnova.jpg" alt="AIRINNOVA" className="h-12 w-auto object-contain hover:scale-102 transition-transform" />
                        </a>
                        <a href="https://ariane.group/en/" target="_blank" rel="noopener noreferrer">
                            <img src="/collaborators/ariane.png" alt="ARIANE" className="h-12 w-auto object-contain hover:scale-102 transition-transform" />
                        </a>
                        <a href="https://www.dlr.de/en" target="_blank" rel="noopener noreferrer">
                            <img src="/collaborators/dlr.svg" alt="DLR" className="h-12 w-auto object-contain hover:scale-105 transition-transform" />
                        </a>
                        <a href="https://www.ruag.com/" target="_blank" rel="noopener noreferrer">
                            <img src="/collaborators/ruag.png" alt="RUAG" className="h-12 w-auto object-contain hover:scale-102 transition-transform" />
                        </a>
                        <a href="https://www.esa.int/" target="_blank" rel="noopener noreferrer">
                            <img src="/collaborators/esa.png" alt="ESA" className="h-12 w-auto object-contain hover:scale-102 transition-transform" />
                        </a>
                        <a href="https://nag.aero/member/nlr-netherlands-aerospace-centre/" target="_blank" rel="noopener noreferrer">
                            <img src="/collaborators/nlr.png" alt="NLR" className="h-12 w-auto object-contain hover:scale-102 transition-transform" />
                        </a>
                        <a href="https://www.epfl.ch/en/" target="_blank" rel="noopener noreferrer">
                            <img src="/collaborators/epfl.png" alt="EPFL" className="h-12 w-auto object-contain hover:scale-102 transition-transform" />
                        </a>
                        <a href="https://www.elomatic.com/" target="_blank" rel="noopener noreferrer">
                            <img src="/collaborators/elomatic.png" alt="ELOMATIC" className="h-12 w-auto object-contain hover:scale-102 transition-transform" />
                        </a>
                        {/* <a href="https://www.stadlerrail.com/en" target="_blank" rel="noopener noreferrer">
                            <img src="/collaborators/stadler.svg" alt="STADLER" className="h-8 w-auto object-contain hover:scale-102 transition-transform" />
                        </a> */}
                    </div>
                </div>
            </div>
        </section>
    );  
};

export default Collaborators;