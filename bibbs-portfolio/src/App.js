import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"

function App() {
  return (
    <div className="App">
      <header>My Portfolio</header>
      <div className='main-container'>
        <About />
        <Skills />
        <Projects />

      </div>

    </div>
  );
}

export default App;
