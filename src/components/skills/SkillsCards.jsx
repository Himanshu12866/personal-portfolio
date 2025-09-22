import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context/datacontext";
import Tilt from "react-parallax-tilt";
import expresslight from "../../assets/images/express.png";
import expressdark from "../../assets/images/icons8-express-js-256.png";
import aws from "../../assets/images/icons8-aws-256.png";
import aws_dark from "../../assets/images/aws_dark.png";
const SkillsCards = () => {
  const { darkMode, skills } = useContext(AppContext);
  const frontendIcons =
    skills?.icons?.filter((item) => item.category === "frontend") || [];

  const BackendIcons =
    skills?.icons?.filter((item) => item.category === "backend") || [];
  const additionalIcons =
    skills?.icons?.filter((item) => item.category === "tools") || [];

  useEffect(() => {
    console.log(skills);
  }, []);
  //   function resolveIconSrc(icon, theme) {
  //   const darkMode = theme === "dark";
  //   if (!icon) return "";

  //   if (icon.name === "Express.js") {
  //     return darkMode
  //       ? (typeof expressdark_large !== "undefined" ? expressdark : expresslight)
  //       : (typeof expresslight_large !== "undefined" ? expresslight : expresslight);
  //   }
  //   if (icon.name === "AWS") {
  //     return darkMode
  //       ? (typeof aws_dark_large !== "undefined" ? aws_dark : aws_dark)
  //       : (typeof aws_large !== "undefined" ? aws: aws);
  //   }
  //   return icon.iconlarge || icon.iconsmall || "";
  // }
  return (
    <>
      <div
        className={`flex justify-center flex-col gap-24 items-center w-full py-20  `}
      >
        <h2 className="text-4xl font-bold">Frontend Tech</h2>
        <div className="xl:w-4/5 3xl:w-3/5 w-full xl:p-0 p-4 grid gap-6 lg:grid-cols-4 grid-cols-2  ">
          {frontendIcons.map((icon, index) => (
            <Tilt
              key={index}
              className={`background-stripes parallax-effect-glare-scale  flex flex-col justify-between gap-5 pt-4 z-[3] rounded-[20px] relative  md:pb-2 backdrop-blur-sm ${
                !darkMode
                  ? "bg-[rgba(245,245,245,0.9)] rounded-xl shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
                  : "bg-[#00000052] rounded-xl shadow-[0_0_8px_rgba(0,255,255,0.6)]"
              }`}
              perspective={500}
              glareEnable={true}
              glareMaxOpacity={0.45}
              scale={1.02}
            >
              <div className="inner-element flex justify-center items-center">
                <img src={icon.iconlarge} data-aos="zoom-in" data-aos-delay={50*index} className=" w-20" alt="react-logo" />
              </div>
              <h3 className="py-3 text-center md:text-2xl xl:text-3xl text-xl">
                {icon.name}
              </h3>
            </Tilt>
          ))}
        </div>
      </div>
      <div
        className={`flex justify-center flex-col gap-24 items-center w-full py-20  `}
      >
        <h2 className="text-4xl font-bold">Backend Tech</h2>
        <div className="xl:w-4/5 3xl:w-3/5 w-full xl:p-0 p-4 grid gap-6 lg:grid-cols-4 grid-cols-2  ">
          {BackendIcons.map((icon, index) => (
            <Tilt
              key={index}
              className={`background-stripes parallax-effect-glare-scale  flex flex-col justify-between gap-5 pt-4 z-[3] rounded-[20px] relative  md:pb-4 backdrop-blur-sm ${
                !darkMode
                  ? "bg-[rgba(245,245,245,0.9)] rounded-xl shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
                  : "bg-[#00000052] rounded-xl shadow-[0_0_8px_rgba(0,255,255,0.6)]"
              }`}
              perspective={500}
              glareEnable={true}
              glareMaxOpacity={0.45}
              scale={1.02}
            >
              <div className="inner-element flex justify-center items-center">
                <img data-aos="zoom-in" data-aos-delay={50*index}
                  src={
                    icon.name === "Express.js"
                      ? darkMode
                        ? expressdark
                        : expresslight
                      : icon.iconlarge
                  }
                  className="md:w-24 md:h-24 w-20"
                  alt="react-logo"
                />
              </div>
              <h3 className="py-3 text-center md:text-2xl xl:text-3xl text-xl">
                {icon.name}
              </h3>
            </Tilt>
          ))}
        </div>
      </div>
      <div
        className={`flex justify-center flex-col gap-24 items-center w-full py-20  `}
      >
        <h2 className="text-4xl font-bold">Additional Tools</h2>
        <div className="xl:w-4/5 3xl:w-3/5 w-full xl:p-0 p-4 grid gap-6 lg:grid-cols-4 grid-cols-2  ">
          {additionalIcons.map((icon, index) => (
            <Tilt
              key={index}
              className={`background-stripes parallax-effect-glare-scale  flex flex-col justify-between gap-5 pt-4 z-[3] rounded-[20px] relative  md:pb-4 backdrop-blur-sm ${
                !darkMode
                  ? "bg-[rgba(245,245,245,0.9)] rounded-xl shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
                  : "bg-[#00000052] rounded-xl shadow-[0_0_8px_rgba(0,255,255,0.6)]"
              }`}
              perspective={500}
              glareEnable={true}
              glareMaxOpacity={0.45}
              scale={1.02}
            >
              <div className="inner-element flex justify-center items-center">
                <img data-aos="zoom-in" data-aos-delay={50*index}
                  src={
                    icon.name === "AWS"
                      ? darkMode
                        ? aws
                        : aws_dark
                      : icon.iconlarge
                  }
                  className="md:w-24 md:h-24 w-20"
                  alt="react-logo"
                />
              </div>
              <h3 className="py-3 text-center md:text-2xl xl:text-3xl text-xl">
                {icon.name}
              </h3>
            </Tilt>
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillsCards;
