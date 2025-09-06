import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import top_img from "../../assets/images/Reception.png";
import vdo from "../../assets/video/0_Xray_Ray_1920x1080.mp4";
import vdo2 from "../../assets/video/nuclear_1.mp4";
import Hospital from "../../assets/images/CDCHospital.png";

gsap.registerPlugin(ScrollTrigger);

const HomePageDetails = () => {
  const imgContainerRef = useRef(null);
  const hospitalImgRef = useRef(null);

  useEffect(() => {
    const topImage = imgContainerRef.current;
    const hospitalImage = hospitalImgRef.current;

    gsap.to(topImage, {
      width: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: topImage,
        start: "top 50%",
        end: "+=300",
        scrub: true,
      },
    });

    gsap.to(hospitalImage, {
      width: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: hospitalImage,
        start: "top 50%",
        end: "+=300",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="w-full h-auto">
      {/* Top Image Section with animation */}
      <div
        ref={imgContainerRef}
        style={{ width: "60%" }}
        className="overflow-hidden mx-auto rounded-3xl"
      >
        <img
          src={top_img}
          alt=""
          className="object-contain w-full"
        />
      </div>

      {/* First Content Section */}
      <div className="flex justify-center items-center">
        <div className="2xl:w-4/5 w-[90%] grid lg:grid-cols-2 grid-cols-1 gap-2 2xl:py-[22rem] xl:py-[12rem] py-[6rem] xl:px-16 2xl:px-0 text-white">
          <div className="2xl:text-[48px] xl:text-5xl text-4xl lg:flex hidden font-Matter font-bold">
            <h3 data-aos="fade-up">Welcome to Citrus Diagnostic Centre</h3>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="xl:text-2xl md:text-xl text-lg lg:ps-0 md:px-8 px-4 lg:text-left text-center"
          >
            <p>
              Where advanced medical imaging meets with the clarity of patient comfort, because our patients’ well-being is our first priority. Since 1985, we have been offering excellent and trusted diagnostic services with a relaxing outpatient experience.
            </p>
          </div>
        </div>
      </div>

      {/* Video Section 1 */}
      <div className="flex justify-center items-center">
        <div className="2xl:w-4/5 w-[90%]">
          <video
            autoPlay
            muted
            loop
            width="100%"
            className="rounded-3xl h-4/6"
            playsInline
          >
            <source src={vdo} type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Second Content Section */}
      <div className="flex justify-center items-center">
        <div className="2xl:w-4/5 w-[90%] grid lg:grid-cols-2 grid-cols-1 xl:gap-10 2xl:gap-2 gap-2 2xl:py-[22rem] xl:py-[12rem] py-[6rem] xl:px-16 2xl:px-0 text-white">
          <div className="2xl:text-[48px] xl:text-5xl text-4xl flex lg:justify-start justify-center font-bold mb-6">
            <h3 data-aos="fade-up">Why are we the best choice </h3>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="xl:text-2xl md:text-xl text-lg lg:ps-0 md:px-8 px-4 lg:text-left text-center"
          >
            <p>
              We are an ACR-accredited facility, maintaining the highest quality in image results and patient safety. We provide comfort to our patients at every stage of the diagnosis with personalised care. Our costs of diagnosis is much lower than the hospital-based diagnostic test.
            </p>
          </div>
        </div>
      </div>

      {/* Hospital Image Section with animation */}
      <div className="flex justify-center items-center">
        <div
          ref={hospitalImgRef}
          style={{ width: "60%" }}
          className="overflow-hidden mx-auto rounded-3xl"
        >
          <img
            src={Hospital}
            alt=""
            className="w-full h-full rounded-3xl"
          />
        </div>
      </div>

      {/* Third Content Section */}
      <div className="flex justify-center items-center">
        <div className="2xl:w-4/5 w-[90%] grid lg:grid-cols-2 grid-cols-1 gap-2 2xl:py-[22rem] xl:py-[12rem] py-[6rem] xl:px-16 2xl:px-0 text-white">
          <div className="2xl:text-[48px] xl:text-5xl text-4xl flex lg:justify-start justify-center text-center lg:text-left font-bold mb-6">
            <h3 data-aos="fade-up">Advanced Imaging for all your needs</h3>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="xl:text-2xl md:text-xl text-lg lg:ps-0 md:px-8 px-4 lg:text-left text-center"
          >
            <p>
              From MRIs, CT Scans to advanced X-rays and Mammography, which examines and diagnoses all your problems precisely and accurately under the supervision of our trained radiologists. The speed of the results from Citrus Diagnostic Centre is unmatched in precision. You can get the results on the same day or by the next day with expert interpretations. Most of our examinations at Citrus Diagnostic labs are painless, non-invasive and hassle-free procedures where the patients can return to their daily activities right after the tests.
            </p>
          </div>
        </div>
      </div>

      {/* Video Section 2 */}
      <div className="flex justify-center items-center mb-20">
        <div className="2xl:w-4/5 w-[90%]">
          <video
            autoPlay
            muted
            loop
            width="100%"
            className="rounded-3xl h-4/6"
            playsInline
          >
            <source src={vdo2} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default HomePageDetails;
