import React from "react";

function EachProject({ project, handleProjectClick, selectedProject }) {
  const bulletPoints = project.bullets.map((b, index) => (
    <li key={index}>{b}</li>
  ));

  return (
    <div className="show_projects">
      <h4 onClick={handleProjectClick} id={project.title}>
        {project.title}
      </h4>
      <span>{project.stack} project</span>
      {selectedProject === project.title ? (
        <div className="shown_project">
          <a href={project.links.front}>GitHub | </a>
          {project.links.back ? (
            <a href={project.links.back}>GitHub Backend | </a>
          ) : null}
          {project.links.demo ? <a href={project.links.demo}>Demo</a> : null}
          <p>{project.description}</p>
          <ul id="project_list">{bulletPoints}</ul>
          <img
            className="screenshot"
            src={project.image}
            alt="project_screenshot"
          />
        </div>
      ) : null}
    </div>
  );
}

export default EachProject;
