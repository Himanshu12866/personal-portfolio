// import * as React from 'react';
import React, { useContext } from "react";
import BusinessIcon from "@mui/icons-material/Business";
import LaptopIcon from "@mui/icons-material/Laptop";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InfoIcon from "@mui/icons-material/Info";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { AppContext } from "../../context/datacontext";
import SplitText from "../SplitText";
import BlurText from "../BlurText";
const AboutTimeline = () => {
  const { darkMode } = useContext(AppContext);
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
  return (
    <div
      className={`flex justify-center flex-col lg:gap-24 gap-12 items-center w-full md:py-20 py-10  `}
    >
      <h2 className="sm:text-4xl text-3xl font-bold">
        <SplitText
          delay={80}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          className="text-left"
          text="Academic Journey"
        />
      </h2>
      <div
        className="xl:w-4/5 3xl:w-3/5 w-full grid lg:grid-cols-2 gap-6 grid-cols-1 p-4
  "
      >
        <div
          className={` w-full z-[3] flex flex-col justify-end text-left gap-3 md:gap-5 p-4 px-8 rounded-[20px] backdrop-blur-sm ${
            !darkMode
              ? "bg-[rgba(245,245,245,0.9)] rounded-xl shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
              : "bg-transparent rounded-xl shadow-[0_0_8px_rgba(0,255,255,0.6)]"
          }`}
        >
          <div
            style={cardStyle}
            className="w-60   text-center  text-lg sm:text-xl font-heading"
          >
            <p>Post Graduation</p>
          </div>

          <div className="flex sm:flex-row flex-col gap-3 justify-between  text-xl font-para font-medium">
            <h3 className="flex flex-row gap-2">
              <WorkspacePremiumIcon />{" "}
              <BlurText
                text="Program :"
                delay={5}
                animateBy="words"
                direction="bottom"
              />
            </h3>
            <p>
              <BlurText
                text="Master of Science"
                delay={5}
                animateBy="words"
                direction="bottom"
              />
            </p>
          </div>
          <div className="flex sm:flex-row flex-col gap-3 justify-between  text-xl font-para font-medium">
            <h3 className="flex flex-row gap-2">
              <LaptopIcon />{" "}
              <BlurText
                text="Specialization :"
                delay={5}
                animateBy="words"
                direction="bottom"
              />
            </h3>
            <p>
              <BlurText
                text="Computer Science"
                delay={5}
                animateBy="words"
                direction="bottom"
              />
            </p>
          </div>
          <div className="flex sm:flex-row flex-col gap-3 text-xl justify-between  font-para font-medium">
            <h3 className="flex flex-row gap-2">
              <BusinessIcon />{" "}
              <BlurText
                text="University :"
                delay={5}
                animateBy="words"
                direction="bottom"
              />
            </h3>
            <p className="sm:text-right text-left">
              <BlurText
                text="Awadhesh Pratap Singh University"
                delay={5}
                animateBy="words"
                direction="bottom"
              />
            </p>
          </div>
          <div className="flex sm:flex-row flex-col gap-3 text-xl justify-between  font-para font-medium">
            <h3 className="flex flex-row gap-2">
              <CalendarMonthIcon />{" "}
              <BlurText
                text="Timeline :"
                delay={5}
                animateBy="words"
                direction="bottom"
              />
            </h3>
            <p>
              <BlurText
                text="July 2022 – June 2024"
                delay={5}
                animateBy="words"
                direction="bottom"
              />
            </p>
          </div>
          <div className="flex sm:flex-row flex-col gap-3 text-xl justify-between  font-para font-medium">
            <h3 className="flex flex-row gap-2">
              <LocationOnIcon />{" "}
              <BlurText
                text="Location :"
                delay={5}
                animateBy="words"
                direction="bottom"
              />
            </h3>
            <p>
              <BlurText
                text="Rewa, Madhya Pradesh"
                delay={5}
                animateBy="words"
                direction="bottom"
              />
            </p>
          </div>

          <div className="flex flex-col gap-3 text-xl font-para font-medium">
            <h3 className="flex flex-row gap-2">
              <InfoIcon />{" "}
              <BlurText
                text="Highlights :"
                delay={5}
                animateBy="words"
                direction="bottom"
              />
            </h3>
            <p className="text-left">
              <BlurText
                text=" Gained advanced knowledge in Web Technologies, Database Systems,
              and Software Engineering Worked on academic projects using MERN
              stack and explored real-time application development Strengthened
              skills in problem-solving, research, and system design."
                delay={5}
                animateBy="words"
                direction="bottom"
              />
            </p>
          </div>
        </div>
        <div
          className={` w-full z-[3] flex flex-col justify-end text-left md:gap-5 gap-3 p-4 px-8 rounded-[20px] backdrop-blur-sm ${
            !darkMode
              ? "bg-[rgba(245,245,245,0.9)] rounded-xl shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
              : "bg-transparent rounded-xl shadow-[0_0_8px_rgba(0,255,255,0.6)]"
          }`}
        >
          <div
            style={cardStyle}
            className="w-60 pt-2 px-4 text-center  text-lg sm:text-xl font-heading"
          >
            <p>Graduation</p>
          </div>

          <div className="flex sm:flex-row flex-col gap-3 justify-between  text-xl font-para font-medium">
            <h3 className="flex flex-row gap-2">
              <WorkspacePremiumIcon />{" "}
              <BlurText
                text="Program :"
                delay={5}
                animateBy="words"
                direction="bottom"
              />
            </h3>
            <p>
              <BlurText
                text="Master of Science"
                delay={5}
                animateBy="words"
                direction="bottom"
              />
            </p>
          </div>
          <div className="flex sm:flex-row flex-col gap-3 justify-between  text-xl font-para font-medium">
            <h3 className="flex flex-row gap-2">
              <LaptopIcon />{" "}
              <BlurText
                text="Specialization :"
                delay={5}
                animateBy="words"
                direction="bottom"
              />
            </h3>
            <p>
              <BlurText
                text="Mathematics"
                delay={5}
                animateBy="words"
                direction="bottom"
              />
            </p>
          </div>
          <div className="flex sm:flex-row flex-col gap-3 text-xl justify-between  font-para font-medium">
            <h3 className="flex flex-row gap-2">
              <BusinessIcon />{" "}
              <BlurText
                text="University :"
                delay={5}
                animateBy="words"
                direction="bottom"
              />
            </h3>
            <p className="sm:text-right text-left">
              <BlurText
                text="Awadhesh Pratap Singh University"
                delay={5}
                animateBy="words"
                direction="bottom"
              />
            </p>
          </div>
          <div className="flex sm:flex-row flex-col gap-3 text-xl justify-between  font-para font-medium">
            <h3 className="flex flex-row gap-2">
              <CalendarMonthIcon />{" "}
              <BlurText
                text="Timeline :"
                delay={5}
                animateBy="words"
                direction="bottom"
              />
            </h3>
            <p>
              <BlurText
                text="July 2019 – June 2022"
                delay={5}
                animateBy="words"
                direction="bottom"
              />
            </p>
          </div>
          <div className="flex sm:flex-row flex-col gap-3 text-xl justify-between  font-para font-medium">
            <h3 className="flex flex-row gap-2">
              <LocationOnIcon />{" "}
              <BlurText
                text="Location :"
                delay={5}
                animateBy="words"
                direction="bottom"
              />
            </h3>
            <p>
              <BlurText
                text="Rewa, Madhya Pradesh"
                delay={5}
                animateBy="words"
                direction="bottom"
              />
            </p>
          </div>
          <div className="flex flex-col gap-3 text-xl font-para font-medium">
            <h3 className="flex flex-row gap-2">
              <InfoIcon />{" "}
              <BlurText
                text="Highlights :"
                delay={5}
                animateBy="words"
                direction="bottom"
              />
            </h3>

            <p className="text-left">
              <BlurText
                text=" Built strong foundation in Algebra, Calculus, and Statistics
              Developed logical and analytical problem-solving mindset
              Parallelly explored programming & web development, leading to
              projects in MERN stack Participated in hackathons and
              collaborative coding activities."
                delay={5}
                animateBy="words"
                direction="bottom"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTimeline;
