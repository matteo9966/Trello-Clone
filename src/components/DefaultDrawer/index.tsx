import { Box, Button } from "@mui/material";
import DrawerContent from "./DrawerContent";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { openDrawer } from "../../redux/drawerSlice";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const DefaultDrawer = () => {
  const drawerState = useSelector((state: RootState) => state.drawer);
  const dispatch = useDispatch();

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        minWidth: drawerState ? "300px" : "15px",
        height: "100%",
        borderRight: "2px solid black",
        transition: "min-width 0.5s ease 0s",
      }}
    >
      {" "}
      <Box
        component="div"
        sx={{
          flexGrow: 1,
          height: "100%",
          maxWidth: "100%",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {<DrawerContent />}
      </Box>
      {drawerState === false ? (
        <Button
          onClick={() => dispatch(openDrawer())}
          style={{ minWidth: "7px", height: "2%" }}
          startIcon={<KeyboardArrowRightIcon />}
        />
      ) : (
        ""
      )}
    </Box>
  );
};

export default DefaultDrawer;
