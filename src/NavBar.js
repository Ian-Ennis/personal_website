import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
    <div id="navbar">
          <Link to="/about" className="navbar_link">About</Link>
          <Link to="/projects" className="navbar_link">Projects</Link>
          <Link to="/stack" className="navbar_link">Stack(s)</Link>
          <Link to="/interests" className="navbar_link">Inspirations</Link>
    </div>
  );
}

export default Navbar;
