import { AnimationClip, AnimationMixer, AudioListener, AudioLoader, Object3D, PositionalAudio, Scene, Vector3 } from 'three';
import * as PF from 'pathfinding';

import { memoizedLoad } from '../util/model-loader';
import { BLOCK_SIZE } from '../util/constants';
import { getRandomSpawnPoint, LEVEL_META_DATA } from '../level/level-meta-data';

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

let sound: PositionalAudio;
export const loadEnemyAudio = (listener: AudioListener): void => {
   sound = new PositionalAudio(listener);
   const audioLoader = new AudioLoader();
   audioLoader.load('assets/sounds/stomp.wav', (buffer) => {
      sound.setVolume(1);
      sound.setRolloffFactor(2);
      sound.setBuffer(buffer);
      sound.setLoop(true);
      setInterval(() => {
         sound.setDetune(Math.random() * 500);
      }, 500);
   });
};

export const enemies = new Map<number, Enemy>();

export const enemyFactoryUpdateLoop = (delta: number, playerPosition: Vector3): void => {
   for (const [, { mixer, model, state }] of enemies) {
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
            try {
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
            } catch {
               const pos = getRandomSpawnPoint();
               model.position.set(pos.x * BLOCK_SIZE, 0, pos.z * BLOCK_SIZE);
            }
         }
      }

      const newV = new Vector3(modelPositionX, 0, modelPositionZ).sub(state.nextCell).normalize();
      model.position.x -= newV.x / 2;
      model.position.z -= newV.z / 2;
      model.rotation.y = Math.atan2(playerPosition.x - model.position.x, playerPosition.z - model.position.z);
   }
};

export const createEnemy = async ({ position }: { readonly position: Vector3 }): Promise<Object3D> => {
   if (!pathFindingGrid) {
      pathFindingGrid = new PF.Grid(LEVEL_META_DATA.map);
   }

   const gltf = await memoizedLoad('assets/models/hench-ant.glb');
   const model = gltf.scene;
   model.position.set(position.x, position.y, position.z);
   model.scale.set(10, 10, 10);
   model.rotation.set(0, (Math.PI * 2) / 4 + Math.PI, 0);
   model.add(sound);
   setTimeout(() => {
      sound.play();
   }, 3000);

   const mixer = new AnimationMixer(model);
   const clip = gltf.animations[2];
   mixer.clipAction(clip).play();

   const enemy = {
      mixer,
      animations: gltf.animations,
      state: {
         nextCell: position.clone(),
      },
      model,
   };

   enemies.set(model.id, enemy);

   return model;
};

export const resetEnemy = async (scene: Scene, object: Object3D): Promise<void> => {
   const bodyPart = object;
   const spawnPoint = getRandomSpawnPoint();

   let curr = bodyPart;

   if (!curr) {
      return;
   }

   while (curr.parent !== null && !enemies.has(curr.id)) {
      curr = curr.parent;
   }

   if (!enemies.has(curr.id)) {
      return;
   }
   scene.remove(curr);
   enemies.delete(curr.id);
   const ant = await createEnemy({ position: new Vector3(spawnPoint.x * BLOCK_SIZE, 0, spawnPoint.z * BLOCK_SIZE) });
   scene.add(ant);
};

export const killAllEnemies = (scene: Scene): void => {
   for (const [, { model }] of enemies) {
      scene.remove(model);
      enemies.delete(model.id);
   }
   sound.stop();
};
