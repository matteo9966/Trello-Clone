import { Typography } from "@mui/material";
import React from "react";
import StyleIcon from "@mui/icons-material/Style";
import { Wrapper } from "./UI/Wrapper";
export const Title = () => {
  return (
    <Wrapper>
      <StyleIcon></StyleIcon>
      <Typography variant="h6">Trello-Clone</Typography>
    </Wrapper>
  );
};
