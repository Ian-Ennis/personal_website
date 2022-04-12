import React from "react";
import { Link } from "react-router-dom";
// import styled from "styled-components";

function Navbar() {

    // const Wrapper = styled.section`
    //     color: #838583;
    //     // background: #838583;
    // `

  return (
    <div id="navbar">
        <Link to="/" style={{ textDecoration: 'none' }}> About </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/stack"> Stack(s) </Link>
        <Link to="/interests"> Interests </Link>
    </div>
  );
}

export default Navbar;
