import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Title } from "./Title";
import SignpostIcon from "@mui/icons-material/Signpost";
import { SearchBar } from "./SearchBar/SearchBar";
import { MainContainer } from "./UI/MainContainer";
import { MenuButton } from "./Menu/MenuButton";
import { DropdownMenu } from "./Menu/DropdownMenu";
import InviteUser from "../InviteUser/InviteUser"
// import {useTheme} from '@mui/material/styles'
export const Navbar: React.FC = () => {
  // const theme = useTheme();
  //  sx={{maxHeight:`calc(${theme.typography.fontSize}+0.1rem)`}}

  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>();

  const onOpenDropDownMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorElement(e.currentTarget);
  };
  const onCloseDroDownMenu = () => {
    setAnchorElement(null);
  };

  return (
    <AppBar
      sx={{
        maxHeight: `45px`,
        justifyContent: "center",
        flexDirection: "column",
        gap: 0,
      }}
    >
      <DropdownMenu
        AnchorEl={anchorElement}
        open={!!anchorElement}
        items={[
          "elemento1",
          "elemento2",
          "elemento3",
          "elemento4",
          "elemento5",
        ]}
        onClose={onCloseDroDownMenu}
      ></DropdownMenu>
      <Toolbar sx={{ minHeight: `45px`, marginY: 0, maxHeight: "45px" }}>
        <SignpostIcon sx={{ mr: 2 }} />
        <MainContainer
          sx={{ display: "flex", justifyContent: "space-between", flexGrow: 1 }}
        >
          <MainContainer>
            <Title></Title>
            <MenuButton
              onClick={onOpenDropDownMenu}
              label="Recenti"
            ></MenuButton>
            <MenuButton
              onClick={onOpenDropDownMenu}
              label="Preferiti"
            ></MenuButton>
            <InviteUser/>
          </MainContainer>

          <MainContainer sx={{ marginRight: "0px" }}>
            <SearchBar />
            <Title></Title>
          </MainContainer>
        </MainContainer>
      </Toolbar>
    </AppBar>
  );
};
