import { createSlice } from "@reduxjs/toolkit";

const drawerSlice = createSlice({
  name: "drawer",
  initialState: false,
  reducers: {
    closeDrawer: () => {
      return false;
    },
    openDrawer: () => {
      return true;
    },
  },
});

export const { closeDrawer, openDrawer } = drawerSlice.actions;
export default drawerSlice.reducer;
