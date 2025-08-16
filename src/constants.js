// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import render from './assets/tech_logo/render.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
//import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import ugi_logo from './assets/education_logo/ugi_logo.jpeg';
import st_logo from './assets/education_logo/st_logo.jpeg';
//import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import blog from './assets/work_logo/blog.png';
import currency from './assets/work_logo/currency.png';
import portfolio from './assets/work_logo/portfolio.png';
import taskly from './assets/work_logo/taskly.png';
import tictactoe from './assets/work_logo/tictactoe.png';
import mentor from './assets/work_logo/mentor.png';
import rock from './assets/work_logo/rock.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
     // { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      //{ name: 'GSAP', logo: gsapLogo },
      //{ name: 'Material UI', logo: materialuiLogo },
      //{ name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      //{ name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      //{ name: 'Firebase', logo: firebaseLogo },
      //{ name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      //{ name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      //{ name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      //{ name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      //{ name: 'Postman', logo: postmanLogo },
      { name: 'Render', logo: render },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Fullstack Developer",
      company: "Webverse Digital",
      date: "April 2024 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Fullstack Engineer",
      company: "Agumentik Group of Companies",
      date: "July 2023 - March 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: newtonschoolLogo,
      role: "Frontend Intern",
      company: "Newton School",
      date: "September 2021 - August 2022",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
      ],
    },
  ];
  
  export const education = [
    // {
    //   id: 0,
    //   img: glaLogo,
    //   school: "United Institute of Technology, Prayagraj",
    //   date: "Sept 2022 - July 2024",
    //   grade: "8.1 CGPA",
    //   desc: "I have completed my Master's degree (MCA) in Computer Applications from GLA University, Mathura. During my time at GLA, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
    //   degree: "Master of Computer Applications - MCA",
    // },
    {
      id: 1,
      img: ugi_logo,
      school: "United Institute of Technology, Prayagraj",
      date: "Sept 2022 - July 2024",
      grade: "8.1 CGPA",
      desc: "I am currently pursuing my B.Tech in Computer Science and Engineering from United Institute of Technology, Prayagraj. My coursework has given me a strong foundation in computing and technology, covering areas like Data Structures and Algorithms, Web Development, and Database Management Systems. Alongside academics, I have worked on projects that apply theoretical concepts to real-world problems, helping me gain practical experience in software development and problem-solving.",
      degree: "Bachelor of Computer Science and Engineering",
    },
    {
       id: 2,
       img: st_logo,
       school: "St. John’s Co-Ed School, Prayagraj",
       date: "Apr 2020- Mar 2021",
       grade: "89%",
       desc: "I completed my Class 12 education from St. John’s Co-Ed School, Prayagraj, under the ISC board, where I studied Physics, Chemistry, and Mathematics (PCM) along with Computer Science. This foundation helped me develop strong analytical and problem-solving skills, preparing me for further studies in technology.",
       degree: "ISC (XII) - PCM with Computer Science"
    },
    {
      id: 3,
      img: st_logo,
      school: "St. John’s Co-Ed School, Prayagraj",
      date: "Apr 2018 - Mar 2019",
      grade: "88.9",  // Replace XX with your actual percentage
       desc: "I completed my Class 10 education from St. John’s Co-Ed School, Prayagraj, under the ICSE board. My schooling helped me build a strong foundation in core subjects while developing analytical thinking, discipline, and problem-solving skills.",
      degree: "ICSE (X) - General"
     }
  ];
  
  export const projects = [
    {
      id: 0,
      title: "BitLogue",
      description:
        "A React and Appwrite powered blog platform that lets users create, publish, and manage posts seamlessly, with real-time updates, intuitive profiles, and rich text editing for an engaging content experience.",
      image: blog,
      tags: ["React JS", "Node.js", "AppWrite", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Asthashukla1/BitLogue",
      webapp: "https://bit-logue.vercel.app",
     
    },
    {
      id: 1,
      title: "Taskly",
      description:
        "A note-taking and task management web app that allows users to create, organize, and track daily tasks and notes effortlessly, offering a clean interface and real-time updates to boost productivity.",
      image: taskly,
      tags: ["EJS","JavaScript","Express.js","Node.js"],
      github: "https://github.com/Asthashukla1/Taskly",
      webapp: "https://taskly-vbfa.onrender.com/",
     },
    {
      id: 2,
      title: "Currency Convertor",
      description:
        "A React-based web application that allows users to convert currencies instantly with real-time exchange rates. Featuring an intuitive interface and seamless user experience, it makes currency conversion fast and hassle-free.",
      image: currency,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Asthashukla1/CurrencyConvertor",
      webapp: "https://currency-convertor-one-tau.vercel.app/",
    },
    {
      id: 3,
      title: "Portfolio",
      description:
        "A React-based personal portfolio website to showcase projects, skills, and achievements. Featuring a modern design, smooth navigation, and responsive layout, it provides a professional and interactive experience for visitors.",
      image: portfolio,
      tags: ["React JS", "API", "Search Feature","HTML", "CSS", "Javascript"],
      github: "https://github.com/Asthashukla1/Portfolio",
      webapp: "https://portfolio-gold-mu-72.vercel.app/",
      
    },
    // {
    //   id: 4,
    //   title: "Mentor Connect",
    //   description:
    //     "A React-based web platform that connects students with mentors for guidance and support. Featuring an intuitive interface, seamless communication, and profile management, it helps users find the right mentorship and track their learning journey effectively.",
    //   image: mentor,
    //   tags: ["HTML", "CSS", "JavaScript"],
    //   github: "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
    //   webapp: "https://githubprofiledetective.netlify.app/",
      
    // },
    {
      id: 5,
      title: "Tic-Tac-Toe",
      description:
        "A classic Tic Tac Toe game featuring an interactive interface, responsive design, and smooth gameplay, it allows users to play against each other while tracking scores in real-time.",
      image: tictactoe,
      tags: ["HTML", "CSS", "JavaScript"], 
      github: "https://github.com/Asthashukla1/Tic-Tac-Toe",
      webapp: "https://tic-tac-toe-nine-sand-71.vercel.app",
    },
    {
      id: 6,
      title: "Rock-Paper-Scissor",
      description:
        "A fun and interactive Rock Paper Scissors game featuring smooth gameplay, real-time results, and an intuitive interface, it lets users challenge the computer and enjoy a classic game experience online.",
      image: rock,
      tags: ["HTML", "CSS", "JavaScript"], 
      github: "https://github.com/Asthashukla1/Rock-Paper-Scissors",
      webapp: "https://rock-paper-scissors-xi-beige.vercel.app/",
    },
    // {
    //   id: 7,
    //   title: "HealtCare Web Portal",
    //   description:
    //     "A comprehensive web platform that connects patients with healthcare providers, enabling appointment booking, medical record management, and real-time consultation tracking. The portal offers an intuitive interface and streamlined workflow to enhance patient care and simplify healthcare management.",
    //  // image: npmLogo,
    //   tags: ["HTML", "CSS", "JavaScript"], 
    //   github: "https://github.com/codingmastr/cmtk-email-validator",
    //   webapp: "https://www.npmjs.com/package/cmtk-email-validator",
      
    // },
    // {
    //   id: 8,
    //   title: "Hacker-Hatch",
    //   description:
    //     "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
    //   image: removebgLogo,
    //   tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
    //   github: "https://github.com/codingmastr/Image-Background-Remover",
    //   webapp: "https://removeyourbg.netlify.app/",
    // },
  ];  