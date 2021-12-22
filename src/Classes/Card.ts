import ShortUniqueId from 'short-unique-id';
export class Card {
    public ID:string;
    public name:string;
    protected static uid = new ShortUniqueId({length:10})
    
    constructor(name:string){
        this.ID = String(Card.uid()).toString();
        // this.ID = String(Math.random()).toString();
        this.name=name;

    }
    // public get ID(){
    //      return this._ID.toString();
    // }

}