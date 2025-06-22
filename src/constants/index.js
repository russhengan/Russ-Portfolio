import project5 from "../assets/projects/beegreat1.png";
import project6 from "../assets/projects/bookify1.png";
import project7 from "../assets/projects/ecobantay1.jpg"

export const HERO_CONTENT = `I’m a 4th-year BS Information Technology student at Pamantasan ng Lungsod ng Valenzuela with a strong passion for software development. I specialize in building responsive web applications using HTML, CSS, JavaScript, PHP, Node.js, and Express.js. Currently, I’m expanding my skills in mobile development through React Native.

Driven by curiosity and a desire to grow, I’m eager to contribute to real-world projects, collaborate with dynamic teams, and continuously evolve as a developer. I’m now actively seeking internship opportunities where I can apply my knowledge, gain industry experience, and further sharpen my technical and problem-solving abilities.`;

export const ABOUT_TEXT = `My passion for software development drives my pursuit of excellence in creating innovative digital solutions. As a 4th-year BS Information Technology student at Pamantasan ng Lungsod ng Valenzuela, I specialize in full-stack development using JavaScript, React Native, Node.js, and MongoDB. I thrive on transforming complex challenges into elegant, efficient solutions that deliver exceptional user experiences, combining technical precision with creative problem-solving whether I'm building scalable backend systems or crafting intuitive interfaces. What sets me apart is my commitment to continuous learning and collaboration, where each project becomes an opportunity to push boundaries and deliver solutions that make a meaningful impact.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Technical Lead Developer",
    company: "Capstone Project - EcoBantay",
    description: `Designed and developed EcoBantay, a comprehensive full-stack mobile waste management system using React Native, Express.js, and MongoDB, featuring core functionalities such as waste reporting, pickup requests, QR code scanning for Clean Points Leaderboards, real-time GPS truck tracking, and integrated admin and staff dashboards for efficient user, request, and report management."`,
    technologies: ["React Native", "Expo", "Tailwind", "Express.js", "MongoDB"],
  },
  {
    year: "2025",
    role: "Full-Stack Web Developer",
    company: "Software Development and Testing Project - BeeGreat",
    description: `Developed a responsive, child-focused educational website tailored for pre-K learners using PHP, HTML, CSS, Bootstrap, and JavaScript. The platform features an interactive UI/UX with gamified learning modules, engaging animations, and a user-friendly layout. Key functionalities include progress tracking, a module unlock system to guide learning flow, animated achievement rewards to motivate learners, and a parent-child account linking system for personalized monitoring and support.`,
    technologies: ["HTML", "Bootstrap", "Javascript", "PHP", "MySQL"],
  },
  {
    year: "2024",
    role: "Front-End Developer",
    company: "Event Driven Programming - Bookify",
    description: `Designed and developed a responsive booking interface using HTML, CSS, Bootstrap, and PHP, ensuring a smooth and intuitive user experience. The system includes key user-facing features such as account creation, a dynamic scheduling interface, and real-time status displays. Emphasis was placed on clean layout structuring, mobile responsiveness, and seamless navigation to enhance usability across all booking pages.`,
    technologies: ["HTML", "Bootstrap", "Javascript", "PHP", "MySQL"],
  },
];

export const PROJECTS = [
  {
    title: "BeeGreat",
    image: project5,
    description:
      "BeeGreat is a child-friendly educational website developed using PHP, HTML, CSS, Bootstrap, and JavaScript. Designed for pre-K learners, it features interactive learning modules, animated achievements, and gamified progress tracking. The platform includes a module unlock system to guide learner flow and supports parent-child account linking for monitoring and engagement. It emphasizes a fun and responsive UI/UX with educational content tailored to young children.",
    technologies: ["HTML", "Bootstrap", "Javascript", "PHP", "MySQL"],
  },
  {
    title: "Bookify",
    image: project6,
    description:
      "Bookify is a responsive booking and scheduling interface developed using HTML, CSS, Bootstrap, and PHP. It allows users to create accounts, manage bookings, and view real-time status updates. The system is designed with a focus on clean layouts, mobile responsiveness, and intuitive navigation across all booking pages, making it suitable for service-based platforms requiring structured appointment handling.",
    technologies: ["HTML", "Bootstrap", "Javascript", "PHP", "MySQL"],
  },
  {
    title: "EcoBantay",
    image: project7,
    description:
      "EcoBantay is a community-driven environmental reporting platform built to promote responsible waste management and civic engagement. It allows residents to report waste-related issues such as illegal dumping or uncollected garbage using a mobile app, while the admin panel provides local authorities with real-time analytics, report tracking, and user management. The system also supports location-based submissions via Google Maps integration and includes features for posting environmental news and managing employees.",
    technologies: ["React Native", "Expo", "Node.js", "Express.js", "Tailwind", "REST API"],
  },
];

export const CONTACT = {
  address: "32-A Little Tagaytay St. Marulas Valenzuela City ",
  phoneNo: "+639 610 797 989 ",
  email: "russhavana24@gmail.com",
};
