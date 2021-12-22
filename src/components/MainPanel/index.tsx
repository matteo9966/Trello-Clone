import React from "react";
import { useAppSelector } from "../../hooks/redux/hooks";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Box } from "@mui/material";
import { Column } from "./Column";
import { useMainPanel } from "./dragLogic";
export const MainPanel = () => {
  const boardData = useAppSelector((state) => state.cards);
  const [onDragEnd] = useMainPanel();
  // const boardcon
  // console.log(board);

  return (
    /* type="COLONNA" serve per specificare quale è il tipo di droppable area:
         i figli di droppable di tipo colonna potranno essre droppati solo il droppabletype di tipo colonna
         in questo modo un elemento draggable potra essere droppato solo nel contenitore a cui appartiene!
         */

    <DragDropContext
      onDragEnd={onDragEnd}
    >
      <Droppable
        droppableId="droppable-main"
        direction="horizontal"
        type="COLONNA"
      >
        {(provided) => (
          <Box
            ref={provided.innerRef}
            {...provided.droppableProps}
            component="div"
            sx={{
              height: "100%",
              border: "2px solid magenta",
              display: "flex",

              overflowX: "scroll",
              padding: "0.8rem",
            }}
          >
            {boardData.board.map((column, index) => {
              return (
                <Column
                  index={index}
                  key={column.ID.toString()}
                  ColumnData={column}
                ></Column>
              );
            })}

            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    </DragDropContext>
  );
};
