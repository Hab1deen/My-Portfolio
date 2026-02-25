import Navbar from './components/Navbar';
import Footer from './components/Footer';
import useTheme from './hooks/useTheme';
import useReveal from './hooks/useReveal';
import usePortfolioData from './hooks/usePortfolioData';
import HomeSection from './sections/HomeSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import ContactSection from './sections/ContactSection';

export default function App() {
  const { isDark, toggleTheme } = useTheme();
  useReveal();
  const { projects, skills } = usePortfolioData();

  return (
    <>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <HomeSection />
        <AboutSection />
        <SkillsSection skills={skills} />
        <ProjectsSection projects={projects} />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
