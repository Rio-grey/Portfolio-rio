import { projects } from "../data";
const ProjectList = () => {
  return /*html*/ `
    ${projects
      .map((project) => {
        return /*html*/ `
        <div class="project-item">
          <a href="/project/${project.id}">${project.name}</a>
        </div>
      `;
      })
      .join("")}
  `;
};
export default ProjectList;
