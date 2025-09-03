import React, { useContext } from "react";
import { AppContext } from "../../context/datacontext";
import SkillsOrbit from "./SkillsOrbit";


const SkillsAbout = () => {
  const { darkMode } = useContext(AppContext);

  const cardStyle = {
    backdropFilter: "blur(5px)",
    borderRadius: "10px",
    boxShadow: `
      rgba(0, 0, 0, 0.07) 0px 0.706592px 0.706592px -0.583333px,
      rgba(0, 0, 0, 0.07) 0px 1.80656px 1.80656px -1.16667px,
      rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -1.75px,
      rgba(0, 0, 0, 0.06) 0px 6.8656px 6.8656px -2.33333px,
      rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -2.91667px,
      rgba(0, 0, 0, 0.03) 0px 30px 30px -3.5px,
      rgb(255, 255, 255) 0px 0px 1px 0px inset
    `,
    opacity: 1,
    borderBottom: "2px solid rgba(255, 255, 255, 0.3)",
    borderLeft: "0px solid",
    borderRight: "0px solid",
  };

  return (
    <div
      className={`flex justify-center flex-col gap-24 items-center w-full py-20 px-8 shadow-[inset_0_3px_1px_rgba(255,255,255,0.4),inset_0_0px_0px_rgba(255,255,255,0.4)] ${!darkMode
        ? "bg-[rgba(222,222,222,0.9)]"
        : "bg-[rgba(69,69,69,1)] inset-0"
        }`}
    >
    <div className="lg:w-4/5 w-full grid grid-cols-2">
   <SkillsOrbit />

   
      <div
        className={`  flex flex-col gap-5 p-4 md:px-8 px-6 rounded-[20px] z-[5] backdrop-blur-sm ${!darkMode ? "bg-[rgba(245,245,245,0.9)] " : "bg-[#f5f5f552] inset-0"
          } 
  opacity-100
  shadow-[0px_0.706592px_0.706592px_-0.666667px_rgba(0,0,0,0.08),
          0px_1.80656px_1.80656px_-1.33333px_rgba(0,0,0,0.08),
          0px_3.62176px_3.62176px_-2px_rgba(0,0,0,0.07),
          0px_6.8656px_6.8656px_-2.66667px_rgba(0,0,0,0.07),
          0px_13.6468px_13.6468px_-3.33333px_rgba(0,0,0,0.05),
          0px_30px_30px_-4px_rgba(0,0,0,0.02),
          inset_0px_3px_1px_0px_rgb(255,255,255)]`}
        style={cardStyle}
      >
        <div>
        </div>

      </div>
        </div>
    </div>
  );
};

export default SkillsAbout;
