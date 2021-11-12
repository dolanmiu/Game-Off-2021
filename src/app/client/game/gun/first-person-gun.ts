import { Audio, AudioListener, AudioLoader, Camera, Raycaster, Scene, Vector2 } from 'three';

export class FirstPersonGun {
   private raycaster: Raycaster;
   private mousePosition: Vector2;

   public constructor(camera: Camera, scene: Scene) {
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
