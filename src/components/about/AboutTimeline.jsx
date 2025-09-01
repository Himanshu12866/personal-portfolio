// import * as React from 'react';
import React, { useContext } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import SchoolIcon from "@mui/icons-material/School";
import BusinessIcon from "@mui/icons-material/Business";
import LaptopIcon from "@mui/icons-material/Laptop";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InfoIcon from "@mui/icons-material/Info";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { AppContext } from "../../context/datacontext";
const AboutTimeline = () => {
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
      <h2 className="text-4xl font-bold">Academic Journey</h2>
      <div
        className="xl:w-4/5 3xl:w-3/5 w-full flex lg:flex-row flex-col gap-4 p-4
  "
      >
        <Timeline position={window.innerWidth < 1024 ? "left" : "alternate-reverse"}>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
              <TimelineDot color="secondary">
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <div
                className={` w-full z-[3] flex flex-col justify-end text-left gap-5 p-4 px-8 rounded-[20px] backdrop-blur-sm ${
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
                <div
                  style={cardStyle}
                  className="w-60 pt-2 px-4 text-center  text-lg sm:text-xl font-heading"
                >
                  <h3>Post Graduation</h3>
                </div>

                <div className="flex flex-row gap-3 justify-between  text-xl font-para font-medium">
                  <h3>
                    <WorkspacePremiumIcon /> Program :
                  </h3>{" "}
                  <p>Master of Science</p>
                </div>
                <div className="flex flex-row gap-3 justify-between  text-xl font-para font-medium">
                  <h3>
                    <LaptopIcon /> Specialization :
                  </h3>{" "}
                  <p>Computer Science</p>
                </div>
                <div className="flex flex-row gap-3 text-xl justify-between  font-para font-medium">
                  <h3 className="w-36 flex-shrink-0">
                    <BusinessIcon /> University :
                  </h3>
                  <p className="text-right">Awadhesh Pratap Singh University</p>
                </div>
                <div className="flex flex-row gap-3 text-xl justify-between  font-para font-medium">
                  <h3>
                    <CalendarMonthIcon /> Timeline :
                  </h3>{" "}
                  <p>July 2022 – June 2024</p>
                </div>
                <div className="flex flex-row gap-3 text-xl justify-between  font-para font-medium">
                  <h3>
                    <LocationOnIcon /> Location :
                  </h3>{" "}
                  <p>Rewa, Madhya Pradesh</p>
                </div>

                <div className="flex flex-col gap-3 text-xl font-para font-medium">
                  <h3>
                    <InfoIcon /> Highlights :
                  </h3>{" "}
                  <p className="text-justify">
                    Gained advanced knowledge in Web Technologies, Database
                    Systems, and Software Engineering Worked on academic
                    projects using MERN stack and explored real-time application
                    development Strengthened skills in problem-solving,
                    research, and system design.
                  </p>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <div
                className={` w-full z-[3] flex flex-col justify-end text-left gap-5 p-4 px-8 rounded-[20px] backdrop-blur-sm ${
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
                <div
                  style={cardStyle}
                  className="w-60 pt-2 px-4 text-center  text-lg sm:text-xl font-heading"
                >
                  <h3>Graduation</h3>
                </div>

                <div className="flex flex-row gap-3 justify-between  text-xl font-para font-medium">
                  <h3>
                    <WorkspacePremiumIcon /> Program :
                  </h3>{" "}
                  <p>Bachelor of Science</p>
                </div>
                <div className="flex flex-row gap-3 justify-between  text-xl font-para font-medium">
                  <h3>
                    <LaptopIcon /> Specialization :
                  </h3>{" "}
                  <p>Mathematics</p>
                </div>
                <div className="flex flex-row gap-3 text-xl justify-between  font-para font-medium">
                  <h3 className="w-36 flex-shrink-0">
                    <BusinessIcon /> University :
                  </h3>
                  <p className="text-right">Awadhesh Pratap Singh University</p>
                </div>
                <div className="flex flex-row gap-3 text-xl justify-between  font-para font-medium">
                  <h3>
                    <CalendarMonthIcon /> Timeline :
                  </h3>{" "}
                  <p>July 2019 – June 2022</p>
                </div>
                <div className="flex flex-row gap-3 text-xl justify-between  font-para font-medium">
                  <h3>
                    <LocationOnIcon /> Location :
                  </h3>{" "}
                  <p>Rewa, Madhya Pradesh</p>
                </div>
                <div className="flex flex-col gap-3 text-xl font-para font-medium">
                  <h3>
                    <InfoIcon /> Highlights :
                  </h3>{" "}
                  <p className="text-justify">
                    Built strong foundation in Algebra, Calculus, and Statistics
                    Developed logical and analytical problem-solving mindset
                    Parallelly explored programming & web development, leading
                    to projects in MERN stack Participated in hackathons and
                    collaborative coding activities.
                  </p>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};

export default AboutTimeline;
