import React from "react";
import ProjectBeam from "./ProjectBeam";

import SplitText from "../SplitText";
const ProjectAbout = () => {
  return (
    <>
      <h2 className="text-4xl font-bold flex justify-center items-center  py-36 shadow-[inset_0_3px_1px_rgba(255,255,255,0.4),inset_0_0px_0px_rgba(255,255,255,0.4)]">
        {" "}
        
        <SplitText
          delay={80}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          className="text-left"
       text="Code Constellation"
        />
      </h2>
      <div className={`flex justify-center  items-center w-full  `}>
        <ProjectBeam />
      </div>{" "}
    </>
  );
};

export default ProjectAbout;
