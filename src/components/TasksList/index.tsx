import { Box } from "@mui/system";
import { MainPanel } from "../MainPanel";
const TasksList = () => {

  return (
    <Box
      component="span"
      sx={{
        flexGrow: 1,
        justifyContent: "flex-start",
        gap: "0.5rem",
        overflow: "scroll",
        display: "block",
      }}
    >
      <MainPanel></MainPanel>
    </Box>
  );
};

export default TasksList;
