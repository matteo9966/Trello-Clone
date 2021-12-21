import React from "react";
import { board } from "../../dummyData/Data";
import { DragDropContext,Droppable } from "react-beautiful-dnd";
import { Box } from "@mui/material";
import { Column } from "./Column";
export const MainPanel = () => {
  console.log(board);

  return (
      

    <DragDropContext onDragEnd={(result) => {}}>
          <Droppable droppableId="droppable-main" direction="horizontal" >
            {(provided)=>(
                
                <Box
                ref={provided.innerRef}
                {...provided.droppableProps}
                component="div"
                sx={{
                  
                  height: "100%",
                  border: "2px solid magenta",
                  display: "flex",
                  width:'100%',
                  maxWidth:'100%',
                  overflowX:'scroll',
                  padding:'0.8rem'
                  
                }}
              >
        
        
              {board.map((column,index)=>{
                  const columndata=column;
                   return(<Column index={index} key={column.ID.toString()} ColumnData={column}>
        
                   </Column>)
              })}
                
        
                {provided.placeholder}
              </Box>
                  
            )}
          </Droppable>

      
    </DragDropContext>
            
  );
};
