import { Card } from "./Card";
export class ColumnItem  extends Card {
    public content:string;

  constructor(name:string,content:string){
      super(name);
      this.content=content;
  }

}
