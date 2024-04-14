import React from "react";
import { FaHtml5,FaCss3Alt, FaReact, FaNodeJs, FaBootstrap, FaWordpress, } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss,SiMongodb, SiExpressvpn  } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { SiNextdotjs } from "react-icons/si";
import { RiCustomerServiceFill  } from "react-icons/ri";



import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/work1.png";
import Work2 from "./assets/work2.png";
import Work3 from "./assets/work3.png";
import Work4 from "./assets/work4.png";
import Work5 from "./assets/project-5.jpg";
import Work6 from "./assets/project-6.jpg";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Projects",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/projects",
  },
  {
    id: 4,
    name: "Services",
    icon: <RiCustomerServiceFill  className="nav__icon" />,
    path: "/services",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Jabir",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Ahmad",
  },

  {
    id: 3,
    title: "Age : ",
    description: "19 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Bangladeshi",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Jessore, Bangladesh",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+8801627159355",
  },

  {
    id: 8,
    title: "Email : ",
    description: "jabirahmad7005@gmail.com",
  },

  {
    id: 9,
    title: "Skype : ",
    description: "jabir",
  },

  {
    id: 10,
    title: "Langages : ",
    description: "Bengali, English, Hindi, Urdu",
  },
];

export const stats = [
  {
    id: 1,
    no: "3+",
    title: "Years of <br /> Experience",
  },

  {
    id: 2,
    no: "30+",
    title: "Completed <br /> Projects",
  },

  {
    id: 3,
    no: "25+",
    title: "Happy <br /> Customers",
  },

  {
    id: 4,
    no: "13+",
    title: " Awards <br /> Won",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2024 - PRESENT",
    title: "Web Developer <span> Junior </span>",
    desc: "Worked on building responsive and user-friendly full stack web using html, css , javascript, and react, nodeJs, and mongoDB.",
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2021 - 2024",
    title: "Frontend Web Developer <span> React Specialist </span>",
    desc: "Specialized in responsive web development using HTML, CSS, JavaScript, React. Created React components and optimized performance for enhanced user experience.",
  },

  {
    id: 3,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2021 - 2024",
    title: " Backend Web Developer <span> MERN  </span>",
    desc: "From 2021 to 2024, I've been the driving force behind impactful web development as a Backend Developer specializing in the MERN stack. Crafting seamless and efficient solutions, I bring expertise in MongoDB, Express.js, React, and Node.js. Let's elevate your digital presence together! #WebDevelopment #MERNstack 🔧💻",
  },

 

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2015",
    title: "Engineering Degree <span> Oxford University </span>",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2012",
    title: "Master Degree <span> KIEV University </span>",
    desc: "Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt",
  },

  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2009",
    title: "Bachelor Degree <span> Tunis High School </span>",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore",
  },
];

export const skills = [
  {
    id: 1,
    title: <div className="title_style"><FaHtml5 size={20}/> Html</div>,
    percentage: "90",
  },

  {
    id: 2,
    title: <div className="title_style"><FaCss3Alt size={20}/> Css</div>,
    percentage: "75",
  },

  {
    id: 3,
    title: <div className="title_style"><IoLogoJavascript size={18}/> Javascript</div>,
    percentage: "70",
  },

  
  {
    id: 4,
    title: <div className="title_style"><FaReact size={20}/> React</div>,
    percentage: "85",
  },

  {
    id: 5,
    title: <div className="title_style"><SiMongodb size={20}/> MongoDB</div>,
    percentage: "75",
  },

  {
    id: 6,
    title: <div className="title_style"><FaNodeJs size={20}/> NodeJs</div>,
    percentage: "75",
  },

  {
    id: 7,
    title: <div className="title_style"><SiExpressvpn size={20}/> ExpressJs</div>,
    percentage: "80",
  },

  {
    id: 8,
    title: <div className="title_style"><SiTailwindcss size={20}/> Tailwind</div>,
    percentage: "90",
  },
  {
    id: 9,
    title: <div className="title_style"><FaBootstrap size={20}/> Bootstrap</div>,
    percentage: "80",
  },
  {
    id: 10,
    title: <div className="title_style"><FaWordpress size={20}/> Wordpress</div>,
    percentage: "60",
  },
  {
    id: 11,
    title: <div className="title_style"><TbBrandRedux size={20}/> Redux</div>,
    percentage: "70",
  },

  {
    id: 12,
    title: <div className="title_style"><SiNextdotjs size={20}/>
 Next.Js</div>,
    percentage: "81",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "Photo Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Photoshop",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "Website Design",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "Video Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Video",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Premium",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "Video Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Video",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Premium",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: "Landing Page",
    details: [
      {
        title: "Project : ",
        desc: "Website",
      },
      {
        title: "Client : ",
        desc: "Dribble",
      },
      {
        title: "Language : ",
        desc: "React JS, Node JS",
      },
      {
        title: "Preview : ",
        desc: "https://full-e-commerce-projectb-by-jabir.netlify.app",
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: "Photo Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Photoshop",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dibble.com",
      },
    ],
  },
];

export const services = [
  {
    id: 1,
    title: ""
    
  }
]

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
