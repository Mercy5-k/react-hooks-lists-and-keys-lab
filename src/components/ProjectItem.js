import React from "react";

function ProjectItem({ name, about, technologies }) {
  const techSpans = technologies.map((tech) => (
    <span key={tech}>{tech}</span>
  ));

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{techSpans}</div>
    </div>
  );
}

export default ProjectItem;
