import { Typography, List, ListItem, Button } from "@mui/material";
import { Fragment } from "react";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SettingsIcon from "@mui/icons-material/Settings";

const DrawerContent = () => {
  const workSpaceHeader = (
    <Fragment>
      <Typography paragraph noWrap>
        spazio di lavoro di default <Button size="small">{"<"}</Button>
        <Typography variant="subtitle2">gratis</Typography>
      </Typography>
    </Fragment>
  );

  const separator = (
    <hr
      style={{
        backgroundColor: "black",
        width: "100%",
      }}
    />
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

  return (
    <List>
      {[
        workSpaceHeader,
        separator,
        bulletinBoard,
        members,
        settings,
        workspace,
      ].map((itemList) => {
        return <ListItem>{itemList}</ListItem>;
      })}
    </List>
  );
};

export default DrawerContent;
