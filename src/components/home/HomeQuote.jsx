import React, { useContext } from "react";
import { AppContext } from "../../context/datacontext";
import SplitText from "../SplitText";

const HomeQuote = () => {
  // const { darkMode } = useContext(AppContext);
  return (
    <div
      className={`
  flex flex-col items-center justify-center 

  2xl:px-80 xl:px-40 md:py-[100px] py-16
  w-full relative 
  flex-none flex-nowrap 
  h-min 
  overflow-visible 
    text-center
    md:text-4xl text-2xl
  shadow-[inset_0_3px_1px_rgba(255,255,255,0.4),inset_0_-3px_1px_rgba(255,255,255,0.4)]
`}
    >
      <SplitText delay={10}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        text="I craft clean UIs, build scalable web apps, and make ideas click into code. From design to deployment, I don’t just develop — I deliver."
      className="md:px-20 font-medium px-8 font-heading text-[#f59e0b] tracking-wide"
        
  />

    </div>
  );
};

export default HomeQuote;
