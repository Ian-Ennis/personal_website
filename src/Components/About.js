import React from "react";
import IanEnnis from "../ProfilePhoto/IanEnnis.jpeg";

function About() {
  return (
    <>
      <div id="aboutme">
        <div id="profile_photo">
          <img id="photo" src={IanEnnis} alt="picture_of_ian" />
        </div>
        <div id="about">
          <p>
            Full-stack Web Developer with a curiosity for the world and the
            universe. Fluent in JavaScript, React/Redux, HTML, CSS, and Ruby on Rails, with an eye
            for design, a background in Environmental Science and
            experience in public service.
          </p>
          <p>
            I have worked with both the National Park and U.S. Fish and Wildlife
            services, as well as local parks departments, giving back to nature
            as my goal. I am now expanding the ways I can give back to more
            communities by exploring the confluence of programming, user
            experience, and positive intentions. I hope to help to people and
            planet alike.
          </p>
          <p id="checkout_work">Come check out my work.</p>
        </div>
      </div>
    </>
  );
}

export default About;
