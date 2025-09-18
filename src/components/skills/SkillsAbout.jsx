import React, { useContext } from "react";
import { AppContext } from "../../context/datacontext";
import SkillsOrbit from "./SkillsOrbit";

const SkillsAbout = () => {
  const { darkMode } = useContext(AppContext);



  return (
    <div
      className={`flex justify-center flex-col gap-24 items-center w-full py-20 sm:px-8 px-4 shadow-[inset_0_3px_1px_rgba(255,255,255,0.4),inset_0_0px_0px_rgba(255,255,255,0.4)] `}
    >
      <div className="xl:w-4/5 w-full grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-8">
        <SkillsOrbit />

        <div
          className={`  flex flex-col gap-5 p-4 md:px-8 px-6 rounded-[20px] z-[5] backdrop-blur-sm ${
            !darkMode
              ? "bg-[rgba(245,245,245,0.9)] rounded-xl shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
              : "bg-[#00000052] rounded-xl shadow-[0_0_8px_rgba(0,255,255,0.6)]"
          } 
  `}
        >
          <div>
            <h2 className="md:text-3xl text-2xl font-heading pb-2">
              " Not appearance, not luck — only skills define the craft"
            </h2>
            <p className="text-xl text-justify font-para py-2">
              Each skill I carry isn’t just a checkbox on a résumé — it’s a tool
              I’ve tested, refined, and mastered through real projects. From
              frontend finesse to backend logic, my craft is built on
              discipline, curiosity, and the drive to turn concepts into
              seamless digital experiences.
            </p>
            <p className="text-xl text-justify font-para pt-2">
              Below, I’ve organized my skills into clear categories — so you can
              see not just what I know, but how I apply it across different
              parts of development.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsAbout;
