import React, { useEffect } from "react";
import SkillBanner from "../../components/skills/SkillBanner";
import SkillsAbout from "../../components/skills/SkillsAbout";
import SkillsCards from "../../components/skills/SkillsCards";
import SkillProcess from "../../components/skills/SkillProcess";
import { useLenis } from "../../components/SmoothScroll";
// import MarqueeText from "../../components/MarqueeText";
import CurvedLoop from "../../components/about/AboutScroll";
const SkillsPage = () => {
  const lenisRef = useLenis();
  useEffect(() => {
    lenisRef?.current?.scrollTo(0); // top of the page
  }, [lenisRef]);
  return (
    <>
      <title>Himanshu's Skills | Frontend Expertise & Modern Web Tech</title>
        <meta
          name="description"
          content="Explore Himanshu’s technical skillset: React, Tailwind CSS, JavaScript, Node.js, and modern web technologies. Building interactive, responsive, and creative web solutions."
        />
        <meta
          name="keywords"
          content="Himanshu, Frontend Developer, Skills, React JS, Tailwind CSS, JavaScript, Node.js, MongoDB, Express, Web Development, Responsive Design, UI/UX, Portfolio"
        />
        {/* Open Graph */}
        <meta property="og:title" content="Himanshu's Skills | Frontend Expertise & Modern Web Tech" />
        <meta property="og:description" content="Check out Himanshu’s skills in React, Tailwind CSS, JavaScript, Node.js, and other modern web technologies for creative, responsive projects." />
        <meta property="og:type" content="website" />
     
      <SkillBanner />
      <SkillsAbout />
      <SkillsCards />
      <SkillProcess />
      {/* <MarqueeText /> */}
      <CurvedLoop speed={3}
        curveAmount={20}
        direction="right"
        interactive={true}
        marqueeText="🔁 Repeat 😴 Sleep 💻 Code 🍔 Eat 🔁 Repeat 😴 Sleep 💻 Code 🍔 Eat 🔁 Repeat 😴 Sleep 💻 Code 🍔 Eat"
      />
    </>
  );
};

export default SkillsPage;
