const portfolioData = [
    {
        id: 1,
        title: "Home Page Data",
        // Skills Data
        data: [{
            id: 1,
            title: "Skills",
            skills: {
                name: "React JS",
                iconsmall: "react",
                iconlarge: "react",
            }
        },
        //About Me Data Home Page
        {
            id: 2,
            title: "About Me",
            aboutme: {
                company: "",
                role: "",
                duration: "",
                description: "",
                location:"",
                locationlink:""
                
            }
        },

        // Projects in Home Page
        {
            id: 3,
            title: "Projects",
            projects: [
                {
                    projectId: 1,
                    projectName: "",
                    projectDesc: "",
                    projectStacks: [],
                    projectLink: "",
                    projectCaseStudyLink: "",

                },
                {
                    projectId: 1,
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
        data:[
            {
                profile:{
                    pic:"",
                    aboutmeparagraph:"",
                    description:"",
                    hobbies:[],
                    strength:[],
                },
                experience:[
                    {
                        id:1,
                        company:"",
                        role:"",
                        logo:"",
                        location:"",
                        duration:"",
                        certificateLink:"",
                        description:"",
                        responsibilities:[],
                         locationlink:""
                    },
                    {
                        id:2,
                        company:"",
                        role:"",
                        logo:"",
                        location:"",
                         locationlink:"",
                        duration:"",
                        certificateLink:"",
                        description:"",
                        responsibilities:[]
                    },
                ]
                
            }
        ]

    },
    {
        id: 3,
        title: "Projects Page Data",
        data:{
            professinalprojects:[
                {
                    
                }
            ],
        }
    }
]
export default portfolioData