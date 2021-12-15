import React, { useState } from "react";
import { Drawer, Box, Button } from "@mui/material";
import { toggleDefaultDrawer } from "./logic";
import DrawerContent from "./DrawerContent";

const DefaultDrawer = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Button size="small" onClick={() => toggleDefaultDrawer(true, setOpen)}>
        {">"}
      </Button>
      <Drawer
        anchor="left"
        open={open}
        onClick={() => toggleDefaultDrawer(false, setOpen)}
      >
        <DrawerContent />
      </Drawer>
    </Box>
  );
};

export default DefaultDrawer;
