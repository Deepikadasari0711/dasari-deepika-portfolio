import { useState } from "react";
import { FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import { profile } from "../data/portfolio";
import { SoundToggle } from "./ui/SoundToggle";
import { ThemeToggle } from "./ui/ThemeToggle";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Dasari Deepika home">
        <span>DD</span>
        <strong>Dasari Deepika</strong>
      </a>
      <nav aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
          <FiLinkedin />
        </a>
        <a href={profile.github} aria-label="GitHub profile">
          <FiGithub />
        </a>
        <SoundToggle />
        <ThemeToggle />
        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen((current) => !current)}
          type="button"
        >
          {isMenuOpen ? <FiX aria-hidden /> : <FiMenu aria-hidden />}
        </button>
      </div>
      <div className={`mobile-nav-panel ${isMenuOpen ? "is-open" : ""}`} id="mobile-navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>
            {item.label}
          </a>
        ))}
        <div className="mobile-social-links">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" onClick={() => setIsMenuOpen(false)}>
            LinkedIn
          </a>
          <a href={profile.github} onClick={() => setIsMenuOpen(false)}>
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}
