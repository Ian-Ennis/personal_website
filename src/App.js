import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Stack from "./Components/Stack";
import Interests from "./Components/Interests";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <header id="header">
        <h1>Ian Ennis</h1>
        <h3>Fullstack Web Developer</h3>
        <NavBar />
      </header>
      <div className="routes">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/stack" element={<Stack />} />
          <Route path="/interests" element={<Interests />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
