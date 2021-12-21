import ShortUniqueId from 'short-unique-id';
export class Card {
    public ID:ShortUniqueId|string;
    public name:string;
    protected static uid = new ShortUniqueId({length:10})
    constructor(name:string){
        this.ID = Card.uid();
        this.name=name;

    }

}