import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Column as Col } from "../../Classes/Column";
import CardHeader from "@mui/material/CardHeader";
import { Draggable } from "react-beautiful-dnd";
import { ColumnDroppableArea } from "./ColumnDroppableArea";
import Box from "@mui/material/Box";

export const Column: React.FC<{ ColumnData: Col; index: number }> = ({
  ColumnData,
  index,
}) => {
  return (
    <Draggable draggableId={ColumnData.ID.toString()} index={index}>
      {(provided) => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          elevation={3}
          sx={{
            minWidth: "280px",
            maxWidth: "0.2vw",
            border: "1px solid red",
            marginLeft: "0.5rem",
          }}
        >
          <CardContent
            sx={{ border: "1px solid black", padding: 0, height: "100%" }}
          >
            <CardHeader
              {...provided.dragHandleProps}
              title={ColumnData.name}
              sx={{ border: "3px solid green", padding: 0 }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",

                flexGrow: 1,
                width: "100%",
                minHeight: "200px",
              }}
            >
              <ColumnDroppableArea columnData={ColumnData} />
            </Box>
          </CardContent>
        </Card>
      )}
    </Draggable>
  );
};

{
  /* <Droppable droppableId={ColumnData.ID.toString()} type="Items" >
{(provided)=>{
    return(<div {...provided.droppableProps} ref={provided.innerRef} style={{width:'100%',height:'100%',minHeight:'200px', border:'3px solid orange'}} >
    
    {ColumnData.items.map((item,index)=>{return(<Draggable key={item.ID.toString()} index={index} draggableId={item.ID.toString()}>
    
    {(provided)=>{return ( <ColumnItemDraggable provided={provided} item={item} /> )
}}
</Draggable>)})}

</div>)
}}

</Droppable>  */
}
{
  /* {ColumnData.items.map((item,index)=>{return(<Draggable key={item.ID} index={index} draggableId={item.ID}>
              
              {(provided)=>{return ( <ColumnItemDraggable index={index} provided={provided} item={item} /> )
              }}
           </Draggable>)})} */
}
