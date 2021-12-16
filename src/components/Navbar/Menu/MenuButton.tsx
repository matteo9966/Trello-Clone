import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Wrapper } from '../UI/Wrapper';
import { Typography } from '@mui/material';
import React from 'react'

export const MenuButton:React.FC<{onClick?:(event: React.MouseEvent<HTMLElement>)=>void,label?:string}> = (props) => {
    return (
      <Wrapper onClick={props.onClick}>
        <Typography variant="h6" >{props.label}</Typography>
        <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
      </Wrapper>
    )
}

