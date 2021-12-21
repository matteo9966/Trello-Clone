import { Box, Card, CardContent, Typography } from "@mui/material";

import React from "react";
import { DraggableProvided } from "react-beautiful-dnd";
import { ColumnItem } from "../../Classes/ColumnItem";

export const ColumnItemDraggable: React.FC<{
  provided: DraggableProvided;
  item: ColumnItem;
 
}> = (props) => {
  return (
    <Card
      {...props.provided.draggableProps}
      {...props.provided.dragHandleProps}
      ref={props.provided.innerRef}
    >
      <CardContent>
        <Box>
          <Typography variant="h6">{props.item.name}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

// #TODO: qui va l'item di cui voglio fare il drag!
