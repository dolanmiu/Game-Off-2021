import * as THREE from 'three';
import { Audio, AudioListener, AudioLoader, BufferGeometry, PerspectiveCamera, Vector3 } from 'three';

import { Controls } from './controls/controls';
import { createEnemy, enemyFactoryUpdateLoop, killAllEnemies, loadEnemyAudio, resetEnemy } from './enemy/enemy-factory';
import { FirstPersonGun } from './gun/first-person-gun';
import { createItem, itemFactoryUpdateLoop } from './item/item-factory';
import { LevelGenerator } from './level/level-generator';
import { getRandomSpawnPoint } from './level/level-meta-data';
import { BLOCK_SIZE } from './util/constants';

let gameEnd = false;
let win = false;

export const runGame = async (): Promise<void> => {
   let camera: THREE.PerspectiveCamera;
   let scene: THREE.Scene;
   let renderer: THREE.WebGLRenderer;
   let controls: Controls;
   let gun: FirstPersonGun;
   let levelGenerator: LevelGenerator;
   let gameOverSound: Audio;
   let winSound: Audio;

   let prevTime = performance.now();

   const overlay = document.getElementById('overlay');
   const playButton = document.getElementById('play-button');
   const gameOverOverlay = document.getElementById('game-over-overlay');
   const replayButton = document.getElementById('replay-button');
   const winOverlay = document.getElementById('win-overlay');

   await init();
   animate();

   async function init() {
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
      camera.position.y = 10;
      camera.position.x = 20 - (BLOCK_SIZE / 2);
      camera.position.z = 20 - (BLOCK_SIZE / 2);

      const listener = new AudioListener();
      camera.add(listener);

      loadEnemyAudio(listener);

      const audioLoader = new AudioLoader();
      gameOverSound = new Audio(listener);
      audioLoader.load('assets/sounds/game-over.wav', (buffer) => {
         gameOverSound.setBuffer(buffer);
         gameOverSound.setVolume(1);
      });
      winSound = new Audio(listener);
      audioLoader.load('assets/sounds/win.wav', (buffer) => {
         winSound.setBuffer(buffer);
         winSound.setVolume(0.5);
      });

      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x000000);
      scene.fog = new THREE.Fog(0x000000, 0, 100);

      const light = new THREE.AmbientLight(0xeeeeff, 20);
      light.position.set(0.5, 1, 0.75);
      scene.add(light);

      const randomPosition = getRandomSpawnPoint();

      scene.add(
         await createEnemy({
            position: new THREE.Vector3(randomPosition.x * BLOCK_SIZE, 0, randomPosition.z * BLOCK_SIZE),
         }),
      );

      const goal = await createItem({
         position: new THREE.Vector3(
            randomPosition.x * BLOCK_SIZE + BLOCK_SIZE / 2,
            BLOCK_SIZE / 4,
            randomPosition.z * BLOCK_SIZE + BLOCK_SIZE / 2,
         ),
      });

      scene.add(goal);

      controls = new Controls(
         camera,
         document.body,
         goal,
         () => {
            if (overlay) {
               overlay.style.display = 'none';
            }
         },
         () => {
            if (overlay) {
               overlay.style.display = 'flex';
            }
         },
      );

      if (playButton) {
         playButton.addEventListener('click', () => {
            controls.lock();
         });
      }

      if (replayButton) {
         replayButton.addEventListener('click', async () => {
            gameEnd = false;
            controls.lock();
            if (gameOverOverlay) {
               gameOverOverlay.style.display = 'none';
            }
            scene.add(
               await createEnemy({
                  position: new THREE.Vector3(randomPosition.x * BLOCK_SIZE, 0, randomPosition.z * BLOCK_SIZE),
               }),
            );
            camera.position.y = 10;
            camera.position.x = 20;
            camera.position.z = 20;
         });
      }

      createCrossHair(camera);
      scene.add(camera);

      levelGenerator = new LevelGenerator(scene);

      gun = new FirstPersonGun(camera, scene, listener, async (id) => {
         await resetEnemy(scene, id);
      });

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      window.addEventListener('resize', () => {
         camera.aspect = window.innerWidth / window.innerHeight;
         camera.updateProjectionMatrix();

         renderer.setSize(window.innerWidth, window.innerHeight);
      });
   }

   function animate() {
      requestAnimationFrame(animate);

      if (gameEnd || win) {
         return;
      }

      if (overlay) {
         if (overlay.style.display === 'flex') {
            return;
         }
      }

      const time = performance.now();
      const delta = (time - prevTime) / 1000;
      controls.update(
         delta,
         levelGenerator.Objects,
         () => {
            controls.unlock();
            gameEnd = true;
            gameOverSound.play();
            killAllEnemies(scene);
            if (gameOverOverlay) {
               gameOverOverlay.style.display = 'flex';
            }
            if (overlay) {
               overlay.style.display = 'none';
            }
         },
         () => {
            win = true;
            winSound.play();
            if (winOverlay) {
               winOverlay.style.display = 'flex';
            }
         },
      );
      gun.update(delta);
      prevTime = time;

      itemFactoryUpdateLoop(time);
      enemyFactoryUpdateLoop(delta, camera.position);
      renderer.render(scene, camera);
   }
};

function createCrossHair(camera: PerspectiveCamera) {
   const width = 0.02;
   const height = 0.02;

   const crosshair = new THREE.Line(
      new BufferGeometry().setFromPoints([
         new Vector3(0, height, 0),
         new Vector3(0, -height, 0),
         new Vector3(0, 0, 0),
         new Vector3(width, 0, 0),
         new Vector3(-width, 0, 0),
      ]),
      new THREE.LineBasicMaterial({ color: 0xffffff }),
   );

   crosshair.position.set(0, 0, -1);

   camera.add(crosshair);
}
