import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider, Button, CssBaseline } from "@mui/material";
import { appTheme } from "./theme/theme.js";
import { ResponsiveContextProvider } from "./context/ResponsiveContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={appTheme}>
      <CssBaseline enableColorScheme />
      <ResponsiveContextProvider>
        <App />
      </ResponsiveContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
