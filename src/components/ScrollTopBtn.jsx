import { useContext, useEffect, useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { AppContext } from "../context/datacontext";
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollPercent(Math.round(scrolled));
    setIsVisible(scrollTop > 200);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const { darkMode } = useContext(AppContext);
  return (
    <button
      style={{
        zIndex: "30",
      }}
      onClick={scrollToTop}
      className={` backdrop-blur-sm ${
              !darkMode
                ? "bg-[rgba(245,245,245,0.9)]  shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
                : "bg-[#00000052]  shadow-[0_0_8px_rgba(0,255,255,0.6)]"
            } fixed bottom-6 left-6 p-2 w-14 h-14 rounded-full transition-opacity hover:duration-300 flex items-center justify-center flex-col text-xl font-semibold ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      } group `}
      aria-label="Scroll to top"
    >
      <ArrowUpwardIcon fontSize="30px" className="text-xl group-hover:scale-150 transition-all group-hover:duration-300"/>
    </button>
  );
};

export default ScrollToTop;
