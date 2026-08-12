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
  }, [lenisRef]);
  return (
    <><title>Get to Know Himanshu's Personal details, Education, Experience</title>
      <meta
          name="description"
          content="Learn more about Himanshu, a passionate Frontend Developer & Web Designer. Skilled in React, Tailwind CSS, JavaScript, and modern web technologies, crafting responsive and interactive websites."
        />
        <meta
          name="keywords"
          content="About Himanshu, Frontend Developer, Web Designer, React JS, Tailwind CSS, JavaScript, Portfolio, UI/UX, Personal Website, Skills, Experience"
        />
        {/* Open Graph */}
        <meta property="og:title" content="About Me | Himanshu - Frontend Developer & Web Designer" />
        <meta property="og:description" content="Learn more about Himanshu, a passionate Frontend Developer & Web Designer crafting responsive and interactive websites." />
        <meta property="og:type" content="website" />

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
