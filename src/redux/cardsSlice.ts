import { createSlice,PayloadAction  } from "@reduxjs/toolkit";
import {board} from '../dummyData/Data'
import reorderArray from '../HelperFunctions/reorderArray'
import {reorderItems as reorderItemList} from '../HelperFunctions/reorderItems'
import {Column} from '../Classes/Column'
import { createColumnItem } from "../HelperFunctions/createItem";
import {createColumn} from '../HelperFunctions/createColumn';
interface ColumnsReorder {
  sourceIndex: number;
  destinationIndex: number;
}
interface ItemsReorder {
  sourceIndex: number;
  destinationIndex: number;
  sourceColumnID: string;
  destinationestinationColumnID: string;
}



const cardsSlice = createSlice({
    name:'cards',
    initialState:{board:board}, //#TODO: parti da qui per aggiornare i dati!
    reducers:{
       reorderColumns:(state,action:PayloadAction<ColumnsReorder>)=>{
           const sourceIndex = action.payload.sourceIndex;
           const destinationIndex=action.payload.destinationIndex;
           const reorderedArray=reorderArray(state.board,sourceIndex,destinationIndex);
           return {...state,board:reorderedArray}
           
       },

       reorderItems:(state,action:PayloadAction<ItemsReorder>)=>{
           const sourceIndex =action.payload.sourceIndex;
           const destinationIndex=action.payload.destinationIndex;
           const sourceCID=action.payload.sourceColumnID;
           const destCID=action.payload.destinationestinationColumnID;
         
          
           if(sourceCID===destCID && sourceIndex===destinationIndex){
               return 
           }

      if (sourceCID === destCID && sourceIndex === destinationIndex) {
        return;
      }

           
              
       },
       addItemToColumn:(state,action:PayloadAction<string>)=>{
           const column = state.board.find(col=>col.ID===action.payload);
           if(column){
               column.items.push(createColumnItem()) //inserisci nuovo elemento!
           }
       },
       addNewColumn:(state,action:PayloadAction<string>)=>{
            const newCol = createColumn(action.payload)
            state.board.push(newCol)
       }
    //    addNewColumn:(state,action:PayloadAction<{colId:string,title:string}>)=>{
    //         const newCol = createColumn(action.payload)
    //         state.board.push(newCol)
    //    }
       
    }
    
})

export const { reorderColumns, reorderItems,addItemToColumn,addNewColumn } = cardsSlice.actions;
export default cardsSlice.reducer;
