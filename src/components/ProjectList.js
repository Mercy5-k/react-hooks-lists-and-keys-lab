import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
 const projectComponents = projects.map((project) => (
    <ProjectItem
      key={project.id}
      name={project.name}
      about={project.about}
      technologies={project.technologies}
    />
  ));

  return (
    <section>
      <h2>My Projects</h2>
      <div className="project-list">{projectComponents}</div>
    </section>
  );
}

export default ProjectList;
