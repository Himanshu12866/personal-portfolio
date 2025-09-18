import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";

import { AppContext } from "../../context/datacontext";
const steps = [
  { label: "Discovery", size: 180, sxsize: 100 },
  { label: "Definition", size: 260, sxsize: 120 },
  { label: "Development", size: 300, sxsize: 140 },
  { label: "Delivery", size: 160, sxsize: 80 },
];

const SkillProcess = () => {
  const { darkMode } = useContext(AppContext);
  const [hovered, setHovered] = useState(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setHovered(index);
    setMouse({ x, y });
  };

  const handleLeave = () => {
    setHovered(null);
    setMouse({ x: 0, y: 0 });
  };
  function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return width;
  }
  const width = useWindowWidth();
  return (
    <div className="relative w-full max-w-3xl mx-auto my-20">
      <h2 className="text-4xl font-bold text-center  pb-36">The Process</h2>
      <div className="grid grid-cols-4 items-end text-center">
        {steps.map((step, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center relative group"
          >
            <div
              className={`absolute left-1/2 w-1  bottom-8 bg-transparent md:h-[400px] h-[300px] border-l-[2px] border-dashed ${
                darkMode ? "border-[#ffffff4f]" : "border-[#0000004f]"
              } `}
            ></div>
            <motion.div
              className={`rounded-full border z-[1] hover:cursor-grab  backdrop-blur-sm ${
                !darkMode
                  ? "bg-[rgba(245,245,245,0.9)] shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
                  : "bg-[#00000052]  shadow-[0_0_8px_rgba(0,255,255,0.6)]"
              }`}
              style={{
                width: width > 766 ? step.size : step.sxsize,
                height: width > 766 ? step.size : step.sxsize,
              }}
              onMouseMove={(e) => handleMouseMove(e, i)}
              onMouseLeave={handleLeave}
              animate={
                hovered === i
                  ? { x: mouse.x * 0.4, y: mouse.y * 0.4, scale: 0.9 }
                  : { x: 0, y: 0 }
              }
              transition={{ type: "spring", stiffness: 120, damping: 10 }}
            />
            {darkMode ? (
              <span
                className={`mt-20  font-medium md:text-xl text-sm font-heading ${
                  hovered === i ? "text-white" : "text-gray-400"
                } `}
              >
                {step.label}
              </span>
            ) : (
              <span
                className={`mt-20  font-medium md:text-xl text-sm font-heading ${
                  hovered === i ? "text-[#ff7700]" : "text-black"
                } `}
              >
                {step.label}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillProcess;
