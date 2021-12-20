import { combineReducers } from "redux";
import drawerReducer from "./drawerReducer";

const reducers = combineReducers({
  drawer: drawerReducer,
});

export default reducers;
export type State = ReturnType<typeof reducers>;
