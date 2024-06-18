import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

import ecommercereact from '@/public/ecommercereact.png'
import oldportfolio from '@/public/oldportfolio.png'
import photopaty from '@/public/photopaty.png'
import portfolioreact from '@/public/portfolioreact.png'
import tictactoe from '@/public/tictactoe.png'
import openai from '@/public/openai.png'

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
];

export const projectsData = [
  {
    title: "Ropinha Ecommerce",
    description:
      "Proyecto de e-commerce pensado para trabajar en un proyecto de backend con Node JS, completamente funcional.",
    tags: ["React", "Material UI"],
    imageUrl: ecommercereact,
  },
  {
    title: "Photopaty",
    description:
      "Proyecto de consumo de Unsplash API. Página principal con un conjunto de fotos aleatorias y buscador funcional.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: photopaty,
  },
  {
    title: "OpenAI",
    description:
      "Consumo de OpenAI API, la a través de la cual distintos headers puede crearse una inteligencia artificial a medida.",
    tags: ["React", "Material UI"],
    imageUrl: openai ,
  },
  {
    title: "TicTacToe",
    description:
      "Proyecto de ta-te-ti creado de forma manual con animaciones con puro CSS para controlar y manejar arrays.",
    tags: ["React", "CSS", "JavaScript"],
    imageUrl: tictactoe ,
  },
  {
    title: "First Portfolio",
    description:
      "Primer portfolio personal con animaciones realizadas sin libreria en CSS.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: oldportfolio ,
  },
  {
    title: "Portfolio React",
    description:
      "Segundo portfolio realizado con ReactJS como base, MUI como libreria de diseño y Framer Motion para las animaciones.",
    tags: ["React", "Material UI", "Framer Motion"],
    imageUrl: portfolioreact ,
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "Material UI",
  "Framer Motion",
];