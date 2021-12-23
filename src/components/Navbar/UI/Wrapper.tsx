import React from "react";
import Box from "@mui/material/Box"; // box è già flex di suo!
import { alpha, SxProps, Theme, useTheme } from "@mui/material/styles";
export const Wrapper: React.FC<{
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}> = ({ children, onClick }) => {
  const theme = useTheme();
  const WrapperStyle: SxProps<Theme> = {
    display: "flex",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    marginX: "3px",
    paddingX: theme.spacing(1),
    
    borderRadius: theme.shape.borderRadius,
    "&:hover": { backgroundColor: alpha(theme.palette.common.white, 0.16) },
    textAlign: "center",
  };

  return (
    <Box sx={WrapperStyle} onClick={onClick}>
      {children}
    </Box>
  );
};
