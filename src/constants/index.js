const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgpath: "/images/ideas.svg" },
  { text: "Concepts", imgpath: "/images/concepts.svg" },
  { text: "Designs", imgpath: "/images/designs.svg" },
  { text: "Code", imgpath: "/images/code.svg" },
  { text: "Ideas", imgpath: "/images/ideas.svg" },
  { text: "Concepts", imgpath: "/images/concepts.svg" },
  { text: "Designs", imgpath: "/images/designs.svg" },
  { text: "Code", imgpath: "/images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Satisfied Clients" },
  { value: 10, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  // {
  //   review:
  //     "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
  //   imgPath: "/images/exp1.png",
  //   logoPath: "/images/logo1.png",
  //   title: "Frontend Developer",
  //   date: "January 2023 - Present",
  //   responsibilities: [
  //     "Developed and maintained user-facing features for the Hostinger website.",
  //     "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
  //     "Optimized web applications for maximum speed and scalability.",
  //   ],
  // },
  {
    review:
      "Ajay played a pivotal role in building CRM and dashboard applications that streamlined data workflows and improved user experience. His full stack expertise brought measurable performance improvements and seamless integration across systems.",
    imgPath: "/images/logo_csinfocomm.png",
    logoPath: "/images/logo_csinfocomm.png",
    title: "Full Stack Developer (React.js & ASP.NET Core)",
    date: "January 2024 - Present",
    responsibilities: [
      "Developed CRM and dashboard web applications using React.js, Redux Toolkit, and Tailwind CSS, resulting in a 30% faster data retrieval time.",
      "Designed intuitive UIs for managing, searching, and displaying complex datasets, improving user interaction by 25%.",
      "Built secure and scalable backend APIs with ASP.NET Core and MySQL, optimizing data handling and achieving a 40% improvement in response times.",
      "Enhanced development efficiency and cross-team collaboration using a modern tech stack including React.js, Redux Toolkit, Tailwind CSS, Genesys API, ASP.NET Core, and MySQL.",
    ],
  },

  {
    review:
      "Ajay’s contributions to iGen Technologies’ web platforms brought exceptional enhancements in performance, usability, and design. He consistently delivered scalable React-based solutions that aligned with project goals and elevated the overall user experience.",
    imgPath: "/images/igen.jpeg",
    logoPath: "/images/igen.jpeg",
    title: "Frontend Developer (React)",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Developed responsive web interfaces using React, integrated seamlessly with Appwrite's backend services.",
      "Enhanced web performance and usability through efficient component design and code optimization.",
      "Collaborated closely with the product and design teams to implement user-centric features based on real-time feedback.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Ravi Kumar",
    mentions: "@ravikumar",
    review:
      "I can’t say enough good things about Ajay. He took our complex project requirements and turned them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Siddharth Mehta",
    mentions: "@siddmehta",
    review:
      "Working with Ajay was a fantastic experience. He modernized our outdated website and made it extremely user-friendly. His attention to detail and commitment to quality are unmatched.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Arjun Reddy",
    mentions: "@arjunreddy",
    review:
      "Collaborating with Ajay was an absolute pleasure. His professionalism, prompt responses, and dedication to delivering exceptional results stood out throughout the project.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Vikram Chauhan",
    mentions: "@vikramchauhan",
    review:
      "Ajay turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Super satisfied with the results!",
    imgPath: "/images/client5.png",
  },
  {
    name: "Manish Gupta",
    mentions: "@manishgupta",
    review:
      "Ajay’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site. Online sales have increased significantly since!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Karan Malhotra",
    mentions: "@karanmalhotra",
    review:
      "Ajay understood our requirements perfectly and delivered a website that exceeded expectations. His frontend and backend skills are both top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  // {
  //   name: "insta",
  //   url: "https://www.instagram.com/",
  //   imgPath: "/images/insta.png",
  // },
  // {
  //   name: "fb",
  //   url: "https://www.facebook.com/",
  //   imgPath: "/images/fb.png",
  // },
  {
    name: "x",
    url: "https://x.com/Ajay20478358011",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    url: "www.linkedin.com/in/ajay-yadav-6b6283204",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
