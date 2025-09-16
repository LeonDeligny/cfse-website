
const ReusableLaunchVehicles = () => (
    <section className="py-20 bg-background min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">Re-usable Launch Vehicles</h1>
            <div className="flex items-center mb-8 gap-4">
                <a href="https://www.linkedin.com/company/projectsalto/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                    <img
                        src="/projectimages/salto.png"
                        alt="Salto Logo"
                        className="h-24 w-24 object-contain"
                        style={{ minWidth: '13rem', minHeight: '13rem' }}
                    />
                </a>

                <p className="text-lg text-muted-foreground mb-8">
                    The CFD4SALTO project started in December 2023,
                    and permits CFS Engineering to continue the activities it performed
                    on re-usable launch vehicles in the EU funded H2020 project RETALT.
                    The CFD4SALTO project will be performed in collaboration with the Horizon Europe
                    funded project SALTO – reuSable strAtegic space Launcher Technologies & Operations.
                    The CFD4SALTO project is lead by DLR in Cologne. CFS Engineering will perform CFD
                    computations for the generation of the aerodynamic databases for the SALTO T3
                    Vehicle. In addition CFS Engineering will perform CFD computations to support the
                    Wind tunnel testing at DLR in Cologne, as well perform CFD simulations to
                    extrapolate wind tunnel data to flight conditions.
                    The project will run for 3 years.
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

export default ReusableLaunchVehicles;
