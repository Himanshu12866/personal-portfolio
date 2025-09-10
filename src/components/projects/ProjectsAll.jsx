import React, { useContext } from "react";
import CircularGallery from "./ProjectCircular";
import { AppContext } from "../../context/datacontext";

const ProjectsAll = () => {
  const { darkMode } = useContext(AppContext);
  return (
    <>
      <div>
              <h2 className="text-4xl font-bold text-center pt-20">Professional Journey</h2>
        <CircularGallery textColor={`${darkMode ? "white" : "black"}`} />
      </div>
    </>
  );
};

export default ProjectsAll;
