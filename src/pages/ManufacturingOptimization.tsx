import React from "react";

const ManufacturingOptimization = () => (
    <section className="py-20 bg-background min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">Manufacturing Process Optimization</h1>
            <p className="text-lg text-muted-foreground mb-8">
                Multi-phase flow simulation and heat transfer analysis for optimizing injection molding processes in automotive component manufacturing.
            </p>
            <div className="mt-8">
                <button className="text-primary hover:underline" onClick={() => { window.location.href = '/#projects'; }}>
                    ← Back to Projects
                </button>
            </div>
        </div>
    </section>
);

export default ManufacturingOptimization;
