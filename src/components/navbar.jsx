import React, { useContext, useState } from "react";
import dark_logo from "../assets/icons_logos/mern_light_mode.png";
import light_logo from "../assets/icons_logos/mern_black_mode-01.png";
import GsapToggle from "./toggleswitch";
import { AppContext } from "../context/datacontext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { darkMode } = useContext(AppContext);
  const [mobNav, setMobName] = useState(true);
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
          className={`${
            !darkMode ? "bg-[#7c6a6a2b]" : "bg-[#f5f5f533]"
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
              <div className="flex justify-center lg:hidden items-center">
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
              </div>
              <div className="md:flex hidden justify-center items-center">
                <GsapToggle />
              </div>
            </div>
          </div>
        </nav>
      </div>

      {mobNav ? (
        <div className="w-full absolute top-0 h-screen p-4 bg-black">
          <div className="flex justify-between">
            <a href="/" class="flex items-center w-48">
              <img
                src={!darkMode ? dark_logo : light_logo}
                className=""
                alt="Flowbite Logo"
              />
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
