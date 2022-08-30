import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="app-container">
      <Router>
        <Navbar />
        <About />
        <Skills />
        <Projects />
      </Router>
    </div>
  );
}

export default App;
