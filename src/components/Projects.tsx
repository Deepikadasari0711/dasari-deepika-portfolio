import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { projects } from "../data/portfolio";
import { Section } from "./ui/Section";

export function Projects() {
  const [project] = projects;

  return (
    <Section
      id="projects"
      eyebrow="Featured Project"
      title="Book My Chef: a real product ecosystem with web and mobile frontend surfaces."
      description="Presented as a case-study style project because it best represents production frontend work."
    >
      <motion.article className="featured-project glass-card" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="project-copy">
          <span className="eyebrow">{project.eyebrow}</span>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <div className="case-grid">
            <div>
              <strong>Problem</strong>
              <p>{project.problem}</p>
            </div>
            <div>
              <strong>My Role</strong>
              <p>{project.role}</p>
            </div>
            <div>
              <strong>Result</strong>
              <p>{project.impact}</p>
            </div>
          </div>
          <div className="badge-wrap">
            {project.tech.map((tech) => (
              <span key={tech} className="skill-badge">
                {tech}
              </span>
            ))}
          </div>
          <div className="project-links">
            {project.links.map((link) => (
              <a key={link.href} className="btn btn-secondary" href={link.href} target="_blank" rel="noreferrer">
                {link.label} <FiExternalLink />
              </a>
            ))}
          </div>
        </div>
        <div className="phone-showcase" aria-label="Book My Chef mobile screenshots">
          {project.images.map((image, index) => (
            <motion.img
              key={image}
              src={image}
              alt={`Book My Chef app screenshot ${index + 1}`}
              loading="lazy"
              animate={{ y: [0, index % 2 === 0 ? -10 : 10, 0] }}
              transition={{ duration: 5 + index * 0.35, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </div>
      </motion.article>
    </Section>
  );
}
