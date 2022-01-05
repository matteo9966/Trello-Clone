import React from 'react'
import {  Droppable } from "react-beautiful-dnd";
import { Column } from '../../../Classes/Column';
import { ColumnItemDraggable } from '../ColumnItem';
export const ColumnDroppableArea:React.FC<{columnData:Column,children?:React.ReactNode}> = ({columnData,children}) => {
    return (
        <Droppable droppableId={columnData.ID}  type="ITEMS">
          {(provided)=>{return (<div {...provided.droppableProps} ref={provided.innerRef} style={{width:'100%',minHeight:'200px', border:'3px solid orange'}}>
              
              {columnData.items.map((item,index)=>{
                  return(<ColumnItemDraggable key={item.ID} index={index} item={item}/>)
              })}
              
              
              {provided.placeholder}
          </div>)}}
        </Droppable>
    )
}
