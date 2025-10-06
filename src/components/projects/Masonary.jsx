// Masonry.jsx
import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { gsap } from "gsap";
import MuiMasonry from "@mui/lab/Masonry"; // aliased to avoid naming collision
import Box from "@mui/material/Box";
import { AppContext } from "../../context/datacontext";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import CloseIcon from '@mui/icons-material/Close';
/* ---------- helpers (kept from your original) ---------- */
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queries]);
  return value;
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

/* ---------- exported component (keeps same prop names) ---------- */
export default function Masonry({
  items,
  ease = "power3.out",
  duration = 0.6,
  stagger = 0.05,
  animateFrom = "bottom",
  scaleOnHover = true,
  hoverScale = 0.95,
  blurToFocus = true,
  colorShiftOnHover = false,
}) {
  // keep your responsive columns behaviour
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

  // preload images (same as before)
  const [imagesReady, setImagesReady] = useState(false);
  const [imageSizes, setImageSizes] = useState([]);
  useEffect(() => {
    let mounted = true;
    preloadImages(items.map((i) => i.img)).then((sizes) => {
      if (!mounted) return;
      setImageSizes(sizes);
      setImagesReady(true);
    });
    return () => {
      mounted = false;
    };
  }, [items]);

  // refs for each masonry item — animate these directly
  const itemRefs = useRef([]);
  useEffect(() => {
    // reset refs when items length changes
    itemRefs.current = [];
  }, [items.length]);

  const hasMounted = useRef(false);

  // animation: useLayoutEffect so it runs before paint
  useLayoutEffect(() => {
    if (!imagesReady) return;
    itemRefs.current.forEach((el, index) => {
      if (!el) return;

      // compute starting offset based on animateFrom
      let startX = 0;
      let startY = 0;
      let dirs = ["top", "bottom", "left", "right"];
      let direction = animateFrom;
      if (animateFrom === "random") direction = dirs[Math.floor(Math.random() * dirs.length)];

      switch (direction) {
        case "top":
          startY = -200;
          break;
        case "bottom":
          startY = 200;
          break;
        case "left":
          startX = -200;
          break;
        case "right":
          startX = 200;
          break;
        case "center":
          startX = 0;
          startY = 0;
          break;
        default:
          startY = 100;
      }

      if (!hasMounted.current) {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            x: startX,
            y: startY,
            ...(blurToFocus && { filter: "blur(10px)" }),
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            ...(blurToFocus && { filter: "blur(0px)" }),
            duration: 0.8,
            ease: "power3.out",
            delay: index * stagger,
          }
        );
      } else {
        gsap.to(el, {
          duration,
          ease,
          overwrite: "auto",
        });
      }
    });

    hasMounted.current = true;

    return () => {
      // tidy up tweens for these refs
      itemRefs.current.forEach((el) => {
        try {
          gsap.killTweensOf(el);
        } catch (e) { }
      });
    };
    // we intentionally include columns so layout changes retrigger
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imagesReady, items, columns, animateFrom, stagger, duration, ease, blurToFocus]);
  // hover handlers (operate on DOM node)
  const handleMouseEnter = (id, element) => {
    if (scaleOnHover) {
      gsap.to(element, {
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
      gsap.to(element, {
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
  // modal logic same as before
  const [boxIndex, setBoxIndex] = useState(null);
  const openModalBox = (item, index) => setBoxIndex(index);
  const closeModalBox = () => setBoxIndex(null);
  const showNext = () => setBoxIndex((prev) => (prev + 1) % items.length);
  const showPrev = () => setBoxIndex((prev) => (prev - 1 + items.length) % items.length);
  const { darkMode } = useContext(AppContext)
  return (
    <>
      {boxIndex !== null && (
        <div
          className={`flex justify-center items-center p-5 fixed top-0 left-0 w-full h-full z-50 bg-black/80`}
        >
          <img
            src={items[boxIndex].img}
            alt="modal-img"
            style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", borderRadius: 20 }}
          />
          <button
            style={{
              zIndex: "999",
            }}
            onClick={closeModalBox}
            className={` backdrop-blur-sm ${!darkMode
                ? "bg-[rgba(245,245,245,0.9)]  shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
                : "bg-[#00000052]  shadow-[0_0_8px_rgba(0,255,255,0.6)]"
              } absolute top-6 right-6 p-2 w-10 h-10 rounded-full transition-opacity hover:duration-300 flex items-center justify-center flex-col text-xl font-semibold group `}
            aria-label="Scroll to top"
          >
            <CloseIcon fontSize="30px" className="text-xl" />
          </button>
          <button
            onClick={showPrev}
            style={{
              position: "absolute",
              left: 20,
              top: "50%",
            }}
            className={` backdrop-blur-sm ${!darkMode
                ? "bg-[rgba(245,245,245,0.9)]  shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
                : "bg-[#00000052]  shadow-[0_0_8px_rgba(0,255,255,0.6)]"
              } absolute top-6 right-6 p-2 w-10 h-10 rounded-full transition-opacity hover:duration-300 flex items-center justify-center flex-col text-xl font-semibold group `}
            aria-label="previous image"
          >
            <NavigateBeforeIcon className="text-2xl" fontSize="30px" />
          </button>
          <button
            onClick={showNext}
            style={{
              position: "absolute",
              right: 20,
              top: "50%",
            }}
            className={` backdrop-blur-sm ${!darkMode
                ? "bg-[rgba(245,245,245,0.9)]  shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
                : "bg-[#00000052]  shadow-[0_0_8px_rgba(0,255,255,0.6)]"
              } absolute top-6 right-6 p-2 w-10 h-10 rounded-full transition-opacity hover:duration-300 flex items-center justify-center flex-col text-xl font-semibold group `}
            aria-label="next image"
          >
            <NavigateNextIcon />
          </button>
        </div>
      )}

      <Box sx={{ width: "100%", p: 1,borderRadius: 5, border:"1px solid rgba(255,255,255,0.4)", display:"flex",justifyContent:"center",alignItems:"center",mb:4 }}>
        <MuiMasonry columns={columns} spacing={2}>
          {items.map((item, index) => {
            const size = imageSizes[index] || { width: 400, height: 300 };
            const paddingTop = (size.height / size.width) * 100; // 255keeps correct aspect ratio

            return (
              <Box
                key={item.id}
                data-key={item.id}
                ref={(el) => (itemRefs.current[index] = el)}
                onClick={() => openModalBox(item, index)}
                onMouseEnter={(e) => handleMouseEnter(item.id, e.currentTarget)}
                onMouseLeave={(e) => handleMouseLeave(item.id, e.currentTarget)}
                sx={{
                  borderRadius: "10px",
                  overflow: "hidden",
                  cursor: "pointer",
                  boxShadow: "0px 10px 50px -10px rgba(0,0,0,0.2)",
                  transformOrigin: "center center",
                }}
              >
                {/* paddingTop trick to maintain aspect ratio */}
                <Box
                  sx={{
                    width: "100%",
                    paddingTop: `${paddingTop}%`,
                    backgroundImage: `url(${item.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "10px",
                  }}
                />
                {colorShiftOnHover && (
                  <Box
                    className="color-overlay"
                    sx={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "10px",
                      background: "linear-gradient(to top right, rgba(236,72,153,0.5), rgba(14,165,233,0.5))",
                      opacity: 0,
                      pointerEvents: "none",
                    }}
                  />
                )}
              </Box>
            );
          })}
        </MuiMasonry>
      </Box>
    </>
  );
}
