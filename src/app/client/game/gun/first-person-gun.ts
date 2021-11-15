import { Audio, AudioListener, AudioLoader, Camera, Raycaster, Scene, Vector2 } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export class FirstPersonGun {
   private raycaster: Raycaster;
   private mousePosition: Vector2;

   public constructor(camera: Camera, scene: Scene) {
      const loader = new GLTFLoader();

      loader.load(
         'assets/models/hand-gun.glb',
         (model) => {
            console.log(model);
            model.scene.position.set(1, -0.5, -1.5);
            model.scene.rotation.set(0, (Math.PI * 2) / 4 + Math.PI, 0);
            model.scene.scale.set(2, 2, 2);
            camera.add(model.scene);
         },
         undefined,
         (error) => {
            console.error(error);
         },
      );

      this.mousePosition = new Vector2();
      this.raycaster = new Raycaster();
      window.addEventListener(
         'mousemove',
         (event) => {
            this.mousePosition.x = (event.clientX / window.innerWidth) * 2 - 1;
            this.mousePosition.y = -(event.clientY / window.innerHeight) * 2 + 1;
         },
         false,
      );

      const listener = new AudioListener();
      camera.add(listener);

      const sound = new Audio(listener);

      const audioLoader = new AudioLoader();
      audioLoader.load('assets/sounds/gunshot.ogg', (buffer) => {
         sound.setBuffer(buffer);
         sound.setVolume(0.5);
      });

      window.addEventListener('click', () => {
         this.raycaster.setFromCamera(this.mousePosition, camera);

         const intersects = this.raycaster.intersectObjects(scene.children);

         for (let i = 0; i < intersects.length; i++) {
            console.log('shooting at', intersects[i].object);
            //  intersects[i].object.material.color.set(0xff0000);
         }
         sound.play();
      });
   }
}
