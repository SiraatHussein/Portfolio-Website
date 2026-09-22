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
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "UI/UX Designer",
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    icon: starbucks,
    iconBg: "#383E56",
    points: [
      "Built and maintained scalable web applications using React.js, Redux, and modern JavaScript.",
      "Translated design mockups into pixel-perfect, reusable UI components with a focus on performance.",
      "Optimized application load times and rendering efficiency through code-splitting and lazy loading.",
      "Worked closely with backend teams to integrate RESTful APIs and manage application state.",
    ],
  },
  {
    title: "React Native Developer",
    icon: tesla,
    iconBg: "#E6DEDD",
    points: [
      "Developed cross-platform mobile applications for iOS and Android using React Native.",
      "Implemented smooth navigation flows and native device features such as camera, push notifications, and geolocation.",
      "Debugged and resolved platform-specific issues to ensure consistent performance across devices.",
      "Collaborated with teams to translate business requirements into functional mobile features.",
    ],
  },
  {
    title: "Web Developer",
    icon: shopify,
    iconBg: "#383E56",
    points: [
      "Designed and developed responsive, user-friendly websites and e-commerce storefronts.",
      "Customized website themes to align with brand guidelines and design specifications.",
      "Ensured consistent performance and appearance across multiple browsers and screen sizes.",
      "Identified and resolved bugs while implementing new features to enhance site functionality."
    ],
  },
  {
    title: "UI/UX Designer",
    icon: meta,
    iconBg: "#E6DEDD",
    points: [
      "Created wireframes, prototypes, and high-fidelity mockups for web and mobile applications.",
      "Conducted user research and usability testing to inform design decisions.",
      "Collaborated with developers to ensure accurate and consistent implementation of designs.",
      "Established and maintained design systems to ensure visual consistency across products.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Bene",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Kelveena",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "McCarthy",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AI-powered architectural visualization website",
    description:
      "Developed a full-stack AI-powered architectural visualization web application that transforms uploaded 2D floor plans into photorealistic 3D interior designs. Built using React, TypeScript, and Puter.js. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "puterjs",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Emergency Service App",
    description:
      "Developed an Emergency Service application with my team which aims to deliver rapid medical assistance during critical situations. The app has an emergency button that shares the user's location with medical personnel, allows access to medical history to aid in treatment, and provides first aid materials to educate users on right steps during an emergency.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Menu and Ordering App",
    description:
      "Designed wireframes and interactive prototypes for a menu and ordering application built around inclusivity and accessibility-first design. The app was designed to accommodate users with visual, motor, and cognitive differences, ensuring no one is excluded from a smooth ordering experience. ",
    tags: [
      {
        name: "figma",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
   {
    name: "Ecommerce Mobile App",
    description:
      "An e-commerce mobile app centered around a smart image-based search feature, allowing users to simply upload or snap a photo of a product they're looking for and instantly receive matching in-stock results. ",
    tags: [
        {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },

    ],
    image: ecommerce,
    source_code_link: "https://github.com/",
  },
  {
    name: "Snake Game",
    description:
      "Developed a classic implementation of the timeless Snake game, built entirely in Java. The player controls a snake that moves continuously around the game board, eating food that appear at random positions.",
    tags: [
      {
        name: "java",
        color: "pink-text-gradient",
      },
    ],
    image: snake,
    source_code_link: "https://github.com/",
  },
  {
    name: "Waste Management Dashboard",
    description:
      "Designed wireframes and prototypes for a waste management dashboard aimed at helping organizations manage waste disposal more effectively while minimizing their environmental impact. The interface provides real-time data on waste generation, disposal methods, and recycling rates, giving organizations clear visibility into their overall performance.",
    tags: [
      {
        name: "figma",
        color: "pink-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link: "https://github.com/",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
