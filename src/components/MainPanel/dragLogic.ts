import { DropResult } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { reorderColumns, reorderItems } from "../../redux/cardsSlice";

export const useMainPanel = () => {
  const dispatch = useDispatch();

  function onDragEnd(result: DropResult) {
    console.log(result);
    if (!result.destination) {
      return;
    }

    if (result.type === "COLONNA") {
      dispatch(
        reorderColumns({
          sourceIndex: result.source.index,
          destinationIndex: result.destination.index,
        })
      );
      return;
    }
    if (result.type === "ITEMS") {
      dispatch(
        reorderItems({
          destinationIndex: result.destination.index,
          sourceIndex: result.source.index,
          destinationestinationColumnID: result.destination.droppableId,
          sourceColumnID: result.source.droppableId,
        })
      );
    }
    //altrimenti fai il dispatch e passi source e destination index!
  }

  return [onDragEnd];
};
