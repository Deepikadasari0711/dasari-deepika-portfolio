import { motion } from "framer-motion";
import { experiences } from "../data/portfolio";
import { Section } from "./ui/Section";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Production experience across web, mobile, and admin interfaces."
      description="Impact-focused responsibilities, written for recruiters and technical reviewers."
    >
      <div className="timeline">
        {experiences.map((experience, index) => (
          <motion.article
            key={experience.company}
            className="timeline-item glass-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="timeline-meta">
              <span>{experience.duration}</span>
              <span>{experience.location}</span>
            </div>
            <h3>{experience.role}</h3>
            <strong>{experience.company}</strong>
            <ul>
              {experience.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <div className="badge-wrap">
              {experience.tech.map((tech) => (
                <span key={tech} className="skill-badge">
                  {tech}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
