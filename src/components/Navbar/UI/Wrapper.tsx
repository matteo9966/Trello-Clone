import React from "react";
import Box from "@mui/material/Box"; // box è già flex di suo!
import { alpha, SxProps, Theme, useTheme } from "@mui/material/styles";
export const Wrapper: React.FC = ({ children }) => {
  const theme = useTheme();
  const WrapperStyle: SxProps<Theme> = {
    display:'flex',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginX:'2px',
    border: "2px solid green",
    borderRadius:theme.shape.borderRadius,
    "&:hover": { backgroundColor: alpha(theme.palette.common.white, 0.16) },
    textAlign:'center'
  };

  return <Box sx={WrapperStyle}>{children}</Box>;

};
