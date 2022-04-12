import React from "react";

function EachProject({ project, handleProjectClick, selectedProject }) {
    const bulletPoints = project.bullets.map((b, index) => (<li key={index}>{b}</li>))

    console.log(selectedProject)

  return (
    <div>
        <h4 onClick={handleProjectClick} id={project.title}>{project.title}</h4>
        <span>{project.stack}</span>
        {selectedProject === project.title ? <div><a href={project.links.front}>GitHub | </a>{project.links.back ? <a href={project.links.back}>GitHub Backend | </a> : null}{project.links.demo ? <a href={project.links.demo}>Demo</a> : null}
        <p>{project.description}</p>
        <img className="screenshot" src={project.image} alt="project_screenshot"/>
        <ul id="project_list">
            {bulletPoints}
        </ul>
        </div> : null}
    </div>
  );
}

export default EachProject;
