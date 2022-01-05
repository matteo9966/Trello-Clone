import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface taskType {
  title: String;
  description: string;
  parentShell: string;
  cardMenuIsOpen: boolean;
  id: string;
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
    handleCardMenu: (
      state,
      { payload }: PayloadAction<{ taskId: string; cardMenuIsOpen: boolean }>
    ) => {
      state.forEach((task) => {
        if (task.id.charAt(0) === payload.taskId.charAt(0)) {
          if (task.id === payload.taskId)
            task.cardMenuIsOpen = payload.cardMenuIsOpen;
        }
      });
    },
  },
});

export const { newTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
