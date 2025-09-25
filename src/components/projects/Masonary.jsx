import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
const useMedia = (queries, values, defaultValue) => {
  const get = () =>
    values[queries.findIndex((q) => matchMedia(q).matches)] ?? defaultValue;
  const [value, setValue] = useState(get);
  useEffect(() => {
    const handler = () => setValue(get);
    queries.forEach((q) => matchMedia(q).addEventListener("change", handler));
    return () =>
      queries.forEach((q) =>
        matchMedia(q).removeEventListener("change", handler)
      );
  }, [queries]);
  return value;
};
const useMeasure = () => {
  const ref = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  useLayoutEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width } = entry.contentRect;
      setSize({ width });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);
  return [ref, size];
};
const preloadImages = async (urls) => {
  const sizes = await Promise.all(
    urls.map(
      (src) =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () =>
            resolve({
              src,
              width: img.naturalWidth,
              height: img.naturalHeight,
            });
          img.onerror = () => resolve({ src, width: 300, height: 200 }); // fallback
        })
    )
  );
  return sizes;
};
const Masonry = ({
  items,
  ease = "power3.out",
  duration = 0.6,
  stagger = 0.05,
  animateFrom = "bottom",
  scaleOnHover = true,
  hoverScale = 0.95,
  blurToFocus = true,
  colorShiftOnHover = false,
}) => {
  const columns = useMedia(
    [
      "(min-width:1500px)",
      "(min-width:1000px)",
      "(min-width:600px)",
      "(min-width:400px)",
    ],
    [4, 4, 3, 2],
    1
  );
  const [containerRef, { width }] = useMeasure();
  const [imagesReady, setImagesReady] = useState(false);
  const getInitialPosition = (item) => {
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return { x: item.x, y: item.y };
    let direction = animateFrom;
    if (animateFrom === "random") {
      const dirs = ["top", "bottom", "left", "right"];
      direction = dirs[Math.floor(Math.random() * dirs.length)];
    }
    switch (direction) {
      case "top":
        return { x: item.x, y: -200 };
      case "bottom":
        return { x: item.x, y: window.innerHeight + 200 };
      case "left":
        return { x: -200, y: item.y };
      case "right":
        return { x: window.innerWidth + 200, y: item.y };
      case "center":
        return {
          x: containerRect.width / 2 - item.w / 2,
          y: containerRect.height / 2 - item.h / 2,
        };
      default:
        return { x: item.x, y: item.y + 100 };
    }
  };
  const [imageSizes, setImageSizes] = useState([]);
  useEffect(() => {
    preloadImages(items.map((i) => i.img)).then((sizes) => {
      setImageSizes(sizes);
      setImagesReady(true);
    });
  }, [items]);
  const { positions, height: masonryHeight } = useMemo(() => {
    if (!width || !imagesReady) return { positions: [], height: 0 };
    const colHeights = new Array(columns).fill(0);
    const gap = 16;
    const totalGaps = (columns - 1) * gap;
    const columnWidth = (width - totalGaps) / columns;

    const positions = items.map((child, idx) => {
      const size = imageSizes[idx] || { width: 400, height: 500 };
      const aspectRatio = size.width / size.height;
      const height = columnWidth / aspectRatio; 
      const col = colHeights.indexOf(Math.min(...colHeights));
      const x = col * (columnWidth + gap);
      const y = colHeights[col];
      colHeights[col] += height + gap;
      return { ...child, x, y, w: columnWidth, h: height };
  });
    const height = colHeights.length > 0 ? Math.max(...colHeights) - gap : 0;
    return { positions, height };
  }, [columns, items, width, imagesReady, imageSizes]);
  const hasMounted = useRef(false);
  useLayoutEffect(() => {
    if (!imagesReady) return;
    positions.forEach((item, index) => {
      const selector = `[data-key="${item.id}"]`;
      const animProps = { x: item.x, y: item.y, width: item.w, height: item.h };
      if (!hasMounted.current) {
        const start = getInitialPosition(item);
        gsap.fromTo(
          selector,
          {
            opacity: 0,
            x: start.x,
            y: start.y,
            width: item.w,
            height: item.h,
            ...(blurToFocus && { filter: "blur(10px)" }),
          },
          {
            opacity: 1,
            ...animProps,
            ...(blurToFocus && { filter: "blur(0px)" }),
            duration: 0.8,
            ease: "power3.out",
            delay: index * stagger,
          }
        );
      } else {
        gsap.to(selector, {
          ...animProps,
          duration,
          ease,
          overwrite: "auto",
        });
      }
    });
    hasMounted.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [positions, imagesReady, stagger, animateFrom, blurToFocus, duration, ease]);
  const handleMouseEnter = (id, element) => {
    if (scaleOnHover) {
      gsap.to(`[data-key="${id}"]`, {
        scale: hoverScale,
        duration: 0.3,
        ease: "power2.out",
      });
    }
    if (colorShiftOnHover) {
      const overlay = element.querySelector(".color-overlay");
      if (overlay) gsap.to(overlay, { opacity: 0.3, duration: 0.3 });
    }
  };
  const handleMouseLeave = (id, element) => {
    if (scaleOnHover) {
      gsap.to(`[data-key="${id}"]`, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
    if (colorShiftOnHover) {
      const overlay = element.querySelector(".color-overlay");
      if (overlay) gsap.to(overlay, { opacity: 0, duration: 0.3 });
    }
  };
  const [boxIndex, setBoxIndex] = useState(null);
  const openModalBox = (item, index) => {
    setBoxIndex(index);
  };
  const closeModalBox = () => {
    setBoxIndex(null);
  };
  const showNext = () => {
    setBoxIndex((prev) => (prev + 1) % items.length);
  };
  const showPrev = () => {
    setBoxIndex((prev) => (prev - 1 + items.length) % items.length);
  };
  return (
    <>
      {boxIndex !== null && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black/90 z-50 flex justify-center items-center p-4 md:p-10">
          <img
            src={items[boxIndex].img}
            alt="modal-img"
            className="max-w-full max-h-full object-contain rounded-2xl"
          />
          {/* Close Button */}
          <button
            onClick={closeModalBox}
            className="absolute top-5 right-5 text-white bg-red-600 px-4 py-2 rounded-lg shadow"
          >
            Close
          </button>
          {/* Prev Button */}
          <button
            onClick={showPrev}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-white bg-gray-800 px-4 py-2 rounded-full shadow"
          >
            ◀
          </button>

          {/* Next Button */}
          <button
            onClick={showNext}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-white bg-gray-800 px-4 py-2 rounded-full shadow"
          >
            ▶
          </button>
        </div>
      )}
      <div ref={containerRef} className="relative border-[1px] rounded-2xl p-2 border-[#c5c5c554]" style={{ height: masonryHeight }}>
        {positions.map((item, index) => (
          <div
            key={item.id}
            data-key={item.id}
            className="absolute   cursor-pointer"
            style={{ willChange: "transform, width,  opacity" }}
            onClick={() => openModalBox(item, index)}
            onMouseEnter={(e) => handleMouseEnter(item.id, e.currentTarget)}
            onMouseLeave={(e) => handleMouseLeave(item.id, e.currentTarget)}
          >
            <div
              className="relative w-full h-full bg-cover bg-center rounded-[10px] shadow-[0px_10px_50px_-10px_rgba(0,0,0,0.2)] uppercase text-[10px] leading-[10px]"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              {colorShiftOnHover && (
                <div className="color-overlay absolute inset-0 rounded-[10px] bg-gradient-to-tr from-pink-500/50 to-sky-500/50 opacity-0 pointer-events-none" />
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Masonry;