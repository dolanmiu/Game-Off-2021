import * as THREE from 'three';

import { Controls } from './controls/controls';
import { FirstPersonGun } from './gun/first-person-gun';
import { createItem, itemFactoryUpdateLoop } from './item/item-factory';
import { LevelGenerator } from './level/level-generator';
import { Player } from './player/player';

export const runGame = async (): Promise<void> => {
   let camera: THREE.PerspectiveCamera;
   let scene: THREE.Scene;
   let renderer: THREE.WebGLRenderer;
   let controls: Controls;
   let gun: FirstPersonGun;
   let levelGenerator: LevelGenerator;

   let prevTime = performance.now();

   await init();
   animate();

   async function init() {
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
      camera.position.y = 10;

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

      scene.add(camera);

      levelGenerator = new LevelGenerator(scene);

      gun = new FirstPersonGun(camera, scene);

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
      controls.update(delta, levelGenerator.Objects);
      gun.update(delta);
      prevTime = time;

      itemFactoryUpdateLoop(time);
      renderer.render(scene, camera);
   }
};
