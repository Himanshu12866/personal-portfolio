import React, { useContext, useState, useEffect } from "react";
// import fallback from "../../assets/images/home_banner_fallback.png";
// import home_video from "../../assets/video/home_banner.mp4";
import main_pic from "../../assets/images/home_pic-01.png";
import { AppContext } from "../../context/datacontext";
import { motion, AnimatePresence } from "framer-motion";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import BlurText from "../BlurText";
const roles = [
  "Web Developer",
  "MERN Stack Developer",
  "UI Full Stack Developer",
  "Frontend Developer",
];
const HomeBanner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000); // har 3 sec baad change hoga
    return () => clearInterval(interval);
  }, []);

  const { darkMode } = useContext(AppContext);

  return (
    <div className="w-full relative flex justify-center items-center lg:h-screen pt-28 pb-16 overflow-hidden top-0">
      <div className="grid lg:grid-cols-2 grid-cols-1 xl:gap-12 gap-6 xl:w-4/5 w-11/12 px-4 z-[4]">
        <div className="flex flex-col justify-center items-center lg:items-start lg:order-1 order-2 lg:ps-0 xl:ps-8 ps-0 ">
          <p data-aos="fade-up"
            className={`sm:w-80 w-72 py-1 px-2 sm:ms-4 text-left text-lg sm:text-xl font-para ${!darkMode
                ? "bg-[rgba(245,245,245,0.9)] rounded-xl shadow-[rgba(61,61,61,0.72)_0px_0.602187px_1.08394px_-1.25px,rgba(61,61,61,0.64)_0px_2.28853px_4.11936px_-2.5px,rgba(61,61,61,0.25)_0px_10px_18px_-3.75px,rgba(0,0,0,0.35)_0px_0.706592px_0.706592px_-0.583333px,rgba(0,0,0,0.34)_0px_1.80656px_1.80656px_-1.16667px,rgba(0,0,0,0.33)_0px_3.62176px_3.62176px_-1.75px,rgba(0,0,0,0.3)_0px_6.8656px_6.8656px_-2.33333px,rgba(0,0,0,0.26)_0px_13.6468px_13.6468px_-2.91667px,rgba(0,0,0,0.15)_0px_30px_30px_-3.5px] "
                : "bg-[#00000052] rounded-xl shadow-[0_0_8px_rgba(0,255,255,0.6)]"
              } `}
          >
            {" "}
            👋 Hii, Welcome to My Portfolio
          </p>

          {/* Quote / Tagline */}

          <p className="mt-2 text-lg md:text-4xl flex justify-center items-center ps-2 font-heading   ">
            <BlurText
              delay={100}
              text="You don’t just need code,you  need solutions."
              animateBy="words"
              direction="bottom"
              className="mt-6 text-lg md:text-4xl flex justify-center lg:justify-start items-center lg:items-start font-heading"
            >

            </BlurText>
          </p>
          <h1 className="xl:text-5xl text-4xl lg:text-3xl xl:ps-4 ps-0 animate-shine md:pt-2 py-2">
            <BlurText
              text="HIMANSHU MISHRA"
              delay={100}
              animateBy="letters"
              direction="bottom"
              className="my-4 text-[8vw] xl:text-5xl lg:text-4xl md:text-5xl font-heading  "
            >

            </BlurText>
          </h1>
          <div className="text-3xl  font-heading md:ps-4 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={roles[index]}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="text-2xl font-bold"
              >
                {roles[index]}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex flex-row gap-4  md:ps-4 mt-4">
            <div data-aos="fade-up" data-aos-delay="100" className=" flex justify-center items-center">
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
                  My Resume <ArrowDownwardIcon />
                </a>
              </button>
            </div>
            <div data-aos="fade-up" data-aos-delay="200" className=" flex justify-center items-center">
              <button
                className={`bg-[#f5f5f5]  ${darkMode
                    ? "text-black rounded-xl shadow-[0_0_8px_rgba(0,255,255,0.6)]"
                    : " shadow-[0_0_8px_rgba(0,255,255,0.6)]"
                  } rounded-[10px] font-para font-medium sm:px-8 px-4 py-3 opacity-100 hover:opacity-60 transition-all hover:duration-200 shadow-[rgba(158,158,158,0.69)_0px_0.706592px_0.706592px_-0.583333px,rgba(158,158,158,0.68)_0px_1.80656px_1.80656px_-1.16667px,rgba(158,158,158,0.65)_0px_3.62176px_3.62176px_-1.75px,rgba(158,158,158,0.61)_0px_6.8656px_6.8656px_-2.33333px,rgba(158,158,158,0.52)_0px_13.6468px_13.6468px_-2.91667px,rgba(158,158,158,0.3)_0px_30px_30px_-3.5px,rgba(255,255,255,1)_0px_3px_1px_0px_inset]`}
              >
                <a href="/">
                  Contact Me <ArrowOutwardIcon />
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="flex lg:justify-end justify-center lg:order-2 order-1 w-full">
          <img
            src={main_pic}
            alt="personal photo_"
            className={`${!darkMode
                ? "bg-[rgba(245,245,245,0.9)]  shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
                : "bg-transparent  shadow-[0_0_8px_rgba(0,255,255,0.6)]"
              } w-80 xl:w-[500px] 2xl:w-auto backdrop-blur-sm rounded-full`}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
