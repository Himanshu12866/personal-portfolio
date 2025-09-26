import React, { useContext } from "react";
import { AppContext } from "../../context/datacontext";
import MagnetLines from "./ProjectMagnet";
import ProjectBeam from "./ProjectBeam";

const ProjectAbout = () => {
  const { darkMode } = useContext(AppContext);

  return (
    <div
      className={`flex justify-center  items-center w-full py-20  shadow-[inset_0_3px_1px_rgba(255,255,255,0.4),inset_0_0px_0px_rgba(255,255,255,0.4)] `}
    >
      <ProjectBeam />
    </div>
  );
};

export default ProjectAbout;
