import React from "react";
import { FaUnity } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { FaReact } from "react-icons/fa";
import { StaticImageData } from "next/image";

import hotelManagementImg from "../../public/hotelManagement.png";
import hotelAppImg from "../../public/hotelApp.png";
import nextjsLoremIpsumImg from "../../public/nextjsLoremIpsum.png";
import snakeGameAppImg from "../../public/snakeGameApp.png";
import reactMarkdownPreviewerImg from "../../public/reactMarkdownPreviewerImg.png";
import randomPhraseGeneratorImg from "../../public/randomPhrases.png";
import pokeGalleryImg from "../../public/pokeGallery.png";
import cryptoPriceRustImg from "../../public/cryptoPriceRust.png";
import rocketApiImg from "../../public/rocketApiImg.png";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: StaticImageData;
}

export const links = [
  {
    name: "home",
    hash: "#home",
  },
  {
    name: "about",
    hash: "#about",
  },
  {
    name: "projects",
    hash: "#projects",
  },
  {
    name: "skills",
    hash: "#skills",
  },
  {
    name: "experience",
    hash: "#experience",
  },
  // {
  //   name: "Contact",
  //   hash: "#contact",
  // },
] as const;

export const experiencesData = [
  {
    title: "systemsTechnician.systemsTechnicianTitle",
    location: "systemsTechnician.systemsTechnicianLocation",
    description: "systemsTechnician.systemsTechnicianDec",
    icon: React.createElement(LuGraduationCap),
    date: "systemsTechnician.systemsTechnicianDate",
  },
  {
    title: "systemsEngineering.systemsEngineeringTitle",
    location: "systemsEngineering.systemsEngineeringLocation",
    description: "systemsEngineering.systemsEngineeringDec",
    icon: React.createElement(LuGraduationCap),
    date: "systemsEngineering.systemsEngineeringDate",
  },
  {
    title: "unityDeveloper.unityDeveloperTitle",
    location: "unityDeveloper.unityDeveloperLocation",
    description: "unityDeveloper.unityDeveloperDec",
    icon: React.createElement(FaUnity),
    date: "unityDeveloper.unityDeveloperDate",
  },
  {
    title: "backendDeveloper.backendDeveloperTitle",
    location: "backendDeveloper.backendDeveloperLocation",
    description: "backendDeveloper.backendDeveloperDec",
    icon: React.createElement(FaNodeJs),
    date: "backendDeveloper.backendDeveloperDate",
  },
  {
    title: "fullStackDeveloper.fullStackDeveloperTitle",
    location: "fullStackDeveloper.fullStackDeveloperLocation",
    description: "fullStackDeveloper.fullStackDeveloperDec",
    icon: React.createElement(FaReact),
    date: "fullStackDeveloper.fullStackDeveloperDate",
  },
] as const;

export const projectsData: Project[] = [
  {
    title: "hotelManagement",
    description: "hotelManagementDesc",
    tags: ["Java", "MySQL"],
    imageUrl: hotelManagementImg,
  },
  {
    title: "hotelApp",
    description: "hotelAppDesc",
    tags: ["TypeScript", "React Expo", "Tailwind", "OAuth", "Google"],
    imageUrl: hotelAppImg,
  },
  {
    title: "nextjsLoremIpsum",
    description: "nextjsLoremIpsumDesc",
    tags: ["React", "Next.js", "Tailwind", "Social Icons"],
    imageUrl: nextjsLoremIpsumImg,
  },
  {
    title: "snakeGameApp",
    description: "snakeGameAppDesc",
    tags: ["React Expo", "React Native Gesture Handler", "Tailwind"],
    imageUrl: snakeGameAppImg,
  },
  {
    title: "reactMarkdownPreviewer",
    description: "reactMarkdownPreviewerDesc",
    tags: ["React Native", "JavaScript", "HTML", "Tailwind"],
    imageUrl: reactMarkdownPreviewerImg,
  },
  {
    title: "randomPhraseGenerator",
    description: "randomPhraseGeneratorDesc",
    tags: ["JavaScript", "HTML", "CSS"],
    imageUrl: randomPhraseGeneratorImg,
  },
  {
    title: "pokeGallery",
    description: "pokeGalleryDesc",
    tags: ["Typescript", "HTML", "CSS", "JavaScript"],
    imageUrl: pokeGalleryImg,
  },
  {
    title: "cryptoPriceRust",
    description: "cryptoPriceRustDesc",
    tags: ["Rust", "Reqwest", "Tokio", "Serde", "Serde_Json", "CoinGecko API"],
    imageUrl: cryptoPriceRustImg,
  },
  {
    title: "rocketApi",
    description: "rocketApiDesc",
    tags: ["Rust", "MongoDB", "Bcrypt", "JWT", "Rocket", "Serde"],
    imageUrl: rocketApiImg,
  },
];

export const skillsData = [
  "Amazon EC2",
  "Amazon SES",
  "Amazon S3",
  "Amazon Web Services",
  "Apollo GraphQL",
  "Apache Kafka",
  "CSS",
  "C#",
  "C++",
  "Deno",
  "Docker",
  "Express.js",
  "Git",
  "Github",
  "GraphQL",
  "HTML",
  "Java",
  "JavaScript",
  "JSON Web Tokens",
  "Postman",
  "Socket.io",
  "Linux",
  "Ubuntu Server",
  "Microservices",
  "MongoDB",
  "MySQL",
  "Next.js",
  "Node.js",
  "OAuth",
  "PostgreSQL",
  "Rust",
  "React",
  "React Native",
  "Redux Hooks",
  "TypeScript",
  "Tailwind",
  "Framer Motion",
  "Material UI",
  "Unity",
];
