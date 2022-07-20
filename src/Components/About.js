import React from "react";
import IanEnnis from "../ProfilePhoto/IanEnnis.jpeg";

function About() {
  return (
    <>
      <div id="aboutme">
        <div id="photo_container">
          <img id="photo" src={IanEnnis} alt="picture_of_ian" />
        </div>
        <div id="about">
          <p>
            Full-stack Web Developer with a curiosity for the world and the
            universe. Skills in JavaScript, React/Redux, HTML, CSS, and Ruby on
            Rails, with an eye for design, a background in Environmental Science
            and experience in public service.
          </p>
          <p>
            I have worked with both the National Park and U.S. Fish and Wildlife
            services, as well as local parks departments, contributing to the
            health of the natural environment through horticulture.
          </p>
          <p>
            I am now expanding the ways I can give back to the world by
            exploring the confluence of programming, user experience, and
            positive intentions. I intend to continue helping people and planet
            alike. Come check out my work.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
