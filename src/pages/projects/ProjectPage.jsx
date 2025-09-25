import ProjectBanner from "../../components/projects/ProjectBanner";
import ProjectAbout from "../../components/projects/ProjectAbout";
import ProjectsAll from "../../components/projects/ProjectsAll";
import { useLenis } from "../../components/SmoothScroll";
import { useEffect } from "react";
// import Particles from "../../components/projects/ProjectBG";
// import SendingMessage from "../../components/Sending"
const ProjectPage = () => {
    const lenisRef = useLenis();
    useEffect(() => {
      lenisRef?.current?.scrollTo(0); // top of the page
    }, []);
  return (
    <>
      <ProjectBanner />
      <ProjectAbout />
      <ProjectsAll />
     
    </>
  );
};

export default ProjectPage;
