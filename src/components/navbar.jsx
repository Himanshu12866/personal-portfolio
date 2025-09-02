import React, { useContext, useState } from "react";
import dark_logo from "../assets/icons_logos/mern_black_mode-01.png";
import light_logo from "../assets/icons_logos/mern_light_mode.png";
import GsapToggle from "./toggleswitch";
import { AppContext } from "../context/datacontext";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import { AnimatePresence, motion } from "framer-motion";
const Navbar = () => {
  const { darkMode } = useContext(AppContext);
  const [mobNav, setMobName] = useState(false);
  const links = [
    { name: "home", link: "/" },
    { name: "about", link: "/about" },
    { name: "skills", link: "/skills" },
    { name: "projects", link: "/projcts" },
    { name: "contact", link: "/contact" },
  ];
  const cardStyle = {
    backdropFilter: "blur(5px)",
    borderRadius: "10px",
    opacity: 1,
    borderBottom: "2px solid rgba(255, 255, 255, 0.3)",
    borderLeft: "0px solid",
    borderRight: "0px solid",
  };

  return (
    <>
      <div className="px-2 pb-2 pt-3 fixed top-0 z-20 w-full">
        <nav
          style={cardStyle}
          className={`${
            darkMode ? "bg-[#f5f5f52d]" : "bg-[#f5f5f533]"
          }  rounded-2xl shadow-[2px_4px_30px_rgba(0,0,0,0.1)] z-10  md:mx-4 mx-2 backdrop-blur-[5px] `}
        >
          <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto px-4 py-1">
            <a href="/" className="flex items-center w-48">
              <img
                src={!darkMode ? dark_logo : light_logo}
                className=""
                alt="Flowbite Logo"
              />
            </a>
            <div
              className="items-center justify-between hidden w-full font-heading lg:flex md:w-auto "
              id="navbar-cta"
            >
              <ul className="flex flex-col font-medium p-4 md:p-0 uppercase text-lg  md:space-x-8  md:flex-row">
                {links.map((item, index) => (
                  <Link to={item.link} className="main-nav-links" key={index}>
                    {item.name}
                  </Link>
                ))}
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
                    className="main-nav-links"
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
