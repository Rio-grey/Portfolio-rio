import Header from "../components/Header";
import { useEffect, useState } from "../lib";
const CategoryPage = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/categoryProjects")
      .then((response) => response.json())
      .then((data) => setCategory(data));
  }, []);
  return /*html*/ `
    ${Header()}
    <h1>Projects Page</h1>
    <div class="categories">
      <aside>Lọc theo: </aside>
      ${category.map(
        (item) => /*html*/ `
          <a href="/category/${item.id}">${item.name}</a>
        `
      )}
    </div>
  `;
};
export default CategoryPage;
