import React from "react";

const ReusableLaunchVehicles = () => (
    <section className="py-20 bg-background min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">Re-usable Launch Vehicles</h1>
            <p className="text-lg text-muted-foreground mb-8">
                Transonic and supersonic aerodynamic analysis for Re-usable Launch Vehicles, with a focus on aerodynamics forces and grid-fins shape optimization.
            </p>
            <div className="mt-8">
                <button className="text-primary hover:underline" onClick={() => { window.location.href = '/#projects'; }}>
                    ← Back to Projects
                </button>
            </div>
        </div>
    </section>
);

export default ReusableLaunchVehicles;
