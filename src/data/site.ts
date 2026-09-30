import type { NavItem, SiteConfig } from "@/types";
import logoImage from "@/assets/ruba-logo.png";

export const siteConfig: SiteConfig = {
  name: "Ruba",
  shortName: "YN",
  logo: logoImage,
  role: "Frontend Developer",
  tagline:
    "I build fast, accessible interfaces that stay maintainable as they grow.",
  email: "qeshtaruba@gmail.com",
  location: "Gaza",
  url: "https://your-domain.com",
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/rubaqeshta04",
      icon: "github",
      handle: "@rubaqeshta04",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rubaqeshta",
      icon: "linkedin",
      handle: "rubaqeshta",
    },
    {
      label: "Mostaql",
      href: "https://mostaql.com/u/ruba_qeshta",
      icon: "globe",
      handle: "ruba_qeshta",
    },
  ],
  seo: {
    title: "Ruba | Frontend Developer",
    description:
      "Replace this with a 120–160 character description of who you are, what you build, and the technologies you use.",
    keywords: [
      "frontend developer",
      "react developer",
      "typescript",
      "web developer",
      "portfolio",
    ],
    ogImage: logoImage,
  },
};

export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const sectionIds: string[] = [
  "home",
  "about",
  "skills",
  "services",
  "projects",
  "experience",
  "contact",
];
