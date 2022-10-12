import { useState } from "react";
import EachProject from "./EachProject";

function Projects() {
  const [showDetails, setShowDetails] = useState(null);

  const projectData = [
    {
      title: "Flight Horizons",
      stack: "React frontend with Jest, React Testing Library (RTL) and AWS Amplify",
      image: "https://portfolio-ian-ennis.s3.us-west-2.amazonaws.com/fh_home_screenshot.png",
      description:
        "Spaceflight launch tracker with launch vehicles, dates, sites, and mission information for spaceflight enthusiasts",
      links: {
        url: "https://flight-horizons.d24la999gwql7c.amplifyapp.com/",
        front: "https://github.com/Ian-Ennis/flight_horizons",
      },
      bullets: [
        "Ensured correct UI render using inline snapshot tests from React Testing Library",
        "Mocked fetch requests using Jest to eliminate API calls during testing",
        "Rendered CSS animations on initial page load using session storage; tested timeout functionality using Jest fake timers",
        "Deployed to AWS Amplify Studio using a Continuous Integration and Continuous Delivery (CI/CD) pipeline",
      ],
    },
    {
      title: "Evocation Station",
      stack: "React front end with Ruby on Rails API and AWS file storage",
      image: "https://portfolio-ian-ennis.s3.us-west-2.amazonaws.com/es_signup.png",
      description:
        "Where users can create and customize evocative, meaningful collections of images, sounds, and writings",
      links: {
        url: "https://evocation-station.herokuapp.com/",
        front: "https://github.com/Ian-Ennis/evocation_station",
        back: "https://github.com/Ian-Ennis/evocation_station_rails_API",
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
      image: "https://portfolio-ian-ennis.s3.us-west-2.amazonaws.com/ss_shipyard.png",
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
      image: "https://portfolio-ian-ennis.s3.us-west-2.amazonaws.com/at_description_with_chart.png",
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
  ];
  
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

  return (
  <div id="projects">{project}</div>
  )
}

export default Projects;
