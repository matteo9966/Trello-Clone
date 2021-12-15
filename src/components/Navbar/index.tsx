import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Title } from "./Title";
import SignpostIcon from "@mui/icons-material/Signpost";
import { SearchBar } from "./SearchBar/SearchBar";
import { MainContainer } from "./UI/MainContainer";
export const Navbar: React.FC = () => {
  return (
    <AppBar>
      <Toolbar >
        <SignpostIcon sx={{ mr: 2 }} />
       <MainContainer sx={{display:'flex',justifyContent:'space-between',flexGrow:1}}>
        <MainContainer>
          <Title></Title>
          <Title></Title>
          <Title></Title>
          <Title></Title>
        </MainContainer>

        <MainContainer sx={{marginRight:'0px'}}>
          <SearchBar/>
          <Title></Title>
        </MainContainer>

       </MainContainer>
      </Toolbar>
    </AppBar>
  );
};
