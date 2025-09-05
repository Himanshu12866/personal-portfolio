import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const followerRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    let xp = 0,
      yp = 0,
      xpDot = 0,
      ypDot = 0,
      mouseX = 0,
      mouseY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.pageX;
      mouseY = e.pageY;
    };

    document.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      // Big follower
      xp += (mouseX - xp) / 15;
      yp += (mouseY - yp) / 15;

      if (followerRef.current) {
        followerRef.current.style.left = xp + "px";
        followerRef.current.style.top = yp + "px";
      }

      // Small dot
      xpDot += (mouseX - xpDot) / 25;
      ypDot += (mouseY - ypDot) / 25;

      if (dotRef.current) {
        dotRef.current.style.left = xpDot + "px";
        dotRef.current.style.top = ypDot + "px";
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
  ref={followerRef}
  className="cursorFollower"
  style={{
    position: "absolute",
    width: "40px",
    height: "40px",
    border: "2px solid #00f0ff", // neon cyan border
    borderRadius: "50%",
    pointerEvents: "none",
    transform: "translate(-50%, -50%)",
    zIndex:1,
    boxShadow:
      "0 0 10px #00f0ff, 0 0 20px #00f0ff, 0 0 40px #00f0ff, 0 0 80px #00f0ff", // neon glow
  }}
></div>

<div
  ref={dotRef}
  className="cursorFollowerDot"
  style={{
    position: "absolute",
    width: "8px", zIndex:1,
    height: "8px",
    background: "#00f0ff", // neon pink dot
    borderRadius: "50%",
    pointerEvents: "none",
    transform: "translate(-50%, -50%)",
    boxShadow:
      "0 0 5px #00f0ff, 0 0 10px #00f0ff, 0 0 20px #00f0ff", // glowing center
  }}
></div>

    </>
  );
};

export default CustomCursor;
// 