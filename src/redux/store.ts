import { configureStore } from "@reduxjs/toolkit";
import drawerReducer from "./drawerSlice";
import listShellReducer from './listShellSlice'
import taskReducer from './taskSlice'

const store = configureStore({
  reducer: {
    drawer: drawerReducer,
    shell:listShellReducer,
    task:taskReducer
  },
});

export default store;
export type storeDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
