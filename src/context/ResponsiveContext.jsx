import React, { createContext, useContext } from "react";
import { useMediaQuery } from "@mui/material";

const ResponsiveContext = createContext();

const ResponsiveContextProvider = ({ children }) => {
  const isSmallScreens = useMediaQuery("(max-width:600px)");
  return (
    <ResponsiveContext.Provider value={isSmallScreens}>
      {children}
    </ResponsiveContext.Provider>
  );
};

export const useResponsive = () => useContext(ResponsiveContext);

export { ResponsiveContextProvider };
