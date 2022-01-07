import { Column } from "../Classes/Column";

export function findColumnIndex(columns:Column[],colId:string){
  return columns.findIndex((col)=>{return col.ID===colId})
}
