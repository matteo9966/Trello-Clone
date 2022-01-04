import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { board } from "../dummyData/Data";
import reorderArray from "../HelperFunctions/reorderArray";
import { reorderItems as reorderItemList } from "../HelperFunctions/reorderItems";
interface ColumnsReorder {
  sourceIndex: number;
  destinationIndex: number;
}
interface ItemsReorder {
  sourceIndex: number;
  destinationIndex: number;
  sourceColumnID: string;
  destinationestinationColumnID: string;
}

const cardsSlice = createSlice({
  name: "cards",
  initialState: { board: board },
  reducers: {
    reorderColumns: (state, action: PayloadAction<ColumnsReorder>) => {
      const sourceIndex = action.payload.sourceIndex;
      const destinationIndex = action.payload.destinationIndex;
      const reorderedArray = reorderArray(
        state.board,
        sourceIndex,
        destinationIndex
      );
      return { ...state, board: reorderedArray };
    },

    reorderItems: (state, action: PayloadAction<ItemsReorder>) => {
      const sourceIndex = action.payload.sourceIndex;
      const destinationIndex = action.payload.destinationIndex;
      const sourceCID = action.payload.sourceColumnID;
      const destCID = action.payload.destinationestinationColumnID;
      console.log(
        "sourceindex:",
        sourceIndex,
        "\n",
        "destinationindex:",
        destinationIndex,
        "\n",
        sourceCID,
        "\n",
        destCID
      );

      if (sourceCID === destCID && sourceIndex === destinationIndex) {
        return;
      }

      const newboard = reorderItemList(
        state.board,
        sourceIndex,
        destinationIndex,
        sourceCID,
        destCID
      );
      return { ...state, board: newboard };
    },
    addItemToColumn: () => {},
  },
});

export const { reorderColumns, reorderItems } = cardsSlice.actions;
export default cardsSlice.reducer;
