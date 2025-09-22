import React, { useContext } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { AppContext } from "../../context/datacontext";
const ContactSocial = () => {
  const { darkMode } = useContext(AppContext);
  return (
    <div className="flex w-full py-20  justify-center items-center shadow-[inset_0_3px_1px_rgba(255,255,255,0.4),inset_0_0px_0px_rgba(255,255,255,0.4)] ">
      <div className="xl:w-2/4 lg:4/5 w-11/12 grid md:grid-cols-2 gap-4 grid-cols-1">
        <div className="p-4 md:p-16 flex justify-center flex-col items-start  gap-4">
          <h3 className="text-4xl">Social</h3>
          <ul className="flex flex-col text-3xl font-medium mt-6 font-heading  space-y-6">
            <li>
              <a
                href="https://github.com/himanshu12866"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-3 hover:text-[#f59e0b] transition-all duration-200"
              >
                <GitHubIcon className="text-[#f59e0b]" fontSize="30px" />{" "}
                <span>Github</span>
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/himanshumishra17/"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-3 hover:text-[#f59e0b] transition-all duration-200"
              >
                <LinkedInIcon fontSize="30px" className="text-[#f59e0b]" />{" "}
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/hema_nshu"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-3 hover:text-[#f59e0b] transition-all duration-200"
              >
                <XIcon fontSize="30px" className="text-[#f59e0b]" />{" "}
                <span>Twitter (X)</span>
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/qr/7P2XAEPKSWCDI1"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-3 hover:text-[#f59e0b] transition-all duration-200"
              >
                <WhatsAppIcon fontSize="30px" className="text-[#f59e0b]" />{" "}
                <span>WhatsApp</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="p-4 md:py-16 flex justify-between flex-col  items-start gap-8">
          <h3 className="text-4xl">My Resume</h3>
          <p className="md:text-2xl text-xl font-code">
            "I’m just one step away from creating something amazing together."
          </p>

          <div className="flex flex-row gap-4  mt-4">
            <div className=" flex justify-center items-start">
              <a href="./HimanshuResume.pdf" download="HimanshuResume.pdf"
                className={`bg-black font-para 
                   text-white sm:px-8 px-4 py-3 
                   font-medium rounded-xl opacity-100
                    hover:opacity-60 transition-all
                     hover:duration-200  
                     ${
                       !darkMode
                         ? "  shadow-[rgba(61,61,61,0.72)_0px_0.602187px_1.08394px_-1.25px,rgba(61,61,61,0.64)_0px_2.28853px_4.11936px_-2.5px,rgba(61,61,61,0.25)_0px_10px_18px_-3.75px,rgba(0,0,0,0.35)_0px_0.706592px_0.706592px_-0.583333px,rgba(0,0,0,0.34)_0px_1.80656px_1.80656px_-1.16667px,rgba(0,0,0,0.33)_0px_3.62176px_3.62176px_-1.75px,rgba(0,0,0,0.3)_0px_6.8656px_6.8656px_-2.33333px,rgba(0,0,0,0.26)_0px_13.6468px_13.6468px_-2.91667px,rgba(0,0,0,0.15)_0px_30px_30px_-3.5px]"
                         : " shadow-[0_0_8px_rgba(0,255,255,0.6)]"
                     }`}
              >
                <button>
                  Download <ArrowDownwardIcon />
                </button>
              </a>
            </div>
            <div className=" flex justify-center items-center">
              <a href="./HimanshuResume.pdf"  target="_blank"
                className={`bg-[#f5f5f5]  ${
                  darkMode
                    ? "text-black rounded-xl shadow-[0_0_8px_rgba(0,255,255,0.6)]"
                    : " shadow-[0_0_8px_rgba(0,255,255,0.6)]"
                } rounded-[10px] font-para font-medium sm:px-8 px-4 py-3 opacity-100 hover:opacity-60 transition-all hover:duration-200 shadow-[rgba(158,158,158,0.69)_0px_0.706592px_0.706592px_-0.583333px,rgba(158,158,158,0.68)_0px_1.80656px_1.80656px_-1.16667px,rgba(158,158,158,0.65)_0px_3.62176px_3.62176px_-1.75px,rgba(158,158,158,0.61)_0px_6.8656px_6.8656px_-2.33333px,rgba(158,158,158,0.52)_0px_13.6468px_13.6468px_-2.91667px,rgba(158,158,158,0.3)_0px_30px_30px_-3.5px,rgba(255,255,255,1)_0px_3px_1px_0px_inset]`}
              >
                <button >
                  View <ArrowOutwardIcon />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSocial;
