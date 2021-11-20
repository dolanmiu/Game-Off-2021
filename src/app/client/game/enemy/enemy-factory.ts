import { AnimationClip, AnimationMixer, Object3D, Vector3 } from 'three';

import { memoizedLoad } from '../util/model-loader';

const enemies: { readonly mixer: AnimationMixer; readonly animations: AnimationClip[] }[] = [];

export const enemyFactoryUpdateLoop = (delta: number): void => {
   for (const { mixer, animations } of enemies) {
      mixer.update(delta);
   }
};

export const createEnemy = async ({ position }: { readonly position: Vector3 }): Promise<Object3D> => {
   const gltf = await memoizedLoad('assets/models/hench-ant.glb');
   const model = gltf.scene;
   model.position.set(position.x, position.y, position.z);
   model.scale.set(10, 10, 10);
   model.rotation.set(0, (Math.PI * 2) / 4 + Math.PI, 0);

   const mixer = new AnimationMixer(model);
   console.log(gltf.animations);
   const clip = gltf.animations[2];
   mixer.clipAction(clip).play();

   enemies.push({
      mixer,
      animations: gltf.animations,
   });

   return model;
};
