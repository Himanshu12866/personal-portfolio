import React, { useEffect } from "react";
import SkillBanner from "../../components/skills/SkillBanner";
import SkillsAbout from "../../components/skills/SkillsAbout";
import SkillsCards from "../../components/skills/SkillsCards";
import GsapScrollCarousel from "../../components/skills/SkillsCarousel";
const SkillsPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])
  return (
    <div>
      <SkillBanner />
      <SkillsAbout />
      <SkillsCards />
      <GsapScrollCarousel />
    </div>
  );
};

export default SkillsPage;
