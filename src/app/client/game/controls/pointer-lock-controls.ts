// Based on: https://github.com/mrdoob/three.js/blob/master/examples/jsm/controls/PointerLockControls.js
import { Camera, Euler, EventDispatcher, Vector3 } from 'three';

const _euler = new Euler(0, 0, 0, 'YXZ');
const _vector = new Vector3();

const _changeEvent = { type: 'change' };
const _lockEvent = { type: 'lock' };
const _unlockEvent = { type: 'unlock' };

const _PI_2 = Math.PI / 2;

export class PointerLockControls extends EventDispatcher {
   public isLocked = false;
   public connect;
   public disconnect;
   public dispose;
   public getDirection;
   public moveForward;
   public moveRight;
   public lock;
   public unlock;

   // Set to constrain the pitch of the camera
   // Range is 0 to Math.PI radians
   public minPolarAngle = 0; // radians
   public maxPolarAngle = Math.PI; // radians

   constructor(public readonly camera: Camera, private readonly domElement: HTMLElement) {
      super();

      this.connect = () => {
         this.domElement.ownerDocument.addEventListener('mousemove', (event: MouseEvent) => {
            if (this.isLocked === false) return;

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const movementX = event.movementX || (event as any).mozMovementX || (event as any).webkitMovementX || 0;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const movementY = event.movementY || (event as any).mozMovementY || (event as any).webkitMovementY || 0;

            _euler.setFromQuaternion(camera.quaternion);

            _euler.y -= movementX * 0.002;
            _euler.x -= movementY * 0.002;

            _euler.x = Math.max(_PI_2 - this.maxPolarAngle, Math.min(_PI_2 - this.minPolarAngle, _euler.x));

            camera.quaternion.setFromEuler(_euler);

            this.dispatchEvent(_changeEvent);
         });

         this.domElement.ownerDocument.addEventListener('pointerlockchange', () => {
            if (this.domElement.ownerDocument.pointerLockElement === this.domElement) {
               this.dispatchEvent(_lockEvent);

               this.isLocked = true;
            } else {
               this.dispatchEvent(_unlockEvent);

               this.isLocked = false;
            }
         });

         this.domElement.ownerDocument.addEventListener('pointerlockerror', () => {
            console.error('THREE.PointerLockControls: Unable to use Pointer Lock API');
         });
      };

      this.disconnect = function () {
         this.domElement.ownerDocument.removeEventListener('mousemove');
         this.domElement.ownerDocument.removeEventListener('pointerlockchange');
         this.domElement.ownerDocument.removeEventListener('pointerlockerror');
      };

      this.dispose = function () {
         this.disconnect();
      };

      this.getDirection = (() => {
         const direction = new Vector3(0, 0, -1);

         return (v: Vector3) => v.copy(direction).applyQuaternion(camera.quaternion);
      })();

      this.moveForward = (distance: number) => {
         // move forward parallel to the xz-plane
         // assumes camera.up is y-up

         _vector.setFromMatrixColumn(camera.matrix, 0);

         _vector.crossVectors(camera.up, _vector);

         camera.position.addScaledVector(_vector, distance);
      };

      this.moveRight = (distance: number) => {
         _vector.setFromMatrixColumn(camera.matrix, 0);

         camera.position.addScaledVector(_vector, distance);
      };

      this.lock = function () {
         console.log(this.domElement.requestPointerLock);
         this.domElement.requestPointerLock();
      };

      this.unlock = function () {
         this.domElement.ownerDocument.exitPointerLock();
      };

      this.connect();
   }
}
