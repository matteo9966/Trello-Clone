import { FC } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Divider,
} from "@mui/material";
import { taskType } from "../../redux/taskSlice";
import TaskForm from "./TaskForm";

const Task: FC<taskType> = ({ title, description, parentShell }) => {
  return (
    <Card>
      <CardContent>
        <Typography>{title}</Typography>
        <Divider />
        <Typography>{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default Task;
