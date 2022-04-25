import React from "react";
import IanEnnis from "../ProfilePhoto/IanEnnis.jpeg"

function About() {
  return (
    <>
    <div id="aboutme">
      <div id="profile_photo">
        <img id="photo" src={IanEnnis} alt="picture_of_ian"/>
      </div>
      <div id="about">
        <p>
          Full-stack Web Developer with a curiosity for the world and the universe.
          Relying on React/Redux, JavaScript, Ruby on Rails, an eye for design,
          and a background in Environmental Science with experience in public
          service.
        </p>
        <p>
          I have worked with both the National Park and U.S. Fish and Wildlife
          services, as well as local parks departments, giving back to nature as
          my goal. I am now expanding the ways I can give back by exploring the
          confluence of programming, user experience, and positive intentions. I
          intend to help to people and planet alike.
        </p>
        <p id="checkout_work">Come check out my work.</p>
      </div>
    </div>
      </>
  );
}

export default About;
