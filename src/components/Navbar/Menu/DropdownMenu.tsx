import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import React from "react";

export const DropdownMenu: React.FC<{
  AnchorEl?: HTMLElement | null;
  items?: string[];
  open?: boolean;
  onClose?: () => void;
}> = (props) => {
  return (
    <Menu
      id="fade-menu"
      open={!!props.open}
      onClose={props.onClose}
      anchorEl={props.AnchorEl}
    >
      {props.items &&
        props.items.map((item) => {
          return (
            <MenuItem key={item} onClick={props.onClose}>
              {item}
            </MenuItem>
          );
        })}
    </Menu>
  );
};
