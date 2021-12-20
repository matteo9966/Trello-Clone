import ActionType from "./actionType";

interface closeDrawer {
  type: ActionType.CLOSE_DRAWER;
}

interface openDrawer {
  type: ActionType.OPEN_DRAWER;
}

export type Action = closeDrawer | openDrawer;
