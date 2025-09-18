import React, { useContext } from "react";
import { AppContext } from "../../context/datacontext";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import SkillScrollerScrollBoost from "./HomeScrollSkills";
import { Link } from "react-router-dom";
const HomeSkills = () => {
  const { darkMode } = useContext(AppContext);
  return (
    <div
      className={`flex justify-center flex-col font-heading gap-24 items-center w-full pt-20 pb-28  `}
    >
      <h2 className="text-4xl font-bold">My Superpowers</h2>
      <div
        className=" w-full "
      >
        <SkillScrollerScrollBoost />
      </div>
      <div className=" flex justify-start px-2 items-center">
        <Link to="/skills" className={`bg-black font-para  text-white sm:px-8 z-[3] px-4 py-3 font-medium rounded-[10px] opacity-100 hover:opacity-60 transition-all hover:duration-200 ${
                       !darkMode
                         ? "  shadow-[rgba(61,61,61,0.72)_0px_0.602187px_1.08394px_-1.25px,rgba(61,61,61,0.64)_0px_2.28853px_4.11936px_-2.5px,rgba(61,61,61,0.25)_0px_10px_18px_-3.75px,rgba(0,0,0,0.35)_0px_0.706592px_0.706592px_-0.583333px,rgba(0,0,0,0.34)_0px_1.80656px_1.80656px_-1.16667px,rgba(0,0,0,0.33)_0px_3.62176px_3.62176px_-1.75px,rgba(0,0,0,0.3)_0px_6.8656px_6.8656px_-2.33333px,rgba(0,0,0,0.26)_0px_13.6468px_13.6468px_-2.91667px,rgba(0,0,0,0.15)_0px_30px_30px_-3.5px]"
                         : " shadow-[0_0_8px_rgba(0,255,255,0.6)]"
                     }`}>
       
            More About Skills <ArrowOutwardIcon />
          
        </Link>
      </div>
    </div>
  );
};

export default HomeSkills;