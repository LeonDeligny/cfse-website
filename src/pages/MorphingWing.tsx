
import { useEffect, useRef, useState, useCallback, Suspense } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, OrthographicCamera } from '@react-three/drei';

// Simple GLB sequence player that loads morphing_wing_1.glb ... morphing_wing_30.glb
function GLBSequencePlayer({
    count = 30,
    pathPrefix = '/projectimages/morphing_wing_',
    preload = 2,
    fps = 6,
}: {
    count?: number;
    pathPrefix?: string;
    preload?: number;
    fps?: number;
}) {
    const [index, setIndex] = useState(0);
    const [playing, setPlaying] = useState(false);
    const [gltfMap, setGltfMap] = useState<Record<number, any>>({});
    const frameRef = useRef<number | null>(null);
    const controlsRef = useRef<any>(null);

    const loaderRef = useRef<any>(null);
    const [loaderReady, setLoaderReady] = useState(false);
    useEffect(() => {
        // lazy import GLTFLoader
        let mounted = true;
        (async () => {
            const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader');
            if (!mounted) return;
            loaderRef.current = new GLTFLoader();
            setLoaderReady(true);
        })();
        return () => { mounted = false; };
    }, []);

    const loadIndex = useCallback(async (i: number) => {
        if (gltfMap[i] || !loaderRef.current) return;
        const idx = i + 1; // files are 1-indexed in naming
        const url = `${pathPrefix}${idx}.glb`;
        try {
            const gltf = await new Promise((res, rej) => loaderRef.current.load(url, res, undefined, rej));
            const gltfAny: any = gltf;
            // Post-process materials: make double-sided and slightly transparent so inner surfaces are visible
            try {
                gltfAny.scene.traverse((child: any) => {
                    if (child.isMesh && child.material) {
                        const mat = child.material;
                        // Some GLTF materials are arrays (multi-material); handle both
                        if (Array.isArray(mat)) {
                            mat.forEach((m: any) => {
                                try {
                                    m.side = THREE.DoubleSide;
                                    // make slightly transparent if fully opaque
                                    if (m.opacity === undefined || m.opacity === 1) {
                                        m.transparent = true;
                                        m.opacity = 1.0;
                                    }
                                } catch (e) { }
                            });
                        } else {
                            try {
                                mat.side = THREE.DoubleSide;
                                if (mat.opacity === undefined || mat.opacity === 1) {
                                    mat.transparent = true;
                                    mat.opacity = 1.0;
                                }
                            } catch (e) { }
                        }
                    }
                });
            } catch (e) {
                // ignore
            }
            setGltfMap((m) => ({ ...m, [i]: gltfAny }));
        } catch (e) {
            console.warn('Failed to load', url, e);
        }
    }, [gltfMap, pathPrefix]);

    // preload around current index — wait until loader is ready
    useEffect(() => {
        if (!loaderReady) return;
        loadIndex(index);
        for (let d = 1; d <= preload; ++d) {
            if (index + d < count) loadIndex(index + d);
            if (index - d >= 0) loadIndex(index - d);
        }
    }, [loaderReady, index, preload, count, loadIndex]);

    // playback loop
    useEffect(() => {
        if (!playing) {
            if (frameRef.current !== null) {
                cancelAnimationFrame(frameRef.current);
                frameRef.current = null;
            }
            return;
        }
        let last = performance.now();
        const interval = 1000 / fps;
        const step = (now: number) => {
            const elapsed = now - last;
            if (elapsed >= interval) {
                setIndex((i) => (i + 1) % count);
                last = now - (elapsed % interval);
            }
            frameRef.current = requestAnimationFrame(step);
        };
        frameRef.current = requestAnimationFrame(step);
        return () => {
            if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
            frameRef.current = null;
        };
    }, [playing, fps, count]);

    // simple cache trimming
    useEffect(() => {
        const keep = new Set<number>();
        for (let d = -preload; d <= preload; ++d) {
            const k = index + d;
            if (k >= 0 && k < count) keep.add(k);
        }
        setGltfMap((m) => {
            const next: Record<number, any> = {};
            for (const k of Object.keys(m)) {
                const ki = Number(k);
                if (keep.has(ki)) next[ki] = m[ki];
            }
            return next;
        });
    }, [index, preload, count]);

    // ensure controls target is fixed once
    useEffect(() => {
        if (controlsRef.current && controlsRef.current.target) {
            try { controlsRef.current.target.set(0, 0, 0); } catch (e) { }
        }
    }, []);

    return (
        <div>
            <div className="w-full h-[420px] bg-white rounded-lg overflow-hidden shadow-lg">
                <Canvas>
                    {/* orthographic camera for 2D-like view while preserving depth */}
                    <OrthographicCamera makeDefault position={[-1, -2, 3]} zoom={150} near={0.1} far={1000} />
                    <ambientLight intensity={0.3} />
                    {/* hemisphere gives soft sky/ground fill for PBR materials */}
                    <hemisphereLight color={0xffffff} groundColor={0x888888} intensity={1.0} />
                    {/* stronger directional key light */}
                    <directionalLight position={[1, 0, 5]} intensity={1.2} />
                    <OrbitControls ref={controlsRef} enablePan enableZoom enableRotate />
                    <Suspense fallback={null}>
                        {/* disable Stage auto camera adjustment to avoid re-centering when models swap */}
                        <Stage environment={"studio"} intensity={1} adjustCamera={false}>
                            {gltfMap[index] ? <primitive object={gltfMap[index].scene} dispose={null} /> : null}
                        </Stage>
                    </Suspense>
                </Canvas>
            </div>

            <div className="flex items-center gap-3 mt-3">
                <button onClick={() => setPlaying((p) => !p)} className="px-3 py-1 border rounded">
                    {playing ? 'Pause' : 'Play'}
                </button>
                <input
                    type="range"
                    min={0}
                    max={count - 1}
                    value={index}
                    onChange={(e) => { setIndex(Number(e.target.value)); setPlaying(false); }}
                    className="flex-1"
                />
                <div className="w-20 text-right">{index + 1}/{count}</div>
            </div>
        </div>
    );
}

const MorphingWing = () => (
    <section className="py-20 bg-background min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
                <div className="md:w-1/2">
                    <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">Morphing Wings for Sustainable Aviation</h1>
                    <p className="text-lg text-muted-foreground mb-4">
                        The BEALIVE Horizon Europe project focuses on the aerodynamic optimization of aircraft wings with oscillating actuators, inspired by biological mechanisms found in shark skin and bird wings. By studying the interaction between actuator-induced vortices and the turbulent wake, the research aims to enhance lift-to-drag performance and reduce noise.
                        Unsteady CFD simulations are performed to analyze how varying the actuator’s amplitude and frequency influences aerodynamic efficiency. The ultimate objective is to create a “live skin” on the wing.
                    </p>
                    <ul className="list-disc list-inside text-lg text-muted-foreground mb-6">
                        <li>Unsteady CFD for actuator-driven wing morphing</li>
                        <li>Analysis of lift, drag, and noise impacts</li>
                        <li>Design guidance for live-skin actuators</li>
                    </ul>
                    <div className="mt-4">
                        <button className="text-primary hover:underline" onClick={() => { window.location.href = '/#projects'; }}>
                            ← Back to Projects
                        </button>
                    </div>
                </div>

                <div className="md:w-1/2 w-full">
                    {/* GLB sequence player: expects files named morphing_wing_1.glb .. morphing_wing_30.glb in public/projectimages */}
                    <GLBSequencePlayer count={30} pathPrefix={'/projectimages/morphing_wing_'} preload={3} fps={6} />
                </div>
            </div>
        </div>
    </section>
);

export default MorphingWing;
