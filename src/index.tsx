import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalThemeProvider } from "./GlobalTheme/ThemeProvider";
import { Provider } from "react-redux";
// import store from "./state/store";
import store from './redux/store'
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
    <GlobalThemeProvider>
      <App />
      
    </GlobalThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
