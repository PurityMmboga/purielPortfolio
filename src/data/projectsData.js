import React from 'react';
// Import your local image
import smartFarmImage from '../assets/images/smartfarm.png';
import KafuHealthImage from '../assets/images/KAFU Student Health.png';
import PortfolioImage from '../assets/images/Snapchat-71918223.jpg';
import AgriMarketImage from '../assets/images/AgriMarket.png';

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A responsive personal portfolio built with React to showcase my projects and skills. Features smooth animations, project filtering, and a contact form.",
    image: PortfolioImage,
    technologies: ["React", "JavaScript", "CSS", "Vite"],
    githubLink: "https://github.com/PurityMmboga/purielPortfolio",
    liveLink: "#", // You can add your live link when deployed
    category: "web"
  },
  {
    id: 2,
    title: "Kafu AgriMarket - Smart Farm System",
    description: "A mobile application connecting Kaimosi Friend University farm with customers. Users can browse farm products, check prices, and place orders directly through the app.",
    image: AgriMarketImage ,
    technologies: ["Android Studio", "Firebase", "ImgBB", "Java"],
    githubLink: "https://github.com/PurityMmboga/KafuAgriMarket",
    liveLink: "#", // Add your app link if available
    category: "mobile"
  },
  {
    id: 3,
    title: "Student Health App",
    description: "A comprehensive health management system for students. Features include medical records management, appointment booking, prescription tracking, and health history viewing.",
    image: KafuHealthImage,
    technologies: ["Android Studio", "Firebase", "ImgBB", "Java"],
    githubLink: "https://github.com/PurityMmboga/studentHealth2",
    liveLink: "#", // Add your app link if available
    category: "mobile"
  }
];

export default projects;