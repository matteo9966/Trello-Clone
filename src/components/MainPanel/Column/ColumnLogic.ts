import { AnyAction, Dispatch } from "@reduxjs/toolkit"
import { addItemToColumn } from "../../../redux/cardsSlice"
export function onClickAddItemHandler (columnID:string,dispatch:Dispatch<AnyAction>){
   return (event:React.MouseEvent<HTMLButtonElement>)=>{
        dispatch(addItemToColumn(columnID))
   }
}

export function onClickAddItemHandler2 (columnID:string){
   return  (dispatch:Dispatch<AnyAction>,inputRef:React.MutableRefObject<HTMLInputElement | undefined>)=>{
     
      return (event:React.MouseEvent<HTMLButtonElement>)=>{
         const title = inputRef.current?.value.toString();
         console.log("title: ",title)
         if(!title) return
         if(title==="" || title.length<1){return}
         
         dispatch(addItemToColumn(columnID));
         inputRef.current!.value=""
    }
 
   }
}
