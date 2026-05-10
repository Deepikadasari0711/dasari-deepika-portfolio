import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "../data/portfolio";

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <strong>Dasari Deepika</strong>
        <p>Frontend Engineer - React, TypeScript, React Native</p>
      </div>
      <div className="footer-links">
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          <FiLinkedin /> LinkedIn
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer">
          <FiGithub /> GitHub
        </a>
        <a href={`mailto:${profile.email}`}>
          <FiMail /> Email
        </a>
        <a href="#home">
          Top <FiArrowUpRight />
        </a>
      </div>
      <small>© {new Date().getFullYear()} Dasari Deepika. Built with React, TypeScript, Redux, and Tailwind CSS.</small>
    </footer>
  );
}
