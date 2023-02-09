import Header from "../components/Header";
import { projects } from "../data";
import { router } from "../lib";
const DetailProjectPage = ({ data: { id } }) => {
  const currentProject = projects.find((project) => project.id == id);
  if (!currentProject) return router.navigate("/projects");
  return `
    ${Header()}
    <h1>${currentProject.name}</h1>
  `;
};
export default DetailProjectPage;
