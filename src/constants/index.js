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
  flightsNepal,
  cosmos,
  etryyp,
  jobit,
  tripguide,
  threejs,
  primetech,
  mpair,
  parkview,
  flydocx,
  itphonestore
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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Node.js Developer",
    icon: backend,
  },
  {
    title: "Angular Creator",
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
    title: "Angular/ React.js / Nodejs Developer",
    company_name: "Prime Tech Solutions",
    icon: primetech,
    iconBg: "#383E56",
    date: "Feb 2023 - Present",
    points: [
      "Developing and maintaining OTA(Online Travel Agency) applications using Angular and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility."
    ],
  },
  {
    title: "MERN Stack Developer",
    company_name: "mpair Technologies",
    icon: mpair,
    iconBg: "#E6DEDD",
    date: "Dec 2021 - Feb 2023",
    points: [
      "Developing and maintaining web applications using MERN Stack.",
      "Developed projects like Hospital Management, Account Management ect.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Arfin proved me wrong.",
    name: "Ama Kusi",
    designation: "CEO",
    company: "Worklopedia",
    image: "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjkzNy1hZXctMTY1LWtsaGN3ZWNtLmpwZw.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Arfin does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjkzNy1hZXctMTY1LWtsaGN3ZWNtLmpwZw.jpg",
  },
  {
    testimonial:
      "After Arfin optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjkzNy1hZXctMTY1LWtsaGN3ZWNtLmpwZw.jpg",
  },
];

const projects = [
  {
    name: "Flights Nepal",
    description:
      "Online travel agency that allows users to search, book flights.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "rxjs",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: flightsNepal,
    source_code_link: "https://flightsnepal.com/",
    client:"Flights Nepal"
  },
  {
    name: "Cosmos Holiday",
    description:
      "Online travel agency that allows users to search, book flights.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "rxjs",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: cosmos,
    client:"Cosmos Holiday",
    source_code_link: "https://cosmosholiday.com/",
  },
  {
    name: "Etryyp",
    description:
      "Online travel agency that allows users to search, book flights.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "rxjs",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: etryyp,
    client: "Novoair",
    source_code_link: "https://www.etryyp.com/auth/signin",
  },



  {
    name: "Appointment System",
    description:
      "Appointment system for a reputed hospital.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "rxjs",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: parkview,
    client: "Parkview Hospital",
    source_code_link: "https://parkviewappointment.com/",
  },
  {
    name: "Flydocx",
    description:
      "Online travel agency that allows users to search, book flights.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: flydocx,
    client: "Flydocx",
    source_code_link: "https://demo.flydocx.com/",
  },
  {
    name: "E-Commerce",
    description:
      "Online e-commerce site admin control.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: itphonestore,
    client:"It Phone Store",
    source_code_link: "https://itphonestore.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
