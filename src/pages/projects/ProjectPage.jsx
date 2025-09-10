import React, { useContext } from "react";
import ProjectBanner from "../../components/projects/ProjectBanner";
import ProjectAbout from "../../components/projects/ProjectAbout";
import CircularGallery from "../../components/projects/ProjectCircular";
import { AppContext } from "../../context/datacontext";
import ProjectsAll from "../../components/projects/ProjectsAll";
// import AnimatedBeam from "../../components/projects/ProjectBeam";

const ProjectPage = () => {
  const { darkMode } = useContext(AppContext);
  return (
    <>
      <ProjectBanner />
      <ProjectAbout />
      {/* <AnimatedBeam /> */}
      <ProjectsAll />
    </>
  );
};

export default ProjectPage;
