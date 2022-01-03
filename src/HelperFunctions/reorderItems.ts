import { Column } from "../Classes/Column";
import reorderArray from "./reorderArray";

export function reorderItems(
  data: Column[],
  sourceIndex: number,
  destinationIndex: number,
  sourceCID: string,
  destCID: string
) {
  const sortedData = [...data];
  console.log(sortedData);

  //riscrivere sta cosa un po meglio!
  if (sourceCID === destCID) {
    const columnIndex = sortedData.findIndex(
      (column) => column.ID === sourceCID
    ); //column è un oggetto
    const { ...newcolumn } = sortedData[columnIndex];
    const items = [...newcolumn.items];
    const reorderedItems = reorderArray(items, sourceIndex, destinationIndex);
    newcolumn.items = [...reorderedItems];
    sortedData[columnIndex] = newcolumn;
  } else {

    const sourceColumnIndex = sortedData.findIndex(
      (column) => column.ID === sourceCID
    );

    const destinationColumnIndex = sortedData.findIndex(
      (column) => column.ID === destCID
    );
 
    
    
    const newsourcecol  ={ ...sortedData[sourceColumnIndex]};
    const newdestcol  = {...sortedData[destinationColumnIndex]};
    
    const sourceitems = [...newsourcecol.items];
    const destitems = [...newdestcol.items];
    
    console.log(sourceitems,destitems);
    
    
    //fino a qui va bene!

    const [removed] = sourceitems.splice(sourceIndex,1); //removed è l'elemento rimosso
    destitems.splice(destinationIndex, 0, removed);
    newsourcecol.items = sourceitems;
    newdestcol.items = destitems;

    sortedData[sourceColumnIndex] = newsourcecol;
    sortedData[destinationColumnIndex] = newdestcol;
  }

  return sortedData;
}
