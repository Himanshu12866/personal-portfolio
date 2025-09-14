import ProjectBanner from "../../components/projects/ProjectBanner";
import ProjectAbout from "../../components/projects/ProjectAbout";
import ProjectsAll from "../../components/projects/ProjectsAll";
import Particles from "../../components/projects/ProjectBG";
const ProjectPage = () => {
  return (
    <>
      <ProjectBanner />
      <div className="w-full h-4/5">


      <Particles />
      </div>
      <ProjectAbout />
      <ProjectsAll />
    </>
  );
};

export default ProjectPage;
