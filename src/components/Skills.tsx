import { motion } from "framer-motion";
import { skillGroups } from "../data/portfolio";
import { Section } from "./ui/Section";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Frontend stack built around React product delivery."
      description="Categorized for quick recruiter scanning and deeper engineering review."
    >
      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <motion.article
            key={group.title}
            className="glass-card skill-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <h3>{group.title}</h3>
            <div className="badge-wrap">
              {group.skills.map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
