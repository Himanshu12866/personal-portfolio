import React, { useEffect } from "react";
import AboutBanner from "../../components/about/AboutBanner";
import AboutMe from "../../components/about/AboutMe";
import AboutExperience from "../../components/about/AboutExperience";
import AboutCertificate from "../../components/about/AboutCertificate";
import EducationTimeline from "../../components/about/AboutTimeline";
import { useLenis } from "../../components/SmoothScroll";

const AboutPage = () => {
  const lenisRef = useLenis();
  useEffect(() => {
    lenisRef?.current?.scrollTo(0); // top of the page
  }, []);
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
