import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Column as Col } from "../../../Classes/Column";
import CardHeader from "@mui/material/CardHeader";
import { Draggable } from "react-beautiful-dnd";
import { ColumnDroppableArea } from "./ColumnDroppableArea";
import Box from "@mui/material/Box";
import { onClickAddItemHandler } from "./ColumnLogic";
import { useAppDispatch } from "../../../hooks/redux/hooks";
import { TextInput } from "../UI/TextInput";
import { ColumnTitle } from "./ColumnTitle";
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
            minHeight: "0",
            marginLeft: "0.5rem",
            display: "inline",
            float: "left",
            background:'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)',
          }}
        >
          <CardContent sx={{ padding: 0, height: "none", maxHeight: "none" }}>
            <CardHeader
              
              {...provided.dragHandleProps}
              // title={ColumnData.name}
              sx={{ padding:'0.4rem' }}
              subheader={<ColumnTitle columnID={ColumnData.ID} value={ColumnData.name}></ColumnTitle>}
            />
             {/* <ColumnTitle columnID={ColumnData.ID}></ColumnTitle> */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
                top: 0,
                flexGrow: 1,
                width: "100%",
                minHeight: "200px",
                height: "none",
                maxHeight: "none",
                padding:'0.2rem',
                
              }}
            >
              <ColumnDroppableArea columnData={ColumnData} />
            </Box>
            <TextInput
              handler={onClickAddItemHandler(ColumnData.ID)}
            ></TextInput>
          </CardContent>
        </Card>
      )}
    </Draggable>
  );
};
