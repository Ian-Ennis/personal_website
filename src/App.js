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

  const changeBackground = () => {
    console.log('background')
    // document.body.style.background = "url('https://imgur.com/eksdcAY.jpg') center no-repeat"
  }

  return (
    <div className="App">
      {home ? null : 
      <header>
        <h1 id="header" onClick={handleHeaderClick}>Ian Ennis</h1>
        <h3>Full-stack Web Developer</h3>
        <NavBar changeBackground={changeBackground}/>
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
