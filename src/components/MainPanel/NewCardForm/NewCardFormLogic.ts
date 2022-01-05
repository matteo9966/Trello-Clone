import React from "react"
import { AnyAction, Dispatch } from "@reduxjs/toolkit"
import { addNewColumn } from "../../../redux/cardsSlice"
export function onClickAddColumnHandler(dispatch:Dispatch<AnyAction>,inputRef:React.MutableRefObject<HTMLInputElement | undefined>){
   

    return (event:React.MouseEvent<HTMLButtonElement>)=>{
        const title = inputRef.current?.value.toString();
        console.log("title: ",title)
        if(!title) return
        if(title==="" || title.length<1){return}
        
        dispatch(addNewColumn(title));
        inputRef.current!.value=""
   }
}