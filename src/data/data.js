// Tech icons small size

import html from "../assets/icons_logos/icons8-html-5-48.png";
import css from "../assets/icons_logos/icons8-css-48.png";
import javascript from "../assets/icons_logos/icons8-javascript-48.png";
import reactjs from "../assets/icons_logos/icons8-react-48.png";
import nodejs from "../assets/icons_logos/icons8-nodejs-48.png";
import express from "../assets/icons_logos/icons8-express-js-50.png";
import mongodb from "../assets/icons_logos/icons8-mongodb-48.png";
import tailwind from "../assets/icons_logos/icons8-tailwind-css-48.png";
import sass from "../assets/icons_logos/icons8-sass-48.png";
import gcp from "../assets/icons_logos/icons8-google-cloud-48.png";
import mui from "../assets/icons_logos/icons8-material-ui-48.png";
import git from "../assets/icons_logos/icons8-git-48.png";
import adobe_ai from "../assets/icons_logos/icons8-adobe-illustrator-48.png";
import aws_light from "../assets/icons_logos/aws_white.png";
import bootstrap from "../assets/icons_logos/icons8-bootstrap-48.png";
//Tech icons large size
import javascript_large from "../assets/images/javascript.png";
import css_large from "../assets/images/icons8-css-256.png";
import html_large from "../assets/images/html.png";
import tailwind_large from "../assets/images/tailwind-css.png";
import bootstrap_large from "../assets/images/icons8-bootstrap-256.png";
import sass_large from "../assets/images/icons8-sass-256.png";
import mui_large from "../assets/images/icons8-material-ui-256.png";
import nodejs_large from "../assets/images/nodejs.png";
import expressdark_large from "../assets/images/icons8-express-js-256.png";
import mongodb_large from "../assets/images/mongodb (1).png";
import git_large from "../assets/images/git.png";
import postman_large from "../assets/icons_logos/postman_256.png";
import gcp_large from "../assets/images/icons8-google-cloud-256.png";
import aws_large from "../assets/images/icons8-aws-256.png";
import adobe_large from "../assets/images/adobe-illustrator.png";
import reactlogo from "../assets/images/react.png";
//company logos
import novatales from "../assets/icons_logos/novatales.png"
import naresh from "../assets/icons_logos/naresh-it-logo2.png"
// projects images

import livvon_customer from "../assets/images/livvon.png"
import livvon_admin from "../assets/images/livvon_admin.png"
import magnaid from "../assets/images/magnaid.png"
import conceiva from "../assets/images/conceiva.png"
import cdc_usa from "../assets/images/3274.jpg"

const portfolioData = [
    // Skills Data and icons
    {
        id: 0,
        title: "Skills",
        icons: [
            {
                name: "HTML5",
                iconsmall: html,
                iconlarge: html_large,
                category: "frontend",
            },
            {
                name: "CSS3",
                iconsmall: css,
                iconlarge: css_large,
                category: "frontend",
            },
            {
                name: "JavaScript",
                iconsmall: javascript,
                iconlarge: javascript_large,
                category: "frontend",
            },
            {
                name: "React JS",
                iconsmall: reactjs,
                iconlarge: reactlogo,
                category: "frontend",
            },
            {
                name: "Node.js",
                iconsmall: nodejs,
                iconlarge: nodejs_large,
                category: "backend",
            },
            {
                name: "Express.js",
                iconsmall: express,
                iconlarge: expressdark_large,
                category: "backend",
            },

            {
                name: "MongoDB",
                iconsmall: mongodb,
                iconlarge: mongodb_large,
                category: "backend",
            },
            {
                name: "Tailwind CSS",
                iconsmall: tailwind,
                iconlarge: tailwind_large,
                category: "frontend",
            },
            {
                name: "Sass",
                iconsmall: sass,
                iconlarge: sass_large,
                category: "frontend",
            },
            {
                name: "Material UI",
                iconsmall: mui,
                iconlarge: mui_large,
                category: "frontend",
            },
            {
                name: "Bootstrap",
                iconsmall: bootstrap, // not imported small version in your code
                iconlarge: bootstrap_large,
                category: "frontend",
            },
            {
                name: "Google Cloud",
                iconsmall: gcp,
                iconlarge: gcp_large,
                category: "tools",
            },
            {
                name: "AWS",
                iconsmall: aws_light,
                iconlarge: aws_large,
                category: "tools",
            },
            {
                name: "Git",
                iconsmall: git,
                iconlarge: git_large,
                category: "backend",
            },

            {
                name: "Postman",
                iconsmall: postman_large,
                iconlarge: postman_large,
                category: "tools",
            },
            {
                name: "Adobe Illustrator",
                iconsmall: adobe_ai,
                iconlarge: adobe_large,
                category: "tools",
            },
        ],
    },
    {
        id: 1,
        title: "Home Page Data",

        data: [
            //About Me Data Home Page
            {
                id: 11,
                title: "About Me",
                aboutme: {
                    company: "NovaTales Media LLP",
                    role: "Frontend Developer",
                    duration: "November 2024 – Present",
                    description:
                        "I’m a passionate Frontend Developer with hands-on experience in building responsive and dynamic web applications. Skilled in React, JavaScript, and modern UI/UX practices, I love transforming ideas into smooth digital experiences.",
                    descriptiontwo:
                        "Beyond coding, I'm always curious about learning and believe in building products that not only work but also connect with people. I value teamwork and love exploring new technologies.",
                    location: "Hyderabad, Telangana",
                    locationlink: "",
                    companyLink: "https://novatales.com/",
                },
            },

            // Projects in Home Page
            {
                id: 12,
                title: "Projects",
                projects: [
                    {
                        projectType: "Company Porject",
                        projectId: 121,
                        projectName: "Livvon Comforts",
                        projectDesc:
                            "A real-time e-commerce web app like Amazon with product management, cart, checkout, payment, and live inventory updates & Admin control.",
                        projectStacks: [
                            "ReactJS",
                            "NodeJS",
                            "Material UI",
                            "MongoDB",
                            "Tailwind CSS",
                        ],
                        projectLink: "",
                        projectCaseStudyLink: "",
                        myContribution: [
                            "Developed product listing, cart, and checkout features.",
                            "Implemented live inventory tracking with MongoDB.",
                            "Integrated Razorpay for payments.",
                            "Built admin dashboard for CRUD operations.",
                        ],
                    },
                    {
                        projectId: 122, projectType: "Personal Porject",
                        projectName: "Dr. Booking Web App",
                        projectDesc:
                            "A platform where patients can register, book appointments, make payments, and users/doctors/admin can manage appointments and profiles.",
                        projectStacks: [
                            "ReactJS",
                            "NodeJS",
                            "Material UI",
                            "MongoDB",
                            "Tailwind CSS",
                        ],
                        projectLink: "",
                        projectCaseStudyLink: "",
                        myContribution: [
                            "Designed responsive UI with React & Tailwind CSS.",
                            "Integrated JWT-based user, doctor & admin login.",
                            "Integrated JWT-based user, doctor & admin login.",
                            "Developed admin panel for managing doctors & users.",
                        ],
                    },
                ],
            },
        ],
    },
    //Home Page Data completed

    // About Page Data

    {
        id: 2,
        title: "About Page Data",
        data:
        {
            profile: {
                pic: "",
                aboutmeparagraph:
                    "Currently, I'm a Frontend developer with 1+ year of experience building responsive, high-performance web apps.",
                description:
                    "I'm Himanshu, a professionally trained MERN stack developer with hands-on experience in React JS and modern web technologies. I specialize in creating scalable, user-friendly interfaces and love building digital products that solve real problems. With 1+ year of professional experience, I thrive in dynamic environments and enjoy collaborating with teams to bring ideas to life.",
                hobbies: [
                    "Reading books – especially tech & self-growth related",
                    "Listening to music & exploring new genres",
                    "Staying updated on global trends & innovations",
                    "Engaging in political talks & discussions to explore diverse perspectives",
                ],
                strength: [
                    "Quick learner & adaptive",
                    "Problem-solving mindset",
                    "Detail-oriented UI design approach",
                    "Strong foundation in React & JavaScript",
                ],
            },
            experience: [
                {
                    id: 1,
                    company: "NovaTales Media LLP",
                    role: "Frontend Developer",
                    logo: novatales,
                    location: "Hyderabad, Telangana",
                    duration: "November 2024 – Present",
                    description:
                        "As a Frontend Developer, I took ownership of crafting engaging and high-performing user interfaces that not only aligned with brand goals but also elevated the overall digital experience. My role involved building reusable UI components, optimizing performance, collaborating cross-functionally with design and marketing teams, and ensuring seamless integration of campaigns into web platforms. Beyond just coding screens, I focused on delivering user-centric, accessible, and scalable solutions that directly impacted engagement and retention.",
                    responsibilities: [
                        "Developed responsive and interactive UI components using React, ensuring smooth cross-device compatibility",
                        "Enhanced site performance and accessibility, improving engagement and user retention",
                        "Implemented API integrations and optimized state management for seamless data flow",
                        "Contributed to backend development, building and refining RESTful APIs in Node.js",
                        "Worked on database operations (MongoDB) for secure storage, queries, and data consistency",
                        "Collaborated with design and marketing teams to deliver scalable, campaign-ready features",
                    ],
                    locationlink: "",
                    companyLink: "https://novatales.com/",
                },
            ],
            certificate: [
                {
                    id: 1,
                    company: "Naresh IT",
                    role: "UI Full Stack With ReactJS",
                    logo: naresh,
                    location: "Hyderabad, Telangana",
                    duration: "April - August 2024",
                    description:
                        "As a trainee in UI Full Stack with ReactJS, I worked on building responsive web applications using the MERN stack. My role involved developing reusable UI components, implementing APIs, managing databases, and enhancing overall performance and scalability of applications.",
                    responsibilities: [
                        "Developed responsive and interactive UI components with ReactJS for cross-device compatibility",
                        "Implemented RESTful APIs using Node.js and Express.js for backend communication",
                        "Designed and managed MongoDB databases for secure data handling",
                        "Enhanced site performance and optimized state management for seamless user experience",
                        "Collaborated on projects simulating real-world applications using Git & GitHub",
                        "Performed thorough testing and debugging to ensure application reliability and functionality",
                    ],
                    locationlink: "",
                    companyLink: "https://novatales.com/",
                    certificateName: "UI Full Stack With React",
                    certificateLink: "https://www.linkedin.com/in/himanshumishra17/overlay/1753120822194/single-media-viewer/?profileId=ACoAAEkM3QcBjPvIjOKMhGc660O63MHWeinwVuM"
                },
            ],
        },

    },

    // About Page data completed 

    // Project Page Data and case study pages
    {
        id: 3,
        title: "Projects Page Data",
        data: [
                // Project 2
                {
                    category: "Professional",
                    slug: "livvon-customer-portal",
                    techUsed: [""],
                    header: {
                        title: "Livvon Comforts – E-Commerce Web Application",
                        description: "Livvon Comforts is a modern e-commerce web application designed to provide customers with a seamless shopping experience for mattresses, pillows, and related comfort products. Inspired by leading platforms like Amazon and Flipkart, the project focuses on delivering a clean, reliable, and user-friendly interface where customers can explore, purchase, and manage their comfort essentials with ease.",
                        duration: "Navember 2024 - May-2024",

                    },
                    context: {
                        title: "Problem Statement / Intention",
                        goals: [
                            "Eliminate unnecessary steps in the shopping journey.",
                            "Simplify the interface to avoid confusion and save time.",
                            "Provide a hassle-free shopping experience.",
                            "Enable customers to book products in a straightforward way.",
                            "Deliver a clean experience with no distractions or 'hocus-pocus'."
                        ]
                    },
                    process: {
                        title: "Process",
                        challenge: [
                            "Maintaining consistency across the UI while scaling the project.",
                            "Raw CSS made the codebase hard to manage and less reusable.",
                            "Product filtering experience was clunky and slow."
                        ],
                        myContribution: [
                            "Migrated the UI from raw CSS to Tailwind CSS for scalable and maintainable design.",
                            "Standardized design tokens and improved responsiveness across pages.",
                            "Implemented dynamic category-based product filtering in React.",
                            "Enhanced overall user experience by simplifying browsing and checkout flow."
                        ]
                    },
                    outcomes: {
                        title: "Outcomes",
                        results: [
                            "Delivered a modern, responsive, and scalable UI.",
                            "Improved product discovery with category-based filtering.",
                            "Simplified the shopping journey for customers.",
                            "Enhanced performance and design consistency across the app.",
                            "Gained hands-on experience in migrating large projects to Tailwind CSS."
                        ]
                    },

                    visualgallery: {
                        title: "",
                        screenShots: [{
                            title: "",
                            image: "",
                        },],
                    },
                    navigation: {
                        demo: "",
                        repo: ""
                    },
                    image: cdc_usa,
                    text: " Livvon Admin Panel",
                },
                {
                    category: "Professional",
                    slug: "livvon-admin-panell",
                    techUsed: [""],
                    header: {
                        title: "Livvon Comforts – E-Commerce Web Application",
                        description: "Livvon Comforts is a modern e-commerce web application designed to provide customers with a seamless shopping experience for mattresses, pillows, and related comfort products. Inspired by leading platforms like Amazon and Flipkart, the project focuses on delivering a clean, reliable, and user-friendly interface where customers can explore, purchase, and manage their comfort essentials with ease.",
                        duration: "Navember 2024 - May-2024",

                    },
                    context: {
                        title: "Problem Statement / Intention",
                        goals: [
                            "Eliminate unnecessary steps in the shopping journey.",
                            "Simplify the interface to avoid confusion and save time.",
                            "Provide a hassle-free shopping experience.",
                            "Enable customers to book products in a straightforward way.",
                            "Deliver a clean experience with no distractions or 'hocus-pocus'."
                        ]
                    },
                    process: {
                        title: "Process",
                        challenge: [
                            "Maintaining consistency across the UI while scaling the project.",
                            "Raw CSS made the codebase hard to manage and less reusable.",
                            "Product filtering experience was clunky and slow."
                        ],
                        myContribution: [
                            "Migrated the UI from raw CSS to Tailwind CSS for scalable and maintainable design.",
                            "Standardized design tokens and improved responsiveness across pages.",
                            "Implemented dynamic category-based product filtering in React.",
                            "Enhanced overall user experience by simplifying browsing and checkout flow."
                        ]
                    },
                    outcomes: {
                        title: "Outcomes",
                        results: [
                            "Delivered a modern, responsive, and scalable UI.",
                            "Improved product discovery with category-based filtering.",
                            "Simplified the shopping journey for customers.",
                            "Enhanced performance and design consistency across the app.",
                            "Gained hands-on experience in migrating large projects to Tailwind CSS."
                        ]
                    },

                    visualgallery: {
                        title: "",
                        screenShots: [{
                            title: "",
                            image: "",
                        },],
                    },
                    navigation: {
                        demo: "",
                        repo: ""
                    },
                    image: cdc_usa,
                    text: " Livvon Admin Panel",
                },
                {
                    category: "Professional",
                    slug: "conceiva-fertility",
                    techUsed: [""],
                    header: {
                        title: "Livvon Comforts – E-Commerce Web Application",
                        description: "Livvon Comforts is a modern e-commerce web application designed to provide customers with a seamless shopping experience for mattresses, pillows, and related comfort products. Inspired by leading platforms like Amazon and Flipkart, the project focuses on delivering a clean, reliable, and user-friendly interface where customers can explore, purchase, and manage their comfort essentials with ease.",
                        duration: "Navember 2024 - May-2024",

                    },
                    context: {
                        title: "Problem Statement / Intention",
                        goals: [
                            "Eliminate unnecessary steps in the shopping journey.",
                            "Simplify the interface to avoid confusion and save time.",
                            "Provide a hassle-free shopping experience.",
                            "Enable customers to book products in a straightforward way.",
                            "Deliver a clean experience with no distractions or 'hocus-pocus'."
                        ]
                    },
                    process: {
                        title: "Process",
                        challenge: [
                            "Maintaining consistency across the UI while scaling the project.",
                            "Raw CSS made the codebase hard to manage and less reusable.",
                            "Product filtering experience was clunky and slow."
                        ],
                        myContribution: [
                            "Migrated the UI from raw CSS to Tailwind CSS for scalable and maintainable design.",
                            "Standardized design tokens and improved responsiveness across pages.",
                            "Implemented dynamic category-based product filtering in React.",
                            "Enhanced overall user experience by simplifying browsing and checkout flow."
                        ]
                    },
                    outcomes: {
                        title: "Outcomes",
                        results: [
                            "Delivered a modern, responsive, and scalable UI.",
                            "Improved product discovery with category-based filtering.",
                            "Simplified the shopping journey for customers.",
                            "Enhanced performance and design consistency across the app.",
                            "Gained hands-on experience in migrating large projects to Tailwind CSS."
                        ]
                    },

                    visualgallery: {
                        title: "",
                        screenShots: [{
                            title: "",
                            image: "",
                        },],
                    },
                    navigation: {
                        demo: "",
                        repo: ""
                    },
                    image: cdc_usa,
                    text: " Livvon Admin Panel",
                },
                {
                    category: "Professional",
                    slug: "magnaid-healthcare",
                    techUsed: [""],
                    header: {
                        title: "Livvon Comforts – E-Commerce Web Application",
                        description: "Livvon Comforts is a modern e-commerce web application designed to provide customers with a seamless shopping experience for mattresses, pillows, and related comfort products. Inspired by leading platforms like Amazon and Flipkart, the project focuses on delivering a clean, reliable, and user-friendly interface where customers can explore, purchase, and manage their comfort essentials with ease.",
                        duration: "Navember 2024 - May-2024",

                    },
                    context: {
                        title: "Problem Statement / Intention",
                        goals: [
                            "Eliminate unnecessary steps in the shopping journey.",
                            "Simplify the interface to avoid confusion and save time.",
                            "Provide a hassle-free shopping experience.",
                            "Enable customers to book products in a straightforward way.",
                            "Deliver a clean experience with no distractions or 'hocus-pocus'."
                        ]
                    },
                    process: {
                        title: "Process",
                        challenge: [
                            "Maintaining consistency across the UI while scaling the project.",
                            "Raw CSS made the codebase hard to manage and less reusable.",
                            "Product filtering experience was clunky and slow."
                        ],
                        myContribution: [
                            "Migrated the UI from raw CSS to Tailwind CSS for scalable and maintainable design.",
                            "Standardized design tokens and improved responsiveness across pages.",
                            "Implemented dynamic category-based product filtering in React.",
                            "Enhanced overall user experience by simplifying browsing and checkout flow."
                        ]
                    },
                    outcomes: {
                        title: "Outcomes",
                        results: [
                            "Delivered a modern, responsive, and scalable UI.",
                            "Improved product discovery with category-based filtering.",
                            "Simplified the shopping journey for customers.",
                            "Enhanced performance and design consistency across the app.",
                            "Gained hands-on experience in migrating large projects to Tailwind CSS."
                        ]
                    },

                    visualgallery: {
                        title: "",
                        screenShots: [{
                            title: "",
                            image: "",
                        },],
                    },
                    navigation: {
                        demo: "",
                        repo: ""
                    },
                    image: cdc_usa,
                    text: " Livvon Admin Panel",
                },
            
            ],
    },
    // Project page data and case study pages data completed
];
export default portfolioData;
