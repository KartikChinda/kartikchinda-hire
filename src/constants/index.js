import {

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
    pixel,
    color,
    sketch,
    drdo,
    dps,
    wloo,
    pacman,
    isight,
    memorify,
    trpc,

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
        name: "tRPC",
        icon: trpc,
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
        name: "SketchTogether",
        description:
            "SketchTogether could be the game you play with a friend to pass the time, or the ultimate collaborative sketching experience. Unleash your creativity and bond with friends as you co-create on a shared sketchboard. The rules are simple, so come on, unleash your inner talent and transform doodling into an engaging and fun experience. Dive into the joy of artistic collaboration, and have fun.",
        tags: [
            {
                name: "NextJs",
            },
            {
                name: "CanvasAPI",
            },
            {
                name: "Tailwind CSS",
            },
        ],
        image: sketch,
        sourceCodeLink: "https://github.com/KartikChinda/sketchTogether",
        websiteLink: "https://sketch-together.vercel.app/",
    },
    {
        name: "PixelPlex",
        description:
            "A fully functioning video conferencing app, PixelPlex revolutionizes your virtual interactions with seamless, high-quality video conferencing, crystal-clear communication and collaboration, intuitive features and a user-friendly interface. Schedule meetings, record meetings, and do so much more on PixelPlex, and experience the future of virtual engagement.",
        tags: [
            {
                name: "NextJs 14",

            },
            {
                name: "Clerk",

            },
            {
                name: "Stream",

            },
            {
                name: "Tailwind CSS",

            },
            {
                name: "Shadcn-ui",

            },
        ],
        image: pixel,
        sourceCodeLink: "https://github.com/KartikChinda/PacMan_VoiceAutomated",
        websiteLink: "https://pixel-plex.vercel.app/"
    },
    {
        name: "ColorMyApp",
        description:
            "Still searching for a color palettes for your next project? Look no further, for your search ends here. Choose from a stunning range of palettes uploaded by people all over the world, preview them on a sample site before deciding the final palette for your work. Not only this, if you have a gorgeous color palette, share it with the rest of the world to see.",
        tags: [
            {
                name: "NextJs 14",

            },
            {
                name: "Tailwind CSS",

            },


        ],
        image: color,
        sourceCodeLink: "https://github.com/KartikChinda/colormyapp",
        websiteLink: "https://colormyapp.vercel.app/"
    },
];

export { technologies, experiences, testimonials, projects };