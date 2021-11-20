import { Object3D, Vector3 } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const loader = new GLTFLoader();

let item: Object3D | undefined = undefined;

const items: Object3D[] = [];

export const itemFactoryUpdateLoop = (time: number): void => {
   for (const item of items) {
      item.rotateY(0.01);
      item.children[0].position.setY(Math.sin(time / 200) * 0.2);
   }
};

const loadObject = async (): Promise<Object3D> => {
   const model = await loader.loadAsync('assets/models/ammo-box.glb');
   item = model.scene;
   return item;
};

const memoizedLoad = async (): Promise<Object3D> => {
   if (item !== undefined) {
      return item;
   }

   return loadObject();
};

export const createItem = async ({ position }: { readonly position: Vector3 }): Promise<Object3D> => {
   const parent = new Object3D();
   parent.position.set(position.x, position.y, position.z);
   const object = (await memoizedLoad()).clone();
   object.scale.set(6, 6, 6);
   parent.add(object);

   items.push(parent);

   return parent;
};
