import React, { useContext } from "react";
import { AppContext } from "../../context/datacontext";
import about_pic from "../../assets/images/about_pic.png";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import VerifiedIcon from "@mui/icons-material/Verified";
const AboutMe = () => {
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
      className={`flex justify-center flex-col gap-24 items-center w-full py-20   shadow-[inset_0_3px_1px_rgba(255,255,255,0.4),inset_0_0px_0px_rgba(255,255,255,0.4)]   ${
        !darkMode
          ? "bg-[rgba(222,222,222,0.9)]"
          : "bg-[rgba(69,69,69,1)] inset-0"
      }`}
    >
      <div
        className="xl:w-4/5 3xl:w-3/5 w-full flex lg:flex-row flex-col gap-4 p-4
  "
      >
        <div
          className={`lg:w-5/12 flex flex-col gap-4 z-[3] w-full    
 `}
        >
          <div
            className={` z-[3] flex rounded-[10px] p-2 backdrop-blur-sm ${
              !darkMode
                ? "bg-[rgba(245,245,245,0.9)] "
                : "bg-[#f5f5f552] inset-0"
            } 
  opacity-100
  shadow-[0px_0.706592px_0.706592px_-0.666667px_rgba(0,0,0,0.08),
          0px_1.80656px_1.80656px_-1.33333px_rgba(0,0,0,0.08),
          0px_3.62176px_3.62176px_-2px_rgba(0,0,0,0.07),
          0px_6.8656px_6.8656px_-2.66667px_rgba(0,0,0,0.07),
          0px_13.6468px_13.6468px_-3.33333px_rgba(0,0,0,0.05),
          0px_30px_30px_-4px_rgba(0,0,0,0.02),
          inset_0px_3px_1px_0px_rgb(255,255,255)]`}
          >
            <img src={about_pic} alt="about page illustration" />
          </div>
          <div
            className={` z-[3] flex justify-center gap-4 items-center rounded-[10px] px-2 py-3 backdrop-blur-sm ${
              !darkMode
                ? "bg-[rgba(245,245,245,0.9)] "
                : "bg-[#f5f5f552] inset-0"
            } 
  opacity-100
  shadow-[0px_0.706592px_0.706592px_-0.666667px_rgba(0,0,0,0.08),
          0px_1.80656px_1.80656px_-1.33333px_rgba(0,0,0,0.08),
          0px_3.62176px_3.62176px_-2px_rgba(0,0,0,0.07),
          0px_6.8656px_6.8656px_-2.66667px_rgba(0,0,0,0.07),
          0px_13.6468px_13.6468px_-3.33333px_rgba(0,0,0,0.05),
          0px_30px_30px_-4px_rgba(0,0,0,0.02),
          inset_0px_3px_1px_0px_rgb(255,255,255)]`}
          >
            <div className=" flex justify-center items-center">
              <button className="bg-black font-para  sm:w-48 w-full text-white sm:px-8 px-4 py-3 font-medium rounded-[10px] opacity-100 hover:opacity-60 transition-all hover:duration-200 shadow-[rgba(61,61,61,0.72)_0px_0.602187px_1.08394px_-1.25px,rgba(61,61,61,0.64)_0px_2.28853px_4.11936px_-2.5px,rgba(61,61,61,0.25)_0px_10px_18px_-3.75px,rgba(0,0,0,0.35)_0px_0.706592px_0.706592px_-0.583333px,rgba(0,0,0,0.34)_0px_1.80656px_1.80656px_-1.16667px,rgba(0,0,0,0.33)_0px_3.62176px_3.62176px_-1.75px,rgba(0,0,0,0.3)_0px_6.8656px_6.8656px_-2.33333px,rgba(0,0,0,0.26)_0px_13.6468px_13.6468px_-2.91667px,rgba(0,0,0,0.15)_0px_30px_30px_-3.5px]">
                <a
                  href="./HimanshuResume.pdf"
                  target="_blank"
                  download="HimanshuResume.pdf"
                >
                  My Resume <ArrowDownwardIcon />
                </a>
              </button>
            </div>
            <div className=" flex justify-center items-center">
              <button
                className={`bg-[#f5f5f5] ${
                  darkMode ? "text-black" : ""
                } rounded-[10px] font-para  sm:w-48 w-full font-medium sm:px-8 px-4 py-3 opacity-100 hover:opacity-60 transition-all hover:duration-200 shadow-[rgba(158,158,158,0.69)_0px_0.706592px_0.706592px_-0.583333px,rgba(158,158,158,0.68)_0px_1.80656px_1.80656px_-1.16667px,rgba(158,158,158,0.65)_0px_3.62176px_3.62176px_-1.75px,rgba(158,158,158,0.61)_0px_6.8656px_6.8656px_-2.33333px,rgba(158,158,158,0.52)_0px_13.6468px_13.6468px_-2.91667px,rgba(158,158,158,0.3)_0px_30px_30px_-3.5px,rgba(255,255,255,1)_0px_3px_1px_0px_inset]`}
              >
                <a href="/">
                  Contact Me <ArrowOutwardIcon />
                </a>
              </button>
            </div>
          </div>
        </div>

        <div
          className={`lg:w-7/12  w-full flex flex-col z-[3] gap-5 p-4 px-8 rounded-[20px] backdrop-blur-sm ${
            !darkMode ? "bg-[rgba(245,245,245,0.9)] " : "bg-[#f5f5f552] inset-0"
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
          {/* Brief About my self */}
          <p
            style={cardStyle}
            className=" w-32 pt-2 px-2 sm:ms-4 text-center text-lg sm:text-xl font-heading"
          >
            {" "}
            About Me
          </p>
          <p className="text-xl text-justify font-para pt-2 pb-1 px-2">
            "Frontend Developer with 1+ year of experience building responsive,
            high-performance web apps."
          </p>
          <p className="text-xl text-justify font-para py-2 px-2">
            I’m Himanshu, a frontend developer with hands-on experience in React
            JS and modern web technologies. I specialize in creating scalable,
            user-friendly interfaces and love building digital products that
            solve real problems.With 1+ year of professional experience, I
            thrive in dynamic environments and enjoy collaborating with teams to
            bring ideas to life.
          </p>

          {/* My Hobbies  */}
          <p
            style={cardStyle}
            className=" w-32 pt-2 px-2 sm:ms-4 text-center text-lg sm:text-xl font-heading"
          >
            {" "}
            Hobbies
          </p>
          <ul className="text-xl text-justify font-para pt-2 pb-1 px-2">
            <li className="flex flex-row gap-2 justify-start ism:items-center items-start mt-2">
              <VerifiedIcon className="text-[#ff7700]" /> Reading books –
              especially tech & self-growth related.
            </li>
            <li className="flex flex-row gap-2 justify-start ism:items-center items-start mt-2">
              <VerifiedIcon className="text-[#ff7700]" />
              Listening to music & exploring new genres.
            </li>
            <li className="flex flex-row gap-2 justify-start ism:items-center items-start mt-2">
              <VerifiedIcon className="text-[#ff7700]" />
              Staying updated on global trends & innovations.
            </li>
            <li className="flex flex-row gap-2 justify-start ism:items-center items-start mt-2">
              <VerifiedIcon className="text-[#ff7700]" /> Engaging in political
              talks & discussions to explore diverse perspectives.
            </li>
          </ul>

          {/* My Strengths */}
          <p
            style={cardStyle}
            className=" w-32 pt-2 px-2 sm:ms-4 text-center text-lg sm:text-xl font-heading"
          >
            {" "}
            Strengths
          </p>
          <ul className="text-xl text-left font-para pt-2 pb-1 px-2">
            <li className="flex flex-row gap-2 justify-start ism:items-center items-start mt-2">
              <VerifiedIcon className="text-[#ff7700]" />
              Quick learner & adaptive.
            </li>
            <li className="flex flex-row gap-2 justify-start ism:items-center items-start mt-2">
              <VerifiedIcon className="text-[#ff7700]" />
              Problem-solving mindset.
            </li>
            <li className="flex flex-row gap-2 justify-start ism:items-center items-start mt-2">
              <VerifiedIcon className="text-[#ff7700]" />
              Detail-oriented UI design approach.
            </li>
            <li className="flex flex-row gap-2 justify-start ism:items-center items-start mt-2">
              <VerifiedIcon className="text-[#ff7700]" />
              Strong foundation in React & JavaScript.
            </li>
          </ul>

          {/* Tech Stack */}

        </div>
      </div>
    </div>
  );
};

export default AboutMe;

//https://www.instagram.com/novatalesmedia/ https://www.facebook.com/novatalesdigital https://www.linkedin.com/company/novatales/ https://www.youtube.com/@NovaTalesMedia
