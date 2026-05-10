import { motion } from "framer-motion";
import { strengths } from "../data/portfolio";
import { Section } from "./ui/Section";

export function Strengths() {
  return (
    <Section
      id="strengths"
      eyebrow="Strengths"
      title="What I bring to a frontend team."
      description="Clear frontend ownership across UI implementation, architecture, API integration, and delivery quality."
    >
      <div className="strength-grid">
        {strengths.map((strength, index) => {
          const Icon = strength.icon;
          return (
            <motion.article
              key={strength.title}
              className="glass-card strength-card"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              <span className="icon-chip">
                <Icon />
              </span>
              <h3>{strength.title}</h3>
              <p>{strength.description}</p>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
