import { motion } from "framer-motion";
import { Section } from "./ui/Section";

const highlights = [
  "Frontend delivery across customer web, customer Android, partner Android, and admin panel surfaces.",
  "Comfortable translating wireframes and product requirements into polished, responsive interfaces.",
  "Strong practical experience with Redux, Context API, REST APIs, Firebase, and production debugging.",
  "Focused on maintainable UI systems, clean component boundaries, accessibility, and responsive behavior.",
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="A frontend engineer who cares about both product polish and code quality."
      description="Recruiters should quickly see the pattern: I build useful frontend systems, not just screens."
    >
      <div className="about-grid">
        <motion.article className="glass-card about-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p>
            I have 2+ years of experience building scalable web and mobile interfaces with React.js, TypeScript,
            and React Native. My work sits close to real product delivery: booking flows, menu selection,
            live updates, API integrations, reusable components, and responsive layouts that need to work smoothly
            across devices.
          </p>
          <p>
            I bring a practical frontend mindset: clear components, predictable data flow, polished interaction
            details, and performance choices that make product experiences feel reliable.
          </p>
        </motion.article>
        <div className="highlight-list">
          {highlights.map((item, index) => (
            <motion.div
              key={item}
              className="highlight-item"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <span>0{index + 1}</span>
              <p>{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
