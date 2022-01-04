import { ClickAwayListener, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";

const TaskForm = () => {
  const rightList = (
    <Box
      component="div"
      sx={{
        width: "20%",
        float: "right",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
      }}
    >
      {[
        "membri",
        "lista",
        "prova",
        "prova",
        "prova",
        "prova",
        "prova",
        "prova",
        "membri",
        "lista",
        "prova",
        "prova",
        "prova",
        "prova",
        "prova",
        "prova",
        "prova",
      ].map((element) => {
        return <div>{element}</div>;
      })}
    </Box>
  );

  return (
    <ClickAwayListener onClickAway={() => console.log("premutovia")}>
      <Paper
        elevation={1}
        component="div"
        sx={{
          width: "50vw",
          height: " 50vh",
          outline: " dashed 1px black",
          position: "relative",
          top: "7%",
          right: "40%",
        }}
      >
        <Typography variant="h5">titolo card</Typography>
        <Typography variant="h5">Descrizione Della card</Typography>
        {rightList}
      </Paper>
    </ClickAwayListener>
  );
};

export default TaskForm;
