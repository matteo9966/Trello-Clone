import { Typography, List, ListItem, Button, Box, Avatar } from "@mui/material";
import { Fragment } from "react";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import { useDispatch } from "react-redux";
import { closeDrawer } from "../../redux/drawerSlice";
import { v4 as uuidv4 } from "uuid";

const DrawerContent = () => {
  const dispatch = useDispatch();

  const workSpaceHeader = (
    <Fragment>
      <Avatar variant="square" sx={{ margin: 0 }}>
        S
      </Avatar>{" "}
      <Typography paragraph noWrap sx={{ margin: 0 }}>
        spazio di lavoro di default{" "}
        <Button size="small" onClick={() => dispatch(closeDrawer())}>
          {"<"}
        </Button>
        <Typography variant="subtitle2">gratis</Typography>
      </Typography>
    </Fragment>
  );

  const bulletinBoard = (
    <Fragment>
      <Typography paragraph noWrap>
        <FormatListBulletedIcon />
      </Typography>
      <Typography paragraph noWrap>
        Bacheca
      </Typography>
    </Fragment>
  );

  const members = (
    <Fragment>
      <Typography paragraph noWrap>
        <PersonOutlineIcon />
      </Typography>
      <Typography paragraph noWrap>
        Membri
      </Typography>
    </Fragment>
  );

  const settings = (
    <Fragment>
      <Typography paragraph noWrap>
        <SettingsIcon />
      </Typography>
      <Typography paragraph noWrap>
        Impostazioni
      </Typography>
    </Fragment>
  );

  const workspace = "Viste dello spazio di lavoro";
  const youreBulletinBoard = " le tue bacheche";
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
              width: "100%",
            }}
          />,
          bulletinBoard,
          members,
          settings,
          workspace,
          youreBulletinBoard,
        ].map((itemList) => {
          return <ListItem key={uuidv4()}>{itemList}</ListItem>;
        })}
      </List>
    </Box>
  );
};

export default DrawerContent;
