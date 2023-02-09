import Header from "../components/Header";
import { projects } from "../data";
const DetailProjectPage = () => {
  const currentProject = projects.find((project) => project.id == 2);
  return `
    ${Header()}
    <h1>${currentProject.name}</h1>
  `;
};
export default DetailProjectPage;
