import { FC } from "react";
import { Box } from "@mui/system";
import { listShellType } from "../../redux/listShellSlice";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { newTask } from "../../redux/taskSlice";
import { List, ListItem } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import Task from "./Task";

const ListShell: FC<listShellType> = ({ shellName, shellId }) => {
  // prende la lista dei task e renderizza soltanto quelli che hanno lo stesso shell number

  const taskState = useSelector((state: RootState) => state.task);
  const dispatch = useDispatch();

  return (
    <Box
      component="div"
      sx={{
        border: "1px solid blue",
        height: "90%",
        minWidth: "10rem",
        maxWidth: "10rem",
      }}
    >
      {taskState.map((task) => {
        if (task.parentShell === shellId) {
          return (
            <Task
              title={task.title}
              description={task.description}
              parentShell={shellId}
              cardMenuIsOpen={task.cardMenuIsOpen}
              id={task.id}
            />
          );
        }
      })}
      <button
        onClick={() =>
          dispatch(
            newTask({
              title: "prova",
              description: "task generato per una prova",
              parentShell: shellId,
              cardMenuIsOpen: false,
              id: uuidv4(),
            })
          )
        }
      >
        aggiungi task
      </button>
    </Box>
  );
};

export default ListShell;
