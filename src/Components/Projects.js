import React from "react";

function Projects() {
  const projectData = [
    {
      title: "Sigma Shipyards",
      stack: "React/Redux with Ruby on Rails API",
      image: "https://imgur.com/BsUdIJj",
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
      title: "Activity Tracker",
      stack: "React with Ruby on Rails API",
      image: "https://imgur.com/t5ToHxX",
      description:
        "A tool to provide fans of physical activity with the ability to record activity sessions for meditation, yoga, and cardio",
      links: {
        front: "https://github.com/Ian-Ennis/activity_tracker",
        back: "https://github.com/Ian-Ennis/activity_tracker_backend",
        demo: "https://github.com/Ian-Ennis/activity_tracker_backend",
      },
      bullets: [
        "Implemented user authentication using JSON Web Tokens",
        "Incorporated Chart.js into ReactJS to render bar charts allowing the user to see a visual history of their activities",
        "Integrated the Bootstrap framework to style buttons and font for added visual appeal",
      ],
    },
    {
      title: "Cozy Cat Cafe",
      stack: "React",
      image: "https://imgur.com/FpF2GY6",
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
      image: "https://imgur.com/6BjmDgr",
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

  return <div></div>;
}

export default Projects;
