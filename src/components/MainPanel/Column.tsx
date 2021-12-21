import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Column as Col } from "../../Classes/Column";
import CardHeader from "@mui/material/CardHeader";
import { Draggable } from "react-beautiful-dnd";

export const Column: React.FC<{ ColumnData: Col; index: number }> = ({
  ColumnData,
  index,
}) => {
  return (
    <Draggable draggableId={ColumnData.ID.toString()} index={index}>
      {(provided, snapshot) => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          elevation={3}
          sx={{ minWidth: "280px", maxWidth: "0.2vw", border: "1px solid red",marginLeft:'0.5rem' }}
        >
          <CardContent sx={{ border: "1px solid black", padding: 0 }}>
            <CardHeader
              title={ColumnData.name}
              sx={{ border: "3px solid green", padding: 0 }}
            />
          </CardContent>
        </Card>
      )}
    </Draggable>
  );
};
