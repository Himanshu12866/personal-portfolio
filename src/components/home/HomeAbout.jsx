import React, { useContext } from "react";
import { AppContext } from "../../context/datacontext";
import BusinessIcon from "@mui/icons-material/Business";
import LaptopIcon from "@mui/icons-material/Laptop";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
const HomeAbout = () => {
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
      className={`flex justify-center flex-col gap-24 items-center w-full py-20`}
    >
      <h2 className="text-4xl font-bold">About Me</h2>
      <div
        className="xl:w-4/5 3xl:w-3/5 w-full flex lg:flex-row flex-col gap-4 p-4
  "
      >
        <div
          className={`lg:w-4/12 w-full z-[3] flex flex-col gap-5 p-4 px-8 rounded-[20px] backdrop-blur-sm ${
            !darkMode
              ? "bg-[rgba(245,245,245,0.9)] rounded-xl shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
              : "bg-transparent  rounded-xl shadow-[0_0_8px_rgba(0,255,255,0.6)]"
          }
 `}
        >
          <div
            style={cardStyle}
            className="w-40 pt-2 px-4  text-left text-lg sm:text-xl font-heading"
          >
            Job Profile
          </div>
          <div className="flex flex-row gap-3  text-xl font-para font-medium">
            <h3>
              <BusinessIcon />
            </h3>{" "}
            <a
              className="border-b-[1px] border-[#747373]"
              href="http://novatales.com"
            >
              {" "}
              NovaTales Media LLP
            </a>
          </div>
          <div className="flex flex-row gap-3 text-xl font-para font-medium">
            <h3>
              <LaptopIcon />
            </h3>{" "}
            <p>Frontend Developer</p>
          </div>
          <div className="flex flex-row gap-3 text-xl font-para font-medium">
            <h3>
              <CalendarMonthIcon />
            </h3>{" "}
            <p>November 2024 – Present</p>
          </div>
          <div className="flex flex-row gap-3 text-xl font-para font-medium">
            <h3>
              <LocationOnIcon />
            </h3>{" "}
            <p>Hyderabad, India</p>
          </div>
          <p className="text-xl mt-3 font-medium font-heading">Quick Links</p>
          <div className="flex flex-row lg:justify-between md:justify-start justify-between lg:gap-0  items-center text-[#f59e0b] gap-2 pb-4 px-8 text-4xl">
            <a
              className="hover:text-[#e69494] transition-all hover:duration-200"
              href="https://www.instagram.com/novatalesmedia/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <InstagramIcon fontSize="50px" />
            </a>
            <a
              className="hover:text-[#e69494] transition-all hover:duration-200"
              href="https://www.facebook.com/novatalesdigital"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FacebookIcon fontSize="50px" />
            </a>
            <a
              className="hover:text-[#e69494] transition-all hover:duration-200"
              href="https://www.instagram.com/novatalesmedia/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <LinkedInIcon fontSize="50px" />
            </a>
            <a
              className="hover:text-[#e69494] transition-all hover:duration-200"
              href="https://www.youtube.com/@NovaTalesMedia
"
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-9 mt-2.5"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
              </svg>
            </a>
          </div>
        </div>
        <div
          className={`lg:w-8/12 z-[3] w-full flex flex-col gap-6 p-4 px-8 rounded-[20px] backdrop-blur-sm ${
            !darkMode
              ? "bg-[rgba(245,245,245,0.9)] rounded-xl shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
              : "bg-transparent  rounded-xl shadow-[0_0_8px_rgba(0,255,255,0.6)]"
          } 
  `}
        >
          <p
            style={cardStyle}
            className=" w-48 pt-2 px-2 sm:ms-4 text-center text-lg sm:text-xl font-heading"
          >
            {" "}
            Personal Insight
          </p>
          <p className="text-xl text-justify font-para pt-2 pb-1 px-2">
            I’m a passionate Frontend Developer with hands-on experience in
            building responsive and dynamic web applications. Skilled in React,
            JavaScript, and modern UI/UX practices, I love transforming ideas
            into smooth digital experiences.
          </p>
          <p className="text-xl text-justify font-para py-2 px-2">
            Beyond coding, I'm always curious about learning and believe in
            building products that not only work but also connect with people. I
            value teamwork and love exploring new technologies.
          </p>
          <div className=" flex justify-start px-2  items-center">
            <button
              className={`bg-black font-para z-10 text-white sm:px-8 px-4 py-3 font-medium rounded-[10px] opacity-100 hover:opacity-60 transition-all hover:duration-200 shadow-[rgba(61,61,61,0.72)_0px_0.602187px_1.08394px_-1.25px,rgba(61,61,61,0.64)_0px_2.28853px_4.11936px_-2.5px,rgba(61,61,61,0.25)_0px_10px_18px_-3.75px,rgba(0,0,0,0.35)_0px_0.706592px_0.706592px_-0.583333px,rgba(0,0,0,0.34)_0px_1.80656px_1.80656px_-1.16667px,rgba(0,0,0,0.33)_0px_3.62176px_3.62176px_-1.75px,rgba(0,0,0,0.3)_0px_6.8656px_6.8656px_-2.33333px,rgba(0,0,0,0.26)_0px_13.6468px_13.6468px_-2.91667px,rgba(0,0,0,0.15)_0px_30px_30px_-3.5px]  ${
                !darkMode
                  ? "bg-[rgba(245,245,245,0.9)] rounded-xl shadow-[rgba(61,61,61,0.72)_0px_0.602187px_1.08394px_-1.25px,rgba(61,61,61,0.64)_0px_2.28853px_4.11936px_-2.5px,rgba(61,61,61,0.25)_0px_10px_18px_-3.75px,rgba(0,0,0,0.35)_0px_0.706592px_0.706592px_-0.583333px,rgba(0,0,0,0.34)_0px_1.80656px_1.80656px_-1.16667px,rgba(0,0,0,0.33)_0px_3.62176px_3.62176px_-1.75px,rgba(0,0,0,0.3)_0px_6.8656px_6.8656px_-2.33333px,rgba(0,0,0,0.26)_0px_13.6468px_13.6468px_-2.91667px,rgba(0,0,0,0.15)_0px_30px_30px_-3.5px] "
                  : "bg-[#00000052] rounded-xl shadow-[0_0_8px_rgba(0,255,255,0.6)]"
              } `}
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
