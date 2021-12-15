import React from "react";
import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { SxProps, Theme, alpha, useTheme } from "@mui/material/styles";
export const SearchBar = () => {
  const theme = useTheme();
  const SearchBarStyle: SxProps<Theme> = {
    display: "flex",
    width: "15rem",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    border: `2px solid ${alpha(theme.palette.common.white, 0.55)}`,
    borderRadius: theme.shape.borderRadius,
    alignItems: "center",
    margin: theme.spacing(0, 1),
  };

  const SearchIconStyle: SxProps<Theme> = {
    height: "100%",
    padding: theme.spacing(0, 1),
  };

  const InputBaseStyle: SxProps<Theme> = {
    flex: 1,
    color: theme.palette.common.white,
    width: '100%',
    // '&:focus':{backgroundColor: alpha(theme.palette.common.white, 0.95)} #FIXME: parti da qui per aggiustare il colore quando focalizzi!
  };

  return (
    <Box sx={SearchBarStyle}>
      <SearchIcon sx={SearchIconStyle}></SearchIcon>

      <InputBase
        sx={InputBaseStyle}
        placeholder="Carca..."
      />
    </Box>
  );
};
