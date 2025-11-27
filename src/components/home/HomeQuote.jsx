import React from "react";
import BlurText from "../BlurText";
const HomeQuote = () => {
  return (
    <div
      className={`flex flex-col items-center justify-center 2xl:px-80 xl:px-40 md:py-[100px] py-16 w-full relative flex-none flex-nowrap h-min  overflow-visible text-center md:text-4xl text-2xl shadow-[inset_0_3px_1px_rgba(255,255,255,0.4),inset_0_-3px_1px_rgba(255,255,255,0.4)]`}
    >
      
      <BlurText
        text="I craft clean UIs, build scalable web apps, and make ideas click into code. From design to deployment, I don’t just develop - I deliver."
        delay={50}
        animateBy="words"
        direction="bottom"
        className="md:px-20 font-medium px-8 text-center font-heading text-[#f59e0b] md:text-4xl text-2xl flex justify-center items-center tracking-wide "
      />
    </div>
  );
};

export default HomeQuote;
