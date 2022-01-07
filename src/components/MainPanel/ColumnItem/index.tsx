import { Box, Card, CardContent, Typography } from "@mui/material";

import React from "react";
import { DraggableProvided,Draggable } from "react-beautiful-dnd";
import { ColumnItem } from "../../../Classes/ColumnItem";
//questo è da riscrivere, gli passo solo item e index e metto il draggable qui dentro!
export const ColumnItemDraggable: React.FC<{
  provided?: DraggableProvided;
  item: ColumnItem;
  index:number;
 
}> = (props) => {
  return (
   <Draggable index={props.index} draggableId={props.item.ID}>
         {(provided)=>(

    
    <Card
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={provided.innerRef}
      sx={{marginY:'0.2rem',background:'linear-gradient(to top, #dfe9f3 0%, white 100%)'}}
    >
      <CardContent>
        <Box>
          <Typography variant="h6">{props.item.name}</Typography>
        </Box>
      </CardContent>
    </Card>
         )}
   </Draggable>
    
    
  );
};


