import React, { useEffect } from "react";
import AboutBanner from "../../components/about/AboutBanner";
import AboutMe from "../../components/about/AboutMe";
import AboutExperience from "../../components/about/AboutExperience";
import AboutCertificate from "../../components/about/AboutCertificate";
import EducationTimeline from "../../components/about/AboutTimeline";
import { useLenis } from "../../components/SmoothScroll";
import CurvedLoop from "../../components/about/AboutScroll";
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
      <CurvedLoop   direction="right" marqueeText="⚡ React 🎨 Tailwind 🛠️ Node 🗄️ Mongo ☕ Coffee 💡 Ideas 🖥️ Coding 📦 Deploy 🎮 Game 🎶 Music 💻 Code 🌍 Explore" />
    <div className="mt-40"></div>
    </>
  );
};

export default AboutPage;
