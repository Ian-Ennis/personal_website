import React from "react";

function Welcome({ handleEnterClick }) {
    return (
        <div className="homescreen">
          <img id="home-logo" onClick={handleEnterClick} src="https://imgur.com/WCzlrFx.png" alt="welcome logo"/> 
        </div>
      )
}

export default Welcome