import { ColumnItem } from "../Classes/ColumnItem";

export function createColumnItem(title:string="titolo",content:string="contenuto dell elemento"+(Math.random()*(100)).toString()){
    return {...new ColumnItem(title,content)}
}