import React,{useState,useRef} from 'react'
import InputBase from '@mui/material/InputBase/InputBase'
import { SxProps, Theme } from '@mui/material/styles'
import {  grey } from '@mui/material/colors'
import {useAppDispatch} from '../../../hooks/redux/hooks'
import {renameColumn} from '../../../redux/cardsSlice'



export const ColumnTitle:React.FC<{columnID:string,value:string}>=({columnID,value})=>{
    // const columns = useAppSelector(state=>state.cards);
    const [columnTitle,setColumnTitle] =useState(value);
    const initialTitle = useRef(value);
    const dispatch = useAppDispatch();

   const InputStyle:SxProps<Theme> = {
       width:'100%',
       border:'none',
       backgroundColor:'transparent',
       background:'none',
       padding:'0.2rem',
       fontWeight:'bolder',
       fontSize:'0.8rem',
       '&>input:focus':{
       border:2,
       borderColor:'rgba(138, 138, 138, 0.36)',
       background:'linear-gradient(163deg, rgba(193,193,193,0.5718662464985995) 0%, rgba(0,0,0,0.20211834733893552) 100%)',
       borderRadius:1,
      },
       '&:hover': {  background:grey[200], }
       
   }
    
    
   const onChangeInput =(e: React.ChangeEvent<HTMLInputElement>)=>{
         setColumnTitle(e.target.value);
   }
   const onBlurInput = ()=>{
       if(columnTitle===initialTitle.current) return

       dispatch(renameColumn({title:columnTitle,colID:columnID}))
    //    console.log('title changed from: '+initialTitle.current +' to '+columnTitle );
       initialTitle.current=columnTitle

   }

  
    return <InputBase onChange={onChangeInput} onBlur={onBlurInput} sx={InputStyle} placeholder='QUESTO è IL TITOLO DELLA COLONNA' value={columnTitle} ></InputBase> //AGGIUNGI IL VALUE
}
