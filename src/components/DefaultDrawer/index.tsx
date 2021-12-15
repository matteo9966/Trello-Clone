import React, { useState } from "react";
import { Drawer, Box, Button } from "@mui/material";
import { toggleDefaultDrawer } from "./logic";

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
        {[1, 2, "Bacheca", "Membri", "Impostazioni", 6, 7].map((value) => {
          return <p>{value}</p>;
        })}
      </Drawer>
    </Box>
  );
};

export default DefaultDrawer;
