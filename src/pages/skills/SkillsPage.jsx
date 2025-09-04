import React from "react";
import SkillBanner from "../../components/skills/SkillBanner";
import SkillsAbout from "../../components/skills/SkillsAbout";
import SkillsCards from "../../components/skills/SkillsCards";
const SkillsPage = () => {
  return (
    <div>
      <SkillBanner />
      <SkillsAbout />
      <SkillsCards />
    </div>
  );
};

export default SkillsPage;
