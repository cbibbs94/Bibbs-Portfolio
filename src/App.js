import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import LogoHeader from "./components/LogoHeader";
import ContactBar from "./components/ContactBar";


function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <LogoHeader />
        <ContactBar />
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
