import { projects } from "../lib";
import Header from "../components/Header";
const ProjectsPage = () => {
  return /*html*/ `
    ${Header()}
    ${projects
      .map((project) => {
        return `<div class="project-item">${project.name}</div>`;
      })
      .join("")}
  `;
};

export default ProjectsPage;
