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
import ecommercemacowens from '@/public/ecommercemacowens.png'

export const links = [
  {
    name: "Inicio",
    hash: "#home",
  },
  {
    name: "Sobre mi",
    hash: "#about",
  },
  {
    name: "Proyectos",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contacto",
    hash: "#contact",
  },
];

// src/data/projectsData.js

export const projectsData = [
  {
    title: "We Nima — Landing Page",
    period: "Sep 2025 – Presente",
    url: 'https://wenimaestudio.com/', // agregá link cuando esté online
    bullets: [
      "Landing orientada a conversión.",
      "Next.js + Tailwind + Motion.",
      "SEO técnico y Core Web Vitals.",
    ],
    tags: ["Next.js", "Tailwind", "Framer Motion", "SEO", "CWV"],
    posterUrl: "/wenimacover.webp",
    videoUrl: "/videos/portfoliowenima.mp4",
  },
  {
    title: "ALOÑA — Desarrollo Web (mejoras continuas)",
    period: "Feb 2025 – Presente",
    url: "https://www.alona.com.ar/",
    bullets: [
      "Evolución del sitio por sprints.",
      "CMS de Blog en progreso.",
      "Pixel-perfect y responsive 100%.",
    ],
    tags: ["Next.js", "Tailwind", "Strapi", "Core Web Vitals"],
    posterUrl: "/covervideoalona.png",
    videoUrl: "/videos/portfolioalona.mp4",
  },
  {
    title: "Supply Argentina — Desarrollo Web",
    period: "Ene 2025 – Feb 2025",
    url: "https://supplyargentina.com.ar/",
    bullets: [
      "Sitio completo para plásticos.",
      "CMS autogestionable de productos.",
      "Performance + SEO on-page.",
    ],
    tags: ["Next.js", "Tailwind", "Strapi", "SEO"],
    posterUrl: "/supplycover.webp",
    videoUrl: "/videos/portfoliosupply.mp4",
  },
  {
    title: "BelYoga — Desarrollo Web",
    period: "Dic 2024 – Ene 2025",
    url: "https://www.belyogaespacio.com/",
    bullets: [
      "Web completa en colaboración.",
      "Usabilidad mobile prioritaria.",
      "Responsive 100% y SEO base.",
    ],
    tags: ["Next.js", "Tailwind", "Accesibilidad", "SEO"],
    posterUrl: "/belyogacover.webp",
    videoUrl: "/videos/portfoliobelyoga.mp4",
  },
  {
    title: "Soluciones Digitales — Chatbots con n8n",
    period: "Ago 2025 – Presente",
    url: undefined, // sin link = sin botón
    bullets: [
      "Chatbots para WhatsApp y web.",
      "Integración con APIs de IA.",
      "Captura y scoring de leads.",
    ],
    tags: ["n8n", "WhatsApp", "OpenAI", "Automatización"],
    posterUrl: "/makecover.webp",
    videoUrl: "/videos/portfoliomake.mp4",
  },
];


export const skillsData = [
  "React.Js",
  "Next.Js",
  "JavaScript",
  "Git",
  "Supabase",
  "Firebase",
  "Strapi",
  "API REST",
  "Tailwind CSS",
  "Material UI",
  "Bootstrap",
  "Framer Motion",
  "GSAP",
  "React Lenis",
];