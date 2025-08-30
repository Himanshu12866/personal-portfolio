import React, { useContext } from "react";
import { AppContext } from "../../context/datacontext";
import VerifiedIcon from '@mui/icons-material/Verified';
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
const HomeProjects = () => {
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
  return (
    <div
      className={`flex justify-center flex-col gap-24 items-center w-full py-20  ${!darkMode
        ? "bg-[rgba(222,222,222,0.9)]"
        : "bg-[rgba(69,69,69,1)] inset-0"
        }`}
    >
      <h2 className="text-4xl font-bold">Things I’ve Built</h2>
      <div className="xl:w-4/5 3xl:w-3/5 w-full xl:p-0 p-4 grid xl:gap-8 gap-2 lg:grid-cols-2 grid-cols-1  ">
        <div
          className={` flex flex-col justify-between gap-5 p-4 px-8 z-[3] rounded-[20px] relative  pb-6 backdrop-blur-sm ${!darkMode ? "bg-[rgba(245,245,245,0.9)] " : "bg-[#f5f5f552] inset-0"
            } 
  opacity-100
  shadow-[0px_0.706592px_0.706592px_-0.666667px_rgba(0,0,0,0.08),
          0px_1.80656px_1.80656px_-1.33333px_rgba(0,0,0,0.08),
          0px_3.62176px_3.62176px_-2px_rgba(0,0,0,0.07),
          0px_6.8656px_6.8656px_-2.66667px_rgba(0,0,0,0.07),
          0px_13.6468px_13.6468px_-3.33333px_rgba(0,0,0,0.05),
          0px_30px_30px_-4px_rgba(0,0,0,0.02),
          inset_0px_3px_1px_0px_rgb(255,255,255)]`}
          style={cardStyle}
        >
          <div
            style={cardStyle}
            className=" w-52 pt-2 px-4  text-left text-lg sm:text-xl font-heading"
          >
            Company Project
          </div>
          <h2 className="text-3xl">Livvon Comforts</h2>
          <div className="flex flex-col gap-2 items-start">
            <h3 className="text-xl">Teck Stack:</h3><p className="text-lg font-para font-medium">ReactJS , NodeJS, Material UI,MongoDB, Tailwind CSS </p>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <h3 className="text-xl">Description:</h3>
            <p className="text-lg overflow-hidden font-para font-medium">A real-time e-commerce web app like Amazon with product management, cart, checkout, payment, and live inventory updates & Admin control. </p>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <h3 className="text-xl">My Contributions:</h3>
            <div className="text-lg overflow-hidden font-para font-medium pt-4 sm:px-4 px-0">
              <ul>
                <li className="flex flex-row gap-2 justify-start sm:items-center items-start">
                  <VerifiedIcon className="text-[#ff7700]" /> Developed product listing, cart, and checkout features.
                </li>
                <li className="flex flex-row gap-2 justify-start sm:items-center items-start mt-2">
                  <VerifiedIcon className="text-[#ff7700]" /> Implemented live inventory tracking with MongoDB.</li>
                <li className="flex flex-row gap-2 justify-start sm:items-center items-startr mt-2">
                  <VerifiedIcon className="text-[#ff7700]" /> Integrated Razorpay for payments.</li>
                <li className="flex flex-row gap-2 justify-start ism:items-center items-start mt-2">
                  <VerifiedIcon className="text-[#ff7700]" /> Built admin dashboard for CRUD operations.</li>
              </ul>
            </div>
          </div>
          <div className="flex w-full justify-center sm:flex-row flex-col gap-8 ">
            <div className=" flex justify-center items-center">
              <button className="bg-black font-para  sm:w-48 w-full text-white sm:px-8 px-4 py-3 font-medium rounded-[10px] opacity-100 hover:opacity-60 transition-all hover:duration-200 shadow-[rgba(61,61,61,0.72)_0px_0.602187px_1.08394px_-1.25px,rgba(61,61,61,0.64)_0px_2.28853px_4.11936px_-2.5px,rgba(61,61,61,0.25)_0px_10px_18px_-3.75px,rgba(0,0,0,0.35)_0px_0.706592px_0.706592px_-0.583333px,rgba(0,0,0,0.34)_0px_1.80656px_1.80656px_-1.16667px,rgba(0,0,0,0.33)_0px_3.62176px_3.62176px_-1.75px,rgba(0,0,0,0.3)_0px_6.8656px_6.8656px_-2.33333px,rgba(0,0,0,0.26)_0px_13.6468px_13.6468px_-2.91667px,rgba(0,0,0,0.15)_0px_30px_30px_-3.5px]">
                <a
                  href="./HimanshuResume.pdf"
                  target="_blank"
                  download="HimanshuResume.pdf"
                >
                  Case Study <ArrowDownwardIcon />
                </a>
              </button>
            </div>
            <div className=" flex justify-center items-center">
              <button
                className={`bg-[#f5f5f5] ${darkMode ? "text-black" : ""
                  } rounded-[10px] font-para  sm:w-48 w-full font-medium sm:px-8 px-4 py-3 opacity-100 hover:opacity-60 transition-all hover:duration-200 shadow-[rgba(158,158,158,0.69)_0px_0.706592px_0.706592px_-0.583333px,rgba(158,158,158,0.68)_0px_1.80656px_1.80656px_-1.16667px,rgba(158,158,158,0.65)_0px_3.62176px_3.62176px_-1.75px,rgba(158,158,158,0.61)_0px_6.8656px_6.8656px_-2.33333px,rgba(158,158,158,0.52)_0px_13.6468px_13.6468px_-2.91667px,rgba(158,158,158,0.3)_0px_30px_30px_-3.5px,rgba(255,255,255,1)_0px_3px_1px_0px_inset]`}
              >
                <a href="/">
                  View Live <ArrowOutwardIcon />
                </a>
              </button>
            </div>
          </div>
        </div>
        <div
          className={` flex flex-col gap-5 flex-between p-4 px-8 z-[3] rounded-[20px] pb-6 relative  backdrop-blur-sm ${!darkMode ? "bg-[rgba(245,245,245,0.9)] " : "bg-[#f5f5f552] inset-0"
            } 
  opacity-100
  shadow-[0px_0.706592px_0.706592px_-0.666667px_rgba(0,0,0,0.08),
          0px_1.80656px_1.80656px_-1.33333px_rgba(0,0,0,0.08),
          0px_3.62176px_3.62176px_-2px_rgba(0,0,0,0.07),
          0px_6.8656px_6.8656px_-2.66667px_rgba(0,0,0,0.07),
          0px_13.6468px_13.6468px_-3.33333px_rgba(0,0,0,0.05),
          0px_30px_30px_-4px_rgba(0,0,0,0.02),
          inset_0px_3px_1px_0px_rgb(255,255,255)]`}
          style={cardStyle}
        >
          <p
            style={cardStyle}
            className=" w-48 pt-2 px-2 sm:ms-4 text-center text-lg sm:text-xl font-heading"
          >
            {" "}
            Personal Project
          </p>
          <h2 className="text-3xl">Dr. Booking Web App</h2>
          <div className="flex flex-col gap-2 items-start">
            <h3 className="text-xl">Teck Stack:</h3><p className="text-lg font-para font-medium">React.js, Node.js, Express.js, MongoDB, Tilwind CSS , Material UI</p>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <h3 className="text-xl">Description:</h3>
            <p className="text-lg overflow-hidden font-para font-medium">A platform where patients can register, book appointments, make payments, and doctors/admin can manage appointments and profiles.</p>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <h3 className="text-xl">My Contributions:</h3>
            <div className="text-lg overflow-hidden font-para font-medium pt-4 sm:px-4 px-0">
              <ul>
                <li className="flex flex-row gap-2 justify-start sm:items-center items-start">
                  <VerifiedIcon className="text-[#ff7700]" /> Designed responsive UI with React & Tailwind CSS.</li>
                <li className="flex flex-row gap-2 justify-start sm:items-center items-start mt-2">
                  <VerifiedIcon className="text-[#ff7700]" /> Integrated JWT-based user, doctor & admin login.</li>
                <li className="flex flex-row gap-2 justify-start sm:items-center items-start mt-2">
                  <VerifiedIcon className="text-[#ff7700]" /> Integrated JWT-based user, doctor & admin login.</li>
                <li className="flex flex-row gap-2 justify-start sm:items-center items-start mt-2">
                  <VerifiedIcon className="text-[#ff7700]" /> Developed admin panel for managing doctors & users.</li>
              </ul>
            </div>
          </div>
          <div className="flex w-full justify-center sm:flex-row flex-col gap-8 ">
            <div className=" flex justify-center items-center">
              <button className="bg-black font-para sm:w-48 w-full text-white sm:px-8 px-4 py-3 font-medium rounded-[10px] opacity-100 hover:opacity-60 transition-all hover:duration-200 shadow-[rgba(61,61,61,0.72)_0px_0.602187px_1.08394px_-1.25px,rgba(61,61,61,0.64)_0px_2.28853px_4.11936px_-2.5px,rgba(61,61,61,0.25)_0px_10px_18px_-3.75px,rgba(0,0,0,0.35)_0px_0.706592px_0.706592px_-0.583333px,rgba(0,0,0,0.34)_0px_1.80656px_1.80656px_-1.16667px,rgba(0,0,0,0.33)_0px_3.62176px_3.62176px_-1.75px,rgba(0,0,0,0.3)_0px_6.8656px_6.8656px_-2.33333px,rgba(0,0,0,0.26)_0px_13.6468px_13.6468px_-2.91667px,rgba(0,0,0,0.15)_0px_30px_30px_-3.5px]">
                <a
                  href="./HimanshuResume.pdf"
                  target="_blank"
                  download="HimanshuResume.pdf"
                >
                  Case Study <ArrowDownwardIcon />
                </a>
              </button>
            </div>
            <div className=" flex justify-center items-center">
              <button
                className={`bg-[#f5f5f5] ${darkMode ? "text-black" : ""
                  } rounded-[10px] font-para sm:w-48 w-full font-medium sm:px-8 px-4 py-3 opacity-100 hover:opacity-60 transition-all hover:duration-200 shadow-[rgba(158,158,158,0.69)_0px_0.706592px_0.706592px_-0.583333px,rgba(158,158,158,0.68)_0px_1.80656px_1.80656px_-1.16667px,rgba(158,158,158,0.65)_0px_3.62176px_3.62176px_-1.75px,rgba(158,158,158,0.61)_0px_6.8656px_6.8656px_-2.33333px,rgba(158,158,158,0.52)_0px_13.6468px_13.6468px_-2.91667px,rgba(158,158,158,0.3)_0px_30px_30px_-3.5px,rgba(255,255,255,1)_0px_3px_1px_0px_inset]`}
              >
                <a href="/">
                  View Live <ArrowOutwardIcon />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-start px-2 items-center">
        <button className="bg-black font-para  text-white sm:px-8 px-4 py-3 font-medium rounded-[10px] opacity-100 hover:opacity-60 transition-all hover:duration-200 shadow-[rgba(61,61,61,0.72)_0px_0.602187px_1.08394px_-1.25px,rgba(61,61,61,0.64)_0px_2.28853px_4.11936px_-2.5px,rgba(61,61,61,0.25)_0px_10px_18px_-3.75px,rgba(0,0,0,0.35)_0px_0.706592px_0.706592px_-0.583333px,rgba(0,0,0,0.34)_0px_1.80656px_1.80656px_-1.16667px,rgba(0,0,0,0.33)_0px_3.62176px_3.62176px_-1.75px,rgba(0,0,0,0.3)_0px_6.8656px_6.8656px_-2.33333px,rgba(0,0,0,0.26)_0px_13.6468px_13.6468px_-2.91667px,rgba(0,0,0,0.15)_0px_30px_30px_-3.5px]">
          <a href="/about">
            More Projects <ArrowOutwardIcon />
          </a>
        </button>
      </div>
    </div>
  );
};

export default HomeProjects;

