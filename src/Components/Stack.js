import React from "react";

function Stack() {
  const techSkills = [
    { skill: "JavaScript" },
    { skill: "ReactJS" },
    { skill: "Redux" },
    { skill: "Ruby" },
    { skill: "Ruby on Rails" },
    { skill: "HTML5" },
    { skill: "CSS" },
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
    <span key={index} className="skill">
      {s.skill}
    </span>
  ));
  const personalSkill = personalSkills.map((s, index) => (
    <span key={index} className="skill">
      {s.skill}
    </span>
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
