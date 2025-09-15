

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';
// @ts-ignore: three fiber elements

import * as THREE from 'three';
import { useEffect } from 'react';

function MarsCapsuleModel() {
    const gltf = useGLTF('/projectimages/marsentrysystem.glb');
    useEffect(() => {
        gltf.scene.traverse((child) => {
            // Only set material.side if child is a Mesh and has a material
            if ((child as THREE.Mesh).isMesh && (child as THREE.Mesh).material) {
                ((child as THREE.Mesh).material as THREE.Material).side = THREE.DoubleSide;
            }
        });
    }, [gltf]);
    return <primitive object={gltf.scene} scale={1.5} />;
}

const MarsEntryDescent = () => (
    <section className="py-20 bg-background min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <div className="flex items-start gap-6 mb-8">
                <div className="flex-1">
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
            <div className="w-full flex justify-center items-center mb-8">
                <div className="w-full h-[400px] bg-white rounded-lg overflow-hidden shadow-lg">
                    <Canvas camera={{ position: [0, 0, 8], fov: 50 }} shadows style={{ background: '#fff' }}>
                        {/* brighter ambient to lift shadows */}
                        <ambientLight intensity={0.6} />
                        {/* hemisphere gives soft sky/ground fill for PBR materials */}
                        <hemisphereLight color={0xffffff} groundColor={0x888888} intensity={0.4} />
                        {/* stronger directional key light */}
                        <directionalLight position={[10, 10, 10]} intensity={1.2} />
                        <Suspense fallback={null}>
                            {/* enable an environment preset so PBR materials reflect a scene */}
                            <Stage environment={"studio"} intensity={1}>
                                <MarsCapsuleModel />
                            </Stage>
                        </Suspense>
                        <OrbitControls enablePan enableZoom enableRotate />
                    </Canvas>
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
