import React, { useContext } from "react";
import { AppContext } from "../../context/datacontext";
import BusinessIcon from "@mui/icons-material/Business";
import LaptopIcon from "@mui/icons-material/Laptop";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import VerifiedIcon from "@mui/icons-material/Verified";
import express from "../../assets/icons_logos/icons8-express-js-50.png";
import express_light from "../../assets/icons_logos/icons8-express-js-48.png";
const AboutExperience = () => {
  const { darkMode, aboutData, skills } = useContext(AppContext);
  const experienceData = aboutData?.data?.experience || [];
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
  return (
    <div
      className={`flex justify-center flex-col gap-24 items-center w-full pb-20 pt-10 p-4 `}
    >
      <h2 className="text-4xl font-bold pb-8">Professional Journey</h2>
      {experienceData.map((item, index) => (
        <div key={index}
          className={`xl:w-4/5 3xl:w-3/5 z-[5] w-full p-4 
  `}
        >
          <div className="flex lg:flex-row flex-col gap-4">
            <div
              className={`${
                !darkMode
                  ? "bg-[rgba(245,245,245,0.9)] rounded-xl shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
                  : "bg-transparent rounded-xl shadow-[0_0_8px_rgba(0,255,255,0.6)]"
              } lg:w-4/12 flex flex-col gap-4 p-2   `}
            >
              <div className="flex justify-center items-center">
                <img src={item.logo} alt="novatales logo" />
              </div>
              <div className="flex flex-row gap-3 pointer-events-auto mt-4 text-xl sm:ps-6 font-para font-medium">
                <h3>
                  <BusinessIcon />
                </h3>{" "}
                <a
                  className="border-b-[1px] border-[#747373]"
                  href={item.companyLink}
                >
                  {" "}
                  {item.company}
                </a>
              </div>
              <div className="flex flex-row gap-3 text-xl font-para sm:ps-6 font-medium">
                <h3>
                  <LaptopIcon />
                </h3>{" "}
                <p>{item.role}</p>
              </div>
              <div className="flex flex-row gap-3 text-xl font-para sm:ps-6 font-medium">
                <h3>
                  <CalendarMonthIcon />
                </h3>{" "}
                <p>{item.duration}</p>
              </div>
              <div className="flex flex-row gap-3 text-xl font-para sm:ps-6 font-medium">
                <h3>
                  <LocationOnIcon />
                </h3>{" "}
                <p>{item.location}</p>
              </div>
            </div>
            <div
              className={`flex flex-col lg:w-8/12 gap-2  p-2 ${
                !darkMode
                  ? "bg-[rgba(245,245,245,0.9)] rounded-xl shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
                  : "bg-transparent rounded-xl shadow-[0_0_8px_rgba(0,255,255,0.6)]"
              }`}
            >
              <div
                style={cardStyle}
                className="w-44 pt-2 px-4 mt-4 text-left text-lg sm:text-xl font-heading"
              >
                About My Role
              </div>
              <p className="text-xl text-justify font-para pt-2 pb-1 px-2">
                {item.description}
              </p>
              <div
                style={cardStyle}
                className="w-56 pt-2 px-4 mt-4 text-left text-lg sm:text-xl font-heading"
              >
                Technologies Used
              </div>
              <div className="flex flex-row flex-wrap lg:gap-2  mt-4 px-2 justify-start items-center">
                {skilssIcon.map((item, index) => (
                  <p
                    key={index}
                    className="w-12 flex justify-center items-center"
                  >
                    <img
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
            </div>
          </div>
          <div
            className={` mt-4 p-2 ${
              !darkMode
                ? "bg-[rgba(245,245,245,0.9)] rounded-xl shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
                : "bg-transparent rounded-xl shadow-[0_0_8px_rgba(0,255,255,0.6)]"
            }`}
          >
            <div
              style={cardStyle}
              className="w-52 pt-2 px-4 mt-4 text-center text-lg sm:text-xl font-heading"
            >
              My Contribution
            </div>
            <div className="grid lg:grid-cols-2 mt-2 gap-4">
              <div>
                <ul className="text-xl text-left font-para pt-2 pb-1 px-2">
                  {item.responsibilities.slice(0, 3).map((item, index) => (
                    <li
                      key={index}
                      className="flex flex-row gap-2 justify-start ism:items-center items-start my-3"
                    >
                      <VerifiedIcon className="text-[#f59e0b]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <ul className="text-xl text-left font-para lg:pt-2 pb-1 px-2">
                  {item.responsibilities.slice(3).map((item, index) => (
                    <li
                      key={index}
                      className="flex flex-row gap-2 justify-start ism:items-center items-start my-4"
                    >
                      <VerifiedIcon className="text-[#f59e0b]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutExperience;
