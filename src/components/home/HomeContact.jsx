import React, { useContext } from "react";
import { AppContext } from "../../context/datacontext";
// import BusinessIcon from "@mui/icons-material/Business";
// import LaptopIcon from "@mui/icons-material/Laptop";
// import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const HomeContact = () => {
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
      className={`flex justify-center flex-col gap-24 items-center w-full py-20  ${
        !darkMode
          ? "bg-[rgba(222,222,222,0.9)]"
          : "bg-[rgba(69,69,69,1)] inset-0"
      }`}
    >
      <h2 className="text-4xl font-bold text-center">Open for Opportunities</h2>
      <div className="2xl:w-3/5  xl:w-4/5 w-full px-4 xl:px-0 flex lg:flex-row flex-col justify-center items-start gap-4 ">
        <div className="lg:w-2/5 w-full flex flex-col gap-4">
          <div
            className={` w-full flex flex-col gap-3 p-4 md:px-8 px-6 rounded-[20px] backdrop-blur-sm ${
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
            style={cardStyle}
          >
            <button
              className="bg-black flex justify-center
             items-center font-para w-16 p-2 text-4xl 
              text-white  font-medium rounded-[10px] 
              opacity-100 hover:opacity-60 transition-all leading-3
               hover:duration-200 
               shadow-[rgba(61,61,61,0.72)_0px_0.602187px_1.08394px_-1.25px,rgba(61,61,61,0.64)_0px_2.28853px_4.11936px_-2.5px,rgba(61,61,61,0.25)_0px_10px_18px_-3.75px,rgba(0,0,0,0.35)_0px_0.706592px_0.706592px_-0.583333px,rgba(0,0,0,0.34)_0px_1.80656px_1.80656px_-1.16667px,rgba(0,0,0,0.33)_0px_3.62176px_3.62176px_-1.75px,rgba(0,0,0,0.3)_0px_6.8656px_6.8656px_-2.33333px,rgba(0,0,0,0.26)_0px_13.6468px_13.6468px_-2.91667px,rgba(0,0,0,0.15)_0px_30px_30px_-3.5px]"
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
            className={` w-full flex flex-col gap-3 p-4 md:px-8 px-6 rounded-[20px] backdrop-blur-sm ${
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
            style={cardStyle}
          >
            <button
              className="bg-black flex justify-center
             items-center font-para w-16 p-2 text-4xl 
              text-white  font-medium rounded-[10px] 
              opacity-100 hover:opacity-60 transition-all leading-3
               hover:duration-200 
               shadow-[rgba(61,61,61,0.72)_0px_0.602187px_1.08394px_-1.25px,rgba(61,61,61,0.64)_0px_2.28853px_4.11936px_-2.5px,rgba(61,61,61,0.25)_0px_10px_18px_-3.75px,rgba(0,0,0,0.35)_0px_0.706592px_0.706592px_-0.583333px,rgba(0,0,0,0.34)_0px_1.80656px_1.80656px_-1.16667px,rgba(0,0,0,0.33)_0px_3.62176px_3.62176px_-1.75px,rgba(0,0,0,0.3)_0px_6.8656px_6.8656px_-2.33333px,rgba(0,0,0,0.26)_0px_13.6468px_13.6468px_-2.91667px,rgba(0,0,0,0.15)_0px_30px_30px_-3.5px]"
            >
              <LocalPhoneIcon fontSize="40px" />
            </button>
            <p className="text-xl text-justify font-para pt-2 pb-1 px-2 font-normal">
              Feel free to book a call if that’s more convenient and easier for
              you!
            </p>
            <a
              href="tel:+917804825835"
              className="text-lg text-justify underline underline-offset-1 font-para pb-1 px-2 font-medium"
            >
              +91 78048 25835
            </a>
          </div>
        </div>
        <div
          className={` lg:w-3/5 w-full flex flex-col gap-5 p-4 md:px-8 px-6 rounded-[20px] backdrop-blur-sm ${
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
          <form className="lg:px-3">
            {/* Name and Phone Number */}
            <div>
              <div className="flex flex-col mb-2">
                 <label className="text-lg text-left font-para flex justify-start items-center pt-2 pb-1 px-2 font-normal">
                 Name <span className="text-3xl">*</span>
                </label>
                <input
                  type="text" placeholder="Your Name"
                  className={`bg-transparent py-3 outline-none px-4 rounded-[10px] 

${
  darkMode
    ? "placeholder:text-white shadow-[0px_0.7066px_0.7066px_-0.6666px_rgba(0,0,0,0.08),0px_1.8065px_1.8065px_-1.3333px_rgba(0,0,0,0.08),0px_3.6217px_3.6217px_-2px_rgba(0,0,0,0.07),0px_6.8656px_6.8656px_-2.6666px_rgba(0,0,0,0.07),0px_13.6467px_13.6467px_-3.3333px_rgba(0,0,0,0.05),0px_30px_30px_-4px_rgba(0,0,0,0.02),inset_0px_3px_0px_0px_rgba(0,0,0,0.02)]"
    : "shadow-[0px_0.7066px_0.7066px_-0.6666px_rgba(0,0,0,0.08),0px_1.8065px_1.8065px_-1.3333px_rgba(0,0,0,0.08),0px_3.6217px_3.6217px_-2px_rgba(0,0,0,0.07),0px_6.8656px_6.8656px_-2.6666px_rgba(0,0,0,0.07),0px_13.6467px_13.6467px_-3.3333px_rgba(0,0,0,0.05),0px_30px_30px_-4px_rgba(0,0,0,0.02),inset_0px_3px_1px_0px_rgb(255,255,255)]"
}

                  `}
                />
              </div>
              <div className="flex flex-col gap-2 mb-2">
                <label className="text-lg text-left font-para flex justify-start items-center pt-2 pb-1 px-2 font-normal">
                  Email <span className="text-3xl">*</span>
                </label>
                <input
                  type="email" placeholder="Your Email"
                  className={`bg-transparent py-3 outline-none px-4 rounded-[10px] 

${
  darkMode
    ? "placeholder:text-white shadow-[0px_0.7066px_0.7066px_-0.6666px_rgba(0,0,0,0.08),0px_1.8065px_1.8065px_-1.3333px_rgba(0,0,0,0.08),0px_3.6217px_3.6217px_-2px_rgba(0,0,0,0.07),0px_6.8656px_6.8656px_-2.6666px_rgba(0,0,0,0.07),0px_13.6467px_13.6467px_-3.3333px_rgba(0,0,0,0.05),0px_30px_30px_-4px_rgba(0,0,0,0.02),inset_0px_3px_0px_0px_rgba(0,0,0,0.02)]"
    : "shadow-[0px_0.7066px_0.7066px_-0.6666px_rgba(0,0,0,0.08),0px_1.8065px_1.8065px_-1.3333px_rgba(0,0,0,0.08),0px_3.6217px_3.6217px_-2px_rgba(0,0,0,0.07),0px_6.8656px_6.8656px_-2.6666px_rgba(0,0,0,0.07),0px_13.6467px_13.6467px_-3.3333px_rgba(0,0,0,0.05),0px_30px_30px_-4px_rgba(0,0,0,0.02),inset_0px_3px_1px_0px_rgb(255,255,255)]"
}

                  `}
                />
              </div>
            </div>

            {/* Phone Number and Company/Organization */}
            <div>
              <div className="flex flex-col gap-2 mb-2">
                <label className="text-lg text-left font-para flex justify-start items-center pt-2 pb-1 px-2 font-normal">
                  Phone <span className="text-3xl">*</span>
                </label>
                <input
                  type="text" placeholder="Your Phone Number"
                  className={`bg-transparent py-3 outline-none px-4 rounded-[10px] 

${
  darkMode
    ? "placeholder:text-white shadow-[0px_0.7066px_0.7066px_-0.6666px_rgba(0,0,0,0.08),0px_1.8065px_1.8065px_-1.3333px_rgba(0,0,0,0.08),0px_3.6217px_3.6217px_-2px_rgba(0,0,0,0.07),0px_6.8656px_6.8656px_-2.6666px_rgba(0,0,0,0.07),0px_13.6467px_13.6467px_-3.3333px_rgba(0,0,0,0.05),0px_30px_30px_-4px_rgba(0,0,0,0.02),inset_0px_3px_0px_0px_rgba(0,0,0,0.02)]"
    : "shadow-[0px_0.7066px_0.7066px_-0.6666px_rgba(0,0,0,0.08),0px_1.8065px_1.8065px_-1.3333px_rgba(0,0,0,0.08),0px_3.6217px_3.6217px_-2px_rgba(0,0,0,0.07),0px_6.8656px_6.8656px_-2.6666px_rgba(0,0,0,0.07),0px_13.6467px_13.6467px_-3.3333px_rgba(0,0,0,0.05),0px_30px_30px_-4px_rgba(0,0,0,0.02),inset_0px_3px_1px_0px_rgb(255,255,255)]"
}

                  `}
                />
              </div>
              <div className="flex flex-col gap-2 mb-2">
                 <label className="text-lg text-left font-para flex justify-start items-center pt-2 pb-1 px-2 font-normal">
                  Company/Organizaion <span className="text-3xl invisible">*</span>
                </label>
                <input
                  type="email" placeholder="Your Company/Organization"
                  className={`bg-transparent py-3 outline-none px-4 rounded-[10px] 

${
  darkMode
    ? "placeholder:text-white shadow-[0px_0.7066px_0.7066px_-0.6666px_rgba(0,0,0,0.08),0px_1.8065px_1.8065px_-1.3333px_rgba(0,0,0,0.08),0px_3.6217px_3.6217px_-2px_rgba(0,0,0,0.07),0px_6.8656px_6.8656px_-2.6666px_rgba(0,0,0,0.07),0px_13.6467px_13.6467px_-3.3333px_rgba(0,0,0,0.05),0px_30px_30px_-4px_rgba(0,0,0,0.02),inset_0px_3px_0px_0px_rgba(0,0,0,0.02)]"
    : "shadow-[0px_0.7066px_0.7066px_-0.6666px_rgba(0,0,0,0.08),0px_1.8065px_1.8065px_-1.3333px_rgba(0,0,0,0.08),0px_3.6217px_3.6217px_-2px_rgba(0,0,0,0.07),0px_6.8656px_6.8656px_-2.6666px_rgba(0,0,0,0.07),0px_13.6467px_13.6467px_-3.3333px_rgba(0,0,0,0.05),0px_30px_30px_-4px_rgba(0,0,0,0.02),inset_0px_3px_1px_0px_rgb(255,255,255)]"
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
                  type="email" rows={4} cols={50} placeholder="Your Message"
                  className={`bg-transparent py-3 outline-none px-4 rounded-[10px] 

${
  darkMode
    ? "shadow-[0px_0.7066px_0.7066px_-0.6666px_rgba(0,0,0,0.08),0px_1.8065px_1.8065px_-1.3333px_rgba(0,0,0,0.08),0px_3.6217px_3.6217px_-2px_rgba(0,0,0,0.07),0px_6.8656px_6.8656px_-2.6666px_rgba(0,0,0,0.07),0px_13.6467px_13.6467px_-3.3333px_rgba(0,0,0,0.05),0px_30px_30px_-4px_rgba(0,0,0,0.02),inset_0px_3px_0px_0px_rgba(0,0,0,0.02)] placeholder:text-white"
    : "shadow-[0px_0.7066px_0.7066px_-0.6666px_rgba(0,0,0,0.08),0px_1.8065px_1.8065px_-1.3333px_rgba(0,0,0,0.08),0px_3.6217px_3.6217px_-2px_rgba(0,0,0,0.07),0px_6.8656px_6.8656px_-2.6666px_rgba(0,0,0,0.07),0px_13.6467px_13.6467px_-3.3333px_rgba(0,0,0,0.05),0px_30px_30px_-4px_rgba(0,0,0,0.02),inset_0px_3px_1px_0px_rgb(255,255,255)]"
}

                  `}
                />
              </div>
            </div>
            <div className=" flex justify-start pt-8 items-center">
              <button className="bg-black font-para  w-full text-white sm:px-8 px-4 py-3 font-medium rounded-[10px] opacity-100 hover:opacity-60 transition-all hover:duration-200 shadow-[rgba(61,61,61,0.72)_0px_0.602187px_1.08394px_-1.25px,rgba(61,61,61,0.64)_0px_2.28853px_4.11936px_-2.5px,rgba(61,61,61,0.25)_0px_10px_18px_-3.75px,rgba(0,0,0,0.35)_0px_0.706592px_0.706592px_-0.583333px,rgba(0,0,0,0.34)_0px_1.80656px_1.80656px_-1.16667px,rgba(0,0,0,0.33)_0px_3.62176px_3.62176px_-1.75px,rgba(0,0,0,0.3)_0px_6.8656px_6.8656px_-2.33333px,rgba(0,0,0,0.26)_0px_13.6468px_13.6468px_-2.91667px,rgba(0,0,0,0.15)_0px_30px_30px_-3.5px]">
                <a href="/about">Send Message</a>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
