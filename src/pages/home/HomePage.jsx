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
      <title>Himanshu | MERN Stack & Frontend Developer Portfolio</title>
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
