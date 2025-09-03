import React, { useContext } from "react";
import { AppContext } from "../../context/datacontext";
import nodejs from "../../assets/icons_logos/icons8-nodejs-48.png";
import express from "../../assets/icons_logos/icons8-express-js-50.png";
import mongodb from "../../assets/icons_logos/icons8-mongodb-48.png";
import tailwind from "../../assets/icons_logos/icons8-tailwind-css-48.png";

const SkillsAbout = () => {
  const { darkMode } = useContext(AppContext);

  const icons = [nodejs, express, mongodb, tailwind];
  const icons2 = [nodejs, express, mongodb, tailwind];
  const icons3 = [nodejs, express, mongodb, tailwind];

  return (
    <div
      className={`flex justify-center flex-col gap-24 items-center w-full py-20 shadow-[inset_0_3px_1px_rgba(255,255,255,0.4),inset_0_0px_0px_rgba(255,255,255,0.4)] ${
        !darkMode
          ? "bg-[rgba(222,222,222,0.9)]"
          : "bg-[rgba(69,69,69,1)] inset-0"
      }`}
    >
      <div className="relative w-[400px] h-[400px] flex items-center justify-center">
        {/* Center */}
        <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg z-10">
          ⚡
        </div>

        {/* Outer Orbit */}
        <div className="absolute w-[350px] h-[350px] rounded-full border border-gray-300 animate-spin-slow">
          {icons.map((icon, i) => {
            const angle = (i / icons.length) * 2 * Math.PI;
            const orbitRadius = 175;
            const x = orbitRadius + orbitRadius * Math.cos(angle) - 20;
            const y = orbitRadius + orbitRadius * Math.sin(angle) - 20;
            return (
              <img
                key={i}
                src={icon}
                alt="skill"
                className="w-10 h-10 absolute"
                style={{ left: `${x}px`, top: `${y}px` }}
              />
            );
          })}
        </div>

        {/* Middle Orbit (NEW) */}
        <div className="absolute w-[280px] h-[280px] rounded-full border border-gray-300 animate-spin-slow-reverse">
          {icons3.map((icon, i) => {
            const angle = (i / icons3.length) * 2 * Math.PI;
            const orbitRadius = 140;
            const x = orbitRadius + orbitRadius * Math.cos(angle) - 18;
            const y = orbitRadius + orbitRadius * Math.sin(angle) - 18;
            return (
              <img
                key={i}
                src={icon}
                alt="skill"
                className="w-9 h-9 absolute"
                style={{ left: `${x}px`, top: `${y}px` }}
              />
            );
          })}
        </div>

        {/* Inner Orbit */}
        <div className="absolute w-[180px] h-[180px] rounded-full border border-gray-300 animate-spin-slow">
          {icons2.map((icon, i) => {
            const angle = (i / icons2.length) * 2 * Math.PI;
            const orbitRadius = 85;
            const x = orbitRadius + orbitRadius * Math.cos(angle) - 12;
            const y = orbitRadius + orbitRadius * Math.sin(angle) - 12;
            return (
              <img
                key={i}
                src={icon}
                alt="skill"
                className="w-8 h-8 absolute"
                style={{ left: `${x}px`, top: `${y}px` }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillsAbout;
