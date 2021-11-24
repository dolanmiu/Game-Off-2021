import {
   BoxGeometry,
   BufferGeometry,
   Color,
   Float32BufferAttribute,
   Mesh,
   MeshBasicMaterial,
   MeshPhongMaterial,
   Object3D,
   PlaneGeometry,
   Scene,
   Vector3,
} from 'three';

import { LEVEL_META_DATA } from './level-meta-data';

export class LevelGenerator {
   private readonly vertex = new Vector3();
   private readonly color = new Color();
   private objects: THREE.Object3D[] = [];

   public constructor(scene: Scene) {
      LEVEL_META_DATA;

      let floorGeometry: BufferGeometry = new PlaneGeometry(2000, 2000, 100, 100);
      floorGeometry.rotateX(-Math.PI / 2);

      // vertex displacement

      let position = floorGeometry.attributes.position;

      for (let i = 0, l = position.count; i < l; i++) {
         this.vertex.fromBufferAttribute(position, i);

         this.vertex.x += Math.random() * 20 - 10;
         this.vertex.y += Math.random() * 2;
         this.vertex.z += Math.random() * 20 - 10;

         position.setXYZ(i, this.vertex.x, this.vertex.y, this.vertex.z);
      }

      floorGeometry = floorGeometry.toNonIndexed(); // ensure each face has unique vertices

      position = floorGeometry.attributes.position;
      const colorsFloor = [];

      for (let i = 0, l = position.count; i < l; i++) {
         this.color.setHSL(Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75);
         colorsFloor.push(this.color.r, this.color.g, this.color.b);
      }

      floorGeometry.setAttribute('color', new Float32BufferAttribute(colorsFloor, 3));

      const floorMaterial = new MeshBasicMaterial({ vertexColors: true });

      const floor = new Mesh(floorGeometry, floorMaterial);
      scene.add(floor);

      // objects

      const boxGeometry = new BoxGeometry(20, 20, 20).toNonIndexed();

      position = boxGeometry.attributes.position;
      const colorsBox = [];

      for (let i = 0, l = position.count; i < l; i++) {
         this.color.setHSL(Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75);
         colorsBox.push(this.color.r, this.color.g, this.color.b);
      }

      boxGeometry.setAttribute('color', new Float32BufferAttribute(colorsBox, 3));

      for (let i = 0; i < LEVEL_META_DATA.map.length; i++) {
         for (let j = 0; j < LEVEL_META_DATA.map[i].length; j++) {
            const cell = LEVEL_META_DATA.map[i][j];

            switch (cell) {
               case 1: {
                  const boxMaterial = new MeshBasicMaterial({ vertexColors: true });
                  boxMaterial.color.setHSL(Math.random() * 0.2 + 0.5, 0.75, Math.random() * 0.25 + 0.75);
                  const box = new Mesh(boxGeometry, boxMaterial);
                  box.position.x = i * 20;
                  box.position.y = 10;
                  box.position.z = j * 20;
                  scene.add(box);
                  this.objects.push(box);
               }
            }
         }
      }
   }

   public get Objects(): Object3D[] {
      return this.objects;
   }
}
