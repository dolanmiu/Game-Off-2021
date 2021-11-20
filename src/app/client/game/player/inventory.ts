export enum ItemCategory {
   Weapon,
   Ammo,
   Health,
}

export interface Item {
   id: string;
   name: string;
   category: ItemCategory;
}

export class Inventory {
   items: Map<string, number> = new Map();

   // gets the count of a certain item in the inventory
   public getCount(item: Item): number {
      return this.items.get(item.id) || 0;
   }

   // adds the item to inventory and returns the new count of that item in inventory
   public add(item: Item): number {
      const itemCount = this.getCount(item) + 1;
      this.items.set(item.id, itemCount);
      return itemCount;
   }

   // returns true if there is one or more of this item in the inventory
   public hasItem(item: Item): boolean {
      return this.getCount(item) > 0;
   }

   // uses the item and returns the new count of the item in inventory, -1 if cannot use item
   public useItem(item: Item): boolean {
      if (!this.hasItem(item)) {
         return false;
      }
      this.items.get(item.id);
      return true;
   }
}
