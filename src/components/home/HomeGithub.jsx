import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/datacontext";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import SplitText from "../SplitText";
const HomeGithub = () => {
  const { darkMode, homeData } = useContext(AppContext);
  const [projects, setProject] = useState([]);
  useEffect(() => {
    const allProjects = homeData.find((item) => item.id === 12);
    const projectsData = allProjects?.projects || null;
    setProject(projectsData);
  }, [homeData]);
 

  return (
    <div
      className={`flex justify-center flex-col gap-24 items-center w-full py-20  overflow-hidden`}
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
          text="GitHub Stats"
        />
      </h2>

      <div
        className={` xl:w-4/5 3xl:w-3/5 w-11/12 xl:p-0 p-4  flex flex-col justify-between gap-5  z-[3] rounded-[20px] relative  pb-6 backdrop-blur-sm ${
          !darkMode
            ? "bg-[rgba(245,245,245,0.9)] rounded-xl shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
            : "bg-[#00000052] rounded-xl shadow-[0_0_8px_rgba(0,255,255,0.6)]"
        }`}
      >
        <div className="md:pt-8 pt-3 flex justify-center items-center">
          <img    width="auto"
                  height="auto"
                  loading="lazy"
            src={`https://github-profile-trophy.vercel.app/?username=himanshu12866&theme=${
              darkMode ? "dracula" : "flat"
            }&margin-w=15&margin-h=15`}
            alt="himanshu12866"
            className="md:p-4"
          />
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 md:p-4 items-center justify-center">
          <img
            src={`https://github-readme-stats.vercel.app/api?username=himanshu12866&hide_title=false&hide_rank=false&show_icons=true&include_all_commits=true&count_private=true&disable_animations=false&theme=${
              darkMode ? "dracula" : "flat"
            }&locale=en&hide_border=false&order=1`}
            height="400"
            width=""
            loading="lazy"
            className="w-full"
            alt="stats graph"
          />
          <img
            className="w-full"
            height="400"
            width=""
            loading="lazy"
            src={`https://github-readme-stats.vercel.app/api/top-langs?username=himanshu12866&locale=en&hide_title=false&layout=compact&card_width=320&langs_count=5&theme=${
              darkMode ? "dracula" : "flat"
            }&hide_border=false&order=2`}
            alt="languages graph"
          />{" "}
        </div>
        <div className="md:p-4 flex justify-center items-center">
          <img
            alt="commit graph"    width="auto"
                  height="auto"
                  loading="lazy"
            align="center" className="md:pb-8 pb-3"
            src={`https://github-readme-activity-graph.vercel.app/graph?username=himanshu12866&theme=${
              darkMode ? "dracula" : "flat"
            }`}
          />
        </div>
      </div>
      <div className=" flex justify-start px-2 items-center">
        <a
          href="https://github.com/himanshu12866"
          target="_blank"
          rel="noreferrer"
          className={`bg-black font-para  text-white sm:px-8 px-4 py-3 font-medium rounded-[10px] opacity-100 hover:opacity-60 transition-all hover:duration-200 ${
            !darkMode
              ? "  shadow-[rgba(61,61,61,0.72)_0px_0.602187px_1.08394px_-1.25px,rgba(61,61,61,0.64)_0px_2.28853px_4.11936px_-2.5px,rgba(61,61,61,0.25)_0px_10px_18px_-3.75px,rgba(0,0,0,0.35)_0px_0.706592px_0.706592px_-0.583333px,rgba(0,0,0,0.34)_0px_1.80656px_1.80656px_-1.16667px,rgba(0,0,0,0.33)_0px_3.62176px_3.62176px_-1.75px,rgba(0,0,0,0.3)_0px_6.8656px_6.8656px_-2.33333px,rgba(0,0,0,0.26)_0px_13.6468px_13.6468px_-2.91667px,rgba(0,0,0,0.15)_0px_30px_30px_-3.5px]"
              : " shadow-[0_0_8px_rgba(0,255,255,0.6)]"
          } text-center`}
        >
          <span>
            Visit GitHub <ArrowOutwardIcon />
          </span>
        </a>
      </div>
    </div>
  );
};

export default HomeGithub;
