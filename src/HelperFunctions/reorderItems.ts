import { Column } from "../Classes/Column";
import reorderArray from "./reorderArray";

export function reorderItems (data:Column[],sourceIndex:number,destinationIndex:number,sourceCID:string,destCID:string){
    
    const sortedData = [...data] 
    

        //riscrivere sta cosa un po meglio!
        
        const columnIndex = sortedData.findIndex(column=>column.ID===sourceCID) //column è un oggetto
        const {...newcolumn} = sortedData[columnIndex];
        const items = [...newcolumn.items];
        const reorderedItems = reorderArray(items,sourceIndex,destinationIndex);
        newcolumn.items=[...reorderedItems];
        sortedData[columnIndex]=newcolumn;     
        
        return sortedData
     
      
}