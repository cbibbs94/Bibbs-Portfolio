import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import LogoHeader from "./components/LogoHeader";


function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <LogoHeader />
        <div className="me-section">
          <About />
          <Skills />
        </div>
        <Projects />

      </div>

    </div>
  );
}

export default App;
