import React from "react";
import HomeBanner from "../../components/home/HomeBanner";
import HomeQuote from "../../components/home/HomeQuote";
import HomeAbout from "../../components/home/HomeAbout";
import HomeSkills from "../../components/home/HomeSkills";

const HomePage = () => {
  return (
    <>
      <title>Himanshu | MERN Stack & Frontend Developer Portfolio</title>
      <HomeBanner />
      <HomeQuote />
      <HomeAbout />
      <HomeSkills />
    </>
  );
};

export default HomePage;
