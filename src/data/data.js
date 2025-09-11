const portfolioData = [
    // Skills Data and icons 
    {
        id: 0,
        title: "Skills",
        skills: {
            name: "React JS",
            iconsmall: "react",
            iconlarge: "react",
        }
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
                    company: "",
                    role: "",
                    duration: "",
                    description: "",
                    location: "",
                    locationlink: ""

                }
            },

            // Projects in Home Page
            {
                id: 12,
                title: "Projects",
                projects: [
                    {
                        projectId: 121,
                        projectName: "",
                        projectDesc: "",
                        projectStacks: [],
                        projectLink: "",
                        projectCaseStudyLink: "",

                    },
                    {
                        projectId: 122,
                        projectName: "",
                        projectDesc: "",
                        projectStacks: [],
                        projectLink: "",
                        projectCaseStudyLink: "",
                    },
                ]
            },
        ],
    },
    //Home Page Data completed

    // About Page Data

    {
        id: 2,
        title: "About Page Data",
        data: [
            {
                profile: {
                    pic: "",
                    aboutmeparagraph: "",
                    description: "",
                    hobbies: [],
                    strength: [],
                },
                experience: [
                    {
                        id: 1,
                        company: "",
                        role: "",
                        logo: "",
                        location: "",
                        duration: "",
                        certificateLink: "",
                        description: "",
                        responsibilities: [],
                        locationlink: ""
                    },
                    {
                        id: 2,
                        company: "",
                        role: "",
                        logo: "",
                        location: "",
                        locationlink: "",
                        duration: "",
                        certificateLink: "",
                        description: "",
                        responsibilities: []
                    },
                ]

            }
        ]

    },
    {
        id: 3,
        title: "Projects Page Data",
        data: {
            professinalprojects: [
                {

                }
            ],
        }
    }
]
export default portfolioData