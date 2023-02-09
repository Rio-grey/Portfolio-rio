import Header from "../components/Header";
import ProjectGallery from "../components/ProjectGallery";
import ProjectInfo from "../components/ProjectInfo";
import { projects } from "../data";
import { router } from "../lib";
const DetailProjectPage = ({ data: { id } }) => {
  // find
  const currentProject = projects.find((project) => project.id == id);
  if (!currentProject) return router.navigate("/projects");
  return /*html*/ `
    ${Header()}
    <div class="projectGallery">
      ${ProjectGallery({
        img: "https://source.unsplash.com/random",
      })}
    </div>
    <div class="projectInfo">
      ${ProjectInfo(currentProject)}
    </div>
  `;
};
export default DetailProjectPage;
