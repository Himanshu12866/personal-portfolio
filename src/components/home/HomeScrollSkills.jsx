import React, { useRef, useEffect, useState, useContext } from "react";
import { useAnimationFrame } from "framer-motion";
import html from "../../assets/icons_logos/icons8-html-5-48.png";
import css from "../../assets/icons_logos/icons8-css-48.png";
import javascript from "../../assets/icons_logos/icons8-javascript-48.png";
import reactjs from "../../assets/icons_logos/icons8-react-48.png";
import nodejs from "../../assets/icons_logos/icons8-nodejs-48.png";
import express from "../../assets/icons_logos/icons8-express-js-50.png";
import mongodb from "../../assets/icons_logos/icons8-mongodb-48.png";
import tailwind from "../../assets/icons_logos/icons8-tailwind-css-48.png";
import gcp from "../../assets/icons_logos/icons8-google-cloud-48.png";
import mui from "../../assets/icons_logos/icons8-material-ui-48.png";
import git from "../../assets/icons_logos/icons8-git-48.png";
import postman from "../../assets/icons_logos/postman_48.png";
import aws from "../../assets/icons_logos/icons8-aws-48.png";
import github from "../../assets/icons_logos/icons8-git-48 (1).png";
import bootsstrap from "../../assets/icons_logos/icons8-bootstrap-48.png";
import sass from "../../assets/icons_logos/icons8-sass-48.png";
import github_light from "../../assets/icons_logos/icons8-github-48.png";
import aws_light from "../../assets/icons_logos/aws_white.png";
import express_light from "../../assets/icons_logos/icons8-express-js-48.png";
import adobeI from "../../assets/icons_logos/icons8-adobe-illustrator-48.png";
import { AppContext } from "../../context/datacontext";
const MarqueeRow = ({ items = [], direction = "left", baseSpeed = 0.08 }) => {
  const containerRef = useRef(null);
  const pos = useRef(0);
  const [oneSetWidth, setOneSetWidth] = useState(0);
  const { darkMode } = useContext(AppContext);
  const boost = useRef(1);
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const measure = () => {
      setOneSetWidth(el.scrollWidth / 2 || 0);
    };
    requestAnimationFrame(measure);
    window.addEventListener("resize", measure);
    const handleWheel = (e) => {
      const dirFactor = direction === "left" ? -1 : 1;
      const delta = Math.sign(e.deltaY);
      if (delta !== 0) {
        boost.current = 3 * dirFactor * delta; 
      }
    };
    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [direction]);
  useAnimationFrame((t, delta) => {
    if (!oneSetWidth || !containerRef.current) return;
    const dirFactor = direction === "left" ? -1 : 1;
    let speed = baseSpeed * dirFactor;
    if (boost.current !== 1) {
      speed *= Math.abs(boost.current);
      boost.current = boost.current * 0.9;
      if (Math.abs(boost.current) < 1.05) {
        boost.current = 1;
      }
    }
    const move = speed * delta;
    pos.current += move;
    if (pos.current <= -oneSetWidth) {
      pos.current += oneSetWidth;
    } else if (pos.current > 0) {
      pos.current -= oneSetWidth;
    }
    containerRef.current.style.transform = `translateX(${pos.current}px)`;
  });

  return (
    <div className="relative overflow-hidden w-full">
      <div ref={containerRef} className="flex gap-6 items-center z-10">
        {[...items, ...items].map((txt, i) => (
          <div
            key={i}
            className={`${
              !darkMode
                ? "bg-[rgba(245,245,245,0.9)] rounded-xl shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
                : "bg-transparent rounded-xl shadow-[0_0_8px_rgba(0,255,255,0.6)]"
            } w-80 px-10 py-2   text-lg flex items-center my-1 justify-center backdrop-blur-sm z-[5] gap-3 font-semibold`}
            style={{ minWidth: "220px" }}
          >
            <span>{txt.name}</span>{" "}
            <img src={txt.icon} className="w-10" alt={txt.name} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default function SkillScrollerScrollBoost() {
  const { darkMode } = useContext(AppContext);
  const frontend = [
    {
      name: "ReactJS",
      icon: reactjs,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TailwindCSS",
      icon: tailwind,
    },
    {
      name: "MaterialUI",
      icon: mui,
    },
    {
      name: "HTML5",
      icon: html,
    },
    {
      name: "CSS3",
      icon: css,
    },
    {
      name: "Bootstrap",
      icon: bootsstrap,
    },
    {
      name: "SASS",
      icon: sass,
    },
    {
      name: "ReactJS",
      icon: reactjs,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TailwindCSS",
      icon: tailwind,
    },
    {
      name: "MaterialUI",
      icon: mui,
    },
    {
      name: "HTML5",
      icon: html,
    },
    {
      name: "CSS3",
      icon: css,
    },
    {
      name: "Bootstrap",
      icon: bootsstrap,
    },
    {
      name: "SASS",
      icon: sass,
    },
  ];
  const backend = [
    {
      name: "NodeJS",
      icon: nodejs,
    },
    {
      name: "ExpressJS",
      icon: darkMode ? express_light : express,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Github",
      icon: darkMode ? github_light : github,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "NodeJS",
      icon: nodejs,
    },
    {
      name: "ExpressJS",
      icon: darkMode ? express_light : express,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Github",
      icon: darkMode ? github_light : github,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "NodeJS",
      icon: nodejs,
    },
    {
      name: "ExpressJS",
      icon: darkMode ? express_light : express,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Github",
      icon: darkMode ? github_light : github,
    },
    {
      name: "Git",
      icon: git,
    },
  ];
  const tools = [
    {
      name: "GoogleCloud",
      icon: gcp,
    },
    {
      name: "AWS  ",
      icon: darkMode ? aws_light : aws,
    },
    {
      name: "Illustrator",
      icon: adobeI,
    },
    {
      name: "Postman",
      icon: postman,
    },
    {
      name: "CSS3",
      icon: css,
    },
    {
      name: "GoogleCloud",
      icon: gcp,
    },
    {
      name: "AWS  ",
      icon: darkMode ? aws_light : aws,
    },
    {
      name: "Illustrator",
      icon: adobeI,
    },
    {
      name: "Postman",
      icon: postman,
    },
    {
      name: "CSS3",
      icon: css,
    },
    {
      name: "GoogleCloud",
      icon: gcp,
    },
    {
      name: "AWS  ",
      icon: darkMode ? aws_light : aws,
    },
    {
      name: "Illustrator",
      icon: adobeI,
    },
    {
      name: "Postman",
      icon: postman,
    },
    {
      name: "CSS3",
      icon: css,
    },
    {
      name: "GoogleCloud",
      icon: gcp,
    },
    {
      name: "AWS  ",
      icon: aws,
    },
    {
      name: "Illustrator",
      icon: adobeI,
    },
    {
      name: "Postman",
      icon: postman,
    },
    {
      name: "CSS3",
      icon: css,
    },
  ];
  return (
    <section className="w-full flex justify-between flex-col z-10 gap-4 space-y-2 relative">
      <div
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 md:w-32  z-10"
        style={{
          background: `linear-gradient(to right, ${
            darkMode ? "#191919" : "#dededee6"
          }, transparent)`,
        }}
      />
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 md:w-32 z-10"
        style={{
          background: `linear-gradient(to left, ${
            darkMode ? "#191919" : "#dededee6"
          }, transparent)`,
        }}
      />

      <MarqueeRow items={frontend} direction="left" baseSpeed={0.08} />
      <MarqueeRow items={backend} direction="right" baseSpeed={0.08} />
      <MarqueeRow items={tools} direction="left" baseSpeed={0.08} />
    </section>
  );
}
