import React, { createContext, useState, useEffect } from "react";
import portfolioData from "../data/data";

export const AppContext = createContext();
const AppContextProvider = (props) => {
  // Check system preference initially
  const getSystemTheme = () =>
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [darkMode, setDarkMode] = useState(getSystemTheme);
  const [skills, setSkills] = useState([]);
  const [homeData, setHomeData] = useState([]);
  const [aboutData, setAboutData] = useState([]);
  const [projects, setProjects] = useState([]);
  const data = portfolioData;

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };
  useEffect(() => {
    if (data && data.length > 0) {
      const skillsIcons = portfolioData.find((item) => item.id === 0);
      setSkills(skillsIcons);
      const homepagedata = portfolioData.find((item) => item.id === 1);
      setHomeData(homepagedata.data);
      const aboutpagedata = portfolioData.find((item) => item.id === 2);
      setAboutData(aboutpagedata);
      const projectData = portfolioData.find((item) => item.id === 3);
      setProjects(projectData.data);
    }
  }, [data]);
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
    skills,
    homeData,
    aboutData,
    projects
  };
  return (
    <AppContext.Provider value={values}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
