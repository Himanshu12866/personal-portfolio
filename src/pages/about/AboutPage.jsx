import React from "react";
import AboutBanner from "../../components/about/AboutBanner";
import AboutMe from "../../components/about/AboutMe";
import AboutExperience from "../../components/about/AboutExperience";
import AboutCertificate from "../../components/about/AboutCertificate";
import EducationTimeline from "../../components/about/AboutTimeline";

const AboutPage = () => {
  return (
    <>
      <AboutBanner />
      <AboutMe />
      <AboutExperience />
      <AboutCertificate />
      <EducationTimeline />
    </>
  );
};

export default AboutPage;
