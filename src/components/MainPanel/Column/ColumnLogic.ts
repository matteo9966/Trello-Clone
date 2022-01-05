import { AnyAction, Dispatch } from "@reduxjs/toolkit"
import { addItemToColumn } from "../../../redux/cardsSlice"
export function onClickAddItemHandler (columnID:string,dispatch:Dispatch<AnyAction>){
   return (event:React.MouseEvent<HTMLButtonElement>)=>{
        dispatch(addItemToColumn(columnID))
   }
}