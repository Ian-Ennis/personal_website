import React from "react";

function Stack() {
  const techSkills = [
    { id: "skillImg", skill: "JavaScript", icon: "https://imgur.com/DvpgXly.jpeg", alt: "js"},
    { id: "skillImg", skill: "ReactJS", icon: "https://imgur.com/KzTnCzI.jpeg", alt: "react"},
    { id: "skillImg", skill: "Redux", icon: "https://imgur.com/1aPso9n.jpeg", alt: "redux"},
    { id: "skillImg", skill: "Ruby", icon: "https://imgur.com/knqk4e6.jpeg", alt: "ruby" },
    { id: "skillImg", skill: "Ruby on Rails", icon: "https://imgur.com/pC3M5Jk.jpeg", alt: "rails"},
    { id: "skillImg", skill: "AWS S3", icon: "https://imgur.com/YQHKAnG.jpeg", alt: "aws_s3"},
    { id: "skillImg", skill: "HTML5", icon: "https://imgur.com/Bp2ov10.jpeg", alt: "html5"},
    { id: "skillImg", skill: "CSS", icon: "https://imgur.com/ToC6ujR.jpeg", alt: "css"},
    { id: "skillImg", skill: "SQL", icon: "https://imgur.com/ppLptA3.jpeg", alt: "sql"},
  ];

  const personalSkills = [
    { skill: "Active listening" },
    { skill: "Problem solving" },
    { skill: "Collaborating" },
    { skill: "Empathy" },
    { skill: "Integrity" },
    { skill: "Accountability" },
    { skill: "Adaptability" },
    { skill: "Organization" },
  ];

  const techSkill = techSkills.map((s, index) => (
    <p key={index} className="skill">
      <img id={s.id} src={s.icon} alt={s.alt}/>
      {s.skill}
    </p>
  ));
  const personalSkill = personalSkills.map((s, index) => (
    <p key={index} className="skill">
      {s.skill}
    </p>
  ));

  return (
    <div id="stacks">
      <div id="tech_stack">
        <h4>Tech Stack</h4>
        {techSkill}
      </div>
      <div id="personal_stack">
        <h4>Personal Stack</h4>
        {personalSkill}
      </div>
    </div>
  );
}

export default Stack;
