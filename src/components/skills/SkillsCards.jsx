import React, { useContext } from "react";
import { AppContext } from "../../context/datacontext";
import reactlogo from "../../assets/images/react.png";
import Tilt from "react-parallax-tilt";
import javascript from "../../assets/images/javascript.png";
import css from "../../assets/images/icons8-css-256.png";
import html from "../../assets/images/html.png";
import tailwind from "../../assets/images/tailwind-css.png";
import bootstrap from "../../assets/images/icons8-bootstrap-256.png";
import sass from "../../assets/images/icons8-sass-256.png";
import mui from "../../assets/images/icons8-material-ui-256.png";
import nodejs from "../../assets/images/nodejs.png";
import expresslight from "../../assets/images/express.png";
import expressdark from "../../assets/images/icons8-express-js-256.png";
import mongodb from "../../assets/images/mongodb (1).png";
import git from "../../assets/images/git.png";
import postman from "../../assets/icons_logos/postman_256.png"
import gcp from "../../assets/images/icons8-google-cloud-256.png"
import aws from "../../assets/images/icons8-aws-256.png"
import adobe from "../../assets/images/adobe-illustrator.png"
import aws_dark from "../../assets/images/aws_dark.png"
const SkillsCards = () => {
  const { darkMode } = useContext(AppContext);
  const frontendIcons = [
    { name: "React JS", img: reactlogo },
    { name: "JavaScript", img: javascript },
    { name: "CSS3", img: css },
    { name: "HTML5", img: html },
    { name: "Tailwind CSS", img: tailwind },
    { name: "Bootstrap", img: bootstrap },
    { name: "Sass", img: sass },
    { name: "Material UI", img: mui },
  ];
  const BackendIcons = [
    { name: "Node JS", img: nodejs },
    { name: "Express JS", img: !darkMode ? expresslight : expressdark },
    { name: "MongoDB", img: mongodb },
    { name: "Git", img: git },
  ];
  const additionalIcons = [
{ name: "Postman", img: postman },
{ name: "GCP", img: gcp },
{ name: "AWS", img: darkMode ? aws : aws_dark },
{ name: "Adobe I", img: adobe },

  ]
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
                <img src={icon.img} className=" w-20" alt="react-logo" />
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
                <img
                  src={icon.img}
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
                <img
                  src={icon.img}
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
