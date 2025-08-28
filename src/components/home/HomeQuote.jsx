import React, { useContext } from "react";
import { AppContext } from "../../context/datacontext";

const HomeQuote = () => {
  const { darkMode } = useContext(AppContext);
  return (
    <div
      className={`
  flex flex-col items-center justify-center 

  2xl:px-80 xl:px-40 md:py-[100px] py-16
  w-full relative 
  flex-none flex-nowrap 
  h-min 
  overflow-visible 
  backdrop-blur-[10px]  text-center
   ${
     !darkMode ? "bg-[rgba(222,222,222,0.9)]" : "bg-[rgba(69,69,69,1)] inset-0"
   }  md:text-4xl text-2xl
  shadow-[inset_0_3px_1px_rgba(255,255,255,0.4),inset_0_-3px_1px_rgba(255,255,255,0.4)]
`}
    >
      <h2 className="md:px-20 px-8 font-heading tracking-wide">
        “I craft clean UIs, build scalable web apps, and make ideas click into
        code. From design to deployment, I don’t just develop — I deliver.”
      </h2>
      <p></p>
    </div>
  );
};

export default HomeQuote;
