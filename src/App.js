import "./App.css";
import { useState} from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import About from "./Components/About";
import Entry from "./Components/Entry";
import Projects from "./Components/Projects";
import Stack from "./Components/Stack";
import Interests from "./Components/Inspirations";
import Footer from "./Components/Footer";

function App() {
  const [home, setHome] = useState(true)
  const navigate = useNavigate();

  const handleHeaderClick = () => {
    navigate('/')
    window.location.reload();
  }

  const handleEntryClick = (e) => {
    if (home) {
      document.getElementById("entry_logo").classList = "move"
      console.log(e.target.classList)
      setTimeout(()=>{
        setHome(false)
        navigate('/about')
      }, 2000)
    } else {
      setHome(true)
      navigate('/')
    }
  }

  return (
    <div className="App">
      {home ? null : 
      <header>
        <p id="header" onClick={handleHeaderClick}>Ian Ennis</p>
        <p id="web_developer">Full-stack Web Developer</p>
        <NavBar />
      </header>}
      <div className="routes">
        <Routes>
          <Route path="/" element={<Entry handleEntryClick={handleEntryClick}/>} />
          <Route path="/about" element={<About />} />
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
