// import React from 'react'
// // import { gsap } from "gsap";
// import nodejs from "../../assets/icons_logos/icons8-nodejs-48.png";
// import express from "../../assets/icons_logos/icons8-express-js-50.png";
// import mongodb from "../../assets/icons_logos/icons8-mongodb-48.png";
// import tailwind from "../../assets/icons_logos/icons8-tailwind-css-48.png";
// import react from "../../assets/icons_logos/icons8-react-60.png"
// import css from "../../assets/icons_logos/icons8-css-48.png";
// import javascript from "../../assets/icons_logos/icons8-javascript-48.png";
import postman from "../../assets/icons_logos/postman_48.png";
import gcp from "../../assets/icons_logos/icons8-google-cloud-48.png";
// import mui from "../../assets/icons_logos/icons8-material-ui-48.png";
import git from "../../assets/icons_logos/icons8-git-48.png";
import sass from "../../assets/icons_logos/icons8-sass-48.png"
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const SkillsCircles = () => {
    const circleRef = useRef(null);

    const imageURLs = [
        sass, git, gcp, postman
    ];

    useEffect(() => {
        const circle = circleRef.current;
        const radius = circle.offsetWidth / 2;
        const angleIncrement = (Math.PI * 2) / imageURLs.length;

        // place images dynamically
        const images = imageURLs.map((url, i) => {
            const img = document.createElement("img");
            const angle = angleIncrement * i;

            gsap.set(img, {
                attr: { src: url },
                position: "absolute",
                top: 0,
                left: 0,
                xPercent: -50,
                yPercent: -50,
                transformOrigin: "50% 50%",
                x: radius + Math.cos(angle) * radius,
                y: radius + Math.sin(angle) * radius
            });

            circle.appendChild(img);
            return img;
        });

        // spin animation
        const spin = gsap.timeline({
            repeat: -1,
            defaults: { duration: 4, ease: "none" }
        });

        spin.to(circle, { rotation: 360 }).to(images, { rotation: -360 }, 0);

        return () => {
            spin.kill();
            circle.innerHTML = "";
        };
    }, []);
    return (
        <div
            ref={circleRef}
            className="main-circle"
            style={{
                position: "relative",
                width: "300px",
                height: "300px",
                borderRadius: "50%",
                margin: "50px auto"
            }}
        >
        </div>
    );
};

export default SkillsCircles;
