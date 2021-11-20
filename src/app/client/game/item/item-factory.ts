import { Object3D, Vector3 } from 'three';

import { memoizedLoad } from '../util/model-loader';

const items: Object3D[] = [];

export const itemFactoryUpdateLoop = (time: number): void => {
   for (const item of items) {
      item.rotateY(0.01);
      item.children[0].position.setY(Math.sin(time / 200) * 0.2);
   }
};

export const createItem = async ({ position }: { readonly position: Vector3 }): Promise<Object3D> => {
   const parent = new Object3D();
   parent.position.set(position.x, position.y, position.z);
   const gltf = await memoizedLoad('assets/models/ammo-box.glb');
   const object = gltf.scene.clone();
   object.scale.set(6, 6, 6);
   parent.add(object);

   items.push(parent);

   return parent;
};
