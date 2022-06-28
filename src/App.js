// import logo from './logo.svg';
import './App.css';
import Spline from '@splinetool/react-spline';
import { AboutSection, aboutSection } from './sections/AboutSection'

function App() {
  return (
    <main>
      <div className="App">
        <header className="App-header">
          <p>
            v0.2 of the website
          </p>
        </header>
        <br />
      </div>
      <AboutSection />
    </main>
  );
}

export default App;
