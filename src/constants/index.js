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
  // redux,
  // tailwind,
  nodejs,
  mongodb,
  git,
  // figma,
  docker,
  rishu,
  project1,
  project2,
  // jobit,
  // tripguide,
  threejs,
  android,
  cloud,
  iot,
  finlandlabs,
  wedmist,
  android1,
  // aws,
  c,
  cloud1,
  java,
  nextjs,
  python,
  // svelte,
  skarif,
  project3,
  project4,
  project5,

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
    title: "Android Developer",
    icon: android,
  },
  {
    title: "React / Next Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "IOT Developer",
    icon: iot,
  },
  {
    title: "ML/AI Model Developer",
    icon: creator,
  },
  {
    title: "Google Cloud Practitioner",
    icon: cloud,
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
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  {
    name: "Android",
    icon: android1,
  },
  // {
  //   name: "aws",
  //   icon: aws,
  // },
  {
    name: "c",
    icon: c,
  },
  {
    name: "google cloud",
    icon: cloud1,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "nextjs",
    icon: nextjs,
  },
  {
    name: "python",
    icon: python,
  },
  // {
  //   name: "svelte",
  //   icon: svelte,
  // },
];

const experiences = [
  {
    title: "Intern | Trainee",
    company_name: "Finland Labs in collabration with NIT Roorkee",
    icon: finlandlabs,
    iconBg: "#FFF8E7",
    date: "16 Nov 2020 - 11 Dec 2020",
    points: [
      "Learned to make face-detection models using ML, classification of data and more.",
      "Learned to create Cats and Dogs classification using CNN and deploy on AWS Server.",
      "Learned Home Automation and built a project on controlling home devices using MQTT and ESP32 module.",
      "Used Twitter API that tweets room temperature using sensor.",
    ],
  },
  {
    title: "Intern | Trainee",
    company_name: "Finland Labs",
    icon: finlandlabs,
    iconBg: "#FFF8E7",
    date: "22 Mar 2021 - 2 Apr 2021",
    points: [
      "Made some contracts using Solidity using metamask and postaman on the Etherium blockchain model",
      "Learned Blockchain Infrastructure Modeling and Bitcoin Model.",
      "Participating in code reviews and providing constructive feedback to other team participants.",
    ],
  },
  {
    title: "Android App Developer",
    company_name: "WeDMist Pvt. Ltd.",
    icon: wedmist,
    iconBg: "#0F0404",
    date: "Jun 2021 - Dec 2021 (+ 2 months extention)",
    points: [
      "Worked on Live Customer service Application of Wedmist.",
      "UI & UX Designing of Customer service Provider Application.",
      "Implementing responsive design and ensuring UI looks modern and up to mark.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    ],
  },
  {
    title: "SELF Developer",
    company_name: "ME",
    icon: rishu,
    iconBg: "#E6DEDD",
    date: "Present",
    points: [
      "Embracing Lifelong Learning: I have always nurtured a deep thirst for knowledge, seeking opportunities to expand my horizons and acquire new skills.",
      "Learing to Communicate with Impact: I recognize the power of effective communication and have honed my skills in conveying complex ideas in a clear and engaging manner.",
      "Actively engaged in a process of upskilling to align myself with the rapidly evolving demands of the industry.",
      "Enableing navigation in diverse professional environments and contributing positively to team dynamics, making me a valuable asset in any setting.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "During his tenure, we found him to be an enthusiastic contributor and a keen learner. He was a part of our Android Team. We deeply appreciate him for his commitment towards the tasks assigned to him and the quality of work.",
    name: "Iffat Majid",
    designation: "Talent Acquisition & CEO",
    company: "Wedmist Pvt Ltd",
    image: skarif,
  },
  {
    testimonial:
      "Has successfully completed 4 Weeks Instructor Led Live Online Training on Machine Learning with Artificial Intelligence & IOT Using AWS",
    name: "Finland Labs",
    designation: "Umang Kejriwal",
    company: "Finland Labs",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Rktoopia",
    description:
      "Web-based platform that allows users to search, create, and find amazing prompts to use in ai tools like ChatGPT. Fullstack CRUD Nextjs web application.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/rkDevguru47/RKtopia",
    live_link:"https://r-ktopia.vercel.app/",
  },
  {
    name: "Scientific Calculator",
    description:
      "Android Application - Scientific Calculator",
    tags: [
      {
        name: "Android Studio",
        color: "blue-text-gradient",
      },
      {
        name: "JAVA Native",
        color: "green-text-gradient",
      },
      {
        name: "XML styling",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/rkDevguru47/scientific_Calculator--android_studio",
  },
  {
    name: "RK-Messenger",
    description:
      "A online Messenging app that allows users to send and receive messages along with file or image uploading. Fullstack CRUD Nextjs web application.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb & prisma",
        color: "green-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/rkDevguru47/rk_messenger",
    live_link:"https://rk-messenger.vercel.app/",
  },
  {
    name: "CLI-RK-Weather_App",
    description:
      "This is a command-line weather app that allows you to check the current weather conditions for any location in the world.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "argparse",
        color: "blue-text-gradient",
      },
      {
        name: "pyfiglet",
        color: "pink-text-gradient",
      },
      {
        name: "chalk & requests",
        color: "green-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/rkDevguru47/cli_rk_weather_app",
  },
   {
    name: "RK-Summarizer",
    description:
      "This is a article summarizer that helps people to get the summary of a lengthy article instead of going through the hassle of actually reading it. Lazy people Rejoice!",
    tags: [
      {
        name: "Vue.js",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "Redux & Rapid API",
        color: "green-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/rkDevguru47/rk_ai_summarizer",
    live_link:"https://rk-ai-summarizer.vercel.app/",
  },
    // {
  //   name: "RK-Messenger",
  //   description:
  //     "A online Messenging app that allows users to send and receive messages along with file or image uploading. Fullstack CRUD Nextjs web application.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "React",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "tailwindcss",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "mongodb & prisma",
  //       color: "green-text-gradient",
  //     },
  //   ],
  //   image: project3,
  //   source_code_link: "https://github.com/rkDevguru47/rk_messenger",
  //   live_link:"https://rk-messenger.vercel.app/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
