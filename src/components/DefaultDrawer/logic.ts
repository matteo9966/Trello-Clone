import { Dispatch } from "redux";
import ActionType from "../../state/actions/actionType";
import { Action } from "../../state/actions";


export const activeDrawer = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.OPEN_DRAWER,
    });
  };
};

export const deactiveDrawer = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.CLOSE_DRAWER,
    });
  };
};
