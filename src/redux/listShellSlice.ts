import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { taskType } from "./taskSlice";

export interface listShellType {
  tasks?: taskType[];
  shellName: string;
  shellId: string;
}

const initialState: listShellType[] = [];

const listShellSlice = createSlice({
  name: "listShell",
  initialState,
  reducers: {
    newShell: (state, { payload }: PayloadAction<listShellType>) => {
      return [...state, payload];
    },
    removeShell: (state) => {
      return state;
    },
  },
});

export const { newShell, removeShell } = listShellSlice.actions;
export default listShellSlice.reducer;
