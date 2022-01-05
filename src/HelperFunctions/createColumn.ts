import { Column } from "../Classes/Column";
export function createColumn(columnName:string){
 
    return {...new Column(columnName)}

} 