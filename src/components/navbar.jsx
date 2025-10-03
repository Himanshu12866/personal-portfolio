import React, { useContext, useEffect, useState } from "react";
import dark_logo from "../assets/icons_logos/mern_black_mode-01.png";
import light_logo from "../assets/icons_logos/mern_light_mode.png";
import GsapToggle from "./toggleswitch";
import { AppContext } from "../context/datacontext";
import { Link, useLocation } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import { AnimatePresence, motion } from "framer-motion";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const Navbar = () => {
  const { darkMode, projects } = useContext(AppContext);
  const [mobNav, setMobName] = useState(false);
  const [perProjects, setPerProjects] = useState([]);
  const [profProjects, setProfProjects] = useState([]);
  const links = [
    { name: "home", link: "/" },
    { name: "about", link: "/about" },
    { name: "skills", link: "/skills" },
    { name: "projects", link: "/projects" },
    { name: "contact", link: "/contact" },
  ];
  const location = useLocation();

  useEffect(() => {
    if (projects && projects.length > 0) {
      const personal = projects.filter((item) => item.category === "Personal");
      const professional = projects.filter(
        (item) => item.category === "Professional"
      );
      setPerProjects(personal);
      setProfProjects(professional);
    }
  }, [projects]);
  console.log(perProjects, profProjects);
  return (
    <>
      <div className="px-2 pb-2 pt-3 fixed top-0 z-20 flex justify-center items-center w-full ">
        <nav
          className={`xl:w-3/4  w-full ${
            !darkMode
              ? "bg-[rgba(245,245,245,0.9)] rounded-xl shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
              : "bg-transparent rounded-xl shadow-[0_0_8px_rgba(0,255,255,0.6)]"
          } rounded-4xl  z-10  md:mx-4 mx-2 backdrop-blur-[5px] `}
        >
          <div className="w-full flex flex-wrap items-center justify-between  xl:px-16 px-8 py-1">
            <Link to="/" className="flex items-center w-48">
              <img
                src={!darkMode ? dark_logo : light_logo}
                className=""
                alt="Flowbite Logo"
              />
            </Link>
            <div
              className="items-center justify-between hidden w-full font-heading lg:flex md:w-auto "
              id="navbar-cta"
            >
              <ul className="flex flex-col font-medium p-4 md:p-0 uppercase text-lg  md:space-x-8  md:flex-row">
                <Link
                  to="/"
                  className={`main-nav-links ${
                    location.pathname === "/" ? "text-[#f59e0b]" : ""
                  }`}
                >
                  Home
                </Link>

                <Link
                  to="/about"
                  className={`main-nav-links ${
                    location.pathname.includes("/about") ? "text-[#f59e0b]" : ""
                  }`}
                >
                  About
                </Link>
                <Link
                  to="/skills"
                  className={`main-nav-links ${
                    location.pathname.includes("/skills")
                      ? "text-[#f59e0b]"
                      : ""
                  }`}
                >
                  Skills
                </Link>
                <Link
                  to="/projects"
                  className={`main-nav-links flex justify-center items-center gap-1 relative ${
                    location.pathname.includes("/projects")
                      ? "text-[#f59e0b]"
                      : ""
                  }`}
                >
                  Projects{" "}
                  <KeyboardArrowDownIcon fontSize="small" className="" />
                  <div
                    className={`absolute ${
                      !darkMode
                        ? "bg-[rgba(245,245,245,1)] rounded-xl shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
                        : "bg-[#00000081] rounded-xl shadow-[0_0_8px_rgba(0,255,255,0.6)]"
                    } top-14 backdrop-blur-[10px] px-8 py-4`}
                  >
                    <h4 className=" text-xl px-8 font-bold">Professional</h4>
                    <ul className="text-lg capitalize">
                      {
                        profProjects.map((item , index) => <Link to={item.slug}>
                        {item.text}
                        </Link>

                        )
                      }
                    </ul>
                  </div>
                </Link>
                <Link
                  to="/contact"
                  className={`main-nav-links ${
                    location.pathname.includes("/contact")
                      ? "text-[#f59e0b]"
                      : ""
                  }`}
                >
                  Contact
                </Link>
              </ul>
            </div>{" "}
            <div className="flex  space-x-3 md:space-x-0 ">
              <button
                onClick={() => setMobName(!mobNav)}
                className="flex justify-center lg:hidden items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  className="w-12 h-12"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                  />
                </svg>
              </button>
              <div className="w-20 lg:flex hidden justify-center items-center">
                <GsapToggle />
              </div>
            </div>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {mobNav && (
          <motion.div
            key="mobileNav"
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-screen overflow-y-auto p-4 flex flex-col z-30 gap-4 bg-[#1e1d1d]"
          >
            <div className="flex justify-between sm:mx-8 mx-4 mt-2">
              <a href="/" className="flex items-center w-48">
                <img src={light_logo} alt="logo" />
              </a>
              <button onClick={() => setMobName(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10"
                  fill="white"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                </svg>
              </button>
            </div>
            <div className="sm:mx-8 mx-4 mt-2">
              <ul className="flex flex-col gap-4 text-2xl font-heading capitalize text-white">
                {links.map((item, index) => (
                  <Link
                    to={item.link}
                    className={`${
                      location.pathname.includes(item.name)
                        ? "text-[#f59e0b]"
                        : ""
                    } hover:text-[#f59e0b] w-28  transition-all duration-200`}
                    key={index}
                    onClick={() => setMobName(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <li className="bg-[#ffffffb7] text-black flex justify-between items-center rounded-lg text-lg ps-4 py-4 pe-8 backdrop-blur-[5px]">
                  <span>Change Theme</span> <GsapToggle />
                </li>
                <li className="flex justify-start items-center gap-8 text-4xl">
                  <LinkedInIcon fontSize="30px" />
                  <GitHubIcon fontSize="30px" />
                  <XIcon fontSize="30px" />
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
