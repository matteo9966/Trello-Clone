import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Column as Col } from "../../../Classes/Column";
import CardHeader from "@mui/material/CardHeader";
import { Draggable } from "react-beautiful-dnd";
import { ColumnDroppableArea } from "./ColumnDroppableArea";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { onClickAddItemHandler/* ,onClickAddItemHandler2 */ } from "./ColumnLogic";
import { useAppDispatch } from "../../../hooks/redux/hooks";
import { TextInput } from "../UI/TextInput";
export const Column: React.FC<{ ColumnData: Col; index: number }> = ({
  ColumnData,
  index,
}) => {
  const dispatch = useAppDispatch();
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
            minHeight:'0',
            marginLeft: "0.5rem",
            display:'inline',
            float:'left',

          }}
        >
          <CardContent
            sx={{  padding: 0,height: 'none',maxHeight:'none' }}
          >
            <CardHeader
              {...provided.dragHandleProps}
              title={ColumnData.name}
              sx={{ padding: 0 }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                position:'relative',
                top:0,
                flexGrow: 1,
                width: "100%",
                minHeight: "200px",
                height: 'none',
                maxHeight:'none',
            
              }}
            >
              <ColumnDroppableArea columnData={ColumnData} />

            </Box>
            {/* <Button variant="text" onClick={onClickAddItemHandler(ColumnData.ID,dispatch)}>New Item</Button> */}
            {/* <Button variant="text" onClick={onClickAddItemHandler2(ColumnData.ID)}>New Item</Button> */}
            <TextInput  handler={onClickAddItemHandler(ColumnData.ID)} ></TextInput>

          </CardContent>
        </Card>
      )}
    </Draggable>
  );
};
