// SmoothScrollWrapper.jsx
import { useEffect, createContext, useContext, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
gsap.registerPlugin(ScrollTrigger);
const LenisContext = createContext(null);
export const useLenis = () => useContext(LenisContext);
const SmoothScrollWrapper = ({ children }) => {
  const lenisRef = useRef(null);
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });
    lenisRef.current = lenis;
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);
    ScrollTrigger.defaults({ scroller: document.body });
    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <LenisContext.Provider value={lenisRef}>{children}</LenisContext.Provider>
  );
};

export default SmoothScrollWrapper;
