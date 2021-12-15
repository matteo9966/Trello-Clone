import React, { MouseEvent } from "react";

export const toggleDefaultDrawer = (
  newState: boolean,
  stateSetter: React.Dispatch<React.SetStateAction<boolean>>
) => {
  stateSetter(newState);
};
