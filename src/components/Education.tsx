import { education } from "../data/portfolio";
import { Section } from "./ui/Section";

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Computer science foundation with focused frontend learning.">
      <div className="education-card glass-card">
        <div>
          <h3>{education.degree}</h3>
          <p>{education.institution}</p>
          <span>{education.year}</span>
        </div>
        <div className="badge-wrap">
          {education.certifications.map((certification) => (
            <span key={certification} className="skill-badge">
              {certification}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
