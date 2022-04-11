import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Interests from "./Components/Interests";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Ian Ennis</h1>
        <h3>Fullstack Web Developer</h3>
        <NavBar />
      </header>
      <div className="routes">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
