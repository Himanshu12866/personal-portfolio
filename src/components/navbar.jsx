import React, { useContext } from "react";
import dark_logo from "../assets/icons_logos/mern_light_mode.svg";
import light_logo from "../assets/icons_logos/mern_black_mode.svg";
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
          <a href="/" class="flex items-center">
            <img
              src={!darkMode ? dark_logo : light_logo}
              class="w-60"
              alt="Flowbite Logo"
            />
          </a>
          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div>
              <GsapToggle />
            </div>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            class="items-center justify-between hidden w-full font-heading md:flex md:w-auto md:order-1"
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
