import React from "react";
import { SxProps, Theme } from "@mui/material/styles";
import { Box } from "@mui/material";
export const MainContainer: React.FC<{ sx?: SxProps<Theme> }> = ({
  children,
  sx = {},
}) => {
  // const theme = useTheme();
  const MainContainerStyle: SxProps<Theme> = {
    display: "flex",
    flexDirection: "row",
    border: "1px solid red",
    ...sx,
  };
  return <Box sx={MainContainerStyle}>{children}</Box>;
};
