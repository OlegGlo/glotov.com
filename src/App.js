// import logo from './logo.svg';
import './App.css';
import { AboutSection } from './sections/AboutSection';
import { IntroSection } from './sections/IntroSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { WorkExperienceSection } from './sections/WorkExperienceSection';

function App() {
  return (
    <main style = {{background: '#0E0E0E'}}>
      <IntroSection />
      <AboutSection />
      <ProjectsSection />
      <WorkExperienceSection />
    </main>
  );
}

export default App;
