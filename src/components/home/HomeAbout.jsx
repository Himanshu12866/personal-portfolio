import React, { useContext } from "react";
import { AppContext } from "../../context/datacontext";
import BusinessIcon from "@mui/icons-material/Business";
import LaptopIcon from "@mui/icons-material/Laptop";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import BlurText from "../BlurText";
import SplitText from "../SplitText";

const HomeAbout = () => {
  const { darkMode, homeData } = useContext(AppContext);

  // ✅ safely extract aboutme block
  const aboutMe = homeData?.find((item) => item.id === 11)?.aboutme;

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

  if (!aboutMe) return null; // ✅ prevents rendering if data not ready

  return (
    <div className="flex justify-center flex-col gap-24 items-center w-full py-20">
      <h2 className="text-4xl font-bold">
        <SplitText
          delay={80}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          className="text-left"
          text="About Me"
        />
      </h2>

      <div className="xl:w-4/5 3xl:w-3/5 w-full flex lg:flex-row flex-col gap-4 p-4">
        {/* Left Card */}
        <div
          className={`lg:w-4/12 w-full z-[3] flex flex-col gap-5 p-4 px-8 rounded-[20px] backdrop-blur-sm ${
            !darkMode
              ? "bg-[rgba(245,245,245,0.9)] rounded-xl shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
              : "bg-transparent rounded-xl shadow-[0_0_8px_rgba(0,255,255,0.6)]"
          }`}
        >
          <div
            style={cardStyle}
            className="w-40 pt-2 px-4 text-left text-lg sm:text-xl font-heading"
          >
            Job Profile
          </div>

          <div className="flex flex-row gap-3 text-xl mt-2 font-para font-medium">
            <h3>
              <BusinessIcon />
            </h3>
            <a
              className="border-b-[1px] border-[#747373]"
              href={aboutMe.companyLink}
              target="_blank"
              rel="noreferrer"
            >
              <BlurText
                text={aboutMe.company}
                delay={10}
                animateBy="letters"
                direction="bottom"
              />
            </a>
          </div>

          <div className="flex flex-row gap-3 text-xl mt-2 font-para font-medium">
            <h3>
              <LaptopIcon />
            </h3>
            <p>
              <BlurText
                text={aboutMe.role}
                delay={15}
                animateBy="letters"
                direction="bottom"
              />
            </p>
          </div>

          <div className="flex flex-row gap-3 text-xl mt-2 font-para font-medium">
            <h3>
              <CalendarMonthIcon />
            </h3>
            <p>
              <BlurText
                text={aboutMe.duration}
                delay={20}
                animateBy="letters"
                direction="bottom"
              />
            </p>
          </div>

          <div className="flex flex-row gap-3 text-xl mt-2 font-para font-medium">
            <h3>
              <LocationOnIcon />
            </h3>
            <p>
              <BlurText
                text={aboutMe.location}
                delay={25}
                animateBy="letters"
                direction="bottom"
              />
            </p>
          </div>
        </div>

        {/* Right Card */}
        <div
          className={`lg:w-8/12 w-full z-[3] flex flex-col gap-6 p-4 px-8 rounded-[20px] backdrop-blur-sm ${
            !darkMode
              ? "bg-[rgba(245,245,245,0.9)] rounded-xl shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
              : "bg-transparent rounded-xl shadow-[0_0_8px_rgba(0,255,255,0.6)]"
          }`}
        >
          <p
            style={cardStyle}
            className="w-48 pt-2 px-2 sm:ms-4 text-center text-lg sm:text-xl font-heading"
          >
            Personal Insight
          </p>

          <p className="text-xl text-left tracking-wide font-para pt-2 px-2">
            <BlurText
              text={aboutMe.description}
              delay={5}
              animateBy="letters"
              direction="bottom"
            />
          </p>

          <p className="text-xl text-left tracking-wide font-para px-2">
            <BlurText
              text={aboutMe.descriptiontwo}
              delay={10}
              animateBy="letters"
              direction="bottom"
            />
          </p>

          <div className="flex justify-start px-2 items-center">
            <button
              className={`bg-black font-para z-10 text-white sm:px-8 px-4 py-3 font-medium rounded-[10px] opacity-100 hover:opacity-60 transition-all hover:duration-200 ${
                !darkMode
                  ? "shadow-[rgba(61,61,61,0.72)_0px_0.602187px_1.08394px_-1.25px,rgba(61,61,61,0.64)_0px_2.28853px_4.11936px_-2.5px,rgba(61,61,61,0.25)_0px_10px_18px_-3.75px,rgba(0,0,0,0.35)_0px_0.706592px_0.706592px_-0.583333px,rgba(0,0,0,0.34)_0px_1.80656px_1.80656px_-1.16667px,rgba(0,0,0,0.33)_0px_3.62176px_3.62176px_-1.75px,rgba(0,0,0,0.3)_0px_6.8656px_6.8656px_-2.33333px,rgba(0,0,0,0.26)_0px_13.6468px_13.6468px_-2.91667px,rgba(0,0,0,0.15)_0px_30px_30px_-3.5px]"
                  : "shadow-[0_0_8px_rgba(0,255,255,0.6)]"
              }`}
            >
              <a href="/about">
                More About Me <ArrowOutwardIcon />
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
