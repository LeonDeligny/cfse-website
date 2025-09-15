
const CollaborativeSystems = () => (
    <section className="py-20 bg-background min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">Collaborative Systems of Systems</h1>

            <div className="flex items-center mb-8 gap-4">
            <a href="https://colossus-sos-project.eu/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                <img
                    src="/projectimages/colossus.png"
                    alt="Colossus Logo"
                    className="h-24 w-24 object-contain"
                    style={{ minWidth: '12rem', minHeight: '12rem' }}
                />
            </a>
            <p className="text-lg text-muted-foreground m-0">
                The COLOSSUS Horizon Europe project will develop a system-of-systems 
                design methodology which for the first time will enable the combined optimization 
                of aircraft, operations and business models. Resulting specific solutions 
                for intermodal transport and wildfire-fighting as well as developed methods 
                and tools will be openly published in order to foster exploitation for research 
                and industry.
            </p>
        </div>
            <div className="mt-8">
                <button className="text-primary hover:underline" onClick={() => { window.location.href = '/#projects'; }}>
                    ← Back to Projects
                </button>
            </div>
        </div>
    </section>
);

export default CollaborativeSystems;
