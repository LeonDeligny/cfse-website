import React from "react";

const MorphingWing = () => (
    <section className="py-20 bg-background min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">Morphing Wings for Sustainable Aviation</h1>
            <p className="text-lg text-muted-foreground mb-8">
                Development of a morphing wing concept to enhance lift-to-drag performance and reduce noise during takeoff, cruise and landing.
            </p>
            <div className="mt-8">
                <button className="text-primary hover:underline" onClick={() => { window.location.href = '/#projects'; }}>
                    ← Back to Projects
                </button>
            </div>
        </div>
    </section>
);

export default MorphingWing;
