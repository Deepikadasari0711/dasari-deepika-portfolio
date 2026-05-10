import { useEffect } from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Strengths } from "./components/Strengths";
import { useAppSelector } from "./app/hooks";
import { useBoingSound } from "./hooks/useBoingSound";

export function App() {
  const mode = useAppSelector((state) => state.theme.mode);
  useBoingSound();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", mode === "dark");
  }, [mode]);

  return (
    <div className="app-shell">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Strengths />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
