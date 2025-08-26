import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  // Check system preference initially
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
      setDarkMode(e.matches); // update state when system theme changes
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  // Apply theme instantly to <body> whenever darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

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
