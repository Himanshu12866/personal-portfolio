import React, { useEffect } from "react";
import HomeBanner from "../../components/home/HomeBanner";
import HomeQuote from "../../components/home/HomeQuote";
import HomeAbout from "../../components/home/HomeAbout";
import HomeSkills from "../../components/home/HomeSkills";
import HomeProjects from "../../components/home/HomeProjects";
import HomeContact from "../../components/home/HomeContact";
import ScrollSKills from "../../components/home/ScrollSKills";
import { useLenis } from "../../components/SmoothScroll";
import HomeGithub from "../../components/home/HomeGithub";

const HomePage = () => {
  const lenisRef = useLenis();
  useEffect(() => {
    lenisRef?.current?.scrollTo(0); // top of the page
  }, []);
  return (
    <>
      <title>
        Himanshu | MERN Stack | Frontend | Backend Developer Portfolio
      </title>
      <meta
        name="description"
        content="Welcome to Himanshu's personal portfolio. Explore creative and responsive web projects built with React, Tailwind CSS, and modern web technologies."
      />
      <meta
        name="keywords"
        content="Frontend Developer, Web Developer, React JS, Tailwind CSS, JavaScript, Node.js, Portfolio, Responsive Web Design, UI/UX, Personal Website, Projects, HTML, CSS, Modern Web Developer"
      />
      {/* Open Graph */}
      <meta
        property="og:title"
        content="Himanshu | Frontend Developer | MERN Stack Developer | Full Stack Developer | Web Designer Portfolio"
      />
      <meta
        property="og:description"
        content="Explore creative and responsive web projects built with React, Tailwind CSS, and modern web technologies."
      />
     
      <HomeBanner />
      <HomeQuote />
      <HomeAbout />
      <HomeSkills />
      <ScrollSKills />
      <HomeProjects />
      <HomeGithub />
      <HomeContact />
    </>
  );
};

export default HomePage;
