import React, { useState } from "react";
import EachProject from "./EachProject";

function Projects() {
  const projectData = [
    {
      title: "Sigma Shipyards",
      stack: "React/Redux with Ruby on Rails API",
      image: "https://imgur.com/J0qcb5j.jpeg",
      description:
        "Game-focused spaceship builder with the purpose of guiding users through a journey in sci-fi space retro-futurism",
      links: {
        front: "https://github.com/Ian-Ennis/sigma_shipyards",
        back: "https://github.com/Ian-Ennis/sigma_shipyards_rails_api",
        demo: "https://www.loom.com/share/62db37678aa34f64b19803c9bded9964",
      },
      bullets: [
        "Integrated Redux to store data from API calls and user selections within the Redux Store",
        "Blended story together with aesthetics and the useSound React hook",
        "Styled using CSS without frameworks to expand creativity and technical efficiency",
      ],
    },
    {
      title: "Leg-Up Activity Tracker",
      stack: "React with Ruby on Rails API",
      image: "https://imgur.com/t5ToHxX.jpeg",
      description:
        "A tool to provide fans of physical activity with the ability to record activity sessions for meditation, yoga, and cardio",
      links: {
        front: "https://github.com/Ian-Ennis/activity_tracker",
        back: "https://github.com/Ian-Ennis/activity_tracker_backend",
        demo: "https://www.loom.com/share/eb54a2c52f2b426290279dc88aeb3f0d",
      },
      bullets: [
        "Implemented user authentication using JSON Web Tokens",
        "Incorporated Chart.js into ReactJS to render bar charts allowing the user to see a visual history of their activities",
        "Integrated the Bootstrap framework to style buttons and font for added visual appeal",
      ],
    },
    {
      title: "Cozy Cat Cafe",
      stack: "React with JSON Server",
      image: "https://imgur.com/FpF2GY6.jpeg",
      description:
        "A friendly place for people to hangout with cats, browse through a collection of books, and submit cat adoption forms",
      links: {
        front: "https://github.com/Ian-Ennis/phase_2_project_cozy_cat_cafe",
        demo: "https://www.loom.com/share/9855a25f7ec34a78be54bb680db0ed98",
      },
      bullets: [
        "Utilized ReactJS with BrowserRouter to enable client-side routing",
        "Created a searchable book library with clickable book synopsis cards",
        "Enabled user submissions of animal adoption form data to persist",
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
        "Styled with CSS Flexbox",
        "Rendered a interactable table according to stored and user-input data",
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
