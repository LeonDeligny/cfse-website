// Shim declarations for three.js example modules to satisfy TypeScript
// This prevents "Cannot find module 'three/examples/jsm/...')" compile errors.

declare module 'three/examples/jsm/loaders/GLTFLoader' {
    import { Loader, LoadingManager } from 'three';
    import { GLTF } from 'three-stdlib';
    export class GLTFLoader extends Loader {
        constructor(manager?: LoadingManager);
        load(url: string, onLoad: (gltf: any) => void, onProgress?: (ev: ProgressEvent) => void, onError?: (err: ErrorEvent) => void): void;
        parse(data: ArrayBuffer | string, path: string, onLoad: (gltf: any) => void): void;
    }
    export default GLTFLoader;
}

declare module 'three/examples/jsm/loaders/DRACOLoader' {
    import { Loader } from 'three';
    export class DRACOLoader extends Loader {
        constructor();
        setDecoderPath(path: string): void;
        setDecoderConfig(config: any): void;
        decodeDracoFile(arrayBuffer: ArrayBuffer, callback: (geometry: any) => void): void;
    }
    export default DRACOLoader;
}

// Generic fallback for other example modules (if you import more, add specific types above)
declare module 'three/examples/jsm/*';
