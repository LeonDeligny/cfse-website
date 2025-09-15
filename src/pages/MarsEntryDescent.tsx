import React from "react";
// No Link import needed

const MarsEntryDescent = () => (
    <section className="py-20 bg-background min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">Mars Entry and Descent System</h1>
            <p className="text-lg text-muted-foreground mb-8">
                Since May 2025, CFS Engineering has been participating in an ESA-funded project focused on the development of a Mars Entry and Descent System. CFD simulations will be performed at points throughout the trajectories. This will provide a complete aerodynamic database, showing variation with Mach and angle of attack. CFS Engineering will reconstruct wind tunnel tests and will rebuild the T-IBU dynamic stability test at high subsonic/transonic conditions.
            </p>
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
