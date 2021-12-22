import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import ListShell from "./ListShell";
import { RootState } from "../../redux/store";
import { newShell, removeShell } from "../../redux/listShellSlice";
import { List, ListItem } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

const TasksList = () => {
  // prende lo stato di list shell e le renderizza tutte

  const shellState = useSelector((state: RootState) => state.shell);
  const dispatch = useDispatch();

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexGrow: 1,
        height: "100%",
        maxWidth: "100%",
        border: "10px solid black;",
        gap: "0.5rem",
        padding: "0.4rem",
        overflowX: "scroll",
      }}
    >
      {shellState.map((shell) => {
        return (
          <ListShell shellName={shell.shellName} shellId={shell.shellId} />
        );
      })}

      <button
        onClick={() =>
          dispatch(newShell({ shellName: "prova", shellId: uuidv4() }))
        }
      >
        aggiungi una nuova lista
      </button>
    </Box>
  );
};

export default TasksList;
