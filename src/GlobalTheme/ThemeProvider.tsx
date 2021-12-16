import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";

export const GlobalThemeProvider: React.FC = ({ children }) => {
  const theme = createTheme({
     typography:{
         fontSize:10
     },
     shape:{borderRadius:3},
     components:{MuiToolbar:{
        styleOverrides:{root:{
            padding:0,
         
        }}
     }}
  });

 
 
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
