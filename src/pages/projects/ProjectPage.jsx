/* eslint-disable react-hooks/exhaustive-deps */
import ProjectBanner from "../../components/projects/ProjectBanner";
import ProjectAbout from "../../components/projects/ProjectAbout";
import ProjectsAll from "../../components/projects/ProjectsAll";
import { useLenis } from "../../components/SmoothScroll";
import { useEffect } from "react";
import ProjectStats from "../../components/projects/ProjectStats";
const ProjectPage = () => {
  const lenisRef = useLenis();
  useEffect(() => {
    lenisRef?.current?.scrollTo(0); // top of the page
  }, []);
  return (
    <>
        <title>Himanshu's Projects | Creative Web Development Portfolio</title>
        <meta
          name="description"
          content="Check out Himanshu’s portfolio of web projects, showcasing expertise in React, Tailwind CSS, JavaScript, Node.js, and modern web development. Interactive and responsive designs."
        />
        <meta
          name="keywords"
          content="Himanshu, Web Projects, Portfolio, Frontend Developer, React JS, Tailwind CSS, JavaScript, Node.js, MongoDB, Express, UI/UX, Responsive Design, Creative Websites"
        />
        {/* Open Graph */}
        <meta property="og:title" content="Himanshu's Projects | Creative Web Development Portfolio" />
        <meta property="og:description" content="Explore Himanshu’s portfolio projects, highlighting skills in React, Tailwind CSS, JavaScript, and modern web technologies." />
        <meta property="og:type" content="website" />
      <ProjectBanner />
      
      <ProjectAbout />
      <ProjectStats/>
      <ProjectsAll />
    </>
  );
};

export default ProjectPage;
