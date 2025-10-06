import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/datacontext";
import VerifiedIcon from "@mui/icons-material/Verified";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import BlurText from "../BlurText";
import SplitText from "../SplitText";
import { Link } from "react-router-dom";
const HomeProjects = () => {
  const { darkMode, homeData } = useContext(AppContext);
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
  const [projects, setProject] = useState([]);
  useEffect(() => {
    const allProjects = homeData.find((item) => item.id === 12);
    const projectsData = allProjects?.projects || null;
    setProject(projectsData);
    
  }, [homeData]);
 

  return (
    <div
      className={`flex justify-center flex-col gap-24 items-center w-full py-20 `}
    >
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
          text="Things I’ve Built"
        />
      </h2>
      <div className="xl:w-4/5 3xl:w-3/5 w-full xl:p-0 p-4 grid gap-6 lg:grid-cols-2 grid-cols-1  ">
        {projects?.map((item, index) => (
          <div
            key={index}
            className={` flex flex-col justify-between gap-5 p-4 px-8 z-[3] rounded-[20px] relative  pb-6 backdrop-blur-sm ${
              !darkMode
                ? "bg-[rgba(245,245,245,0.9)] rounded-xl shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
                : "bg-[#00000052] rounded-xl shadow-[0_0_8px_rgba(0,255,255,0.6)]"
            }`}
          >
            <div
              style={cardStyle}
              className=" w-52 pt-2 px-4  text-left text-lg sm:text-xl font-heading"
            >
              <BlurText
                text={item.projectType}
                delay={5}
                animateBy="words"
                direction="bottom"
              />
            </div>
            <h2 className="sm:text-3xl text-2xl">
              <BlurText
                text={item.projectName}
                delay={5}
                animateBy="words"
                direction="bottom"
              />
            </h2>
            <div className="flex flex-col gap-2 items-start">
              <h3 className="text-xl">
                <BlurText
                  text="Teck Stack:"
                  delay={5}
                  animateBy="words"
                  direction="bottom"
                />
              </h3>
              <p className="text-lg font-para font-medium">
                {item.projectStacks.map((item, index) => (
                  <span
                    data-aos="fade-bottom"
                    data-aos-delay={50 * index}
                    key={index}
                  >
                    {item} ,{" "}
                  </span>
                ))}
              </p>
            </div>
            <div className="flex flex-col gap-2 items-start">
              <h3 className="text-xl">
                <BlurText
                  text="Description:"
                  delay={5}
                  animateBy="words"
                  direction="bottom"
                />
              </h3>
              <p className="text-lg overflow-hidden font-para font-medium">
                <BlurText
                  text={item.projectDesc}
                  delay={5}
                  animateBy="words"
                  direction="bottom"
                />
              </p>
            </div>
            <div className="flex flex-col gap-2 items-start">
              <h3 className="text-xl">
                <BlurText
                  text="My Contributions:"
                  delay={5}
                  animateBy="words"
                  direction="bottom"
                />
              </h3>
              <div className="text-lg overflow-hidden font-para font-medium pt-4 sm:px-4 px-0">
                <ul>
                  {item.myContribution.map((item, key) => (
                    <li
                      key={key / 2}
                      className="flex flex-row gap-2 justify-start pb-2 sm:items-center items-start"
                    >
                      <VerifiedIcon className="text-[#f59e0b]" />
                      <BlurText
                        text={item}
                        delay={5}
                        animateBy="words"
                        direction="bottom" className="text-left tracking-tight"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex w-full justify-center sm:flex-row flex-col gap-8 ">
              <div className=" flex justify-center items-center">
                <a href={item.projectCaseStudyLink} 
                  className={`bg-black font-para  sm:w-48 w-full text-white sm:px-8 px-4 py-3 font-medium rounded-[10px] opacity-100 hover:opacity-60 transition-all hover:duration-200 ${
                    !darkMode
                      ? "  shadow-[rgba(61,61,61,0.72)_0px_0.602187px_1.08394px_-1.25px,rgba(61,61,61,0.64)_0px_2.28853px_4.11936px_-2.5px,rgba(61,61,61,0.25)_0px_10px_18px_-3.75px,rgba(0,0,0,0.35)_0px_0.706592px_0.706592px_-0.583333px,rgba(0,0,0,0.34)_0px_1.80656px_1.80656px_-1.16667px,rgba(0,0,0,0.33)_0px_3.62176px_3.62176px_-1.75px,rgba(0,0,0,0.3)_0px_6.8656px_6.8656px_-2.33333px,rgba(0,0,0,0.26)_0px_13.6468px_13.6468px_-2.91667px,rgba(0,0,0,0.15)_0px_30px_30px_-3.5px]"
                      : " shadow-[0_0_8px_rgba(0,255,255,0.6)]"
                  } text-center`}
                >
                  <button >
                    Case Study <ArrowDownwardIcon />
                  </button>
                </a>
              </div>
              <div className=" flex justify-center items-center">
                <a   href={item.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  className={`bg-[#f5f5f5] ${
                    darkMode
                      ? "text-black shadow-[0_0_8px_rgba(0,255,255,0.6)]"
                      : ""
                  } rounded-[10px] font-para text-center sm:w-48 w-full font-medium sm:px-8 px-4 py-3 opacity-100 hover:opacity-60 transition-all hover:duration-200 shadow-[rgba(158,158,158,0.69)_0px_0.706592px_0.706592px_-0.583333px,rgba(158,158,158,0.68)_0px_1.80656px_1.80656px_-1.16667px,rgba(158,158,158,0.65)_0px_3.62176px_3.62176px_-1.75px,rgba(158,158,158,0.61)_0px_6.8656px_6.8656px_-2.33333px,rgba(158,158,158,0.52)_0px_13.6468px_13.6468px_-2.91667px,rgba(158,158,158,0.3)_0px_30px_30px_-3.5px,rgba(255,255,255,1)_0px_3px_1px_0px_inset]`}
                >
                  <button
                  
                  >
                    View Live <ArrowOutwardIcon />
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" flex justify-start px-2 items-center">
        <Link to="/projects"
          className={`bg-black font-para  text-white sm:px-8 px-4 py-3 font-medium rounded-[10px] opacity-100 hover:opacity-60 transition-all hover:duration-200 ${
            !darkMode
              ? "  shadow-[rgba(61,61,61,0.72)_0px_0.602187px_1.08394px_-1.25px,rgba(61,61,61,0.64)_0px_2.28853px_4.11936px_-2.5px,rgba(61,61,61,0.25)_0px_10px_18px_-3.75px,rgba(0,0,0,0.35)_0px_0.706592px_0.706592px_-0.583333px,rgba(0,0,0,0.34)_0px_1.80656px_1.80656px_-1.16667px,rgba(0,0,0,0.33)_0px_3.62176px_3.62176px_-1.75px,rgba(0,0,0,0.3)_0px_6.8656px_6.8656px_-2.33333px,rgba(0,0,0,0.26)_0px_13.6468px_13.6468px_-2.91667px,rgba(0,0,0,0.15)_0px_30px_30px_-3.5px]"
              : " shadow-[0_0_8px_rgba(0,255,255,0.6)]"
          } text-center`}
        >
          <span>
            More Projects <ArrowOutwardIcon />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default HomeProjects;
