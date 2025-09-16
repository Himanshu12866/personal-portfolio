import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/datacontext";
import { Link, useParams } from "react-router-dom";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import GitHubIcon from "@mui/icons-material/GitHub";
import CategoryIcon from "@mui/icons-material/Category";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FlagCircleIcon from "@mui/icons-material/FlagCircle";
import PersonIcon from "@mui/icons-material/Person";
import LoopIcon from "@mui/icons-material/Loop";
import StarIcon from "@mui/icons-material/Star";
import MemoryIcon from "@mui/icons-material/Memory";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import Masonry from "./Masonary";
const CaseStudy = () => {
  const { projects } = useContext(AppContext);
  const [projectData, setProjectData] = useState(null);
  const { slug } = useParams();
  const { darkMode } = useContext(AppContext);
  useEffect(() => {
    if (projects && projects.length > 0) {
      const data = projects.find((item) => item.slug === slug);
      setProjectData(data || null);
    }
  }, [slug, projects]);
  console.log("Project Data:", projectData, slug);
  const items = [
    {
      id: "1",
      img: "https://picsum.photos/id/1015/600/900?grayscale",
      url: "https://example.com/one",
      height: 800,
    },
    {
      id: "2",
      img: "https://picsum.photos/id/1011/600/750?grayscale",
      url: "https://example.com/two",
      height: 250,
    },
    {
      id: "3",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 600,
    },
    {
      id: "4",
      img: "https://picsum.photos/id/1015/600/900?grayscale",
      url: "https://example.com/one",
    },
    {
      id: "5",
      img: "https://picsum.photos/id/1011/600/750?grayscale",
      url: "https://example.com/two",
    },
    {
      id: "6",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
    },
    {
      id: "7",
      img: "https://picsum.photos/id/1015/600/900?grayscale",
      url: "https://example.com/one",
    },
    {
      id: "8",
      img: "https://picsum.photos/id/1011/600/750?grayscale",
      url: "https://example.com/two",
    },
    {
      id: "9",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
    },
    {
      id: "10",
      img: "https://picsum.photos/id/1015/600/900?grayscale",
      url: "https://example.com/one",
    },
    {
      id: "11",
      img: "https://picsum.photos/id/1011/600/750?grayscale",
      url: "https://example.com/two",
    },
    {
      id: "12",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
    },
    {
      id: "13",
      img: "https://picsum.photos/id/1015/600/900?grayscale",
      url: "https://example.com/one",
    },
    {
      id: "14",
      img: "https://picsum.photos/id/1011/600/750?grayscale",
      url: "https://example.com/two",
    },
    {
      id: "15",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center justify-center py-40 overflow-hidden">
        <div className="xl:w-3/5 md:w-4/5 w-11/12 h-auto">
          <div>
            <h1 className="text-4xl font-bold">{projectData?.header?.title}</h1>
            <div className="flex flex-row gap-4 mt-6">
              <Link
                to={projectData?.navigation?.demo} rel="noopener noreferrer" target="_blank"
                className={`bg-black font-para  text-white  z-[3] px-4 py-3  flex justify-center items-center gap-2 font-medium rounded-[10px] opacity-100 hover:opacity-60 transition-all hover:duration-200 ${
                  !darkMode
                    ? "  shadow-[rgba(61,61,61,0.72)_0px_0.602187px_1.08394px_-1.25px,rgba(61,61,61,0.64)_0px_2.28853px_4.11936px_-2.5px,rgba(61,61,61,0.25)_0px_10px_18px_-3.75px,rgba(0,0,0,0.35)_0px_0.706592px_0.706592px_-0.583333px,rgba(0,0,0,0.34)_0px_1.80656px_1.80656px_-1.16667px,rgba(0,0,0,0.33)_0px_3.62176px_3.62176px_-1.75px,rgba(0,0,0,0.3)_0px_6.8656px_6.8656px_-2.33333px,rgba(0,0,0,0.26)_0px_13.6468px_13.6468px_-2.91667px,rgba(0,0,0,0.15)_0px_30px_30px_-3.5px]"
                    : " shadow-[0_0_8px_rgba(0,255,255,0.6)]"
                }`}
              >
                <ArrowOutwardIcon /> <span>Live</span>
              </Link>
              <button
                disabled={`${
                  projectData?.category === "Professional" ? false : true
                }`}
                to="/skills"
                className={`bg-black font-para  ${
                  projectData?.category === "Professional"
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                } text-white  flex justify-center items-center gap-2 z-[3] px-4 py-3 font-medium rounded-[10px] opacity-100 hover:opacity-60 transition-all hover:duration-200 ${
                  !darkMode
                    ? "  shadow-[rgba(61,61,61,0.72)_0px_0.602187px_1.08394px_-1.25px,rgba(61,61,61,0.64)_0px_2.28853px_4.11936px_-2.5px,rgba(61,61,61,0.25)_0px_10px_18px_-3.75px,rgba(0,0,0,0.35)_0px_0.706592px_0.706592px_-0.583333px,rgba(0,0,0,0.34)_0px_1.80656px_1.80656px_-1.16667px,rgba(0,0,0,0.33)_0px_3.62176px_3.62176px_-1.75px,rgba(0,0,0,0.3)_0px_6.8656px_6.8656px_-2.33333px,rgba(0,0,0,0.26)_0px_13.6468px_13.6468px_-2.91667px,rgba(0,0,0,0.15)_0px_30px_30px_-3.5px]"
                    : " shadow-[0_0_8px_rgba(0,255,255,0.6)]"
                }`}
              >
                <a className="flex flex-row gap-2">
                  {" "}
                  <GitHubIcon /> <span>Repo</span>
                </a>
              </button>
              <p
                className={`bg-black font-para  text-white  flex justify-center items-center gap-2 z-[3] px-4 py-3 font-medium rounded-[10px] opacity-100 hover:opacity-60 transition-all hover:duration-200 ${
                  !darkMode
                    ? "  shadow-[rgba(61,61,61,0.72)_0px_0.602187px_1.08394px_-1.25px,rgba(61,61,61,0.64)_0px_2.28853px_4.11936px_-2.5px,rgba(61,61,61,0.25)_0px_10px_18px_-3.75px,rgba(0,0,0,0.35)_0px_0.706592px_0.706592px_-0.583333px,rgba(0,0,0,0.34)_0px_1.80656px_1.80656px_-1.16667px,rgba(0,0,0,0.33)_0px_3.62176px_3.62176px_-1.75px,rgba(0,0,0,0.3)_0px_6.8656px_6.8656px_-2.33333px,rgba(0,0,0,0.26)_0px_13.6468px_13.6468px_-2.91667px,rgba(0,0,0,0.15)_0px_30px_30px_-3.5px]"
                    : " shadow-[0_0_8px_rgba(0,255,255,0.6)]"
                }`}
              >
                <CategoryIcon /> <span>{projectData?.category}</span>
              </p>
            </div>
            <div className="flex justify-center items-center py-6">
              <img
                src={projectData?.image}
                className="rounded-xl"
                alt={projectData?.text}
              />
            </div>
            <p className="text-2xl font-para">
              {[projectData?.header?.description]}
            </p>
            <div className="my-4 flex flex-row items-center gap-4">
              <h3 className="text-3xl ">
                <LoopIcon fontSize="20px" />
              </h3>
              <span className="font-para text-xl capitalize">
                {projectData?.tag}
              </span>
            </div>
            <div className="my-4 flex flex-row items-center gap-4">
              <h3 className="text-3xl ">
                <PersonIcon fontSize="20px" />
              </h3>
              <span className="font-para text-xl">
                {projectData?.header?.role}
              </span>
            </div>
            <div className="my-4 flex flex-row items-center gap-4">
              <h3 className="text-3xl ">
                <CalendarMonthIcon fontSize="20px" />
              </h3>
              <span className="font-para text-xl">
                {projectData?.header?.duration}
              </span>
            </div>
            <div className="my-4 py-2">
              <h3 className="text-2xl">{projectData?.context?.title}</h3>
              <ul className="text-xl font-para p-4">
                {projectData?.context?.goals.map((item, index) => (
                  <li
                    key={index + Math.random(4000)}
                    className="my-3 flex items-center flex-row gap-2"
                  >
                    <h4>
                      <FlagCircleIcon />
                    </h4>
                    <span className="">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="my-4 py-2">
              <h3 className="text-2xl">{projectData?.process?.title}</h3>
              <ul className="text-xl font-para p-4">
                {projectData?.process?.challenge.map((item, index) => (
                  <li
                    key={index + Math.random(4000)}
                    className="my-3 flex items-center flex-row gap-2"
                  >
                    <h4>
                      <MemoryIcon />
                    </h4>
                    <span className="">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="my-4 py-2">
              <h3 className="text-2xl">{projectData?.myContribution?.title}</h3>
              <ul className="text-xl font-para p-4">
                {projectData?.myContribution?.myrole.map((item, index) => (
                  <li
                    key={index + Math.random(4000)}
                    className="my-3 flex items-center flex-row gap-2"
                  >
                    <h4>
                      <StarIcon />
                    </h4>
                    <span className="">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="my-4 py-2">
              <h3 className="text-2xl">{projectData?.outcomes?.title}</h3>
              <ul className="text-xl font-para p-4">
                {projectData?.outcomes?.results.map((item, index) => (
                  <li
                    key={index + Math.random(4000)}
                    className="my-3 flex items-center flex-row gap-2"
                  >
                    <h4>
                      <EmojiEventsIcon />
                    </h4>
                    <span className="">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="my-4 py-2 h-auto relative min-h-screen">
              <h3 className="text-2xl pb-12">
                {projectData?.visualgallery?.title}
              </h3>
              <div className="h-auto overflow-hidden">
              
              <Masonry
                items={items}
                ease="power3.out"
                duration={0.6}
                stagger={0.05}
                animateFrom="bottom"
                scaleOnHover={true}
                hoverScale={0.95}
                blurToFocus={true}
                colorShiftOnHover={true}
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudy;
