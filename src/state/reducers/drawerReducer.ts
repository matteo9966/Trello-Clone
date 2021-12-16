import { Action } from "../actions/index";

const drawerReducer = (state: boolean = false, action: Action) => {
  switch (action.type) {
    case "close-drawer":
      return (state = false);
    case "open-drawer":
      return (state = true);
    default:
      return state;
  }
};

export default drawerReducer;
