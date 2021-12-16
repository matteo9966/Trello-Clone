import React from "react";
import { Drawer, Box, Button } from "@mui/material";
import DrawerContent from "./DrawerContent";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { activeDrawer } from "./logic";
import { State } from "../../state/reducers/index";

const DefaultDrawer = () => {

  const actions = bindActionCreators({ activeDrawer }, useDispatch());
  const drawerIsOpen = useSelector((state: State) => state.drawer);

  return (
    <Box>
      <Button size="small" onClick={() => actions.activeDrawer()}>
        {">"}
      </Button>
      <Drawer anchor="left" open={drawerIsOpen}>
        <DrawerContent />
      </Drawer>
    </Box>
  );
};

export default DefaultDrawer;
