import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const words = [
  "design.",
  "prototype.",
  "solve.",
  "build.",
  "develop.",
  "debug.",
  "learn.",
  "cook.",
  "ship.",
  "prompt.",
  "collaborate.",
  "create.",
  "inspire.",
  "follow.",
  "innovate.",
  "test.",
  "scale.",
  "do it.",
];
export default function ScrollSkills() {
  const mainRef = useRef(null);
  const listRef = useRef(null);
  useEffect(() => {
    let trigger;
    const createScrollTrigger = () => {
      if (window.innerWidth >= 300 && mainRef.current && listRef.current) {
        trigger = ScrollTrigger.create({
          trigger: mainRef.current,
          start: "top 50%", // Start pinning at top
          end: `bottom ${window.innerWidth < 500 ? "60%" : "70%"} `, // End when container bottom reaches viewport bottom
          pin: listRef.current,
          
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
    <main className="w-full justify-center xl:text-8xl sm:text-6xl text-4xl lg:text-7xl  items-center">
      <section
        ref={mainRef}
        
        className="content grid grid-cols-2 w-full max-h-[160vh] sm:max-h-[350vh] font-semibold"
      >
        <div ref={listRef} className="flex justify-end sm:pe-10 pe-5">
          <h2>you can </h2>
        </div>
        <ul style={{ "--count": words.length }}>
          {words.map((w, i) => (
            <li
              key={i}
              className="md:h-40 h-16"
              style={{
                color: `oklch(70% 0.3 ${i * (360 / words.length)}deg)`,
              }}
            >
              {w}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
