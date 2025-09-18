import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "https://assets.codepen.io/16327/portrait-number-01.png",
  "https://assets.codepen.io/16327/portrait-number-02.png",
  "https://assets.codepen.io/16327/portrait-number-03.png",
  "https://assets.codepen.io/16327/portrait-number-04.png",
  "https://assets.codepen.io/16327/portrait-number-05.png",
  "https://assets.codepen.io/16327/portrait-number-06.png",
  "https://assets.codepen.io/16327/portrait-number-07.png",
  "https://assets.codepen.io/16327/portrait-number-01.png",
  "https://assets.codepen.io/16327/portrait-number-02.png",
  "https://assets.codepen.io/16327/portrait-number-03.png",
  "https://assets.codepen.io/16327/portrait-number-04.png",
  "https://assets.codepen.io/16327/portrait-number-05.png",
  "https://assets.codepen.io/16327/portrait-number-06.png",
  "https://assets.codepen.io/16327/portrait-number-07.png",
];

const GsapScrollCarousel = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(trackRef.current.querySelectorAll(".card"));
    const totalCards = sections.length;

    // How many cards per row on desktop
    const cardsPerRow = 4;

    // total "pages" = totalCards - visibleCards
    const totalSlides = totalCards - cardsPerRow;

    let tl = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / totalSlides,
end: () => "+=" + window.innerHeight * (totalSlides * 0.5),
      }
    });

    // move cards horizontally: (100 / cardsPerRow) per step
    tl.to(trackRef.current, {
      xPercent: -((100 / cardsPerRow) * totalSlides)
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="carousel-container w-full h-screen overflow-hidden"
    >
      <div
        ref={trackRef}
        className="carousel-track flex h-full"
        style={{ width: `${(images.length / 16) * 100}%` }} // track wide enough for cards
      >
        {images.map((src, idx) => (
          <div
            key={idx}
            className="card flex-shrink-0 flex justify-center items-center
                       w-full sm:w-1/3 lg:w-1/4 p-4"
          >
            <img src={src} alt={`slide-${idx}`} className="w-[300px]" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GsapScrollCarousel;
