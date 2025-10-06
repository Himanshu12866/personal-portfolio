import React, { useEffect, useRef, useContext } from "react";
import { AppContext } from "../../context/datacontext";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BlurText from "../BlurText";
import SplitText from "../SplitText";
import axios from "axios";
import { toast } from "react-toastify";
gsap.registerPlugin(ScrollTrigger);
const HomeContact = () => {
  const { darkMode } = useContext(AppContext);
  const containerRef = useRef(null);
  const stickyLeftRef = useRef(null);
  const initialFormData = {
    name: "",
    email: "",
    message: "",
    phone: "",
    company: "",
    date: "",
  };
  const [formData, setFormData] = React.useState(initialFormData);
  const [error, setError] = React.useState({});
  const [loading, setLoding] = React.useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const validatForm = () => {
    const newError = {};
    if (!formData.name || formData.name.length < 3) {
      newError.name =
        "Name is required and should be at least 3 characters long";
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newError.email = "A valid email is required";
    }
    if (!formData.message || formData.message.length < 10) {
      newError.message =
        "Message is required and should be at least 10 characters long";
    }
    if (!formData.phone) {
      newError.phone = "Please enter a mobile number.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newError.phone = "Mobile number should be 10 digits.";
    }
    setError(newError);
    return Object.keys(newError).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validatForm();
    if (!isValid) {
      toast.warning("Please fill all the required fields correctly.");
      return; 
    }
    const dateNow = new Date();
    formData.date = dateNow;
    
    try {
      setLoding(!loading);
      const response = await axios.post("https://formspree.io/f/mrbyljkk", formData);
      if (response.status === 200) {
        
        setFormData(initialFormData);
        setError({});
      } else {
        toast.error("Failed to submit the form. Please try again.");
        console.log("Form submission error:", response);
      }
    } catch (error) {
      toast.error("An error occurred while submitting the form.");
      console.error("Form submission error:", error);
    } finally {
      setLoding(false);
    }
  };
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
          start: "top 25%",
          end: "bottom bottom",
          pin: stickyLeftRef.current,
          pinSpacing: true,
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
  return (
    <div
      className={`flex justify-center flex-col gap-24 items-center w-full md:py-20 `}
    >
      {window.location.pathname === "/" && (
        <h2 className="text-4xl font-bold text-center">
          {" "}
          <SplitText
            delay={80}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            className="text-center"
            text="Open for Opportunities"
          />
        </h2>
      )}
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
              data-aos="zoom-in"
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
            <div className="text-xl text-justify font-para pt-2 pb-1 px-2 font-normal">
              <BlurText
                text="Feel free to email me if you have any questions or need more
              details!"
                delay={5}
                animateBy="words"
                direction="bottom"
              />
            </div>
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
              data-aos="zoom-in"
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
            <div className="text-xl text-justify font-para pt-2 pb-1 px-2 font-normal">
              <BlurText
                text="Feel free to call me anytime according to your convenience"
                delay={10}
                animateBy="words"
                direction="bottom"
              />
            </div>
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
          <form className="lg:px-3" onSubmit={handleSubmit}>
            {/* Name and Phone Number */}
            <div>
              <div className="flex flex-col mb-2 relative">
                <label className="text-lg text-left font-para flex justify-start items-center pt-2 pb-1 px-2 font-normal">
                  <BlurText
                    text="Name"
                    delay={5}
                    animateBy="words"
                    direction="bottom"
                  />
                  <span className="text-3xl">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`bg-transparent py-3 outline-none px-4 rounded-[10px] ${
                    !darkMode
                      ? "bg-[rgba(245,245,245,0.9)] rounded-xl shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
                      : "bg-[#00000052] rounded-xl shadow-[0_0_8px_rgba(0,255,255,0.6)]"
                  } 
                  `}
                />
                {error.name && (
                  <span className=" absolute -bottom-6 text-red-500 text-sm px-2 pt-1">
                    {error.name}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2 mb-2 relative">
                <label className="text-lg text-left font-para flex justify-start items-center pt-2 pb-1 px-2 font-normal">
                  <BlurText
                    text="Email"
                    delay={5}
                    animateBy="words"
                    direction="bottom"
                  />{" "}
                  <span className="text-3xl">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className={`bg-transparent py-3 outline-none px-4 rounded-[10px] ${
                    !darkMode
                      ? "bg-[rgba(245,245,245,0.9)] rounded-xl shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
                      : "bg-[#00000052] rounded-xl shadow-[0_0_8px_rgba(0,255,255,0.6)]"
                  } 
                  `}
                />
                {error.email && (
                  <span className=" absolute -bottom-6 text-red-500 text-sm px-2 pt-1">
                    {error.email}
                  </span>
                )}
              </div>
            </div>
            {/* Phone Number and Company/Organization */}
            <div>
              <div className="flex flex-col gap-2 mb-2 relative">
                <label className="text-lg text-left font-para flex justify-start items-center pt-2 pb-1 px-2 font-normal">
                  <BlurText
                    text="phone"
                    delay={5}
                    animateBy="words"
                    direction="bottom"
                  />{" "}
                  <span className="text-3xl">*</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => {
                    const onlyDigits = e.target.value.replace(/\D/g, "");
                    setFormData({ ...formData, phone: onlyDigits });
                  }}
                  maxLength={10}
                  placeholder="Your Phone Number"
                  className={`bg-transparent py-3 outline-none px-4 rounded-[10px] ${
                    !darkMode
                      ? "bg-[rgba(245,245,245,0.9)] rounded-xl shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
                      : "bg-[#00000052] rounded-xl shadow-[0_0_8px_rgba(0,255,255,0.6)]"
                  } 
                  `}
                />
                {error.phone && (
                  <span className=" absolute -bottom-6 text-red-500 text-sm px-2 pt-1">
                    {error.phone}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2 mb-2 relative">
                <label className="text-lg text-left font-para flex justify-start items-center pt-2 pb-1 px-2 font-normal">
                  <BlurText
                    text="Company/Organizaion"
                    delay={5}
                    animateBy="words"
                    direction="bottom"
                  />{" "}
                  <span className="text-3xl invisible">*</span>
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company/Organization"
                  className={`bg-transparent py-3 outline-none px-4  rounded-[10px] ${
                    !darkMode
                      ? "bg-[rgba(245,245,245,0.9)] rounded-xl shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
                      : "bg-[#00000052] rounded-xl shadow-[0_0_8px_rgba(0,255,255,0.6)]"
                  } 
                  `}
                />
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-2 mb-2 relative">
                <label className="text-lg text-left font-para flex justify-start items-center pt-2 pb-1 px-2 font-normal">
                  <BlurText
                    text="Message"
                    delay={5}
                    animateBy="words"
                    direction="bottom"
                  />{" "}
                  <span className="text-3xl">*</span>
                </label>
                <textarea
                  type="text"
                  name="message"
                  value={formData.message}
                  rows={4}
                  onChange={handleChange}
                  cols={50}
                  placeholder="Your Message"
                  className={`bg-transparent py-3 outline-none px-4 rounded-[10px] ${
                    !darkMode
                      ? "bg-[rgba(245,245,245,0.9)] rounded-xl shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
                      : "bg-[#00000052] rounded-xl shadow-[0_0_8px_rgba(0,255,255,0.6)]"
                  } }
                  `}
                />
                {error.message && (
                  <span className=" absolute -bottom-6 text-red-500 text-sm px-2 pt-1">
                    {error.message}
                  </span>
                )}
              </div>
            </div>
            <div className=" flex justify-start pt-8 items-center">
              {loading ? (
                <button
                  disabled
                  className={`bg-black font-para cursor-not-allowed w-full text-white sm:px-8 px-4 py-3 font-medium rounded-[10px] opacity-60  ${
                    !darkMode
                      ? "  shadow-[rgba(61,61,61,0.72)_0px_0.602187px_1.08394px_-1.25px,rgba(61,61,61,0.64)_0px_2.28853px_4.11936px_-2.5px,rgba(61,61,61,0.25)_0px_10px_18px_-3.75px,rgba(0,0,0,0.35)_0px_0.706592px_0.706592px_-0.583333px,rgba(0,0,0,0.34)_0px_1.80656px_1.80656px_-1.16667px,rgba(0,0,0,0.33)_0px_3.62176px_3.62176px_-1.75px,rgba(0,0,0,0.3)_0px_6.8656px_6.8656px_-2.33333px,rgba(0,0,0,0.26)_0px_13.6468px_13.6468px_-2.91667px,rgba(0,0,0,0.15)_0px_30px_30px_-3.5px]"
                      : " shadow-[0_0_8px_rgba(0,255,255,0.6)]"
                  }`}
                >
                  <div className=" flex justify-center items-center">
                    <span className="mr-2">Sending</span>
                    <span className="animate-[ping_1.5s_0.5s_ease-in-out_infinite]">
                      .
                    </span>
                    <span className="animate-[ping_1.5s_0.7s_ease-in-out_infinite]">
                      .
                    </span>
                    <span className="animate-[ping_1.5s_0.9s_ease-in-out_infinite]">
                      .
                    </span>
                  </div>
                </button>
              ) : (
                <button
                  className={`bg-black font-para  w-full text-white sm:px-8 px-4 py-3 font-medium rounded-[10px] opacity-100 hover:opacity-60 transition-all hover:duration-200 ${
                    !darkMode
                      ? "  shadow-[rgba(61,61,61,0.72)_0px_0.602187px_1.08394px_-1.25px,rgba(61,61,61,0.64)_0px_2.28853px_4.11936px_-2.5px,rgba(61,61,61,0.25)_0px_10px_18px_-3.75px,rgba(0,0,0,0.35)_0px_0.706592px_0.706592px_-0.583333px,rgba(0,0,0,0.34)_0px_1.80656px_1.80656px_-1.16667px,rgba(0,0,0,0.33)_0px_3.62176px_3.62176px_-1.75px,rgba(0,0,0,0.3)_0px_6.8656px_6.8656px_-2.33333px,rgba(0,0,0,0.26)_0px_13.6468px_13.6468px_-2.91667px,rgba(0,0,0,0.15)_0px_30px_30px_-3.5px]"
                      : " shadow-[0_0_8px_rgba(0,255,255,0.6)]"
                  }`}
                >
                  <BlurText
                    text="Send Message"
                    delay={5}
                    animateBy="words"
                    direction="bottom"
                    className="flex justify-center items-center"
                  />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
