import { configureStore } from "@reduxjs/toolkit";
import drawerReducer from "./drawerSlice";
import listShellReducer from "./listShellSlice";
import taskReducer from "./taskSlice";
import cardsReducer from "./cardsSlice";

const store = configureStore({
  reducer: {
    drawer: drawerReducer,
    shell: listShellReducer,
    cards: cardsReducer,
    task: taskReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
