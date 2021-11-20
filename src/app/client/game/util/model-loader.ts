import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const loader = new GLTFLoader();

const mem = new Map<string, GLTF>();

const loadObject = async (assetPath: string): Promise<GLTF> => {
   const model = await loader.loadAsync(assetPath);
   return model;
};

export const memoizedLoad = async (assetPath: string): Promise<GLTF> => {
   if (mem.has(assetPath)) {
      return mem.get(assetPath) as GLTF;
   }

   const item = await loadObject(assetPath);
   mem.set(assetPath, item);

   return item;
};
