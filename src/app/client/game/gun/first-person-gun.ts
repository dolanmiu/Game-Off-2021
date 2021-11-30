import { Audio, AudioListener, AudioLoader, Camera, Group, Object3D, Raycaster, Scene, Vector2 } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export class FirstPersonGun {
   private raycaster: Raycaster;
   private mousePosition: Vector2;
   private bob = 0;
   private isBobbing = false;
   private gunModel: Group | undefined;
   private downKey: string | undefined;

   public constructor(camera: Camera, scene: Scene, listener: AudioListener, shootCallback: (object: Object3D) => void) {
      const loader = new GLTFLoader();

      loader.load(
         'assets/models/hand-gun.glb',
         (model) => {
            model.scene.position.set(1, -0.5, -1.5);
            model.scene.rotation.set(0, (Math.PI * 2) / 4 + Math.PI, 0);
            model.scene.scale.set(2, 2, 2);
            this.gunModel = model.scene;
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

      const sound = new Audio(listener);

      const audioLoader = new AudioLoader();
      audioLoader.load('assets/sounds/gunshot.ogg', (buffer) => {
         sound.setBuffer(buffer);
         sound.setVolume(0.1);
      });

      window.addEventListener('click', () => {
         this.raycaster.setFromCamera(this.mousePosition, camera);

         const intersects = this.raycaster.intersectObjects(scene.children);

         for (let i = 0; i < intersects.length; i++) {
            shootCallback(intersects[i].object);
         }
         if (sound.isPlaying) {
            sound.stop();
         }
         sound.play();
      });

      document.addEventListener('keydown', (event: KeyboardEvent) => {
         switch (event.code) {
            case 'ArrowUp':
            case 'KeyW':
            case 'ArrowLeft':
            case 'KeyA':
            case 'ArrowDown':
            case 'KeyS':
            case 'ArrowRight':
            case 'KeyD':
               if (!this.downKey) {
                  this.downKey = event.code;
               }
               this.isBobbing = true;
               break;
         }
      });

      document.addEventListener('keyup', (event: KeyboardEvent) => {
         if (event.code === this.downKey) {
            this.isBobbing = false;
            this.downKey = undefined;
         }
      });
   }

   public update(delta: number): void {
      if (this.isBobbing) {
         this.bob += delta * 10;
         this.bob = this.bob % Number.MAX_VALUE;
         const bobAmount = Math.sin(this.bob) * 0.02;
         this.gunModel?.position.setY(-0.5 + bobAmount);
      }
   }
}
