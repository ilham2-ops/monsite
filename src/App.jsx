import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ProjectModal from './components/ProjectModal.jsx';
import ParticlesBackground from './components/ParticlesBackground.jsx';
import { translations } from './data/translations.js';

const App = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'fr');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const t = useMemo(() => translations[lang], [lang]);

  const handleThemeToggle = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      <ParticlesBackground />
      <div className="app">
        <Header
          translations={t}
          lang={lang}
          onLangChange={setLang}
          theme={theme}
          onThemeChange={handleThemeToggle}
        />
        <main id="main">
          <Hero translations={t} />
          <Skills translations={t} />
          <Projects translations={t} onProjectClick={setSelectedProject} />
          <Contact translations={t} />
        </main>
        <Footer />
      </div>
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        techLabel={t.modalTech}
      />
    </>
  );
};

export default App;

