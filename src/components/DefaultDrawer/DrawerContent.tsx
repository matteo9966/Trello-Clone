import { Typography, List, ListItem, Button, Box, Avatar } from "@mui/material";
import { Fragment } from "react";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import { useDispatch } from "react-redux";
import { closeDrawer } from "../../redux/drawerSlice";
import { v4 as uuidv4 } from "uuid";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuBullet from "./MenuBullet";
import { minHeight } from "@mui/system";

const DrawerContent = () => {
  const dispatch = useDispatch();

  const workSpaceHeader = (
    <div
      style={{
        minWidth: "200px",
        display: "flex",
        alignItems: "center",
        flexWrap: "nowrap",
      }}
    >
      <Avatar variant="square" sx={{ margin: 0 }}>
        S
      </Avatar>{" "}
      <Typography paragraph sx={{ margin: " 0 3% 0 3%" }}>
        {" "}
        Spazio di lavoro gratis
      </Typography>
      <Button
        size="small"
        onClick={() => dispatch(closeDrawer())}
        startIcon={<KeyboardArrowLeftIcon />}
      />
    </div>
  );

  const workspace = (
    <div>
      <Typography
        fontSize={14}
        sx={{ padding: "0 0 10px 0", fontWeight: "bold" }}
      >
        Viste dello spazio di lavoro
      </Typography>
      <MenuBullet
        icon={<DashboardIcon />}
        text="Tabelle dello spazio di lavoro"
      />
    </div>
  );

  const youreBulletinBoard = (
    <div>
      <Typography
        fontSize={14}
        sx={{ padding: "0 0 10px 0", fontWeight: "bold" }}
      >
        le tue bacheche
      </Typography>
      <MenuBullet
        icon={
          <div
            style={{
              minWidth: "10px",
              minHeight: "10px",
              borderRadius: "28%",
              backgroundColor: "grey",
            }}
          />
        }
        text="bacheca 1° "
      />
    </div>
  );

  return (
    <Box
      component="div"
      sx={{
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        top: 0,
        left: 0,
      }}
    >
      <List>
        {[
          workSpaceHeader,
          <hr
            style={{
              backgroundColor: "black",
              padding: 0,
              width: 290,
            }}
          />,
          <MenuBullet icon={<FormatListBulletedIcon />} text="Bacheca" />,
          <MenuBullet icon={<SettingsIcon />} text="Impostazioni" />,
          <MenuBullet icon={<PersonOutlineIcon />} text="Membri" />,
          workspace,
          youreBulletinBoard,
        ].map((itemList) => {
          return <ListItem key={uuidv4()} sx={{}}>{itemList}</ListItem>; // aggiusta il padding di listItem
        })}
      </List>
    </Box>
  );
};

export default DrawerContent;
