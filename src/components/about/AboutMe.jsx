import React, { useEffect, useRef, useContext } from "react";
import { AppContext } from "../../context/datacontext";
import about_pic from "../../assets/images/about_pic.png";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import VerifiedIcon from "@mui/icons-material/Verified";
import express from "../../assets/icons_logos/icons8-express-js-50.png";
import express_light from "../../assets/icons_logos/icons8-express-js-48.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BlurText from "../BlurText";
gsap.registerPlugin(ScrollTrigger);
const AboutMe = () => {
  const { darkMode, aboutData, skills } = useContext(AppContext);
  // optional chaining + fallback
  const profileData = aboutData?.data?.profile || {};
  const skilssIcon = skills?.icons || [];
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
      className={`flex justify-center flex-col gap-24 items-center w-full py-20 shadow-[inset_0_3px_1px_rgba(255,255,255,0.4),inset_0_0px_0px_rgba(255,255,255,0.4)] `}
    >
      <div
        className="xl:w-4/5 3xl:w-3/5  w-full  flex lg:flex-row 2xl:h-[166vh] 3xl:h-[157vh] xl:h-[170vh] lg:h-[177vh]  flex-col gap-6 p-4"
        ref={containerRef}
      >
        <div
          ref={stickyLeftRef}
          className={`lg:w-5/12 flex flex-col gap-4 z-[3] w-full`}
        >
          <div
            className={` z-[3] flex rounded-[10px] p-2 backdrop-blur-sm  ${
              !darkMode
                ? "bg-[rgba(245,245,245,0.9)] rounded-xl  shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
                : "bg-transparent rounded-xl shadow-[0_0_8px_rgba(0,255,255,0.6)]"
            }`}
          >
            <img
              src={profileData.pic || about_pic}
              alt="about page illustration" className="rounded-xl "
            />
          </div>
          <div
            className={` z-[3] flex justify-center gap-4 items-center rounded-[10px] px-2 py-3 backdrop-blur-sm ${
              !darkMode
                ? "bg-[rgba(245,245,245,0.9)] rounded-xl shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
                : "bg-transparent rounded-xl shadow-[0_0_8px_rgba(0,255,255,0.6)]"
            }`}
          >
            <div className=" flex justify-center items-center">
              <button
                className={`bg-black font-para  sm:w-48 w-full text-white sm:px-8 px-4 py-3 font-medium rounded-[10px] opacity-100 hover:opacity-60 transition-all hover:duration-200 ${
                  !darkMode
                    ? "  shadow-[rgba(61,61,61,0.72)_0px_0.602187px_1.08394px_-1.25px,rgba(61,61,61,0.64)_0px_2.28853px_4.11936px_-2.5px,rgba(61,61,61,0.25)_0px_10px_18px_-3.75px,rgba(0,0,0,0.35)_0px_0.706592px_0.706592px_-0.583333px,rgba(0,0,0,0.34)_0px_1.80656px_1.80656px_-1.16667px,rgba(0,0,0,0.33)_0px_3.62176px_3.62176px_-1.75px,rgba(0,0,0,0.3)_0px_6.8656px_6.8656px_-2.33333px,rgba(0,0,0,0.26)_0px_13.6468px_13.6468px_-2.91667px,rgba(0,0,0,0.15)_0px_30px_30px_-3.5px]"
                    : " shadow-[0_0_8px_rgba(0,255,255,0.6)]"
                }`}
              >
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
          className={`lg:w-7/12  w-full flex flex-col lg:h-[1150px] z-[3] gap-5 p-4 sm:px-8 px-4 rounded-[20px] backdrop-blur-sm ${
            !darkMode
              ? "bg-[rgba(245,245,245,0.9)] rounded-xl shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
              : "bg-transparent rounded-xl shadow-[0_0_8px_rgba(0,255,255,0.6)]"
          }`}
        >
          {/* Brief About my self */}
          <p
            style={cardStyle}
            className=" w-32 pt-2 px-2 sm:ms-4 text-center text-lg sm:text-xl font-heading"
          >
            {" "}
            <BlurText
              text="About Me"
              delay={20}
              animateBy="words"
              direction="bottom"
            />
          </p>
          <p className="text-xl text-left font-para pt-2 pb-1 px-2">
            <BlurText
              text={profileData.aboutmeparagraph}
              delay={5}
              animateBy="words"
              direction="bottom"
            />
          </p>
          <p className="text-xl text-left font-para py-2 px-2">
            <BlurText
              text={profileData.description}
              delay={10}
              animateBy="words"
              direction="bottom"
            />
          </p>
          {/* Tech Stack */}
          <p
            style={cardStyle}
            className=" w-32 pt-2 px-2 sm:ms-4 text-center text-lg sm:text-xl font-heading"
          >
            {" "}
            <BlurText
              text="Tech Stack"
              delay={20}
              animateBy="words"
              direction="bottom"
            />
           
          </p>
          <div className="flex flex-row flex-wrap lg:gap-3 gap-4 mt-2 px-2 pb-6 justify-start items-center">
            {skilssIcon.slice(0,13).map((item, index) => (
              <p key={index} className="w-12 flex justify-center items-center">
                <img
                  data-aos="zoom-in"
                  data-aos-delay={50 * index}
                  src={
                    item.name === "Express.js"
                      ? !darkMode
                        ? express
                        : express_light
                      : item.iconsmall
                  }
                  alt={item.name}
                />
              </p>
            ))}
          </div>
          {/* My Hobbies  */}
          <p
            style={cardStyle}
            className=" w-32 pt-2 px-2 sm:ms-4 text-center text-lg sm:text-xl font-heading"
          >
            {" "}
            <BlurText
              text="Hobbies"
              delay={20}
              animateBy="words"
              direction="bottom"
            />
            
          </p>
          <ul className="text-xl text-justify font-para pt-2 pb-1 px-2">
            {profileData.hobbies?.map((item, index) => (
              <li
                key={(index * index) / 2}
                className="flex flex-row gap-2 justify-start ism:items-center items-start mt-2"
              >
                <VerifiedIcon className="text-[#f59e0b]" />{" "}
                <BlurText
                  text={item}
                  delay={5}
                  animateBy="words"
                  direction="bottom"
                />
              </li>
            ))}
          </ul>
          {/* My Strengths */}
          <p
            style={cardStyle}
            className=" w-32 pt-2 px-2 sm:ms-4 text-center text-lg sm:text-xl font-heading"
          >
            {" "} <BlurText
              text="Strengths"
              delay={20}
              animateBy="words"
              direction="bottom"
            />
            
          </p>
          <ul className="text-xl text-left font-para pt-2 pb-1 px-2">
            {profileData.strength?.map((item, index) => (
              <li
                key={(index * index) / 2}
                className="flex flex-row gap-2 justify-start ism:items-center items-start mt-2"
              >
                <VerifiedIcon className="text-[#f59e0b]" />{" "}
                <BlurText
                  text={item}
                  delay={5}
                  animateBy="words"
                  direction="bottom"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
