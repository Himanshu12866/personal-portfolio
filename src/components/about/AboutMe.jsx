import React, { useEffect, useRef, useContext } from "react";
import { AppContext } from "../../context/datacontext";
import about_pic from "../../assets/images/about_pic.png";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import VerifiedIcon from "@mui/icons-material/Verified";
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
import adobeI from "../../assets/icons_logos/icons8-adobe-illustrator-48.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const AboutMe = () => {
  const { darkMode } = useContext(AppContext);

  const skills = [
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "JavaScript", icon: javascript },
    { name: "React JS", icon: reactjs },
    { name: "Node.js", icon: nodejs },
    { name: "Express.js", icon: express },
    { name: "MongoDB", icon: mongodb },
    { name: "Tailwind CSS", icon: tailwind },
    { name: "Google Cloud", icon: gcp },
    { name: "Material UI", icon: mui },
    { name: "Git", icon: git },
    { name: "Adobe Illustrator", icon: adobeI },
  ];
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
  const containerRef = useRef(null);
  const stickyLeftRef = useRef(null); // Ref for the left section (image)
  useEffect(() => {
    let trigger;
    const createScrollTrigger = () => {
      if (
        window.innerWidth >= 1024 &&
        containerRef.current &&
        stickyLeftRef.current
      ) {
        trigger = ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top 10%", // Start pinning at top
          end: "bottom bottom", // End when container bottom reaches viewport bottom
          pin: stickyLeftRef.current,
          pinSpacing: false, // Let GSAP handle spacing
        });
      }
    };

    createScrollTrigger();

    const handleResize = () => {
      if (trigger) trigger.kill();
      createScrollTrigger();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (trigger) trigger.kill();
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      className={`flex justify-center flex-col gap-24 items-center w-full py-20  shadow-[inset_0_3px_1px_rgba(255,255,255,0.4),inset_0_0px_0px_rgba(255,255,255,0.4)]   ${
        !darkMode
          ? "bg-[rgba(222,222,222,0.9)]"
          : "bg-[rgba(69,69,69,1)] inset-0"
      }`}
    >
      <div
        className="xl:w-4/5 3xl:w-3/5  w-full  flex lg:flex-row 2xl:h-[160vh] 3xl:h-[150vh] xl:min-h-[164vh] lg:h-[170vh]  flex-col gap-4 p-4
  "
        ref={containerRef}
      >
        <div
          ref={stickyLeftRef}
          className={`lg:w-5/12 flex flex-col gap-4 z-[3] w-full    
 `}
        >
          <div
            className={` z-[3] flex rounded-[10px] p-2 backdrop-blur-sm ${
              !darkMode
                ? "bg-[rgba(245,245,245,0.9)] "
                : "bg-[#f5f5f552] inset-0"
            } 
  opacity-100
  shadow-[0px_0.706592px_0.706592px_-0.666667px_rgba(0,0,0,0.08),
          0px_1.80656px_1.80656px_-1.33333px_rgba(0,0,0,0.08),
          0px_3.62176px_3.62176px_-2px_rgba(0,0,0,0.07),
          0px_6.8656px_6.8656px_-2.66667px_rgba(0,0,0,0.07),
          0px_13.6468px_13.6468px_-3.33333px_rgba(0,0,0,0.05),
          0px_30px_30px_-4px_rgba(0,0,0,0.02),
          inset_0px_3px_1px_0px_rgb(255,255,255)]`}
          >
            <img src={about_pic} alt="about page illustration" />
          </div>
          <div
            className={` z-[3] flex justify-center gap-4 items-center rounded-[10px] px-2 py-3 backdrop-blur-sm ${
              !darkMode
                ? "bg-[rgba(245,245,245,0.9)] "
                : "bg-[#f5f5f552] inset-0"
            } 
  opacity-100
  shadow-[0px_0.706592px_0.706592px_-0.666667px_rgba(0,0,0,0.08),
          0px_1.80656px_1.80656px_-1.33333px_rgba(0,0,0,0.08),
          0px_3.62176px_3.62176px_-2px_rgba(0,0,0,0.07),
          0px_6.8656px_6.8656px_-2.66667px_rgba(0,0,0,0.07),
          0px_13.6468px_13.6468px_-3.33333px_rgba(0,0,0,0.05),
          0px_30px_30px_-4px_rgba(0,0,0,0.02),
          inset_0px_3px_1px_0px_rgb(255,255,255)]`}
          >
            <div className=" flex justify-center items-center">
              <button className="bg-black font-para  sm:w-48 w-full text-white sm:px-8 px-4 py-3 font-medium rounded-[10px] opacity-100 hover:opacity-60 transition-all hover:duration-200 shadow-[rgba(61,61,61,0.72)_0px_0.602187px_1.08394px_-1.25px,rgba(61,61,61,0.64)_0px_2.28853px_4.11936px_-2.5px,rgba(61,61,61,0.25)_0px_10px_18px_-3.75px,rgba(0,0,0,0.35)_0px_0.706592px_0.706592px_-0.583333px,rgba(0,0,0,0.34)_0px_1.80656px_1.80656px_-1.16667px,rgba(0,0,0,0.33)_0px_3.62176px_3.62176px_-1.75px,rgba(0,0,0,0.3)_0px_6.8656px_6.8656px_-2.33333px,rgba(0,0,0,0.26)_0px_13.6468px_13.6468px_-2.91667px,rgba(0,0,0,0.15)_0px_30px_30px_-3.5px]">
                <a
                  href="./HimanshuResume.pdf"
                  target="_blank"
                  download="HimanshuResume.pdf"
                >
                  My Resume <ArrowDownwardIcon />
                </a>
              </button>
            </div>
            <div className=" flex justify-center items-center">
              <button
                className={`bg-[#f5f5f5] ${
                  darkMode ? "text-black" : ""
                } rounded-[10px] font-para  sm:w-48 w-full  font-medium sm:px-8 px-4 py-3 opacity-100 hover:opacity-60 transition-all hover:duration-200 shadow-[rgba(158,158,158,0.69)_0px_0.706592px_0.706592px_-0.583333px,rgba(158,158,158,0.68)_0px_1.80656px_1.80656px_-1.16667px,rgba(158,158,158,0.65)_0px_3.62176px_3.62176px_-1.75px,rgba(158,158,158,0.61)_0px_6.8656px_6.8656px_-2.33333px,rgba(158,158,158,0.52)_0px_13.6468px_13.6468px_-2.91667px,rgba(158,158,158,0.3)_0px_30px_30px_-3.5px,rgba(255,255,255,1)_0px_3px_1px_0px_inset]`}
              >
                <a href="/">
                  Contact Me <ArrowOutwardIcon />
                </a>
              </button>
            </div>
          </div>
        </div>

        <div
          className={`lg:w-7/12  w-full flex flex-col lg:h-[1150px] z-[3] gap-5 p-4 px-8 rounded-[20px] backdrop-blur-sm ${
            !darkMode ? "bg-[rgba(245,245,245,0.9)] " : "bg-[#f5f5f552] inset-0"
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
          {/* Brief About my self */}
          <p
            style={cardStyle}
            className=" w-32 pt-2 px-2 sm:ms-4 text-center text-lg sm:text-xl font-heading"
          >
            {" "}
            About Me
          </p>
          <p className="text-xl text-justify font-para pt-2 pb-1 px-2">
            "Frontend Developer with 1+ year of experience building responsive,
            high-performance web apps."
          </p>
          <p className="text-xl text-justify font-para py-2 px-2">
            I’m Himanshu, a MERN Stack developer with hands-on experience in
            React JS and modern web technologies. I specialize in creating
            scalable, user-friendly interfaces and love building digital
            products that solve real problems. With 1+ year of professional
            experience, I thrive in dynamic environments and enjoy collaborating
            with teams to bring ideas to life.
          </p>

          {/* My Hobbies  */}
          <p
            style={cardStyle}
            className=" w-32 pt-2 px-2 sm:ms-4 text-center text-lg sm:text-xl font-heading"
          >
            {" "}
            Hobbies
          </p>
          <ul className="text-xl text-justify font-para pt-2 pb-1 px-2">
            <li className="flex flex-row gap-2 justify-start ism:items-center items-start mt-2">
              <VerifiedIcon className="text-[#ff7700]" /> Reading books –
              especially tech & self-growth related.
            </li>
            <li className="flex flex-row gap-2 justify-start ism:items-center items-start mt-2">
              <VerifiedIcon className="text-[#ff7700]" />
              Listening to music & exploring new genres.
            </li>
            <li className="flex flex-row gap-2 justify-start ism:items-center items-start mt-2">
              <VerifiedIcon className="text-[#ff7700]" />
              Staying updated on global trends & innovations.
            </li>
            <li className="flex flex-row gap-2 justify-start ism:items-center items-start mt-2">
              <VerifiedIcon className="text-[#ff7700]" /> Engaging in political
              talks & discussions to explore diverse perspectives.
            </li>
          </ul>

          {/* My Strengths */}
          <p
            style={cardStyle}
            className=" w-32 pt-2 px-2 sm:ms-4 text-center text-lg sm:text-xl font-heading"
          >
            {" "}
            Strengths
          </p>
          <ul className="text-xl text-left font-para pt-2 pb-1 px-2">
            <li className="flex flex-row gap-2 justify-start ism:items-center items-start mt-2">
              <VerifiedIcon className="text-[#ff7700]" />
              Quick learner & adaptive.
            </li>
            <li className="flex flex-row gap-2 justify-start ism:items-center items-start mt-2">
              <VerifiedIcon className="text-[#ff7700]" />
              Problem-solving mindset.
            </li>
            <li className="flex flex-row gap-2 justify-start ism:items-center items-start mt-2">
              <VerifiedIcon className="text-[#ff7700]" />
              Detail-oriented UI design approach.
            </li>
            <li className="flex flex-row gap-2 justify-start ism:items-center items-start mt-2">
              <VerifiedIcon className="text-[#ff7700]" />
              Strong foundation in React & JavaScript.
            </li>
          </ul>

          {/* Tech Stack */}

          <p
            style={cardStyle}
            className=" w-32 pt-2 px-2 sm:ms-4 text-center text-lg sm:text-xl font-heading"
          >
            {" "}
            Tech Stack
          </p>
          <div className="flex flex-row flex-wrap lg:gap-3 gap-4 mt-2 px-2 pb-12 justify-start items-center">
            {skills.map((item, index) => (
              <p key={index} className="w-12 flex justify-center items-center">
                <img src={item.icon} alt={item.name} />
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
