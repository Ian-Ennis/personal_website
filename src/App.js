import "./index.css";
import { useNavigate, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import About from "./Components/About";
import Entry from "./Components/Entry";
import Projects from "./Components/Projects";
import Stack from "./Components/Stack";
import Interests from "./Components/Inspirations";
import Footer from "./Components/Footer";

function App() {
  const navigate = useNavigate();

  const handleHeaderClick = () => {
    window.sessionStorage.clear()
    navigate('/')
  }

  const handleEntryClick = () => {
    document.getElementById("entry_logo").classList = "move"
    setTimeout(()=>{
      window.sessionStorage.setItem("retain_header", 1)
      navigate('/about')
    }, 2000)
  }

  return (
    <div className="App">
      {!window.sessionStorage.getItem("retain_header") ? null : 
      <header>
        <p id="header" onClick={handleHeaderClick}>Ian Ennis</p>
        <p id="web_developer">Front End Web Developer</p>
        <NavBar />
      </header>}
        <Routes>
          <Route path="/" element={<Entry handleEntryClick={handleEntryClick}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/stack" element={<Stack />} />
          <Route path="/inspirations" element={<Interests />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
