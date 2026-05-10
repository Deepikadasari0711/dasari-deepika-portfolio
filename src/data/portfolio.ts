import {
  FiCode,
  FiCpu,
  FiLayers,
  FiMonitor,
  FiRepeat,
  FiZap,
} from "react-icons/fi";
import type { ExperienceItem, Project, SkillGroup, Strength } from "../types/portfolio";

export const profile = {
  name: "Dasari Deepika",
  title: "Frontend Engineer",
  location: "Hyderabad, India",
  email: "dasarideepika2018@gmail.com",
  phone: "+91 82477 06811",
  linkedin: "https://www.linkedin.com/in/dasari-deepika/",
  github: "#",
  resume: "/assets/resume/Dasari_Deepika_Resume_Updated.pdf",
  summary:
    "Frontend Engineer with 2+ years of experience building responsive web and mobile applications across React.js, TypeScript, Next.js, and React Native. Strong in reusable component development, API integration, state management, accessibility, and performance-focused UI delivery.",
};

export const heroMetrics = [
  { value: "2+", label: "Years frontend experience" },
  { value: "4", label: "Product surfaces shipped" },
  { value: "React", label: "Core engineering stack" },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: ["React.js", "TypeScript", "Next.js", "React Native", "JavaScript ES6+", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Architecture",
    skills: ["Reusable Components", "Component-Based Architecture", "Responsive Design", "Accessibility", "Cross-Browser UI", "Wireframe-to-Code"],
  },
  {
    title: "State & APIs",
    skills: ["Redux", "Redux Thunk", "Context API", "REST APIs", "Swagger", "Firebase Auth", "Firestore", "Firebase Cloud Messaging"],
  },
  {
    title: "Quality & Workflow",
    skills: ["Performance Optimization", "Lazy Loading", "Memoization", "Code Splitting", "Functional Testing", "Unit Testing", "Git", "JIRA", "Agile/Scrum"],
  },
];

export const experiences: ExperienceItem[] = [
  {
    company: "Worthit Consultancy Services Pvt. Ltd.",
    role: "Frontend Engineer / React.js Developer",
    duration: "Mar 2024 - Present",
    location: "Hyderabad, India",
    highlights: [
      "Built and maintained frontend features across Customer Web, Customer Android, Partner Android, and Admin Panel product surfaces.",
      "Developed reusable UI components and modular structures with React.js, TypeScript, Next.js, and React Native.",
      "Integrated Swagger-documented REST APIs, Firestore real-time sync, and Firebase Cloud Messaging for live product flows.",
      "Improved interface responsiveness with lazy loading, memoization, code splitting, browser debugging, and cross-device refinement.",
    ],
    tech: ["React.js", "TypeScript", "Next.js", "React Native", "Redux", "Firebase", "REST APIs"],
  },
  {
    company: "Saanvika Software Solutions",
    role: "Frontend Developer Intern",
    duration: "Nov 2023 - Feb 2024",
    location: "Hyderabad, India",
    highlights: [
      "Developed responsive interfaces using React.js, JavaScript, HTML5, CSS3, Bootstrap, and TypeScript-driven frontend concepts.",
      "Supported UI debugging, browser troubleshooting, and code improvements for mobile, tablet, and desktop layouts.",
      "Collaborated with senior developers in Agile sprints while maintaining source control through Git.",
    ],
    tech: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Git"],
  },
];

export const projects: Project[] = [
  {
    name: "Book My Chef",
    eyebrow: "Featured product ecosystem",
    description:
      "A multi-platform food service product connecting customers with private chef, catering, and gourmet experience services across web and mobile flows.",
    problem:
      "The product needed consistent booking, menu selection, city selection, add-on services, and payment summary flows across customer and partner experiences.",
    role:
      "Contributed frontend implementation across customer-facing web/mobile experiences, reusable UI modules, API-connected flows, state management, and performance-focused delivery.",
    impact:
      "Helped ship a production product ecosystem with responsive interfaces, real-time service behavior, and maintainable frontend structures for faster feature iteration.",
    tech: ["React.js", "TypeScript", "Next.js", "React Native", "Redux", "REST APIs", "Firebase", "Firestore", "FCM"],
    links: [
      { label: "Customer Web", href: "https://customer.bookmychef.app/" },
      { label: "Customer App", href: "https://play.google.com/store/apps/details?id=com.bookmychef.userapp" },
      { label: "Partner App", href: "https://play.google.com/store/apps/details?id=com.bookmychef.partnerapp" },
    ],
    images: [
      "/assets/book-my-chef/home-services.jpeg",
      "/assets/book-my-chef/pick-menu.jpeg",
      "/assets/book-my-chef/confirm-booking.jpeg",
      "/assets/book-my-chef/order-summary.jpeg",
      "/assets/book-my-chef/booking-details.jpeg",
    ],
  },
];

export const strengths: Strength[] = [
  {
    title: "Production UI Implementation",
    description: "Turns product requirements and wireframes into responsive, polished, production-ready interfaces.",
    icon: FiMonitor,
  },
  {
    title: "Reusable Component Systems",
    description: "Builds modular frontend structures that reduce repetition and keep feature delivery maintainable.",
    icon: FiLayers,
  },
  {
    title: "API-Connected Flows",
    description: "Integrates REST APIs, Swagger contracts, Redux data flow, and Firebase services into user-facing journeys.",
    icon: FiRepeat,
  },
  {
    title: "Performance Mindset",
    description: "Applies lazy loading, memoization, code splitting, and debugging discipline to keep interfaces responsive.",
    icon: FiZap,
  },
  {
    title: "Cross-Platform Thinking",
    description: "Works across web and mobile frontend surfaces using React, Next.js, TypeScript, and React Native.",
    icon: FiCpu,
  },
  {
    title: "Clean Engineering Habits",
    description: "Collaborates through Git workflows, code reviews, Agile delivery, and clear component ownership.",
    icon: FiCode,
  },
];

export const education = {
  degree: "B.E. - Computer Science",
  institution: "JNTUH affiliated College, Hyderabad",
  year: "2023",
  certifications: ["Full-Stack React Development - Udemy", "Firebase & Firestore Fundamentals"],
};
