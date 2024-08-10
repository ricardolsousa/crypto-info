import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./store/store";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router } from "react-router-dom";

// Or Create your Own theme:
const theme = createTheme({
  palette: {
    primary: {
      main: "#EDECEE",
    },
    secondary: { main: "#1FD89B" },
    background: {
      default: "#15172B",
      paper: "#1C213C",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </Provider>
  // </React.StrictMode>
);
