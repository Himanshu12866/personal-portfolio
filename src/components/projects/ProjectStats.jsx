import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import SplitText from "../SplitText";

const ProjectStats = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="flex justify-center flex-col items-center h-auto py-32 z-20">
      <h2 className="text-4xl font-bold text-center  pb-36">
        <SplitText
          delay={80}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          className="text-left"
          text="Stats That Speak"
        />
      </h2>
      <div className="xl:w-3/4 w-[95%] grid lg:grid-cols-3 md:grid-cols-2 gap-6 xl:gap-12 2xl:gap-16 2xl:p-4 p-2">
        {/* Industry-Level Projects */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="flex flex-col items-center"
        >
          <h2
            ref={ref}
            className="font-extrabold text-[6rem] md:text-[8rem] lg:text-[7rem] xl:text-[8rem] 3xl:text-[10rem]"
          >
            {inView ? <CountUp end={5} duration={4} /> : null}+
          </h2>
          <p className="text-[2.5rem]  font-extrabold text-center text-transparent stroke-text">
            Industry-Level Projects
          </p>
        </div>

        {/* Personal Builds */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="flex flex-col items-center mt-8 md:mt-0"
        >
          <h2
            ref={ref}
            className="font-extrabold text-[6rem] md:text-[8rem] lg:text-[7rem] xl:text-[8rem] 3xl:text-[10rem]"
          >
            {inView ? <CountUp end={4} duration={4} /> : null}+
          </h2>
          <p className="text-[2.5rem]  font-extrabold text-center text-transparent stroke-text">
            Personal Builds
          </p>
        </div>

        {/* Ongoing Projects */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex flex-col items-center mt-8 lg:mt-0"
        >
          <h2
            ref={ref}
            className="font-extrabold text-[6rem] md:text-[8rem] lg:text-[7rem] xl:text-[8rem] 3xl:text-[10rem]"
          >
            {inView ? <CountUp end={2} duration={4} /> : null}
          </h2>
          <p className="text-[2.5rem]  font-extrabold text-center text-transparent stroke-text">
            Ongoing Projects
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectStats;
