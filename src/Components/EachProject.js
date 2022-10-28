import { useState } from 'react'
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

function EachProject({ project, handleProjectClick, selectedProject }) {
  const [isOpen, setIsOpen] = useState(false);

  const bulletPoints = project.bullets.map((b, index) => (
    <li key={index}>{b}</li>
  ));

  return (
    <div className="show_projects">
      <h4
        id={project.title}
        onClick={handleProjectClick}
      >
        {project.title}
      </h4>
      <p id="project_stack">
        <b>{project.stack}</b>
      </p>
      {selectedProject === project.title ? (
        <div className="shown_project">
          <p id="project_descr">{project.description}</p>
          <ul id="project_list">{bulletPoints}</ul>
          <img
            className="screenshot"
            src={project.image}
            alt="project_screenshot"
            onClick={() => setIsOpen(true)}
          />
          {isOpen && <Lightbox
            mainSrc={project.image}
            enableZoom={false}
            imageTitle={`Preview: ${project.title}`}
            imageCaption={`Project Description: ${project.description}`}
            closeLabel={`Close preview of ${project.title}`}
            onCloseRequest={() => setIsOpen(false)}
          />}
          <div className="filler_container"></div>
          {project.links.url ? (
            <a href={project.links.url} target="_blank">Webpage | </a>
          ) : null}
          <a href={project.links.front} target="_blank">GitHub Front End</a>
          {project.links.back ? (
            <a href={project.links.back} target="_blank"> | GitHub Back End </a>
          ) : null}
          {project.links.demo ? <a href={project.links.demo} target="_blank"> | Demo</a> : null}
        </div>
      ) : null}
    </div>
  );
}

export default EachProject;
