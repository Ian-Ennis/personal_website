import "./App.css";
import { useState} from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import About from "./Components/About";
import Welcome from "./Components/Welcome";
import Projects from "./Components/Projects";
import Stack from "./Components/Stack";
import Interests from "./Components/Interests";
import Footer from "./Components/Footer";

function App() {
  const [home, setHome] = useState(true)
  const navigate = useNavigate();

  const handleHeaderClick = () => {
    navigate('/')
    window.location.reload();
  }

  function handleEnterClick(e) {
    console.log("tree click")

    if (home) {
      document.getElementById("home-logo").classList = "move"
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
      {home ? null : <header>
        <h1 id="header" onClick={handleHeaderClick}>Ian Ennis</h1>
        <h3>Fullstack Web Developer</h3>
        <NavBar />
      </header>}
      <div className="routes">
        <Routes>
          <Route path="/" element={<Welcome handleEnterClick={handleEnterClick}/>} />
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
