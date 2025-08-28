import React, { useContext } from "react";
import { AppContext } from "../../context/datacontext";
import BusinessIcon from "@mui/icons-material/Business";
import LaptopIcon from "@mui/icons-material/Laptop";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import VerifiedIcon from "@mui/icons-material/Verified";
import nova_logo from "../../assets/icons_logos/novatales.png";
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
const AboutExperience = () => {
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
    { name: "Adobe Illustrator", icon: adobeI },
  ];
  const myContributions = [
    "Developed responsive and interactive UI components using React, ensuring smooth cross-device compatibility.",
    "Enhanced site performance and accessibility, improving engagement and user retention.",
    "Implemented API integrations and optimized state management for seamless data flow.",
    "Contributed to backend development, building and refining RESTful APIs in Node.js.",
    "Worked on database operations (MongoDB) for secure storage, queries, and data consistency.",
    "Collaborated with design and marketing teams to deliver scalable, campaign-ready features.",
  ];

  return (
    <div
      className={`flex justify-center flex-col gap-24 items-center w-full pb-20 p-4 ${
        !darkMode
          ? "bg-[rgba(222,222,222,0.9)]"
          : "bg-[rgba(69,69,69,1)] inset-0"
      }`}
    >
      <h2 className="text-4xl font-bold">Professional Journey</h2>
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
            <div className="flex justify-center items-center">
              <img src={nova_logo} alt="novatales logo" />
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
            <div className="flex flex-row lg:justify-between md:justify-start justify-between lg:gap-0  items-center text-[#ff7700] gap-2 pb-4 px-8 text-4xl">
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
          <div className="flex flex-col lg:w-8/12 gap-2  p-2">
            <div
              style={cardStyle}
              className="w-44 pt-2 px-4  text-left text-lg sm:text-xl font-heading"
            >
              Company Intro
            </div>
            <p className="text-xl text-justify font-para pt-2 pb-1 px-2">
              Nova Tales is a boutique digital marketing and brand strategy
              consulting firm, delivering end-to-end solutions from campaign
              strategy and creative multimedia content to cutting-edge web & app
              development.
            </p>
            <div
              style={cardStyle}
              className="w-44 pt-2 px-4 mt-4 text-left text-lg sm:text-xl font-heading"
            >
              About My Role
            </div>
            <p className="text-xl text-justify font-para pt-2 pb-1 px-2">
              As a Frontend Developer, I took ownership of crafting engaging and
              high-performing user interfaces that not only aligned with brand
              goals but also elevated the overall digital experience. My role
              involved building reusable UI components, optimizing performance,
              collaborating cross-functionally with design and marketing teams,
              and ensuring seamless integration of campaigns into web platforms.
              Beyond just coding screens, I focused on delivering user-centric,
              accessible, and scalable solutions that directly impacted
              engagement and retention.
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

export default AboutExperience;
