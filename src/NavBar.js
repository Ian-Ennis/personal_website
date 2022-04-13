import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
    <div id="navbar">
          <Link to="/"> About </Link>
          <Link to="/projects"> Projects </Link>
          <Link to="/stack"> Stack(s) </Link>
          <Link to="/interests"> Interests </Link>
    </div>
  );
}

export default Navbar;
