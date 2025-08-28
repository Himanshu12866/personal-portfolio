import React from "react";
import AboutBanner from "../../components/about/AboutBanner";
import AboutMe from "../../components/about/AboutMe";
import AboutExperience from "../../components/about/AboutExperience";
import AboutCertificate from "../../components/about/AboutCertificate";

const AboutPage = () => {
  return (
    <>
      <AboutBanner />
      <AboutMe />
      <AboutExperience />
      <AboutCertificate />
    </>
  );
};

export default AboutPage;
