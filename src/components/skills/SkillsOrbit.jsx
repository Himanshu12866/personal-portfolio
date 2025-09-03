import React, { useContext } from "react";
import nodejs from "../../assets/icons_logos/icons8-nodejs-48.png";
import express from "../../assets/icons_logos/icons8-express-js-50.png";
import mongodb from "../../assets/icons_logos/icons8-mongodb-48.png";
import tailwind from "../../assets/icons_logos/icons8-tailwind-css-48.png";
import react from "../../assets/icons_logos/icons8-react-60.png"
import css from "../../assets/icons_logos/icons8-css-48.png";
import javascript from "../../assets/icons_logos/icons8-javascript-48.png";
import postman from "../../assets/icons_logos/postman_48.png";
import gcp from "../../assets/icons_logos/icons8-google-cloud-48.png";
import mui from "../../assets/icons_logos/icons8-material-ui-48.png";
import git from "../../assets/icons_logos/icons8-git-48.png";
import sass from "../../assets/icons_logos/icons8-sass-48.png"

import bootstrap from "../../assets/icons_logos/icons8-bootstrap-48.png"
import { AppContext } from "../../context/datacontext";

const SkillsOrbit = () => {
    const { darkMode } = useContext(AppContext)
    const icons = [sass, git, gcp, postman];
    const icons3 = [mui, javascript, css, bootstrap];
    const icons2 = [nodejs, express, mongodb, tailwind];

    return (
        <div
            className={`flex justify-center flex-col gap-24 items-center w-full  px-8`}
        >
            <div className="relative w-[350px] h-[350px] flex items-center justify-center">
                {/* Center */}
                <div className="w-20 h-20 rounded-full flex items-center justify-center z-10">
                    <img
                        src={react}
                        alt="react-logo"
                        className="w-16 h-16"
                        style={{ animation: "spin 10s linear infinite" }}
                    />
                </div>


                {/* Outer Orbit */}
                <div className={`absolute w-[350px] h-[350px] rounded-full border ${darkMode ? 'border-white' : 'border-black'}  animate-spin-slow`}>
                    {icons.map((icon, i) => {
                        const angle = (i / icons.length) * 2 * Math.PI;
                        const orbitRadius = 175;
                        const x = orbitRadius + orbitRadius * Math.cos(angle) - 20;
                        const y = orbitRadius + orbitRadius * Math.sin(angle) - 20;
                        return (
                            <img
                                key={i}
                                src={icon}
                                alt="skill"
                                className="w-10 h-10 absolute"
                                style={{ left: `${x}px`, top: `${y}px` }}
                            />
                        );
                    })}
                </div>

                {/* Middle Orbit (NEW) */}
                <div className={`absolute w-[260px] h-[260px] rounded-full border ${darkMode ? 'border-white' : 'border-black'} animate-spin-slow-reverse`}>
                    {icons3.map((icon, i) => {
                        const angle = (i / icons3.length) * 2 * Math.PI;
                        const orbitRadius = 130;
                        const x = orbitRadius + orbitRadius * Math.cos(angle) - 18;
                        const y = orbitRadius + orbitRadius * Math.sin(angle) - 18;
                        return (
                            <img
                                key={i}
                                src={icon}
                                alt="skill"
                                className="w-9 h-9 absolute"
                                style={{ left: `${x}px`, top: `${y}px` }}
                            />
                        );
                    })}
                </div>

                {/* Inner Orbit */}
                <div className={`absolute w-[174px] h-[174px] rounded-full border ${darkMode ? 'border-white' : 'border-black'} animate-spin-slow`}>
                    {icons2.map((icon, i) => {
                        const angle = (i / icons2.length) * 2 * Math.PI;
                        const orbitRadius = 84;
                        const x = orbitRadius + orbitRadius * Math.cos(angle) - 13;
                        const y = orbitRadius + orbitRadius * Math.sin(angle) - 13;
                        return (
                            <img
                                key={i}
                                src={icon}
                                alt="skill"
                                className="w-8 h-8 absolute"
                                style={{ left: `${x}px`, top: `${y}px` }}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default SkillsOrbit
    ;
