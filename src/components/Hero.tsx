import { motion } from "framer-motion";
import { FiArrowDown, FiDownload, FiMail } from "react-icons/fi";
import { heroMetrics, profile } from "../data/portfolio";
import { HeroProfilePhoto } from "./HeroProfilePhoto";

const stack = ["React", "TypeScript", "Next.js", "React Native", "Redux", "Firebase"];

export function Hero() {
  return (
    <section id="home" className="hero section-shell">
      <div className="hero-content">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="eyebrow">Frontend Engineer - React, TypeScript, Product UI</span>
          <h1>Building production-ready interfaces that feel sharp, scalable, and easy to use.</h1>
          <p>
            I am {profile.name}, a frontend engineer focused on responsive UI implementation, reusable component
            architecture, API-connected product flows, and performance-minded React delivery.
          </p>
        </motion.div>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.55 }}
        >
          <a className="btn btn-primary" href="#projects">
            View Projects <FiArrowDown />
          </a>
          <a className="btn btn-resume" href={profile.resume} download>
            Download Resume <FiDownload />
          </a>
          <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
            Contact Me <FiMail />
          </a>
        </motion.div>

        <div className="metric-grid" aria-label="Professional highlights">
          {heroMetrics.map((metric) => (
            <div key={metric.label} className="metric-card">
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <HeroProfilePhoto />
        <div className="code-panel glass-card">
          <div className="panel-dots" aria-hidden>
            <span />
            <span />
            <span />
          </div>
          <pre>
            <code>{`const engineer = {
  stack: "React + TypeScript",
  focus: ["UI craft", "Performance"],
  ships: "clean production flows"
};`}</code>
          </pre>
        </div>
        <div className="stack-cloud">
          {stack.map((item, index) => (
            <motion.span
              key={item}
              animate={{ y: [0, index % 2 === 0 ? -8 : 8, 0] }}
              transition={{ duration: 3 + index * 0.2, repeat: Infinity, ease: "easeInOut" }}
            >
              {item}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
