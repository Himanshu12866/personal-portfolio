import React, { useRef, useEffect, useState, useContext } from "react";
import { AppContext } from "../../context/datacontext";
import react from "../../assets/icons_logos/icons8-react-48.png"
import nodejs from "../../assets/icons_logos/icons8-nodejs-48.png"
import tailwind from "../../assets/icons_logos/icons8-tailwind-css-48.png"
import mongodb from "../../assets/icons_logos/icons8-mongodb-48.png"
import express_light from "../../assets/icons_logos/icons8-express-js-48.png"
import mui from "../../assets/icons_logos/icons8-material-ui-48.png"
import expresslight from "../../assets/images/express.png";
const ProjectBeam = () => {
  const { darkMode } = useContext(AppContext)
  const containerRef = useRef(null);
  const centerRef = useRef(null);
  const sideRefs = useRef([]);
  sideRefs.current = [];
  const [paths, setPaths] = useState([]);

  const addToRefs = (el) => {
    if (el && !sideRefs.current.includes(el)) sideRefs.current.push(el);
  };

  const calculatePaths = () => {
    if (!containerRef.current || !centerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const centerRect = centerRef.current.getBoundingClientRect();

    const newPaths = sideRefs.current.map((box) => {
      const boxRect = box.getBoundingClientRect();

      const startX = boxRect.left + boxRect.width / 2 - containerRect.left;
      const startY = boxRect.top + boxRect.height / 2 - containerRect.top;

      const endX = centerRect.left + centerRect.width / 2 - containerRect.left;
      const endY = centerRect.top + centerRect.height / 2 - containerRect.top;

      const offsetX = (endX - startX) / 2;

      return `M ${startX} ${startY} C ${startX + offsetX} ${startY}, ${endX - offsetX
        } ${endY}, ${endX} ${endY}`;
    });

    setPaths(newPaths);
  };

  useEffect(() => {
    calculatePaths();
    window.addEventListener("resize", calculatePaths);
    return () => window.removeEventListener("resize", calculatePaths);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-96 flex justify-center items-center"
    >
      <div className="xl:w-1/2 md:w-3/4 w-11/12 h-full flex justify-between items-center relative z-10">
        {/* Left Column */}
        <div className="flex flex-col h-full justify-between">
          <div
            ref={addToRefs}
            className={`md:w-20 md:h-20 w-16 h-16 flex justify-center items-center rounded-full  backdrop-blur-sm ${!darkMode
                ? "bg-[rgba(245,245,245,0.9)]  shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
                : "bg-[#00000052]  shadow-[0_0_8px_rgba(0,255,255,0.6)]"
              }`}

          >
            <img src={react} alt="React" className="w-12 h-12" />
          </div>
          <div
            ref={addToRefs}
            className={`md:w-20 md:h-20 w-16 h-16 flex justify-center items-center rounded-full  backdrop-blur-sm ${!darkMode
                ? "bg-[rgba(245,245,245,0.9)]  shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
                : "bg-[#00000052]  shadow-[0_0_8px_rgba(0,255,255,0.6)]"
              }`}
          >
            <img src={nodejs} alt="Node.js" className="w-12 h-12 m-auto " />
          </div>
          <div
            ref={addToRefs}
            className={`md:w-20 md:h-20 w-16 h-16 flex justify-center items-center rounded-full  backdrop-blur-sm ${!darkMode
                ? "bg-[rgba(245,245,245,0.9)]  shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
                : "bg-[#00000052]  shadow-[0_0_8px_rgba(0,255,255,0.6)]"
              }`}
          >
            <img src={mongodb} alt="Tailwind CSS" className="w-12 h-12 m-auto " />
          </div>

        </div>

        {/* Center Box */}
        <div className="flex flex-col h-full justify-center">

          <div
            ref={centerRef}
            className={`md:w-20 md:h-20 w-16 h-16 flex justify-center items-center rounded-full  backdrop-blur-sm ${!darkMode
                ? "bg-[rgba(245,245,245,0.9)]  shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
                : "bg-[#00000052]  shadow-[0_0_8px_rgba(0,255,255,0.6)]"
              }`}
          ></div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col h-full justify-between">
          <div
            ref={addToRefs}
            className={`md:w-20 md:h-20 w-16 h-16 flex justify-center items-center rounded-full  backdrop-blur-sm ${!darkMode
                ? "bg-[rgba(245,245,245,0.9)]  shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
                : "bg-[#00000052]  shadow-[0_0_8px_rgba(0,255,255,0.6)]"
              }`}
          >
            <img src={ `${darkMode ? express_light : expresslight}`} alt="Tailwind CSS" className="w-12 h-12 m-auto " />

          </div>
          <div
            ref={addToRefs}
            className={`md:w-20 md:h-20 w-16 h-16 flex justify-center items-center rounded-full  backdrop-blur-sm ${!darkMode
                ? "bg-[rgba(245,245,245,0.9)]  shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
                : "bg-[#00000052]  shadow-[0_0_8px_rgba(0,255,255,0.6)]"
              }`}
          >
            <img src={tailwind} alt="Tailwind CSS" className="w-12 h-12 m-auto " />

          </div>
          <div
            ref={addToRefs}
            className={`md:w-20 md:h-20 w-16 h-16 flex justify-center items-center rounded-full  backdrop-blur-sm ${!darkMode
                ? "bg-[rgba(245,245,245,0.9)]  shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
                : "bg-[#00000052]  shadow-[0_0_8px_rgba(0,255,255,0.6)]"
              }`}
          >
            <img src={mui} alt="Tailwind CSS" className="w-12 h-12 m-auto " />

          </div>
        </div>
      </div>

      {/* SVG Curves with moving beam */}
      <svg className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        {paths.map((path, idx) => {
          const randomDelay = (Math.random() * 3).toFixed(2); // 0 to 2 seconds random
          return (
            <g key={idx}>
              <path
                d={path}
                stroke="gray"
                fill="transparent"
                strokeWidth="2"
                strokeOpacity="0.2"
              />
              <circle r="5" fill="#0ff">
                <animateMotion
                  dur="3s"
                  repeatCount="indefinite"
                  begin={`${randomDelay}s`}
                  path={path}
                  keyPoints="0;1"
                  keyTimes="0;1"
                />
              </circle>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default ProjectBeam;
