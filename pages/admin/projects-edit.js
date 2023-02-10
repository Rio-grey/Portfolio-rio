import { useEffect, router, useState } from "../../lib";
// import { projects } from "../../data";
const AdminEditProjectPage = ({ id }) => {
  const [project, setProject] = useState({});
  // lấy ra dữ liệu của projects trong localStorage
  // const projects = JSON.parse(localStorage.getItem("projects")) || [];
  // tìm projects theo id
  // const currentProject = projects.find((project) => project.id == id);
  useEffect(() => {
    fetch(`http//localhost:3000/projects/${id}`)
      .then((response) => response.json())
      .then((data) => setProject(data));
  }, []);
  useEffect(() => {
    const form = document.getElementById("form-add");
    const projectName = document.querySelector("#project-name");
    form.addEventListener("submit", (e) => {
      // chặn sự kiện reload
      e.preventDefault();
      // Tạo ra project mới
      const formData = {
        name: projectName.value,
      };
      fetch(`http://localhost:3000/projects/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // '{'a': '10'}'
      }).then(() => router.navigate("/admin/projects"));
    });
  });
  return /*html*/ `
    <div class="container">
      <h1>Sửa sản phẩm</h1>
      <form id="form-add">
        <div class="form-group">
          <label class="form-label" for="exampleInputEmail1">Tên dự án</label>
          <input type="text" class="form-control" id="project-name" value="${currentProject.name}"/>
        </div>
        <button type="submit" class="btn btn-primary">Edit</button>
      </form>
    </div>
  `;
};

export default AdminEditProjectPage;
