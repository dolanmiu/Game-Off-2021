import { Box3, Camera, Object3D, Raycaster, Sphere, Vector3 } from 'three';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls';

import { MovementControls } from './movement-controls';

export class Controls {
   private readonly pointerLockControls: PointerLockControls;
   private readonly movementControls: MovementControls;
   private readonly raycaster: Raycaster;
   private readonly sphere: Sphere;

   public constructor(private readonly camera: Camera, domElement: HTMLElement, onLock: () => void, onUnlock: () => void) {
      this.movementControls = new MovementControls();
      this.pointerLockControls = new PointerLockControls(camera, domElement);
      this.pointerLockControls.addEventListener('lock', onLock);
      this.pointerLockControls.addEventListener('unlock', onUnlock);

      this.raycaster = new Raycaster(new Vector3(), new Vector3(0, -1, 0), 0, 10);

      this.sphere = new Sphere(this.camera.position, 5);
   }

   public update(delta: number, objects: Object3D[]): void {
      if (this.pointerLockControls.isLocked === true) {
         this.raycaster.ray.origin.copy(this.camera.position);
         this.raycaster.ray.origin.y -= 10;

         for (const o of objects) {
            this.sphere.center = this.camera.position;
            const boundingBox = new Box3().setFromObject(o);
            if (this.sphere.intersectsBox(boundingBox)) {
               this.movementControls.Velocity.z = 0;
               this.movementControls.Velocity.x = 0;
            }
         }

         this.movementControls.update(delta, this.pointerLockControls.isLocked);
         if (this.raycaster.intersectObjects(objects, false).length > 0) {
            this.movementControls.Velocity.y = Math.max(0, this.movementControls.Velocity.y);
            this.movementControls.canJump = true;
         }

         this.pointerLockControls.moveRight(-this.movementControls.Velocity.x * delta);
         this.pointerLockControls.moveForward(-this.movementControls.Velocity.z * delta);

         this.camera.position.y += this.movementControls.Velocity.y * delta; // new behavior

         if (this.camera.position.y < 10) {
            this.movementControls.Velocity.y = 0;
            this.camera.position.y = 10;

            this.movementControls.canJump = true;
         }
      }
   }

   public lock(): void {
      this.pointerLockControls.lock();
   }

   public get isLocked(): boolean {
      return this.pointerLockControls.isLocked;
   }
}
