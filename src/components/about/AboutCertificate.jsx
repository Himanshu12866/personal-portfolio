import React, { useContext } from "react";
import { AppContext } from "../../context/datacontext";
import BusinessIcon from "@mui/icons-material/Business";
import LaptopIcon from "@mui/icons-material/Laptop";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import VerifiedIcon from "@mui/icons-material/Verified";
import naresh_logo from "../../assets/icons_logos/naresh-it-logo2.png";
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

const AboutCertificate = () => {
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
  ];
  const myContributions = [
    "Developed responsive and interactive UI components with ReactJS for cross-device compatibility.",
    "Implemented RESTful APIs using Node.js and Express.js for backend communication.",
    "Designed and managed MongoDB databases for secure data handling.",
    "Enhanced site performance and optimized state management for seamless user experience.",
    "Collaborated on projects simulating real-world applications using Git & GitHub.",
    "Performed thorough testing and debugging to ensure application reliability and functionality.",
  ];

  return (
    <div
      className={`flex justify-center flex-col gap-24 items-center w-full mt-4 py-20 p-4 ${
        !darkMode
          ? "bg-[rgba(222,222,222,0.9)]"
          : "bg-[rgba(69,69,69,1)] inset-0"
      }`}
    >
      <h2 className="text-4xl font-bold">Certifications</h2>
      <div
        style={cardStyle}
        className={`xl:w-4/5 3xl:w-3/5 z-[2] w-full p-4 ${
          !darkMode ? "bg-[rgba(245,245,245,0.9)] " : "bg-[#f5f5f552] inset-0"
        } opacity-100
  shadow-[0px_0.706592px_0.706592px_-0.666667px_rgba(0,0,0,0.08),
          0px_1.80656px_1.80656px_-1.33333px_rgba(0,0,0,0.08),
          0px_3.62176px_3.62176px_-2px_rgba(0,0,0,0.07),
          0px_6.8656px_6.8656px_-2.66667px_rgba(0,0,0,0.07),
          0px_13.6468px_13.6468px_-3.33333px_rgba(0,0,0,0.05),
          0px_30px_30px_-4px_rgba(0,0,0,0.02),
          inset_0px_3px_1px_0px_rgb(255,255,255)]
  `}
      >
        <div className="flex lg:flex-row flex-col gap-4">
          <div className="lg:w-4/12 flex flex-col gap-4 p-2 lg:border-r-[1px] border-b-[1px] lg:border-b-[0px] border-[#d1898965] ">
            <div className="flex justify-center items-center h-[165px]">
              <img src={naresh_logo} alt="novatales logo" />
            </div>
            <div className="flex flex-row gap-3 pointer-events-auto mt-4 text-xl font-para font-medium">
              <h3>
                <BusinessIcon />
              </h3>{" "}
              <a
                className="border-b-[1px] border-[#747373]"
                href="http://novatales.com"
              >
                {" "}
                Naresh IT
              </a>
            </div>
            <div className="flex flex-row gap-3 text-xl font-para font-medium">
              <h3>
                <LaptopIcon />
              </h3>{" "}
              <p>UI Full Stack With ReactJS</p>
            </div>
            <div className="flex flex-row gap-3 text-xl font-para font-medium">
              <h3>
                <CalendarMonthIcon />
              </h3>{" "}
              <p>April - August 2024</p>
            </div>
            <div className="flex flex-row gap-3 text-xl font-para font-medium">
              <h3>
                <LocationOnIcon />
              </h3>{" "}
              <p>Hyderabad, India</p>
            </div>
            <p className="text-xl mt-3 font-medium font-heading">
              View Certificate
            </p>
            <div className="flex flex-row lg:justify-between md:justify-start justify-between lg:gap-0  items-center text-[#ff7700] gap-2 pb-4 px-8 text-4xl">
              <a
                className="hover:text-[#e69494] transition-all flex flex-row gap-2 justify-center items-center hover:duration-200"
                href="https://www.linkedin.com/in/himanshumishra17/overlay/1753120822194/single-media-viewer/?profileId=ACoAAEkM3QcBjPvIjOKMhGc660O63MHWeinwVuM
"
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-9"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864z" />
                  <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z" />
                </svg>
                <span className="text-lg"> UI Full Stack With React</span>{" "}
              </a>
            </div>
          </div>
          <div className="flex flex-col lg:w-8/12 gap-2  p-2">
            <div
              style={cardStyle}
              className="w-44 pt-2 px-4  text-left text-lg sm:text-xl font-heading"
            >
              Institute Intro
            </div>
            <p className="text-xl text-justify font-para pt-2 pb-1 px-2">
              Naresh IT is a premier software training institute offering
              hands-on courses in full stack development and emerging
              technologies, helping learners gain industry-ready skills.
            </p>
            <div
              style={cardStyle}
              className="w-52 pt-2 px-4 mt-4 text-left text-lg sm:text-xl font-heading"
            >
              About My Training
            </div>
            <p className="text-xl text-justify font-para pt-2 pb-1 px-2">
              As a trainee in UI Full Stack with ReactJS, I worked on building
              responsive web applications using the MERN stack. My role involved
              developing reusable UI components, implementing APIs, managing
              databases, and enhancing overall performance and scalability of
              applications.
            </p>
            <div
              style={cardStyle}
              className="w-56 pt-2 px-4 mt-4 text-left text-lg sm:text-xl font-heading"
            >
              Technologies Used
            </div>
            <div className="flex flex-row flex-wrap lg:gap-2  mt-4 px-2 justify-start items-center">
              {skills.map((item, index) => (
                <p
                  key={index}
                  className="w-12 flex justify-center items-center"
                >
                  <img src={item.icon} alt={item.name} />
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className=" mt-4 p-2">
          <div
            style={cardStyle}
            className="w-52 pt-2 px-4 mt-4 text-center text-lg sm:text-xl font-heading"
          >
            My Contribution
          </div>
          <div className="grid lg:grid-cols-2 mt-2 gap-4">
            <div>
              <ul className="text-xl text-left font-para pt-2 pb-1 px-2">
                {myContributions.slice(0, 3).map((item, index) => (
                  <li
                    key={index}
                    className="flex flex-row gap-2 justify-start ism:items-center items-start my-3"
                  >
                    <VerifiedIcon className="text-[#ff7700]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ul className="text-xl text-left font-para lg:pt-2 pb-1 px-2">
                {myContributions.slice(3).map((item, index) => (
                  <li
                    key={index}
                    className="flex flex-row gap-2 justify-start ism:items-center items-start my-4"
                  >
                    <VerifiedIcon className="text-[#ff7700]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCertificate;
