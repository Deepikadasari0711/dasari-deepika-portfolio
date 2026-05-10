import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { profile } from "../data/portfolio";
import { Section } from "./ui/Section";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Open to frontend roles where UI quality and product delivery matter."
      description="The fastest way to reach me is email or LinkedIn."
    >
      <div className="contact-grid">
        <div className="glass-card contact-card">
          <a href={`mailto:${profile.email}`}>
            <FiMail /> {profile.email}
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
            <FiPhone /> {profile.phone}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <FiLinkedin /> LinkedIn
          </a>
          <a href={profile.github}>
            <FiGithub /> GitHub coming soon
          </a>
          <span>
            <FiMapPin /> {profile.location}
          </span>
        </div>
        <form className="glass-card contact-form" action={`mailto:${profile.email}`} method="post" encType="text/plain">
          <label>
            Name
            <input name="name" type="text" placeholder="Your name" />
          </label>
          <label>
            Email
            <input name="email" type="email" placeholder="you@company.com" />
          </label>
          <label>
            Message
            <textarea name="message" placeholder="Tell me about the role or project." rows={5} />
          </label>
          <button className="btn btn-primary" type="submit">
            Send Message <FiMail />
          </button>
        </form>
      </div>
    </Section>
  );
}
