import { Camera, Object3D, Raycaster, Vector3 } from 'three';

import { MovementControls } from './movement-controls';
import { PointerLockControls } from './pointer-lock-controls';

export class Controls {
   private readonly pointerLockControls: PointerLockControls;
   private readonly movementControls: MovementControls;
   private readonly raycaster: THREE.Raycaster;

   public constructor(camera: Camera, domElement: HTMLElement, onLock: () => void, onUnlock: () => void) {
      this.movementControls = new MovementControls();
      this.pointerLockControls = new PointerLockControls(camera, domElement);
      this.pointerLockControls.addEventListener('lock', onLock);
      this.pointerLockControls.addEventListener('unlock', onUnlock);

      this.raycaster = new Raycaster(new Vector3(), new Vector3(0, -1, 0), 0, 10);
   }

   public update(delta: number, objects: Object3D[]): void {
      if (this.pointerLockControls.isLocked === true) {
         this.raycaster.ray.origin.copy(this.pointerLockControls.camera.position);
         this.raycaster.ray.origin.y -= 10;

         const intersections = this.raycaster.intersectObjects(objects, false);

         const onObject = intersections.length > 0;

         this.movementControls.update(delta, this.pointerLockControls.isLocked);

         if (onObject === true) {
            this.movementControls.Velocity.y = Math.max(0, this.movementControls.Velocity.y);
            this.movementControls.canJump = true;
         }

         this.pointerLockControls.moveRight(-this.movementControls.Velocity.x * delta);
         this.pointerLockControls.moveForward(-this.movementControls.Velocity.z * delta);

         this.pointerLockControls.camera.position.y += this.movementControls.Velocity.y * delta; // new behavior

         if (this.pointerLockControls.camera.position.y < 10) {
            this.movementControls.Velocity.y = 0;
            this.pointerLockControls.camera.position.y = 10;

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
