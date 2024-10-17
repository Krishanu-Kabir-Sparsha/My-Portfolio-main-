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
    mah,
    ghit,
    ct,
    outlier,
    iub,
    dc,
    mgbs,
    canva,
    express,
    bootstrap,
    spring,
    
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
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Problem Solving",
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Express JS",
      icon: express,
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Spring Boot",
      icon: spring,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "canva",
      icon: canva,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer (AI Training Data)",
      company_name: "Outlier.AI",
      icon: outlier,
      iconBg: "#383E56",
      date: "October 2024 - Present",
      points: [
        "Reviewing of AI training data.",
        "Projects based in JavaScript and Python.",       
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Enterprise Resource Planning Operations Officer",
      company_name: "Mir Akhter Hossain Ltd.",
      icon: mah,
      iconBg: "#383E56",
      date: "October 2023 - February 2024",
      points: [
        "Developing and maintaining web applications",
        "An accomplished ERP Operation Officer proficient in ODOO modules", 
        "A focus on Master Requisitions, vendor management, and project coordination.",
        "Proven ability to enhance requisition processes, collaborate cross-functionally in ODOO development.",
      ],
    },
    {
      title: "Software Engineer Trainee",
      company_name: "Golden Harvest Infotech Ltd.",
      icon: ghit,
      iconBg: "#383E56", //"#E6DEDD"
      date: "February 2023 - May 2023",
      points: [
        "Developing and maintaining CRUD Operations",
        "contributing as a Software Engineer Trainee within the Fintech team",
        "A primary role in enhancing an existing Transactional  Middleware software by developing APIs",
        "Integrating various working systems using the Spring Boot framework.",
      ],
    },
    {
      title: "MERN Stack Developer",
      company_name: "Coders Trust Bangladesh",
      icon: ct,
      iconBg: "#383E56",
      date: "April 2024 - December 2024",
      points: [
        "Development Training",
        "Developing and maintaining web applications using React.js and other related technologies.", 
        "Implementing responsive design and ensuring cross-browser compatibility.",      
        "Efficiency with MERN Stack approach",
        "Full Stack Web Development. Responsive Front-End and Agile Backend.",
      ],
    },
  ];


  const educations = [
    {
      title: "BSc. in Computer Science and Engineering",
      institution_name: "Independent University Bangladesh (IUB)",
      icon: iub,
      iconBg: "#383E56",
      date: "2018 - 2023",
      points: [
        "CGPA: 2.66 / 4.00",
      ],
    },
    {
      title: "Higher Secondary Certificate",
      institution_name: "Dhaka College",
      icon: dc,
      iconBg: "#383E56",
      date: "2015 - 2017",
      points: [
        "GPA: 5.00 / 5.00",
      ],
    },
    {
      title: "Secondary School Certificate",
      institution_name: "Motijheel Government Boys' High School",
      icon: mgbs,
      iconBg: "#383E56", //"#E6DEDD"
      date: "Passing year 2015",
      points: [
        "GPA: 5.00 / 5.00",
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
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
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, educations, testimonials, projects };