import React, { useEffect } from "react";
import HomeBanner from "../../components/home/HomeBanner";
import HomeQuote from "../../components/home/HomeQuote";
import HomeAbout from "../../components/home/HomeAbout";
import HomeSkills from "../../components/home/HomeSkills";
import HomeProjects from "../../components/home/HomeProjects";
import HomeContact from "../../components/home/HomeContact";
import ScrollSKills from "../../components/home/ScrollSKills";

const HomePage = () => {
   useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }, [])
  return (
    <>
      <title>Himanshu | MERN Stack & Frontend Developer Portfolio</title>
      <HomeBanner />
      <HomeQuote />
      <HomeAbout />
      <HomeSkills />
      <ScrollSKills />
      <HomeProjects />
      <HomeContact />
    </>
  );
};

export default HomePage;
