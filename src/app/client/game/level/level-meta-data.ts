import { Vector3 } from 'three';

export const LEVEL_META_DATA = {
   map: [
      [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
   ],
};

const spawnPoints: Vector3[] = [];

const getSpawnPoints = (): Vector3[] => {
   if (spawnPoints.length > 0) {
      return spawnPoints;
   }

   for (let i = 0; i < LEVEL_META_DATA.map.length; i++) {
      for (let j = 0; j < LEVEL_META_DATA.map[i].length; j++) {
         if (LEVEL_META_DATA.map[i][j] === 0) {
            spawnPoints.push(new Vector3(i, 0, j));
         }
      }
   }

   return spawnPoints;
};

export const getRandomSpawnPoint = (): Vector3 => {
   const spawnPoints = getSpawnPoints();
   const index = Math.floor(Math.random() * spawnPoints.length);

   return spawnPoints[index];
};
