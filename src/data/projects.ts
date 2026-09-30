import type { Project } from "@/types";
import bawsalaImage from "@/assets/projects/project-name.png";
import nabdImage from "@/assets/projects/project-name-2.png";
import ranaStoreImage from "@/assets/projects/project-name-3.png";
import fullShopImage from "@/assets/projects/project-name-4.png";
import homyzImage from "@/assets/projects/project-name-5.png";

export const projects: Project[] = [
  {
    id: "bawsala",
    title: "Bawsala — Insurance Claims Management Platform",
    summary:
      "A SaaS platform for managing insurance claims through a connected digital workflow.",
    description:
      "I work as a Front-End Developer, building the insurance company dashboard with React.js and TypeScript, including claim management, field adjuster assignment, user management, and integration with backend data through APIs.",
    image: bawsalaImage,
    type: "SaaS Platform",
    category: "Featured",
    year: "2026 – Present",
    featured: true,
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Redux", "REST APIs"],
    links: {
      github: "https://github.com/InsurFlow-Team/insurflow-frontend.git",
      live: "https://insurflow-dashboard.vercel.app/",
    },
  },
  {
    id: "nabd",
    title: "Nabd: Offline Reporting Platform",
    summary:
      "An offline-first digital reporting platform designed to support reporting and data management in environments where connectivity may be limited.",
    description:
      "The project includes a dashboard and backend components for managing and working with reported data.",
    image: nabdImage,
    type: "Web / Reporting Platform",
    category: "Personal Project",
    year: "2025 – 2026",
    featured: false,
    tech: [
      "React.js",
      "TypeScript",
      "REST APIs",
      "Dashboard",
      "Data Management",
    ],
    links: {
      repositories: [
        {
          label: "Dashboard Code",
          href: "https://github.com/rubaqeshta04/alert-mesh/tree/dashboard",
        },
        {
          label: "Backend Code",
          href: "https://github.com/rubaqeshta04/alert-mesh/tree/backend",
        },
      ],
    },
  },
  {
    id: "rana-store",
    title: "Rana-Store",
    summary:
      "A responsive e-commerce website developed for a client using HTML5, JavaScript, and Tailwind CSS.",
    description:
      "I integrated the frontend with backend services and Supabase to display dynamic data, and troubleshot data integration issues to ensure smooth communication between the frontend and backend services.",
    image: ranaStoreImage,
    type: "E-Commerce Website",
    category: "Client Project",
    year: "2025 – 2026",
    featured: false,
    tech: [
      "HTML5",
      "JavaScript",
      "Tailwind CSS",
      "Supabase",
      "API Integration",
    ],
    links: {
      github: "https://github.com/rubaqeshta04/Rana-Store.git",
      live: "https://rana-store.vercel.app/",
    },
  },
  {
    id: "full-shop",
    title: "Full Shop",
    summary:
      "A responsive e-commerce application built with React.js and Tailwind CSS.",
    description:
      "The project includes reusable components, product browsing, shopping cart, and wishlist functionality, with a focus on responsive design and a clean user experience.",
    image: fullShopImage,
    type: "E-Commerce Web Application",
    category: "Personal Project",
    year: "2025 – 2026",
    featured: false,
    tech: ["React.js", "JavaScript", "Tailwind CSS", "Vite"],
    links: {
      github: "https://github.com/rubaqeshta04/full-shop",
      live: "https://full-shop-v6wn.vercel.app/",
    },
  },
  {
    id: "homyz",
    title: "Homyz — Interactive Real Estate Platform",
    summary:
      "A modern real estate web application for exploring, filtering, saving, and comparing properties.",
    description:
      "Features property filtering by location, price, and property type, comparison for up to three properties, saved favorites, responsive design, and persistent Dark Mode.",
    image: homyzImage,
    type: "Real Estate Web Application",
    category: "Personal Project",
    year: "2026",
    featured: false,
    tech: [
      "React 19",
      "JavaScript",
      "Vite",
      "Tailwind CSS",
      "React Context API",
      "Swiper.js",
    ],
    links: {
      live: "https://area-sense-black.vercel.app/",
    },
  },
];

export const projectFilters: string[] = [
  "All",
  "React",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "API Integration",
];
