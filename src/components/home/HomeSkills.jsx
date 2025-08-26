import React, { useContext } from "react";
import { AppContext } from "../../context/datacontext";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

// Tech Icons

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


const HomeSkills = () => {
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
      className={`flex justify-center flex-col font-heading gap-24 items-center w-full py-20  ${
        !darkMode
          ? "bg-[rgba(222,222,222,0.9)]"
          : "bg-[rgba(69,69,69,1)] inset-0"
      }`}
    >
      <h2 className="text-4xl font-bold">My Superpowers</h2>
      <div
        className="xl:w-4/5 3xl:w-3/5 w-full grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4
  "
      >
        <div
          className={` flex flex-col gap-5 z-[3] p-4 sm:px-8 px-4 rounded-[20px] backdrop-blur-sm ${
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
          <div
            style={cardStyle}
            className="w-40 pt-2 px-4  text-left text-lg sm:text-xl font-heading"
          >
            Frontend
          </div>
          <div className="flex flex-row gap-2 font-code justify-between mt-3 items-center">
            <img src={reactjs} alt="reactjs" />
            <p className="text-2xl">React JS</p>{" "}
            <div className=" flex justify-start px-2 items-center">
              <button className="bg-black font-para  text-white z-[3] p-2 font-medium rounded-[10px] opacity-100 hover:opacity-60 transition-all hover:duration-200 shadow-[rgba(61,61,61,0.72)_0px_0.602187px_1.08394px_-1.25px,rgba(61,61,61,0.64)_0px_2.28853px_4.11936px_-2.5px,rgba(61,61,61,0.25)_0px_10px_18px_-3.75px,rgba(0,0,0,0.35)_0px_0.706592px_0.706592px_-0.583333px,rgba(0,0,0,0.34)_0px_1.80656px_1.80656px_-1.16667px,rgba(0,0,0,0.33)_0px_3.62176px_3.62176px_-1.75px,rgba(0,0,0,0.3)_0px_6.8656px_6.8656px_-2.33333px,rgba(0,0,0,0.26)_0px_13.6468px_13.6468px_-2.91667px,rgba(0,0,0,0.15)_0px_30px_30px_-3.5px]">
                <a href="/about">
                  <ArrowOutwardIcon />
                </a>
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-2 justify-between font-cod items-center">
            <img src={javascript} alt="reactjs" />
            <p className="text-2xl">JavaScript</p>{" "}
            <div className=" flex justify-start px-2 items-center">
              <button className="bg-black font-para  text-white  p-2 font-medium rounded-[10px] opacity-100 hover:opacity-60 transition-all hover:duration-200 shadow-[rgba(61,61,61,0.72)_0px_0.602187px_1.08394px_-1.25px,rgba(61,61,61,0.64)_0px_2.28853px_4.11936px_-2.5px,rgba(61,61,61,0.25)_0px_10px_18px_-3.75px,rgba(0,0,0,0.35)_0px_0.706592px_0.706592px_-0.583333px,rgba(0,0,0,0.34)_0px_1.80656px_1.80656px_-1.16667px,rgba(0,0,0,0.33)_0px_3.62176px_3.62176px_-1.75px,rgba(0,0,0,0.3)_0px_6.8656px_6.8656px_-2.33333px,rgba(0,0,0,0.26)_0px_13.6468px_13.6468px_-2.91667px,rgba(0,0,0,0.15)_0px_30px_30px_-3.5px]">
                <a href="/about">
                  <ArrowOutwardIcon />
                </a>
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-2 font-cod justify-between items-center">
            <img src={html} alt="reactjs" />
            <p className="text-2xl">HTML 5</p>{" "}
            <div className=" flex justify-start px-2 items-center">
              <button className="bg-black font-para  text-white  p-2 font-medium rounded-[10px] opacity-100 hover:opacity-60 transition-all hover:duration-200 shadow-[rgba(61,61,61,0.72)_0px_0.602187px_1.08394px_-1.25px,rgba(61,61,61,0.64)_0px_2.28853px_4.11936px_-2.5px,rgba(61,61,61,0.25)_0px_10px_18px_-3.75px,rgba(0,0,0,0.35)_0px_0.706592px_0.706592px_-0.583333px,rgba(0,0,0,0.34)_0px_1.80656px_1.80656px_-1.16667px,rgba(0,0,0,0.33)_0px_3.62176px_3.62176px_-1.75px,rgba(0,0,0,0.3)_0px_6.8656px_6.8656px_-2.33333px,rgba(0,0,0,0.26)_0px_13.6468px_13.6468px_-2.91667px,rgba(0,0,0,0.15)_0px_30px_30px_-3.5px]">
                <a href="/about">
                  <ArrowOutwardIcon />
                </a>
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-2 font-cod justify-between items-center">
            <img src={css} alt="reactjs" />
            <p className="text-2xl">CSS</p>{" "}
            <div className=" flex justify-start px-2 items-center">
              <button className="bg-black font-para  text-white  p-2 font-medium rounded-[10px] opacity-100 hover:opacity-60 transition-all hover:duration-200 shadow-[rgba(61,61,61,0.72)_0px_0.602187px_1.08394px_-1.25px,rgba(61,61,61,0.64)_0px_2.28853px_4.11936px_-2.5px,rgba(61,61,61,0.25)_0px_10px_18px_-3.75px,rgba(0,0,0,0.35)_0px_0.706592px_0.706592px_-0.583333px,rgba(0,0,0,0.34)_0px_1.80656px_1.80656px_-1.16667px,rgba(0,0,0,0.33)_0px_3.62176px_3.62176px_-1.75px,rgba(0,0,0,0.3)_0px_6.8656px_6.8656px_-2.33333px,rgba(0,0,0,0.26)_0px_13.6468px_13.6468px_-2.91667px,rgba(0,0,0,0.15)_0px_30px_30px_-3.5px]">
                <a href="/about">
                  <ArrowOutwardIcon />
                </a>
              </button>
            </div>
          </div>
        </div>
        <div
          className={` flex z-[3] flex-col gap-5 p-4 sm:px-8 px-4 rounded-[20px] backdrop-blur-sm ${
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
          <p
            style={cardStyle}
            className="w-40 pt-2 px-4  text-left text-lg sm:text-xl font-heading"
          >
            {" "}
            Backend
          </p>
          <div className="flex flex-row gap-2 justify-between mt-3 items-center">
            <img src={nodejs} alt="reactjs" />
            <p className="text-2xl">Node JS</p>{" "}
            <div className=" flex justify-start px-2 items-center">
              <button className="bg-black font-para  text-white  p-2 font-medium rounded-[10px] opacity-100 hover:opacity-60 transition-all hover:duration-200 shadow-[rgba(61,61,61,0.72)_0px_0.602187px_1.08394px_-1.25px,rgba(61,61,61,0.64)_0px_2.28853px_4.11936px_-2.5px,rgba(61,61,61,0.25)_0px_10px_18px_-3.75px,rgba(0,0,0,0.35)_0px_0.706592px_0.706592px_-0.583333px,rgba(0,0,0,0.34)_0px_1.80656px_1.80656px_-1.16667px,rgba(0,0,0,0.33)_0px_3.62176px_3.62176px_-1.75px,rgba(0,0,0,0.3)_0px_6.8656px_6.8656px_-2.33333px,rgba(0,0,0,0.26)_0px_13.6468px_13.6468px_-2.91667px,rgba(0,0,0,0.15)_0px_30px_30px_-3.5px]">
                <a href="/about">
                  <ArrowOutwardIcon />
                </a>
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-2 justify-between items-center">
            <img src={express} alt="reactjs" />
            <p className="text-2xl">Express JS</p>{" "}
            <div className=" flex justify-start px-2 items-center">
              <button className="bg-black font-para  text-white  p-2 font-medium rounded-[10px] opacity-100 hover:opacity-60 transition-all hover:duration-200 shadow-[rgba(61,61,61,0.72)_0px_0.602187px_1.08394px_-1.25px,rgba(61,61,61,0.64)_0px_2.28853px_4.11936px_-2.5px,rgba(61,61,61,0.25)_0px_10px_18px_-3.75px,rgba(0,0,0,0.35)_0px_0.706592px_0.706592px_-0.583333px,rgba(0,0,0,0.34)_0px_1.80656px_1.80656px_-1.16667px,rgba(0,0,0,0.33)_0px_3.62176px_3.62176px_-1.75px,rgba(0,0,0,0.3)_0px_6.8656px_6.8656px_-2.33333px,rgba(0,0,0,0.26)_0px_13.6468px_13.6468px_-2.91667px,rgba(0,0,0,0.15)_0px_30px_30px_-3.5px]">
                <a href="/about">
                  <ArrowOutwardIcon />
                </a>
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-2 justify-between items-center">
            <img src={mongodb} alt="reactjs" />
            <p className="text-2xl">MongoDB</p>{" "}
            <div className=" flex justify-start px-2 items-center">
              <button className="bg-black font-para  text-white  p-2 font-medium rounded-[10px] opacity-100 hover:opacity-60 transition-all hover:duration-200 shadow-[rgba(61,61,61,0.72)_0px_0.602187px_1.08394px_-1.25px,rgba(61,61,61,0.64)_0px_2.28853px_4.11936px_-2.5px,rgba(61,61,61,0.25)_0px_10px_18px_-3.75px,rgba(0,0,0,0.35)_0px_0.706592px_0.706592px_-0.583333px,rgba(0,0,0,0.34)_0px_1.80656px_1.80656px_-1.16667px,rgba(0,0,0,0.33)_0px_3.62176px_3.62176px_-1.75px,rgba(0,0,0,0.3)_0px_6.8656px_6.8656px_-2.33333px,rgba(0,0,0,0.26)_0px_13.6468px_13.6468px_-2.91667px,rgba(0,0,0,0.15)_0px_30px_30px_-3.5px]">
                <a href="/about">
                  <ArrowOutwardIcon />
                </a>
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-2 justify-between items-center">
            <img src={git} alt="reactjs" />
            <p className="text-2xl">Git</p>{" "}
            <div className=" flex justify-start px-2 items-center">
              <button className="bg-black font-para  text-white  p-2 font-medium rounded-[10px] opacity-100 hover:opacity-60 transition-all hover:duration-200 shadow-[rgba(61,61,61,0.72)_0px_0.602187px_1.08394px_-1.25px,rgba(61,61,61,0.64)_0px_2.28853px_4.11936px_-2.5px,rgba(61,61,61,0.25)_0px_10px_18px_-3.75px,rgba(0,0,0,0.35)_0px_0.706592px_0.706592px_-0.583333px,rgba(0,0,0,0.34)_0px_1.80656px_1.80656px_-1.16667px,rgba(0,0,0,0.33)_0px_3.62176px_3.62176px_-1.75px,rgba(0,0,0,0.3)_0px_6.8656px_6.8656px_-2.33333px,rgba(0,0,0,0.26)_0px_13.6468px_13.6468px_-2.91667px,rgba(0,0,0,0.15)_0px_30px_30px_-3.5px]">
                <a href="/about">
                  <ArrowOutwardIcon />
                </a>
              </button>
            </div>
          </div>
        </div>
        <div
          className={` flex flex-col gap-5 p-4 sm:px-8 px-4 z-[3] rounded-[20px] backdrop-blur-sm ${
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
          <p
            style={cardStyle}
            className="w-48 pt-2 px-4  text-left text-lg sm:text-xl font-heading"
          >
            {" "}
            Libraries & Tools
          </p>
          <div className="flex flex-row gap-2 justify-between mt-3 items-center">
            <img src={tailwind} alt="reactjs" />
            <p className="text-2xl">Tailwind CSS</p>{" "}
            <div className=" flex justify-start px-2 items-center">
              <button className="bg-black font-para  text-white  p-2 font-medium rounded-[10px] opacity-100 hover:opacity-60 transition-all hover:duration-200 shadow-[rgba(61,61,61,0.72)_0px_0.602187px_1.08394px_-1.25px,rgba(61,61,61,0.64)_0px_2.28853px_4.11936px_-2.5px,rgba(61,61,61,0.25)_0px_10px_18px_-3.75px,rgba(0,0,0,0.35)_0px_0.706592px_0.706592px_-0.583333px,rgba(0,0,0,0.34)_0px_1.80656px_1.80656px_-1.16667px,rgba(0,0,0,0.33)_0px_3.62176px_3.62176px_-1.75px,rgba(0,0,0,0.3)_0px_6.8656px_6.8656px_-2.33333px,rgba(0,0,0,0.26)_0px_13.6468px_13.6468px_-2.91667px,rgba(0,0,0,0.15)_0px_30px_30px_-3.5px]">
                <a href="/about">
                  <ArrowOutwardIcon />
                </a>
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-2 justify-between items-center">
            <img src={mui} alt="reactjs" />
            <p className="text-2xl">Material UI</p>{" "}
            <div className=" flex justify-start px-2 items-center">
              <button className="bg-black font-para  text-white  p-2 font-medium rounded-[10px] opacity-100 hover:opacity-60 transition-all hover:duration-200 shadow-[rgba(61,61,61,0.72)_0px_0.602187px_1.08394px_-1.25px,rgba(61,61,61,0.64)_0px_2.28853px_4.11936px_-2.5px,rgba(61,61,61,0.25)_0px_10px_18px_-3.75px,rgba(0,0,0,0.35)_0px_0.706592px_0.706592px_-0.583333px,rgba(0,0,0,0.34)_0px_1.80656px_1.80656px_-1.16667px,rgba(0,0,0,0.33)_0px_3.62176px_3.62176px_-1.75px,rgba(0,0,0,0.3)_0px_6.8656px_6.8656px_-2.33333px,rgba(0,0,0,0.26)_0px_13.6468px_13.6468px_-2.91667px,rgba(0,0,0,0.15)_0px_30px_30px_-3.5px]">
                <a href="/about">
                  <ArrowOutwardIcon />
                </a>
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-2 justify-between items-center">
            <img src={gcp} alt="reactjs" />
            <p className="text-2xl">Google GCP</p>{" "}
            <div className=" flex justify-start px-2 items-center">
              <button className="bg-black font-para  text-white  p-2 font-medium rounded-[10px] opacity-100 hover:opacity-60 transition-all hover:duration-200 shadow-[rgba(61,61,61,0.72)_0px_0.602187px_1.08394px_-1.25px,rgba(61,61,61,0.64)_0px_2.28853px_4.11936px_-2.5px,rgba(61,61,61,0.25)_0px_10px_18px_-3.75px,rgba(0,0,0,0.35)_0px_0.706592px_0.706592px_-0.583333px,rgba(0,0,0,0.34)_0px_1.80656px_1.80656px_-1.16667px,rgba(0,0,0,0.33)_0px_3.62176px_3.62176px_-1.75px,rgba(0,0,0,0.3)_0px_6.8656px_6.8656px_-2.33333px,rgba(0,0,0,0.26)_0px_13.6468px_13.6468px_-2.91667px,rgba(0,0,0,0.15)_0px_30px_30px_-3.5px]">
                <a href="/about">
                  <ArrowOutwardIcon />
                </a>
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-2 justify-between items-center">
            <img src={adobeI} alt="reactjs" />
            <p className="text-2xl">Adobe AI</p>{" "}
            <div className=" flex justify-start px-2 items-center">
              <button className="bg-black font-para  text-white  p-2 font-medium rounded-[10px] opacity-100 hover:opacity-60 transition-all hover:duration-200 shadow-[rgba(61,61,61,0.72)_0px_0.602187px_1.08394px_-1.25px,rgba(61,61,61,0.64)_0px_2.28853px_4.11936px_-2.5px,rgba(61,61,61,0.25)_0px_10px_18px_-3.75px,rgba(0,0,0,0.35)_0px_0.706592px_0.706592px_-0.583333px,rgba(0,0,0,0.34)_0px_1.80656px_1.80656px_-1.16667px,rgba(0,0,0,0.33)_0px_3.62176px_3.62176px_-1.75px,rgba(0,0,0,0.3)_0px_6.8656px_6.8656px_-2.33333px,rgba(0,0,0,0.26)_0px_13.6468px_13.6468px_-2.91667px,rgba(0,0,0,0.15)_0px_30px_30px_-3.5px]">
                <a href="/about">
                  <ArrowOutwardIcon />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-start px-2 items-center">
        <button className="bg-black font-para  text-white sm:px-8 z-[3] px-4 py-3 font-medium rounded-[10px] opacity-100 hover:opacity-60 transition-all hover:duration-200 shadow-[rgba(61,61,61,0.72)_0px_0.602187px_1.08394px_-1.25px,rgba(61,61,61,0.64)_0px_2.28853px_4.11936px_-2.5px,rgba(61,61,61,0.25)_0px_10px_18px_-3.75px,rgba(0,0,0,0.35)_0px_0.706592px_0.706592px_-0.583333px,rgba(0,0,0,0.34)_0px_1.80656px_1.80656px_-1.16667px,rgba(0,0,0,0.33)_0px_3.62176px_3.62176px_-1.75px,rgba(0,0,0,0.3)_0px_6.8656px_6.8656px_-2.33333px,rgba(0,0,0,0.26)_0px_13.6468px_13.6468px_-2.91667px,rgba(0,0,0,0.15)_0px_30px_30px_-3.5px]">
          <a href="/about">
            More About Skills <ArrowOutwardIcon />
          </a>
        </button>
      </div>
    </div>
  );
};

export default HomeSkills;

//https://www.instagram.com/novatalesmedia/ https://www.facebook.com/novatalesdigital https://www.linkedin.com/company/novatales/ https://www.youtube.com/@NovaTalesMedia
