const MarsEntryDescent = () => (
    <section className="py-20 bg-background min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <div className="flex items-start gap-6 mb-8">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">Mars Entry and Descent System</h1>
                    <p className="text-lg text-muted-foreground mb-4">
                        Since May 2025, CFS Engineering has been participating in an ESA-funded project focused on the development of a Mars Entry and Descent System. Our role involves conducting steady and unsteady CFD simulations along key points of the flight trajectory, covering the full spectrum from hypersonic re-entry to supersonic and transonic descent. The main objectives of the study are:
                    </p>
                    <ul className="list-disc list-inside text-lg text-muted-foreground">
                        <li>To compute aerodynamic forces acting on the capsule’s braking units</li>
                        <li>To evaluate heat fluxes for the design of the Thermal Protection System (TPS)</li>
                        <li>To assess both the static and dynamic stability of the capsule during descent</li>
                    </ul>
                </div>
            </div>
            <div className="mt-8">
                <button
                    className="text-primary hover:underline"
                    onClick={() => {
                        window.location.href = '/#projects';
                    }}
                >
                    ← Back to Projects
                </button>
            </div>
        </div>
    </section>
);

export default MarsEntryDescent;
