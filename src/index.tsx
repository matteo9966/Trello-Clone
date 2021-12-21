import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalThemeProvider } from "./GlobalTheme/ThemeProvider";
import { Provider } from "react-redux";
// import store from "./state/store";
import store from './redux/store'
import { CssBaseline } from "@mui/material";
ReactDOM.render(
  <React.StrictMode>
    <CssBaseline></CssBaseline>
      <Provider store={store}>
    <GlobalThemeProvider>
      <App />
      
    </GlobalThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
