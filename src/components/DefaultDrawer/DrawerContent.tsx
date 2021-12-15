import { Typography, List, ListItem, Button } from "@mui/material";
import { Fragment } from "react";

const DrawerContent = () => {
  const workSpaceHeader = (
    <Fragment>
      <Typography paragraph noWrap>
        spazio di lavoro di default <Button size="small">{"<"}</Button>
      </Typography>
    </Fragment>
  );

  const bulletinBoard = "Bacheca";
  const members = "Membri";
  const settings = "Impostazioni";
  const workspace = "...";

  return (
    <List>
      {[workSpaceHeader, bulletinBoard, members, settings, workspace].map(
        (itemList) => {
          return <ListItem>{itemList}</ListItem>;
        }
      )}
    </List>
  );
};

export default DrawerContent;
