import * as THREE from 'three';

import { Controls } from './controls/controls';
import { FirstPersonGun } from './gun/first-person-gun';

export const runGame = (): void => {
   let camera: THREE.PerspectiveCamera;
   let scene: THREE.Scene;
   let renderer: THREE.WebGLRenderer;
   let controls: Controls;
   let gun: FirstPersonGun;

   const objects: THREE.Object3D[] = [];

   let prevTime = performance.now();
   const vertex = new THREE.Vector3();
   const color = new THREE.Color();

   init();
   animate();

   function init() {
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
      camera.position.y = 10;

      scene = new THREE.Scene();
      scene.background = new THREE.Color(0xffffff);
      scene.fog = new THREE.Fog(0xffffff, 0, 750);

      const light = new THREE.HemisphereLight(0xeeeeff, 0x777788, 0.75);
      light.position.set(0.5, 1, 0.75);
      scene.add(light);

      const overlay = document.getElementById('overlay');
      const playButton = document.getElementById('play-button');

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

      // floor

      let floorGeometry: THREE.BufferGeometry = new THREE.PlaneGeometry(2000, 2000, 100, 100);
      floorGeometry.rotateX(-Math.PI / 2);

      // vertex displacement

      let position = floorGeometry.attributes.position;

      for (let i = 0, l = position.count; i < l; i++) {
         vertex.fromBufferAttribute(position, i);

         vertex.x += Math.random() * 20 - 10;
         vertex.y += Math.random() * 2;
         vertex.z += Math.random() * 20 - 10;

         position.setXYZ(i, vertex.x, vertex.y, vertex.z);
      }

      floorGeometry = floorGeometry.toNonIndexed(); // ensure each face has unique vertices

      position = floorGeometry.attributes.position;
      const colorsFloor = [];

      for (let i = 0, l = position.count; i < l; i++) {
         color.setHSL(Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75);
         colorsFloor.push(color.r, color.g, color.b);
      }

      floorGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colorsFloor, 3));

      const floorMaterial = new THREE.MeshBasicMaterial({ vertexColors: true });

      const floor = new THREE.Mesh(floorGeometry, floorMaterial);
      scene.add(floor);

      // objects

      const boxGeometry = new THREE.BoxGeometry(20, 20, 20).toNonIndexed();

      position = boxGeometry.attributes.position;
      const colorsBox = [];

      for (let i = 0, l = position.count; i < l; i++) {
         color.setHSL(Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75);
         colorsBox.push(color.r, color.g, color.b);
      }

      boxGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colorsBox, 3));

      for (let i = 0; i < 500; i++) {
         const boxMaterial = new THREE.MeshPhongMaterial({ specular: 0xffffff, flatShading: true, vertexColors: true });
         boxMaterial.color.setHSL(Math.random() * 0.2 + 0.5, 0.75, Math.random() * 0.25 + 0.75);

         const box = new THREE.Mesh(boxGeometry, boxMaterial);
         box.position.x = Math.floor(Math.random() * 20 - 10) * 20;
         box.position.y = Math.floor(Math.random() * 20) * 20 + 10;
         box.position.z = Math.floor(Math.random() * 20 - 10) * 20;

         scene.add(box);
         objects.push(box);
      }

      gun = new FirstPersonGun(camera, scene);

      //

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      //

      window.addEventListener('resize', onWindowResize);
   }

   function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
   }

   function animate() {
      requestAnimationFrame(animate);
      const time = performance.now();
      const delta = (time - prevTime) / 1000;
      controls.update(delta, objects);
      gun.update(delta);
      prevTime = time;
      renderer.render(scene, camera);
   }
};
