import React from "react";

function EachProject({ project, handleProjectClick, selectedProject }) {
  const bulletPoints = project.bullets.map((b, index) => (
    <li key={index}>{b}</li>
  ));

  return (
    <div className="show_projects">
      <h4
        id={project.title}
        className="proj_stack"
        onClick={handleProjectClick}
      >
        {project.title}
      </h4>
      <p id="proj_stack">
        <b>{project.stack}</b>
      </p>
      {selectedProject === project.title ? (
        <div className="shown_project">
          <p id="proj_descr">{project.description}</p>
          <ul id="project_list">{bulletPoints}</ul>
          <img
            className="screenshot"
            src={project.image}
            alt="project_screenshot"
          />
          <div className="filler_container"></div>
          {project.links.url ? (
            <a href={project.links.url}>Webpage | </a>
          ) : null}
          <a href={project.links.front}>GitHub Front End</a>
          {project.links.back ? (
            <a href={project.links.back}> | GitHub Back End </a>
          ) : null}
          {project.links.demo ? <a href={project.links.demo}> | Demo</a> : null}
        </div>
      ) : null}
    </div>
  );
}

export default EachProject;
