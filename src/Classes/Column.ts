import ShortUniqueId from 'short-unique-id';
import { Card } from './Card';
import { ColumnItem } from './ColumnItem';
export class Column extends Card{
    public columnItems:ShortUniqueId|string[]
    public items:ColumnItem[]
   constructor( name:string){
       super(name);
       this.columnItems=[];
       this.items=[];
   }
 

   public addItemToColumn(item:ColumnItem){
       this.items.push(item)
   }
}