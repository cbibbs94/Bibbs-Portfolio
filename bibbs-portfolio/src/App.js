import About from "./components/About"
import Skills from "./components/Skills"

function App() {
  return (
    <div className="App">
      <title>Bibbs Portfolio</title>
      <header>My Portfolio</header>
      <div className='main-container'>
        <About/>
        <Skills/>

      </div>

    </div>
  );
}

export default App;
