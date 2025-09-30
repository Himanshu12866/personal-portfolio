import React from "react";
import ProjectBeam from "./ProjectBeam";
const ProjectAbout = () => {
  return (

    <>
     <h2 className="text-4xl font-bold text-center  py-36 shadow-[inset_0_3px_1px_rgba(255,255,255,0.4),inset_0_0px_0px_rgba(255,255,255,0.4)]">Code Constellation</h2>
  
    <div
      className={`flex justify-center  items-center w-full  `}>
      <ProjectBeam />
    </div>  </>
  );
};

export default ProjectAbout;
