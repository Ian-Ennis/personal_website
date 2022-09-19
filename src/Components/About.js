import React from "react";
import IanEnnis from "../ProfilePhoto/IanEnnis.jpeg";

function About() {
  return (
    <div id="about_me">
      <div id="photo_container">
        <img id="photo" src={IanEnnis} alt="picture_of_ian" />
      </div>
      <div>
        <p>
          Welcome. I am front end web developer with a specialty in ReactJS,
          alongside strong and knowledgable skills in JavaScript, HTML, Vanilla
          CSS, and testing with Jest and React Testing Library. Additional
          skills may be viewed under Stack(s).
        </p>
        <p>
          I come from a design background. I once designed and enhanced
          aesthetics of outdoor spaces in both rural and urban parks for the
          benefit of the general public. What once was a pallet within garden
          design, has become a pallet of front end design. I learn new languages
          and frameworks quickly, and have five years experience collaborating
          with committed teams of people who are similarly driven to create
          quality products for the benefit of helping others.
        </p>
        <p>
          I thoroughly enjoy exploring the confluence of programming, user
          experience, and positive intentions. Through creating intuitive,
          memorable user interfaces, I can continue to give back to my users.
          Come check out my work.
        </p>
      </div>
    </div>
  );
}

export default About;
