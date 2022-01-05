import React from 'react'
import { Card,CardProps } from '@mui/material'
export const ColumnWrapper:React.FC<{other:CardProps}>=(props,...other)=>{

    return <Card {...props.other}>
        {props.children}
    </Card>
}