import React, { useState } from "react";
import EachProject from "./EachProject";

function Projects() {
  
  const projectData = [
    {
      title: "Evocation Station",
      stack: "React front end with Ruby on Rails API and AWS file storage",
      image: "https://imgur.com/XXDgnSp.jpeg",
      description:
        "Where users can create and customize evocative, meaningful collections of images, sounds, and writings",
      links: {
        url: "https://evocation-station.herokuapp.com/",
        front: "https://github.com/Ian-Ennis/evocation_station",
        demo: "https://www.loom.com/share/874b8157ebd84b1581e79de22f53a5e0",
      },
      bullets: [
        "Implemented user authentication through session information storage within client-side cookies for user login",
        "Parsed HTML from TinyMCE rich text editor to render submitted user text with custom formatting retained",
        "Configured AWS S3 bucket to store and retrieve image and audio files for improved performance and data reliability",
      ],
    },
    {
      title: "Sigma Shipyards",
      stack: "React/Redux front end with Ruby on Rails API",
      image: "https://imgur.com/WSzd8JR.jpeg",
      description:
        "Game-focused spaceship builder with the purpose of guiding users through a journey in sci-fi space retro-futurism",
      links: {
        front: "https://github.com/Ian-Ennis/sigma_shipyards",
        back: "https://github.com/Ian-Ennis/sigma_shipyards_rails_api",
        demo: "https://www.loom.com/share/62db37678aa34f64b19803c9bded9964",
      },
      bullets: [
        "Dispatched actions to reducer functions with Redux Toolkit to store frequently-updated, widely-used application state",
        "Incorporated common UI design principles into vanilla CSS to create a consistent, visually-appealing user interface",
        "Mapped URL resources to corresponding controller actions in a Ruby on Rails RESTful API",
      ],
    },
    {
      title: "Leg-Up Activity Tracker",
      stack: "React front end with Ruby on Rails API",
      image: "https://imgur.com/t5ToHxX.jpeg",
      description:
        "A tool to provide fans of physical activity with the ability to record activity sessions for meditation, yoga, and cardio",
      links: {
        front: "https://github.com/Ian-Ennis/activity_tracker",
        back: "https://github.com/Ian-Ennis/activity_tracker_backend",
        demo: "https://www.loom.com/share/eb54a2c52f2b426290279dc88aeb3f0d",
      },
      bullets: [
        "Utilized client-side routing with React Router for programmatic navigation and conditional component rendering",
        "Passed user input data into open-source HTML5 charts (Chart.js) to render visual records reflecting server-side data",
        "Integrated lightweight, responsive, open-source stylesheets to style raw HTML elements within the user interface",
      ],
    },
    {
      title: "Starvault",
      stack: "React",
      image: "https://imgur.com/6BjmDgr.jpeg",
      description:
        "A place for amateur astronomers to upload their interstellar  discoveries",
      links: {
        front: "https://github.com/Ian-Ennis/star_vault",
      },
      bullets: [
          "Rendered a modifiable table reflective of stored server information",
          "Styled with CSS using Flexbox",
      ],
    },
  ];
  
  const [showDetails, setShowDetails] = useState(null);

  function handleProjectClick(e) {
    e.preventDefault();
    
    if (showDetails !== e.target.id) {
        setShowDetails(e.target.id)
    } else {
        setShowDetails(null);
    }
  }

  const project = projectData.map((p, index) => (
    <EachProject
      key={index}
      project={p}
      handleProjectClick={handleProjectClick}
      selectedProject={showDetails}
    />
  ));

  return <div className="project_descriptions">{project}</div>;
}

export default Projects;
