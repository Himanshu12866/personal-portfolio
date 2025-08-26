import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  // Initial state based on system preference
  const getSystemTheme = () =>
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [darkMode, setDarkMode] = useState(getSystemTheme);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  // Listen for system theme changes (live update)
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      setDarkMode(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const values = {
    darkMode,
    setDarkMode,
    toggleDarkMode,
  };

  return (
    <AppContext.Provider value={values}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
