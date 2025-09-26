/* eslint-disable react-hooks/exhaustive-deps */
import ProjectBanner from "../../components/projects/ProjectBanner";
import ProjectAbout from "../../components/projects/ProjectAbout";
import ProjectsAll from "../../components/projects/ProjectsAll";
import { useLenis } from "../../components/SmoothScroll";
import { useEffect } from "react";
// import Particles from "../../components/projects/ProjectBG";
import SendingMessage from "../../components/Sending";
import ProjectBeam from "../../components/projects/ProjectBeam";
const ProjectPage = () => {
  const lenisRef = useLenis();
  useEffect(() => {
    lenisRef?.current?.scrollTo(0); // top of the page
  }, []);
  return (
    <>
      <ProjectBanner />
      <ProjectBeam />
      <ProjectAbout />
      <ProjectsAll />
      <SendingMessage />
    </>
  );
};

export default ProjectPage;
