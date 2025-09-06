import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const words = [
  "design.",
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
          end: `bottom ${window.innerWidth < 500 ? "60%" : "80%"} `, // End when container bottom reaches viewport bottom
          pin: listRef.current,
          pinSpacing: false,
        });
      }
    };

    createScrollTrigger();
  }, []);

  return (
    <main className="w-full justify-center xl:text-8xl sm:text-6xl text-3xl lg:text-7xl overflow-hidden items-center">
      <section
        ref={mainRef}
        
        className="content grid grid-cols-2 w-full  font-semibold"
      >
        <div ref={listRef} className="flex justify-end xl:text-8xl sm:text-6xl text-2xl lg:text-7xl sm:pe-10 pe-4">
          <h2>Things,I can </h2>
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
