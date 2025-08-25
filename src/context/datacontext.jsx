import React, { createContext, useState } from "react";
export const AppContext = createContext();
const AppContextProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };
  const values = {
    darkMode,
    setDarkMode,
    toggleDarkMode,
  };
  return (
    <AppContext.Provider value={values}>{props.children}</AppContext.Provider>
  );
};
export default AppContextProvider;
