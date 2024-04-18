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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  next,
  hackerNews, 
  threejs,
  Tcs,
  Paladin,
  HiBro,
pet,
crud,
book,
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
  // {
  //   id: "Download",
  //   title: "Download Resume",
  // },
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
    title: "Express js Developer",
    icon: backend,
  },
  {
    title: "Technical Reviewer",
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "nextjs",
    icon: next,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
 
  {
    title: "software Developer Traniee",
    company_name: "Paladin softwares solutions private limited",
    icon: Paladin,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - Feb 2022",
    points: [
      "Continued development and maintenance of React-based web applications.",
      "Engaged in collaborative efforts with diverse teams for product enhancements.",
      "Contributed to the expansion of previously developed projects, ensuring quality and functionality with Redux Toolkit.",

    ],
  },
  {
    title: "Junior Software Developer",
    company_name: "Paladin softwares solutions private limited",
    icon: Paladin,
    iconBg: "#383E56",
    date: "Feb 2022 - Nov 2023",
    points: [
      "Built E-commerce site delaynx and pethowz web apps in React 17 and Redux with full user experience Redesign.",
      "Ensured seamless UI experiences, focusing on responsive design and cross-browser compatibility",
      "Extended React.js expertise to elevate the platform's visual and functional aspects.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      
    ],
  },
  {
    title: "Assitant System Engineer",
    company_name: "Tata Consultancy Service",
    icon: Tcs,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Jan 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "System Engineer",
    company_name: "Tata Consultancy Service",
    icon: Tcs,
    iconBg: "#E6DEDD",
    date: "Feb 2024 - Present",
    points: [
      "Developing Finger Print on  web applications using React.js.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Handeling indiduvale modules and Review on code .",
    
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Book Project",
    description:
      " \"Books \" is practice  purpose created.In searching books,create and delete, built with React and Express js CSS 3.It's like a create and searching book author names and published year ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: book,
    source_code_link: "https://gitlab.com/project5982716/book-project",
  },
  {
    name: "Pethowz",
    description:
      "\"Pethowz,\" built with React, is a comprehensive platform providing various pet services. Users enjoy an easy-to-use interface for scheduling and managing category and services..",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "Restapi",
        color: "pink-text-gradient",
      },
    ],
    image: pet,
    source_code_link: "https://gitlab.com/project5982716/pethowz",
  },
  {
    name: "CRUD",
    description:
      "\"CRUD\" we can create, update , delete. Created with HTML, CSS3, javascript , Redux Toolkit and Bootstrap5 for practice.Users enjoy an easy-to-use interface for scheduling and managing             ",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "css3",
        color: "green-text-gradient",
      },
      {
        name: "ReduxToolkit",
        color: "pink-text-gradient",
      },
    
    ],
    image: crud,
    source_code_link: "https://gitlab.com/project5982716/Crud-ReduxToolkit",
  },
];

export { services, technologies, experiences, testimonials, projects };
