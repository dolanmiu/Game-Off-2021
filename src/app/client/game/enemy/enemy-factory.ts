import { AnimationClip, AnimationMixer, Object3D, Vector3 } from 'three';
import * as PF from 'pathfinding';

import { memoizedLoad } from '../util/model-loader';
import { BLOCK_SIZE } from '../util/constants';

let pathFindingGrid: PF.Grid | undefined;
const pathFinder = new PF.AStarFinder({
   diagonalMovement: PF.DiagonalMovement.OnlyWhenNoObstacles,
});
interface Enemy {
   readonly mixer: AnimationMixer;
   readonly animations: AnimationClip[];
   readonly model: Object3D;
   readonly state: {
      nextCell: Vector3;
   };
}

const enemies: Enemy[] = [];

export const enemyFactoryUpdateLoop = (delta: number, playerPosition: Vector3): void => {
   for (const { mixer, animations, model, state } of enemies) {
      mixer.update(delta);

      const modelPositionX = Math.floor(model.position.x / BLOCK_SIZE);
      const modelPositionZ = Math.floor(model.position.z / BLOCK_SIZE);
      if (pathFindingGrid) {
         const playerPositionX = Math.floor(playerPosition.x / BLOCK_SIZE);
         const playerPositionZ = Math.floor(playerPosition.z / BLOCK_SIZE);
         if (
            playerPositionX < pathFindingGrid.width &&
            playerPositionX > 0 &&
            playerPositionZ > 0 &&
            playerPositionZ < pathFindingGrid.height
         ) {
            const [_, next] = pathFinder.findPath(
               modelPositionX,
               modelPositionZ,
               playerPositionX,
               playerPositionZ,
               pathFindingGrid.clone(),
            );
            if (next) {
               state.nextCell = new Vector3(next[0], 0, next[1]);
            }
         }
      }

      const newV = new Vector3(modelPositionX, 0, modelPositionZ).sub(state.nextCell).normalize();
      console.log(newV, state.nextCell);
      model.position.x -= newV.x;
      model.position.z -= newV.z;
      model.rotation.y = Math.atan2(playerPosition.x - model.position.x, playerPosition.z - model.position.z);

   }
};

export const createEnemy = async ({ position }: { readonly position: Vector3 }, map: number[][]): Promise<Object3D> => {
   if (!pathFindingGrid) {
      pathFindingGrid = new PF.Grid(map);
   }

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
      state: {
         nextCell: position.clone(),
      },
      model,
   });

   return model;
};
