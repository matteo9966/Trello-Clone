import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface taskType {
  title: String;
  description: string;
  parentShell: string;
}
const initialState: taskType[] = [];

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    newTask: (state, { payload }: PayloadAction<taskType>) => {
      return [...state, payload];
    },

    deleteTask: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { newTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
