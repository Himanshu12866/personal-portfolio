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
                name: "Illustrator",
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
                            "Developed product listing, cart, and checkout features",
                            "Implemented live inventory tracking with MongoDB",
                            "Integrated Razorpay for payments",
                            "Built admin dashboard for CRUD operations",
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
                            "Designed responsive UI with React & Tailwind CSS",
                            "Integrated JWT-based user, doctor & admin login",
                            "Integrated JWT-based user, doctor & admin login",
                            "Developed admin panel for managing doctors & users",
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
            // Project 
            {
                category: "Professional",
                tag: "in progress / underway",
                slug: "livvon-customer-portal",
                techUsed: [""],
                header: {
                    title: "Livvon Comforts – E-Commerce Web Application",
                    description: "Livvon Comforts is a modern e-commerce web application designed to provide customers with a seamless shopping experience for mattresses, pillows, and related comfort products. Inspired by leading platforms like Amazon and Flipkart, the project focuses on delivering a clean, reliable, and user-friendly interface where customers can explore, purchase, and manage their comfort essentials with ease.",
                    duration: "Navember - May-2025",
                    role: "Frontend Developer",
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

                },
                myContribution: {
                    title: "My Contribution",
                    myrole: [
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
                    title: "Visual Gallery",
                    screenShots: [{
                        title: "",
                        image: "",
                    },],
                },
                navigation: {
                    demo: "https://livoncustomer-dev.novatales.com/",
                    repo: ""
                },
                image: livvon_customer,
                text: " Livvon Customer Panel",
            },
            {
                category: "Professional",
                tag: "in progress / underway",
                slug: "livvon-admin-portal",
                techUsed: ["React", "Tailwind CSS", "Context API", "Node.js", "Express", "MongoDB", "JWT", "OTP Authentication"],
                header: {
                    title: "Livvon Admin Portal – Centralized Management System",
                    description: "The Livvon Admin Portal is a centralized application built to manage the Livvon Customer Platform. It provides administrators with powerful tools to maintain products, track orders, and manage customer data efficiently. Alongside these core operations, the portal also features secure OTP-based login and a role-based access system (Superadmin, Admin, Member) to ensure structured control and smooth collaboration within the team.",
                    duration: "April - July 2025",
                    role: "Full-Stack Developer",
                },
                context: {
                    title: "Problem Statement / Intention",
                    goals: [
                        "Provide a secure authentication system with OTP-based login and registration.",
                        "Enable admins to manage customers, orders, products, and admin accounts seamlessly.",
                        "Implement role-based access with three levels – Superadmin, Admin, and Member.",
                        "Ensure data consistency and control while giving all roles visibility into system operations.",
                        "Create a centralized admin portal to simplify backend management of the customer platform."
                    ]
                },
                process: {
                    title: "Process",
                    challenge: [
                        "Designing a scalable role-based access system with clear boundaries between Superadmin, Admin, and Member.",
                        "Integrating OTP verification for secure login and registration.",
                        "Handling CRUD operations for products, orders, and customer data with real-time updates.",
                        "Ensuring smooth user experience while managing large datasets across different modules.",
                        "Maintaining security while allowing multiple levels of access to the same data."
                    ],
                },
                myContribution: {
                    title: "My Contribution",
                    myrole: [
                        "Designed and implemented OTP-based login and registration system for secure access.",
                        "Developed role-based authentication and authorization (Superadmin / Admin / Member).",
                        "Built CRUD functionality for products, customers, and orders.",
                        "Implemented order details module with dynamic tracking of status and customer information.",
                        "Designed reusable UI components in React with Tailwind CSS for forms, tables, and modals.",
                        "Created admin management system where Superadmin can control Admins and Members, and Admins can control only Members.",
                    ]
                },
                outcomes: {
                    title: "Outcomes",
                    results: [
                        "Delivered a secure and functional admin portal with OTP authentication.",
                        "Implemented full role-based control ensuring data security and structured operations.",
                        "Simplified backend management with complete CRUD functionality for customers, orders, and products.",
                        "Enabled hierarchical control: Superadmin > Admin > Member with proper restrictions.",
                        "Enhanced technical skills in authentication, authorization, and role-based system design."
                    ]
                },

                visualgallery: {
                    title: "Visual Gallery",
                    screenShots: [{
                        title: "",
                        image: "",
                    },],
                },
                navigation: {
                    demo: "https://livoncustomer-dev.novatales.com/",
                    repo: ""
                },
                image: livvon_admin,
                text: " Livvon Admin Panel",
            },
            {
                category: "Professional",
                tag: "live",
                slug: "magaid-hospitals",
                techUsed: ["React", "Tailwind CSS", "EmailJS / Form Handling", "Vercel"],
                header: {
                    title: "MagAid Hospitals – Official Website & Appointment Booking",
                    description: "MagAid Hospitals website is a static yet fully functional platform designed to showcase the hospital’s services, share essential information, and allow patients to book appointments seamlessly. With a clean, modern, and responsive design, the website ensures visitors can easily explore hospital details, access service information, and schedule consultations using the integrated appointment form.",
                    duration: "June – August 2025",
                    role: "Frontend Developer",
                },
                context: {
                    title: "Problem Statement / Intention",
                    goals: [
                        "Provide MagAid Hospitals with a professional and trustworthy online presence.",
                        "Showcase medical services clearly for easy patient understanding.",
                        "Enable patients to book appointments through a user-friendly form.",
                        "Ensure the website is responsive, lightweight, and accessible.",
                        "Create a scalable structure for future updates and expansions."
                    ]
                },
                process: {
                    title: "Process",
                    challenge: [
                        "Designing a professional healthcare website that builds trust while staying simple to navigate.",
                        "Implementing responsive layouts for smooth experiences across devices.",
                        "Integrating an appointment booking form with validation and submission handling.",
                        "Balancing modern aesthetics with accessibility and performance requirements."
                    ],
                },
                myContribution: {
                    title: "My Contribution",
                    myrole: [
                        "Designed and developed the website using React and Tailwind CSS.",
                        "Structured pages for hospital overview, services, and contact details.",
                        "Implemented an appointment booking form with validation and EmailJS integration.",
                        "Optimized the design for responsiveness and accessibility.",
                        "Deployed the website on Vercel, ensuring high availability and smooth performance."
                    ]
                },
                outcomes: {
                    title: "Outcomes",
                    results: [
                        "Launched the official MagAid Hospitals website, now live for patients and visitors.",
                        "Delivered a seamless appointment booking experience through the online form.",
                        "Enhanced the hospital’s digital presence with a clean, professional interface.",
                        "Improved accessibility and performance for better patient engagement.",
                        "Gained hands-on experience in static site deployment and form submission workflows."
                    ]
                },
                visualgallery: {
                    title: "Visual Gallery",
                    screenShots: [{
                        title: "",
                        image: "",
                    },],
                },
                navigation: {
                    demo: "https://www.magnaid.com/",
                    repo: ""
                },
                image: magnaid,
                text: " MagnAid Hospitals",
            },
            {
                category: "Professional",
                tag: "live",
                slug: "conceiva-fertility",
                techUsed: ["React", "Tailwind CSS", "EmailJS / Form Handling", "Vercel"],
                header: {
                    title: "Conceiva Fertility – Official Website & Appointment Booking",
                    description: "Conceiva Fertility website is a static, responsive platform built to showcase specialized fertility care services for both men and women. The website highlights treatments, facilities, and expertise while providing patients with a seamless way to book appointments online through an integrated form. Its clean, user-friendly design ensures patients can quickly access vital information and connect with the clinic.",
                    duration: "April - May 2025",
                    role: "Frontend Developer",
                },
                context: {
                    title: "Problem Statement / Intention",
                    goals: [
                        "Provide Conceiva Fertility with a professional digital presence to build trust.",
                        "Showcase fertility services for both men and women in a clear, accessible way.",
                        "Allow patients to easily book consultations using an appointment form.",
                        "Ensure the website is responsive, lightweight, and user-friendly.",
                        "Create a scalable static design for future service or content additions."
                    ]
                },
                process: {
                    title: "Process",
                    challenge: [
                        "Designing a healthcare website that is sensitive, trustworthy, and professional.",
                        "Highlighting both male and female fertility services without overwhelming the user.",
                        "Building a responsive UI to work seamlessly across desktop and mobile devices.",
                        "Integrating an appointment booking form with proper validation and submission flow."
                    ],
                },
                myContribution: {
                    title: "My Contribution",
                    myrole: [
                        "Developed the website using React and Tailwind CSS with a mobile-first approach.",
                        "Designed clear sections for fertility services, treatments, and contact information.",
                        "Implemented an appointment booking form with EmailJS integration.",
                        "Ensured accessibility and responsive layouts for all devices.",
                        "Deployed the website live on Vercel with smooth performance and fast load times."
                    ]
                },
                outcomes: {
                    title: "Outcomes",
                    results: [
                        "Launched the official Conceiva Fertility website, strengthening its digital presence.",
                        "Provided patients with an easy-to-use platform to explore fertility services.",
                        "Delivered a secure and seamless online appointment booking experience.",
                        "Improved accessibility and trustworthiness with a professional healthcare-focused UI.",
                        "Enhanced skills in building sensitive healthcare-focused static sites with form handling."
                    ]
                },
                visualgallery: {
                    title: "Visual Gallery",
                    screenShots: [{
                        title: "",
                        image: "",
                    },],
                },
                navigation: {
                    demo: "https://conceivafertility.com/",
                    repo: ""
                },
                image: conceiva,
                text: " Conceiva Fertility",
            },

        ],
    },
    
    // Project page data and case study pages data completed
];
export default portfolioData;
