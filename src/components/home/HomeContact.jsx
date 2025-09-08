import React, { useEffect, useRef, useContext } from "react";
import { AppContext } from "../../context/datacontext";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const HomeContact = () => {
  const { darkMode } = useContext(AppContext);
  const containerRef = useRef(null);
  const stickyLeftRef = useRef(null); // Ref for the left section (image)
  useEffect(() => {
    let trigger;
    const createScrollTrigger = () => {
      if (
        window.innerWidth >= 1024 &&
        containerRef.current &&
        stickyLeftRef.current
      ) {
        trigger = ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top 25%", // Start pinning at top
          end: "bottom bottom", // End when container bottom reaches viewport bottom
          pin: stickyLeftRef.current,
          pinSpacing: true, // Let GSAP handle spacing
        });
      }
    };

    createScrollTrigger();

    const handleResize = () => {
      if (trigger) trigger.kill();
      createScrollTrigger();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (trigger) trigger.kill();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // const cardStyle = {
  //   backdropFilter: "blur(5px)",
  //   borderRadius: "10px",
  //   boxShadow: `
  //     rgba(0, 0, 0, 0.07) 0px 0.706592px 0.706592px -0.583333px,
  //     rgba(0, 0, 0, 0.07) 0px 1.80656px 1.80656px -1.16667px,
  //     rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -1.75px,
  //     rgba(0, 0, 0, 0.06) 0px 6.8656px 6.8656px -2.33333px,
  //     rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -2.91667px,
  //     rgba(0, 0, 0, 0.03) 0px 30px 30px -3.5px,
  //     rgb(255, 255, 255) 0px 0px 1px 0px inset
  //   `,
  //   opacity: 1,
  //   borderBottom: "2px solid rgba(255, 255, 255, 0.3)",
  //   borderLeft: "0px solid",
  //   borderRight: "0px solid",
  // };
  return (
    <div
      className={`flex justify-center flex-col gap-24 items-center w-full py-20 `}
    >
      <h2 className="text-4xl font-bold text-center">Open for Opportunities</h2>
      <div
        ref={containerRef}
        style={{ minHeight: "108vh" }}
        className="2xl:w-3/5  xl:w-4/5 w-full  px-4 xl:px-0 flex lg:flex-row flex-col justify-center items-start gap-6 "
      >
        <div
          ref={stickyLeftRef}
          className="lg:w-2/5 w-full flex flex-col gap-4 z-[4]"
        >
          <div
            className={` w-full flex flex-col gap-3  p-4 md:px-8 px-6 rounded-[20px] backdrop-blur-sm ${
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
            <p className="text-xl text-justify font-para pt-2 pb-1 px-2 font-normal">
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
        <div
          className={` lg:w-3/5 w-full flex flex-col gap-5 p-4 md:px-8 px-6 rounded-[20px] z-[5] backdrop-blur-sm ${
            !darkMode
              ? "bg-[rgba(245,245,245,0.9)] rounded-xl shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
              : "bg-[#00000052] rounded-xl shadow-[0_0_8px_rgba(0,255,255,0.6)]"
          } `}
        >
          <form className="lg:px-3">
            {/* Name and Phone Number */}
            <div>
              <div className="flex flex-col mb-2">
                <label className="text-lg text-left font-para flex justify-start items-center pt-2 pb-1 px-2 font-normal">
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
              <div className="flex flex-col gap-2 mb-2">
                <label className="text-lg text-left font-para flex justify-start items-center pt-2 pb-1 px-2 font-normal">
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
            <div>
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
    </div>
  );
};

export default HomeContact;
