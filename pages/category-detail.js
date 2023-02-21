import Header from "../components/Header";
import { useEffect, useState } from "../lib";

const DetailCategoryPage = ({ id }) => {
  const [category, setCategory] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3000/categoryProjects/${id}?_embed=projects`)
      .then((response) => response.json())
      .then((data) => setCategory(data));
  }, []);
  return /*html*/ `
    ${Header()}
    <div>
      ${
        category.projects
          ? category.projects.map(
              (item) => `
        <a href="/project/${item.id}">${item.name}</a>
      `
            )
          : ""
      }
    </div>
  `;
};
export default DetailCategoryPage;
