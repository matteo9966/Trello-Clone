import React,{useRef} from 'react'
import Box from '@mui/material/Box/Box'
import IconButton from '@mui/material/IconButton'
import InputBase from '@mui/material/InputBase/InputBase'
import { useAppDispatch } from "../../../hooks/redux/hooks";
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import AddIcon from '@mui/icons-material/Add';
type handlerType= (dispatch: Dispatch<AnyAction>, inputRef: React.MutableRefObject<HTMLInputElement | undefined>)=> (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void

export const TextInput:React.FC<{handler:handlerType}> =(props)=>{
    const dispatch=useAppDispatch();
    const titleInputRef=useRef<HTMLInputElement>();

    return  (  <Box sx={{display:'flex'}}>
    <InputBase
         required
         id="column-name"
         inputRef={titleInputRef}
         sx={{paddingLeft:'0.2rem',flexGrow:1}}
         placeholder="Column title"
       />
    <IconButton color="primary" aria-label="upload picture" component="span" onClick={props.handler(dispatch,titleInputRef)}><AddIcon/></IconButton>
    </Box>)
}