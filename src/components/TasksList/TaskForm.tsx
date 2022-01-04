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
      <Box
        sx={{
          width: "50vw",
          height: " 50vh",
          outline: " dashed 1px black",
          position: "relative",
          top: "7%",
          right: "40%",
        }}
      >
        <Paper elevation={1}>
          <Typography variant="h5">titolo card</Typography>
          <Typography variant="h5">Descrizione Della card</Typography>
          {rightList}
        </Paper>
      </Box>
    </ClickAwayListener>
  );
};

export default TaskForm;
