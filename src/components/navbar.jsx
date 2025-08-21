import React, { useContext, useState } from "react";
import dark_logo from "../assets/icons_logos/mern_light_mode.png";
import light_logo from "../assets/icons_logos/mern_black_mode-01.png";
import GsapToggle from "./toggleswitch";
import { AppContext } from "../context/datacontext";
import { Link } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
const Navbar = () => {
  const { darkMode } = useContext(AppContext);
  const [mobNav, setMobName] = useState(false);
  const links = [
    { name: "home", link: "/" },
    { name: "about", link: "/about" },
    { name: "projcts", link: "/projcts" },
    { name: "skills", link: "/skills" },
    { name: "contact", link: "/contact" },
  ];
  return (
    <>
      <div className="p-2">
        <nav
          className={`${!darkMode ? "bg-[#7c6a6a2b]" : "bg-[#f5f5f533]"
            }  rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)]  md:mx-4 mx-2 backdrop-blur-[5px] `}
        >
          <div class="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" class="flex items-center w-48">
              <img
                src={!darkMode ? dark_logo : light_logo}
                className=""
                alt="Flowbite Logo"
              />
            </a>
            <div
              class="items-center justify-between hidden w-full font-heading lg:flex md:w-auto "
              id="navbar-cta"
            >
              <ul class="flex flex-col font-medium p-4 md:p-0 uppercase text-lg  md:space-x-8  md:flex-row">
                {links.map((item, index) => (
                  <Link to={item.link} className="main-nav-links" key={index}>
                    {item.name}
                  </Link>
                ))}
              </ul>
            </div>{" "}
            <div class="flex  space-x-3 md:space-x-0 ">
              <button onClick={() => setMobName(!mobNav)} className="flex justify-center lg:hidden items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  className="w-12 h-12"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                  />
                </svg>
              </button>
              <div className="w-20 md:flex hidden justify-center items-center">
                <GsapToggle />
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className={`w-full absolute ${mobNav ? "traslate-y-0" : "-translate-y-full"} top-0 h-screen p-4 flex flex-col gap-4 bg-[#1e1d1d]`}>
        <div className="flex justify-between sm:mx-8 mx-4 mt-2">
          <a href="/" class="flex items-center w-48">
            <img
              src={light_logo}
              className=""
              alt="Flowbite Logo"
            />
          </a>
          <button onClick={() => setMobName(!mobNav)}>
            <svg xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10"
              fill="white" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
          </button>
        </div>
        <div className="sm:mx-8 mx-4 mt-4">
          <ul className="flex flex-col gap-4 text-2xl font-heading capitalize text-white">
            {links.map((item, index) => (
              <Link to={item.link} className="main-nav-links" key={index}>
                {item.name}
              </Link>
            ))}
            <li className="bg-[#ffffffb7] flex justify-between items-center rounded-lg text-lg px-4 backdrop-blur-[5px]">
              <span>Change Theme</span>   <GsapToggle />
            </li>
            <li className="flex justify-start items-center gap-8 text-4xl">
              <span><LinkedInIcon fontSize="30px"/></span>
              <span><GitHubIcon fontSize="30px"/></span>
              <span><XIcon fontSize="30px"/></span>
            </li>
          </ul>
        </div>
      </div>

    </>
  );
};

export default Navbar;
