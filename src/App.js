import logo from "./logo.svg";
import "./App.css";
import { Route, withRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>

      </header>
      <div className="routes">
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </div>
    </div>
  );
}

export default App;
