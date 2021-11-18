import { Vector3 } from 'three';

export class MovementControls {
   private moveForward = false;
   private moveBackward = false;
   private moveLeft = false;
   private moveRight = false;
   public canJump = false;
   private velocity = new Vector3();
   private direction = new Vector3();

   public constructor() {
      document.addEventListener('keydown', (event: KeyboardEvent) => {
         switch (event.code) {
            case 'ArrowUp':
            case 'KeyW':
               console.log('move forward');
               this.moveForward = true;
               break;

            case 'ArrowLeft':
            case 'KeyA':
               this.moveLeft = true;
               break;

            case 'ArrowDown':
            case 'KeyS':
               this.moveBackward = true;
               break;

            case 'ArrowRight':
            case 'KeyD':
               this.moveRight = true;
               break;

            case 'Space':
               if (this.canJump === true) {
                  this.velocity.y += 350;
               }
               this.canJump = false;
               break;
         }
      });

      document.addEventListener('keyup', (event: KeyboardEvent) => {
         switch (event.code) {
            case 'ArrowUp':
            case 'KeyW':
               this.moveForward = false;
               break;

            case 'ArrowLeft':
            case 'KeyA':
               this.moveLeft = false;
               break;

            case 'ArrowDown':
            case 'KeyS':
               this.moveBackward = false;
               break;

            case 'ArrowRight':
            case 'KeyD':
               this.moveRight = false;
               break;
         }
      });
   }

   public update(delta: number, isLocked: boolean): void {
      if (isLocked) {
         this.velocity.x -= this.velocity.x * 10.0 * delta;
         this.velocity.z -= this.velocity.z * 10.0 * delta;

         this.velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass

         this.direction.z = Number(this.moveForward) - Number(this.moveBackward);
         this.direction.x = Number(this.moveRight) - Number(this.moveLeft);
         this.direction.normalize(); // this ensures consistent movements in all directions

         if (this.moveForward || this.moveBackward) this.velocity.z -= this.direction.z * 400.0 * delta;
         if (this.moveLeft || this.moveRight) this.velocity.x -= this.direction.x * 400.0 * delta;
      }
   }

   public get Velocity(): Vector3 {
      return this.velocity;
   }
}
