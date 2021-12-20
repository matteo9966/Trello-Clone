import { Typography, List, ListItem, Button, Box } from "@mui/material";
import { Fragment } from "react";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import Avatar from "@mui/material/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { deactiveDrawer } from "./logic";
import { height } from "@mui/system";

const DrawerContent = () => {
  const actions = bindActionCreators({ deactiveDrawer }, useDispatch());

  const workSpaceHeader = (
    <Fragment>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Avatar variant="square">S</Avatar>
        <Box component="div" sx={{ marginLeft: "8px", marginRight: "4px" }}>
          <Typography paragraph noWrap sx={{ marginBottom: "0px" }}>
            Spazio di lavoro di default{" "}
          </Typography>
          <Typography variant="subtitle2">gratis</Typography>
        </Box>

        <Button
          size="small"
          onClick={() => actions.deactiveDrawer()}
          sx={{
            width: "3%",
            height: "3%",
          }}
        >
          {"<"}
        </Button>
      </Box>
    </Fragment>
  );

  const separator = (
    <hr
      style={{
        width: "100%",
      }}
    />
  );

  const bulletinBoard = (
    <Fragment>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <FormatListBulletedIcon sx={{ width: "5%", height: "5%" }} />
        <Typography paragraph noWrap sx={{ marginBottom: "0px" }}>
          Bacheca
        </Typography>
      </Box>
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
  const workspaceTabe = "Tabelle dello spazio di lavoro";
  const youreBulletinBoard = "Le tue bacheche";
  return (
    <List>
      {[
        workSpaceHeader,
        separator,
        bulletinBoard,
        members,
        settings,
        workspace,
        workspaceTabe,
        youreBulletinBoard,
      ].map((itemList) => {
        return <ListItem>{itemList}</ListItem>;
      })}
    </List>
  );
};

export default DrawerContent;
