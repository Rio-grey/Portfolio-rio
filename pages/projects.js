import { projects } from "../data";
import Header from "../components/Header";
const ProjectsPage = () => {
  return /*html*/ `
    ${Header()}
    ${projects
      .map((project) => {
        return `<div class="project-item"><a href="/project/${project.id}">${project.name}</a></div>`;
      })
      .join("")}
  `;
};

export default ProjectsPage;
