import React, { useContext } from "react";
import { AppContext } from "../../context/datacontext";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
const ContactForm = () => {
  const { darkMode } = useContext(AppContext);
  return (
    <div className="flex justify-center items-center">
      <div className="xl:w-3/4 lg:4/5 w-11/12 grid lg:grid-cols-2 gap-4 grid-cols-1">
        <div className="flex flex-col items-center justify-center gap-4 ">
          <div className="grid grid-cols-2 gap-4">
            <div
              className={` w-full flex flex-col gap-3 z-[3] p-4 md:px-8 px-6 rounded-[20px] backdrop-blur-sm ${
                !darkMode
                  ? "bg-[rgba(245,245,245,0.9)] rounded-xl shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
                  : "bg-[#00000052] rounded-xl shadow-[0_0_8px_rgba(0,255,255,0.6)]"
              } `}
            >
              <button
                className={`bg-black flex justify-center
             items-center font-para w-16 p-2 text-4xl 
              text-white  font-medium rounded-[10px] 
              opacity-100 hover:opacity-60 transition-all leading-3
               hover:duration-200 
               
               ${
                 !darkMode
                   ? "bg-[rgba(245,245,245,0.9)] rounded-xl shadow-[rgba(61,61,61,0.72)_0px_0.602187px_1.08394px_-1.25px,rgba(61,61,61,0.64)_0px_2.28853px_4.11936px_-2.5px,rgba(61,61,61,0.25)_0px_10px_18px_-3.75px,rgba(0,0,0,0.35)_0px_0.706592px_0.706592px_-0.583333px,rgba(0,0,0,0.34)_0px_1.80656px_1.80656px_-1.16667px,rgba(0,0,0,0.33)_0px_3.62176px_3.62176px_-1.75px,rgba(0,0,0,0.3)_0px_6.8656px_6.8656px_-2.33333px,rgba(0,0,0,0.26)_0px_13.6468px_13.6468px_-2.91667px,rgba(0,0,0,0.15)_0px_30px_30px_-3.5px] "
                   : "bg-[#00000052] rounded-xl shadow-[0_0_8px_rgba(0,255,255,0.6)]"
               } 
               
               `}
              >
                <EmailIcon fontSize="40px" />
              </button>
              <p className="text-xl text-justify font-para pt-2 pb-1 px-2 font-normal">
                Feel free to email me if you have any questions or need more
                details!
              </p>
              <a
                href="mailto:manshu010m@gmail.com"
                className="text-lg text-justify underline underline-offset-1 font-para pb-1 px-2 font-medium"
              >
                manshu010m@gmail.com
              </a>
            </div>
            <div
              className={` w-full flex flex-col gap-3 p-4 z-[3] md:px-8 px-6 rounded-[20px] backdrop-blur-sm ${
                !darkMode
                  ? "bg-[rgba(245,245,245,0.9)] rounded-xl shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
                  : "bg-[#00000052] rounded-xl shadow-[0_0_8px_rgba(0,255,255,0.6)]"
              } `}
            >
              <button
                className={`bg-black flex justify-center
             items-center font-para w-16 p-2 text-4xl 
              text-white  font-medium rounded-[10px] 
              opacity-100 hover:opacity-60 transition-all leading-3
               hover:duration-200 
               
               ${
                 !darkMode
                   ? "bg-[rgba(245,245,245,0.9)] rounded-xl shadow-[rgba(61,61,61,0.72)_0px_0.602187px_1.08394px_-1.25px,rgba(61,61,61,0.64)_0px_2.28853px_4.11936px_-2.5px,rgba(61,61,61,0.25)_0px_10px_18px_-3.75px,rgba(0,0,0,0.35)_0px_0.706592px_0.706592px_-0.583333px,rgba(0,0,0,0.34)_0px_1.80656px_1.80656px_-1.16667px,rgba(0,0,0,0.33)_0px_3.62176px_3.62176px_-1.75px,rgba(0,0,0,0.3)_0px_6.8656px_6.8656px_-2.33333px,rgba(0,0,0,0.26)_0px_13.6468px_13.6468px_-2.91667px,rgba(0,0,0,0.15)_0px_30px_30px_-3.5px] "
                   : "bg-[#00000052] rounded-xl shadow-[0_0_8px_rgba(0,255,255,0.6)]"
               } 
               
               `}
              >
                <LocalPhoneIcon fontSize="40px" />
              </button>
              <p className="text-xl text-left font-para pt-2 pb-1 px-2 font-normal">
                Feel free to call me anytime according to your convenience
              </p>
              <a
                href="tel:+917804825835"
                className="text-lg text-justify underline underline-offset-1 font-para pb-1 px-2 font-medium"
              >
                +91 78048 25835
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div
              className={` w-full flex flex-col gap-3 z-[3]  p-4 md:px-8 px-6 rounded-[20px] backdrop-blur-sm ${
                !darkMode
                  ? "bg-[rgba(245,245,245,0.9)] rounded-xl shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
                  : "bg-[#00000052] rounded-xl shadow-[0_0_8px_rgba(0,255,255,0.6)]"
              } `}
            >
              <button
                className={`bg-black flex justify-center
             items-center font-para w-16 p-2 text-4xl 
              text-white  font-medium rounded-[10px] 
              opacity-100 hover:opacity-60 transition-all leading-3
               hover:duration-200 
               
               ${
                 !darkMode
                   ? "bg-[rgba(245,245,245,0.9)] rounded-xl shadow-[rgba(61,61,61,0.72)_0px_0.602187px_1.08394px_-1.25px,rgba(61,61,61,0.64)_0px_2.28853px_4.11936px_-2.5px,rgba(61,61,61,0.25)_0px_10px_18px_-3.75px,rgba(0,0,0,0.35)_0px_0.706592px_0.706592px_-0.583333px,rgba(0,0,0,0.34)_0px_1.80656px_1.80656px_-1.16667px,rgba(0,0,0,0.33)_0px_3.62176px_3.62176px_-1.75px,rgba(0,0,0,0.3)_0px_6.8656px_6.8656px_-2.33333px,rgba(0,0,0,0.26)_0px_13.6468px_13.6468px_-2.91667px,rgba(0,0,0,0.15)_0px_30px_30px_-3.5px] "
                   : "bg-[#00000052] rounded-xl shadow-[0_0_8px_rgba(0,255,255,0.6)]"
               } 
               
               `}
              >
                <EmailIcon fontSize="40px" />
              </button>
              <p className="text-xl text-justify font-para pt-2 pb-1 px-2 font-normal">
                Feel free to email me if you have any questions or need more
                details!
              </p>
              <a
                href="mailto:manshu010m@gmail.com"
                className="text-lg text-justify underline underline-offset-1 font-para pb-1 px-2 font-medium"
              >
                manshu010m@gmail.com
              </a>
            </div>
            <div
              className={` w-full flex flex-col gap-3 p-4 z-[3] md:px-8 px-6 rounded-[20px] backdrop-blur-sm ${
                !darkMode
                  ? "bg-[rgba(245,245,245,0.9)] rounded-xl shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
                  : "bg-[#00000052] rounded-xl shadow-[0_0_8px_rgba(0,255,255,0.6)]"
              } `}
            >
              <button
                className={`bg-black flex justify-center
             items-center font-para w-16 p-2 text-4xl 
              text-white  font-medium rounded-[10px] 
              opacity-100 hover:opacity-60 transition-all leading-3
               hover:duration-200 
               
               ${
                 !darkMode
                   ? "bg-[rgba(245,245,245,0.9)] rounded-xl shadow-[rgba(61,61,61,0.72)_0px_0.602187px_1.08394px_-1.25px,rgba(61,61,61,0.64)_0px_2.28853px_4.11936px_-2.5px,rgba(61,61,61,0.25)_0px_10px_18px_-3.75px,rgba(0,0,0,0.35)_0px_0.706592px_0.706592px_-0.583333px,rgba(0,0,0,0.34)_0px_1.80656px_1.80656px_-1.16667px,rgba(0,0,0,0.33)_0px_3.62176px_3.62176px_-1.75px,rgba(0,0,0,0.3)_0px_6.8656px_6.8656px_-2.33333px,rgba(0,0,0,0.26)_0px_13.6468px_13.6468px_-2.91667px,rgba(0,0,0,0.15)_0px_30px_30px_-3.5px] "
                   : "bg-[#00000052] rounded-xl shadow-[0_0_8px_rgba(0,255,255,0.6)]"
               } 
               
               `}
              >
                <LocalPhoneIcon fontSize="40px" />
              </button>
              <p className="text-xl text-left font-para pt-2 pb-1 px-2 font-normal">
                Feel free to call me anytime according to your convenience
              </p>
              <a
                href="tel:+917804825835"
                className="text-lg text-justify underline underline-offset-1 font-para pb-1 px-2 font-medium"
              >
                +91 78048 25835
              </a>
            </div>
          </div>
          
        </div>
        <form
          className={` z-[2] p-4 backdrop-blur-sm ${
            !darkMode
              ? "bg-[rgba(245,245,245,0.9)] rounded-xl shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
              : "bg-[#00000052] rounded-xl shadow-[0_0_8px_rgba(0,255,255,0.6)]"
          } `}
        >
          {/* Name and Phone Number */}
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 pb-4">
            <div className="flex flex-col">
              <label className="text-lg text-left font-para flex justify-start items-center pt-2  px-2 font-normal">
                Name <span className="text-3xl">*</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className={`bg-transparent py-3 outline-none px-4 rounded-[10px] 

${
  !darkMode
    ? "bg-[rgba(245,245,245,0.9)] rounded-xl shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
    : "bg-[#00000052] rounded-xl shadow-[0_0_8px_rgba(0,255,255,0.6)]"
} 

                  `}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-lg text-left font-para flex justify-start items-center  px-2 font-normal">
                Email <span className="text-3xl">*</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className={`bg-transparent py-3 outline-none px-4 rounded-[10px] 

${
  !darkMode
    ? "bg-[rgba(245,245,245,0.9)] rounded-xl shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
    : "bg-[#00000052] rounded-xl shadow-[0_0_8px_rgba(0,255,255,0.6)]"
} 

                  `}
              />
            </div>
          </div>

          {/* Phone Number and Company/Organization */}
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div className="flex flex-col gap-2 mb-2">
              <label className="text-lg text-left font-para flex justify-start items-center pt-2 pb-1 px-2 font-normal">
                Phone <span className="text-3xl">*</span>
              </label>
              <input
                type="text"
                placeholder="Your Phone Number"
                className={`bg-transparent py-3 outline-none px-4 rounded-[10px] 
${
  !darkMode
    ? "bg-[rgba(245,245,245,0.9)] rounded-xl shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
    : "bg-[#00000052] rounded-xl shadow-[0_0_8px_rgba(0,255,255,0.6)]"
} 
                  `}
              />
            </div>
            <div className="flex flex-col gap-2 mb-2">
              <label className="text-lg text-left font-para flex justify-start items-center pt-2 pb-1 px-2 font-normal">
                Company/Organizaion{" "}
                <span className="text-3xl invisible">*</span>
              </label>
              <input
                type="email"
                placeholder="Your Company/Organization"
                className={`bg-transparent py-3 outline-none px-4  rounded-[10px] 

${
  !darkMode
    ? "bg-[rgba(245,245,245,0.9)] rounded-xl shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
    : "bg-[#00000052] rounded-xl shadow-[0_0_8px_rgba(0,255,255,0.6)]"
} 

                  `}
              />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-2 mb-2">
              <label className="text-lg text-left font-para flex justify-start items-center pt-2 pb-1 px-2 font-normal">
                Message <span className="text-3xl">*</span>
              </label>
              <textarea
                type="email"
                rows={4}
                cols={50}
                placeholder="Your Message"
                className={`bg-transparent py-3 outline-none px-4 rounded-[10px] 

${
  !darkMode
    ? "bg-[rgba(245,245,245,0.9)] rounded-xl shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
    : "bg-[#00000052] rounded-xl shadow-[0_0_8px_rgba(0,255,255,0.6)]"
} }

                  `}
              />
            </div>
          </div>
          <div className=" flex justify-start pt-8 items-center">
            <button
              className={`bg-black font-para  w-full text-white sm:px-8 px-4 py-3 font-medium rounded-[10px] opacity-100 hover:opacity-60 transition-all hover:duration-200 ${
                !darkMode
                  ? "  shadow-[rgba(61,61,61,0.72)_0px_0.602187px_1.08394px_-1.25px,rgba(61,61,61,0.64)_0px_2.28853px_4.11936px_-2.5px,rgba(61,61,61,0.25)_0px_10px_18px_-3.75px,rgba(0,0,0,0.35)_0px_0.706592px_0.706592px_-0.583333px,rgba(0,0,0,0.34)_0px_1.80656px_1.80656px_-1.16667px,rgba(0,0,0,0.33)_0px_3.62176px_3.62176px_-1.75px,rgba(0,0,0,0.3)_0px_6.8656px_6.8656px_-2.33333px,rgba(0,0,0,0.26)_0px_13.6468px_13.6468px_-2.91667px,rgba(0,0,0,0.15)_0px_30px_30px_-3.5px]"
                  : " shadow-[0_0_8px_rgba(0,255,255,0.6)]"
              }`}
            >
              <a href="/about">Send Message</a>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
