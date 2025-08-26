import React, { useContext, useState } from "react";
import dark_logo from "../assets/icons_logos/mern_light_mode.png";
import light_logo from "../assets/icons_logos/mern_black_mode-01.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import { AppContext } from "../context/datacontext";
import { Link } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const Footer = () => {
  const { darkMode } = useContext(AppContext);

  const links = [
    { name: "home", link: "/" },
    { name: "about", link: "/about" },
    { name: "projects", link: "/projcts" },
    { name: "skills", link: "/skills" },
    { name: "contact", link: "/contact" },
  ];
  const cardStyle = {
    backdropFilter: "blur(5px)",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    opacity: 1,
  };

  return (
    <>
      <div
        className={`flex justify-center w-full  px-6 pt-12  ${
          !darkMode
            ? "bg-[rgba(222,222,222,0.9)]"
            : "bg-[rgba(69,69,69,1)] inset-0"
        }`}
      >
        <div
          style={cardStyle}
          className={`${
            !darkMode ? "bg-[#f5f5f52d]" : "bg-[#f5f5f533]"
          }   shadow-[2px_4px_30px_rgba(0,0,0,0.1)] w-full  backdrop-blur-[5px] `}
        >
          <div className="w-full grid xl:grid-cols-4  sm:grid-cols-2 md:gap-12 gap-2 xl:gap-0 justify-between 2xl:p-12 md:p-10 p-[40px_30px]">
            <div className=" flex flex-col gap-2 lg:ps-12">
              <a href="/" className=" w-48">
                <img
                  src={!darkMode ? dark_logo : light_logo}
                  className=""
                  alt="Flowbite Logo"
                />
              </a>
              <h3 className="text-xl  font-medium font-heading pt-4 pb-2">
                Himanshu Kumar Mishra
              </h3>
              <p className="text-xl font-para font-medium pe-8">
                Passionate about building clean and modern UIs & Web Apps
              </p>
              <p className="text-xl font-para font-medium pe-8">
                <a
                  href="mailto:manshu010m@gmail.com"
                  className="underline hover:text-[#ff7700] transition-all hover:duration-200"
                >
                  manshu010m@gmail.com
                </a>
              </p>
              <p className="text-xl font-para font-medium pe-8">
                <a
                  href="tel:+917804825835"
                  className="underline hover:text-[#ff7700] transition-all hover:duration-200"
                >
                  +91 78048 25835
                </a>
              </p>
            </div>
            <div className="md:ps-12 ps-0">
              <h3 className="text-2xl pt-2">Experties</h3>
              <ul className="flex flex-col font-medium p-4 md:p-0 capitalize md:mt-8 font-heading text-xl ">
                <li className="my-1">Frontend Developer</li>
                <li className="my-1">React JS Developer</li>
                <li className="my-1">UI Full Stack Developer</li>
                <li className="my-1">MERN Stack Developer</li>
              </ul>
            </div>
            <div className="  lg:ps-12 ps-0">
              <h3 className="text-2xl pt-2">Links</h3>
              <ul className="flex flex-col font-medium p-4 md:p-0 capitalize md:mt-8 font-heading text-xl ">
                {links.map((item, index) => (
                  <Link className="my-1" key={index} to={item.link}>
                    {item.name}
                  </Link>
                ))}
              </ul>
            </div>
            <div className="xl:ps-0 md:ps-12 ps-0">
              <h3 className="text-2xl pt-2">Social</h3>
              <ul className="flex flex-col font-medium p-4 md:p-0 capitalize md:mt-8 font-heading text-xl  ">
                <li className="my-1">
                  <a
                    className="flex flex-row gap-4 items-center hover:text-[#ff7700] transition-all hover:duration-200"
                    href="https://github.com/himanshu12866"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <GitHubIcon className="text-[#ff7700]" />{" "}
                    <span>Github</span>
                  </a>
                </li>{" "}
                <li className="my-2">
                  <a
                    className="flex flex-row gap-4 items-center hover:text-[#ff7700] transition-all hover:duration-200"
                    href="https://linkedin.com/in/himanshumishra17/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <LinkedInIcon className="text-[#ff7700]" />{" "}
                    <span>LinkedIn</span>
                  </a>
                </li>{" "}
                <li className="my-2">
                  <a
                    className="flex flex-row gap-4 items-center hover:text-[#ff7700] transition-all hover:duration-200"
                    href="https://twitter.com/hema_nshu"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <XIcon className="text-[#ff7700]" />{" "}
                    <span>Twitter (X)</span>
                  </a>
                </li>{" "}
              </ul>
              <form className="mt-4">
                <label className="text-xl font-heading  font-medium pe-8">
                  Let's connect!
                </label>
                <div className="flex lg:flex-row flex-col  lg:items-center lg:gap-4">
                  <input
                    type="email"
                    placeholder="Your Email *"
                    className={`bg-transparent py-3 mt-4 outline-none px-4 2xl:w-3/5 w-full rounded-[10px] 

${
  darkMode
    ? "placeholder:text-white shadow-[0px_0.7066px_0.7066px_-0.6666px_rgba(0,0,0,0.08),0px_1.8065px_1.8065px_-1.3333px_rgba(0,0,0,0.08),0px_3.6217px_3.6217px_-2px_rgba(0,0,0,0.07),0px_6.8656px_6.8656px_-2.6666px_rgba(0,0,0,0.07),0px_13.6467px_13.6467px_-3.3333px_rgba(0,0,0,0.05),0px_30px_30px_-4px_rgba(0,0,0,0.02),inset_0px_3px_0px_0px_rgba(0,0,0,0.02)]"
    : "shadow-[0px_0.7066px_0.7066px_-0.6666px_rgba(0,0,0,0.08),0px_1.8065px_1.8065px_-1.3333px_rgba(0,0,0,0.08),0px_3.6217px_3.6217px_-2px_rgba(0,0,0,0.07),0px_6.8656px_6.8656px_-2.6666px_rgba(0,0,0,0.07),0px_13.6467px_13.6467px_-3.3333px_rgba(0,0,0,0.05),0px_30px_30px_-4px_rgba(0,0,0,0.02),inset_0px_3px_1px_0px_rgb(255,255,255)]"
}

                  `}
                  />
                  <div className=" flex justify-start pt-4 items-center">
                    <button className="bg-black font-para  text-white  px-4 py-3 font-medium rounded-[10px] opacity-100 hover:opacity-60 transition-all hover:duration-200 shadow-[rgba(61,61,61,0.72)_0px_0.602187px_1.08394px_-1.25px,rgba(61,61,61,0.64)_0px_2.28853px_4.11936px_-2.5px,rgba(61,61,61,0.25)_0px_10px_18px_-3.75px,rgba(0,0,0,0.35)_0px_0.706592px_0.706592px_-0.583333px,rgba(0,0,0,0.34)_0px_1.80656px_1.80656px_-1.16667px,rgba(0,0,0,0.33)_0px_3.62176px_3.62176px_-1.75px,rgba(0,0,0,0.3)_0px_6.8656px_6.8656px_-2.33333px,rgba(0,0,0,0.26)_0px_13.6468px_13.6468px_-2.91667px,rgba(0,0,0,0.15)_0px_30px_30px_-3.5px]">
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
