import React, { useContext } from "react";
import dark_logo from "../assets/icons_logos/mern_black_mode-01.png";
import light_logo from "../assets/icons_logos/mern_light_mode.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import { AppContext } from "../context/datacontext";
import { Link, useLocation } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
const Footer = () => {
  const { darkMode } = useContext(AppContext);

  const links = [
    { name: "home", link: "/" },
    { name: "about", link: "/about" },
    { name: "projects", link: "/projects" },
    { name: "skills", link: "/skills" },
    { name: "contact", link: "/contact" },
  ];
  const location = useLocation()
  const cardStyle = {
    backdropFilter: "blur(5px)",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    opacity: 1,
  };

  return (
    <>
      <footer className={`flex justify-start w-full items-center z-10 pt-12 ps-6 pe-1 overflow-hidden `}>
        <div style={cardStyle}
          className={`${
            !darkMode
              ? "bg-[rgba(245,245,245,0.9)]  shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
              : "bg-transparent  shadow-[0_0_8px_rgba(0,255,255,0.6)]"
          }  flex justify-center w-[98%] z-10 flex-col backdrop-blur-sm 2xl:ps-20 xl:ps-8 lg:ps-16 md:ps-8 overflow-hidden rounded-t-xl`}
        >
          <div className="w-full grid xl:grid-cols-4 sm:grid-cols-2 gap-10 xl:gap-0 2xl:p-12 md:p-10 p-6">
            {/* Left Logo + Info */}
            <div className="flex flex-col gap-4">
              <a href="/" className="w-48">
                <img
                  src={!darkMode ? dark_logo : light_logo}
                  alt="Logo"
                  className="w-full"
                />
              </a>
              <h3 className="text-xl font-medium font-heading">
                Himanshu Kumar Mishra
              </h3>
              <p className="text-lg font-para font-medium 2xl:pe-28 md:pe-20 pe-14">
                Passionate about building clean and modern UIs & Web Apps
              </p>

              <p className="text-lg font-para flex items-center gap-2 group">
                <EmailIcon className="group-hover:text-[#f59e0b] transition-all duration-200" />
                <a
                  href="mailto:manshu010m@gmail.com"
                  className="group-hover:text-[#f59e0b] transition-all duration-200"
                >
                  manshu010m@gmail.com
                </a>
              </p>

              <p className="text-lg font-para flex items-center gap-2 group">
                <PhoneIcon className="group-hover:text-[#f59e0b] transition-all duration-200" />
                <a
                  href="tel:+917804825835"
                  className="group-hover:text-[#f59e0b] transition-all duration-200"
                >
                  +91 78048 25835
                </a>
              </p>
            </div>
            {/* Links */}
            <div>
              <h3 className="text-2xl font-heading">Links</h3>
              <ul className="flex flex-col font-medium mt-6 font-heading capitalize text-lg space-y-2">
                {links.map((item, index) => (
                  <Link
                    key={index}
                    to={item.link}
                    className={`${location.pathname.includes(item.name) ? 'text-[#f59e0b]' : ""} hover:text-[#f59e0b] w-28  transition-all duration-200`}
                  >
                    {item.name}
                  </Link>
                ))}
              </ul>
            </div>
            {/* Expertise */}
            <div>
              <h3 className="text-2xl font-heading">Experties</h3>
              <ul className="flex flex-col font-medium mt-6 font-heading text-lg space-y-2">
                <li>Frontend Developer</li>
                <li>Web Developer</li>
                <li>React JS Developer</li>
                <li>UI Full Stack Developer</li>
                <li>MERN Stack Developer</li>
              </ul>
            </div>

            {/* Social + Connect */}
            <div>
              <h3 className="text-2xl font-heading">Social</h3>
              <ul className="flex flex-col font-medium mt-6 font-heading w-32 text-lg space-y-3">
                <li>
                  <a
                    href="https://github.com/himanshu12866"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-3 hover:text-[#f59e0b] transition-all duration-200"
                  >
                    <GitHubIcon className="text-[#f59e0b]" />{" "}
                    <span>Github</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/himanshumishra17/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-3 hover:text-[#f59e0b] transition-all duration-200"
                  >
                    <LinkedInIcon className="text-[#f59e0b]" />{" "}
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/hema_nshu"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-3 hover:text-[#f59e0b] transition-all duration-200"
                  >
                    <XIcon className="text-[#f59e0b]" />{" "}
                    <span>Twitter (X)</span>
                  </a>
                </li>
              </ul>

              {/* Connect Form */}
              <form className="mt-4">
                <label className="text-xl font-heading font-medium pe-8">
                  {" "}
                  My Resume{" "}
                </label>
                <div className=" flex justify-start mt-3 items-center">
              <button
                className={`bg-black font-para 
                   text-white sm:px-8 px-4 py-3 
                   font-medium rounded-xl opacity-100
                    hover:opacity-60 transition-all
                     hover:duration-200  
                     ${!darkMode
                    ? "  shadow-[rgba(61,61,61,0.72)_0px_0.602187px_1.08394px_-1.25px,rgba(61,61,61,0.64)_0px_2.28853px_4.11936px_-2.5px,rgba(61,61,61,0.25)_0px_10px_18px_-3.75px,rgba(0,0,0,0.35)_0px_0.706592px_0.706592px_-0.583333px,rgba(0,0,0,0.34)_0px_1.80656px_1.80656px_-1.16667px,rgba(0,0,0,0.33)_0px_3.62176px_3.62176px_-1.75px,rgba(0,0,0,0.3)_0px_6.8656px_6.8656px_-2.33333px,rgba(0,0,0,0.26)_0px_13.6468px_13.6468px_-2.91667px,rgba(0,0,0,0.15)_0px_30px_30px_-3.5px]"
                    : " shadow-[0_0_8px_rgba(0,255,255,0.6)]"
                  }`}
              >
                <a
                  href="./HimanshuResume.pdf"
                  target="_blank"
                  download="HimanshuResume.pdf"
                >
                 Download <ArrowDownwardIcon />
                </a>
              </button>
            </div>
              </form>
            </div>
          </div>
          <div>
            <hr className="border-t border-gray-300 mx-6" />
            <p className="text-center text-lg font-para m-6">
              © 2025 Himanshu | All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
