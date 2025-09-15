import React from "react";

const FA18 = () => (
    <section className="py-20 bg-background min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">F/A 18</h1>
            <p className="text-lg text-muted-foreground mb-8">
                The maneuver spectrum of the Swiss usage of this aircraft is about 3 times more severe than the US Navy design. As a consequence, it is crucial to perform advanced fluid structure simulation to ensure structural integrity.
            </p>
            <div className="mt-8">
                <button className="text-primary hover:underline" onClick={() => { window.location.href = '/#projects'; }}>
                    ← Back to Projects
                </button>
            </div>
        </div>
    </section>
);

export default FA18;
