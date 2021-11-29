import * as THREE from 'three';
import { BufferGeometry, Object3D, PerspectiveCamera, Vector3 } from 'three';

import { Controls } from './controls/controls';
import { createEnemy, enemyFactoryUpdateLoop, resetEnemy } from './enemy/enemy-factory';
import { FirstPersonGun } from './gun/first-person-gun';
import { createItem, itemFactoryUpdateLoop } from './item/item-factory';
import { LevelGenerator } from './level/level-generator';
import { LEVEL_META_DATA } from './level/level-meta-data';
import { Player } from './player/player';
import { BLOCK_SIZE } from './util/constants';

export const runGame = async (): Promise<void> => {
   let camera: THREE.PerspectiveCamera;
   let scene: THREE.Scene;
   let renderer: THREE.WebGLRenderer;
   let controls: Controls;
   let gun: FirstPersonGun;
   let levelGenerator: LevelGenerator;
   let ant: Object3D;

   let prevTime = performance.now();

   await init();
   animate();

   async function init() {
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
      camera.position.y = 10;
      camera.position.x = 20;
      camera.position.z = 20;

      scene = new THREE.Scene();
      scene.background = new THREE.Color(0xffffff);
      scene.fog = new THREE.Fog(0xffffff, 0, 750);

      const light = new THREE.AmbientLight(0xeeeeff, 20);
      light.position.set(0.5, 1, 0.75);
      scene.add(light);

      const overlay = document.getElementById('overlay');
      const playButton = document.getElementById('play-button');

      const object = await createItem({
         position: new THREE.Vector3(10, 20, 10),
      });

      scene.add(object);

      ant = await createEnemy(
         {
            position: new THREE.Vector3(5 * BLOCK_SIZE, 0, 5 * BLOCK_SIZE),
         },
         LEVEL_META_DATA.map,
      );

      scene.add(ant);

      const player = new Player();

      controls = new Controls(
         camera,
         document.body,
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
         playButton.addEventListener('click', function () {
            controls.lock();
         });
      }

      createCrossHair(camera);
      scene.add(camera);

      levelGenerator = new LevelGenerator(scene);

      gun = new FirstPersonGun(camera, scene, async (id) => {
         await resetEnemy(scene, id, LEVEL_META_DATA.map);
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
      const time = performance.now();
      const delta = (time - prevTime) / 1000;
      controls.update(delta, levelGenerator.Objects, [ant]);
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
      new THREE.LineBasicMaterial({ color: 0x000000 }),
   );

   crosshair.position.set(0, 0, -1);

   camera.add(crosshair);
}
