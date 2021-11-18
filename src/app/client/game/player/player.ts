import { Inventory } from './inventory';

export class Player {
   name: string;
   score: number;
   health: number;
   inventory = new Inventory();
}
