import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    next,
    postgres,
    cplusplus,
    c,
    drdo,
    dps,
    wloo,
    pacman,

    isight,
    memorify,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "C",
        icon: c,
    },
    {
        name: "C++",
        icon: cplusplus,
    },
    {
        name: "PostgreSQL",
        icon: postgres,
    },
    {
        name: "NextJs",
        icon: next,
    },
    {
        name: "Figma",
        icon: figma,
    },

];

const experiences = [
    {
        title: "Research Scholar",
        company_name: "University of Waterloo, Canada (MITACS-GRI)",
        icon: wloo,
        iconBg: "#383E56",
        date: "June 2023 - August 2023",
        points: [
            "Worked on a project focused on mitigating spoilers in social media platforms. This experience enhanced my understanding of user-centered research methodologies, survey design and data analysis.",
            "Developed proficiency with Figma for UI and IxD, and advanced my interaction design skills. This experience fueled my growth in frontend development and user experience optimization, including expertise in qualitative and quantitative research, prototyping, and user feedback analysis.",
        ],
    },
    {
        title: "Software Development Engineering Intern",
        company_name: "DigitalSchmeide Bayern, Munich",
        icon: dps,
        iconBg: "#E6DEDD",
        date: "May 2022 - August 2022",
        points: [
            "Created a platform for the employees of German Ministries to ease their communication processes and ease their networking.",
            'Worked in a team full of Product Managers, Designers and AI engineers with a lot of interesting technologies in an Agile Methodology like ReactJs, Redux, NodeJs, Material-UI, ExpressJS, PostgressSQL, Github Workflow.',
            "Also conducted user interviews and did a plethora of user research.",
        ],
    },
    {
        title: "Researcher",
        company_name: "Defense Research and Development Organization of India (DRDO)",
        icon: drdo,
        iconBg: "#383E56",
        date: "June 2021 - December 2021",
        points: [
            "Worked on a lot of interesting domains like Quantum Computing, Internet of Behavior, Cryptography, Sentiment Analysis etc.",
            "Sent weekly reports on the different algorithms implemented (mostly in Python) and findings from different research articles read from the technological areas allocated and formed ideas on how they could be used for strengthening the nation's security.",
        ],
    },

];

const testimonials = [
    {
        testimonial:
            "Kartik is a joy to work with. He is hardworking and persistent, making sure to deliver the work assigned to him completely and on time. When there are things he doesn’t know how to do yet, he is eager to learn and is fast on the pickup. Aside from his technical skills, he also has excellent soft skills and communications. He deals with issues and provides constructive feedback tactfully, all while maintaining a positive outlook. Kartik is an indispensable team player — having seen his work ethic and skills, any software team will be lucky to have Kartik on the team. ",
        name: "Kirsten Hipolito",
        designation: "Analytics Engineer",
        company: "Feld M",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "During a three-month fellowship, I had the opportunity to work with Kartik as his product manager. In the team, he took a lot of initiative and responsibility and thus decisively advanced the product. He also transferred his great motivation and persistence to the others, helping people with their issues, technical or design. He has the ability to explain complex technical topics in such a way that they can be understood even without SE background. It has been an honor to work with Kartik, and I wish him nothing but success on his future endavours.",
        name: "Jennifer Fetscher",
        designation: "Product Manager",
        company: "Koorvi",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },

];

const projects = [
    {
        name: "Memorify",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "ReactJs",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "Material UI",
                color: "pink-text-gradient",
            },
        ],
        image: memorify,
        sourceCodeLink: "https://github.com/KartikChinda/Memorify",
    },
    {
        name: "Voice automated Pacman game",
        description:
            "A fully functioning Pacman game, which can be played using voice commands, made with the help of ALAN AI, Vanilla JS, HTML and CSS.",
        tags: [
            {
                name: "javascript",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "ALAN AI",
                color: "pink-text-gradient",
            },
        ],
        image: pacman,
        sourceCodeLink: "https://github.com/KartikChinda/PacMan_VoiceAutomated",
    },
    {
        name: "iSight",
        description:
            "A payment system made specifically keeping the interests of the visually impaired community in mind.",
        tags: [
            {
                name: "MERN stack",
                color: "blue-text-gradient",
            },
            {
                name: "WebSpeech API",
                color: "green-text-gradient",
            },
            {
                name: "HTML QR5 Scanner",
                color: "pink-text-gradient",
            },
        ],
        image: isight,
        sourceCodeLink: "https://github.com/KartikChinda/iSight",
    },
];

export { services, technologies, experiences, testimonials, projects };