import React, { useContext } from "react";
import dark_logo from "../assets/icons_logos/mern_light_mode.png";
import light_logo from "../assets/icons_logos/mern_black_mode-01.png";
import GsapToggle from "./toggleswitch";
import { AppContext } from "../context/datacontext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { darkMode } = useContext(AppContext);
  const links = [
    { name: "home", link: "/" },
    { name: "about", link: "/about" },
    { name: "projcts", link: "/projcts" },
    { name: "skills", link: "/skills" },
    { name: "contact", link: "/contact" },
  ];
  return (
    <div className="">
      <nav class="">
        <div class="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" class="flex items-center w-48">
            <img
              src={!darkMode ? dark_logo : light_logo}
              className=""
              alt="Flowbite Logo"
            />
          </a>
          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className=" flex justify-center items-center">
              <GsapToggle />
            </div>
          </div>
          <div
            class="items-center justify-between hidden w-full font-heading lg:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul class="flex flex-col font-medium p-4 md:p-0 uppercase text-lg mt-4 md:space-x-8  md:flex-row">
              {links.map((item, index) => (
                <Link to={item.link} className="main-nav-links" key={index}>
                  {item.name}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
