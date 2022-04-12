import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/"> About Me |</Link>
      <Link to="/projects"> Projects |</Link>
      <Link to="/stack"> Stack(s) |</Link>
      <Link to="/interests"> Interests |</Link>
      <Link to="/contact"> Contact </Link>
    </div>
  );
}

export default Navbar;
