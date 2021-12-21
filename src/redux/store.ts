import { configureStore } from "@reduxjs/toolkit";
import drawerReducer from "./drawerSlice";

const store = configureStore({
  reducer: {
    drawer: drawerReducer,
  },
});

export default store;
export type storeDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
