import React, { useContext } from "react";
import { AppContext } from "../../context/datacontext";
import BusinessIcon from "@mui/icons-material/Business";
import LaptopIcon from "@mui/icons-material/Laptop";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
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
            className={`flex justify-center flex-col gap-24 items-center w-full py-20  ${!darkMode
                    ? "bg-[rgba(222,222,222,0.9)]"
                    : "bg-[rgba(69,69,69,1)] inset-0"
                }`}
        >
            <h2 className="text-4xl font-bold">Open for Opportunities</h2>
            <div className="xl:w-3/5  p-4 ">
                <div
                    className={` w-full flex flex-col gap-5 p-4 px-8 rounded-[20px] backdrop-blur-sm ${!darkMode ? "bg-[rgba(245,245,245,0.9)] " : "bg-[#f5f5f552] inset-0"
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

                </div>

            </div>
        </div>
    );
};

export default HomeContact;
