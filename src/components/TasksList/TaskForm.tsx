import { ClickAwayListener, Paper } from "@mui/material";
import { Box } from "@mui/system";

const TaskForm = () => {
  const rightList = (
    <Box component="div">
      {["membri", "lista", "prova", "prova"].map(() => {})}
    </Box>
  );

  return (
    <ClickAwayListener onClickAway={() => console.log("premutovia")}>
      <Box
        sx={{
          width: "50%",
          height: " 50%",
          outline: " dashed 1px black",
          position: "relative",
          top: "7%",
          right: "40%",
        }}
      >
        <Paper elevation={0}>ECCOMI QUI PORCI</Paper>
      </Box>
    </ClickAwayListener>
  );
};

export default TaskForm;
