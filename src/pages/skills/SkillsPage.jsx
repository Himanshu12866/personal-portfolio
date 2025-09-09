import React, { useEffect } from "react";
import SkillBanner from "../../components/skills/SkillBanner";
import SkillsAbout from "../../components/skills/SkillsAbout";
import SkillsCards from "../../components/skills/SkillsCards";
import SkillProcess from "../../components/skills/SkillProcess";
import { useLenis } from "../../components/SmoothScroll";
import MarqueeText from "../../components/MarqueeText";
import CurvedLoop from "../../components/about/AboutScroll";
const SkillsPage = () => {
  const lenisRef = useLenis();
  useEffect(() => {
    lenisRef?.current?.scrollTo(0); // top of the page
  }, []);
  return (
    <div>
      <SkillBanner />
      <SkillsAbout />
      <SkillsCards />
      <SkillProcess />
      {/* <MarqueeText /> */}
      <CurvedLoop speed={3}
        curveAmount={20}
        direction="right"
        interactive={true}
        marqueeText="🍔 Eat 😴 Sleep 💻 Code 🔁 Repeat"
      />
    </div>
  );
};

export default SkillsPage;
