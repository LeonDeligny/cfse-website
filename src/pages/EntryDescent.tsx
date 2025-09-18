

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, useGLTF } from '@react-three/drei';
import { useEffect, useState, Suspense } from 'react';
// @ts-ignore: three fiber elements
import { Dialog, DialogContent } from '@/components/ui/dialog';

import * as THREE from 'three';
import { ArrowLeft } from 'lucide-react';


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
    return <primitive object={gltf.scene} scale={1.5} rotation={[0, -Math.PI / 2, 0]} />;
}

const EntryDescent: React.FC = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

    const openLightbox = (src: string) => {
        setLightboxSrc(src);
        setLightboxOpen(true);
    };
    useEffect(() => { window.scrollTo(0, 0); }, []);
    return (
        <section className="py-20 bg-background min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mt-8">
                    <button className="text-primary mb-6 flex items-center" onClick={() => { window.location.href = '/#projects'; }}>
                        <ArrowLeft className="mr-2" /> Back
                    </button>
                </div>
                <h1
                    className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center mx-auto"
                >Entry & Descent Systems</h1>

                <div className="grid md:grid-cols-2 md:items-start md:gap-8">
                    <div>
                        <section className="mb-4 border rounded-lg p-4 bg-white shadow-sm">
                            <div className="flex items-start gap-6 mb-8">
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold mb-2">EDL (Entry Descent & Landing)</h3>
                                    <p className="text-lg mb-4">
                                        Since May 2025, CFS Engineering has been participating in an ESA-funded project focused on the development of a Mars Entry and Descent System. Our role involves conducting steady and unsteady CFD simulations along key points of the flight trajectory, covering the full spectrum from hypersonic re-entry to supersonic and transonic descent.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full mb-4">
                                <div className="w-full h-[320px] bg-white rounded-lg overflow-hidden shadow-sm">
                                    <Canvas
                                        tabIndex={-1}
                                        camera={{ position: [0, 0, 8], fov: 50 }}
                                        shadows style={{ background: '#fff' }}
                                        onCreated={({ gl }) => { gl.domElement.tabIndex = -1; }}
                                    >
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
                                <div className="mt-3  text-center">Interactive EDL model — drag to rotate, scroll to zoom.</div>
                            </div>
                            <div className="flex items-start gap-6 mb-8">
                                <div className="flex-1">
                                    <p className="text-lg mb-4">
                                        The main objectives of the study are to:
                                    </p>
                                    <ul className="list-disc list-inside text-lg">
                                        <li>compute aerodynamic forces acting on the capsule’s braking units</li>
                                        <li>evaluate heat fluxes for the design of the Thermal Protection System (TPS)</li>
                                        <li>assess both the static and dynamic stability of the capsule during descent</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div>
                        <section className="mb-4 border rounded-lg p-4 bg-white shadow-sm">
                            <div className="flex items-start gap-6 mb-8">
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold mb-2">ARV (Advanced Reentry Vehicle)</h3>
                                    <p className="text-lg mb-4">
                                        The very successful Jules Verne ATV mission has highlighted many new technologies and capabilities that can be used and adapted in the future for developing new spacecraft, making use of additional European know-how, such as atmospheric reentry technologies. Such development could be of great strategic importance for Europe’s role in human spaceflight endeavours in low-Earth orbit and for future exploration missions, leading to an autonomous launch and return capabilities to and from orbit.                     </p>

                                    <div className="grid grid-cols-2 gap-4 items-start">
                                        <figure className="text-center">
                                            <img
                                                src="/projectimages/arv_supersonic.webp"
                                                alt="ARV Supersonic"
                                                className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-lg shadow-sm cursor-pointer"
                                                onClick={() => openLightbox('/projectimages/arv_supersonic.webp')} />
                                            <figcaption className="mt-2 text-sm font-medium">ARV Supersonic</figcaption>
                                        </figure>
                                        <figure className="text-center">
                                            <img
                                                src="/projectimages/arv_hypersonic.webp"
                                                alt="ARV Hypersonic"
                                                className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-lg shadow-sm cursor-pointer"
                                                onClick={() => openLightbox('/projectimages/arv_hypersonic.webp')} />
                                            <figcaption className="mt-2 text-sm font-medium">ARV Hypersonic</figcaption>
                                        </figure>
                                    </div>

                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            {/* Lightbox dialog for images */}
            <Dialog open={lightboxOpen} onOpenChange={(o) => setLightboxOpen(o)}>
                <DialogContent className="sm:max-w-xl w-full h-auto p-0 bg-transparent shadow-none">
                    {lightboxSrc && (
                        <img src={lightboxSrc} alt="Preview" className="w-full h-auto rounded-md" />
                    )}
                </DialogContent>
            </Dialog>

        </section>
    );
};

export default EntryDescent;
