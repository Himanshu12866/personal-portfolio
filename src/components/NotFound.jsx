import React, { useContext } from "react";
import "./animation.css";
import { AppContext } from "../context/datacontext";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
const NotFound = () => {
  const { darkMode } = useContext(AppContext);
  return (
    <div className="flex justify-center items-end h-screen overflow-hidden">
      <div>
        <div className="box-of-star1 overflow-hidden pointer-events-none">
          <div className="star star-position1"></div>
          <div className="star star-position2"></div>
          <div className="star star-position3"></div>
          <div className="star star-position4"></div>
          <div className="star star-position5"></div>
          <div className="star star-position6"></div>
          <div className="star star-position7"></div>
        </div>
        <div className="box-of-star2 overflow-hidden pointer-events-none">
          <div className="star star-position1"></div>
          <div className="star star-position2"></div>
          <div className="star star-position3"></div>
          <div className="star star-position4"></div>
          <div className="star star-position5"></div>
          <div className="star star-position6"></div>
          <div className="star star-position7"></div>
        </div>
        <div className="box-of-star3 overflow-hidden pointer-events-none">
          <div className="star star-position1"></div>
          <div className="star star-position2"></div>
          <div className="star star-position3"></div>
          <div className="star star-position4"></div>
          <div className="star star-position5"></div>
          <div className="star star-position6"></div>
          <div className="star star-position7"></div>
        </div>
        <div className="box-of-star4 overflow-hidden pointer-events-none">
          <div className="star star-position1"></div>
          <div className="star star-position2"></div>
          <div className="star star-position3"></div>
          <div className="star star-position4"></div>
          <div className="star star-position5"></div>
          <div className="star star-position6"></div>
          <div className="star star-position7"></div>
        </div>
        <div data-js="astro" className="astronaut">
          <div className="head"></div>
          <div className="arm arm-left"></div>
          <div className="arm arm-right"></div>
          <div className="body">
            <div className="panel"></div>
          </div>
          <div className="leg leg-left"></div>
          <div className="leg leg-right"></div>
          <div className="schoolbag"></div>
        </div>
      </div>
      <div className="mb-16">
        <h1 className="text-8xl text-center font-bold">4 0 4</h1>
        <p className="md:text-5xl text-3xl px-8 text-center mt-8">
          Oops! Looks like this page took a coffee break.
        </p>
        <div className="flex justify-center px-2 pt-8 items-center">
          <button
            className={`bg-black font-para z-10 text-white sm:px-8 px-4 py-3 font-medium rounded-[10px] opacity-100 hover:opacity-60 transition-all hover:duration-200 ${
              !darkMode
                ? "shadow-[rgba(61,61,61,0.72)_0px_0.602187px_1.08394px_-1.25px,rgba(61,61,61,0.64)_0px_2.28853px_4.11936px_-2.5px,rgba(61,61,61,0.25)_0px_10px_18px_-3.75px,rgba(0,0,0,0.35)_0px_0.706592px_0.706592px_-0.583333px,rgba(0,0,0,0.34)_0px_1.80656px_1.80656px_-1.16667px,rgba(0,0,0,0.33)_0px_3.62176px_3.62176px_-1.75px,rgba(0,0,0,0.3)_0px_6.8656px_6.8656px_-2.33333px,rgba(0,0,0,0.26)_0px_13.6468px_13.6468px_-2.91667px,rgba(0,0,0,0.15)_0px_30px_30px_-3.5px]"
                : "shadow-[0_0_8px_rgba(0,255,255,0.6)]"
            }`}
          >
            <a href="/">
             Go to Home Page <ArrowOutwardIcon />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
